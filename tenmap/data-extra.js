// Escalation trend data — simulated recent tension history (last 6 months)
// Each array = [6 months ago, 5, 4, 3, 2, 1 month ago, current]
const ESCALATION_DATA = {
    "Ukraine": [8, 8, 9, 9, 9, 9, 9],
    "Gaza / Israel": [9, 10, 10, 10, 10, 10, 10],
    "Sudan": [7, 8, 8, 9, 9, 9, 9],
    "Myanmar": [7, 7, 7, 8, 8, 8, 8],
    "Taiwan Strait": [6, 6, 6, 7, 7, 7, 7],
    "South China Sea": [5, 5, 6, 6, 6, 6, 6],
    "Korean Peninsula": [5, 5, 6, 6, 6, 6, 6],
    "Syria": [8, 8, 7, 7, 7, 7, 7],
    "Yemen": [6, 7, 7, 7, 7, 7, 7],
    "Ethiopia / Eritrea": [7, 7, 6, 6, 6, 6, 6],
    "Democratic Republic of Congo": [7, 7, 8, 8, 8, 8, 8],
    "Iran": [7, 7, 8, 8, 9, 9, 9],
    "Somalia": [7, 7, 7, 7, 7, 7, 7],
    "Sahel Region": [7, 7, 8, 8, 8, 8, 8],
    "Haiti": [6, 6, 7, 7, 7, 7, 7],
    "Kashmir": [5, 5, 5, 5, 5, 5, 5],
    "Lebanon": [5, 6, 7, 7, 7, 7, 7],
    "Libya": [5, 5, 5, 5, 5, 5, 5],
    "Venezuela": [5, 5, 5, 5, 5, 5, 5],
    "Nagorno-Karabakh / South Caucasus": [6, 6, 5, 5, 5, 5, 5],
    "US-Canada Trade Tensions": [3, 4, 5, 5, 6, 6, 6],
    "Iraq": [6, 6, 6, 6, 6, 6, 6],
    "Pakistan": [5, 6, 6, 6, 6, 6, 6],
    "Afghanistan": [7, 7, 7, 7, 7, 7, 7],
    "Mozambique": [5, 5, 6, 6, 6, 6, 6],
    "Red Sea / Gulf of Aden": [5, 6, 7, 8, 8, 8, 8],
    "US-China Trade & Tech War": [5, 5, 5, 6, 6, 6, 6],
    "West Bank": [6, 7, 7, 8, 8, 8, 8],
    "Cameroon": [5, 5, 5, 5, 5, 5, 5],
    "Colombia": [5, 5, 5, 5, 5, 5, 5],
    "Mexico": [6, 6, 7, 7, 7, 7, 7],
    "Mexico - Sinaloa": [6, 7, 7, 8, 8, 8, 8],
    "Mexico - Chiapas": [5, 5, 5, 6, 6, 6, 6],
    "US-Mexico Border": [5, 5, 6, 6, 6, 6, 6],
    "Northern Ireland": [2, 2, 2, 2, 2, 2, 2],
    "Cyprus": [2, 2, 2, 2, 2, 2, 2],
    "Bosnia & Herzegovina": [3, 3, 3, 3, 3, 3, 3],
    "Falkland Islands": [1, 1, 1, 1, 1, 1, 1],
    "Kosovo - Serbia": [3, 3, 4, 4, 4, 4, 4],
    "Guyana - Venezuela Border": [4, 4, 3, 3, 3, 3, 3],
    "India - China Border": [5, 5, 4, 4, 4, 4, 4],
    "Transnistria": [3, 3, 3, 3, 3, 3, 3],
    "Western Sahara": [3, 3, 3, 3, 3, 3, 3],
    "Ecuador": [3, 3, 4, 4, 4, 4, 4],
    "Georgia": [3, 3, 4, 4, 4, 4, 4],
    "Greenland / Arctic": [1, 1, 2, 2, 2, 2, 2],
    "Philippines - Insurgency": [4, 4, 4, 4, 4, 4, 4],
    "Central African Republic": [6, 6, 6, 6, 6, 6, 6],
    "Nigeria": [6, 7, 7, 7, 7, 7, 7],
    "Peru": [3, 3, 3, 3, 3, 3, 3],
    "Thailand - Deep South": [3, 3, 3, 3, 3, 3, 3],
    "EU-Russia Baltic Tensions": [3, 3, 4, 4, 4, 4, 4],
    "US-Iran / Persian Gulf": [5, 6, 7, 7, 8, 8, 8],
    "Papua New Guinea - Tribal": [3, 3, 3, 3, 3, 3, 3],
    "Chad": [4, 4, 5, 5, 5, 5, 5],
    "Honduras": [4, 4, 4, 4, 4, 4, 4],
};

// Determine trend: escalating, de-escalating, or stable
function getTrend(name) {
    const data = ESCALATION_DATA[name];
    if (!data) return { trend: 'stable', data: [5,5,5,5,5,5,5] };
    const first = data.slice(0, 3).reduce((a, b) => a + b, 0) / 3;
    const last = data.slice(-3).reduce((a, b) => a + b, 0) / 3;
    const diff = last - first;
    if (diff >= 1) return { trend: 'escalating', data };
    if (diff <= -1) return { trend: 'de-escalating', data };
    return { trend: 'stable', data };
}

// Top 20 military spending (2025 estimates, $ billions)
const MILITARY_SPENDING = [
    { country: "United States", spending: 886, color: "#ff4444" },
    { country: "China", spending: 296, color: "#ff6633" },
    { country: "Russia", spending: 109, color: "#ff2222" },
    { country: "India", spending: 83, color: "#ffaa00" },
    { country: "Saudi Arabia", spending: 78, color: "#44aa44" },
    { country: "United Kingdom", spending: 75, color: "#4488cc" },
    { country: "Germany", spending: 68, color: "#aa44cc" },
    { country: "France", spending: 64, color: "#4488cc" },
    { country: "Japan", spending: 55, color: "#ff88aa" },
    { country: "South Korea", spending: 49, color: "#66aaff" },
    { country: "Australia", spending: 38, color: "#44ccaa" },
    { country: "Italy", spending: 35, color: "#aacc44" },
    { country: "Turkey", spending: 33, color: "#cc6644" },
    { country: "Israel", spending: 28, color: "#ff6633" },
    { country: "Poland", spending: 27, color: "#8888aa" },
    { country: "Canada", spending: 27, color: "#ff4444" },
    { country: "Brazil", spending: 23, color: "#44aa44" },
    { country: "Spain", spending: 22, color: "#ffaa00" },
    { country: "Taiwan", spending: 19, color: "#66aaff" },
    { country: "Ukraine", spending: 18, color: "#ff2222" },
];

// Estimated casualties for active conflicts (approximate cumulative)
const CASUALTY_DATA = [
    { name: "Gaza / Israel", military: 15000, civilian: 45000, displaced: 2300000 },
    { name: "Ukraine", military: 200000, civilian: 30000, displaced: 6500000 },
    { name: "Sudan", military: 20000, civilian: 15000, displaced: 8000000 },
    { name: "Myanmar", military: 30000, civilian: 20000, displaced: 2000000 },
    { name: "Yemen", military: 25000, civilian: 150000, displaced: 4500000 },
    { name: "Syria", military: 250000, civilian: 300000, displaced: 12000000 },
    { name: "Somalia", military: 10000, civilian: 20000, displaced: 3500000 },
    { name: "Democratic Republic of Congo", military: 15000, civilian: 10000, displaced: 6800000 },
    { name: "Sahel Region", military: 8000, civilian: 12000, displaced: 4200000 },
    { name: "Ethiopia / Eritrea", military: 100000, civilian: 200000, displaced: 5000000 },
    { name: "Haiti", military: 500, civilian: 5000, displaced: 580000 },
    { name: "Mexico", military: 2000, civilian: 30000, displaced: 380000 },
    { name: "Nigeria", military: 5000, civilian: 40000, displaced: 3300000 },
    { name: "Afghanistan", military: 70000, civilian: 50000, displaced: 6600000 },
    { name: "Iraq", military: 30000, civilian: 20000, displaced: 1200000 },
];
