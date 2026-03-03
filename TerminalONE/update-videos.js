#!/usr/bin/env node

/**
 * TerminalONE Video Updater - Scraping Edition (No API Key Required)
 *
 * Scrapes YouTube search results to find aviation videos
 * and adds them to your TerminalONE site automatically.
 *
 * Run:   node update-videos.js
 * Auto:  Set up a cron job or launchd (see SETUP-AUTO-UPDATE.md)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  videosPerRun: 5,
  maxTotalVideos: 500,
};

// Categories and their search terms
const CATEGORIES = {
  'plane-spotting': {
    name: 'Plane Spotting',
    searchQuery: 'plane spotting 4K 2025',
    keywords: ['plane spotting', 'spotting', 'airport', 'planespotting', 'spotter'],
  },
  'cockpit': {
    name: 'Cockpit',
    searchQuery: 'cockpit view landing pilot POV',
    keywords: ['cockpit', 'pilot view', 'flight deck', 'captain', 'pilot pov'],
  },
  'flight-reviews': {
    name: 'Flight Reviews',
    searchQuery: 'airline flight review first class business class 2025',
    keywords: ['review', 'flight review', 'trip report', 'business class', 'first class', 'economy'],
  },
  'landings': {
    name: 'Landings',
    searchQuery: 'airplane landing crosswind 4K',
    keywords: ['landing', 'approach', 'touchdown', 'crosswind landing'],
  },
  'takeoffs': {
    name: 'Takeoffs',
    searchQuery: 'airplane takeoff departure 4K',
    keywords: ['takeoff', 'take off', 'departure', 'climb'],
  },
  'boeing': {
    name: 'Boeing',
    searchQuery: 'boeing 737 777 787 747 flight',
    keywords: ['boeing', '737', '747', '757', '767', '777', '787', 'dreamliner'],
  },
  'airbus': {
    name: 'Airbus',
    searchQuery: 'airbus a320 a350 a380 flight',
    keywords: ['airbus', 'a320', 'a321', 'a330', 'a350', 'a380', 'a220'],
  },
  'a380-painting': {
    name: 'Fresh Liveries',
    searchQuery: 'A380 painting livery timelapse aircraft repaint',
    keywords: ['painting', 'livery', 'repaint', 'paint shop', 'paint job', 'new livery', 'rollout'],
  },
  'private-jets': {
    name: 'Private Jets',
    searchQuery: 'private jet gulfstream tour interior',
    keywords: ['private jet', 'gulfstream', 'bombardier', 'citation', 'learjet', 'bizjet', 'business jet'],
  },
  'helicopters': {
    name: 'Helicopters',
    searchQuery: 'helicopter flight aviation pilot',
    keywords: ['helicopter', 'heli', 'chopper', 'rotor'],
  },
  'air-shows': {
    name: 'Air Shows',
    searchQuery: 'air show aerobatics blue angels thunderbirds 2025',
    keywords: ['air show', 'airshow', 'aerobatic', 'blue angels', 'thunderbirds', 'red arrows', 'display'],
  },
  'flight-sim': {
    name: 'Flight Sim',
    searchQuery: 'flight simulator msfs 2024 realistic',
    keywords: ['flight sim', 'simulator', 'msfs', 'x-plane', 'xplane', 'fs2020', 'flight simulation'],
  },
  'military': {
    name: 'Military',
    searchQuery: 'military aircraft fighter jet F-35 F-22',
    keywords: ['military', 'fighter', 'f-16', 'f-22', 'f-35', 'air force', 'navy', 'combat'],
  },
};

const BASE_DIR = __dirname;
const TRACKER_FILE = path.join(BASE_DIR, 'video-tracker.json');

function loadTracker() {
  if (fs.existsSync(TRACKER_FILE)) {
    return JSON.parse(fs.readFileSync(TRACKER_FILE, 'utf8'));
  }
  return {
    videos: [],
    videoData: {},
    lastUpdate: null,
    categoryIndex: 0,
  };
}

function saveTracker(tracker) {
  tracker.lastUpdate = new Date().toISOString();
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(tracker, null, 2), 'utf8');
}

function detectCategory(title, description = '') {
  const text = (title + ' ' + description).toLowerCase();
  const matches = [];

  for (const [catId, cat] of Object.entries(CATEGORIES)) {
    for (const keyword of cat.keywords) {
      if (text.includes(keyword.toLowerCase())) {
        matches.push(catId);
        break;
      }
    }
  }

  return matches.length > 0 ? matches : ['plane-spotting'];
}

function parseViewCount(viewText) {
  if (!viewText) return { formatted: '0', raw: 0 };

  const text = viewText.toLowerCase().replace(/,/g, '');
  let num = 0;

  if (text.includes('k')) {
    num = parseFloat(text) * 1000;
  } else if (text.includes('m')) {
    num = parseFloat(text) * 1000000;
  } else if (text.includes('b')) {
    num = parseFloat(text) * 1000000000;
  } else {
    num = parseInt(text.replace(/[^0-9]/g, '')) || 0;
  }

  let formatted;
  if (num >= 1000000) {
    formatted = (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    formatted = Math.floor(num / 1000) + 'K';
  } else {
    formatted = num.toString();
  }

  return { formatted, raw: Math.floor(num) };
}

function isTrending(viewCount) {
  return viewCount > 500000;
}

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    };

    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrapeYouTubeSearch(query, existingIds) {
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

  console.log(`  Searching: "${query}"...`);

  try {
    const html = await httpsGet(searchUrl);

    const jsonMatch = html.match(/var ytInitialData = ({.*?});/s);
    if (!jsonMatch) {
      console.log('  Could not find video data — YouTube may have changed their page structure.');
      return [];
    }

    const data = JSON.parse(jsonMatch[1]);
    const videos = [];

    const contents = data?.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents;
    if (!contents) {
      console.log('  Unexpected page structure.');
      return [];
    }

    for (const section of contents) {
      const items = section?.itemSectionRenderer?.contents;
      if (!items) continue;

      for (const item of items) {
        const videoRenderer = item?.videoRenderer;
        if (!videoRenderer) continue;

        const videoId = videoRenderer.videoId;
        if (existingIds.includes(videoId)) continue;

        const title = videoRenderer.title?.runs?.[0]?.text || 'Untitled';
        const channelName = videoRenderer.ownerText?.runs?.[0]?.text || 'Unknown Channel';
        const viewCountText = videoRenderer.viewCountText?.simpleText || videoRenderer.viewCountText?.runs?.[0]?.text || '0 views';
        const duration = videoRenderer.lengthText?.simpleText || '0:00';
        const publishedText = videoRenderer.publishedTimeText?.simpleText || 'Recently';

        const viewData = parseViewCount(viewCountText);
        const categories = detectCategory(title);
        const trending = isTrending(viewData.raw);

        videos.push({
          id: videoId,
          title,
          channelTitle: channelName,
          duration,
          viewCount: viewData.formatted,
          rawViews: viewData.raw,
          publishedAgo: publishedText,
          categories,
          trending,
        });

        if (videos.length >= 10) break;
      }
      if (videos.length >= 10) break;
    }

    return videos;
  } catch (error) {
    console.error('  Error scraping YouTube:', error.message);
    return [];
  }
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function addVideoCardToIndex(video) {
  const indexPath = path.join(BASE_DIR, 'index.html');
  let content = fs.readFileSync(indexPath, 'utf8');

  const categoriesAttr = video.categories.join(' ');
  const trendingAttr = video.trending ? 'true' : 'false';

  const newCard = `
      <div class="video-card" data-categories="${categoriesAttr}" data-trending="${trendingAttr}" data-views="${video.rawViews}" onclick="window.location.href='videos.html?v=${video.id}'">
        <div class="thumbnail">
          <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="Video thumbnail" loading="lazy">
          <span class="duration">${escapeHtml(video.duration)}</span>
          ${video.trending ? '<span class="trending-badge">\uD83D\uDD25</span>' : ''}
        </div>
        <div class="video-info">
          <div class="channel-avatar">${getInitials(video.channelTitle)}</div>
          <div class="video-details">
            <div class="video-title">${escapeHtml(video.title.substring(0, 70))}</div>
            <div class="video-meta">
              <div class="channel-name">${escapeHtml(video.channelTitle)}</div>
              <span>${video.viewCount} views \u2022 ${video.publishedAgo}</span>
            </div>
          </div>
        </div>
      </div>`;

  // Insert before the closing </div> of videoGrid
  const gridEndMarker = '</div>\n  </main>';
  const insertPos = content.lastIndexOf(gridEndMarker);

  if (insertPos !== -1) {
    content = content.slice(0, insertPos) + newCard + '\n    ' + content.slice(insertPos);
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log(`  + Added: ${video.title.substring(0, 50)}... [${categoriesAttr}]`);
    return true;
  } else {
    console.log('  ! Could not find insertion point in index.html');
    return false;
  }
}

async function main() {
  console.log('\n=== TerminalONE Video Updater ===\n');
  console.log('No API key required — scrapes YouTube search results directly.\n');

  try {
    const tracker = loadTracker();
    console.log(`Tracking ${tracker.videos.length} videos. Max: ${CONFIG.maxTotalVideos}`);

    if (tracker.videos.length >= CONFIG.maxTotalVideos) {
      console.log(`Maximum videos (${CONFIG.maxTotalVideos}) reached. Exiting.`);
      return;
    }

    // Rotate through categories each run
    const categoryIds = Object.keys(CATEGORIES);
    const currentCategoryId = categoryIds[tracker.categoryIndex % categoryIds.length];
    const category = CATEGORIES[currentCategoryId];

    console.log(`\nCategory: ${category.name} (${currentCategoryId})`);

    const videos = await scrapeYouTubeSearch(category.searchQuery, tracker.videos);

    if (videos.length === 0) {
      console.log('No new videos found. Will try next category on next run.');
      tracker.categoryIndex++;
      saveTracker(tracker);
      return;
    }

    const videosToAdd = videos.slice(0, CONFIG.videosPerRun);

    console.log(`\nFound ${videosToAdd.length} new videos:\n`);
    videosToAdd.forEach((v, i) => {
      console.log(`  ${i + 1}. ${v.title.substring(0, 60)}`);
      console.log(`     ${v.viewCount} views | ${v.duration} | Trending: ${v.trending ? 'Yes' : 'No'}`);
    });

    console.log('\nAdding to site...\n');

    let added = 0;
    for (const video of videosToAdd) {
      if (addVideoCardToIndex(video)) {
        tracker.videos.push(video.id);
        tracker.videoData[video.id] = video;
        added++;
      }
    }

    tracker.categoryIndex++;
    saveTracker(tracker);

    const nextCategory = CATEGORIES[categoryIds[tracker.categoryIndex % categoryIds.length]];
    console.log(`\n=== Done! Added ${added} videos. ===`);
    console.log(`Total: ${tracker.videos.length} videos`);
    console.log(`Next run will search: ${nextCategory.name}\n`);

  } catch (error) {
    console.error('\nError:', error.message);
    process.exit(1);
  }
}

main();
