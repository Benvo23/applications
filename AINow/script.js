// ============================================
// AI Now — Interactive Features + Settings
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ======================
    // Toast System
    // ======================
    function showToast(message, icon = 'check') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';

        const icons = {
            check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
            bookmark: '<svg width="16" height="16" viewBox="0 0 24 24" fill="#818cf8" stroke="#818cf8" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
            remove: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>',
            info: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
        };

        toast.innerHTML = `<span class="toast-icon">${icons[icon] || icons.check}</span><span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('toast-out');
            toast.addEventListener('animationend', () => toast.remove());
        }, 2800);
    }

    // ======================
    // Settings Storage
    // ======================
    const DEFAULTS = {
        theme: 'light',
        accentColor: '#6366f1',
        fontSize: 'medium',
        reduceMotion: false,
        compact: false,
        hideTicker: false,
    };

    function loadSettings() {
        try {
            const saved = JSON.parse(localStorage.getItem('ainow-settings'));
            return { ...DEFAULTS, ...saved };
        } catch {
            return { ...DEFAULTS };
        }
    }

    function saveSettings(s) {
        localStorage.setItem('ainow-settings', JSON.stringify(s));
    }

    let settings = loadSettings();

    // ======================
    // Apply Settings
    // ======================
    function applyTheme(theme) {
        let resolved = theme;
        if (theme === 'auto') {
            resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', resolved);
    }

    function applyAccentColor(color) {
        document.documentElement.style.setProperty('--accent', color);
        document.documentElement.style.setProperty('--accent-light', color + 'cc');
        document.documentElement.style.setProperty('--accent-subtle', color + '18');
        document.documentElement.style.setProperty('--accent-glow', color + '30');
    }

    function applyFontSize(size) { document.documentElement.setAttribute('data-font-size', size); }
    function applyReduceMotion(on) { document.documentElement.setAttribute('data-reduce-motion', on); }
    function applyCompact(on) { document.documentElement.setAttribute('data-compact', on); }
    function applyHideTicker(on) { document.documentElement.setAttribute('data-hide-ticker', on); }

    function applyAllSettings() {
        applyTheme(settings.theme);
        applyAccentColor(settings.accentColor);
        applyFontSize(settings.fontSize);
        applyReduceMotion(settings.reduceMotion);
        applyCompact(settings.compact);
        applyHideTicker(settings.hideTicker);
    }

    applyAllSettings();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (settings.theme === 'auto') applyTheme('auto');
    });

    // ======================
    // Settings Panel
    // ======================
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsOverlay = document.getElementById('settingsOverlay');
    const settingsCloseBtn = document.getElementById('settingsCloseBtn');

    function openSettings() {
        closeAllPanels();
        settingsPanel.classList.add('open');
        settingsOverlay.classList.add('open');
        syncSettingsUI();
    }

    function closeSettings() {
        settingsPanel.classList.remove('open');
        settingsOverlay.classList.remove('open');
    }

    settingsBtn.addEventListener('click', openSettings);
    settingsCloseBtn.addEventListener('click', closeSettings);
    settingsOverlay.addEventListener('click', closeSettings);

    function syncSettingsUI() {
        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.themeValue === settings.theme);
        });
        document.querySelectorAll('.color-swatch').forEach(swatch => {
            swatch.classList.toggle('active', swatch.dataset.color === settings.accentColor);
        });
        document.querySelectorAll('.font-size-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.size === settings.fontSize);
        });
        document.getElementById('reduceMotionToggle').checked = settings.reduceMotion;
        document.getElementById('compactToggle').checked = settings.compact;
        document.getElementById('hideTickerToggle').checked = settings.hideTicker;
    }

    document.getElementById('themePicker').addEventListener('click', (e) => {
        const btn = e.target.closest('.theme-option');
        if (!btn) return;
        settings.theme = btn.dataset.themeValue;
        applyTheme(settings.theme);
        saveSettings(settings);
        syncSettingsUI();
    });

    document.getElementById('colorPicker').addEventListener('click', (e) => {
        const swatch = e.target.closest('.color-swatch');
        if (!swatch) return;
        settings.accentColor = swatch.dataset.color;
        applyAccentColor(settings.accentColor);
        saveSettings(settings);
        syncSettingsUI();
    });

    document.getElementById('fontSizeControl').addEventListener('click', (e) => {
        const btn = e.target.closest('.font-size-option');
        if (!btn) return;
        settings.fontSize = btn.dataset.size;
        applyFontSize(settings.fontSize);
        saveSettings(settings);
        syncSettingsUI();
    });

    document.getElementById('reduceMotionToggle').addEventListener('change', (e) => {
        settings.reduceMotion = e.target.checked;
        applyReduceMotion(settings.reduceMotion);
        saveSettings(settings);
    });

    document.getElementById('compactToggle').addEventListener('change', (e) => {
        settings.compact = e.target.checked;
        applyCompact(settings.compact);
        saveSettings(settings);
    });

    document.getElementById('hideTickerToggle').addEventListener('change', (e) => {
        settings.hideTicker = e.target.checked;
        applyHideTicker(settings.hideTicker);
        saveSettings(settings);
    });

    document.getElementById('resetSettingsBtn').addEventListener('click', () => {
        settings = { ...DEFAULTS };
        saveSettings(settings);
        applyAllSettings();
        syncSettingsUI();
        showToast('Settings reset to defaults', 'info');
    });

    // ======================
    // 1. Reading Progress Bar
    // ======================
    const progressBar = document.getElementById('readingProgress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    }, { passive: true });

    // ======================
    // 2. Back to Top
    // ======================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ======================
    // 3. Live Clock
    // ======================
    const clockEl = document.getElementById('liveClock');

    function updateClock() {
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        clockEl.textContent = now.toLocaleDateString('en-US', options);
    }

    updateClock();
    setInterval(updateClock, 1000);

    // ======================
    // 4. Bookmark / Reading List
    // ======================
    let bookmarks = JSON.parse(localStorage.getItem('ainow-bookmarks') || '[]');

    // Add bookmark buttons to all article cards
    document.querySelectorAll('.article-card').forEach((card, index) => {
        const cardImg = card.querySelector('.card-img');
        if (!cardImg) return;

        const title = card.querySelector('h3')?.textContent || '';
        const category = card.dataset.category || '';
        const id = 'article-' + index;
        card.dataset.articleId = id;
        card.dataset.indexed = 'true';

        const btn = document.createElement('button');
        btn.className = 'bookmark-btn' + (bookmarks.find(b => b.id === id) ? ' bookmarked' : '');
        btn.setAttribute('aria-label', 'Bookmark article');
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleBookmark(id, title, category, btn);
        });

        cardImg.appendChild(btn);
    });

    function toggleBookmark(id, title, category, btn) {
        const idx = bookmarks.findIndex(b => b.id === id);
        if (idx > -1) {
            bookmarks.splice(idx, 1);
            btn.classList.remove('bookmarked');
            showToast('Removed from reading list', 'remove');
        } else {
            bookmarks.push({ id, title, category, savedAt: Date.now() });
            btn.classList.add('bookmarked');
            showToast('Saved to reading list', 'bookmark');
        }
        localStorage.setItem('ainow-bookmarks', JSON.stringify(bookmarks));
        renderReadingList();
    }

    // Reading List Drawer
    const readingListDrawer = document.getElementById('readingListDrawer');
    const readingListOverlay = document.getElementById('readingListOverlay');
    const readingListClose = document.getElementById('readingListClose');
    const readingListBody = document.getElementById('readingListBody');
    const readingListCount = document.getElementById('readingListCount');
    const readingListEmpty = document.getElementById('readingListEmpty');

    function openReadingList() {
        closeAllPanels();
        readingListDrawer.classList.add('open');
        readingListOverlay.classList.add('open');
        renderReadingList();
    }

    function closeReadingList() {
        readingListDrawer.classList.remove('open');
        readingListOverlay.classList.remove('open');
    }

    readingListClose.addEventListener('click', closeReadingList);
    readingListOverlay.addEventListener('click', closeReadingList);

    function renderReadingList() {
        readingListCount.textContent = bookmarks.length + ' saved';

        // Remove existing items (keep the empty state element)
        readingListBody.querySelectorAll('.saved-article-item').forEach(el => el.remove());

        if (bookmarks.length === 0) {
            readingListEmpty.style.display = 'flex';
            return;
        }

        readingListEmpty.style.display = 'none';

        bookmarks.forEach(bm => {
            const item = document.createElement('div');
            item.className = 'saved-article-item';
            item.innerHTML = `
                <div class="saved-article-info">
                    <h4>${bm.title}</h4>
                    <span>${bm.category.replace(/-/g, ' ')} &middot; saved ${timeAgo(bm.savedAt)}</span>
                </div>
                <button class="saved-article-remove" data-id="${bm.id}" aria-label="Remove">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
            `;

            item.querySelector('.saved-article-remove').addEventListener('click', () => {
                const i = bookmarks.findIndex(b => b.id === bm.id);
                if (i > -1) bookmarks.splice(i, 1);
                localStorage.setItem('ainow-bookmarks', JSON.stringify(bookmarks));

                // Also update the card's bookmark button
                const card = document.querySelector(`[data-article-id="${bm.id}"]`);
                if (card) card.querySelector('.bookmark-btn')?.classList.remove('bookmarked');

                showToast('Removed from reading list', 'remove');
                renderReadingList();
            });

            readingListBody.appendChild(item);
        });
    }

    function timeAgo(ts) {
        const diff = Date.now() - ts;
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'just now';
        if (mins < 60) return mins + 'm ago';
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return hrs + 'h ago';
        return Math.floor(hrs / 24) + 'd ago';
    }

    renderReadingList();

    // ======================
    // 5. Toast already above
    // ======================

    // ======================
    // 6. Readers Online (simulated)
    // ======================
    const readersEl = document.getElementById('readersCount');
    let readerCount = 0;
    readersEl.textContent = '0';

    // ======================
    // 7. Keyboard Shortcuts Modal
    // ======================
    const kbdModalOverlay = document.getElementById('kbdModalOverlay');
    const kbdModalClose = document.getElementById('kbdModalClose');
    const kbdBtn = document.getElementById('kbdBtn');

    function openKbdModal() {
        closeAllPanels();
        kbdModalOverlay.classList.add('open');
    }

    function closeKbdModal() {
        kbdModalOverlay.classList.remove('open');
    }

    kbdBtn.addEventListener('click', openKbdModal);
    kbdModalClose.addEventListener('click', closeKbdModal);
    kbdModalOverlay.addEventListener('click', (e) => {
        if (e.target === kbdModalOverlay) closeKbdModal();
    });

    // ======================
    // Notification Bell
    // ======================
    const notifBtn = document.getElementById('notifBtn');
    const notifPanel = document.getElementById('notifPanel');
    const notifBadge = document.getElementById('notifBadge');
    const notifPanelBody = document.getElementById('notifPanelBody');
    const notifEmptyState = document.getElementById('notifEmptyState');
    const notifMarkRead = document.getElementById('notifMarkRead');
    const notifClearAll = document.getElementById('notifClear');
    let notifications = [];
    let unreadCount = 0;

    const notifHeadlines = [
        { type: 'breaking', label: 'Breaking News', text: 'Major AI lab announces surprise model release ahead of schedule' },
        { type: 'breaking', label: 'Breaking News', text: 'Semiconductor export restrictions expanded to cover AI training chips' },
        { type: 'breaking', label: 'Breaking News', text: 'AI-generated content labeling law signed into effect immediately' },
        { type: 'trending', label: 'Trending', text: 'New open-source model climbs to #1 on community leaderboard' },
        { type: 'trending', label: 'Trending', text: 'Viral demo shows AI agent booking travel and managing calendar autonomously' },
        { type: 'trending', label: 'Trending', text: 'Startup founder\'s thread on "why we left the cloud" goes viral' },
        { type: 'update', label: 'AI Now Update', text: 'New deep dive published: "The Real Economics of AI Infrastructure"' },
        { type: 'update', label: 'AI Now Update', text: 'This week\'s podcast episode is now live — featuring a top AI researcher' },
        { type: 'breaking', label: 'Breaking News', text: 'Record-breaking funding round closes for stealth AI robotics company' },
        { type: 'trending', label: 'Trending', text: 'University study finds AI-assisted coding reduces bugs by 40%' },
        { type: 'update', label: 'AI Now Update', text: 'AI Market Pulse: chip stocks surge after earnings beat expectations' },
        { type: 'breaking', label: 'Breaking News', text: 'Major tech company announces layoffs, shifts budget to AI division' },
        { type: 'trending', label: 'Trending', text: 'Researchers publish first successful test of AI-designed drug compound' },
        { type: 'update', label: 'AI Now Update', text: 'New category added: AI in Education — check out the latest stories' },
    ];

    let notifPool = [...notifHeadlines];

    function toggleNotifPanel() {
        const isOpen = notifPanel.classList.contains('open');
        if (isOpen) {
            notifPanel.classList.remove('open');
        } else {
            // Close other panels first
            closeAllPanels();
            notifPanel.classList.add('open');
        }
    }

    notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNotifPanel();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!notifPanel.contains(e.target) && !notifBtn.contains(e.target)) {
            notifPanel.classList.remove('open');
        }
    });

    function updateBadge() {
        unreadCount = notifications.filter(n => !n.read).length;
        if (unreadCount > 0) {
            notifBadge.textContent = unreadCount > 9 ? '9+' : unreadCount;
            notifBadge.classList.add('visible');
            notifBtn.classList.add('has-unread');
        } else {
            notifBadge.classList.remove('visible');
            notifBtn.classList.remove('has-unread');
        }
    }

    function renderNotifications() {
        // Remove all items except empty state
        notifPanelBody.querySelectorAll('.notif-item').forEach(el => el.remove());

        if (notifications.length === 0) {
            notifEmptyState.style.display = 'flex';
            return;
        }

        notifEmptyState.style.display = 'none';

        notifications.forEach((n, i) => {
            const item = document.createElement('div');
            item.className = 'notif-item' + (n.read ? '' : ' unread') + (n.isNew ? ' new' : '');

            const iconSvgs = {
                breaking: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
                trending: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>',
                update: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
            };

            const labelClasses = {
                breaking: 'label-breaking',
                trending: 'label-trending',
                update: 'label-update',
            };

            item.innerHTML = `
                <div class="notif-icon notif-${n.type}">
                    ${iconSvgs[n.type] || iconSvgs.update}
                </div>
                <div class="notif-content">
                    <span class="notif-label ${labelClasses[n.type] || ''}">${n.label}</span>
                    <p>${n.text}</p>
                    <span class="notif-time">${timeAgo(n.ts)}</span>
                </div>
            `;

            item.addEventListener('click', () => {
                n.read = true;
                item.classList.remove('unread');
                updateBadge();
                showToast('Notification opened', 'info');
            });

            // Insert at top
            if (notifEmptyState.nextSibling) {
                notifPanelBody.insertBefore(item, notifEmptyState.nextSibling);
            } else {
                notifPanelBody.appendChild(item);
            }

            // Remove new flag after animation
            if (n.isNew) {
                setTimeout(() => { n.isNew = false; }, 400);
            }
        });

        updateBadge();
    }

    function pushNotification() {
        if (notifPool.length === 0) notifPool = [...notifHeadlines]; // refill pool
        const idx = Math.floor(Math.random() * notifPool.length);
        const template = notifPool.splice(idx, 1)[0];

        const notif = {
            ...template,
            ts: Date.now(),
            read: false,
            isNew: true,
        };

        notifications.unshift(notif);
        if (notifications.length > 20) notifications.pop(); // cap at 20

        renderNotifications();

        // Ring the bell
        notifBtn.classList.add('ring');
        setTimeout(() => notifBtn.classList.remove('ring'), 700);
    }

    // Mark all read
    notifMarkRead.addEventListener('click', () => {
        notifications.forEach(n => n.read = true);
        renderNotifications();
        showToast('All notifications marked as read', 'check');
    });

    // Clear all
    notifClearAll.addEventListener('click', () => {
        notifications = [];
        renderNotifications();
        showToast('Notifications cleared', 'check');
    });

    // Push first notification after 8 seconds, then every 25-50 seconds
    setTimeout(() => {
        pushNotification();
        setInterval(() => {
            pushNotification();
        }, 25000 + Math.random() * 25000);
    }, 8000);

    renderNotifications();

    // ======================
    // 8. AI Market Pulse
    // ======================
    const marketTicker = document.getElementById('marketTicker');
    if (marketTicker) {
        // Duplicate for seamless scroll
        marketTicker.innerHTML += marketTicker.innerHTML;

        // Simulate price changes every 4 seconds
        setInterval(() => {
            document.querySelectorAll('.market-item').forEach(item => {
                const priceEl = item.querySelector('.market-price');
                const changeEl = item.querySelector('.market-change');
                if (!priceEl || !changeEl) return;

                // Parse current price
                let price = parseFloat(priceEl.textContent.replace(/[$,]/g, ''));
                const volatility = price * 0.002; // 0.2% max move
                const move = (Math.random() - 0.48) * volatility; // slight upward bias
                price = Math.max(1, price + move);

                priceEl.textContent = '$' + price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

                // Recalculate change (randomize slightly)
                let pct = parseFloat(changeEl.textContent.replace(/[+%]/g, ''));
                pct += (Math.random() - 0.48) * 0.15;
                pct = Math.max(-9.99, Math.min(9.99, pct));

                changeEl.textContent = (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%';
                changeEl.className = 'market-change ' + (pct >= 0 ? 'positive' : 'negative');
            });
        }, 4000);
    }

    // ======================
    // Close All Panels Helper
    // ======================
    function closeAllPanels() {
        closeSettings();
        closeReadingList();
        closeKbdModal();
        closeSearch();
        if (notifPanel) notifPanel.classList.remove('open');
    }

    // ======================
    // Global Keyboard Shortcuts
    // ======================
    document.addEventListener('keydown', (e) => {
        // Always allow Escape and Cmd+K from anywhere
        if (e.key === 'Escape') {
            closeAllPanels();
            return;
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openCmdPalette();
            return;
        }

        // Don't fire other shortcuts when typing in inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        // ? : keyboard shortcuts
        if (e.key === '?') {
            openKbdModal();
            return;
        }

        // T: back to top
        if (e.key === 't' || e.key === 'T') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // S: settings
        if (e.key === 's') {
            openSettings();
            return;
        }

        // B: bookmarks / reading list
        if (e.key === 'b') {
            openReadingList();
            return;
        }

        // D: toggle dark mode
        if (e.key === 'd') {
            const current = document.documentElement.getAttribute('data-theme');
            settings.theme = current === 'dark' ? 'light' : 'dark';
            applyTheme(settings.theme);
            saveSettings(settings);
            showToast(settings.theme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled', 'info');
            return;
        }
    });

    // ======================
    // Header Scroll Effect
    // ======================
    const header = document.getElementById('siteHeader');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });

    // ======================
    // Mobile Menu
    // ======================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        mobileMenuBtn.classList.toggle('active');
    });

    mainNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // ======================
    // Command Palette
    // ======================
    const searchBtn = document.getElementById('searchBtn');
    const cmdOverlay = document.getElementById('cmdPaletteOverlay');
    const cmdInput = document.getElementById('cmdInput');
    const cmdResults = document.getElementById('cmdResults');
    const cmdEmpty = document.getElementById('cmdEmpty');
    const cmdArticleItems = document.getElementById('cmdArticleItems');
    const cmdGroupArticles = document.getElementById('cmdGroupArticles');
    const cmdGroupActions = document.getElementById('cmdGroupActions');
    const cmdGroupSections = document.getElementById('cmdGroupSections');

    // Aliases for backward compat with closeSearch calls
    const searchOverlay = cmdOverlay;
    const searchInput = cmdInput;

    // Build article index
    const articleIndex = [];
    document.querySelectorAll('.article-card').forEach(card => {
        const title = card.querySelector('h3')?.textContent || '';
        const category = card.dataset.category || '';
        articleIndex.push({ title, category, el: card });
    });

    function openCmdPalette() {
        closeAllPanels();
        cmdOverlay.classList.add('open');
        cmdInput.value = '';
        highlightedIdx = -1;
        renderCmdResults('');
        setTimeout(() => cmdInput.focus(), 150);
    }

    function closeCmdPalette() {
        cmdOverlay.classList.remove('open');
        cmdInput.value = '';
        highlightedIdx = -1;
    }

    // Alias
    function closeSearch() { closeCmdPalette(); }

    searchBtn.addEventListener('click', openCmdPalette);

    cmdOverlay.addEventListener('click', (e) => {
        if (e.target === cmdOverlay) closeCmdPalette();
    });

    // Search + filter
    cmdInput.addEventListener('input', () => {
        renderCmdResults(cmdInput.value.trim().toLowerCase());
    });

    function highlightMatch(text, query) {
        if (!query) return text;
        const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escaped})`, 'gi');
        return text.replace(regex, '<mark style="background:var(--accent-subtle);color:var(--accent);padding:1px 2px;border-radius:3px;font-weight:700">$1</mark>');
    }

    function renderCmdResults(query) {
        // Clear article results
        cmdArticleItems.innerHTML = '';

        if (!query) {
            // Show everything
            cmdGroupArticles.style.display = 'none';
            cmdGroupActions.style.display = '';
            cmdGroupSections.style.display = '';
            cmdEmpty.style.display = 'none';
            cmdResults.style.display = '';
            updateHighlightables();
            return;
        }

        // Filter articles
        const matches = articleIndex.filter(a =>
            a.title.toLowerCase().includes(query) ||
            a.category.replace(/-/g, ' ').includes(query)
        ).slice(0, 6);

        // Filter action/section items
        const allActions = cmdGroupActions.querySelectorAll('.cmd-item');
        const allSections = cmdGroupSections.querySelectorAll('.cmd-item');
        let actionsVisible = 0;
        let sectionsVisible = 0;

        allActions.forEach(item => {
            const text = item.querySelector('.cmd-item-text').textContent.toLowerCase();
            const show = text.includes(query);
            item.style.display = show ? '' : 'none';
            if (show) actionsVisible++;
        });

        allSections.forEach(item => {
            const text = item.querySelector('.cmd-item-text').textContent.toLowerCase();
            const show = text.includes(query);
            item.style.display = show ? '' : 'none';
            if (show) sectionsVisible++;
        });

        // Show article results
        if (matches.length > 0) {
            cmdGroupArticles.style.display = '';
            matches.forEach(m => {
                const btn = document.createElement('button');
                btn.className = 'cmd-item';
                const catLabel = m.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                // Highlight matching text
                const highlighted = highlightMatch(m.title, query);
                btn.innerHTML = `
                    <span class="cmd-item-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>
                    <span class="cmd-item-text">${highlighted}</span>
                    <span class="cmd-item-category">${catLabel}</span>
                `;
                btn.addEventListener('click', () => {
                    closeCmdPalette();
                    m.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    m.el.style.boxShadow = '0 0 0 3px var(--accent)';
                    setTimeout(() => m.el.style.boxShadow = '', 2000);
                });
                cmdArticleItems.appendChild(btn);
            });
        } else {
            cmdGroupArticles.style.display = 'none';
        }

        cmdGroupActions.style.display = actionsVisible > 0 ? '' : 'none';
        cmdGroupSections.style.display = sectionsVisible > 0 ? '' : 'none';

        const totalResults = matches.length + actionsVisible + sectionsVisible;
        cmdEmpty.style.display = totalResults === 0 ? '' : 'none';
        cmdResults.style.display = totalResults === 0 ? 'none' : '';

        updateHighlightables();
        highlightedIdx = -1;
    }

    // Keyboard navigation in command palette
    let highlightedIdx = -1;
    let highlightables = [];

    function updateHighlightables() {
        highlightables = Array.from(cmdOverlay.querySelectorAll('.cmd-item')).filter(
            el => el.style.display !== 'none' && el.closest('.cmd-group')?.style.display !== 'none'
        );
    }

    function setHighlight(idx) {
        highlightables.forEach(el => el.classList.remove('highlighted'));
        if (idx >= 0 && idx < highlightables.length) {
            highlightables[idx].classList.add('highlighted');
            highlightables[idx].scrollIntoView({ block: 'nearest' });
        }
        highlightedIdx = idx;
    }

    cmdInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlight(Math.min(highlightedIdx + 1, highlightables.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlight(Math.max(highlightedIdx - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (highlightedIdx >= 0 && highlightables[highlightedIdx]) {
                highlightables[highlightedIdx].click();
            }
        }
    });

    // Quick action handlers
    cmdOverlay.querySelectorAll('.cmd-item[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            closeCmdPalette();

            switch (action) {
                case 'dark-mode':
                    settings.theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                    applyTheme(settings.theme);
                    saveSettings(settings);
                    showToast(settings.theme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled', 'info');
                    break;
                case 'settings': openSettings(); break;
                case 'bookmarks': openReadingList(); break;
                case 'top': window.scrollTo({ top: 0, behavior: 'smooth' }); break;
                case 'shortcuts': openKbdModal(); break;
                case 'goto-home': document.getElementById('sectionHome')?.scrollIntoView({ behavior: 'smooth' }); break;
                case 'goto-trending': document.getElementById('sectionTrending')?.scrollIntoView({ behavior: 'smooth' }); break;
                case 'goto-latest': document.getElementById('latestSection')?.scrollIntoView({ behavior: 'smooth' }); break;
                case 'goto-deepdives': document.getElementById('sectionDeepDives')?.scrollIntoView({ behavior: 'smooth' }); break;
                case 'goto-podcast': document.getElementById('sectionPodcast')?.scrollIntoView({ behavior: 'smooth' }); break;
            }
        });
    });

    // ======================
    // Category Filters
    // ======================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const articleCards = document.querySelectorAll('.article-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            articleCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                    card.classList.add('fade-in');
                    setTimeout(() => card.classList.remove('fade-in'), 400);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    document.querySelectorAll('.nav-link[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
            link.classList.add('active');
            filterBtns.forEach(btn => {
                if (btn.dataset.filter === link.dataset.category) btn.click();
            });
            document.getElementById('latestSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const homeLink = document.querySelector('.nav-link:not([data-category])');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
            homeLink.classList.add('active');
            const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
            if (allBtn) allBtn.click();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ======================
    // Ticker: seamless loop
    // ======================
    const tickerContent = document.getElementById('tickerContent');
    if (tickerContent) tickerContent.innerHTML += tickerContent.innerHTML;

    // ======================
    // Animated Stat Counters
    // ======================
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;
        const statsSection = document.querySelector('.stats-strip');
        if (!statsSection) return;
        if (statsSection.getBoundingClientRect().top < window.innerHeight * 0.85) {
            statsAnimated = true;
            statNumbers.forEach(el => {
                const target = parseInt(el.dataset.target);
                const duration = 1500;
                const start = performance.now();
                const tick = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(target * eased).toLocaleString();
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            });
        }
    }

    window.addEventListener('scroll', animateStats, { passive: true });
    animateStats();

    // ======================
    // Infinite Scroll
    // ======================
    const articlesGrid = document.getElementById('articlesGrid');
    const scrollSentinel = document.getElementById('infiniteScrollSentinel');
    const scrollLoader = document.getElementById('scrollLoader');
    let infiniteCardIndex = 24;
    let isLoadingMore = false;

    const placeholderHeadlines = [
        { cat: 'large-language-models', badge: 'badge-llm', label: 'LLMs', titles: [
            'New Language Model Achieves Human-Level Reasoning on Graduate-Level Science Problems',
            'Open-Weight Model Matches Proprietary Competitors on Code Generation Benchmarks',
            'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod',
            'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
        ]},
        { cat: 'robotics', badge: 'badge-robotics', label: 'Robotics', titles: [
            'Bipedal Robot Successfully Navigates Unstructured Terrain Without GPS Guidance',
            'Surgical Robot Completes First Fully Autonomous Procedure in Clinical Setting',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit fugit',
            'At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis',
        ]},
        { cat: 'research', badge: 'badge-research', label: 'Research', titles: [
            'Researchers Propose Unified Theory Explaining Why In-Context Learning Works',
            'AI System Discovers Novel Antibiotic Compound Through Molecular Simulation',
            'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus',
            'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit',
            'Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis',
        ]},
        { cat: 'industry', badge: 'badge-industry', label: 'Industry', titles: [
            'Cloud Provider Opens AI-Optimized Data Center With Custom Cooling Infrastructure',
            'Fortune 100 Company Reports 3x Return on Investment From AI Agent Deployment',
            'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam',
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur',
            'Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum',
        ]},
        { cat: 'startups', badge: 'badge-startups', label: 'Startups', titles: [
            'AI Coding Assistant Startup Reaches Unicorn Valuation in Under 12 Months',
            'Health AI Company Secures Regulatory Clearance for Cardiac Screening Tool',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames',
            'Curabitur pretium tincidunt lacus sed auctor nunc consequat interdum varius',
            'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor nullam',
        ]},
        { cat: 'policy', badge: 'badge-policy', label: 'Policy', titles: [
            'International Summit Produces First Binding AI Safety Treaty Signed by 34 Nations',
            'Federal Agency Releases Mandatory AI Audit Requirements for Government Contractors',
            'Praesent commodo cursus magna vel scelerisque nisl consectetur et donec id',
            'Maecenas sed diam eget risus varius blandit sit amet non magna etiam porta',
            'Fusce dapibus tellus ac cursus commodo tortor mauris condimentum nibh',
        ]},
        { cat: 'opinion', badge: 'badge-opinion', label: 'Opinion', titles: [
            'The Productivity Promise of AI Is Overstated — Here\'s What the Data Actually Shows',
            'Why Smaller, Specialized Models Will Win the Next Phase of Enterprise AI',
            'Vestibulum id ligula porta felis euismod semper aenean lacinia bibendum',
            'Nullam quis risus eget urna mollis ornare vel eu leo cras mattis purus',
            'Etiam porta sem malesuada magna mollis euismod lorem ipsum dolor sit amet',
        ]},
    ];

    const placeholderExcerpts = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    ];

    const placeholderAuthors = [
        'J. Smith', 'A. Kumar', 'L. Zhang', 'M. Davis', 'R. Chen',
        'S. Brown', 'K. Wilson', 'P. Garcia', 'T. Anderson', 'N. Taylor',
    ];

    const placeholderImages = [
        'photo-1518770660439-4636190af475', 'photo-1526374965328-7f61d4dc18c5',
        'photo-1550751827-4bd374c3f58b', 'photo-1555255707-c07966088b7b',
        'photo-1504868584819-f8e8b4b6d7e3', 'photo-1558494949-ef010cbdcc31',
        'photo-1519389950473-47ba0277781c', 'photo-1532094349884-543bc11b234d',
        'photo-1488590528505-98d2b5aba04b', 'photo-1451187580459-43490279c0fa',
        'photo-1535378917042-10a22c95931a', 'photo-1581091226825-a6a2a5aee158',
        'photo-1517245386807-bb43f82c33c4', 'photo-1550745165-9bc0b252726f',
        'photo-1559136555-9303baea8ebd', 'photo-1522071820081-009f0129c71c',
    ];

    function generateCard() {
        const group = placeholderHeadlines[Math.floor(Math.random() * placeholderHeadlines.length)];
        const title = group.titles[Math.floor(Math.random() * group.titles.length)];
        const excerpt = placeholderExcerpts[Math.floor(Math.random() * placeholderExcerpts.length)];
        const author = placeholderAuthors[Math.floor(Math.random() * placeholderAuthors.length)];
        const imgId = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
        const avatarNum = Math.floor(Math.random() * 70) + 1;
        const daysAgo = Math.floor(Math.random() * 14) + 1;
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        const id = 'article-' + infiniteCardIndex++;

        const card = document.createElement('article');
        card.className = 'article-card';
        card.dataset.category = group.cat;
        card.dataset.articleId = id;
        card.innerHTML = `
            <a href="#">
                <div class="card-img">
                    <img src="https://images.unsplash.com/${imgId}?w=600&h=360&fit=crop" alt="" loading="lazy">
                    <span class="badge ${group.badge}">${group.label}</span>
                </div>
                <div class="card-body">
                    <h3>${title}</h3>
                    <p>${excerpt}</p>
                    <div class="article-meta">
                        <img src="https://i.pravatar.cc/48?img=${avatarNum}" alt="" class="meta-avatar">
                        <span class="meta-author">${author}</span>
                        <span class="meta-sep">&middot;</span>
                        <time>${dateStr}</time>
                    </div>
                </div>
            </a>
        `;

        // Wire up bookmark button
        const cardImg = card.querySelector('.card-img');
        const bmBtn = document.createElement('button');
        bmBtn.className = 'bookmark-btn';
        bmBtn.setAttribute('aria-label', 'Bookmark article');
        bmBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
        bmBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleBookmark(id, title, group.cat, bmBtn);
        });
        cardImg.appendChild(bmBtn);

        // Wire up share bar
        const shareBar = document.createElement('div');
        shareBar.className = 'share-bar';
        shareBar.innerHTML = `
            <button class="share-btn share-x" aria-label="Share on X" data-action="x"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></button>
            <button class="share-btn share-linkedin" aria-label="Share on LinkedIn" data-action="linkedin"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></button>
            <button class="share-btn share-copy" aria-label="Copy link" data-action="copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></button>
        `;
        shareBar.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const btn = e.target.closest('.share-btn');
            if (!btn) return;
            const action = btn.dataset.action;
            if (action === 'copy') {
                navigator.clipboard.writeText(window.location.href).then(() => showToast('Link copied to clipboard', 'check'));
            } else {
                showToast('Share dialog opened', 'info');
            }
        });
        cardImg.appendChild(shareBar);

        // Wire up article reading view on click
        card.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            openArticleView(extractCardData(card));
        });

        // Respect current filter
        const activeFilter = document.querySelector('.filter-btn.active');
        if (activeFilter && activeFilter.dataset.filter !== 'all' && activeFilter.dataset.filter !== group.cat) {
            card.classList.add('hidden');
        }

        // Fade in animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        return card;
    }

    function loadMoreCards(count = 6) {
        if (isLoadingMore) return;
        isLoadingMore = true;
        scrollLoader.classList.add('visible');

        // Simulate network delay
        setTimeout(() => {
            for (let i = 0; i < count; i++) {
                const card = generateCard();
                articlesGrid.appendChild(card);

                // Trigger fade-in with stagger
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, i * 100);
            }

            // Add new cards to the command palette article index
            articlesGrid.querySelectorAll('.article-card:not([data-indexed])').forEach(card => {
                card.dataset.indexed = 'true';
                const title = card.querySelector('h3')?.textContent || '';
                const category = card.dataset.category || '';
                articleIndex.push({ title, category, el: card });
            });

            scrollLoader.classList.remove('visible');
            isLoadingMore = false;
        }, 800);
    }

    // Intersection Observer to trigger infinite scroll
    const infiniteObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isLoadingMore) {
                loadMoreCards(6);
            }
        });
    }, { rootMargin: '200px' });

    if (scrollSentinel) {
        infiniteObserver.observe(scrollSentinel);
    }

    // ======================
    // Newsletter
    // ======================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('.newsletter-input');
            const btn = newsletterForm.querySelector('.newsletter-btn');
            const email = input.value.trim();

            // Validate email
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                input.style.borderColor = '#ef4444';
                input.style.boxShadow = '0 0 0 2px rgba(239,68,68,0.2)';
                showToast('Please enter a valid email address', 'remove');
                setTimeout(() => {
                    input.style.borderColor = '';
                    input.style.boxShadow = '';
                }, 2000);
                return;
            }

            btn.textContent = 'Subscribed!';
            btn.style.background = '#10b981';
            btn.style.color = '#fff';
            input.value = '';
            showToast('Welcome! Check your inbox to confirm.', 'check');
            setTimeout(() => {
                btn.textContent = 'Subscribe';
                btn.style.background = '';
                btn.style.color = '';
            }, 1800);
        });
    }

    // ======================
    // NEW: Share Buttons on Cards
    // ======================
    document.querySelectorAll('.article-card').forEach(card => {
        const cardImg = card.querySelector('.card-img');
        if (!cardImg) return;

        const title = card.querySelector('h3')?.textContent || '';

        const shareBar = document.createElement('div');
        shareBar.className = 'share-bar';
        shareBar.innerHTML = `
            <button class="share-btn share-x" aria-label="Share on X" data-action="x">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </button>
            <button class="share-btn share-linkedin" aria-label="Share on LinkedIn" data-action="linkedin">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </button>
            <button class="share-btn share-copy" aria-label="Copy link" data-action="copy">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </button>
        `;

        shareBar.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const btn = e.target.closest('.share-btn');
            if (!btn) return;
            const action = btn.dataset.action;
            const text = encodeURIComponent(title + ' — AI Now');
            const url = encodeURIComponent(window.location.href);

            if (action === 'x') {
                window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=550,height=420');
                showToast('Opened X/Twitter share', 'info');
            } else if (action === 'linkedin') {
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=550,height=420');
                showToast('Opened LinkedIn share', 'info');
            } else if (action === 'copy') {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showToast('Link copied to clipboard', 'check');
                });
            }
        });

        cardImg.appendChild(shareBar);
    });

    // ======================
    // NEW: Quick-Peek Article Preview
    // ======================
    const previewEl = document.getElementById('articlePreview');
    const previewBadge = document.getElementById('previewBadge');
    const previewTitle = document.getElementById('previewTitle');
    const previewExcerpt = document.getElementById('previewExcerpt');
    const previewMeta = document.getElementById('previewMeta');
    let hoverTimer = null;
    let currentHoverCard = null;

    const categoryColors = {
        'large-language-models': '#6366f1',
        'robotics': '#10b981',
        'research': '#3b82f6',
        'industry': '#f97316',
        'startups': '#ec4899',
        'policy': '#ef4444',
        'opinion': '#eab308',
    };

    document.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            currentHoverCard = card;
            hoverTimer = setTimeout(() => {
                if (currentHoverCard !== card) return;

                const title = card.querySelector('h3')?.textContent || '';
                const excerpt = card.querySelector('.card-body p')?.textContent || 'Click to read the full article...';
                const category = card.dataset.category || '';
                const author = card.querySelector('.meta-author')?.textContent || '';
                const time = card.querySelector('time')?.textContent || '';
                const catLabel = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

                previewBadge.textContent = catLabel;
                previewBadge.style.background = categoryColors[category] || '#6366f1';
                if (category === 'opinion') previewBadge.style.color = '#422006';
                else previewBadge.style.color = '#fff';
                previewTitle.textContent = title;
                previewExcerpt.textContent = excerpt;
                previewMeta.textContent = [author, time].filter(Boolean).join(' · ');

                // Position
                const rect = card.getBoundingClientRect();
                const pw = 340;
                let left = rect.right + 16;
                let top = rect.top;

                // If overflowing right, show on left side
                if (left + pw > window.innerWidth - 20) {
                    left = rect.left - pw - 16;
                }
                // If still overflowing (small screen), don't show
                if (left < 10) return;

                // Clamp top
                if (top + 240 > window.innerHeight) {
                    top = window.innerHeight - 260;
                }
                if (top < 10) top = 10;

                previewEl.style.left = left + 'px';
                previewEl.style.top = top + 'px';
                previewEl.classList.add('visible');
            }, 600);
        });

        card.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimer);
            currentHoverCard = null;
            previewEl.classList.remove('visible');
        });
    });

    // Hide preview on scroll
    window.addEventListener('scroll', () => {
        if (previewEl.classList.contains('visible')) {
            previewEl.classList.remove('visible');
            clearTimeout(hoverTimer);
            currentHoverCard = null;
        }
    }, { passive: true });

    // ======================
    // NEW: Scroll-Spy Navigation
    // ======================
    const spySections = [
        { id: 'sectionHome', nav: null },
        { id: 'latestSection', nav: null },
        { id: 'sectionDeepDives', nav: null },
        { id: 'sectionPodcast', nav: null },
    ];

    // Map sections to closest matching nav category (Home link for hero etc.)
    const navLinksAll = document.querySelectorAll('.nav-link');
    const homeNavLink = document.querySelector('.nav-link:not([data-category])');

    function updateScrollSpy() {
        const scrollY = window.scrollY + 150; // offset for header

        let activeSection = 'sectionHome';
        spySections.forEach(s => {
            const el = document.getElementById(s.id);
            if (el && el.offsetTop <= scrollY) {
                activeSection = s.id;
            }
        });

        navLinksAll.forEach(link => link.classList.remove('spy-active'));

        if (activeSection === 'sectionHome' || activeSection === 'sectionTrending') {
            if (homeNavLink) homeNavLink.classList.add('spy-active');
        } else if (activeSection === 'latestSection') {
            // Highlight based on current filter
            const activeFilter = document.querySelector('.filter-btn.active');
            if (activeFilter && activeFilter.dataset.filter !== 'all') {
                const matching = document.querySelector(`.nav-link[data-category="${activeFilter.dataset.filter}"]`);
                if (matching) matching.classList.add('spy-active');
            } else {
                if (homeNavLink) homeNavLink.classList.add('spy-active');
            }
        }
    }

    window.addEventListener('scroll', updateScrollSpy, { passive: true });
    updateScrollSpy();

    // ======================
    // NEW: Reading History
    // ======================
    let readingHistory = JSON.parse(localStorage.getItem('ainow-history') || '[]');

    // ======================
    // Article Reading View
    // ======================
    const articleView = document.getElementById('articleView');
    const articleBackBtn = document.getElementById('articleBackBtn');
    const avHeroImg = document.getElementById('avHeroImg');
    const avBadge = document.getElementById('avBadge');
    const avReadTime = document.getElementById('avReadTime');
    const avTitle = document.getElementById('avTitle');
    const avAuthorAvatar = document.getElementById('avAuthorAvatar');
    const avAuthorName = document.getElementById('avAuthorName');
    const avAuthorDate = document.getElementById('avAuthorDate');
    const avBody = document.getElementById('avBody');
    const avTags = document.getElementById('avTags');
    const avRelatedGrid = document.getElementById('avRelatedGrid');
    const avBookmarkBtn = document.getElementById('avBookmarkBtn');
    const avShareBtn = document.getElementById('avShareBtn');
    let savedScrollPos = 0;
    let currentArticleId = null;

    const categoryBadgeClasses = {
        'large-language-models': 'badge-llm',
        'robotics': 'badge-robotics',
        'research': 'badge-research',
        'industry': 'badge-industry',
        'startups': 'badge-startups',
        'policy': 'badge-policy',
        'opinion': 'badge-opinion',
    };

    const categoryLabels = {
        'large-language-models': 'LLMs',
        'robotics': 'Robotics',
        'research': 'Research',
        'industry': 'Industry',
        'startups': 'Startups',
        'policy': 'Policy',
        'opinion': 'Opinion',
    };

    const sampleInlineImages = [
        'photo-1550745165-9bc0b252726f', 'photo-1517245386807-bb43f82c33c4',
        'photo-1558618666-fcd25c85f82e', 'photo-1519389950473-47ba0277781c',
        'photo-1532094349884-543bc11b234d', 'photo-1563986768609-322da13575f2',
    ];

    // 3 full-length unique articles for the first 3 cards
    const uniqueArticles = {
        'article-0': `
            <p>The semiconductor industry is undergoing its most dramatic transformation in decades. A major chipmaker has unveiled its next-generation processor architecture, purpose-built from the ground up for the workloads that define the current era of artificial intelligence: multi-agent orchestration, real-time inference, and massive-scale model serving.</p>

            <p>Unlike previous generations that retrofitted graphics processors for AI tasks, this new chip was designed with AI as the primary use case from day one. The result, according to early benchmarks, is a fourfold improvement in inference throughput and a 60% reduction in power consumption per token generated.</p>

            <h2>Why This Chip Matters Now</h2>

            <p>The timing is no accident. As AI moves from experimental deployments to mission-critical infrastructure, the bottleneck has shifted from model capability to serving economics. Running a frontier model at enterprise scale costs millions of dollars per month in compute alone. Any chip that can meaningfully reduce that cost changes the math for every company considering AI adoption.</p>

            <blockquote>
                "We've reached the point where the hardware is the limiting factor, not the models. This new architecture is designed for the workloads that will dominate the next five years — not the last five."
                <cite>— VP of Engineering, Major Semiconductor Firm</cite>
            </blockquote>

            <p>Industry analysts project that the AI chip market will exceed $200 billion annually by 2028, up from roughly $50 billion today. The competition to capture that market is fierce, with at least four major companies now offering dedicated AI processors and several startups approaching tape-out on custom silicon.</p>

            <figure>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=420&fit=crop" alt="Semiconductor manufacturing">
                <figcaption>Modern semiconductor fabrication facilities now dedicate entire production lines to AI-optimized chips.</figcaption>
            </figure>

            <h2>Architecture Deep Dive</h2>

            <p>The new processor introduces several architectural innovations. First, it replaces the traditional memory hierarchy with a unified memory pool that allows all compute units to access data with equal latency. This eliminates the data movement bottleneck that has plagued AI inference on conventional hardware.</p>

            <p>Second, it includes dedicated "agent cores" — specialized processing units designed for the control flow and decision-making logic that multi-agent systems require. Traditional GPUs are optimized for parallel floating-point operations, but agent workloads involve branching, conditional execution, and inter-process communication patterns that GPUs handle poorly.</p>

            <div class="highlight-box">
                <h4>Key Specifications</h4>
                <ul>
                    <li><strong>Inference throughput:</strong> 4x improvement over previous generation on standard LLM benchmarks</li>
                    <li><strong>Power efficiency:</strong> 60% reduction in watts per token generated</li>
                    <li><strong>Memory:</strong> 192GB unified HBM4 with 12.8 TB/s bandwidth</li>
                    <li><strong>Agent cores:</strong> 16 dedicated processing units for orchestration workloads</li>
                    <li><strong>Interconnect:</strong> Native support for multi-chip scaling up to 256 processors</li>
                    <li><strong>Process node:</strong> 2nm TSMC with advanced 3D packaging</li>
                </ul>
            </div>

            <h3>The Software Stack</h3>

            <p>Hardware alone isn't enough. The chip ships with a completely rewritten software stack that includes a new compiler, runtime, and orchestration framework. The compiler can automatically partition workloads across agent cores and traditional compute units, optimizing for both latency and throughput simultaneously.</p>

            <p>Early access partners report that migrating existing inference workloads took between two days and two weeks, depending on complexity. The company has also released open-source adapters for all major ML frameworks, reducing the integration burden for teams already running on competing hardware.</p>

            <figure>
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=420&fit=crop" alt="Data center">
                <figcaption>Next-generation data centers are being designed around AI-first chip architectures from the ground up.</figcaption>
            </figure>

            <h2>Market Impact and Competition</h2>

            <p>The announcement has already triggered a wave of response from competitors. Within hours, two rival chipmakers announced accelerated timelines for their own next-generation products, and one major cloud provider confirmed it would offer the new processor in its AI-optimized instance family within 90 days.</p>

            <p>For enterprise buyers, the proliferation of AI chip options is broadly positive — more competition means lower prices and faster innovation. But it also creates a complex procurement landscape where choosing the wrong hardware platform could lock organizations into an ecosystem that doesn't evolve with their needs.</p>

            <h3>What Comes Next</h3>

            <p>Production shipments are expected to begin in Q3, with general availability through major cloud providers by Q4. The company has disclosed that pre-orders have already exceeded its initial production allocation, suggesting demand will outstrip supply for at least the first two quarters.</p>

            <p>The broader question is whether dedicated AI silicon will eventually commoditize — the way GPUs commoditized parallel computing — or whether the pace of architectural innovation in AI will sustain premium pricing for the foreseeable future. The answer will depend largely on whether the workloads themselves stabilize, or continue to evolve faster than hardware can adapt.</p>

            <p>One thing is clear: the era of running AI on repurposed graphics cards is ending. The next phase belongs to chips that were born for this purpose.</p>
        `,

        'article-1': `
            <p>After years of debate, drafting, and revision, the world's most comprehensive AI regulation framework has officially taken effect. The landmark legislation applies to any organization deploying AI systems within its jurisdiction, with penalties for non-compliance reaching up to 7% of global annual revenue — the largest potential fines in technology regulation history.</p>

            <p>The regulation introduces a risk-based classification system that categorizes AI applications into four tiers: minimal risk, limited risk, high risk, and unacceptable risk. Most consumer-facing AI tools fall into the limited risk category, requiring transparency disclosures but minimal technical compliance. High-risk systems — including those used in healthcare, law enforcement, hiring, and critical infrastructure — face stringent requirements for testing, documentation, and ongoing monitoring.</p>

            <h2>What Companies Need to Do Now</h2>

            <p>For most organizations, the immediate action items center on three areas: inventory, assessment, and documentation. Companies must first catalog all AI systems in use across their operations — a task that many have found more difficult than expected, as AI has quietly embedded itself in tools and workflows that employees may not even recognize as AI-powered.</p>

            <blockquote>
                "The biggest challenge isn't compliance with the technical requirements. It's the inventory problem. Most companies don't actually know how many AI systems they're running, where the training data came from, or who is responsible for each one."
                <cite>— Chief Compliance Officer, Major Financial Institution</cite>
            </blockquote>

            <p>Once the inventory is complete, each system must be assessed against the risk classification framework. This requires understanding not just what the AI does, but how it was built, what data it was trained on, and what decisions it influences. For organizations running hundreds of AI-powered tools, this assessment process alone can take months.</p>

            <figure>
                <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=420&fit=crop" alt="Government building">
                <figcaption>Legislative bodies worldwide are watching the implementation closely as they draft their own AI governance frameworks.</figcaption>
            </figure>

            <h2>The High-Risk Requirements</h2>

            <p>The most demanding provisions apply to high-risk AI systems. These must meet requirements across eight domains:</p>

            <div class="highlight-box">
                <h4>High-Risk Compliance Requirements</h4>
                <ul>
                    <li><strong>Risk management:</strong> Continuous identification and mitigation of risks throughout the system lifecycle</li>
                    <li><strong>Data governance:</strong> Training data must be relevant, representative, and free from errors that could lead to discriminatory outcomes</li>
                    <li><strong>Technical documentation:</strong> Detailed records of system design, development process, and intended purpose</li>
                    <li><strong>Transparency:</strong> Users must be informed when they are interacting with an AI system</li>
                    <li><strong>Human oversight:</strong> Meaningful human review must be possible for all high-risk decisions</li>
                    <li><strong>Accuracy and robustness:</strong> Systems must maintain declared levels of performance throughout their lifecycle</li>
                    <li><strong>Cybersecurity:</strong> AI-specific security measures against adversarial manipulation</li>
                    <li><strong>Record-keeping:</strong> Automatic logging of all system activities for post-hoc audit</li>
                </ul>
            </div>

            <h3>The Banned Categories</h3>

            <p>Several categories of AI are banned outright: social scoring systems that rate citizens based on behavior or personal characteristics, real-time biometric surveillance in public spaces (with narrow exceptions for law enforcement), AI systems that exploit vulnerabilities of specific groups, and subliminal manipulation techniques that bypass conscious awareness.</p>

            <p>The banned categories have generated the least controversy — most organizations were not deploying these systems to begin with, at least not within this jurisdiction. The real friction is in the high-risk category, where compliance costs are substantial and the line between "limited risk" and "high risk" is not always clear.</p>

            <figure>
                <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=420&fit=crop" alt="Legal documents">
                <figcaption>Compliance teams across the industry are working through hundreds of pages of technical requirements and guidance documents.</figcaption>
            </figure>

            <h2>Industry Response</h2>

            <p>The response from the AI industry has been mixed. Larger companies, particularly those with existing compliance infrastructure, have been cautiously supportive — arguing that clear rules create a level playing field and reduce regulatory uncertainty. Several major AI labs publicly committed to full compliance months before the effective date.</p>

            <p>Smaller companies and startups have been more critical, arguing that the compliance burden disproportionately affects organizations with limited resources. A coalition of AI startups published an open letter warning that the regulations could stifle innovation and push development to less regulated jurisdictions.</p>

            <h3>Global Implications</h3>

            <p>The regulation's influence extends far beyond its home jurisdiction. Several countries have already signaled intent to adopt similar frameworks, and major AI companies are beginning to treat these requirements as a de facto global standard — reasoning that it's easier to build one compliant product than to maintain different versions for different markets.</p>

            <p>Whether this approach to AI governance proves effective will depend on enforcement. The regulation creates a new supervisory body with significant investigative powers, but its staff currently numbers fewer than 200 — a fraction of what would be needed to proactively audit the thousands of high-risk AI systems now subject to its oversight.</p>

            <p>The coming months will reveal whether this framework becomes a model for the world or a cautionary tale about the limits of regulating technology that evolves faster than legislation.</p>
        `,

        'article-2': `
            <p>A leading AI research lab has released a new model that has topped every major benchmark — and in doing so, has reignited a debate about whether those benchmarks still measure anything meaningful. Alongside the model release, the lab published a paper proposing an entirely new evaluation framework called "sustained reasoning depth," arguing that existing tests fail to capture the capabilities that now define frontier AI systems.</p>

            <p>The model itself represents an evolutionary step in architecture and training methodology. It processes information across text, code, images, and structured data with equal fluency, and demonstrates the ability to maintain coherent reasoning chains across problems that require dozens of intermediate steps — a capability that previous models struggled with even a generation ago.</p>

            <h2>The Benchmark Problem</h2>

            <p>The simultaneous release of the model and the new evaluation framework is a deliberate statement. The lab's researchers argue that the AI field's reliance on standardized benchmarks has become counterproductive, creating incentives to optimize for specific test formats rather than genuine capability.</p>

            <blockquote>
                "When every new model claims to 'top the benchmarks,' but users can't tell the difference in practice, something is broken. We're measuring the wrong things."
                <cite>— Lead Researcher, AI Safety and Evaluation Team</cite>
            </blockquote>

            <p>The problem is well-known in the research community but has proven difficult to solve. Benchmarks like MMLU, HumanEval, and GSM8K were groundbreaking when introduced, but the field has largely saturated them. Scores above 90% are now common among frontier models, making it nearly impossible to distinguish meaningfully between them on these tests.</p>

            <figure>
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=420&fit=crop" alt="AI visualization">
                <figcaption>Traditional benchmarks measure breadth of knowledge, but the new framework attempts to measure depth of reasoning.</figcaption>
            </figure>

            <h2>What "Sustained Reasoning Depth" Measures</h2>

            <p>The new framework evaluates models on problems that require extended chains of reasoning — not just answering a question correctly, but maintaining logical consistency, tracking multiple variables, and recovering from intermediate errors over sequences of 20 to 100+ reasoning steps.</p>

            <p>The evaluation includes four categories:</p>

            <div class="highlight-box">
                <h4>Sustained Reasoning Depth Framework</h4>
                <ul>
                    <li><strong>Chain length:</strong> How many logically dependent steps can the model chain together before coherence degrades?</li>
                    <li><strong>Recovery rate:</strong> When the model makes an intermediate error, can it detect and correct it?</li>
                    <li><strong>Variable tracking:</strong> Across a long reasoning chain, does the model maintain accurate state for all relevant variables?</li>
                    <li><strong>Transfer robustness:</strong> Does performance hold when the same reasoning pattern is applied to an unfamiliar domain?</li>
                </ul>
            </div>

            <p>On these new evaluations, the gap between models is much wider than traditional benchmarks suggest. The new model scores significantly higher than its closest competitor on chain length and recovery rate, while the differences on variable tracking and transfer robustness are more modest.</p>

            <h3>The Architecture Behind the Results</h3>

            <p>The model's improved reasoning capabilities stem from several architectural changes. The most significant is a new internal "scratchpad" mechanism that allows the model to maintain a structured working memory during long reasoning chains. Unlike previous approaches that relied on the model's context window for working memory, this mechanism is purpose-built for tracking intermediate state.</p>

            <p>The training methodology also differs from previous generations. Rather than scaling up pre-training data, the lab invested heavily in what they call "reasoning curriculum" — a carefully sequenced training regime that progressively increases the complexity of reasoning tasks, similar to how humans learn mathematics by building on simpler concepts.</p>

            <figure>
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=420&fit=crop" alt="Research lab">
                <figcaption>The research team spent 18 months developing the new evaluation framework before releasing it alongside the model.</figcaption>
            </figure>

            <h2>Community Response</h2>

            <p>The response from the AI research community has been cautiously positive. Several prominent researchers praised the new evaluation framework as a much-needed step forward, while noting that any single framework will inevitably have blind spots.</p>

            <p>Some skeptics have pointed out that proposing a new benchmark alongside a model that excels on it is a convenient coincidence. The lab has addressed this by making the framework open-source and inviting other organizations to contribute test cases, arguing that the framework's value will only be proven if it becomes a community resource rather than a proprietary advantage.</p>

            <h3>What This Means for Developers</h3>

            <p>For developers building applications on top of frontier models, the practical takeaway is that model selection should no longer be driven primarily by benchmark scores. The differences that matter in production — reliability of multi-step reasoning, graceful handling of edge cases, and consistency across diverse inputs — are precisely the differences that traditional benchmarks miss.</p>

            <p>The lab has released a lightweight version of the evaluation framework as an open-source tool, allowing developers to test models on sustained reasoning tasks relevant to their specific use cases. Early adopters report that the results often diverge significantly from what benchmark scores would predict.</p>

            <p>Whether "sustained reasoning depth" becomes the new standard or simply one metric among many, the underlying message is clear: the era of single-number model comparisons is ending. The next generation of AI evaluation will need to be as sophisticated as the models it measures.</p>
        `,
    };

    function generateArticleBody(title, category, articleId) {
        // Check for unique full articles first
        if (articleId && uniqueArticles[articleId]) {
            return uniqueArticles[articleId];
        }

        // Generic fallback for all other articles
        const catLabel = categoryLabels[category] || 'AI';
        const imgSrc = sampleInlineImages[Math.floor(Math.random() * sampleInlineImages.length)];
        const imgSrc2 = sampleInlineImages[Math.floor(Math.random() * sampleInlineImages.length)];

        return `
            <p>This is a sample article for demonstration purposes. The content below is placeholder text generated to showcase the reading view layout, typography, and features of AI Now. In a production environment, this would contain the actual reporting.</p>

            <p>The development marks a significant moment for the ${catLabel.toLowerCase()} sector. Industry analysts have noted that the pace of advancement has accelerated dramatically over the past twelve months, with breakthroughs arriving faster than most observers predicted even a year ago.</p>

            <h2>What This Means for the Industry</h2>

            <p>According to researchers familiar with the work, the implications extend far beyond the immediate technical achievement. The approach demonstrated here could reshape how organizations think about deploying AI systems at scale, particularly in domains that require both high reliability and real-time performance.</p>

            <blockquote>
                "This represents a fundamental shift in what's possible. We're not just seeing incremental improvements — we're seeing entirely new categories of capability emerge."
                <cite>— Dr. Sample Researcher, Placeholder University</cite>
            </blockquote>

            <p>The timing is notable. With regulatory frameworks taking shape across multiple jurisdictions and enterprise adoption accelerating, advances like this arrive at a moment when the gap between what's technically possible and what's commercially deployed is wider than ever.</p>

            <figure>
                <img src="https://images.unsplash.com/${imgSrc}?w=800&h=420&fit=crop" alt="Illustration">
                <figcaption>Sample figure caption — this image is a placeholder for article-specific visuals.</figcaption>
            </figure>

            <h2>The Technical Details</h2>

            <p>At its core, the approach relies on a combination of techniques that have individually shown promise but were never successfully integrated at this scale. The team's key insight was recognizing that the bottleneck wasn't computational — it was architectural.</p>

            <div class="highlight-box">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Performance improvements of 3-5x over previous approaches on standard benchmarks</li>
                    <li>Significantly reduced compute requirements for inference</li>
                    <li>Novel training methodology that may generalize to other domains</li>
                    <li>Open questions remain about long-term reliability and edge cases</li>
                </ul>
            </div>

            <p>Several independent researchers who reviewed the findings expressed cautious optimism. While the results are impressive under controlled conditions, the real test will come as the technology moves into production environments where conditions are less predictable.</p>

            <h3>Looking Ahead</h3>

            <p>The broader implications of this work will take months — possibly years — to fully materialize. But the direction of travel is clear. The ${catLabel.toLowerCase()} landscape is being reshaped in real time, and the organizations that move fastest to understand and adapt to these changes will be the ones best positioned for what comes next.</p>

            <figure>
                <img src="https://images.unsplash.com/${imgSrc2}?w=800&h=420&fit=crop" alt="Illustration">
                <figcaption>Placeholder image illustrating the broader context of this development.</figcaption>
            </figure>

            <p>What remains uncertain is whether this trajectory is sustainable. The resources required to push the frontier continue to grow, raising questions about who can afford to compete — and what happens to everyone else. These are questions the industry will need to confront sooner rather than later.</p>

            <p><em>This is a placeholder article generated for the AI Now demo site. All names, quotes, and details are fictional and for demonstration purposes only.</em></p>
        `;
    }

    function generateTags(category) {
        const baseTags = ['Artificial Intelligence', 'Technology', 'Innovation'];
        const catTags = {
            'large-language-models': ['Language Models', 'NLP', 'Transformers'],
            'robotics': ['Robotics', 'Automation', 'Hardware'],
            'research': ['Research', 'Papers', 'Breakthroughs'],
            'industry': ['Enterprise', 'Business', 'Strategy'],
            'startups': ['Startups', 'Funding', 'Venture Capital'],
            'policy': ['Regulation', 'Policy', 'Governance'],
            'opinion': ['Analysis', 'Commentary', 'Perspective'],
        };
        return [...baseTags, ...(catTags[category] || [])];
    }

    function openArticleView(cardData) {
        savedScrollPos = window.scrollY;
        currentArticleId = cardData.id;

        // Populate content
        avHeroImg.src = cardData.image;
        avBadge.textContent = categoryLabels[cardData.category] || 'AI';
        avBadge.className = 'badge ' + (categoryBadgeClasses[cardData.category] || 'badge-llm');
        avReadTimeMinutes = Math.floor(Math.random() * 12) + 5;
        avReadTime.textContent = avReadTimeMinutes + ' min read';
        avTitle.textContent = cardData.title;
        avAuthorAvatar.src = cardData.avatar;
        avAuthorName.textContent = cardData.author;
        avAuthorDate.textContent = cardData.date + ' · AI Now';
        avBody.innerHTML = generateArticleBody(cardData.title, cardData.category, cardData.id);

        // Tags
        const tags = generateTags(cardData.category);
        avTags.innerHTML = tags.map(t => `<span class="av-tag">${t}</span>`).join('');

        // Bookmark state
        const isBookmarked = bookmarks.find(b => b.id === cardData.id);
        avBookmarkBtn.classList.toggle('bookmarked', !!isBookmarked);

        // Related articles
        generateRelatedArticles(cardData.category, cardData.id);

        // Track in reading history
        readingHistory = readingHistory.filter(h => h.id !== cardData.id);
        readingHistory.unshift({ id: cardData.id, title: cardData.title, category: cardData.category, viewedAt: Date.now() });
        if (readingHistory.length > 30) readingHistory = readingHistory.slice(0, 30);
        localStorage.setItem('ainow-history', JSON.stringify(readingHistory));
        renderHistory();

        // Build table of contents
        buildTOC();

        // Reset TTS
        stopTTS();
        ttsPlayer.classList.remove('visible', 'playing');

        // Reset font toggle
        avBody.classList.remove('font-serif');
        avFontToggle.classList.remove('active');
        avFontLabel.textContent = 'Serif';

        // Open view
        articleView.classList.add('open');
        articleView.scrollTop = 0;
        document.body.style.overflow = 'hidden';
    }

    function closeArticleView() {
        articleView.classList.remove('open');
        document.body.style.overflow = '';
        currentArticleId = null;
        stopTTS();
        timeRemainingPill.classList.remove('visible');

        // Restore scroll position
        setTimeout(() => {
            window.scrollTo(0, savedScrollPos);
        }, 100);
    }

    articleBackBtn.addEventListener('click', closeArticleView);

    // Bookmark in article view
    avBookmarkBtn.addEventListener('click', () => {
        if (!currentArticleId) return;
        const card = document.querySelector(`[data-article-id="${currentArticleId}"]`);
        const title = avTitle.textContent;
        const category = avBadge.textContent.toLowerCase();
        const cardBmBtn = card?.querySelector('.bookmark-btn');

        const idx = bookmarks.findIndex(b => b.id === currentArticleId);
        if (idx > -1) {
            bookmarks.splice(idx, 1);
            avBookmarkBtn.classList.remove('bookmarked');
            if (cardBmBtn) cardBmBtn.classList.remove('bookmarked');
            showToast('Removed from reading list', 'remove');
        } else {
            bookmarks.push({ id: currentArticleId, title, category, savedAt: Date.now() });
            avBookmarkBtn.classList.add('bookmarked');
            if (cardBmBtn) cardBmBtn.classList.add('bookmarked');
            showToast('Saved to reading list', 'bookmark');
        }
        localStorage.setItem('ainow-bookmarks', JSON.stringify(bookmarks));
        renderReadingList();
    });

    // Share in article view
    avShareBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('Link copied to clipboard', 'check');
        });
    });

    function generateRelatedArticles(category, excludeId) {
        avRelatedGrid.innerHTML = '';
        const related = articleIndex
            .filter(a => a.category === category && a.el.dataset.articleId !== excludeId)
            .slice(0, 3);

        // If not enough from same category, fill from others
        if (related.length < 3) {
            const others = articleIndex
                .filter(a => a.el.dataset.articleId !== excludeId && !related.includes(a))
                .slice(0, 3 - related.length);
            related.push(...others);
        }

        related.forEach(a => {
            const imgSrc = a.el.querySelector('.card-img img')?.src || '';
            const cat = a.category;
            const card = document.createElement('div');
            card.className = 'av-related-card';
            card.innerHTML = `
                <img src="${imgSrc}" alt="" loading="lazy">
                <div class="av-related-card-body">
                    <span class="badge ${categoryBadgeClasses[cat] || 'badge-llm'}">${categoryLabels[cat] || 'AI'}</span>
                    <h4>${a.title}</h4>
                </div>
            `;
            card.addEventListener('click', () => {
                const cardEl = a.el;
                const data = extractCardData(cardEl);
                openArticleView(data);
                articleView.scrollTop = 0;
            });
            avRelatedGrid.appendChild(card);
        });
    }

    function extractCardData(card) {
        return {
            id: card.dataset.articleId || '',
            title: card.querySelector('h3')?.textContent || '',
            category: card.dataset.category || '',
            image: card.querySelector('.card-img img')?.src || '',
            avatar: card.querySelector('.meta-avatar')?.src || 'https://i.pravatar.cc/48?img=1',
            author: card.querySelector('.meta-author')?.textContent || 'Staff Writer',
            date: card.querySelector('time')?.textContent || 'Today',
        };
    }

    // Hook up all existing article card links
    document.querySelectorAll('.article-card a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const card = link.closest('.article-card');
            if (!card) return;
            openArticleView(extractCardData(card));
        });
    });

    // Hook up hero section articles too
    document.querySelectorAll('.hero-main-link, .hero-side a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const el = link.closest('.hero-main') || link.closest('.hero-side');
            if (!el) return;
            const title = el.querySelector('h1, h3')?.textContent || 'Sample Article';
            const badge = el.querySelector('.badge')?.textContent || 'AI';
            const img = el.querySelector('img')?.src || '';
            const catMap = { 'LLMs': 'large-language-models', 'Robotics': 'robotics', 'Research': 'research', 'Industry': 'industry' };
            openArticleView({
                id: 'hero-' + title.slice(0, 20).replace(/\W/g, ''),
                title,
                category: catMap[badge] || 'industry',
                image: img,
                avatar: 'https://i.pravatar.cc/48?img=12',
                author: 'AI Now Staff',
                date: 'Mar 28',
            });
        });
    });

    // ======================
    // Text-to-Speech (Listen to Article)
    // ======================
    const ttsPlayer = document.getElementById('ttsPlayer');
    const ttsPlayPause = document.getElementById('ttsPlayPause');
    const ttsStopBtn = document.getElementById('ttsStop');
    const ttsProgressBar = document.getElementById('ttsProgressBar');
    const ttsStatus = document.getElementById('ttsStatus');
    const ttsTime = document.getElementById('ttsTime');
    const avListenBtn = document.getElementById('avListenBtn');
    const avListenLabel = document.getElementById('avListenLabel');
    let ttsUtterance = null;
    let ttsInterval = null;
    let ttsPaused = false;
    let ttsStartTime = 0;
    let ttsEstimatedDuration = 0;

    function getArticleText() {
        const body = document.getElementById('avBody');
        if (!body) return '';
        // Get clean text from paragraphs, headings, blockquotes, list items
        const elements = body.querySelectorAll('p, h2, h3, blockquote, li');
        return Array.from(elements).map(el => el.textContent.trim()).filter(Boolean).join('. ');
    }

    function startTTS() {
        if (!('speechSynthesis' in window)) {
            showToast('Text-to-speech not supported in this browser', 'info');
            return;
        }

        window.speechSynthesis.cancel();

        const text = getArticleText();
        if (!text) return;

        ttsUtterance = new SpeechSynthesisUtterance(text);
        ttsUtterance.rate = 1;
        ttsUtterance.pitch = 1;

        // Try to pick a good voice
        const voices = window.speechSynthesis.getVoices();
        const preferred = voices.find(v => v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Daniel'));
        if (preferred) ttsUtterance.voice = preferred;

        // Estimate duration (~150 words per minute)
        const wordCount = text.split(/\s+/).length;
        ttsEstimatedDuration = (wordCount / 150) * 60; // seconds
        ttsStartTime = Date.now();
        ttsPaused = false;

        ttsUtterance.onend = () => {
            stopTTS();
            showToast('Finished reading article', 'check');
        };

        ttsUtterance.onerror = () => {
            stopTTS();
        };

        window.speechSynthesis.speak(ttsUtterance);

        ttsPlayer.classList.add('visible', 'playing');
        avListenBtn.classList.add('playing');
        avListenLabel.textContent = 'Pause';
        ttsStatus.textContent = 'Playing';

        // Progress simulation
        clearInterval(ttsInterval);
        ttsInterval = setInterval(() => {
            if (ttsPaused) return;
            const elapsed = (Date.now() - ttsStartTime) / 1000;
            const progress = Math.min((elapsed / ttsEstimatedDuration) * 100, 100);
            ttsProgressBar.style.width = progress + '%';

            const remaining = Math.max(0, Math.ceil(ttsEstimatedDuration - elapsed));
            const mins = Math.floor(remaining / 60);
            const secs = remaining % 60;
            ttsTime.textContent = mins + ':' + String(secs).padStart(2, '0') + ' remaining';
        }, 500);
    }

    function pauseTTS() {
        if (!window.speechSynthesis.speaking) return;
        window.speechSynthesis.pause();
        ttsPaused = true;
        ttsPlayer.classList.remove('playing');
        avListenBtn.classList.remove('playing');
        avListenLabel.textContent = 'Resume';
        ttsStatus.textContent = 'Paused';
    }

    function resumeTTS() {
        window.speechSynthesis.resume();
        ttsPaused = false;
        ttsPlayer.classList.add('playing');
        avListenBtn.classList.add('playing');
        avListenLabel.textContent = 'Pause';
        ttsStatus.textContent = 'Playing';
    }

    function stopTTS() {
        window.speechSynthesis.cancel();
        clearInterval(ttsInterval);
        ttsPlayer.classList.remove('visible', 'playing');
        avListenBtn.classList.remove('playing');
        avListenLabel.textContent = 'Listen';
        ttsProgressBar.style.width = '0%';
        ttsTime.textContent = '';
        ttsStatus.textContent = 'Ready';
        ttsPaused = false;
        ttsUtterance = null;
    }

    avListenBtn.addEventListener('click', () => {
        if (window.speechSynthesis.speaking && !ttsPaused) {
            pauseTTS();
        } else if (ttsPaused) {
            resumeTTS();
        } else {
            startTTS();
        }
    });

    ttsPlayPause.addEventListener('click', () => {
        if (window.speechSynthesis.speaking && !ttsPaused) {
            pauseTTS();
        } else if (ttsPaused) {
            resumeTTS();
        } else {
            startTTS();
        }
    });

    ttsStopBtn.addEventListener('click', () => {
        stopTTS();
        showToast('Stopped reading', 'info');
    });

    // Preload voices
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }

    // ======================
    // Table of Contents
    // ======================
    const avTocList = document.getElementById('avTocList');

    function buildTOC() {
        avTocList.innerHTML = '';
        const headings = avBody.querySelectorAll('h2, h3');

        if (headings.length === 0) return;

        headings.forEach((h, i) => {
            const id = 'toc-heading-' + i;
            h.id = id;

            const li = document.createElement('li');
            li.className = 'av-toc-item';

            const a = document.createElement('a');
            a.className = 'av-toc-link' + (h.tagName === 'H3' ? ' toc-h3' : '');
            a.href = '#' + id;
            a.textContent = h.textContent;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(id);
                if (target) {
                    articleView.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });

            li.appendChild(a);
            avTocList.appendChild(li);
        });
    }

    // TOC scroll spy within article view
    articleView.addEventListener('scroll', () => {
        const headings = avBody.querySelectorAll('h2[id], h3[id]');
        const links = avTocList.querySelectorAll('.av-toc-link');
        if (headings.length === 0 || links.length === 0) return;

        const scrollTop = articleView.scrollTop + 120;
        let activeIdx = 0;

        headings.forEach((h, i) => {
            if (h.offsetTop <= scrollTop) {
                activeIdx = i;
            }
        });

        links.forEach((l, i) => {
            l.classList.toggle('active', i === activeIdx);
        });
    });

    // ======================
    // Reading Font Toggle
    // ======================
    const avFontToggle = document.getElementById('avFontToggle');
    const avFontLabel = document.getElementById('avFontLabel');

    avFontToggle.addEventListener('click', () => {
        const isSerif = avBody.classList.toggle('font-serif');
        avFontToggle.classList.toggle('active', isSerif);
        avFontLabel.textContent = isSerif ? 'Sans' : 'Serif';
        localStorage.setItem('ainow-reading-font', isSerif ? 'serif' : 'sans');
    });

    // Restore preference
    if (localStorage.getItem('ainow-reading-font') === 'serif') {
        avBody.classList.add('font-serif');
        avFontToggle.classList.add('active');
        avFontLabel.textContent = 'Sans';
    }

    // Escape to close article view
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && articleView.classList.contains('open')) {
            closeArticleView();
        }
    });

    // Make reading progress bar + time remaining pill work inside article view
    const timeRemainingPill = document.getElementById('timeRemainingPill');
    const timeRemainingText = document.getElementById('timeRemainingText');
    let avReadTimeMinutes = 8; // updated when article opens

    articleView.addEventListener('scroll', () => {
        const scrollTop = articleView.scrollTop;
        const scrollHeight = articleView.scrollHeight - articleView.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = progress + '%';

        // Time remaining pill
        if (scrollTop > 300 && progress < 92) {
            const remaining = Math.max(1, Math.ceil(avReadTimeMinutes * (1 - progress / 100)));
            timeRemainingText.textContent = remaining === 1 ? '~1 min left' : `~${remaining} min left`;
            timeRemainingPill.classList.add('visible');
        } else {
            timeRemainingPill.classList.remove('visible');
        }
    });

    // Reading List Tabs
    document.querySelectorAll('.rl-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.rl-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.dataset.tab;

            document.getElementById('rlTabSaved').style.display = target === 'saved' ? 'block' : 'none';
            document.getElementById('rlTabHistory').style.display = target === 'history' ? 'block' : 'none';

            if (target === 'history') renderHistory();
        });
    });

    function renderHistory() {
        const historyTab = document.getElementById('rlTabHistory');
        const historyEmpty = document.getElementById('historyEmpty');

        // Clear existing items
        historyTab.querySelectorAll('.history-article-item').forEach(el => el.remove());

        if (readingHistory.length === 0) {
            historyEmpty.style.display = 'flex';
            return;
        }

        historyEmpty.style.display = 'none';

        readingHistory.forEach(h => {
            const item = document.createElement('div');
            item.className = 'history-article-item';

            const dotColor = categoryColors[h.category] || '#6366f1';

            item.innerHTML = `
                <span class="history-dot" style="background:${dotColor}"></span>
                <div class="history-article-info">
                    <h4>${h.title}</h4>
                    <span>${h.category.replace(/-/g, ' ')}</span>
                </div>
                <span class="history-time">${timeAgo(h.viewedAt)}</span>
            `;

            historyTab.appendChild(item);
        });
    }

    // ======================
    // Scroll-in Animations
    // ======================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.article-card, .trending-item, .stat-card, .dive-card, .market-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = `.in-view { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);

    // ======================
    // Time on Site
    // ======================
    const timeOnSiteEl = document.getElementById('timeOnSiteValue');
    const siteStartTime = Date.now();

    function updateTimeOnSite() {
        const elapsed = Math.floor((Date.now() - siteStartTime) / 1000);
        const mins = Math.floor(elapsed / 60);
        const secs = elapsed % 60;
        timeOnSiteEl.textContent = mins + ':' + String(secs).padStart(2, '0');
    }

    setInterval(updateTimeOnSite, 1000);
    updateTimeOnSite();

    // ======================
    // Image Blur-Up Loading
    // ======================
    function initBlurUp() {
        document.querySelectorAll('.card-img img, .hero-main-img img, .hero-side-img img, .dive-img img').forEach(img => {
            // Skip already processed
            if (img.classList.contains('blur-up') || img.classList.contains('loaded')) return;

            img.classList.add('blur-up');

            if (img.complete && img.naturalWidth > 0) {
                // Already loaded (cached)
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    // Small delay so the blur is visible briefly
                    requestAnimationFrame(() => {
                        img.classList.add('loaded');
                    });
                }, { once: true });

                img.addEventListener('error', () => {
                    img.classList.add('loaded'); // remove blur even on error
                }, { once: true });
            }
        });
    }

    // Run on initial load
    initBlurUp();

    // Also run when new cards are added (infinite scroll)
    const blurUpObserver = new MutationObserver((mutations) => {
        let hasNewImages = false;
        mutations.forEach(m => {
            m.addedNodes.forEach(node => {
                if (node.nodeType === 1 && (node.querySelector?.('img') || node.tagName === 'IMG')) {
                    hasNewImages = true;
                }
            });
        });
        if (hasNewImages) initBlurUp();
    });

    blurUpObserver.observe(document.getElementById('articlesGrid'), {
        childList: true,
        subtree: true,
    });
});
