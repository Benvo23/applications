/**
 * PHOTO DATA — Vo Aviation Gallery
 * LAX Spotting Session — April 6, 2026
 */

const PHOTOS = [
    // === Kaiser Air Boeing 737-800 (DSC03634-03643) ===
    { id: 1, src: "images/DSC03634.JPG", aircraft: "Boeing 737-800", airline: "Kaiser Air", registration: "N733KA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 2, src: "images/DSC03635.JPG", aircraft: "Boeing 737-800", airline: "Kaiser Air", registration: "N733KA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 3, src: "images/DSC03636.JPG", aircraft: "Boeing 737-800", airline: "Kaiser Air", registration: "N733KA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 4, src: "images/DSC03637.JPG", aircraft: "Boeing 737-800", airline: "Kaiser Air", registration: "N733KA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 5, src: "images/DSC03638.JPG", aircraft: "Boeing 737-800", airline: "Kaiser Air", registration: "N733KA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 6, src: "images/DSC03639.JPG", aircraft: "Boeing 737-800", airline: "Kaiser Air", registration: "N733KA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 7, src: "images/DSC03640.JPG", aircraft: "Boeing 737-800", airline: "Kaiser Air", registration: "N733KA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 8, src: "images/DSC03641.JPG", aircraft: "Boeing 737-800", airline: "Kaiser Air", registration: "N733KA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 9, src: "images/DSC03642.JPG", aircraft: "Boeing 737-800", airline: "Kaiser Air", registration: "N733KA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 10, src: "images/DSC03643.JPG", aircraft: "Boeing 737-800", airline: "Kaiser Air", registration: "N733KA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === American Airlines (America West Heritage Livery) Airbus A321 (DSC03644-03654) ===
    { id: 11, src: "images/DSC03644.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },
    { id: 12, src: "images/DSC03645.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },
    { id: 13, src: "images/DSC03646.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },
    { id: 14, src: "images/DSC03647.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },
    { id: 15, src: "images/DSC03648.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },
    { id: 16, src: "images/DSC03649.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },
    { id: 17, src: "images/DSC03650.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },
    { id: 18, src: "images/DSC03651.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },
    { id: 19, src: "images/DSC03652.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },
    { id: 20, src: "images/DSC03653.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },
    { id: 21, src: "images/DSC03654.JPG", aircraft: "Airbus A321", airline: "American Airlines (America West Heritage)", registration: "N580UW", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "America West Heritage livery" },

    // === Delta Connection Embraer E175 (DSC03655-03656) ===
    { id: 22, src: "images/DSC03655.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 23, src: "images/DSC03656.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Delta Connection Embraer E175 (DSC03657-03665) ===
    { id: 24, src: "images/DSC03657.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 25, src: "images/DSC03658.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 26, src: "images/DSC03659.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 27, src: "images/DSC03660.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 28, src: "images/DSC03661.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 29, src: "images/DSC03662.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 30, src: "images/DSC03663.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 31, src: "images/DSC03664.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 32, src: "images/DSC03665.JPG", aircraft: "Embraer E175", airline: "Delta Connection", registration: "N316SY", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Southwest Airlines Boeing 737-800 (DSC03666-03674) ===
    { id: 33, src: "images/DSC03666.JPG", aircraft: "Boeing 737 MAX 8", airline: "Southwest Airlines", registration: "N8817L", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 34, src: "images/DSC03667.JPG", aircraft: "Boeing 737 MAX 8", airline: "Southwest Airlines", registration: "N8817L", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 35, src: "images/DSC03668.JPG", aircraft: "Boeing 737 MAX 8", airline: "Southwest Airlines", registration: "N8817L", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 36, src: "images/DSC03669.JPG", aircraft: "Boeing 737 MAX 8", airline: "Southwest Airlines", registration: "N8817L", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 37, src: "images/DSC03670.JPG", aircraft: "Boeing 737 MAX 8", airline: "Southwest Airlines", registration: "N8817L", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 38, src: "images/DSC03671.JPG", aircraft: "Boeing 737 MAX 8", airline: "Southwest Airlines", registration: "N8817L", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 39, src: "images/DSC03672.JPG", aircraft: "Boeing 737 MAX 8", airline: "Southwest Airlines", registration: "N8817L", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 40, src: "images/DSC03673.JPG", aircraft: "Boeing 737 MAX 8", airline: "Southwest Airlines", registration: "N8817L", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 41, src: "images/DSC03674.JPG", aircraft: "Boeing 737 MAX 8", airline: "Southwest Airlines", registration: "N8817L", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Delta Air Lines Boeing 737-800 (DSC03675-03686) ===
    { id: 42, src: "images/DSC03675.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 43, src: "images/DSC03676.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 44, src: "images/DSC03677.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 45, src: "images/DSC03678.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 46, src: "images/DSC03679.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 47, src: "images/DSC03680.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 48, src: "images/DSC03681.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 49, src: "images/DSC03682.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 50, src: "images/DSC03683.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 51, src: "images/DSC03684.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 52, src: "images/DSC03685.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 53, src: "images/DSC03686.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "N377DA", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === American Eagle Bombardier CRJ-700 (DSC03687-03696) ===
    { id: 54, src: "images/DSC03687.JPG", aircraft: "Bombardier CRJ-700", airline: "American Eagle", registration: "N774SK", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 55, src: "images/DSC03688.JPG", aircraft: "Bombardier CRJ-700", airline: "American Eagle", registration: "N774SK", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 56, src: "images/DSC03689.JPG", aircraft: "Bombardier CRJ-700", airline: "American Eagle", registration: "N774SK", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 57, src: "images/DSC03690.JPG", aircraft: "Bombardier CRJ-700", airline: "American Eagle", registration: "N774SK", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 58, src: "images/DSC03691.JPG", aircraft: "Bombardier CRJ-700", airline: "American Eagle", registration: "N774SK", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 59, src: "images/DSC03692.JPG", aircraft: "Bombardier CRJ-700", airline: "American Eagle", registration: "N774SK", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 60, src: "images/DSC03693.JPG", aircraft: "Bombardier CRJ-700", airline: "American Eagle", registration: "N774SK", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 61, src: "images/DSC03694.JPG", aircraft: "Bombardier CRJ-700", airline: "American Eagle", registration: "N774SK", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 62, src: "images/DSC03695.JPG", aircraft: "Bombardier CRJ-700", airline: "American Eagle", registration: "N774SK", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 63, src: "images/DSC03696.JPG", aircraft: "Bombardier CRJ-700", airline: "American Eagle", registration: "N774SK", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Alaska Airlines Boeing 737-900ER — oneworld Livery (DSC03697-03708) ===
    { id: 64, src: "images/DSC03697.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 65, src: "images/DSC03698.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 66, src: "images/DSC03699.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 67, src: "images/DSC03700.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 68, src: "images/DSC03701.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 69, src: "images/DSC03702.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 70, src: "images/DSC03703.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 71, src: "images/DSC03704.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 72, src: "images/DSC03705.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 73, src: "images/DSC03706.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 74, src: "images/DSC03707.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 75, src: "images/DSC03708.JPG", aircraft: "Boeing 737-900ER", airline: "Alaska Airlines (One World Livery)", registration: "N486AS", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Singapore Airlines Boeing 777-300ER — Star Alliance Livery (DSC03709-03719) ===
    { id: 76, src: "images/DSC03709.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 77, src: "images/DSC03710.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 78, src: "images/DSC03711.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 79, src: "images/DSC03712.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 80, src: "images/DSC03713.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 81, src: "images/DSC03714.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 82, src: "images/DSC03715.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 83, src: "images/DSC03716.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 84, src: "images/DSC03717.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 85, src: "images/DSC03718.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 86, src: "images/DSC03719.JPG", aircraft: "Boeing 777-300ER", airline: "Singapore Airlines (Star Alliance Livery)", registration: "9V-SWJ", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === JetBlue Airways Airbus A321 (DSC03720-03725) ===
    { id: 87, src: "images/DSC03720.JPG", aircraft: "Airbus A321", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 88, src: "images/DSC03721.JPG", aircraft: "Airbus A321", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 89, src: "images/DSC03722.JPG", aircraft: "Airbus A321", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 90, src: "images/DSC03723.JPG", aircraft: "Airbus A321", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 91, src: "images/DSC03724.JPG", aircraft: "Airbus A321", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 92, src: "images/DSC03725.JPG", aircraft: "Airbus A321", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === JetBlue Airways Airbus A321neo (DSC03726-03730) ===
    { id: 93, src: "images/DSC03726.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 94, src: "images/DSC03727.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 95, src: "images/DSC03728.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 96, src: "images/DSC03729.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 97, src: "images/DSC03730.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Korean Air Boeing 747-8 (DSC03731-03735) ===
    { id: 98, src: "images/DSC03731.JPG", aircraft: "Boeing 747-8", airline: "Korean Air", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 99, src: "images/DSC03732.JPG", aircraft: "Boeing 747-8", airline: "Korean Air", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 100, src: "images/DSC03733.JPG", aircraft: "Boeing 747-8", airline: "Korean Air", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 101, src: "images/DSC03734.JPG", aircraft: "Boeing 747-8", airline: "Korean Air", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 102, src: "images/DSC03735.JPG", aircraft: "Boeing 747-8", airline: "Korean Air", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Porter Airlines Embraer E195-E2 — distant (DSC03736) ===
    { id: 103, src: "images/DSC03736.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Porter Airlines Embraer E195-E2 (DSC03737-03746) ===
    { id: 104, src: "images/DSC03737.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 105, src: "images/DSC03738.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 106, src: "images/DSC03739.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 107, src: "images/DSC03740.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 108, src: "images/DSC03741.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 109, src: "images/DSC03742.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 110, src: "images/DSC03743.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 111, src: "images/DSC03744.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 112, src: "images/DSC03745.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 113, src: "images/DSC03746.JPG", aircraft: "Embraer E195-E2", airline: "Porter Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Delta Air Lines Boeing 737-900ER (DSC03747-03752) ===
    { id: 114, src: "images/DSC03747.JPG", aircraft: "Boeing 737-900ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 115, src: "images/DSC03748.JPG", aircraft: "Boeing 737-900ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 116, src: "images/DSC03749.JPG", aircraft: "Boeing 737-900ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 117, src: "images/DSC03750.JPG", aircraft: "Boeing 737-900ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 118, src: "images/DSC03751.JPG", aircraft: "Boeing 737-900ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 119, src: "images/DSC03752.JPG", aircraft: "Boeing 737-900ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Delta Air Lines Boeing 737-800 (DSC03753-03756) ===
    { id: 120, src: "images/DSC03753.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 121, src: "images/DSC03754.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 122, src: "images/DSC03755.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 123, src: "images/DSC03756.JPG", aircraft: "Boeing 737-800", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Delta Air Lines Boeing 767-300ER (DSC03757-03764) ===
    { id: 124, src: "images/DSC03757.JPG", aircraft: "Boeing 767-300ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 125, src: "images/DSC03758.JPG", aircraft: "Boeing 767-300ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 126, src: "images/DSC03759.JPG", aircraft: "Boeing 767-300ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 127, src: "images/DSC03760.JPG", aircraft: "Boeing 767-300ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 128, src: "images/DSC03761.JPG", aircraft: "Boeing 767-300ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 129, src: "images/DSC03762.JPG", aircraft: "Boeing 767-300ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 130, src: "images/DSC03763.JPG", aircraft: "Boeing 767-300ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 131, src: "images/DSC03764.JPG", aircraft: "Boeing 767-300ER", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Alaska Airlines Airbus A321neo (DSC03765) ===
    { id: 132, src: "images/DSC03765.JPG", aircraft: "Airbus A321neo", airline: "Alaska Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === JetBlue Airways Airbus A321neo (DSC03766-03776) ===
    { id: 133, src: "images/DSC03766.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 134, src: "images/DSC03767.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 135, src: "images/DSC03768.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 136, src: "images/DSC03769.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 137, src: "images/DSC03770.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 138, src: "images/DSC03771.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 139, src: "images/DSC03772.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 140, src: "images/DSC03773.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 141, src: "images/DSC03774.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 142, src: "images/DSC03775.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 143, src: "images/DSC03776.JPG", aircraft: "Airbus A321neo", airline: "JetBlue Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Private Dassault Falcon 900 (DSC03777-03786) ===
    { id: 144, src: "images/DSC03777.JPG", aircraft: "Dassault Falcon 900", airline: "Private", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "general", description: "" },
    { id: 145, src: "images/DSC03778.JPG", aircraft: "Dassault Falcon 900", airline: "Private", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "general", description: "" },
    { id: 146, src: "images/DSC03779.JPG", aircraft: "Dassault Falcon 900", airline: "Private", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "general", description: "" },
    { id: 147, src: "images/DSC03780.JPG", aircraft: "Dassault Falcon 900", airline: "Private", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "general", description: "" },
    { id: 148, src: "images/DSC03781.JPG", aircraft: "Dassault Falcon 900", airline: "Private", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "general", description: "" },
    { id: 149, src: "images/DSC03782.JPG", aircraft: "Dassault Falcon 900", airline: "Private", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "general", description: "" },
    { id: 150, src: "images/DSC03783.JPG", aircraft: "Dassault Falcon 900", airline: "Private", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "general", description: "" },
    { id: 151, src: "images/DSC03784.JPG", aircraft: "Dassault Falcon 900", airline: "Private", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "general", description: "" },
    { id: 152, src: "images/DSC03785.JPG", aircraft: "Dassault Falcon 900", airline: "Private", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "general", description: "" },
    { id: 153, src: "images/DSC03786.JPG", aircraft: "Dassault Falcon 900", airline: "Private", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "general", description: "" },

    // === Lufthansa Boeing 747-8 (DSC03787-03796) ===
    { id: 154, src: "images/DSC03787.JPG", aircraft: "Boeing 747-8", airline: "Lufthansa", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 155, src: "images/DSC03788.JPG", aircraft: "Boeing 747-8", airline: "Lufthansa", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 156, src: "images/DSC03789.JPG", aircraft: "Boeing 747-8", airline: "Lufthansa", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 157, src: "images/DSC03790.JPG", aircraft: "Boeing 747-8", airline: "Lufthansa", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 158, src: "images/DSC03791.JPG", aircraft: "Boeing 747-8", airline: "Lufthansa", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 159, src: "images/DSC03792.JPG", aircraft: "Boeing 747-8", airline: "Lufthansa", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 160, src: "images/DSC03793.JPG", aircraft: "Boeing 747-8", airline: "Lufthansa", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 161, src: "images/DSC03794.JPG", aircraft: "Boeing 747-8", airline: "Lufthansa", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 162, src: "images/DSC03795.JPG", aircraft: "Boeing 747-8", airline: "Lufthansa", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 163, src: "images/DSC03796.JPG", aircraft: "Boeing 747-8", airline: "Lufthansa", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Delta Air Lines Airbus A319 (DSC03797-03808) ===
    { id: 164, src: "images/DSC03797.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 165, src: "images/DSC03798.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 166, src: "images/DSC03799.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 167, src: "images/DSC03800.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 168, src: "images/DSC03801.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 169, src: "images/DSC03802.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 170, src: "images/DSC03803.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 171, src: "images/DSC03804.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 172, src: "images/DSC03805.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 173, src: "images/DSC03806.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 174, src: "images/DSC03807.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 175, src: "images/DSC03808.JPG", aircraft: "Airbus A319", airline: "Delta Air Lines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Southwest Airlines Boeing 737-700 (DSC03809-03818) ===
    { id: 176, src: "images/DSC03809.JPG", aircraft: "Boeing 737-700", airline: "Southwest Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 177, src: "images/DSC03810.JPG", aircraft: "Boeing 737-700", airline: "Southwest Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 178, src: "images/DSC03811.JPG", aircraft: "Boeing 737-700", airline: "Southwest Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 179, src: "images/DSC03812.JPG", aircraft: "Boeing 737-700", airline: "Southwest Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 180, src: "images/DSC03813.JPG", aircraft: "Boeing 737-700", airline: "Southwest Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 181, src: "images/DSC03814.JPG", aircraft: "Boeing 737-700", airline: "Southwest Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 182, src: "images/DSC03815.JPG", aircraft: "Boeing 737-700", airline: "Southwest Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 183, src: "images/DSC03816.JPG", aircraft: "Boeing 737-700", airline: "Southwest Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 184, src: "images/DSC03817.JPG", aircraft: "Boeing 737-700", airline: "Southwest Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 185, src: "images/DSC03818.JPG", aircraft: "Boeing 737-700", airline: "Southwest Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === United Airlines Boeing 737-800 (DSC03819-03821) ===
    { id: 186, src: "images/DSC03819.JPG", aircraft: "Boeing 737-800", airline: "United Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 187, src: "images/DSC03820.JPG", aircraft: "Boeing 737-800", airline: "United Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 188, src: "images/DSC03821.JPG", aircraft: "Boeing 737-800", airline: "United Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === United Airlines Boeing 737-900ER (DSC03822-03827) ===
    { id: 189, src: "images/DSC03822.JPG", aircraft: "Boeing 737-900ER", airline: "United Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 190, src: "images/DSC03823.JPG", aircraft: "Boeing 737-900ER", airline: "United Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 191, src: "images/DSC03824.JPG", aircraft: "Boeing 737-900ER", airline: "United Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 192, src: "images/DSC03825.JPG", aircraft: "Boeing 737-900ER", airline: "United Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 193, src: "images/DSC03826.JPG", aircraft: "Boeing 737-900ER", airline: "United Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 194, src: "images/DSC03827.JPG", aircraft: "Boeing 737-900ER", airline: "United Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === ITA Airways Airbus A330-900neo (DSC03828-03839) ===
    { id: 195, src: "images/DSC03828.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 196, src: "images/DSC03829.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 197, src: "images/DSC03830.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 198, src: "images/DSC03831.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 199, src: "images/DSC03832.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 200, src: "images/DSC03833.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 201, src: "images/DSC03834.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 202, src: "images/DSC03835.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 203, src: "images/DSC03836.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 204, src: "images/DSC03837.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 205, src: "images/DSC03838.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 206, src: "images/DSC03839.JPG", aircraft: "Airbus A330-900neo", airline: "ITA Airways", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },

    // === Japan Airlines Airbus A350-1000 (DSC03840-03851) ===
    { id: 207, src: "images/DSC03840.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 208, src: "images/DSC03841.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 209, src: "images/DSC03842.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 210, src: "images/DSC03843.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 211, src: "images/DSC03844.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 212, src: "images/DSC03845.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 213, src: "images/DSC03846.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 214, src: "images/DSC03847.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 215, src: "images/DSC03848.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 216, src: "images/DSC03849.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 217, src: "images/DSC03850.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
    { id: 218, src: "images/DSC03851.JPG", aircraft: "Airbus A350-1000", airline: "Japan Airlines", registration: "", airport: "LAX", location: "Los Angeles, CA", date: "2026-04-06", category: "commercial", description: "" },
];
