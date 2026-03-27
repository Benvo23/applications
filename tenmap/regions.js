// Tension regions data
// Each region has coordinates, tension level (1-10), summary, and search keywords for news
const TENSION_REGIONS = [
    {
        name: "Ukraine",
        lat: 48.5,
        lng: 35.0,
        tension: 9,
        summary: "Ongoing war following Russia's full-scale invasion in February 2022. Heavy fighting continues across eastern and southern fronts with global geopolitical ramifications.",
        keywords: "Ukraine war Russia conflict",
        category: "Active War"
    },
    {
        name: "Gaza / Israel",
        lat: 31.4,
        lng: 34.4,
        tension: 10,
        summary: "Intense military operations in Gaza following the October 2023 attacks. Severe humanitarian crisis with massive displacement and casualties.",
        keywords: "Gaza Israel conflict war",
        category: "Active War"
    },
    {
        name: "Sudan",
        lat: 15.5,
        lng: 32.5,
        tension: 9,
        summary: "Civil war between the Sudanese Armed Forces and the Rapid Support Forces since April 2023. Widespread atrocities and one of the world's worst humanitarian disasters.",
        keywords: "Sudan civil war conflict",
        category: "Active War"
    },
    {
        name: "Myanmar",
        lat: 19.7,
        lng: 96.1,
        tension: 8,
        summary: "Civil war following the 2021 military coup. Resistance forces and ethnic armed organizations fighting the military junta across multiple fronts.",
        keywords: "Myanmar civil war military junta",
        category: "Active War"
    },
    {
        name: "Taiwan Strait",
        lat: 24.0,
        lng: 120.5,
        tension: 7,
        summary: "Escalating tensions between China and Taiwan with increased military activity in the strait. A flashpoint for potential US-China confrontation.",
        keywords: "Taiwan China tension military strait",
        category: "Geopolitical Tension"
    },
    {
        name: "South China Sea",
        lat: 14.5,
        lng: 114.0,
        tension: 6,
        summary: "Territorial disputes involving China, Philippines, Vietnam, and others. Regular confrontations between coast guards and naval vessels.",
        keywords: "South China Sea dispute Philippines",
        category: "Territorial Dispute"
    },
    {
        name: "Korean Peninsula",
        lat: 38.0,
        lng: 127.0,
        tension: 6,
        summary: "Persistent tensions between North and South Korea. Continued missile tests and military provocations raise regional security concerns.",
        keywords: "North Korea South Korea tension missiles",
        category: "Geopolitical Tension"
    },
    {
        name: "Syria",
        lat: 35.0,
        lng: 38.0,
        tension: 7,
        summary: "Ongoing civil conflict with multiple factions. Political transition underway following regime change, with continued instability.",
        keywords: "Syria conflict civil war",
        category: "Active Conflict"
    },
    {
        name: "Yemen",
        lat: 15.5,
        lng: 44.0,
        tension: 7,
        summary: "Houthi attacks on Red Sea shipping and continued internal conflict. Major impact on global trade routes and regional stability.",
        keywords: "Yemen Houthi Red Sea conflict",
        category: "Active Conflict"
    },
    {
        name: "Ethiopia / Eritrea",
        lat: 9.0,
        lng: 38.7,
        tension: 6,
        summary: "Post-Tigray War tensions and ethnic conflicts persist. Fragile peace with ongoing humanitarian challenges across multiple regions.",
        keywords: "Ethiopia conflict Tigray tension",
        category: "Post-Conflict Tension"
    },
    {
        name: "Democratic Republic of Congo",
        lat: -2.5,
        lng: 28.5,
        tension: 8,
        summary: "M23 rebel offensive in eastern DRC with alleged Rwandan support. Massive displacement and humanitarian crisis in the Great Lakes region.",
        keywords: "Congo DRC M23 conflict Rwanda",
        category: "Active Conflict"
    },
    {
        name: "Iran",
        lat: 32.4,
        lng: 53.7,
        tension: 9,
        summary: "Military conflict involving Iran with regional and global dimensions. Strikes, proxy warfare, and direct confrontations escalating across the Middle East.",
        keywords: "Iran war military strikes conflict",
        category: "Active War"
    },
    {
        name: "Somalia",
        lat: 5.1,
        lng: 46.2,
        tension: 7,
        summary: "Al-Shabaab insurgency continues with regular attacks. International military operations ongoing alongside state-building efforts.",
        keywords: "Somalia Al-Shabaab conflict",
        category: "Insurgency"
    },
    {
        name: "Sahel Region",
        lat: 14.0,
        lng: 1.0,
        tension: 8,
        summary: "Military coups, jihadist insurgencies, and withdrawal of Western forces across Mali, Burkina Faso, and Niger. Growing instability.",
        keywords: "Sahel Mali Burkina Faso Niger conflict",
        category: "Insurgency"
    },
    {
        name: "Haiti",
        lat: 18.9,
        lng: -72.3,
        tension: 7,
        summary: "Gang violence has effectively taken over large parts of Port-au-Prince. State collapse with severe humanitarian crisis.",
        keywords: "Haiti gang violence crisis",
        category: "State Collapse"
    },
    {
        name: "Kashmir",
        lat: 34.1,
        lng: 74.8,
        tension: 5,
        summary: "Long-standing territorial dispute between India and Pakistan with periodic military standoffs and internal unrest.",
        keywords: "Kashmir India Pakistan tension",
        category: "Territorial Dispute"
    },
    {
        name: "Lebanon",
        lat: 33.9,
        lng: 35.5,
        tension: 7,
        summary: "Conflict escalation involving Hezbollah and Israel. Economic collapse and political instability continue to worsen.",
        keywords: "Lebanon Hezbollah Israel conflict",
        category: "Active Conflict"
    },
    {
        name: "Libya",
        lat: 26.3,
        lng: 17.2,
        tension: 5,
        summary: "Divided government between east and west with competing militias. Oil-rich nation struggling with post-Gaddafi instability.",
        keywords: "Libya conflict political crisis",
        category: "Political Instability"
    },
    {
        name: "Venezuela",
        lat: 6.4,
        lng: -66.6,
        tension: 5,
        summary: "Political crisis with disputed elections and authoritarian governance. Mass migration and economic collapse affecting the region.",
        keywords: "Venezuela political crisis Maduro",
        category: "Political Crisis"
    },
    {
        name: "Nagorno-Karabakh / South Caucasus",
        lat: 40.0,
        lng: 46.8,
        tension: 5,
        summary: "Post-conflict tensions following Azerbaijan's recapture of Nagorno-Karabakh. Ethnic Armenian population displaced, Armenia-Azerbaijan border disputes persist.",
        keywords: "Armenia Azerbaijan Karabakh tension",
        category: "Post-Conflict Tension"
    },
    {
        name: "US-Canada Trade Tensions",
        lat: 50.0,
        lng: -100.0,
        tension: 6,
        summary: "Escalating trade war between the United States and Canada. Tariffs, retaliatory measures, and diplomatic friction straining the historically close alliance.",
        keywords: "US Canada trade war tariffs tensions",
        category: "Trade War"
    },
    {
        name: "Iraq",
        lat: 33.3,
        lng: 44.4,
        tension: 6,
        summary: "Ongoing instability with militia activity, US military presence, and spillover from regional conflicts. Iranian-backed groups and ISIS remnants remain active threats.",
        keywords: "Iraq conflict militia instability",
        category: "Active Conflict"
    },
    {
        name: "Pakistan",
        lat: 30.4,
        lng: 69.3,
        tension: 6,
        summary: "Internal security threats from militant groups, political instability, and cross-border tensions with Afghanistan and India.",
        keywords: "Pakistan terrorism political crisis military",
        category: "Political Instability"
    },
    {
        name: "Afghanistan",
        lat: 33.9,
        lng: 67.7,
        tension: 7,
        summary: "Taliban governance with ongoing humanitarian crisis. ISIS-K attacks, economic collapse, and severe restrictions on human rights.",
        keywords: "Afghanistan Taliban humanitarian crisis",
        category: "Humanitarian Crisis"
    },
    {
        name: "Mozambique",
        lat: -13.2,
        lng: 40.2,
        tension: 6,
        summary: "Islamist insurgency in Cabo Delgado province and post-election political violence. Displacement and instability in the northern region.",
        keywords: "Mozambique insurgency conflict Cabo Delgado",
        category: "Insurgency"
    },
    {
        name: "Red Sea / Gulf of Aden",
        lat: 13.0,
        lng: 43.0,
        tension: 8,
        summary: "Houthi attacks on international shipping disrupting global trade. US and allied naval operations to protect shipping lanes.",
        keywords: "Red Sea Houthi shipping attacks",
        category: "Maritime Conflict"
    },
    {
        name: "US-China Trade & Tech War",
        lat: 38.0,
        lng: -170.0,
        tension: 6,
        summary: "Escalating economic rivalry between the US and China. Semiconductor export controls, tariffs, and technology decoupling reshaping global trade.",
        keywords: "US China trade war tariffs technology",
        category: "Trade War"
    },
    {
        name: "West Bank",
        lat: 31.9,
        lng: 35.2,
        tension: 8,
        summary: "Intensified Israeli military operations, settler violence, and Palestinian militant activity. Escalating violence and humanitarian concerns.",
        keywords: "West Bank Israel Palestine violence",
        category: "Active Conflict"
    },
    {
        name: "Cameroon",
        lat: 5.9,
        lng: 10.1,
        tension: 5,
        summary: "Anglophone separatist crisis in western regions and Boko Haram activity in the north. Ongoing displacement and violence.",
        keywords: "Cameroon Anglophone crisis conflict",
        category: "Insurgency"
    },
    {
        name: "Colombia",
        lat: 4.6,
        lng: -74.1,
        tension: 5,
        summary: "Fragile peace process with FARC dissidents and ELN guerrillas still active. Drug trafficking fuels ongoing violence in rural areas.",
        keywords: "Colombia FARC ELN conflict peace",
        category: "Active Conflict"
    },
    {
        name: "Mexico",
        lat: 23.6,
        lng: -102.5,
        tension: 7,
        summary: "Cartel violence and turf wars across multiple states. Record homicides, kidnappings, and extortion. Military deployments unable to contain powerful drug trafficking organizations.",
        keywords: "Mexico cartel violence drug war conflict",
        category: "Cartel Violence"
    },
    {
        name: "Mexico - Sinaloa",
        lat: 24.8,
        lng: -107.4,
        tension: 8,
        summary: "Intense fighting between Sinaloa Cartel factions following leadership upheaval. Civilians caught in crossfire with blockades, shootouts, and disappearances.",
        keywords: "Sinaloa cartel war Mexico violence",
        category: "Cartel War"
    },
    {
        name: "Mexico - Chiapas",
        lat: 16.7,
        lng: -92.6,
        tension: 6,
        summary: "Cartel expansion into southern Mexico with territorial disputes spilling over from Guatemala. Displacement of indigenous communities and rising violence.",
        keywords: "Chiapas Mexico cartel violence",
        category: "Cartel Violence"
    },
    {
        name: "US-Mexico Border",
        lat: 31.7,
        lng: -106.4,
        tension: 6,
        summary: "Migration crisis, cartel smuggling operations, and fentanyl trafficking. Heightened border security measures and diplomatic tensions between the US and Mexico.",
        keywords: "US Mexico border crisis migration fentanyl",
        category: "Border Crisis"
    },
    // --- Low tension regions ---
    {
        name: "Northern Ireland",
        lat: 54.6,
        lng: -5.9,
        tension: 2,
        summary: "Post-Good Friday Agreement stability largely holds. Occasional dissident republican activity and Brexit-related trade border tensions with minimal violence.",
        keywords: "Northern Ireland tension Brexit",
        category: "Low-Level Tension"
    },
    {
        name: "Cyprus",
        lat: 35.1,
        lng: 33.4,
        tension: 2,
        summary: "Divided island with UN buffer zone between Greek and Turkish Cypriot communities. Frozen conflict with periodic reunification talks but no active hostilities.",
        keywords: "Cyprus division tension reunification",
        category: "Frozen Conflict"
    },
    {
        name: "Bosnia & Herzegovina",
        lat: 43.9,
        lng: 17.7,
        tension: 3,
        summary: "Ethnic tensions and separatist rhetoric from Republika Srpska leadership. Fragile post-war political system under strain but no active violence.",
        keywords: "Bosnia Herzegovina tension Srpska",
        category: "Political Tension"
    },
    {
        name: "Falkland Islands",
        lat: -51.8,
        lng: -59.0,
        tension: 1,
        summary: "Long-standing sovereignty dispute between UK and Argentina. Diplomatic disagreements persist but no military threat. Largely peaceful.",
        keywords: "Falkland Islands UK Argentina dispute",
        category: "Sovereignty Dispute"
    },
    {
        name: "Kosovo - Serbia",
        lat: 42.7,
        lng: 21.0,
        tension: 4,
        summary: "Unresolved status dispute with periodic flare-ups in northern Kosovo. EU-mediated dialogue stalled. Ethnic Serb tensions with Pristina government.",
        keywords: "Kosovo Serbia tension conflict",
        category: "Political Tension"
    },
    {
        name: "Guyana - Venezuela Border",
        lat: 6.8,
        lng: -60.0,
        tension: 3,
        summary: "Venezuela claims the oil-rich Essequibo region of Guyana. Referendum and military posturing raised alarm but international pressure has cooled tensions.",
        keywords: "Guyana Venezuela Essequibo border dispute",
        category: "Territorial Dispute"
    },
    {
        name: "India - China Border",
        lat: 34.5,
        lng: 78.5,
        tension: 4,
        summary: "LAC standoff in Ladakh and Arunachal Pradesh. Troop buildups on both sides with periodic disengagement agreements. No active fighting but persistent military tension.",
        keywords: "India China border Ladakh LAC tension",
        category: "Border Standoff"
    },
    {
        name: "Transnistria",
        lat: 46.8,
        lng: 29.5,
        tension: 3,
        summary: "Breakaway region of Moldova with Russian troop presence. Frozen conflict with renewed concerns due to the war in neighboring Ukraine.",
        keywords: "Transnistria Moldova Russia tension",
        category: "Frozen Conflict"
    },
    {
        name: "Western Sahara",
        lat: 24.2,
        lng: -13.0,
        tension: 3,
        summary: "Disputed territory between Morocco and the Polisario Front. Low-intensity conflict resumed in 2020 after decades of ceasefire. UN peacekeeping mission ongoing.",
        keywords: "Western Sahara Morocco Polisario conflict",
        category: "Territorial Dispute"
    },
    {
        name: "Ecuador",
        lat: -1.8,
        lng: -78.2,
        tension: 4,
        summary: "Surge in gang and cartel violence with state of emergency declarations. Drug trafficking routes have turned the country into a battleground for organized crime.",
        keywords: "Ecuador violence gang cartel crisis",
        category: "Organized Crime"
    },
    {
        name: "Georgia",
        lat: 42.3,
        lng: 43.4,
        tension: 4,
        summary: "Political crisis with mass protests over democratic backsliding. Russian-occupied territories of South Ossetia and Abkhazia remain unresolved.",
        keywords: "Georgia protests political crisis Russia",
        category: "Political Crisis"
    },
    {
        name: "Greenland / Arctic",
        lat: 72.0,
        lng: -40.0,
        tension: 2,
        summary: "US interest in Greenland acquisition and growing Arctic competition between NATO and Russia. Strategic importance rising with climate change opening new routes.",
        keywords: "Greenland Arctic US Denmark tension",
        category: "Geopolitical Tension"
    },
    {
        name: "Philippines - Insurgency",
        lat: 7.5,
        lng: 124.5,
        tension: 4,
        summary: "Communist insurgency and Islamist militant remnants in Mindanao. Government counter-terrorism operations ongoing alongside peace process efforts.",
        keywords: "Philippines Mindanao insurgency conflict",
        category: "Insurgency"
    },
    {
        name: "Central African Republic",
        lat: 6.6,
        lng: 20.9,
        tension: 6,
        summary: "Armed groups control large portions of territory. Wagner/Africa Corps mercenaries backing the government. Ethnic and sectarian violence continues.",
        keywords: "Central African Republic conflict Wagner",
        category: "Active Conflict"
    },
    {
        name: "Nigeria",
        lat: 9.1,
        lng: 7.5,
        tension: 7,
        summary: "Boko Haram and ISWAP insurgency in the northeast, banditry in the northwest, and separatist tensions in the southeast. Widespread kidnappings and violence.",
        keywords: "Nigeria Boko Haram conflict violence",
        category: "Insurgency"
    },
    {
        name: "Peru",
        lat: -9.2,
        lng: -75.0,
        tension: 3,
        summary: "Political instability with frequent presidential crises and protests. Shining Path remnants tied to drug trade in remote highland areas.",
        keywords: "Peru political crisis protests",
        category: "Political Crisis"
    },
    {
        name: "Thailand - Deep South",
        lat: 6.5,
        lng: 101.3,
        tension: 3,
        summary: "Low-level separatist insurgency in southern Malay-Muslim provinces. Bombings and targeted attacks continue despite peace dialogue attempts.",
        keywords: "Thailand south insurgency Pattani",
        category: "Insurgency"
    },
    {
        name: "EU-Russia Baltic Tensions",
        lat: 57.5,
        lng: 24.0,
        tension: 4,
        summary: "NATO buildup in Baltic states in response to Russian aggression. Hybrid warfare concerns including cyberattacks, sabotage of undersea cables, and border provocations.",
        keywords: "Baltic NATO Russia tension military",
        category: "Geopolitical Tension"
    },
    {
        name: "US-Iran / Persian Gulf",
        lat: 27.0,
        lng: 51.5,
        tension: 8,
        summary: "Direct military confrontations between the US and Iran. Strikes on Iranian assets and retaliatory actions raising fears of wider regional war.",
        keywords: "US Iran war strikes Persian Gulf",
        category: "Active Conflict"
    },
    {
        name: "Papua New Guinea - Tribal",
        lat: -6.0,
        lng: 145.8,
        tension: 3,
        summary: "Tribal violence and ethnic clashes in highland provinces. Limited state reach and growing influence of arms trafficking fueling deadly conflicts.",
        keywords: "Papua New Guinea tribal violence conflict",
        category: "Ethnic Violence"
    },
    {
        name: "Chad",
        lat: 12.1,
        lng: 15.0,
        tension: 5,
        summary: "Post-coup military government facing rebel threats and spillover from Sudan and Sahel conflicts. Refugee influx straining resources.",
        keywords: "Chad conflict military instability Sudan",
        category: "Political Instability"
    },
    {
        name: "Honduras",
        lat: 14.1,
        lng: -87.2,
        tension: 4,
        summary: "Gang violence and drug trafficking continue despite state of emergency. Extortion and displacement remain widespread across urban centers.",
        keywords: "Honduras gang violence drug trafficking",
        category: "Organized Crime"
    },
    // --- Lesser-known / underreported conflicts ---
    {
        name: "Manipur, India",
        lat: 24.8,
        lng: 93.9,
        tension: 6,
        summary: "Ethnic violence between Meitei and Kuki communities since May 2023. Villages burned, thousands displaced, internet shutdowns. One of India's most underreported internal conflicts.",
        keywords: "Manipur India ethnic violence Meitei Kuki conflict",
        category: "Ethnic Violence"
    },
    {
        name: "Balochistan",
        lat: 28.5,
        lng: 65.5,
        tension: 5,
        summary: "Decades-long separatist insurgency in Pakistan's largest and poorest province. Baloch Liberation Army attacks on Chinese-funded projects and military targets. Enforced disappearances widespread.",
        keywords: "Balochistan insurgency Pakistan separatist conflict",
        category: "Insurgency"
    },
    {
        name: "Tigray, Ethiopia",
        lat: 13.5,
        lng: 39.5,
        tension: 4,
        summary: "Post-war humanitarian catastrophe despite 2022 ceasefire. Famine conditions, destroyed infrastructure, and Eritrean forces still present. One of the least covered famines in modern history.",
        keywords: "Tigray Ethiopia famine post-war humanitarian",
        category: "Humanitarian Crisis"
    },
    {
        name: "Papua (Indonesia)",
        lat: -4.0,
        lng: 138.5,
        tension: 5,
        summary: "Indigenous Papuan independence movement facing Indonesian military operations. Extrajudicial killings, internet blackouts, and foreign journalist bans. Decades of marginalization.",
        keywords: "Papua Indonesia independence conflict West Papua",
        category: "Independence Movement"
    },
    {
        name: "Cabo Delgado, Mozambique",
        lat: -12.3,
        lng: 40.5,
        tension: 5,
        summary: "ISIS-linked insurgency terrorizing northern Mozambique since 2017. Beheadings, village raids, and child soldiers. Threatens a $20 billion natural gas project.",
        keywords: "Cabo Delgado Mozambique ISIS insurgency gas",
        category: "Insurgency"
    },
    {
        name: "Anglophone Cameroon",
        lat: 5.9,
        lng: 10.1,
        tension: 5,
        summary: "English-speaking regions fighting for independence as 'Ambazonia.' Government crackdowns, school boycotts lasting years, and villages torched. Over 700,000 displaced.",
        keywords: "Cameroon Anglophone Ambazonia separatist conflict",
        category: "Separatist Conflict"
    },
    {
        name: "Lake Chad Basin",
        lat: 13.0,
        lng: 14.0,
        tension: 5,
        summary: "Boko Haram and ISWAP operate across Nigeria, Niger, Chad, and Cameroon borders. The lake has shrunk 90%, fueling resource conflicts. 2.5 million displaced.",
        keywords: "Lake Chad Boko Haram ISWAP Niger conflict",
        category: "Insurgency"
    },
    {
        name: "Karenni State, Myanmar",
        lat: 19.5,
        lng: 97.2,
        tension: 7,
        summary: "Intense fighting between resistance forces and the military junta in Kayah State. Entire towns destroyed by airstrikes. One of Myanmar's most devastated regions, rarely in the news.",
        keywords: "Karenni Kayah Myanmar resistance conflict",
        category: "Active War"
    },
    {
        name: "Senegal - Casamance",
        lat: 12.6,
        lng: -15.5,
        tension: 3,
        summary: "Africa's longest-running low-level separatist conflict since 1982. MFDC rebels in the Casamance region fight sporadically. Landmines remain a persistent danger.",
        keywords: "Casamance Senegal MFDC separatist conflict",
        category: "Separatist Conflict"
    },
    {
        name: "Ogaden, Ethiopia",
        lat: 7.0,
        lng: 44.0,
        tension: 3,
        summary: "Ethnic Somali region of Ethiopia with long history of marginalization and armed resistance. ONLF signed peace in 2018 but sporadic clan violence and military operations continue.",
        keywords: "Ogaden Ethiopia Somali ONLF conflict",
        category: "Ethnic Violence"
    },
    {
        name: "Nagaland, India",
        lat: 26.1,
        lng: 94.6,
        tension: 3,
        summary: "One of Asia's oldest insurgencies — Naga rebels have fought since 1947. Ceasefire since 1997 but final peace deal remains elusive. Factional violence between rebel groups continues.",
        keywords: "Nagaland India insurgency Naga peace",
        category: "Insurgency"
    },
    {
        name: "Rakhine State, Myanmar",
        lat: 20.5,
        lng: 93.0,
        tension: 6,
        summary: "Arakan Army fighting Myanmar military for autonomy. Rohingya population trapped between both sides. Over 1 million Rohingya remain in refugee camps in Bangladesh since 2017 genocide.",
        keywords: "Rakhine Myanmar Arakan Rohingya conflict",
        category: "Active Conflict"
    },
    {
        name: "South Sudan",
        lat: 6.8,
        lng: 31.6,
        tension: 6,
        summary: "World's youngest country (2011) mired in ethnic violence and political rivalry. Subnational conflicts continue despite 2018 peace deal. 2.2 million refugees, massive food insecurity.",
        keywords: "South Sudan conflict ethnic violence famine",
        category: "Active Conflict"
    },
    {
        name: "Mindanao, Philippines (BIFF)",
        lat: 6.8,
        lng: 124.9,
        tension: 4,
        summary: "Bangsamoro Islamic Freedom Fighters reject the 2014 peace deal and continue attacks. IED bombings and extortion in Maguindanao. Overshadowed by the broader Bangsamoro peace process.",
        keywords: "Mindanao BIFF Philippines Bangsamoro conflict",
        category: "Insurgency"
    },
    {
        name: "Mozambique - Post-Election",
        lat: -25.9,
        lng: 32.6,
        tension: 5,
        summary: "Violent protests following disputed 2024 elections. Security forces killed hundreds of demonstrators. Political crisis deepening with opposition rejecting results.",
        keywords: "Mozambique election protest violence crisis",
        category: "Political Crisis"
    },
    {
        name: "North Kivu, DRC",
        lat: -1.0,
        lng: 29.0,
        tension: 8,
        summary: "M23 rebels backed by Rwanda have seized major towns. UN peacekeepers withdrawing. Goma surrounded. One of the world's worst humanitarian crises with 6 million displaced — barely covered internationally.",
        keywords: "North Kivu DRC M23 Goma Rwanda conflict",
        category: "Active War"
    },
    {
        name: "Burkina Faso",
        lat: 12.4,
        lng: -1.5,
        tension: 7,
        summary: "Military junta fighting jihadist groups controlling nearly half the country. Massacres of civilians, mass displacement, and media blackouts. One of the fastest-deteriorating crises in the world.",
        keywords: "Burkina Faso jihadist military crisis conflict",
        category: "Active Conflict"
    },
    {
        name: "Mali",
        lat: 17.6,
        lng: -4.0,
        tension: 7,
        summary: "Tuareg separatists, jihadist groups, and the military junta in a three-way conflict. Wagner mercenaries deployed. France expelled. Northern regions largely ungoverned.",
        keywords: "Mali conflict Tuareg jihadist Wagner military",
        category: "Active Conflict"
    },
    {
        name: "Zamfara & Katsina, Nigeria",
        lat: 12.2,
        lng: 6.5,
        tension: 6,
        summary: "Banditry crisis in northwest Nigeria. Armed groups on motorbikes raid villages, kidnap hundreds at a time, and impose taxes. Over 80,000 killed since 2011. Almost no international coverage.",
        keywords: "Nigeria banditry Zamfara Katsina kidnapping",
        category: "Banditry"
    },
    {
        name: "Darfur (Ongoing)",
        lat: 13.8,
        lng: 25.3,
        tension: 8,
        summary: "RSF forces committing ethnic cleansing in Darfur during the Sudan civil war. El Geneina massacre killed thousands. Echoes of the 2003 genocide. Aid agencies unable to access the region.",
        keywords: "Darfur Sudan RSF genocide ethnic cleansing",
        category: "Genocide"
    },
    {
        name: "Chin State, Myanmar",
        lat: 21.5,
        lng: 93.5,
        tension: 5,
        summary: "Remote mountainous region where resistance fighters have taken territory from the junta. Entire towns destroyed. Residents fled to India but face pushback at the border.",
        keywords: "Chin State Myanmar resistance junta conflict",
        category: "Active Conflict"
    },
    {
        name: "Oromo-Amhara, Ethiopia",
        lat: 9.5,
        lng: 37.5,
        tension: 5,
        summary: "Ethnic tensions between Oromo and Amhara communities escalating into armed clashes. OLA (Oromo Liberation Army) attacks and government military operations. Overshadowed by the Tigray war.",
        keywords: "Ethiopia Oromo Amhara OLA ethnic conflict",
        category: "Ethnic Violence"
    },
    {
        name: "Ituri Province, DRC",
        lat: 1.5,
        lng: 30.0,
        tension: 6,
        summary: "CODECO militia carrying out ethnic massacres against Hema communities in gold-rich Ituri. Hundreds killed in attacks on displacement camps. One of the DRC's forgotten crises.",
        keywords: "Ituri DRC CODECO militia gold ethnic conflict",
        category: "Ethnic Violence"
    },
    {
        name: "Abyei, Sudan/South Sudan",
        lat: 9.6,
        lng: 28.4,
        tension: 4,
        summary: "Disputed oil-rich region claimed by both Sudan and South Sudan. Seasonal clashes between Dinka Ngok and Misseriya nomads. UN peacekeepers maintain an uneasy calm.",
        keywords: "Abyei Sudan South Sudan disputed territory",
        category: "Territorial Dispute"
    },
    {
        name: "Tindouf / Western Sahara Camps",
        lat: 27.7,
        lng: -8.1,
        tension: 2,
        summary: "Over 100,000 Sahrawi refugees have lived in Algerian desert camps since 1975. The world's most forgotten refugee crisis. An entire generation born in exile waiting for a homeland.",
        keywords: "Tindouf Sahrawi refugees Western Sahara Algeria",
        category: "Refugee Crisis"
    }
];
