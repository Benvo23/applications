// ============================================================
// ANIMATED INTRO
// ============================================================
const introOverlay = document.getElementById('intro-overlay');
setTimeout(() => {
    introOverlay.classList.add('fade-out');
    setTimeout(() => introOverlay.remove(), 800);
}, 1800);

// ============================================================
// INITIALIZE MAP
// ============================================================
const map = L.map('map', {
    center: [20, 30],
    zoom: 3,
    minZoom: 2,
    maxZoom: 18,
    zoomControl: true,
    worldCopyJump: true
});

// --- Map style layers ---
const tileLayers = {
    dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO', subdomains: 'abcd', maxZoom: 19
    }),
    satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri', maxZoom: 18
    }),
    terrain: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenTopoMap', maxZoom: 17
    })
};
let currentTileLayer = tileLayers.dark;
currentTileLayer.addTo(map);

// Map style switcher
document.querySelectorAll('.map-style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.map-style-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        map.removeLayer(currentTileLayer);
        currentTileLayer = tileLayers[btn.dataset.style];
        currentTileLayer.addTo(map);
        // Update minimap too
        if (miniMapControl) {
            miniMapControl.changeLayer(getMiniMapLayer(btn.dataset.style));
        }
    });
});

function getMiniMapLayer(style) {
    if (style === 'satellite') return L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18 });
    if (style === 'terrain') return L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { maxZoom: 17 });
    return L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { subdomains: 'abcd', maxZoom: 19 });
}

// --- Minimap ---
let miniMapControl = new L.Control.MiniMap(
    getMiniMapLayer('dark'),
    { toggleDisplay: true, minimized: false, position: 'bottomright', width: 140, height: 100, zoomLevelOffset: -5 }
).addTo(map);

// --- Fullscreen button ---
document.getElementById('fullscreen-btn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Tension color mapping
function getTensionColor(level) {
    if (level >= 9) return '#ff2222';
    if (level >= 7) return '#ff6633';
    if (level >= 5) return '#ffaa00';
    return '#44aa44';
}

function getTensionLabel(level) {
    if (level >= 9) return 'Critical';
    if (level >= 7) return 'High';
    if (level >= 5) return 'Elevated';
    return 'Low';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================================
// BEFORE/AFTER SATELLITE COMPARISON DATA
// ============================================================
const COMPARE_ZONES = {
    "Gaza / Israel": { lat: 31.42, lng: 34.35, zoom: 13, beforeYear: "2023", afterYear: "2025", label: "Gaza City" },
    "Ukraine": { lat: 47.0, lng: 37.8, zoom: 12, beforeYear: "2021", afterYear: "2025", label: "Mariupol, Ukraine" },
    "Sudan": { lat: 15.6, lng: 32.53, zoom: 12, beforeYear: "2022", afterYear: "2025", label: "Khartoum, Sudan" },
    "Syria": { lat: 36.2, lng: 37.15, zoom: 13, beforeYear: "2011", afterYear: "2025", label: "Aleppo, Syria" },
    "Mexico - Sinaloa": { lat: 24.8, lng: -107.4, zoom: 12, beforeYear: "2022", afterYear: "2025", label: "Culiacán, Sinaloa" },
    "West Bank": { lat: 31.77, lng: 35.23, zoom: 13, beforeYear: "2022", afterYear: "2025", label: "Jenin, West Bank" },
    "Yemen": { lat: 13.35, lng: 44.2, zoom: 13, beforeYear: "2014", afterYear: "2025", label: "Sana'a, Yemen" },
    "Democratic Republic of Congo": { lat: -1.68, lng: 29.22, zoom: 12, beforeYear: "2021", afterYear: "2025", label: "Goma, DRC" },
    "Myanmar": { lat: 19.76, lng: 96.07, zoom: 12, beforeYear: "2020", afterYear: "2025", label: "Mandalay, Myanmar" },
    "Haiti": { lat: 18.54, lng: -72.34, zoom: 13, beforeYear: "2021", afterYear: "2025", label: "Port-au-Prince, Haiti" },
};

let compareMapBefore = null;
let compareMapAfter = null;

function openCompareModal(regionName) {
    const zone = COMPARE_ZONES[regionName];
    if (!zone) return;

    const modal = document.getElementById('compare-modal');
    const title = document.getElementById('compare-title');
    modal.classList.remove('hidden');
    title.textContent = `${zone.label} — Before & After`;

    // Clean up old maps
    if (compareMapBefore) { compareMapBefore.remove(); compareMapBefore = null; }
    if (compareMapAfter) { compareMapAfter.remove(); compareMapAfter = null; }

    setTimeout(() => {
        compareMapBefore = L.map('compare-map-before', {
            center: [zone.lat, zone.lng],
            zoom: zone.zoom,
            zoomControl: false
        });
        // Google Earth historical imagery approximation — use Esri Wayback
        L.tileLayer('https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/39953/{z}/{y}/{x}', {
            maxZoom: 18,
            attribution: 'Esri Wayback (' + zone.beforeYear + ')'
        }).addTo(compareMapBefore);

        compareMapAfter = L.map('compare-map-after', {
            center: [zone.lat, zone.lng],
            zoom: zone.zoom,
            zoomControl: false
        });
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 18,
            attribution: 'Esri Current (' + zone.afterYear + ')'
        }).addTo(compareMapAfter);

        // Sync the two maps
        compareMapBefore.on('move', () => {
            compareMapAfter.setView(compareMapBefore.getCenter(), compareMapBefore.getZoom(), { animate: false });
        });
        compareMapAfter.on('move', () => {
            compareMapBefore.setView(compareMapAfter.getCenter(), compareMapAfter.getZoom(), { animate: false });
        });
    }, 100);
}

document.getElementById('compare-close').addEventListener('click', () => {
    document.getElementById('compare-modal').classList.add('hidden');
    if (compareMapBefore) { compareMapBefore.remove(); compareMapBefore = null; }
    if (compareMapAfter) { compareMapAfter.remove(); compareMapAfter = null; }
});

// ============================================================
// LAYER GROUPS
// ============================================================
const activeLayer = L.layerGroup().addTo(map);
const historicalLayer = L.layerGroup();

// --- Heatmap layer ---
const heatData = TENSION_REGIONS.map(r => [r.lat, r.lng, r.tension / 10]);
const heatLayer = L.heatLayer(heatData, {
    radius: 45, blur: 30, maxZoom: 6, max: 1.0,
    gradient: { 0.2: '#003300', 0.4: '#44aa44', 0.55: '#ffaa00', 0.7: '#ff6633', 0.85: '#ff2222', 1.0: '#ff0000' }
});

// --- Connection lines ---
const CONNECTIONS = [
    { from: "Iran", to: "Yemen", color: "#ff6633" },
    { from: "Iran", to: "Lebanon", color: "#ff6633" },
    { from: "Iran", to: "Iraq", color: "#ff6633" },
    { from: "Iran", to: "Syria", color: "#ff6633" },
    { from: "Iran", to: "Gaza / Israel", color: "#ff6633" },
    { from: "US-Iran / Persian Gulf", to: "Iran", color: "#ff2222" },
    { from: "US-Iran / Persian Gulf", to: "Red Sea / Gulf of Aden", color: "#ff2222" },
    { from: "Yemen", to: "Red Sea / Gulf of Aden", color: "#ff6633" },
    { from: "Ukraine", to: "Transnistria", color: "#ff2222" },
    { from: "Ukraine", to: "EU-Russia Baltic Tensions", color: "#ff6633" },
    { from: "Gaza / Israel", to: "West Bank", color: "#ff2222" },
    { from: "Gaza / Israel", to: "Lebanon", color: "#ff6633" },
    { from: "Sahel Region", to: "Nigeria", color: "#ff6633" },
    { from: "Sudan", to: "Chad", color: "#ff6633" },
    { from: "Democratic Republic of Congo", to: "Rwanda", color: "#ff6633" },
    { from: "US-Canada Trade Tensions", to: "US-China Trade & Tech War", color: "#ffaa00" },
    { from: "Mexico", to: "Mexico - Sinaloa", color: "#ff6633" },
    { from: "Mexico", to: "Mexico - Chiapas", color: "#ff6633" },
    { from: "Mexico", to: "US-Mexico Border", color: "#ffaa00" },
    { from: "Somalia", to: "Red Sea / Gulf of Aden", color: "#ff6633" },
    { from: "Myanmar", to: "Thailand - Deep South", color: "#ffaa00" },
    { from: "Taiwan Strait", to: "South China Sea", color: "#ffaa00" },
    { from: "Taiwan Strait", to: "US-China Trade & Tech War", color: "#ffaa00" },
];

function getRegionCoords(name) {
    const r = TENSION_REGIONS.find(r => r.name === name);
    return r ? [r.lat, r.lng] : null;
}

const connectionLayer = L.layerGroup();
CONNECTIONS.forEach(conn => {
    const from = getRegionCoords(conn.from);
    const to = getRegionCoords(conn.to);
    if (!from || !to) return;
    connectionLayer.addLayer(L.polyline([from, to], {
        color: conn.color, weight: 1.5, opacity: 0.5, dashArray: '6 4', className: 'connection-line'
    }));
    const midLat = (from[0] + to[0]) / 2;
    const midLng = (from[1] + to[1]) / 2;
    connectionLayer.addLayer(L.circleMarker([midLat, midLng], {
        radius: 3, color: conn.color, fillColor: conn.color, fillOpacity: 0.7, weight: 0
    }));
});

// --- Prevent map drag on legend and fullscreen button ---
L.DomEvent.disableClickPropagation(document.getElementById('legend'));
L.DomEvent.disableScrollPropagation(document.getElementById('legend'));

// --- Toggle checkboxes ---
document.getElementById('toggle-heatmap').addEventListener('change', function () {
    this.checked ? heatLayer.addTo(map) : map.removeLayer(heatLayer);
});
document.getElementById('toggle-connections').addEventListener('change', function () {
    this.checked ? connectionLayer.addTo(map) : map.removeLayer(connectionLayer);
});

// --- Night/Day Terminator Line ---
function getSunPosition() {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    const hourUTC = now.getUTCHours() + now.getUTCMinutes() / 60;

    // Sun declination (simplified)
    const declination = -23.44 * Math.cos((2 * Math.PI / 365) * (dayOfYear + 10));
    // Sun longitude (where it's noon)
    const sunLng = -((hourUTC / 24) * 360 - 180);

    return { declination, sunLng };
}

function buildTerminatorCoords() {
    const { declination, sunLng } = getSunPosition();
    const decRad = declination * Math.PI / 180;
    const points = [];

    // Build the terminator line (where solar elevation = 0)
    for (let lng = -180; lng <= 180; lng += 2) {
        const lngRad = (lng - sunLng) * Math.PI / 180;
        const lat = Math.atan(-Math.cos(lngRad) / Math.tan(decRad)) * 180 / Math.PI;
        points.push([lat, lng]);
    }

    // Build night polygon: terminator line + wrap around the dark pole
    const darkPole = declination > 0 ? -90 : 90;
    const nightPoly = [];

    // Add terminator points
    for (const p of points) {
        nightPoly.push(p);
    }

    // Close polygon around the dark pole
    nightPoly.push([darkPole, 180]);
    nightPoly.push([darkPole, -180]);

    return nightPoly;
}

const terminatorLayer = L.layerGroup();
let terminatorPoly = null;
let terminatorInterval = null;

function updateTerminator() {
    const coords = buildTerminatorCoords();
    if (terminatorPoly) {
        terminatorPoly.setLatLngs(coords);
    } else {
        terminatorPoly = L.polygon(coords, {
            color: 'transparent',
            fillColor: '#000011',
            fillOpacity: 0.35,
            interactive: false
        });
        terminatorLayer.addLayer(terminatorPoly);
    }
}

document.getElementById('toggle-terminator').addEventListener('change', function () {
    if (this.checked) {
        updateTerminator();
        terminatorLayer.addTo(map);
        // Update every 60 seconds
        terminatorInterval = setInterval(updateTerminator, 60000);
    } else {
        map.removeLayer(terminatorLayer);
        if (terminatorInterval) { clearInterval(terminatorInterval); terminatorInterval = null; }
    }
});

// ============================================================
// BUILD ACTIVE MARKERS (with staggered animated intro)
// ============================================================
const activeMarkers = []; // Store for filtering
const sortedRegions = [...TENSION_REGIONS].sort((a, b) => b.tension - a.tension);
sortedRegions.forEach((region, index) => {
    const color = getTensionColor(region.tension);
    const circleRadius = 10 + region.tension * 3;

    const glow = L.circleMarker([region.lat, region.lng], {
        radius: circleRadius + 6, color, fillColor: color, fillOpacity: 0, weight: 0, opacity: 0
    });
    const circle = L.circleMarker([region.lat, region.lng], {
        radius: circleRadius, color, fillColor: color, fillOpacity: 0, weight: 2, opacity: 0
    });

    circle.bindTooltip(`
        <div class="popup-title">${region.name}</div>
        <div style="color: ${color}; font-size: 0.75rem; margin-bottom: 4px;">${region.category} — Tension: ${region.tension}/10</div>
        <div class="popup-click-hint">Click to view news</div>
    `, { className: 'tension-tooltip', direction: 'top', offset: [0, -circleRadius] });

    circle.on('click', () => openActiveSidebar(region));
    glow.on('click', () => openActiveSidebar(region));
    circle.on('mouseover', () => { circle.setStyle({ fillOpacity: 0.6, weight: 3 }); glow.setStyle({ fillOpacity: 0.25 }); });
    circle.on('mouseout', () => { circle.setStyle({ fillOpacity: 0.4, weight: 2 }); glow.setStyle({ fillOpacity: 0.15 }); });

    activeLayer.addLayer(glow);
    activeLayer.addLayer(circle);
    activeMarkers.push({ glow, circle, region });

    // Staggered fade-in: highest tension first
    setTimeout(() => {
        circle.setStyle({ fillOpacity: 0.4, opacity: 0.8 });
        glow.setStyle({ fillOpacity: 0.15 });
    }, 2000 + index * 80);
});

// ============================================================
// BUILD HISTORICAL MARKERS (with timeline support)
// ============================================================
const HIST_COLOR = '#4488cc';
const historicalMarkers = []; // Store references for timeline filtering

function parseYearRange(years) {
    const isBC = /BC/i.test(years);
    const match = years.match(/~?(\d{3,4})/);
    let startYear = match ? parseInt(match[1]) : 1800;
    if (isBC) startYear = -startYear;

    const matchEnd = years.match(/[\u2013\-–]\s*~?(\d{3,4})\s*(BC|AD)?/i);
    let endYear;
    if (matchEnd) {
        endYear = parseInt(matchEnd[1]);
        // If end also has BC or the whole string is BC without AD on end
        if (matchEnd[2] && /BC/i.test(matchEnd[2])) {
            endYear = -endYear;
        } else if (isBC && !matchEnd[2]) {
            endYear = -endYear;
        }
    } else {
        endYear = startYear + (isBC ? 50 : 1);
    }

    // Ensure start <= end
    if (startYear > endYear) {
        const tmp = startYear;
        startYear = endYear;
        endYear = tmp;
    }

    return { startYear, endYear };
}

HISTORICAL_REGIONS.forEach(region => {
    const { startYear, endYear } = parseYearRange(region.years);
    const circleRadius = 18;

    const glow = L.circleMarker([region.lat, region.lng], {
        radius: circleRadius + 6, color: HIST_COLOR, fillColor: HIST_COLOR, fillOpacity: 0.1, weight: 0, opacity: 0
    });
    const circle = L.circleMarker([region.lat, region.lng], {
        radius: circleRadius, color: HIST_COLOR, fillColor: HIST_COLOR, fillOpacity: 0.3, weight: 2, opacity: 0.7
    });

    circle.bindTooltip(`
        <div class="popup-title">${region.name}</div>
        <div style="color: ${HIST_COLOR}; font-size: 0.75rem; margin-bottom: 4px;">${region.years} — ${region.category}</div>
        <div class="popup-click-hint">Click for details</div>
    `, { className: 'tension-tooltip', direction: 'top', offset: [0, -circleRadius] });

    circle.on('click', () => openHistoricalSidebar(region));
    glow.on('click', () => openHistoricalSidebar(region));
    circle.on('mouseover', () => { circle.setStyle({ fillOpacity: 0.5, weight: 3 }); glow.setStyle({ fillOpacity: 0.2 }); });
    circle.on('mouseout', () => { circle.setStyle({ fillOpacity: 0.3, weight: 2 }); glow.setStyle({ fillOpacity: 0.1 }); });

    historicalMarkers.push({ glow, circle, startYear, endYear, region });
    historicalLayer.addLayer(glow);
    historicalLayer.addLayer(circle);
});

// ============================================================
// TIMELINE SLIDER
// ============================================================
const timelineSlider = document.getElementById('timeline-slider');
const timelineYear = document.getElementById('timeline-year');
const timelineBar = document.getElementById('timeline-bar');
const timelinePlay = document.getElementById('timeline-play');
const timelineShowAll = document.getElementById('timeline-show-all');
let timelineInterval = null;
let showAllMode = true; // Start in Show All mode

// Prevent map from intercepting timeline slider events
L.DomEvent.disableClickPropagation(timelineBar);
L.DomEvent.disableScrollPropagation(timelineBar);

function formatYear(y) {
    if (y < 0) return Math.abs(y) + ' BC';
    if (y < 500) return y + ' AD';
    return y.toString();
}

timelineSlider.addEventListener('input', () => {
    const year = parseInt(timelineSlider.value);
    timelineYear.textContent = formatYear(year);
    filterHistoricalByYear(year);
});

function showAllHistorical() {
    historicalMarkers.forEach(m => {
        if (!historicalLayer.hasLayer(m.circle)) {
            historicalLayer.addLayer(m.glow);
            historicalLayer.addLayer(m.circle);
        }
        m.circle.setStyle({ fillOpacity: 0.3, weight: 2, opacity: 0.7 });
        m.glow.setStyle({ fillOpacity: 0.1 });
    });
}

function filterHistoricalByYear(year) {
    historicalMarkers.forEach(m => {
        const visible = year >= m.startYear && year <= m.endYear + 5;
        if (visible) {
            if (!historicalLayer.hasLayer(m.circle)) {
                historicalLayer.addLayer(m.glow);
                historicalLayer.addLayer(m.circle);
            }
            const intensity = year <= m.endYear ? 0.5 : 0.15;
            m.circle.setStyle({ fillOpacity: intensity });
            m.glow.setStyle({ fillOpacity: intensity * 0.3 });
        } else {
            historicalLayer.removeLayer(m.circle);
            historicalLayer.removeLayer(m.glow);
        }
    });
}

// Show All button — toggles between showing everything vs timeline filter
timelineShowAll.addEventListener('click', () => {
    // Stop any playing animation
    if (timelineInterval) {
        clearInterval(timelineInterval);
        timelineInterval = null;
        timelinePlay.classList.remove('playing');
        timelinePlay.innerHTML = '&#9654;';
    }

    showAllMode = !showAllMode;

    if (showAllMode) {
        timelineShowAll.classList.add('active');
        timelineSlider.disabled = true;
        timelinePlay.disabled = true;
        timelineYear.textContent = 'ALL';
        showAllHistorical();
    } else {
        timelineShowAll.classList.remove('active');
        timelineSlider.disabled = false;
        timelinePlay.disabled = false;
        const year = parseInt(timelineSlider.value);
        timelineYear.textContent = formatYear(year);
        filterHistoricalByYear(year);
    }
});

timelinePlay.addEventListener('click', () => {
    if (showAllMode) return;
    if (timelineInterval) {
        clearInterval(timelineInterval);
        timelineInterval = null;
        timelinePlay.classList.remove('playing');
        timelinePlay.innerHTML = '&#9654;';
    } else {
        if (parseInt(timelineSlider.value) >= 2025) timelineSlider.value = -3000;
        timelinePlay.classList.add('playing');
        timelinePlay.innerHTML = '&#9646;&#9646;';
        timelineInterval = setInterval(() => {
            let val = parseInt(timelineSlider.value) + 10;
            if (val > 2025) {
                val = 2025;
                clearInterval(timelineInterval);
                timelineInterval = null;
                timelinePlay.classList.remove('playing');
                timelinePlay.innerHTML = '&#9654;';
            }
            timelineSlider.value = val;
            timelineYear.textContent = formatYear(val);
            filterHistoricalByYear(val);
        }, 80);
    }
});

// ============================================================
// CONFLICT RANKING SIDEBAR (LEFT)
// ============================================================
const rankingList = document.getElementById('ranking-list');
const rankingPanel = document.getElementById('ranking-panel');
const rankingExpand = document.getElementById('ranking-expand');

function buildSparklineSVG(data, color) {
    const w = 50, h = 18;
    const max = Math.max(...data, 10);
    const min = Math.min(...data, 0);
    const range = max - min || 1;
    const points = data.map((v, i) => {
        const x = (i / (data.length - 1)) * w;
        const y = h - ((v - min) / range) * (h - 2) - 1;
        return `${x},${y}`;
    }).join(' ');
    return `<svg class="rank-sparkline" viewBox="0 0 ${w} ${h}"><polyline points="${points}" style="stroke:${color}"/></svg>`;
}

function buildRankingList() {
    const sorted = [...TENSION_REGIONS].sort((a, b) => b.tension - a.tension);
    let html = '';
    sorted.forEach((r, i) => {
        const color = getTensionColor(r.tension);
        const { trend, data } = getTrend(r.name);
        const sparkColor = trend === 'escalating' ? '#ff4444' : trend === 'de-escalating' ? '#44aa44' : '#aa8800';
        const badgeLabel = trend === 'escalating' ? '&#9650; Escalating' : trend === 'de-escalating' ? '&#9660; De-escalating' : '&#9644; Stable';
        const sparkline = buildSparklineSVG(data, sparkColor);

        html += `<div class="rank-item" data-region="${escapeHtml(r.name)}">
            <span class="rank-number">${i + 1}</span>
            <span class="rank-dot" style="background:${color}"></span>
            <div class="rank-info">
                <div class="rank-name">${escapeHtml(r.name)}</div>
                <div class="rank-category">${escapeHtml(r.category)}</div>
            </div>
            <div class="rank-extra">
                ${sparkline}
                <span class="rank-badge ${trend}">${badgeLabel}</span>
            </div>
        </div>`;
    });
    rankingList.innerHTML = html;

    // Click to fly
    rankingList.querySelectorAll('.rank-item').forEach(el => {
        el.addEventListener('click', () => {
            const name = el.dataset.region;
            const region = TENSION_REGIONS.find(r => r.name === name);
            if (!region) return;
            map.flyTo([region.lat, region.lng], 5, { duration: 1 });
            openActiveSidebar(region);

            rankingList.querySelectorAll('.rank-item').forEach(e => e.classList.remove('active'));
            el.classList.add('active');
        });
    });
}

buildRankingList();

document.getElementById('ranking-collapse').addEventListener('click', () => {
    rankingPanel.classList.add('collapsed');
    rankingExpand.classList.remove('hidden');
    setTimeout(() => map.invalidateSize(), 310);
});

document.getElementById('ranking-expand-btn').addEventListener('click', () => {
    rankingPanel.classList.remove('collapsed');
    rankingExpand.classList.add('hidden');
    setTimeout(() => map.invalidateSize(), 310);
});

// ============================================================
// SIDEBAR
// ============================================================
const sidebar = document.getElementById('sidebar');
const regionName = document.getElementById('region-name');
const regionSummary = document.getElementById('region-summary');
const tensionLevel = document.getElementById('tension-level');
const newsList = document.getElementById('news-list');
const satelliteCompare = document.getElementById('satellite-compare');
const closeBtn = document.getElementById('close-sidebar');

closeBtn.addEventListener('click', () => sidebar.classList.add('hidden'));

function openActiveSidebar(region) {
    sidebar.classList.remove('hidden');
    regionName.textContent = region.name;
    regionSummary.textContent = region.summary;

    const color = getTensionColor(region.tension);
    const label = getTensionLabel(region.tension);
    tensionLevel.innerHTML = `
        <span class="tension-label">${region.category} — Tension Level: ${label} (${region.tension}/10)</span>
        <div class="tension-bar">
            <div class="tension-bar-fill" style="width: ${region.tension * 10}%; background: ${color};"></div>
        </div>
    `;

    // Show satellite compare button if available
    if (COMPARE_ZONES[region.name]) {
        const zone = COMPARE_ZONES[region.name];
        satelliteCompare.classList.remove('hidden');
        satelliteCompare.innerHTML = `<button class="satellite-btn" onclick="openCompareModal('${region.name}')">
            <span class="satellite-btn-icon">&#127760;</span> Satellite Before & After — ${zone.label}
        </button>`;
    } else {
        satelliteCompare.classList.add('hidden');
        satelliteCompare.innerHTML = '';
    }

    // "Why are they fighting?" section
    const whyEl = document.getElementById('why-fighting');
    const bullets = WHY_FIGHTING[region.name];
    if (bullets) {
        whyEl.classList.remove('hidden');
        whyEl.innerHTML = `<div class="why-section-title">Why Are They Fighting?</div>
            <ul class="why-list">${bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`;
    } else {
        whyEl.classList.add('hidden');
        whyEl.innerHTML = '';
    }

    // Key dates timeline
    const datesEl = document.getElementById('key-dates');
    const dates = KEY_DATES[region.name];
    if (dates) {
        datesEl.classList.remove('hidden');
        datesEl.innerHTML = `<div class="dates-section-title">Key Dates</div>
            <div class="timeline-vertical">${dates.map(d =>
                `<div class="timeline-event">
                    <div class="timeline-date">${escapeHtml(d.date)}</div>
                    <div class="timeline-desc">${escapeHtml(d.event)}</div>
                </div>`
            ).join('')}</div>`;
    } else {
        datesEl.classList.add('hidden');
        datesEl.innerHTML = '';
    }

    // Related conflicts
    const relatedEl = document.getElementById('related-conflicts');
    const related = RELATED_CONFLICTS[region.name];
    if (related && related.length > 0) {
        relatedEl.classList.remove('hidden');
        relatedEl.innerHTML = `<div class="related-section-title">See Also</div>
            <div class="related-chips">${related.map(name =>
                `<span class="related-chip" data-name="${escapeHtml(name)}">${escapeHtml(name)}</span>`
            ).join('')}</div>`;
        // Click to navigate
        relatedEl.querySelectorAll('.related-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const target = TENSION_REGIONS.find(r => r.name === chip.dataset.name);
                if (target) {
                    map.flyTo([target.lat, target.lng], 5, { duration: 1 });
                    openActiveSidebar(target);
                }
            });
        });
    } else {
        relatedEl.classList.add('hidden');
        relatedEl.innerHTML = '';
    }

    fetchNews(region.keywords, region.name);
}

function openHistoricalSidebar(region) {
    sidebar.classList.remove('hidden');
    regionName.textContent = region.name;

    tensionLevel.innerHTML = `
        <div class="hist-years">${region.years}</div>
        <span class="hist-tag">${region.category}</span>
        <div class="hist-casualties">Estimated casualties: ${region.casualties}</div>
    `;

    regionSummary.textContent = region.summary;
    satelliteCompare.classList.add('hidden');
    satelliteCompare.innerHTML = '';

    // "Why were they fighting?" for historical
    const whyEl = document.getElementById('why-fighting');
    const bullets = WHY_FIGHTING_HIST[region.name];
    if (bullets) {
        whyEl.classList.remove('hidden');
        whyEl.innerHTML = `<div class="why-section-title">Why Were They Fighting?</div>
            <ul class="why-list">${bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`;
    } else {
        whyEl.classList.add('hidden');
        whyEl.innerHTML = '';
    }

    // Key dates timeline for historical
    const datesEl = document.getElementById('key-dates');
    const dates = KEY_DATES_HIST[region.name];
    if (dates) {
        datesEl.classList.remove('hidden');
        datesEl.innerHTML = `<div class="dates-section-title">Key Dates</div>
            <div class="timeline-vertical">${dates.map(d =>
                `<div class="timeline-event">
                    <div class="timeline-date">${escapeHtml(d.date)}</div>
                    <div class="timeline-desc">${escapeHtml(d.event)}</div>
                </div>`
            ).join('')}</div>`;
    } else {
        datesEl.classList.add('hidden');
        datesEl.innerHTML = '';
    }

    // Related historical conflicts
    const relatedEl = document.getElementById('related-conflicts');
    const related = RELATED_CONFLICTS_HIST[region.name];
    if (related && related.length > 0) {
        relatedEl.classList.remove('hidden');
        relatedEl.innerHTML = `<div class="related-section-title">See Also</div>
            <div class="related-chips">${related.map(name =>
                `<span class="related-chip" data-name="${escapeHtml(name)}">${escapeHtml(name)}</span>`
            ).join('')}</div>`;
        relatedEl.querySelectorAll('.related-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                // Try historical first, then active
                const hist = HISTORICAL_REGIONS.find(r => r.name === chip.dataset.name);
                const active = TENSION_REGIONS.find(r => r.name === chip.dataset.name);
                if (hist) {
                    map.flyTo([hist.lat, hist.lng], 5, { duration: 1 });
                    openHistoricalSidebar(hist);
                } else if (active) {
                    map.flyTo([active.lat, active.lng], 5, { duration: 1 });
                    openActiveSidebar(active);
                }
            });
        });
    } else {
        relatedEl.classList.add('hidden');
        relatedEl.innerHTML = '';
    }

    fetchNews(region.keywords, region.name);
}

// ============================================================
// FETCH RSS
// ============================================================
async function fetchRSS(keywords) {
    const query = encodeURIComponent(keywords);
    const rssUrl = `https://news.google.com/rss/search?q=${query}&hl=en&gl=US&ceid=US:en`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;
    const response = await fetch(proxyUrl, { signal: AbortSignal.timeout(10000) });
    if (!response.ok) throw new Error('Proxy request failed');
    const json = await response.json();
    return new DOMParser().parseFromString(json.contents, 'text/xml');
}

async function fetchNews(keywords, regionDisplayName) {
    newsList.innerHTML = '<div class="loading">Loading news...</div>';
    try {
        const xml = await fetchRSS(keywords);
        const items = xml.querySelectorAll('item');
        if (items.length === 0) { newsList.innerHTML = '<p class="placeholder">No recent news found.</p>'; return; }

        let html = '';
        for (let i = 0; i < Math.min(items.length, 25); i++) {
            const item = items[i];
            const title = item.querySelector('title')?.textContent || 'Untitled';
            const link = item.querySelector('link')?.textContent || '#';
            const pubDate = item.querySelector('pubDate')?.textContent;
            const source = item.querySelector('source')?.textContent || '';
            let dateStr = '';
            if (pubDate) { dateStr = new Date(pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); }
            html += `<a href="${link}" target="_blank" rel="noopener" style="text-decoration: none; color: inherit;">
                <div class="news-card"><h4>${escapeHtml(title)}</h4>
                <span class="news-source">${escapeHtml(source)}</span><span class="news-date">${dateStr}</span></div></a>`;
        }
        newsList.innerHTML = html;
    } catch (err) {
        newsList.innerHTML = `<div class="error-msg">Unable to load live news.<br><br>
            <a href="https://news.google.com/search?q=${encodeURIComponent(keywords)}" target="_blank" rel="noopener" style="color: #ff6666;">
            Search Google News for "${regionDisplayName}" →</a></div>`;
    }
}

// ============================================================
// 3D GLOBE VIEW
// ============================================================
let globeInstance = null;
const globeContainer = document.getElementById('globe-container');
let globeMode = 'active';
const HIST_GLOBE_COLOR = '#4488cc';

function getActiveGlobePoints() {
    return TENSION_REGIONS.map(r => ({
        lat: r.lat, lng: r.lng,
        size: 0.3 + (r.tension / 10) * 0.8,
        color: getTensionColor(r.tension),
        name: r.name, tension: r.tension, category: r.category,
        subtitle: `${r.category} — Tension: ${r.tension}/10`,
        type: 'active', region: r
    }));
}

function getHistoricalGlobePoints() {
    return HISTORICAL_REGIONS.map(r => ({
        lat: r.lat, lng: r.lng,
        size: 0.5,
        color: HIST_GLOBE_COLOR,
        name: r.name, tension: 0, category: r.category,
        subtitle: `${r.years} — ${r.category}`,
        casualties: r.casualties,
        type: 'historical', region: r
    }));
}

function getGlobePoints(mode) {
    if (mode === 'active') return getActiveGlobePoints();
    if (mode === 'historical') return getHistoricalGlobePoints();
    return [...getActiveGlobePoints(), ...getHistoricalGlobePoints()];
}

function updateGlobeStats(mode) {
    const statsEl = document.getElementById('globe-stats');
    if (mode === 'active') {
        const critical = TENSION_REGIONS.filter(r => r.tension >= 9).length;
        const high = TENSION_REGIONS.filter(r => r.tension >= 7).length;
        statsEl.innerHTML = `
            <div class="globe-stat"><span class="globe-stat-num" style="color:#ff4444">${TENSION_REGIONS.length}</span><span class="globe-stat-label">Active Zones</span></div>
            <div class="globe-stat"><span class="globe-stat-num" style="color:#ff2222">${critical}</span><span class="globe-stat-label">Critical</span></div>
            <div class="globe-stat"><span class="globe-stat-num" style="color:#ff6633">${high}</span><span class="globe-stat-label">High+</span></div>
        `;
    } else if (mode === 'historical') {
        statsEl.innerHTML = `
            <div class="globe-stat"><span class="globe-stat-num" style="color:#4488cc">${HISTORICAL_REGIONS.length}</span><span class="globe-stat-label">Historical Conflicts</span></div>
            <div class="globe-stat"><span class="globe-stat-num" style="color:#888">3000+ yrs</span><span class="globe-stat-label">Span</span></div>
        `;
    } else {
        const total = TENSION_REGIONS.length + HISTORICAL_REGIONS.length;
        statsEl.innerHTML = `
            <div class="globe-stat"><span class="globe-stat-num" style="color:#aa44cc">${total}</span><span class="globe-stat-label">Total Conflicts</span></div>
            <div class="globe-stat"><span class="globe-stat-num" style="color:#ff4444">${TENSION_REGIONS.length}</span><span class="globe-stat-label">Active</span></div>
            <div class="globe-stat"><span class="globe-stat-num" style="color:#4488cc">${HISTORICAL_REGIONS.length}</span><span class="globe-stat-label">Historical</span></div>
        `;
    }
}

function buildGlobe(mode) {
    destroyGlobe();
    const points = getGlobePoints(mode);

    globeInstance = Globe()(globeContainer)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
        .pointsData(points)
        .pointLat('lat').pointLng('lng')
        .pointAltitude(d => d.type === 'active' ? d.size * 0.05 : 0.01)
        .pointRadius(d => d.type === 'active' ? d.size * 0.5 : 0.35)
        .pointColor('color')
        .pointLabel(d => {
            let extra = '';
            if (d.casualties) extra = `<div style="color:#cc6666;font-size:10px;margin-top:2px;">Casualties: ${d.casualties}</div>`;
            return `<div style="background:rgba(12,12,25,0.92);padding:8px 12px;border-radius:8px;border:1px solid #2a2a4a;font-family:sans-serif;max-width:280px;">
                <div style="font-weight:600;color:#fff;font-size:13px;">${d.name}</div>
                <div style="color:${d.color};font-size:11px;margin-top:2px;">${d.subtitle}</div>
                ${extra}
            </div>`;
        })
        .onPointClick(d => {
            sidebar.classList.remove('hidden');
            if (d.type === 'active') {
                openActiveSidebar(d.region);
            } else {
                openHistoricalSidebar(d.region);
            }
        })
        .atmosphereColor(mode === 'historical' ? '#223355' : mode === 'all' ? '#332244' : '#334466')
        .atmosphereAltitude(0.2);

    // Rings for active high-tension only
    const ringPoints = points.filter(p => p.type === 'active' && p.tension >= 7);
    if (ringPoints.length > 0) {
        globeInstance
            .ringsData(ringPoints)
            .ringLat('lat').ringLng('lng')
            .ringMaxRadius(d => d.tension * 0.4)
            .ringPropagationSpeed(1.5)
            .ringRepeatPeriod(d => (11 - d.tension) * 200)
            .ringColor(d => () => d.color + '88');
    }

    // Arcs connecting related active conflicts
    if (mode === 'active' || mode === 'all') {
        const arcs = CONNECTIONS.map(conn => {
            const from = TENSION_REGIONS.find(r => r.name === conn.from);
            const to = TENSION_REGIONS.find(r => r.name === conn.to);
            if (!from || !to) return null;
            return { startLat: from.lat, startLng: from.lng, endLat: to.lat, endLng: to.lng, color: conn.color };
        }).filter(Boolean);
        globeInstance
            .arcsData(arcs)
            .arcStartLat('startLat').arcStartLng('startLng')
            .arcEndLat('endLat').arcEndLng('endLng')
            .arcColor(d => d.color + '66')
            .arcAltitude(0.15)
            .arcStroke(0.4)
            .arcDashLength(0.5)
            .arcDashGap(0.3)
            .arcDashAnimateTime(2000);
    }

    globeInstance.controls().autoRotate = true;
    globeInstance.controls().autoRotateSpeed = 0.4;

    const resizeGlobe = () => {
        if (globeInstance && globeContainer.offsetWidth > 0) {
            globeInstance.width(globeContainer.offsetWidth);
            globeInstance.height(globeContainer.offsetHeight);
        }
    };
    resizeGlobe();
    window.addEventListener('resize', resizeGlobe);

    updateGlobeStats(mode);
}

function initGlobe() {
    globeMode = 'active';
    document.querySelectorAll('.globe-mode-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.mode === 'active');
    });
    buildGlobe('active');
}

function destroyGlobe() {
    if (globeInstance) {
        globeInstance._destructor && globeInstance._destructor();
        globeInstance = null;
    }
    globeContainer.innerHTML = '';
}

// Globe mode toggle buttons
document.querySelectorAll('.globe-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        if (mode === globeMode) return;
        globeMode = mode;
        document.querySelectorAll('.globe-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sidebar.classList.add('hidden');
        buildGlobe(mode);
    });
});

// ============================================================
// VIEW TOGGLE
// ============================================================
let currentView = 'active';
const toggleBtns = document.querySelectorAll('.toggle-btn');
const newsTicker = document.getElementById('news-ticker');
const bottomNews = document.getElementById('bottom-news');
const mapEl = document.getElementById('map');
const searchFilterBar = document.getElementById('search-filter-bar');

function hideAllViews() {
    map.removeLayer(historicalLayer);
    map.removeLayer(activeLayer);
    map.removeLayer(heatLayer);
    map.removeLayer(connectionLayer);
    map.removeLayer(terminatorLayer);
    sidebar.classList.add('hidden');
    if (timelineInterval) { clearInterval(timelineInterval); timelineInterval = null; timelinePlay.classList.remove('playing'); timelinePlay.innerHTML = '&#9654;'; }
}

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        if (view === currentView) return;
        currentView = view;
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        hideAllViews();

        const legend = document.getElementById('legend');
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        const heatCheck = document.getElementById('toggle-heatmap');
        const connCheck = document.getElementById('toggle-connections');

        if (view === 'active') {
            mapEl.style.display = 'block';
            document.getElementById('globe-wrapper').classList.add('hidden');
            document.getElementById('stats-dashboard').classList.add('hidden');
            destroyGlobe();
            activeLayer.addTo(map);
            newsTicker.style.display = 'flex';
            bottomNews.style.display = 'block';
            legend.style.display = 'block';
            fullscreenBtn.style.display = 'flex';
            timelineBar.classList.add('hidden');
            rankingPanel.style.display = 'flex';
            searchFilterBar.style.display = 'flex';
            if (heatCheck.checked) heatLayer.addTo(map);
            if (connCheck.checked) connectionLayer.addTo(map);
            const termCheck = document.getElementById('toggle-terminator');
            if (termCheck.checked) { updateTerminator(); terminatorLayer.addTo(map); }
            map.invalidateSize();
        } else if (view === 'historical') {
            mapEl.style.display = 'block';
            document.getElementById('globe-wrapper').classList.add('hidden');
            document.getElementById('stats-dashboard').classList.add('hidden');
            destroyGlobe();
            historicalLayer.addTo(map);
            newsTicker.style.display = 'none';
            bottomNews.style.display = 'none';
            legend.style.display = 'none';
            fullscreenBtn.style.display = 'flex';
            timelineBar.classList.remove('hidden');
            rankingPanel.style.display = 'none';
            searchFilterBar.style.display = 'none';
            showAllMode = true;
            timelineShowAll.classList.add('active');
            timelineSlider.disabled = true;
            timelinePlay.disabled = true;
            timelineYear.textContent = 'ALL';
            showAllHistorical();
            map.invalidateSize();
        } else if (view === 'globe') {
            mapEl.style.display = 'none';
            document.getElementById('globe-wrapper').classList.remove('hidden');
            document.getElementById('stats-dashboard').classList.add('hidden');
            newsTicker.style.display = 'none';
            bottomNews.style.display = 'none';
            legend.style.display = 'none';
            fullscreenBtn.style.display = 'none';
            timelineBar.classList.add('hidden');
            rankingPanel.style.display = 'none';
            searchFilterBar.style.display = 'none';
            setTimeout(() => initGlobe(), 100);
        } else if (view === 'stats') {
            mapEl.style.display = 'none';
            document.getElementById('globe-wrapper').classList.add('hidden');
            destroyGlobe();
            document.getElementById('stats-dashboard').classList.remove('hidden');
            newsTicker.style.display = 'none';
            bottomNews.style.display = 'none';
            legend.style.display = 'none';
            fullscreenBtn.style.display = 'none';
            timelineBar.classList.add('hidden');
            rankingPanel.style.display = 'none';
            searchFilterBar.style.display = 'none';
            buildStatsDashboard();
        }
    });
});

// ============================================================
// LIVE NEWS TICKER
// ============================================================
async function loadTicker() {
    const tickerContent = document.getElementById('ticker-content');
    const topRegions = TENSION_REGIONS.filter(r => r.tension >= 6).sort((a, b) => b.tension - a.tension).slice(0, 10);
    let allItems = [];

    for (const region of topRegions) {
        try {
            const xml = await fetchRSS(region.keywords);
            const items = xml.querySelectorAll('item');
            for (let i = 0; i < Math.min(items.length, 3); i++) {
                const title = items[i].querySelector('title')?.textContent || '';
                const link = items[i].querySelector('link')?.textContent || '#';
                if (title) allItems.push({ region: region.name, title, link, color: getTensionColor(region.tension) });
            }
        } catch (e) { continue; }
    }

    if (allItems.length === 0) {
        allItems = topRegions.map(r => ({ region: r.name, title: r.summary.split('.')[0], link: `https://news.google.com/search?q=${encodeURIComponent(r.keywords)}`, color: getTensionColor(r.tension) }));
    }

    let html = '';
    for (const item of allItems) {
        html += `<a class="ticker-item" href="${item.link}" target="_blank" rel="noopener">
            <span class="ticker-region" style="color: ${item.color}">${escapeHtml(item.region)}</span>
            <span class="ticker-headline">${escapeHtml(item.title)}</span></a>`;
    }
    tickerContent.innerHTML = html + html;
}
loadTicker();

// ============================================================
// BOTTOM NEWS BOXES
// ============================================================
function renderBottomCards(cards) {
    const container = document.getElementById('bottom-news-cards');
    let html = '';
    for (const card of cards) {
        html += `<a class="bottom-card" href="${card.link}" target="_blank" rel="noopener">
            <div class="bottom-card-region" style="color: ${card.color}">${escapeHtml(card.region)}</div>
            <div class="bottom-card-title">${escapeHtml(card.title)}</div>
            <div class="bottom-card-footer"><span class="bottom-card-source">${escapeHtml(card.source)}</span><span class="bottom-card-date">${card.dateStr}</span></div></a>`;
    }
    container.innerHTML = html;
}

const bottomRegions = TENSION_REGIONS.filter(r => r.tension >= 7).sort((a, b) => b.tension - a.tension).slice(0, 10);
renderBottomCards(bottomRegions.map(r => ({
    region: r.name, title: r.summary.split('.')[0],
    link: `https://news.google.com/search?q=${encodeURIComponent(r.keywords)}`,
    source: r.category, dateStr: '', color: getTensionColor(r.tension)
})));

async function upgradeBottomNews() {
    let cards = [];
    for (const region of bottomRegions) {
        try {
            const xml = await fetchRSS(region.keywords);
            const items = xml.querySelectorAll('item');
            const color = getTensionColor(region.tension);
            for (let i = 0; i < Math.min(items.length, 2); i++) {
                const title = items[i].querySelector('title')?.textContent || '';
                const link = items[i].querySelector('link')?.textContent || '#';
                const source = items[i].querySelector('source')?.textContent || '';
                const pubDate = items[i].querySelector('pubDate')?.textContent;
                let dateStr = '';
                if (pubDate) { dateStr = new Date(pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }
                if (title) cards.push({ region: region.name, title, link, source, dateStr, color });
            }
        } catch (e) { continue; }
    }
    if (cards.length > 0) renderBottomCards(cards);
}
upgradeBottomNews();

// ============================================================
// SEARCH
// ============================================================
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (q.length < 2) {
        searchResults.classList.add('hidden');
        return;
    }

    const matches = TENSION_REGIONS.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.keywords.toLowerCase().includes(q)
    ).slice(0, 10);

    if (matches.length === 0) {
        searchResults.classList.add('hidden');
        return;
    }

    let html = '';
    matches.forEach(r => {
        const color = getTensionColor(r.tension);
        html += `<div class="search-result-item" data-name="${escapeHtml(r.name)}">
            <span class="search-result-dot" style="background:${color}"></span>
            <span class="search-result-name">${escapeHtml(r.name)}</span>
            <span class="search-result-cat">${escapeHtml(r.category)}</span>
        </div>`;
    });
    searchResults.innerHTML = html;
    searchResults.classList.remove('hidden');

    searchResults.querySelectorAll('.search-result-item').forEach(el => {
        el.addEventListener('click', () => {
            const name = el.dataset.name;
            const region = TENSION_REGIONS.find(r => r.name === name);
            if (!region) return;

            // Switch to active view if not already
            if (currentView !== 'active') {
                document.querySelector('.toggle-btn[data-view="active"]').click();
            }

            map.flyTo([region.lat, region.lng], 5, { duration: 1 });
            openActiveSidebar(region);
            searchResults.classList.add('hidden');
            searchInput.value = region.name;
        });
    });
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-wrapper')) {
        searchResults.classList.add('hidden');
    }
});

// Keyboard: Escape closes results
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchResults.classList.add('hidden');
        searchInput.blur();
    }
});

// ============================================================
// CATEGORY FILTER CHIPS
// ============================================================
const FILTER_MAP = {
    all: null,
    war: /war|active war/i,
    trade: /trade/i,
    cartel: /cartel|organized crime/i,
    insurgency: /insurgency/i,
    tension: /tension|geopolitical|standoff|dispute/i,
    frozen: /frozen/i,
    crisis: /crisis|collapse|instability|humanitarian/i
};

let activeFilter = 'all';

document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const filter = chip.dataset.filter;

        // Toggle: clicking active chip resets to all
        if (filter === activeFilter && filter !== 'all') {
            activeFilter = 'all';
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            document.querySelector('.filter-chip[data-filter="all"]').classList.add('active');
        } else {
            activeFilter = filter;
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        }

        applyFilter();
    });
});

function applyFilter() {
    const regex = FILTER_MAP[activeFilter];

    activeMarkers.forEach(m => {
        const match = !regex || regex.test(m.region.category);
        if (match) {
            if (!activeLayer.hasLayer(m.circle)) {
                activeLayer.addLayer(m.glow);
                activeLayer.addLayer(m.circle);
            }
            m.circle.setStyle({ fillOpacity: 0.4, opacity: 0.8 });
            m.glow.setStyle({ fillOpacity: 0.15 });
        } else {
            activeLayer.removeLayer(m.circle);
            activeLayer.removeLayer(m.glow);
        }
    });
}

// ============================================================
// STATS DASHBOARD
// ============================================================
const chartInstances = {};

function destroyCharts() {
    Object.values(chartInstances).forEach(c => c.destroy());
    Object.keys(chartInstances).forEach(k => delete chartInstances[k]);
}

const CHART_DEFAULTS = {
    color: '#e0e0e0',
    gridColor: '#1e1e30',
    font: { family: '-apple-system, BlinkMacSystemFont, sans-serif' }
};

function chartOptions(title) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: '#aaa', font: { size: 11 } } }
        },
        scales: {
            x: { ticks: { color: '#888', font: { size: 10 } }, grid: { color: '#1e1e30' } },
            y: { ticks: { color: '#888', font: { size: 10 } }, grid: { color: '#1e1e30' }, beginAtZero: true }
        }
    };
}

function pieOptions() {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'right', labels: { color: '#aaa', font: { size: 10 }, padding: 8, boxWidth: 12 } }
        }
    };
}

function getRegionFromCoords(lat, lng) {
    if (lat > 60) return 'Arctic';
    if (lat < -35) return 'Southern';
    if (lng > 100) return 'East Asia / Pacific';
    if (lng > 60) return 'South Asia';
    if (lng > 25 && lat > 12) return 'Middle East';
    if (lng > -20 && lat < 12 && lat > -35) return 'Africa';
    if (lng > -20 && lat > 35) return 'Europe';
    if (lng < -20 && lat > 15) return 'North America';
    if (lng < -20) return 'Latin America';
    return 'Other';
}

function buildStatsDashboard() {
    destroyCharts();

    // Summary numbers
    document.getElementById('stat-total-active').textContent = TENSION_REGIONS.length;
    document.getElementById('stat-total-historical').textContent = HISTORICAL_REGIONS.length;
    document.getElementById('stat-critical').textContent = TENSION_REGIONS.filter(r => r.tension >= 9).length;
    const avg = (TENSION_REGIONS.reduce((s, r) => s + r.tension, 0) / TENSION_REGIONS.length).toFixed(1);
    document.getElementById('stat-avg-tension').textContent = avg;

    // 1. Tension Distribution (bar chart)
    const tensionCounts = Array(10).fill(0);
    TENSION_REGIONS.forEach(r => tensionCounts[r.tension - 1]++);
    chartInstances.tension = new Chart(document.getElementById('chart-tension'), {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [{
                label: 'Conflicts',
                data: tensionCounts,
                backgroundColor: ['#44aa44', '#44aa44', '#44aa44', '#44aa44', '#ffaa00', '#ffaa00', '#ff6633', '#ff6633', '#ff2222', '#ff2222'],
                borderRadius: 4
            }]
        },
        options: chartOptions()
    });

    // 2. Conflicts by Category (doughnut)
    const catCounts = {};
    TENSION_REGIONS.forEach(r => { catCounts[r.category] = (catCounts[r.category] || 0) + 1; });
    const catLabels = Object.keys(catCounts).sort((a, b) => catCounts[b] - catCounts[a]);
    const catColors = ['#ff4444', '#ff6633', '#ffaa00', '#44aa44', '#4488cc', '#aa44cc', '#cc6644', '#44ccaa', '#8888aa', '#ff88aa', '#66aaff', '#aacc44', '#ff44aa', '#44ffcc', '#cc44ff'];
    chartInstances.category = new Chart(document.getElementById('chart-category'), {
        type: 'doughnut',
        data: {
            labels: catLabels,
            datasets: [{ data: catLabels.map(c => catCounts[c]), backgroundColor: catColors.slice(0, catLabels.length), borderWidth: 0 }]
        },
        options: pieOptions()
    });

    // 3. Conflicts by Region (horizontal bar)
    const regionCounts = {};
    TENSION_REGIONS.forEach(r => {
        const reg = getRegionFromCoords(r.lat, r.lng);
        regionCounts[reg] = (regionCounts[reg] || 0) + 1;
    });
    const regLabels = Object.keys(regionCounts).sort((a, b) => regionCounts[b] - regionCounts[a]);
    chartInstances.region = new Chart(document.getElementById('chart-region'), {
        type: 'bar',
        data: {
            labels: regLabels,
            datasets: [{
                label: 'Conflicts',
                data: regLabels.map(r => regionCounts[r]),
                backgroundColor: '#ff6633',
                borderRadius: 4
            }]
        },
        options: { ...chartOptions(), indexAxis: 'y' }
    });

    // 4. Severity Breakdown (pie)
    const sevCounts = { 'Critical (9-10)': 0, 'High (7-8)': 0, 'Elevated (5-6)': 0, 'Low (1-4)': 0 };
    TENSION_REGIONS.forEach(r => {
        if (r.tension >= 9) sevCounts['Critical (9-10)']++;
        else if (r.tension >= 7) sevCounts['High (7-8)']++;
        else if (r.tension >= 5) sevCounts['Elevated (5-6)']++;
        else sevCounts['Low (1-4)']++;
    });
    chartInstances.severity = new Chart(document.getElementById('chart-severity'), {
        type: 'pie',
        data: {
            labels: Object.keys(sevCounts),
            datasets: [{ data: Object.values(sevCounts), backgroundColor: ['#ff2222', '#ff6633', '#ffaa00', '#44aa44'], borderWidth: 0 }]
        },
        options: pieOptions()
    });

    // 5. Historical Conflicts by Century (bar)
    const centuryCounts = {};
    HISTORICAL_REGIONS.forEach(r => {
        const { startYear } = parseYearRange(r.years);
        let century;
        if (startYear < -1000) century = 'Pre-1000 BC';
        else if (startYear < 0) century = Math.ceil(Math.abs(startYear) / 100) + '00s BC';
        else if (startYear < 100) century = '1st c.';
        else century = Math.ceil(startYear / 100) + '00s';
        centuryCounts[century] = (centuryCounts[century] || 0) + 1;
    });
    // Sort centuries chronologically
    const centuryLabels = Object.keys(centuryCounts).sort((a, b) => {
        const getVal = s => {
            if (s === 'Pre-1000 BC') return -2000;
            if (s === '1st c.') return 50;
            if (s.includes('BC')) return -parseInt(s);
            return parseInt(s);
        };
        return getVal(a) - getVal(b);
    });
    chartInstances.century = new Chart(document.getElementById('chart-century'), {
        type: 'bar',
        data: {
            labels: centuryLabels,
            datasets: [{
                label: 'Conflicts',
                data: centuryLabels.map(c => centuryCounts[c]),
                backgroundColor: '#4488cc',
                borderRadius: 4
            }]
        },
        options: chartOptions()
    });

    // 6. Historical by Type (doughnut)
    const histTypeCounts = {};
    HISTORICAL_REGIONS.forEach(r => { histTypeCounts[r.category] = (histTypeCounts[r.category] || 0) + 1; });
    const histTypeLabels = Object.keys(histTypeCounts).sort((a, b) => histTypeCounts[b] - histTypeCounts[a]).slice(0, 12);
    const histColors = ['#4488cc', '#66aaff', '#2266aa', '#88bbff', '#aaddff', '#3399cc', '#1155aa', '#77aadd', '#44ccee', '#99bbdd', '#5577aa', '#6699bb'];
    chartInstances.histType = new Chart(document.getElementById('chart-hist-type'), {
        type: 'doughnut',
        data: {
            labels: histTypeLabels,
            datasets: [{ data: histTypeLabels.map(t => histTypeCounts[t]), backgroundColor: histColors, borderWidth: 0 }]
        },
        options: pieOptions()
    });

    // 7. Military Spending — Top 20 (horizontal bar)
    chartInstances.military = new Chart(document.getElementById('chart-military'), {
        type: 'bar',
        data: {
            labels: MILITARY_SPENDING.map(m => m.country),
            datasets: [{
                label: '$ Billions',
                data: MILITARY_SPENDING.map(m => m.spending),
                backgroundColor: MILITARY_SPENDING.map(m => m.color),
                borderRadius: 4
            }]
        },
        options: {
            ...chartOptions(),
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => `$${ctx.raw}B`
                    }
                }
            }
        }
    });

    // 8. Casualty Comparison — Stacked bar
    const sortedCasualties = [...CASUALTY_DATA].sort((a, b) =>
        (b.military + b.civilian + b.displaced) - (a.military + a.civilian + a.displaced)
    );
    chartInstances.casualties = new Chart(document.getElementById('chart-casualties'), {
        type: 'bar',
        data: {
            labels: sortedCasualties.map(c => c.name),
            datasets: [
                {
                    label: 'Military',
                    data: sortedCasualties.map(c => c.military),
                    backgroundColor: '#ff4444',
                    borderRadius: 2
                },
                {
                    label: 'Civilian',
                    data: sortedCasualties.map(c => c.civilian),
                    backgroundColor: '#ff8844',
                    borderRadius: 2
                },
                {
                    label: 'Displaced',
                    data: sortedCasualties.map(c => c.displaced),
                    backgroundColor: '#4488cc',
                    borderRadius: 2
                }
            ]
        },
        options: {
            ...chartOptions(),
            indexAxis: 'y',
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: '#888',
                        font: { size: 10 },
                        callback: v => {
                            if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
                            if (v >= 1000) return (v / 1000).toFixed(0) + 'K';
                            return v;
                        }
                    },
                    grid: { color: '#1e1e30' }
                },
                y: {
                    stacked: true,
                    ticks: { color: '#888', font: { size: 10 } },
                    grid: { color: '#1e1e30' }
                }
            },
            plugins: {
                legend: { labels: { color: '#aaa', font: { size: 11 } } },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const v = ctx.raw;
                            if (v >= 1000000) return `${ctx.dataset.label}: ${(v / 1000000).toFixed(1)}M`;
                            if (v >= 1000) return `${ctx.dataset.label}: ${(v / 1000).toFixed(0)}K`;
                            return `${ctx.dataset.label}: ${v}`;
                        }
                    }
                }
            }
        }
    });
}
