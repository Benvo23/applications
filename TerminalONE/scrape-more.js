const https = require('https');
const fs = require('fs');
const path = require('path');

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrape(query) {
  const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
  const html = await httpsGet(url);
  const match = html.match(/var ytInitialData = ({.*?});/s);
  if (!match) return [];
  const data = JSON.parse(match[1]);
  const contents = data?.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents;
  const videos = [];
  for (const section of contents || []) {
    for (const item of section?.itemSectionRenderer?.contents || []) {
      const v = item?.videoRenderer;
      if (!v) continue;
      videos.push({
        id: v.videoId,
        title: v.title?.runs?.[0]?.text || '',
        channel: v.ownerText?.runs?.[0]?.text || '',
        views: v.viewCountText?.simpleText || '',
        duration: v.lengthText?.simpleText || '',
        published: v.publishedTimeText?.simpleText || ''
      });
      if (videos.length >= 25) break;
    }
  }
  return videos;
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

(async () => {
  console.log('Scraping flight reviews...');
  const reviews = await scrape('airline flight review first class 2024');
  console.log('Scraping cockpit videos...');
  const cockpit = await scrape('cockpit camera pilot view landing takeoff');
  console.log('Scraping military jets...');
  const military = await scrape('military fighter jet aircraft');
  console.log('Scraping helicopters...');
  const helicopters = await scrape('helicopter flight aviation');

  const all = [...reviews, ...cockpit, ...military, ...helicopters];

  // Read index.html
  const indexPath = path.join(__dirname, 'index.html');
  let content = fs.readFileSync(indexPath, 'utf8');

  // Find and replace placeholder videos
  let replaced = 0;
  for (const video of all) {
    if (replaced >= 49) break;

    // Find a placeholder video card
    const placeholderRegex = /<div class="video-card">\s*<div class="thumbnail">\s*<div class="thumbnail-placeholder">[^<]*<\/div>\s*<span class="duration">[^<]*<\/span>\s*<\/div>\s*<div class="video-info">\s*<div class="channel-avatar">[^<]*<\/div>\s*<div class="video-details">\s*<div class="video-title">[^<]*<\/div>\s*<div class="video-meta">\s*<div class="channel-name">[^<]*<\/div>\s*<span>[^<]*<\/span>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;

    const match = content.match(placeholderRegex);
    if (!match) break;

    const categories = [];
    const titleLower = video.title.toLowerCase();
    if (titleLower.includes('review') || titleLower.includes('class')) categories.push('flight-reviews');
    if (titleLower.includes('cockpit') || titleLower.includes('pilot')) categories.push('cockpit');
    if (titleLower.includes('landing')) categories.push('landings');
    if (titleLower.includes('takeoff')) categories.push('takeoffs');
    if (titleLower.includes('boeing') || titleLower.includes('737') || titleLower.includes('747') || titleLower.includes('777') || titleLower.includes('787')) categories.push('boeing');
    if (titleLower.includes('airbus') || titleLower.includes('a320') || titleLower.includes('a350') || titleLower.includes('a380')) categories.push('airbus');
    if (titleLower.includes('military') || titleLower.includes('fighter') || titleLower.includes('f-16') || titleLower.includes('f-22') || titleLower.includes('f-35')) categories.push('military');
    if (titleLower.includes('helicopter') || titleLower.includes('heli')) categories.push('helicopters');
    if (categories.length === 0) categories.push('plane-spotting');

    const viewNum = parseInt(video.views.replace(/[^0-9]/g, '')) || 0;
    const trending = viewNum > 500000;

    const newCard = `<div class="video-card" data-categories="${categories.join(' ')}" data-trending="${trending}" data-views="${viewNum}">
        <div class="thumbnail">
          <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="Video thumbnail" loading="lazy">
          <span class="duration">${video.duration}</span>
          ${trending ? '<span class="trending-badge">🔥</span>' : ''}
        </div>
        <div class="video-info">
          <div class="channel-avatar">${getInitials(video.channel)}</div>
          <div class="video-details">
            <div class="video-title">${escapeHtml(video.title.substring(0, 60))}</div>
            <div class="video-meta">
              <div class="channel-name">${escapeHtml(video.channel)}</div>
              <span>${video.views} • ${video.published}</span>
            </div>
          </div>
        </div>
      </div>`;

    content = content.replace(match[0], newCard);
    replaced++;
    console.log(`Replaced ${replaced}: ${video.title.substring(0, 40)}...`);
  }

  fs.writeFileSync(indexPath, content);
  console.log(`\nDone! Replaced ${replaced} placeholder videos with real ones.`);
})();
