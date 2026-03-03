# Aviatube Auto-Update Setup Guide

This guide will help you set up automatic video updates for your Aviatube site.

## Step 1: Get a YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable the **YouTube Data API v3**:
   - Go to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key

## Step 2: Set Up the Script

```bash
# Set your API key as an environment variable
export YOUTUBE_API_KEY="your-api-key-here"

# Navigate to your Aviatube folder
cd /Users/benvo/Desktop/Aviatube

# Run the update script
node update-videos.js
```

## Step 3: Run Automatically (Optional)

### Option A: Cron Job (runs on a schedule)

```bash
# Open crontab editor
crontab -e

# Add this line to run every hour:
0 * * * * cd /Users/benvo/Desktop/Aviatube && YOUTUBE_API_KEY="your-key" node update-videos.js >> update.log 2>&1

# Or run every 6 hours:
0 */6 * * * cd /Users/benvo/Desktop/Aviatube && YOUTUBE_API_KEY="your-key" node update-videos.js >> update.log 2>&1

# Or run daily at 8am:
0 8 * * * cd /Users/benvo/Desktop/Aviatube && YOUTUBE_API_KEY="your-key" node update-videos.js >> update.log 2>&1
```

### Option B: launchd (macOS recommended)

Create a file at `~/Library/LaunchAgents/com.aviatube.update.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.aviatube.update</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/node</string>
        <string>/Users/benvo/Desktop/Aviatube/update-videos.js</string>
    </array>
    <key>EnvironmentVariables</key>
    <dict>
        <key>YOUTUBE_API_KEY</key>
        <string>your-api-key-here</string>
    </dict>
    <key>StartInterval</key>
    <integer>3600</integer>
    <key>StandardOutPath</key>
    <string>/Users/benvo/Desktop/Aviatube/update.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/benvo/Desktop/Aviatube/update-error.log</string>
</dict>
</plist>
```

Then load it:
```bash
launchctl load ~/Library/LaunchAgents/com.aviatube.update.plist
```

## Customization

Edit `update-videos.js` to change:

```javascript
const CONFIG = {
  searchQuery: 'aviation plane spotting cockpit landing takeoff',  // Change search terms
  maxResults: 10,                    // Number of videos to fetch
  videoDuration: 'medium',           // short, medium, long, any
  order: 'relevance',                // relevance, date, rating, viewCount
  publishedAfter: getDateMonthsAgo(6),  // Only recent videos
};
```

## API Quota

YouTube Data API has a daily quota of 10,000 units (free tier):
- Search request: ~100 units
- Video details request: ~1 unit per video

Running the script once uses about 110 units, so you can run it ~90 times per day.

## Troubleshooting

**"API key not set" error:**
```bash
export YOUTUBE_API_KEY="your-key-here"
```

**"Quota exceeded" error:**
Wait until midnight Pacific Time for quota reset, or reduce run frequency.

**Videos not updating:**
Check `update-log.json` to see what was fetched, and `update.log` for errors.
