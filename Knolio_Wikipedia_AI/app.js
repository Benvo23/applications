// ============================================
// KNOWLIO - AI-Powered Wikipedia Assistant
// Uses Groq AI (FREE) + Wikipedia
// ============================================

// ============================================
// CONFIGURATION - Add your FREE Groq API key here
// Get one free at: https://console.groq.com/keys
// ============================================
const GROQ_API_KEY = 'YOUR_GROQ_API_KEY';

// DOM Elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const submitBtn = document.getElementById('submitBtn');
const welcomeScreen = document.getElementById('welcomeScreen');
const chatContainer = document.getElementById('chatContainer');
const messagesArea = document.getElementById('messagesArea');
const chatList = document.getElementById('chatList');
const pinnedList = document.getElementById('pinnedList');
const pinnedSection = document.getElementById('pinnedSection');
const newChatBtn = document.getElementById('newChatBtn');
const suggestionChips = document.querySelectorAll('.suggestion-chip');
const chatMenu = document.getElementById('chatMenu');
const renameModal = document.getElementById('renameModal');
const renameInput = document.getElementById('renameInput');
const pinText = document.getElementById('pinText');

let isLoading = false;
let currentChatId = null;
let menuTargetChatId = null;
let conversationContext = []; // Store recent Q&A for follow-ups

// ============================================
// CHAT MANAGEMENT SYSTEM
// ============================================
const ChatManager = {
    STORAGE_KEY: 'wikiMindChats',

    // Get all chats
    getChats() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    },

    // Save all chats
    saveChats(chats) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(chats));
    },

    // Create a new chat
    createChat(name = 'New Chat') {
        const chats = this.getChats();
        const chat = {
            id: Date.now().toString(),
            name: name,
            messages: [],
            pinned: false,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        chats.unshift(chat);
        this.saveChats(chats);
        return chat;
    },

    // Get a chat by ID
    getChat(id) {
        return this.getChats().find(c => c.id === id);
    },

    // Update a chat
    updateChat(id, updates) {
        const chats = this.getChats();
        const index = chats.findIndex(c => c.id === id);
        if (index !== -1) {
            chats[index] = { ...chats[index], ...updates, updatedAt: Date.now() };
            this.saveChats(chats);
            return chats[index];
        }
        return null;
    },

    // Add message to chat
    addMessage(chatId, message) {
        const chat = this.getChat(chatId);
        if (chat) {
            chat.messages.push(message);
            this.updateChat(chatId, { messages: chat.messages });
        }
    },

    // Generate smart chat name using AI
    async generateChatName(query) {
        try {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: [
                        {
                            role: 'system',
                            content: 'Generate a short, descriptive title (3-5 words max) for a chat based on the user\'s question. No quotes, no punctuation at the end. Examples: "LeBron Career History", "WW2 Key Dates", "LAX Airlines Count", "Photosynthesis Explained"'
                        },
                        {
                            role: 'user',
                            content: query
                        }
                    ],
                    temperature: 0.3,
                    max_tokens: 20
                })
            });
            const data = await response.json();
            return data.choices[0]?.message?.content?.trim() || query.slice(0, 30);
        } catch (error) {
            console.error('Failed to generate chat name:', error);
            return query.slice(0, 30) + (query.length > 30 ? '...' : '');
        }
    },

    // Delete a chat
    deleteChat(id) {
        const chats = this.getChats().filter(c => c.id !== id);
        this.saveChats(chats);
    },

    // Rename a chat
    renameChat(id, newName) {
        this.updateChat(id, { name: newName });
    },

    // Toggle pin
    togglePin(id) {
        const chat = this.getChat(id);
        if (chat) {
            this.updateChat(id, { pinned: !chat.pinned });
        }
    },

    // Get sorted chats (pinned first, then by date)
    getSortedChats() {
        const chats = this.getChats();
        const pinned = chats.filter(c => c.pinned).sort((a, b) => b.updatedAt - a.updatedAt);
        const unpinned = chats.filter(c => !c.pinned).sort((a, b) => b.updatedAt - a.updatedAt);
        return { pinned, unpinned };
    },

    // Clear old history and migrate
    clearAndReset() {
        localStorage.removeItem('wikiHistory');
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

// Clear old data on first load
if (localStorage.getItem('wikiHistory')) {
    ChatManager.clearAndReset();
}

// ============================================
// WIKIPEDIA API
// ============================================
const WikiAPI = {
    apiUrl: 'https://en.wikipedia.org/w/api.php',
    restUrl: 'https://en.wikipedia.org/api/rest_v1',

    async search(query, limit = 10) {
        const params = new URLSearchParams({
            action: 'query',
            list: 'search',
            srsearch: query,
            srlimit: limit,
            format: 'json',
            origin: '*'
        });
        const response = await fetch(`${this.apiUrl}?${params}`);
        const data = await response.json();
        return data.query?.search || [];
    },

    // Search with opensearch for better suggestions
    async suggest(query) {
        const params = new URLSearchParams({
            action: 'opensearch',
            search: query,
            limit: 8,
            namespace: 0,
            format: 'json',
            origin: '*'
        });
        const response = await fetch(`${this.apiUrl}?${params}`);
        const data = await response.json();
        // Returns [query, [titles], [descriptions], [urls]]
        return data[1] || [];
    },

    async getSummary(title) {
        const response = await fetch(`${this.restUrl}/page/summary/${encodeURIComponent(title)}`);
        if (!response.ok) throw new Error('Article not found');
        return response.json();
    },

    async getFullText(title) {
        const params = new URLSearchParams({
            action: 'query',
            titles: title,
            prop: 'extracts',
            explaintext: true,
            exlimit: 1,
            format: 'json',
            origin: '*'
        });
        const response = await fetch(`${this.apiUrl}?${params}`);
        const data = await response.json();
        const pages = data.query?.pages;
        if (!pages) return '';
        const pageId = Object.keys(pages)[0];
        return pages[pageId]?.extract || '';
    },

    // Get parsed HTML to extract tables and lists
    async getHTML(title) {
        const params = new URLSearchParams({
            action: 'parse',
            page: title,
            format: 'json',
            origin: '*',
            prop: 'text|sections'
        });
        const response = await fetch(`${this.apiUrl}?${params}`);
        const data = await response.json();
        return data.parse;
    },

    // Get a specific section by index
    async getSection(title, sectionIndex) {
        const params = new URLSearchParams({
            action: 'parse',
            page: title,
            section: sectionIndex,
            format: 'json',
            origin: '*',
            prop: 'text'
        });
        const response = await fetch(`${this.apiUrl}?${params}`);
        const data = await response.json();
        return data.parse?.text?.['*'] || '';
    },

    async getRelated(title) {
        try {
            const response = await fetch(`${this.restUrl}/page/related/${encodeURIComponent(title)}`);
            if (!response.ok) return [];
            const data = await response.json();
            return data.pages?.slice(0, 6) || [];
        } catch {
            return [];
        }
    },

    // Get images from article using REST API (better curated)
    async getImages(title) {
        try {
            // Use the media-list endpoint for curated images
            const response = await fetch(`${this.restUrl}/page/media-list/${encodeURIComponent(title)}`);
            if (!response.ok) return [];

            const data = await response.json();
            const items = data.items || [];

            // Filter for actual content images
            const validImages = items.filter(item => {
                // Must be an image type
                if (item.type !== 'image') return false;

                const src = (item.srcset?.[0]?.src || '').toLowerCase();
                const title = (item.title || '').toLowerCase();

                // Skip non-image files
                if (!src.match(/\.(jpg|jpeg|png|gif)/i)) return false;

                // Skip icons, logos, UI elements
                const excludes = [
                    'icon', 'logo', 'symbol', 'flag', 'commons-logo',
                    'wiki', 'button', 'arrow', 'ambox', 'lock', 'padlock',
                    'edit', 'medal', 'ribbon', 'badge', 'stub', 'portal'
                ];

                if (excludes.some(e => title.includes(e) || src.includes(e))) {
                    return false;
                }

                return true;
            });

            // Map to our format
            return validImages.slice(0, 6).map(item => {
                // Get the best resolution from srcset
                const srcset = item.srcset || [];
                const best = srcset[srcset.length - 1] || srcset[0];

                return {
                    thumb: best?.src || item.thumbnail?.url,
                    full: item.original?.url || best?.src,
                    title: item.title || 'Image'
                };
            }).filter(img => img.thumb); // Only include if we have a thumbnail

        } catch (error) {
            console.error('Failed to get images:', error);
            return [];
        }
    },

    // Get actual image URLs
    async getImageUrls(imageTitles) {
        if (imageTitles.length === 0) return [];
        try {
            const params = new URLSearchParams({
                action: 'query',
                titles: imageTitles.join('|'),
                prop: 'imageinfo',
                iiprop: 'url|extmetadata',
                iiurlwidth: 300,
                format: 'json',
                origin: '*'
            });
            const response = await fetch(`${this.apiUrl}?${params}`);
            const data = await response.json();
            const pages = data.query?.pages;
            if (!pages) return [];

            const urls = [];
            Object.values(pages).forEach(page => {
                if (page.imageinfo && page.imageinfo[0]) {
                    const info = page.imageinfo[0];
                    if (info.thumburl) {
                        urls.push({
                            thumb: info.thumburl,
                            full: info.url,
                            title: page.title.replace('File:', '')
                        });
                    }
                }
            });
            return urls;
        } catch {
            return [];
        }
    }
};

// ============================================
// DATA EXTRACTOR - Parse tables and lists
// ============================================
const DataExtractor = {
    // Parse HTML string to DOM
    parseHTML(html) {
        const parser = new DOMParser();
        return parser.parseFromString(html, 'text/html');
    },

    // Find relevant section for a question
    findRelevantSection(sections, question) {
        const q = question.toLowerCase();
        const keywords = {
            'airlines': ['airlines', 'destinations', 'carriers'],
            'terminals': ['terminals', 'terminal'],
            'runways': ['runways', 'runway', 'airfield'],
            'passengers': ['statistics', 'traffic', 'passengers'],
            'population': ['demographics', 'population'],
            'members': ['members', 'roster', 'personnel'],
            'episodes': ['episodes', 'episode list'],
            'tracks': ['track listing', 'tracks'],
            'countries': ['member states', 'countries', 'members']
        };

        for (const [key, terms] of Object.entries(keywords)) {
            if (q.includes(key) || terms.some(t => q.includes(t))) {
                for (const section of sections) {
                    const sectionTitle = section.line?.toLowerCase() || '';
                    if (terms.some(t => sectionTitle.includes(t))) {
                        console.log('[DataExtractor] Found section:', section.line);
                        return section;
                    }
                }
            }
        }
        return null;
    },

    // Extract airline names from airport-style tables
    extractAirlineData(html) {
        const doc = this.parseHTML(html);
        const airlines = new Set();

        // Airport Wikipedia pages have tables with airline names in the first column
        const tables = doc.querySelectorAll('table');

        tables.forEach(table => {
            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
                // Get the first TD cell (skip header rows with TH)
                const firstCell = row.querySelector('td:first-child');
                if (!firstCell) return;

                // Get the cell's text content, but focus on the main link
                // Airlines are typically the first link in the cell
                const mainLink = firstCell.querySelector('a:not([href*="cite_note"]):not([href*="#"])');

                if (mainLink) {
                    let text = mainLink.textContent.trim();
                    // Clean and validate
                    text = text.replace(/\[\d+\]/g, '').trim();

                    // Must be a valid airline name
                    if (text &&
                        text.length >= 3 &&
                        text.length < 60 &&
                        !text.match(/^\d+$/) &&
                        !text.match(/^\[.*\]$/) &&
                        !text.toLowerCase().includes('edit') &&
                        !text.toLowerCase().includes('citation') &&
                        !text.toLowerCase().includes('reference') &&
                        !text.toLowerCase().includes('terminal')) {
                        airlines.add(text);
                    }
                } else {
                    // No link - try direct text but be more careful
                    let text = firstCell.textContent.trim();
                    // Remove all bracketed references
                    text = text.replace(/\[.*?\]/g, '').trim();
                    // Get just the first line/part
                    text = text.split('\n')[0].trim();

                    if (text &&
                        text.length >= 3 &&
                        text.length < 60 &&
                        !text.match(/^\d/) &&
                        text.match(/[a-zA-Z]/) &&
                        !text.toLowerCase().includes('airline') &&
                        !text.toLowerCase().includes('destinations')) {
                        airlines.add(text);
                    }
                }
            });
        });

        console.log('[DataExtractor] Found airlines:', airlines.size);
        console.log('[DataExtractor] Airline names:', [...airlines].slice(0, 15).join(', '));
        return [...airlines];
    },

    // Extract items from tables (generic)
    extractTableData(html) {
        const doc = this.parseHTML(html);
        const tables = doc.querySelectorAll('table.wikitable, table.sortable, table');
        const results = [];

        tables.forEach(table => {
            const items = new Set();
            const rows = table.querySelectorAll('tbody tr, tr');

            rows.forEach(row => {
                // Try first td, then first th
                const firstCell = row.querySelector('td:first-child') || row.querySelector('th:first-child');
                if (firstCell) {
                    // Prefer link text
                    const link = firstCell.querySelector('a');
                    let text = link ? link.textContent.trim() : firstCell.textContent.trim();
                    text = text.replace(/\[\d+\]/g, '').replace(/\[edit\]/gi, '').trim();

                    if (text &&
                        text.length > 1 &&
                        text.length < 100 &&
                        !text.match(/^[\d\s]+$/) &&
                        !text.toLowerCase().includes('edit')) {
                        items.add(text);
                    }
                }
            });

            if (items.size > 0) {
                results.push(...items);
            }
        });

        return [...new Set(results)];
    },

    // Extract items from lists
    extractListData(html) {
        const doc = this.parseHTML(html);
        const items = [];
        const listItems = doc.querySelectorAll('ul li, ol li');

        listItems.forEach(li => {
            // Prefer link text
            const link = li.querySelector('a');
            let text = link ? link.textContent.trim() : li.textContent.trim().split('\n')[0];
            text = text.replace(/\[\d+\]/g, '').trim();
            if (text && text.length > 2 && text.length < 150) {
                items.push(text);
            }
        });

        return items.slice(0, 100);
    },

    // Get structured data for a question
    async getStructuredData(title, question, sections) {
        const relevantSection = this.findRelevantSection(sections, question);
        const q = question.toLowerCase();

        if (relevantSection) {
            console.log('[DataExtractor] Getting section:', relevantSection.index, relevantSection.line);
            const sectionHTML = await WikiAPI.getSection(title, relevantSection.index);
            console.log('[DataExtractor] Section HTML length:', sectionHTML.length);

            // Use specialized extraction for airlines
            let tableItems;
            if (q.includes('airline')) {
                tableItems = this.extractAirlineData(sectionHTML);
            } else {
                tableItems = this.extractTableData(sectionHTML);
            }

            const listItems = this.extractListData(sectionHTML);

            const result = {
                sectionName: relevantSection.line,
                tableItems,
                listItems,
                totalCount: tableItems.length || listItems.length
            };

            console.log('[DataExtractor] Result:', result.totalCount, 'items');
            return result;
        }

        console.log('[DataExtractor] No relevant section found');
        return null;
    }
};

// ============================================
// GROQ AI API (FREE!)
// ============================================
const GroqAI = {
    apiUrl: 'https://api.groq.com/openai/v1/chat/completions',

    async ask(question, wikipediaContent, articleTitle, context = []) {
        if (GROQ_API_KEY === 'YOUR_GROQ_API_KEY') {
            throw new Error('Please add your FREE Groq API key in app.js. Get one at: https://console.groq.com/keys');
        }

        const systemPrompt = `You are Knowlio, a helpful AI assistant that answers questions using Wikipedia content.

Rules:
- ALWAYS provide a helpful answer based on the Wikipedia content given
- If the context starts with "=== IMPORTANT EXTRACTED DATA ===" containing a count and list, START your answer with that exact count (e.g., "LAX has 73 airlines...")
- For counting questions, state the number clearly and list some examples
- For factual questions (dates, names, events), find the answer in the text and state it directly
- For explanatory questions, summarize the relevant information from the article
- NEVER say "I couldn't find this" - the Wikipedia article content is provided, so extract and summarize whatever is relevant
- Be confident and informative
- Keep answers concise but complete (50-150 words)
- You can reference previous questions in the conversation for follow-ups`;

        // Build messages array with context
        const messages = [
            { role: 'system', content: systemPrompt }
        ];

        // Add previous conversation context (last 3 Q&A pairs)
        const recentContext = context.slice(-3);
        recentContext.forEach(ctx => {
            messages.push({ role: 'user', content: `Question about "${ctx.article}": ${ctx.question}` });
            messages.push({ role: 'assistant', content: ctx.answer });
        });

        // Add current question
        const userPrompt = `Wikipedia Article: "${articleTitle}"

${wikipediaContent.substring(0, 5000)}

Question: ${question}

Answer based on the Wikipedia content above. If this is a follow-up question, use the conversation context.`;

        messages.push({ role: 'user', content: userPrompt });

        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: messages,
                temperature: 0.2,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Groq API error');
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || 'No response from AI';
    }
};

// ============================================
// CASUAL CHAT DETECTION
// ============================================
function isCasualChat(query) {
    const q = query.toLowerCase().trim();
    const casualPatterns = [
        /^(hi|hello|hey|sup|yo|howdy)/,
        /^(tell me a joke|make me laugh|say something funny|tell a joke)/,
        /^(how are you|what's up|whats up)/,
        /^(thank|thanks|thx)/,
        /^(bye|goodbye|see you|cya)/,
        /^(who are you|what are you|what can you do)/,
        /^(help|help me)$/,
        /^(lol|haha|lmao|rofl)/,
        /joke/,
        /funny/,
        /^good (morning|afternoon|evening|night)/
    ];
    return casualPatterns.some(pattern => pattern.test(q));
}

async function handleCasualChat(query) {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
                {
                    role: 'system',
                    content: `You are Knowlio, a friendly and witty AI assistant powered by Wikipedia.

For casual chat:
- Be friendly, warm, and have personality
- Tell actual funny jokes when asked (not Wikipedia facts about jokes)
- Keep responses short and conversational
- You can use humor and be playful
- If asked who you are, say you're Knowlio, an AI that helps people explore Wikipedia

Remember: Be fun and engaging, not robotic!`
                },
                {
                    role: 'user',
                    content: query
                }
            ],
            temperature: 0.8,
            max_tokens: 200
        })
    });

    const data = await response.json();
    return data.choices[0]?.message?.content || "Hey there! Ask me anything about Wikipedia!";
}

// ============================================
// MAIN SEARCH FUNCTION
// ============================================
async function smartSearch(query) {
    // Step 1: Find relevant Wikipedia article
    let articleTitle = null;
    let summary = null;

    // Clean up the query to extract the main subject
    let subject = query
        .replace(/\b(show me|tell me about|what is|what are|who is|who are|how many|what|when|where|who|why|is|are|was|were|does|do|did|the|a|an|have|has|got|get|give me|i want|about)\b/gi, '')
        .replace(/[?!.,]/g, '')
        .trim();

    // Handle plural to singular for common cases
    const singularSubject = subject.replace(/ies$/i, 'y').replace(/s$/i, '');

    // Try multiple search strategies
    const searchAttempts = [
        subject,                    // Original cleaned subject
        singularSubject,            // Singular form
        query,                      // Full original query
        subject.split(' ')[0]       // First word only
    ];

    for (const searchTerm of searchAttempts) {
        if (!searchTerm || searchTerm.length < 2) continue;

        try {
            // Try direct lookup
            summary = await WikiAPI.getSummary(searchTerm);
            if (summary && summary.type !== 'disambiguation' && summary.type !== 'no-extract') {
                articleTitle = summary.title;
                console.log('[SmartSearch] Found article:', articleTitle, 'via:', searchTerm);
                break;
            }
        } catch {}

        // Try search API
        if (!articleTitle) {
            const results = await WikiAPI.search(searchTerm);
            if (results.length > 0) {
                // Pick the best result (prefer exact or close matches)
                const bestMatch = results.find(r =>
                    r.title.toLowerCase() === searchTerm.toLowerCase() ||
                    r.title.toLowerCase() === singularSubject.toLowerCase()
                ) || results[0];

                try {
                    summary = await WikiAPI.getSummary(bestMatch.title);
                    if (summary && summary.type !== 'disambiguation') {
                        articleTitle = summary.title;
                        console.log('[SmartSearch] Found article via search:', articleTitle);
                        break;
                    }
                } catch {}
            }
        }
    }

    // If still not found, show search suggestions
    if (!articleTitle) {
        const suggestions = await WikiAPI.suggest(query);
        if (suggestions.length > 0) {
            return {
                type: 'suggestions',
                query: query,
                suggestions: suggestions,
                aiAnswer: `I found several Wikipedia articles that might match "${query}". Click one below to learn more:`,
                title: 'Search Results'
            };
        }
        throw new Error('No Wikipedia article found for: ' + query);
    }

    // Step 2: Get article content AND structured data
    const [fullText, htmlData] = await Promise.all([
        WikiAPI.getFullText(articleTitle),
        WikiAPI.getHTML(articleTitle)
    ]);

    // Step 3: Extract structured data (tables, lists) for counting questions
    let structuredData = null;
    if (htmlData?.sections) {
        structuredData = await DataExtractor.getStructuredData(articleTitle, query, htmlData.sections);
    }

    // Step 4: Build answer - use extracted data directly if available
    let aiAnswer;

    if (structuredData && structuredData.totalCount > 0) {
        const items = structuredData.tableItems.length > 0
            ? structuredData.tableItems
            : structuredData.listItems;

        // Build the answer ourselves with the exact count
        const itemType = query.toLowerCase().includes('airline') ? 'airlines' : 'items';
        const exampleItems = items.slice(0, 10).join(', ');
        const moreCount = items.length > 10 ? items.length - 10 : 0;

        aiAnswer = `**${articleTitle}** has **${structuredData.totalCount} ${itemType}** listed in the "${structuredData.sectionName}" section.\n\n` +
            `Here are some of them: ${exampleItems}${moreCount > 0 ? `, and ${moreCount} more` : ''}.`;

        console.log('[SmartSearch] Built answer with', structuredData.totalCount, 'items');
    } else {
        // No structured data - use AI for general questions (with context)
        aiAnswer = await GroqAI.ask(query, fullText, articleTitle, conversationContext);
    }

    // Save to conversation context for follow-ups
    conversationContext.push({
        question: query,
        answer: aiAnswer,
        article: articleTitle
    });

    // Keep only last 5 Q&A pairs
    if (conversationContext.length > 5) {
        conversationContext = conversationContext.slice(-5);
    }

    // Step 6: Get related articles and images
    const [related, images] = await Promise.all([
        WikiAPI.getRelated(articleTitle),
        WikiAPI.getImages(articleTitle)
    ]);

    return {
        ...summary,
        aiAnswer,
        structuredData,
        related,
        images,
        question: query
    };
}

// ============================================
// UI FUNCTIONS
// ============================================
function showChat() {
    welcomeScreen.classList.add('hidden');
    chatContainer.classList.remove('hidden');
}

function showWelcome() {
    welcomeScreen.classList.remove('hidden');
    chatContainer.classList.add('hidden');
    messagesArea.innerHTML = '';
    currentChatId = null;
    conversationContext = []; // Reset context for new chat
    updateActiveChatHighlight();
}

function addUserMessage(text) {
    const message = document.createElement('div');
    message.className = 'message user';
    message.innerHTML = `
        <div class="message-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        </div>
        <div class="message-content">
            <p>${escapeHtml(text)}</p>
        </div>
    `;
    messagesArea.appendChild(message);
    scrollToBottom();
}

function addLoadingMessage() {
    const message = document.createElement('div');
    message.className = 'message assistant';
    message.id = 'loadingMessage';
    message.innerHTML = `
        <div class="message-avatar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png" alt="WikiMind" class="avatar-img">
        </div>
        <div class="message-content">
            <div class="loading-message">
                <div class="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span class="loading-text">Searching Wikipedia & thinking...</span>
            </div>
        </div>
    `;
    messagesArea.appendChild(message);
    scrollToBottom();
}

function removeLoadingMessage() {
    const loading = document.getElementById('loadingMessage');
    if (loading) loading.remove();
}

function addWikiResult(data) {
    const message = document.createElement('div');
    message.className = 'message assistant';

    // Format the AI answer with markdown-like styling
    const formattedAnswer = formatAnswer(data.aiAnswer);

    // Copy button HTML
    const copyBtnHtml = `
        <button class="copy-btn" title="Copy answer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
        </button>
    `;

    // Check if this is casual chat (no Wikipedia source needed)
    if (data.isCasual) {
        message.innerHTML = `
            <div class="message-avatar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png" alt="Knowlio" class="avatar-img">
            </div>
            <div class="message-content">
                <div class="ai-answer">
                    ${copyBtnHtml}
                    ${formattedAnswer}
                </div>
            </div>
        `;
        messagesArea.appendChild(message);
        attachCopyHandler(message, data.aiAnswer);
        scrollToBottom();
        return;
    }

    // Check if this is a suggestions result (multiple articles found)
    if (data.type === 'suggestions') {
        message.innerHTML = `
            <div class="message-avatar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png" alt="Knowlio" class="avatar-img">
            </div>
            <div class="message-content">
                <div class="ai-answer">
                    ${formattedAnswer}
                </div>
                <div class="search-suggestions">
                    <h4>Select an article:</h4>
                    <div class="suggestion-list">
                        ${data.suggestions.map(title => `
                            <button class="suggestion-item" data-title="${escapeHtml(title)}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg>
                                ${escapeHtml(title)}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        messagesArea.appendChild(message);

        // Add click handlers for suggestions
        message.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                performSearch(item.dataset.title);
            });
        });

        scrollToBottom();
        return;
    }

    // Image
    const imageHtml = data.thumbnail ?
        `<img src="${data.thumbnail.source}" alt="${escapeHtml(data.title)}" class="wiki-result-image">` : '';

    // Image gallery
    const galleryHtml = data.images?.length > 0 ? `
        <div class="image-gallery">
            <h4>Images</h4>
            <div class="gallery-grid">
                ${data.images.map(img => `
                    <a href="${img.full}" target="_blank" rel="noopener" class="gallery-item" title="${escapeHtml(img.title)}">
                        <img src="${img.thumb}" alt="${escapeHtml(img.title)}" loading="lazy">
                    </a>
                `).join('')}
            </div>
        </div>
    ` : '';

    // Related
    const relatedHtml = data.related?.length > 0 ? `
        <div class="related-topics">
            <h4>Related Topics</h4>
            <div class="related-chips">
                ${data.related.map(r => `
                    <button class="related-chip" data-query="${escapeHtml(r.title)}">${escapeHtml(r.title)}</button>
                `).join('')}
            </div>
        </div>
    ` : '';

    message.innerHTML = `
        <div class="message-avatar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png" alt="Knowlio" class="avatar-img">
        </div>
        <div class="message-content">
            <div class="ai-answer">
                ${copyBtnHtml}
                ${formattedAnswer}
            </div>
            <div class="wiki-source">
                <div class="source-header">
                    ${imageHtml}
                    <div class="source-info">
                        <span class="source-label">Source</span>
                        <a href="${data.content_urls?.desktop?.page || '#'}" target="_blank" rel="noopener" class="source-title">
                            ${escapeHtml(data.title)}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                ${galleryHtml}
                ${relatedHtml}
            </div>
        </div>
    `;

    messagesArea.appendChild(message);

    // Attach copy handler
    attachCopyHandler(message, data.aiAnswer);

    message.querySelectorAll('.related-chip').forEach(chip => {
        chip.addEventListener('click', () => performSearch(chip.dataset.query));
    });

    scrollToBottom();
}

// Copy to clipboard handler
function attachCopyHandler(messageEl, text) {
    const copyBtn = messageEl.querySelector('.copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(text);
                copyBtn.classList.add('copied');
                copyBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                `;
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    `;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    }
}

function formatAnswer(text) {
    // Convert markdown-like formatting to HTML
    let html = escapeHtml(text);

    // Bold text **text**
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Numbers with units (highlight them)
    html = html.replace(/(\d[\d,\.]*)\s*(airlines?|passengers?|destinations?|terminals?|flights?|million|billion|thousand|percent|%)/gi,
        '<span class="highlight-number">$1 $2</span>');

    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');

    // Wrap in paragraph
    html = '<p>' + html + '</p>';

    return html;
}

function addErrorMessage(error) {
    const message = document.createElement('div');
    message.className = 'message assistant';
    message.innerHTML = `
        <div class="message-avatar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png" alt="WikiMind" class="avatar-img">
        </div>
        <div class="message-content">
            <div class="error-message">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>${escapeHtml(error)}</span>
            </div>
        </div>
    `;
    messagesArea.appendChild(message);
    scrollToBottom();
}

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// ============================================
// CHAT LIST RENDERING
// ============================================
function renderChatList() {
    const { pinned, unpinned } = ChatManager.getSortedChats();

    // Render pinned chats
    if (pinned.length > 0) {
        pinnedSection.classList.remove('hidden');
        pinnedList.innerHTML = pinned.map(chat => createChatItemHTML(chat)).join('');
    } else {
        pinnedSection.classList.add('hidden');
        pinnedList.innerHTML = '';
    }

    // Render unpinned chats
    if (unpinned.length === 0 && pinned.length === 0) {
        chatList.innerHTML = '<li class="history-empty">No chats yet</li>';
    } else {
        chatList.innerHTML = unpinned.map(chat => createChatItemHTML(chat)).join('');
    }

    // Add event listeners
    document.querySelectorAll('.chat-item').forEach(item => {
        const chatId = item.dataset.chatId;

        // Click to load chat
        item.addEventListener('click', (e) => {
            if (!e.target.closest('.chat-menu-btn')) {
                loadChat(chatId);
            }
        });

        // 3-dot menu button
        const menuBtn = item.querySelector('.chat-menu-btn');
        if (menuBtn) {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showChatMenu(chatId, menuBtn);
            });
        }
    });

    // Highlight active chat
    updateActiveChatHighlight();
}

function createChatItemHTML(chat) {
    const isActive = chat.id === currentChatId;
    return `
        <li class="chat-item ${isActive ? 'active' : ''}" data-chat-id="${chat.id}">
            <svg class="chat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span class="chat-name">${escapeHtml(chat.name)}</span>
            <button class="chat-menu-btn" title="Options">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="1.5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                    <circle cx="12" cy="19" r="1.5"/>
                </svg>
            </button>
        </li>
    `;
}

function updateActiveChatHighlight() {
    document.querySelectorAll('.chat-item').forEach(item => {
        if (item.dataset.chatId === currentChatId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ============================================
// CHAT MENU (3-dot dropdown)
// ============================================
function showChatMenu(chatId, buttonEl) {
    menuTargetChatId = chatId;
    const chat = ChatManager.getChat(chatId);

    // Update pin text
    pinText.textContent = chat.pinned ? 'Unpin' : 'Pin';

    // Position menu
    const rect = buttonEl.getBoundingClientRect();
    chatMenu.style.top = `${rect.bottom + 4}px`;
    chatMenu.style.left = `${rect.left - 100}px`;

    chatMenu.classList.remove('hidden');
}

function hideChatMenu() {
    chatMenu.classList.add('hidden');
    menuTargetChatId = null;
}

// Menu actions
chatMenu.querySelectorAll('.chat-menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const action = item.dataset.action;
        if (!menuTargetChatId) return;

        switch (action) {
            case 'rename':
                showRenameModal(menuTargetChatId);
                break;
            case 'pin':
                ChatManager.togglePin(menuTargetChatId);
                renderChatList();
                break;
            case 'delete':
                ChatManager.deleteChat(menuTargetChatId);
                if (currentChatId === menuTargetChatId) {
                    currentChatId = null;
                    showWelcome();
                }
                renderChatList();
                break;
        }
        hideChatMenu();
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('.chat-menu') && !e.target.closest('.chat-menu-btn')) {
        hideChatMenu();
    }
});

// ============================================
// RENAME MODAL
// ============================================
function showRenameModal(chatId) {
    const chat = ChatManager.getChat(chatId);
    if (!chat) return;

    renameInput.value = chat.name;
    renameModal.classList.remove('hidden');
    renameInput.focus();
    renameInput.select();
}

function hideRenameModal() {
    renameModal.classList.add('hidden');
}

document.getElementById('cancelRename').addEventListener('click', hideRenameModal);
document.getElementById('confirmRename').addEventListener('click', () => {
    const newName = renameInput.value.trim();
    if (newName && menuTargetChatId) {
        ChatManager.renameChat(menuTargetChatId, newName);
        renderChatList();
    }
    hideRenameModal();
});

renameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('confirmRename').click();
    } else if (e.key === 'Escape') {
        hideRenameModal();
    }
});

renameModal.addEventListener('click', (e) => {
    if (e.target === renameModal) {
        hideRenameModal();
    }
});

// ============================================
// LOAD CHAT
// ============================================
function loadChat(chatId) {
    const chat = ChatManager.getChat(chatId);
    if (!chat) return;

    currentChatId = chatId;
    messagesArea.innerHTML = '';

    if (chat.messages.length === 0) {
        showWelcome();
    } else {
        showChat();
        chat.messages.forEach(msg => {
            if (msg.type === 'user') {
                addUserMessage(msg.content);
            } else if (msg.type === 'result') {
                addWikiResult(msg.data);
            } else if (msg.type === 'error') {
                addErrorMessage(msg.content);
            }
        });
    }

    updateActiveChatHighlight();
}

// ============================================
// MAIN SEARCH
// ============================================
async function performSearch(query) {
    if (!query.trim() || isLoading) return;

    isLoading = true;
    submitBtn.disabled = true;

    // Create a new chat if none exists
    const isNewChat = !currentChatId;
    if (isNewChat) {
        const newChat = ChatManager.createChat('New Chat');
        currentChatId = newChat.id;
        renderChatList();
    }

    showChat();
    addUserMessage(query);

    // Save user message to chat
    ChatManager.addMessage(currentChatId, { type: 'user', content: query });

    // Generate smart name for new chats
    if (isNewChat) {
        ChatManager.generateChatName(query).then(name => {
            ChatManager.renameChat(currentChatId, name);
            renderChatList();
        });
    }

    addLoadingMessage();

    try {
        // Check if it's casual chat (jokes, greetings, etc.)
        if (isCasualChat(query)) {
            const casualResponse = await handleCasualChat(query);
            removeLoadingMessage();

            // Create a simple result for casual chat
            const casualResult = {
                title: 'Knowlio',
                aiAnswer: casualResponse,
                isCasual: true
            };
            addWikiResult(casualResult);
            ChatManager.addMessage(currentChatId, { type: 'result', data: casualResult });
        } else {
            const result = await smartSearch(query);
            removeLoadingMessage();
            addWikiResult(result);
            ChatManager.addMessage(currentChatId, { type: 'result', data: result });
        }
    } catch (error) {
        removeLoadingMessage();
        addErrorMessage(error.message || 'Failed to get answer.');

        // Save error to chat
        ChatManager.addMessage(currentChatId, { type: 'error', content: error.message || 'Failed to get answer.' });
    } finally {
        isLoading = false;
        submitBtn.disabled = false;
        searchInput.value = '';
        searchInput.focus();
    }
}

// ============================================
// UTILITIES
// ============================================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// EVENT LISTENERS
// ============================================
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch(searchInput.value);
});

newChatBtn.addEventListener('click', () => {
    currentChatId = null;
    showWelcome();
});

suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => performSearch(chip.dataset.query));
});

// ============================================
// SIDEBAR TOGGLE
// ============================================
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

function toggleSidebar() {
    sidebar.classList.toggle('collapsed');
    localStorage.setItem('knowlio-sidebar-collapsed', sidebar.classList.contains('collapsed'));
}

// Load saved sidebar state
if (localStorage.getItem('knowlio-sidebar-collapsed') === 'true') {
    sidebar.classList.add('collapsed');
}

sidebarToggle.addEventListener('click', toggleSidebar);

// ============================================
// THEME TOGGLE
// ============================================
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('knowlio-theme', theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('knowlio-theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', toggleTheme);

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Escape to clear input
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchInput.blur();
    }

    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }

    // Ctrl/Cmd + N for new chat
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        currentChatId = null;
        showWelcome();
    }
});

// ============================================
// DID YOU KNOW - Random Facts
// ============================================
const dykContent = document.getElementById('dykContent');
const dykRefresh = document.getElementById('dykRefresh');

async function fetchRandomFact() {
    dykRefresh.classList.add('spinning');
    dykContent.innerHTML = `
        <div class="dyk-loading">
            <div class="loading-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;

    try {
        // Get a random Wikipedia article summary
        const response = await fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary');
        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();

        // Create an interesting fact from the summary
        let factText = data.extract;

        // Truncate if too long
        if (factText.length > 200) {
            factText = factText.substring(0, 200).trim();
            // Cut at last complete word
            const lastSpace = factText.lastIndexOf(' ');
            if (lastSpace > 150) {
                factText = factText.substring(0, lastSpace);
            }
            factText += '...';
        }

        dykContent.innerHTML = `
            <div class="dyk-fact">
                <p class="dyk-fact-text">${escapeHtml(factText)}</p>
                <span class="dyk-fact-link" data-title="${escapeHtml(data.title)}">
                    Learn more about ${escapeHtml(data.title)}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                    </svg>
                </span>
            </div>
        `;

        // Add click handler to learn more
        const learnMoreLink = dykContent.querySelector('.dyk-fact-link');
        if (learnMoreLink) {
            learnMoreLink.addEventListener('click', () => {
                performSearch(`Tell me about ${data.title}`);
            });
        }
    } catch (error) {
        console.error('Failed to fetch random fact:', error);
        dykContent.innerHTML = `
            <div class="dyk-fact">
                <p class="dyk-fact-text">The Great Wall of China is not visible from space with the naked eye, contrary to popular belief.</p>
                <span class="dyk-fact-link" data-title="Great Wall of China">
                    Learn more about Great Wall of China
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                    </svg>
                </span>
            </div>
        `;
        const fallbackLink = dykContent.querySelector('.dyk-fact-link');
        if (fallbackLink) {
            fallbackLink.addEventListener('click', () => {
                performSearch('Tell me about Great Wall of China');
            });
        }
    } finally {
        dykRefresh.classList.remove('spinning');
    }
}

// Refresh button handler
dykRefresh.addEventListener('click', fetchRandomFact);

// Fetch initial fact on page load
fetchRandomFact();

// ============================================
// INIT
// ============================================
renderChatList();
searchInput.focus();

// Show warning if no API key
if (GROQ_API_KEY === 'YOUR_GROQ_API_KEY') {
    console.warn('Knowlio: Add your FREE Groq API key in app.js. Get one at: https://console.groq.com/keys');
}
