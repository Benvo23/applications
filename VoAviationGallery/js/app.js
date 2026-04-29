// ===== IMAGE PROTECTION =====
(function () {
    // Block right-click
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Block drag
    document.addEventListener('dragstart', e => e.preventDefault());

    // Block keyboard shortcuts for saving/copying
    document.addEventListener('keydown', e => {
        // Ctrl/Cmd + S (save), Ctrl/Cmd + U (view source), Ctrl/Cmd + Shift + I (dev tools)
        if ((e.ctrlKey || e.metaKey) && ['s', 'u', 'p'].includes(e.key.toLowerCase())) {
            e.preventDefault();
        }
        // Ctrl/Cmd + Shift + I, J, C (dev tools)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) {
            e.preventDefault();
        }
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
        }
        // PrintScreen
        if (e.key === 'PrintScreen') {
            e.preventDefault();
        }
    });

    // Block copy
    document.addEventListener('copy', e => {
        e.preventDefault();
        e.clipboardData.setData('text/plain', 'Images are protected by copyright.');
    });
})();

// ===== AIRPORT NAMES (IATA -> Full name with ICAO/IATA) =====
const AIRPORT_NAMES = {
    "LAX": "Los Angeles International Airport (KLAX/LAX)",
    "SFO": "San Francisco International Airport (KSFO/SFO)",
    "JFK": "John F. Kennedy International Airport (KJFK/JFK)",
    "ORD": "Chicago O'Hare International Airport (KORD/ORD)",
    "ATL": "Hartsfield-Jackson Atlanta International Airport (KATL/ATL)",
    "DFW": "Dallas/Fort Worth International Airport (KDFW/DFW)",
    "SEA": "Seattle-Tacoma International Airport (KSEA/SEA)",
    "DEN": "Denver International Airport (KDEN/DEN)",
    "PHX": "Phoenix Sky Harbor International Airport (KPHX/PHX)",
    "LAS": "Harry Reid International Airport (KLAS/LAS)",
    "MIA": "Miami International Airport (KMIA/MIA)",
    "BOS": "Boston Logan International Airport (KBOS/BOS)",
    "EWR": "Newark Liberty International Airport (KEWR/EWR)",
    "IAH": "George Bush Intercontinental Airport (KIAH/IAH)",
    "MSP": "Minneapolis-Saint Paul International Airport (KMSP/MSP)",
    "DTW": "Detroit Metropolitan Airport (KDTW/DTW)",
    "PHL": "Philadelphia International Airport (KPHL/PHL)",
    "SAN": "San Diego International Airport (KSAN/SAN)",
    "BUR": "Hollywood Burbank Airport (KBUR/BUR)",
    "ONT": "Ontario International Airport (KONT/ONT)",
    "LGB": "Long Beach Airport (KLGB/LGB)",
    "SNA": "John Wayne Airport (KSNA/SNA)",
    "OAK": "Oakland International Airport (KOAK/OAK)",
    "SJC": "San Jose International Airport (KSJC/SJC)",
};

function getAirportFullName(code) {
    return AIRPORT_NAMES[code] || code;
}

// ===== STATE =====
let currentFilter = 'all';
let currentLocation = 'all';
let currentSort = 'newest';
let searchQuery = '';
let lightboxIndex = -1;
let filteredPhotos = [];

// ===== DOM REFS =====
const galleryGrid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const locationSelect = document.getElementById('locationSelect');
const resultsText = document.getElementById('resultsText');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxInfo = document.getElementById('lightboxInfo');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// ===== STATS =====
function updateStats() {
    const photos = PHOTOS;
    document.getElementById('photoCount').textContent = photos.length;
    document.getElementById('aircraftCount').textContent =
        new Set(photos.map(p => p.aircraft)).size;
    document.getElementById('airlineCount').textContent =
        new Set(photos.map(p => p.airline)).size;
    document.getElementById('locationCount').textContent =
        new Set(photos.map(p => p.location)).size;
}

// ===== FILTER & SORT =====
function getFilteredPhotos() {
    let photos = [...PHOTOS];

    // Category filter
    if (currentFilter !== 'all') {
        photos = photos.filter(p => p.category === currentFilter);
    }

    // Location filter
    if (currentLocation !== 'all') {
        photos = photos.filter(p => p.airport === currentLocation);
    }

    // Search
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        photos = photos.filter(p =>
            p.aircraft.toLowerCase().includes(q) ||
            p.airline.toLowerCase().includes(q) ||
            p.registration.toLowerCase().includes(q) ||
            p.airport.toLowerCase().includes(q) ||
            p.location.toLowerCase().includes(q) ||
            (p.description && p.description.toLowerCase().includes(q))
        );
    }

    // Sort
    switch (currentSort) {
        case 'newest':
            photos.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            photos.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'airline':
            photos.sort((a, b) => a.airline.localeCompare(b.airline));
            break;
        case 'aircraft':
            photos.sort((a, b) => a.aircraft.localeCompare(b.aircraft));
            break;
        case 'location':
            photos.sort((a, b) => a.airport.localeCompare(b.airport));
            break;
    }

    return photos;
}

// ===== RENDER GALLERY =====
function renderGallery() {
    filteredPhotos = getFilteredPhotos();
    galleryGrid.innerHTML = '';

    if (filteredPhotos.length === 0) {
        galleryGrid.innerHTML = `
            <div class="empty-state">
                <h2>${PHOTOS.length === 0 ? 'No photos yet' : 'No matching photos'}</h2>
                <p>${PHOTOS.length === 0
                    ? 'Add your aviation photos to js/photos.js and drop images into the /images folder.'
                    : 'Try adjusting your search or filter.'
                }</p>
            </div>
        `;
        resultsText.textContent = 'No photos found';
        return;
    }

    filteredPhotos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.setAttribute('data-index', index);

        card.innerHTML = `
            <div class="photo-card-image">
                <div class="image-bg" style="background-image: url('${photo.src}')"></div>
                <div class="image-shield"></div>
                <div class="card-watermark">VO AVIATION</div>
            </div>
            <div class="photo-card-meta">
                <div class="aircraft-type pill" data-filter-type="aircraft" data-filter-value="${photo.aircraft}">${photo.aircraft}</div>
                <div class="airline-name pill" data-filter-type="airline" data-filter-value="${photo.airline}">${photo.airline}</div>
                <div class="photo-card-details">
                    <div class="detail">
                        <span class="detail-label">Reg:</span>
                        <span class="detail-value">${photo.registration}</span>
                    </div>
                    <div class="detail">
                        <span class="detail-label">Airport:</span>
                        <span class="detail-value">${photo.airport}</span>
                    </div>
                    <div class="detail">
                        <span class="detail-label">Location:</span>
                        <span class="detail-value">${photo.location}</span>
                    </div>
                </div>
            </div>
            <div class="photo-card-footer">
                <span>${formatDate(photo.date)}</span>
                <span class="category-tag">${photo.category}</span>
            </div>
        `;

        // Pill clicks set search filter and stop card click propagation
        card.querySelectorAll('.pill').forEach(pill => {
            pill.addEventListener('click', e => {
                e.stopPropagation();
                searchInput.value = pill.dataset.filterValue;
                searchQuery = pill.dataset.filterValue;
                renderGallery();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        card.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(card);
    });

    const filterLabel = currentFilter === 'all' ? 'all' : currentFilter;
    resultsText.textContent = `Showing ${filteredPhotos.length} ${filterLabel} photo${filteredPhotos.length !== 1 ? 's' : ''}`;
}

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// ===== LIGHTBOX =====
function openLightbox(index) {
    lightboxIndex = index;
    const photo = filteredPhotos[index];

    lightboxImage.style.backgroundImage = `url('${photo.src}')`;

    lightboxInfo.innerHTML = `
        <div class="lb-aircraft">${photo.aircraft}</div>
        <div class="lb-airline">${photo.airline}</div>
        <div class="lb-details">
            <span><span class="lbl">Reg:</span> ${photo.registration}</span>
            <span><span class="lbl">Airport:</span> ${photo.airport}</span>
            <span><span class="lbl">Location:</span> ${photo.location}</span>
            <span><span class="lbl">Date:</span> ${formatDate(photo.date)}</span>
        </div>
        ${photo.description ? `<div class="lb-details" style="margin-top:8px"><span>${photo.description}</span></div>` : ''}
        <div class="lb-copyright">&copy; Vo Aviation Gallery &mdash; All rights reserved. Do not copy or redistribute.</div>
    `;

    resetZoom();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxIndex = -1;
}

function prevPhoto() {
    if (filteredPhotos.length === 0) return;
    lightboxIndex = (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    openLightbox(lightboxIndex);
}

function nextPhoto() {
    if (filteredPhotos.length === 0) return;
    lightboxIndex = (lightboxIndex + 1) % filteredPhotos.length;
    openLightbox(lightboxIndex);
}

// ===== ZOOM & PAN =====
let zoomLevel = 1;
let panX = 0;
let panY = 0;
let isPanning = false;
let panStartX = 0;
let panStartY = 0;

const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
const zoomResetBtn = document.getElementById('zoomReset');

function applyZoom() {
    const wrap = document.querySelector('.lightbox-image-wrap');
    wrap.style.transform = `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`;
}

function resetZoom() {
    zoomLevel = 1;
    panX = 0;
    panY = 0;
    applyZoom();
}

function zoomIn() {
    if (zoomLevel < 5) {
        zoomLevel = Math.min(5, zoomLevel + 0.5);
        applyZoom();
    }
}

function zoomOut() {
    if (zoomLevel > 1) {
        zoomLevel = Math.max(1, zoomLevel - 0.5);
        if (zoomLevel === 1) { panX = 0; panY = 0; }
        applyZoom();
    }
}

zoomInBtn.addEventListener('click', zoomIn);
zoomOutBtn.addEventListener('click', zoomOut);
zoomResetBtn.addEventListener('click', resetZoom);

// Scroll wheel zoom
lightbox.addEventListener('wheel', e => {
    if (!lightbox.classList.contains('active')) return;
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
}, { passive: false });

// Click-drag to pan when zoomed
const lightboxImageWrap = document.querySelector('.lightbox-image-wrap');

lightboxImageWrap.addEventListener('mousedown', e => {
    if (zoomLevel <= 1) return;
    isPanning = true;
    panStartX = e.clientX - panX;
    panStartY = e.clientY - panY;
    lightboxImageWrap.style.cursor = 'grabbing';
    e.preventDefault();
});

document.addEventListener('mousemove', e => {
    if (!isPanning) return;
    panX = e.clientX - panStartX;
    panY = e.clientY - panStartY;
    applyZoom();
});

document.addEventListener('mouseup', () => {
    if (isPanning) {
        isPanning = false;
        lightboxImageWrap.style.cursor = zoomLevel > 1 ? 'grab' : '';
    }
});

// ===== EVENT LISTENERS =====

// Navigation filter
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        currentFilter = link.dataset.filter;
        renderGallery();
    });
});

// Search
searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    renderGallery();
});

// Sort
sortSelect.addEventListener('change', e => {
    currentSort = e.target.value;
    renderGallery();
});

// Location filter
locationSelect.addEventListener('change', e => {
    currentLocation = e.target.value;
    renderGallery();
});

// Lightbox controls
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevPhoto);
lightboxNext.addEventListener('click', nextPhoto);

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
});

// ===== INIT =====
function populateLocationFilter() {
    const locations = [...new Set(PHOTOS.map(p => p.airport))].sort();
    locations.forEach(loc => {
        const opt = document.createElement('option');
        opt.value = loc;
        opt.textContent = getAirportFullName(loc);
        locationSelect.appendChild(opt);
    });
}

updateStats();
populateLocationFilter();
renderGallery();
