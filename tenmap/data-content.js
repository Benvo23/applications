// "Why are they fighting?" explainer bullets per conflict
const WHY_FIGHTING = {
    "Ukraine": [
        "Russia invaded in Feb 2022 to prevent Ukraine joining NATO and reassert control over former Soviet territory",
        "Deep historical ties — Russia views Ukraine as culturally inseparable, Ukraine asserts sovereign identity",
        "Control of Crimea (annexed 2014) and the Donbas region with its Russian-speaking population",
        "Energy politics — Ukraine controls gas pipelines to Europe that give it strategic leverage",
        "Broader struggle between Western democracy expansion and Russian sphere of influence"
    ],
    "Gaza / Israel": [
        "Hamas attacked Israel on Oct 7, 2023 killing ~1,200 — Israel launched massive military response in Gaza",
        "Decades of Israeli occupation, blockade of Gaza since 2007, and failed peace processes",
        "Competing claims to the same land — Palestinian statehood vs Israeli security",
        "Religious significance of Jerusalem to Jews, Muslims, and Christians",
        "Regional proxy dynamics — Iran backs Hamas, US backs Israel"
    ],
    "Sudan": [
        "Power struggle between two generals: army chief al-Burhan and RSF commander Hemedti",
        "Both controlled different parts of the military after ousting civilian government in 2021 coup",
        "Disagreement over timeline to integrate RSF into regular army",
        "Ethnic dimensions — RSF draws from Arab militias (former Janjaweed), targeting non-Arab populations",
        "Gold, oil, and fertile land resources fuel the fighting"
    ],
    "Myanmar": [
        "Military staged a coup in Feb 2021, overthrowing elected leader Aung San Suu Kyi",
        "Decades of military rule, brief democratic opening (2015-2021), then reversal",
        "Ethnic minorities (Karen, Kachin, Shan, Chin) have fought for autonomy since independence in 1948",
        "Rohingya genocide in 2017 showed the military's willingness to use extreme violence",
        "New People's Defense Forces joined ethnic armies to fight the junta across the country"
    ],
    "Taiwan Strait": [
        "China claims Taiwan as a breakaway province that must be 'reunified' — by force if necessary",
        "Taiwan has been self-governing since 1949 when the Nationalists fled mainland China",
        "Taiwan is a major democracy and produces 90% of the world's advanced semiconductors",
        "US is legally committed to help Taiwan defend itself under the Taiwan Relations Act",
        "Xi Jinping has called reunification a 'historic mission' — military buildup accelerating"
    ],
    "Yemen": [
        "Houthi rebels (backed by Iran) overthrew the government in 2014, Saudi coalition intervened in 2015",
        "Sectarian divide — Houthis are Zaidi Shia in a majority Sunni country",
        "Saudi Arabia sees Houthis as Iranian proxies on its southern border",
        "Houthis now attack Red Sea shipping in solidarity with Gaza, disrupting global trade",
        "One of the world's worst humanitarian crises — 21 million need aid"
    ],
    "Iran": [
        "Iran pursues nuclear capability while Israel and the US seek to prevent it",
        "Iran funds proxy forces across the Middle East: Hezbollah, Hamas, Houthis, Iraqi militias",
        "1979 Islamic Revolution created deep hostility with the US and Israel",
        "Sanctions have crippled Iran's economy, fueling internal unrest",
        "Direct military strikes between Iran and Israel have escalated to open confrontation"
    ],
    "Syria": [
        "Civil war began in 2011 when Assad brutally cracked down on Arab Spring protests",
        "Fractured into regime (Russian/Iranian-backed), rebels, Kurds, and remnants of ISIS",
        "Assad regime fell in late 2024 after rebel offensive, political transition underway",
        "Turkey, Russia, Iran, US, and Israel all have competing interests and military presence",
        "12 million displaced — the largest refugee crisis of the 21st century"
    ],
    "Democratic Republic of Congo": [
        "M23 rebels backed by Rwanda are seizing territory in eastern DRC",
        "Massive mineral wealth (coltan, cobalt, gold) funds armed groups and attracts foreign interference",
        "Spillover from the 1994 Rwandan genocide — Hutu militias fled into Congo",
        "Weak central government cannot control its vast territory",
        "6+ million displaced — one of the worst humanitarian crises in the world"
    ],
    "Sahel Region": [
        "Jihadist groups (ISGS, JNIM) exploit weak governance and ethnic tensions across Mali, Burkina Faso, Niger",
        "Military coups in all three countries — juntas expelled French forces and turned to Russia/Wagner",
        "Climate change is drying the Sahel, intensifying competition for land and water",
        "Colonial borders split ethnic groups across countries, creating ungovernable frontier zones",
        "Western counter-terrorism strategy failed after 10 years — France withdrew"
    ],
    "Lebanon": [
        "Hezbollah (Iran-backed) operates as a state within a state with its own army",
        "Conflict with Israel escalated dramatically after Oct 7, 2023",
        "Economic collapse since 2019 — currency lost 98% of value, banks froze deposits",
        "Sectarian power-sharing system (Maronite president, Sunni PM, Shia speaker) is paralyzed",
        "Beirut port explosion in 2020 destroyed half the city, no accountability"
    ],
    "Mexico": [
        "Cartels control territory, collect taxes, and run parallel governments in many states",
        "Fentanyl production and trafficking to the US generates billions in revenue",
        "Corruption infiltrates every level of government and security forces",
        "Military deployments haven't reduced violence — over 30,000 homicides per year",
        "US demand for drugs and weapons flowing south fuel the cycle"
    ],
    "US-Canada Trade Tensions": [
        "US imposed sweeping tariffs on Canadian goods under economic nationalism policies",
        "Canada retaliated with counter-tariffs on American products",
        "Dispute over trade balance, dairy markets, lumber, and energy exports",
        "Historically the world's largest bilateral trade relationship — now strained",
        "Diplomatic friction extending beyond trade into immigration and defense policy"
    ],
    "Haiti": [
        "Gangs control 80% of Port-au-Prince after the assassination of President Moïse in 2021",
        "Complete collapse of state institutions — no functioning government, judiciary, or police",
        "Decades of foreign intervention, debt, and natural disasters destroyed the economy",
        "Weapons trafficked from the US arm the gangs",
        "Kenyan-led multinational force deployed but struggling to restore order"
    ],
    "Somalia": [
        "Al-Shabaab controls large rural areas and launches attacks in Mogadishu",
        "Clan-based politics prevent national unity — no functioning central government for decades",
        "Drought and famine cycles displace millions and create recruitment pools for militants",
        "Foreign military operations (US, Turkey, UAE) compete for influence",
        "Piracy off the coast has resurged as Houthi attacks destabilize Red Sea shipping"
    ],
    "Red Sea / Gulf of Aden": [
        "Houthi rebels in Yemen are attacking commercial shipping with missiles and drones",
        "Attacks launched in solidarity with Palestinians in Gaza",
        "Disrupting 12% of global trade — ships rerouting around Africa adding weeks and billions in costs",
        "US and UK conducting airstrikes against Houthi positions",
        "Insurance costs for Red Sea transit have skyrocketed, affecting global supply chains"
    ],
    "West Bank": [
        "Israeli military operations intensified dramatically since Oct 7, 2023",
        "Settler violence against Palestinian communities accelerating with government support",
        "Palestinian Authority losing control — armed groups filling the vacuum",
        "Expansion of Israeli settlements on occupied land violates international law",
        "Two-state solution increasingly seen as dead — no peace process"
    ],
    "Afghanistan": [
        "Taliban ruled 1996-2001, sheltered al-Qaeda which carried out 9/11",
        "US invasion toppled Taliban but 20-year occupation failed to build stable state",
        "Taliban retook power in Aug 2021 as US withdrew — women's rights erased overnight",
        "ISIS-K attacks challenge Taliban authority from within",
        "Economic collapse — 97% of population near poverty line"
    ],
    "Iraq": [
        "US invasion in 2003 toppled Saddam but unleashed sectarian civil war",
        "Iran-backed Shia militias gained enormous power during fight against ISIS",
        "Iraqi government caught between US and Iranian influence",
        "ISIS remnants still carry out attacks in rural areas",
        "Oil wealth concentrated among elites while millions live in poverty"
    ],
    "Pakistan": [
        "Tehrik-i-Taliban Pakistan (TTP) carries out attacks from Afghan border regions",
        "Baloch separatists fight for independence in resource-rich but impoverished Balochistan",
        "Military dominates politics — has ruled directly or indirectly since independence",
        "Nuclear-armed rivalry with India over Kashmir keeps tensions permanent",
        "Political crisis — former PM Imran Khan imprisoned, supporters cracked down on"
    ],
    "Korean Peninsula": [
        "Korea was divided by the US and USSR in 1945 with no Korean input",
        "Korean War (1950-53) ended in armistice, not peace — technically still at war",
        "North Korea pursues nuclear weapons as regime survival guarantee",
        "Kim dynasty maintains totalitarian control through fear and isolation",
        "South Korea and US conduct military drills that North sees as invasion rehearsals"
    ],
    "Ethiopia / Eritrea": [
        "Tigray War (2020-2022) killed hundreds of thousands — ceasefire holds but fragile",
        "Ethnic federalism pits Amhara, Oromo, Tigray, and Somali groups against each other",
        "Eritrean troops committed atrocities in Tigray and remain in disputed areas",
        "PM Abiy Ahmed won Nobel Peace Prize in 2019 then presided over civil war",
        "Famine and humanitarian access remain critical issues"
    ],
    "Kashmir": [
        "Both India and Pakistan claim the entire territory — divided by Line of Control since 1947",
        "India revoked Kashmir's autonomy in 2019, imposing direct rule",
        "Armed insurgency since 1989 with Pakistan-based militant groups crossing the border",
        "Heavy Indian military presence — one of the most militarized zones on Earth",
        "Population caught between militant violence and military crackdowns"
    ],
    "Libya": [
        "2011 NATO intervention toppled Gaddafi but left no functioning state",
        "Rival governments in Tripoli (west) and Benghazi (east) claim legitimacy",
        "Oil wealth funds competing militias — everyone fights for control of oil infrastructure",
        "Foreign powers back different sides — Turkey supports west, Russia/UAE/Egypt support east",
        "Human trafficking and migrant detention camps thrive in the chaos"
    ],
    "Venezuela": [
        "Maduro's authoritarian rule — disputed elections, opposition leaders jailed or exiled",
        "Economic collapse — hyperinflation, 7+ million refugees fled the country",
        "Oil-rich but mismanaged — once Latin America's wealthiest nation",
        "US sanctions aim to pressure regime change but mainly hurt ordinary people",
        "Territorial claim on Guyana's Essequibo region adds regional tension"
    ],
    "Nagorno-Karabakh / South Caucasus": [
        "Ethnic Armenian enclave inside Azerbaijan — fought over since the Soviet collapse",
        "Azerbaijan recaptured the territory in 2023 after 44-day war in 2020",
        "120,000 ethnic Armenians fled — entire population displaced",
        "Russia's peacekeepers failed to prevent Azerbaijan's final offensive",
        "Armenia-Azerbaijan border demarcation disputes continue"
    ],
    "US-China Trade & Tech War": [
        "US sees China's rise as the primary strategic threat of the 21st century",
        "Semiconductor export controls aim to slow China's military AI development",
        "Tariffs on hundreds of billions in goods raise costs for both economies",
        "Technology decoupling — two separate internet, chip, and AI ecosystems emerging",
        "Competition extends to space, undersea cables, and global influence"
    ],
    "US-Iran / Persian Gulf": [
        "Decades of hostility since the 1979 Islamic Revolution and hostage crisis",
        "Iran's nuclear program — Israel and US determined to prevent an Iranian bomb",
        "Proxy warfare across the Middle East escalated into direct strikes in 2024",
        "US military bases surround Iran — Iran responds with asymmetric threats",
        "Oil chokepoint — Strait of Hormuz carries 20% of world's oil supply"
    ],
    "US-Mexico Border": [
        "Migration surge — people fleeing violence and poverty across Latin America",
        "Fentanyl crisis — cartels smuggle synthetic opioids killing 100,000+ Americans yearly",
        "Political flashpoint in US — immigration policy divides the country",
        "Cartel tunnels, drones, and corruption undermine border enforcement",
        "Economic interdependence — $800B+ in annual trade crosses the border"
    ],
    "South China Sea": [
        "China claims virtually the entire sea based on historical 'nine-dash line'",
        "Philippines, Vietnam, Malaysia, and Brunei have overlapping claims",
        "China built artificial islands with military bases on contested reefs",
        "Critical shipping lane — $3 trillion in trade passes through annually",
        "Regular confrontations between Chinese coast guard and Philippine vessels"
    ],
    "Nigeria": [
        "Boko Haram/ISWAP insurgency in the northeast since 2009",
        "Massive banditry crisis in the northwest — kidnappings, cattle raids, mass killings",
        "Biafran separatist tensions resurface in the southeast (IPOB movement)",
        "Resource curse — oil wealth concentrated in the Niger Delta, communities see nothing",
        "Farmer-herder conflicts driven by desertification and population growth"
    ],
    "Colombia": [
        "Decades-long guerrilla war — FARC signed peace in 2016 but dissidents continue fighting",
        "ELN guerrillas rejected peace and remain active across the country",
        "Coca production and cocaine trafficking fund armed groups on all sides",
        "Land inequality — rural communities displaced by armed groups and agribusiness",
        "Peace implementation stalled — ex-combatants being assassinated"
    ],
    "Cameroon": [
        "English-speaking minority (20%) feels marginalized by French-speaking majority government",
        "Protests in 2016 over language rights met with violent crackdown",
        "Armed separatist movement declared 'Republic of Ambazonia' in 2017",
        "Boko Haram also active in northern Cameroon",
        "Schools boycotted for years — 'ghost town' strikes shut down Anglophone regions"
    ],
    "Central African Republic": [
        "Cycle of coups and ethnic violence since independence in 1960",
        "Christian-Muslim sectarian conflict — Anti-Balaka vs Séléka militias",
        "Armed groups control 80% of territory, government only controls the capital",
        "Wagner/Africa Corps mercenaries prop up the government in exchange for mining rights",
        "One of the world's poorest countries despite diamond, gold, and uranium deposits"
    ],
    "Mozambique": [
        "ISIS-linked insurgency in gas-rich Cabo Delgado province since 2017",
        "Post-election violence after disputed 2024 results",
        "Massive inequality — $20 billion gas projects while population lives on $1/day",
        "Government corruption and debt scandal eroded public trust",
        "Regional military forces (Rwanda, SADC) deployed but insurgency persists"
    ],
    "Georgia": [
        "Russia occupies 20% of Georgia — South Ossetia and Abkhazia since 2008 war",
        "Government accused of democratic backsliding and pro-Russian tilt",
        "Massive protests in 2024 over 'foreign agent' law seen as authoritarian",
        "EU membership aspiration drives the reform vs authoritarian divide",
        "Fear that Georgia could be Russia's next target after Ukraine"
    ],
    "Ecuador": [
        "Transformed from one of Latin America's safest countries to one of its most violent",
        "Mexican and Colombian cartels use Ecuador as a cocaine transit point",
        "Prison massacres — gangs control prisons, hundreds killed in riots",
        "State of emergency declared multiple times, military deployed to streets",
        "Poverty and corruption create recruitment pools for criminal organizations"
    ],
    "Kosovo - Serbia": [
        "Kosovo declared independence from Serbia in 2008 — Serbia refuses to recognize it",
        "Ethnic Serb minority in northern Kosovo resists Pristina's authority",
        "NATO peacekeepers still deployed since the 1999 war",
        "Serbia backed by Russia in opposing Kosovo's statehood",
        "EU-mediated dialogue stalled — normalization agreement not implemented"
    ],
    "Bosnia & Herzegovina": [
        "Dayton Accords ended the 1990s war but created a dysfunctional state",
        "Republika Srpska leader Dodik threatens secession, undermines central government",
        "Three ethnic groups (Bosniak, Serb, Croat) share power in a complex system that barely functions",
        "EU membership aspirations blocked by internal dysfunction",
        "War criminals still glorified — genocide denial widespread among Serb nationalists"
    ],
    "Transnistria": [
        "Breakaway region declared independence from Moldova in 1990",
        "Russian troops stationed there since 1992 ceasefire",
        "Ukraine war raised fears Russia could use Transnistria to open a new front",
        "Economically dependent on Russia — smuggling hub",
        "Moldova seeks EU integration but can't resolve the frozen conflict"
    ],
    "Cyprus": [
        "Island divided since Turkey invaded in 1974 after a Greek-backed coup",
        "UN buffer zone separates Greek Cypriot south from Turkish Cypriot north",
        "Turkey is the only country recognizing the northern republic",
        "Reunification talks have repeatedly failed over territory and governance",
        "Discovery of offshore gas deposits adds new dimension to the dispute"
    ],
    "India - China Border": [
        "Poorly defined border (LAC) in the Himalayas — no agreement on where the line is",
        "2020 Galwan Valley clash killed 20 Indian and unknown Chinese soldiers",
        "Both sides building roads, airstrips, and military infrastructure in the mountains",
        "Historical grievance — 1962 war China won decisively, India hasn't forgotten",
        "Two nuclear powers with 3+ billion people between them"
    ],
    "Western Sahara": [
        "Morocco occupied Western Sahara in 1975 after Spain withdrew",
        "Polisario Front (Sahrawi independence movement) fought until 1991 ceasefire",
        "Ceasefire collapsed in 2020 — low-level fighting resumed",
        "US recognized Moroccan sovereignty in 2020 in exchange for Israel normalization",
        "100,000+ Sahrawi refugees have lived in Algerian desert camps since 1975"
    ],
    "Greenland / Arctic": [
        "US expressed interest in acquiring Greenland — Denmark rejected it",
        "Melting ice opens new shipping routes and access to oil, gas, and rare minerals",
        "Russia building military bases across the Arctic, NATO responding",
        "China declared itself a 'near-Arctic state' and seeks influence",
        "Indigenous Inuit populations caught between great power competition"
    ],
    "Philippines - Insurgency": [
        "Communist NPA insurgency since 1969 — one of Asia's longest",
        "Islamist groups (Abu Sayyaf, BIFF) operate in Mindanao",
        "2017 Battle of Marawi — ISIS-linked fighters seized the city for 5 months",
        "Bangsamoro peace process gave autonomy but splinter groups reject it",
        "China tensions in South China Sea compound the security challenges"
    ],
    "Peru": [
        "Shining Path remnants tied to cocaine trade in remote VRAEM region",
        "Political instability — 6 presidents in 5 years, impeachments and protests",
        "Indigenous communities marginalized despite constitutional rights",
        "Mining conflicts — communities oppose extraction that pollutes water and land",
        "Urban-rural divide fuels populist movements and social unrest"
    ],
    "Thailand - Deep South": [
        "Malay-Muslim provinces annexed by Buddhist-majority Thailand in 1909",
        "Separatist insurgency resurged in 2004 after decades of marginalization",
        "Daily bombings, shootings, and targeted killings of teachers and officials",
        "Peace dialogue between government and BRN rebel group has stalled",
        "Tourism-dependent economy of the north contrasts sharply with the war-torn south"
    ],
    "EU-Russia Baltic Tensions": [
        "Baltic states (Estonia, Latvia, Lithuania) were occupied by USSR for 50 years",
        "Large Russian-speaking minorities create potential for hybrid warfare",
        "NATO deployed multinational battlegroups after Russia invaded Ukraine",
        "Sabotage incidents — undersea cables cut, GPS jamming near Russian border",
        "Cyberattacks on government systems traced to Russian state actors"
    ],
    "Chad": [
        "Military dynasty — Déby father and son have ruled since 1990",
        "Rebel movements threaten from multiple borders",
        "Spillover from Sudan civil war — 1 million refugees flooding in",
        "Sahel jihadist groups expanding southward",
        "France's last major military base in the Sahel — strategic importance"
    ],
    "Honduras": [
        "Gang violence from MS-13 and Barrio 18 drives mass migration to the US",
        "Drug trafficking corridor between South America and North America",
        "State of emergency gave military sweeping powers against gangs",
        "Corruption at all levels of government undermines rule of law",
        "Climate vulnerability — hurricanes and droughts destroy livelihoods"
    ],
    "Falkland Islands": [
        "Britain and Argentina both claim sovereignty over the remote South Atlantic islands",
        "Argentina invaded in 1982, Britain retook them in a 74-day war",
        "Islanders voted 99.8% to remain British in 2013 referendum",
        "Oil exploration around the islands adds economic dimension to the dispute",
        "Argentina's constitution still claims the 'Malvinas' as sovereign territory"
    ],
    "Guyana - Venezuela Border": [
        "Venezuela claims the Essequibo region — two-thirds of Guyana's territory",
        "Massive oil discoveries by ExxonMobil in Guyana's waters inflamed the dispute",
        "Venezuela held a referendum in 2023 claiming sovereignty",
        "Military posturing raised alarm — Brazil deployed troops as deterrent",
        "ICJ case pending but Venezuela rejects the court's jurisdiction"
    ],
    "Northern Ireland": [
        "Legacy of The Troubles (1968-1998) — 3,500 killed in sectarian conflict",
        "Good Friday Agreement brought peace but Brexit threatened the border question",
        "Dissident republican groups still carry out occasional attacks",
        "Protestant unionist community feels identity threatened by demographic shifts",
        "Windsor Framework manages trade border but political tensions persist"
    ],
    "Manipur, India": [
        "Ethnic violence between hill-dwelling Kuki-Zo and valley-dominant Meitei since May 2023",
        "Dispute over Meitei demand for Scheduled Tribe status — Kukis see it as land grab",
        "Villages burned, churches destroyed, women targeted with sexual violence",
        "Internet shut down for months — information blackout",
        "Indian government accused of favoring Meitei majority, failing to protect Kukis"
    ],
    "Balochistan": [
        "Baloch people divided across Pakistan, Iran, and Afghanistan — never had their own state",
        "Pakistan's military extracts resources but invests nothing in the province",
        "Enforced disappearances — thousands of Baloch activists 'disappeared' by security forces",
        "BLA attacks on Chinese-funded CPEC projects challenge Pakistan-China economic corridor",
        "Largest and poorest province — lowest literacy, highest infant mortality in Pakistan"
    ],
    "Tigray, Ethiopia": [
        "TPLF ruled Ethiopia for 27 years until PM Abiy took power in 2018",
        "War erupted in Nov 2020 — Ethiopian and Eritrean forces vs TPLF",
        "Siege tactics created famine conditions — aid blocked for months",
        "Ceasefire in Nov 2022 but Eritrean forces remain in parts of Tigray",
        "Post-war accountability absent — mass atrocities documented but unprosecuted"
    ],
    "Papua (Indonesia)": [
        "Indonesia took control of West Papua in a disputed 1969 'vote' of only 1,025 hand-picked people",
        "Indigenous Papuans ethnically and culturally distinct from Indonesian majority",
        "Military operations against independence movement with extrajudicial killings",
        "Transmigration programs settling Javanese in Papua change demographics",
        "Foreign journalists and human rights monitors banned from the region"
    ],
    "Cabo Delgado, Mozambique": [
        "ISIS-linked insurgency erupted in 2017 in gas-rich northern province",
        "Grievances over extreme poverty despite massive natural gas reserves",
        "Young men recruited with promises of money and religious purpose",
        "Total's $20 billion LNG project suspended due to violence",
        "Rwandan military intervention stabilized some areas but insurgency continues"
    ],
    "Anglophone Cameroon": [
        "English-speaking minority (~20%) marginalized since French-dominated independence in 1961",
        "Lawyers and teachers protested French being imposed in courts and schools",
        "Government crackdown radicalized the movement into armed separatism",
        "'Ambazonia' independence declared in 2017 — government labels it terrorism",
        "Schools shut for years — an entire generation missing education"
    ],
    "Lake Chad Basin": [
        "Boko Haram pledged allegiance to ISIS — now operates as ISWAP across 4 countries",
        "Lake Chad has shrunk 90% since 1960 — climate change drives resource conflicts",
        "30 million people depend on the shrinking lake for survival",
        "Military offensives push fighters across borders — no country can solve it alone",
        "Massive displacement — 2.5 million refugees and IDPs"
    ],
    "Karenni State, Myanmar": [
        "Karenni (Kayah) people never agreed to join Burma at independence",
        "Resistance forces captured significant territory from the junta since 2021",
        "Military responds with airstrikes and artillery on civilian areas",
        "Entire towns destroyed — Loikaw and surrounding areas devastated",
        "One of Myanmar's smallest states but fiercest resistance fronts"
    ],
    "Senegal - Casamance": [
        "MFDC separatist movement has fought since 1982 — Africa's longest low-level conflict",
        "Casamance is geographically isolated from the rest of Senegal by The Gambia",
        "Ethnic Jola people feel marginalized by the Wolof-dominated government",
        "Landmines still kill and maim civilians decades after being planted",
        "Recent peace overtures show promise but no final agreement"
    ],
    "Ogaden, Ethiopia": [
        "Ethnic Somali region of Ethiopia — culturally distinct from highland Ethiopia",
        "ONLF fought for self-determination for decades before signing peace in 2018",
        "Inter-clan violence and military operations continue despite the peace deal",
        "Drought and famine hit the pastoralist population hardest",
        "Oil and gas exploration adds resource competition dimension"
    ],
    "Nagaland, India": [
        "Naga rebels declared independence the day before India in 1947",
        "One of Asia's oldest insurgencies — fighting for over 75 years",
        "Ceasefire since 1997 but peace deal remains elusive after decades of talks",
        "Multiple rebel factions with competing visions make negotiations complex",
        "Naga identity spans the India-Myanmar border — cross-border dimensions"
    ],
    "Rakhine State, Myanmar": [
        "Arakan Army fights Myanmar military for Rakhine autonomy",
        "Rohingya Muslims face genocide — 1 million in Bangladesh refugee camps since 2017",
        "Rohingya trapped between military and Arakan Army with nowhere to go",
        "Buddhist nationalism fueled dehumanization of Rohingya as 'illegal immigrants'",
        "International community failed to act despite clear genocide warnings"
    ],
    "South Sudan": [
        "World's youngest country — gained independence from Sudan in 2011",
        "Civil war erupted in 2013 between President Kiir (Dinka) and VP Machar (Nuer)",
        "Oil wealth funds weapons instead of development",
        "Subnational ethnic violence continues despite 2018 peace deal",
        "2.2 million refugees, 7.7 million need humanitarian aid"
    ],
    "North Kivu, DRC": [
        "M23 rebel group backed by Rwanda seizing territory around Goma",
        "Control of coltan, cobalt, and gold mines funds the conflict",
        "UN peacekeepers (MONUSCO) withdrawing after 25 years",
        "Rwanda denies backing M23 despite overwhelming evidence",
        "6+ million displaced — world's most neglected humanitarian crisis"
    ],
    "Burkina Faso": [
        "Two military coups in 2022 amid spiraling jihadist violence",
        "JNIM and ISGS control nearly half the country's territory",
        "Junta expelled French forces and turned to Russian Wagner mercenaries",
        "Civilian massacres by both jihadists and military forces",
        "3 million displaced — fastest-deteriorating crisis in the world"
    ],
    "Mali": [
        "Tuareg separatists in the north have fought since independence in 1960",
        "Jihadist groups exploited the 2012 Tuareg rebellion to seize territory",
        "French military intervened in 2013 but withdrew after military coups",
        "Wagner mercenaries replaced French — accused of civilian massacres",
        "Three-way conflict between separatists, jihadists, and the military junta"
    ],
    "Zamfara & Katsina, Nigeria": [
        "Armed bandits on motorbikes raid villages, kidnap hundreds at a time",
        "Originally cattle rustling disputes that escalated into organized criminal warfare",
        "Over 80,000 killed since 2011 — almost no international coverage",
        "Government response inadequate — military stretched thin across multiple fronts",
        "Forests provide safe havens — bandits operate from inaccessible camps"
    ],
    "Darfur (Ongoing)": [
        "RSF (descended from Janjaweed) committing ethnic cleansing during Sudan civil war",
        "Targeting non-Arab Masalit and Fur communities — echoes of 2003 genocide",
        "El Geneina massacre in 2023 killed thousands — city largely destroyed",
        "Aid agencies unable to access the region — famine conditions spreading",
        "International community distracted by other crises — Darfur forgotten again"
    ],
    "Chin State, Myanmar": [
        "Remote mountainous region on the India-Myanmar border",
        "Predominantly Christian Chin people formed resistance forces after 2021 coup",
        "Resistance has captured territory but junta retaliates with airstrikes",
        "Towns like Thantlang largely destroyed — 80% of buildings burned",
        "Refugees flee to India but face pushback — Mizoram state overwhelmed"
    ],
    "Oromo-Amhara, Ethiopia": [
        "OLA (Oromo Liberation Army) fights for Oromo self-determination",
        "Amhara Fano militia formed to resist federal government's disarmament",
        "Ethiopia's two largest ethnic groups now both in conflict with the central government",
        "PM Abiy is Oromo but has lost support from his own community",
        "Overshadowed by Tigray war but potentially more destabilizing long-term"
    ],
    "Ituri Province, DRC": [
        "CODECO militia targets Hema ethnic group in gold-rich province",
        "Ethnic massacres in displacement camps — hundreds killed in single attacks",
        "Gold mining attracts armed groups competing for resources",
        "UN peacekeepers present but unable to protect civilians effectively",
        "One of the DRC's many forgotten crises overshadowed by North Kivu"
    ],
    "Abyei, Sudan/South Sudan": [
        "Oil-rich territory claimed by both Sudan and South Sudan",
        "Neither country's borders include Abyei — status left unresolved since 2011",
        "Seasonal clashes between Dinka Ngok (South) and Misseriya nomads (North)",
        "UN peacekeepers (UNISFA) maintain fragile calm",
        "Both Sudans too consumed by internal conflicts to negotiate"
    ],
    "Tindouf / Western Sahara Camps": [
        "Over 100,000 Sahrawi refugees have lived in Algerian desert camps since 1975",
        "Entire generation born and raised in exile — waiting for a homeland",
        "Morocco controls Western Sahara, Polisario Front demands independence referendum",
        "UN mission (MINURSO) present since 1991 but referendum never held",
        "World's most forgotten refugee crisis — average aid is $0.15 per person per day"
    ],
    "Mindanao, Philippines (BIFF)": [
        "BIFF splinter group rejected the 2014 peace deal with the main Moro rebels",
        "IED attacks and extortion in Maguindanao and surrounding provinces",
        "Links to ISIS ideology attract radicalized fighters",
        "Bangsamoro Autonomous Region created in 2019 but BIFF operates outside it",
        "Poverty and lack of opportunity drive recruitment"
    ],
    "Mozambique - Post-Election": [
        "Disputed October 2024 elections sparked nationwide protests",
        "Security forces killed hundreds of demonstrators",
        "Opposition leader contests results, calls for continued resistance",
        "FRELIMO party has ruled since independence in 1975 — accused of rigging",
        "Economic inequality and corruption fuel public anger"
    ],
    "Papua New Guinea - Tribal": [
        "Tribal warfare has existed for centuries but modern weapons make it far deadlier",
        "Land and resource disputes between clans escalate quickly",
        "State has almost no presence in highland regions",
        "Arms trafficking from military stockpiles fuels the violence",
        "2024 saw some of the worst tribal fighting in decades — over 100 killed in single clashes"
    ],
};

// Key dates timeline per conflict
const KEY_DATES = {
    "Ukraine": [
        { date: "2014", event: "Russia annexes Crimea, war begins in Donbas" },
        { date: "Feb 2022", event: "Russia launches full-scale invasion" },
        { date: "Apr 2022", event: "Bucha massacre discovered, global outrage" },
        { date: "Nov 2022", event: "Ukraine liberates Kherson" },
        { date: "Jun 2023", event: "Ukraine launches counteroffensive" },
        { date: "2024", event: "Frontlines largely static, attrition warfare" },
        { date: "2025", event: "Diplomatic efforts intensify amid exhaustion" },
    ],
    "Gaza / Israel": [
        { date: "2007", event: "Hamas takes control of Gaza, blockade begins" },
        { date: "2014", event: "Operation Protective Edge — 50-day war" },
        { date: "Oct 7, 2023", event: "Hamas attacks Israel, ~1,200 killed" },
        { date: "Oct 2023", event: "Israel begins ground invasion of Gaza" },
        { date: "Jan 2024", event: "ICJ orders Israel to prevent genocide" },
        { date: "May 2024", event: "Rafah offensive displaces 1 million" },
        { date: "2025", event: "Ceasefire negotiations, humanitarian catastrophe continues" },
    ],
    "Sudan": [
        { date: "2019", event: "Popular revolution ousts dictator Omar al-Bashir" },
        { date: "Oct 2021", event: "Military coup ends civilian transition" },
        { date: "Apr 2023", event: "War erupts between SAF and RSF in Khartoum" },
        { date: "Jun 2023", event: "RSF massacres civilians in El Geneina, Darfur" },
        { date: "2024", event: "Famine declared in parts of Darfur" },
        { date: "2025", event: "War spreads, 10+ million displaced" },
    ],
    "Syria": [
        { date: "Mar 2011", event: "Arab Spring protests begin, Assad cracks down" },
        { date: "2013", event: "Chemical weapons attack in Ghouta" },
        { date: "2014", event: "ISIS declares caliphate across Syria and Iraq" },
        { date: "2015", event: "Russia intervenes militarily to support Assad" },
        { date: "2019", event: "ISIS territorial caliphate defeated" },
        { date: "Late 2024", event: "Rebel offensive topples Assad regime" },
        { date: "2025", event: "Political transition, competing factions" },
    ],
    "Myanmar": [
        { date: "1948", event: "Independence from Britain, ethnic conflicts begin" },
        { date: "2015", event: "Aung San Suu Kyi's NLD wins elections" },
        { date: "2017", event: "Rohingya genocide, 700,000 flee to Bangladesh" },
        { date: "Feb 2021", event: "Military coup, mass protests crushed" },
        { date: "2022", event: "People's Defense Forces form across the country" },
        { date: "2024", event: "Resistance captures multiple towns and bases" },
        { date: "2025", event: "Junta losing territory on multiple fronts" },
    ],
    "Iran": [
        { date: "1979", event: "Islamic Revolution, US hostage crisis" },
        { date: "2015", event: "Iran nuclear deal (JCPOA) signed" },
        { date: "2018", event: "Trump withdraws from nuclear deal" },
        { date: "2020", event: "US kills General Soleimani in Baghdad" },
        { date: "2022", event: "Mahsa Amini protests shake the regime" },
        { date: "Apr 2024", event: "Iran and Israel exchange direct strikes for first time" },
        { date: "2025", event: "Military confrontations escalate" },
    ],
    "Yemen": [
        { date: "2014", event: "Houthis capture capital Sana'a" },
        { date: "2015", event: "Saudi-led coalition begins airstrikes" },
        { date: "2018", event: "Hudaydah offensive, famine warnings" },
        { date: "2022", event: "Temporary truce, then collapse" },
        { date: "Nov 2023", event: "Houthis begin Red Sea shipping attacks" },
        { date: "Jan 2024", event: "US and UK bomb Houthi positions" },
        { date: "2025", event: "Attacks continue disrupting global trade" },
    ],
    "Democratic Republic of Congo": [
        { date: "1996", event: "First Congo War begins" },
        { date: "1998", event: "Second Congo War — 'Africa's World War'" },
        { date: "2003", event: "Peace agreement, UN peacekeepers deploy" },
        { date: "2012", event: "M23 captures Goma briefly" },
        { date: "2022", event: "M23 resurgence with Rwandan backing" },
        { date: "2024", event: "M23 advances toward Goma again" },
        { date: "2025", event: "UN peacekeepers withdrawing, crisis deepens" },
    ],
    "Mexico": [
        { date: "2006", event: "President Calderón declares war on cartels" },
        { date: "2011", event: "Zetas massacre in San Fernando — 193 killed" },
        { date: "2014", event: "43 students disappeared in Ayotzinapa" },
        { date: "2019", event: "AMLO takes 'hugs not bullets' approach" },
        { date: "2023", event: "Sinaloa Cartel splits into warring factions" },
        { date: "2024", event: "Sinaloa warfare kills hundreds, shuts cities" },
        { date: "2025", event: "Cartel violence at record levels" },
    ],
    "Taiwan Strait": [
        { date: "1949", event: "Nationalists flee to Taiwan after losing civil war" },
        { date: "1996", event: "Third Taiwan Strait Crisis — missile tests" },
        { date: "2022", event: "Pelosi visits Taiwan, China holds massive drills" },
        { date: "2024", event: "Lai Ching-te elected, China increases pressure" },
        { date: "2025", event: "Military activity in strait continues escalating" },
    ],
    "Haiti": [
        { date: "2010", event: "Devastating earthquake kills 220,000" },
        { date: "2021", event: "President Moïse assassinated" },
        { date: "2024", event: "Gangs seize control of Port-au-Prince" },
        { date: "2024", event: "Kenyan-led multinational force deploys" },
        { date: "2025", event: "Gangs still control 80% of capital" },
    ],
    "Lebanon": [
        { date: "1975", event: "Civil war begins (ends 1990)" },
        { date: "2006", event: "Israel-Hezbollah war — 34 days" },
        { date: "2019", event: "Economic collapse, protests erupt" },
        { date: "Aug 2020", event: "Beirut port explosion — 218 killed" },
        { date: "Oct 2023", event: "Hezbollah opens front against Israel" },
        { date: "2024", event: "Israeli strikes intensify across Lebanon" },
    ],
    "Afghanistan": [
        { date: "2001", event: "US invades after 9/11" },
        { date: "2011", event: "Osama bin Laden killed in Pakistan" },
        { date: "Aug 2021", event: "Taliban retakes Kabul, US withdraws" },
        { date: "2022", event: "Girls banned from secondary education" },
        { date: "2025", event: "Economic collapse, ISIS-K attacks continue" },
    ],
    "Iraq": [
        { date: "2003", event: "US invasion topples Saddam Hussein" },
        { date: "2006", event: "Sectarian civil war peaks" },
        { date: "2014", event: "ISIS captures Mosul" },
        { date: "2017", event: "Mosul recaptured, ISIS caliphate defeated" },
        { date: "2020", event: "US kills Iranian General Soleimani in Baghdad" },
        { date: "2025", event: "Iranian-backed militias remain powerful" },
    ],
    "Korean Peninsula": [
        { date: "1950", event: "Korean War begins" },
        { date: "1953", event: "Armistice signed — no peace treaty" },
        { date: "2017", event: "Nuclear crisis — 'fire and fury'" },
        { date: "2018", event: "Trump-Kim summits" },
        { date: "2024", event: "North Korea declares South an 'enemy state'" },
    ],
    "Ethiopia / Eritrea": [
        { date: "2018", event: "PM Abiy wins Nobel for peace with Eritrea" },
        { date: "Nov 2020", event: "Tigray War begins" },
        { date: "2022", event: "Ceasefire signed in Pretoria" },
        { date: "2023", event: "Amhara Fano militia conflict erupts" },
        { date: "2025", event: "Multiple ethnic conflicts simmer" },
    ],
    "Kashmir": [
        { date: "1947", event: "First Kashmir War after partition" },
        { date: "1989", event: "Armed insurgency begins" },
        { date: "1999", event: "Kargil War between India and Pakistan" },
        { date: "2016", event: "Burhan Wani killed — massive protests" },
        { date: "2019", event: "India revokes Article 370 autonomy" },
    ],
    "Somalia": [
        { date: "1991", event: "Central government collapses" },
        { date: "1993", event: "Black Hawk Down — US withdrawal" },
        { date: "2006", event: "Islamic Courts Union takes Mogadishu" },
        { date: "2012", event: "First formal government in 20 years" },
        { date: "2025", event: "Al-Shabaab still controls large areas" },
    ],
    "Sahel Region": [
        { date: "2012", event: "Tuareg/jihadist rebellion in Mali" },
        { date: "2013", event: "French intervention in Mali" },
        { date: "2020", event: "Military coup in Mali" },
        { date: "2022", event: "Coups in Burkina Faso, French expelled" },
        { date: "2023", event: "Niger coup — Sahel alliance formed" },
        { date: "2025", event: "Wagner/Russia replaces Western presence" },
    ],
    "Red Sea / Gulf of Aden": [
        { date: "Nov 2023", event: "Houthis begin attacking commercial ships" },
        { date: "Dec 2023", event: "Major shipping lines reroute around Africa" },
        { date: "Jan 2024", event: "US and UK launch strikes on Houthi targets" },
        { date: "2024", event: "Attacks continue despite military strikes" },
        { date: "2025", event: "Global shipping costs remain elevated" },
    ],
    "West Bank": [
        { date: "1967", event: "Israel captures West Bank in Six-Day War" },
        { date: "1993", event: "Oslo Accords — Palestinian Authority created" },
        { date: "2002", event: "Israel begins building separation barrier" },
        { date: "Oct 2023", event: "Israeli military operations intensify" },
        { date: "2025", event: "Settler violence and military raids escalate" },
    ],
    "Nigeria": [
        { date: "2009", event: "Boko Haram insurgency begins in Borno" },
        { date: "2014", event: "Chibok girls kidnapping — global outrage" },
        { date: "2016", event: "ISWAP splits from Boko Haram" },
        { date: "2021", event: "Banditry crisis explodes in northwest" },
        { date: "2025", event: "Violence on multiple fronts continues" },
    ],
    "Democratic Republic of Congo": [
        { date: "1996", event: "First Congo War" },
        { date: "1998", event: "Second Congo War — Africa's World War" },
        { date: "2012", event: "M23 briefly captures Goma" },
        { date: "2022", event: "M23 resurges with Rwandan backing" },
        { date: "2025", event: "UN peacekeepers withdrawing, Goma besieged" },
    ],
    "Colombia": [
        { date: "1964", event: "FARC guerrilla movement founded" },
        { date: "2002", event: "Plan Colombia — US military aid" },
        { date: "2016", event: "Historic FARC peace deal signed" },
        { date: "2022", event: "First leftist president elected — Petro" },
        { date: "2025", event: "ELN talks stalled, FARC dissidents active" },
    ],
    "South Sudan": [
        { date: "2011", event: "Independence from Sudan" },
        { date: "2013", event: "Civil war erupts — Kiir vs Machar" },
        { date: "2018", event: "Revitalized peace agreement signed" },
        { date: "2023", event: "Elections delayed again" },
        { date: "2025", event: "Subnational violence continues" },
    ],
    "North Kivu, DRC": [
        { date: "2012", event: "M23 briefly captures Goma" },
        { date: "2013", event: "M23 defeated, fighters flee to Rwanda/Uganda" },
        { date: "2022", event: "M23 resurges, captures multiple towns" },
        { date: "2024", event: "M23 advances toward Goma again" },
        { date: "2025", event: "MONUSCO withdrawing, crisis deepens" },
    ],
    "Burkina Faso": [
        { date: "2015", event: "First jihadist attacks in the north" },
        { date: "Jan 2022", event: "First military coup" },
        { date: "Sep 2022", event: "Second military coup" },
        { date: "2023", event: "France expelled, Wagner invited" },
        { date: "2025", event: "Jihadists control ~40% of territory" },
    ],
    "Mali": [
        { date: "2012", event: "Tuareg/jihadist rebellion seizes the north" },
        { date: "2013", event: "French Operation Serval intervenes" },
        { date: "2020", event: "Military coup topples government" },
        { date: "2022", event: "France withdraws, Wagner deploys" },
        { date: "2025", event: "Three-way war continues" },
    ],
    "Darfur (Ongoing)": [
        { date: "2003", event: "Darfur genocide begins — Janjaweed attacks" },
        { date: "2009", event: "ICC indicts President Bashir for genocide" },
        { date: "2019", event: "Bashir overthrown in revolution" },
        { date: "Apr 2023", event: "Sudan civil war reaches Darfur" },
        { date: "2023", event: "El Geneina massacre — thousands killed" },
        { date: "2025", event: "Ethnic cleansing continues, famine spreading" },
    ],
    "US-China Trade & Tech War": [
        { date: "2018", event: "Trump launches tariffs on $250B of Chinese goods" },
        { date: "2019", event: "Huawei banned from US networks" },
        { date: "2022", event: "CHIPS Act — semiconductor export controls" },
        { date: "2023", event: "AI chip restrictions expanded" },
        { date: "2025", event: "Tech decoupling accelerates" },
    ],
    "US-Iran / Persian Gulf": [
        { date: "1979", event: "Islamic Revolution, US hostage crisis" },
        { date: "Jan 2020", event: "US kills Soleimani" },
        { date: "Apr 2024", event: "Iran-Israel direct strikes" },
        { date: "2024", event: "US strikes on Iran-backed groups" },
        { date: "2025", event: "Confrontations continue escalating" },
    ],
    "US-Mexico Border": [
        { date: "2014", event: "Unaccompanied minor crisis" },
        { date: "2019", event: "Border wall construction ramps up" },
        { date: "2021", event: "Record border encounters" },
        { date: "2024", event: "Fentanyl crisis peaks — 100K+ overdose deaths" },
        { date: "2025", event: "Tariffs and border enforcement intensify" },
    ],
    "Mexico - Sinaloa": [
        { date: "2016", event: "El Chapo recaptured, extradited to US" },
        { date: "2019", event: "'Culiacanazo' — Sinaloa cartel battles military" },
        { date: "2023", event: "Cartel splits into warring factions" },
        { date: "2024", event: "Intense urban warfare in Culiacán" },
        { date: "2025", event: "Violence at record levels" },
    ],
    "Manipur, India": [
        { date: "May 2023", event: "Ethnic violence erupts between Meitei and Kuki" },
        { date: "Jun 2023", event: "Internet shut down across the state" },
        { date: "2023", event: "200+ killed, 60,000+ displaced" },
        { date: "2024", event: "Violence continues, no political resolution" },
        { date: "2025", event: "Communities remain divided, sporadic clashes" },
    ],
    "Rakhine State, Myanmar": [
        { date: "2012", event: "Anti-Rohingya riots" },
        { date: "2017", event: "Military genocide — 700,000 Rohingya flee" },
        { date: "2021", event: "Military coup" },
        { date: "2023", event: "Arakan Army launches major offensive" },
        { date: "2025", event: "AA controls most of Rakhine, Rohingya trapped" },
    ],
    "Georgia": [
        { date: "2003", event: "Rose Revolution — pro-Western shift" },
        { date: "2008", event: "Russia invades — occupies South Ossetia, Abkhazia" },
        { date: "2023", event: "Foreign agent law sparks mass protests" },
        { date: "2024", event: "Disputed elections, protests intensify" },
        { date: "2025", event: "Democratic backsliding continues" },
    ],
    "Ecuador": [
        { date: "2021", event: "Prison massacres — gangs take control" },
        { date: "2023", event: "Presidential candidate assassinated" },
        { date: "Jan 2024", event: "Gang leaders escape — state of emergency" },
        { date: "2024", event: "Military deployed, TV station seized live" },
        { date: "2025", event: "Violence continues despite crackdown" },
    ],
    "Nagorno-Karabakh / South Caucasus": [
        { date: "1991", event: "War begins as Soviet Union collapses" },
        { date: "1994", event: "Ceasefire — Armenia controls the territory" },
        { date: "2020", event: "44-day war — Azerbaijan recaptures most territory" },
        { date: "Sep 2023", event: "Azerbaijan takes remaining territory — 120K flee" },
        { date: "2025", event: "Armenia-Azerbaijan border talks continue" },
    ],
};

// Related conflicts — "See also" connections
const RELATED_CONFLICTS = {
    "Ukraine": ["EU-Russia Baltic Tensions", "Transnistria", "Georgia"],
    "Gaza / Israel": ["West Bank", "Lebanon", "Iran", "Red Sea / Gulf of Aden"],
    "Sudan": ["Chad", "Darfur (Ongoing)", "South Sudan", "Ethiopia / Eritrea"],
    "Myanmar": ["Karenni State, Myanmar", "Rakhine State, Myanmar", "Chin State, Myanmar"],
    "Taiwan Strait": ["South China Sea", "US-China Trade & Tech War", "Korean Peninsula"],
    "South China Sea": ["Taiwan Strait", "Philippines - Insurgency", "US-China Trade & Tech War"],
    "Yemen": ["Red Sea / Gulf of Aden", "Iran", "Saudi Arabia"],
    "Iran": ["Yemen", "Lebanon", "Syria", "Iraq", "US-Iran / Persian Gulf", "Gaza / Israel"],
    "Syria": ["Iran", "Lebanon", "Iraq", "Turkey"],
    "Democratic Republic of Congo": ["North Kivu, DRC", "Ituri Province, DRC", "Sahel Region"],
    "Sahel Region": ["Mali", "Burkina Faso", "Nigeria", "Chad"],
    "Lebanon": ["Gaza / Israel", "Iran", "Syria"],
    "Mexico": ["Mexico - Sinaloa", "Mexico - Chiapas", "US-Mexico Border", "Honduras", "Ecuador"],
    "Mexico - Sinaloa": ["Mexico", "US-Mexico Border"],
    "Somalia": ["Red Sea / Gulf of Aden", "Ethiopia / Eritrea"],
    "Haiti": ["Honduras", "Venezuela"],
    "Red Sea / Gulf of Aden": ["Yemen", "Somalia", "Iran"],
    "West Bank": ["Gaza / Israel", "Lebanon"],
    "US-Canada Trade Tensions": ["US-China Trade & Tech War", "US-Mexico Border"],
    "US-Iran / Persian Gulf": ["Iran", "Red Sea / Gulf of Aden", "Iraq"],
    "Nigeria": ["Sahel Region", "Lake Chad Basin", "Zamfara & Katsina, Nigeria", "Cameroon"],
    "Afghanistan": ["Pakistan", "Iran"],
    "Iraq": ["Iran", "Syria", "US-Iran / Persian Gulf"],
    "Pakistan": ["Afghanistan", "Kashmir", "Balochistan", "India - China Border"],
    "Mali": ["Sahel Region", "Burkina Faso", "Nigeria"],
    "Burkina Faso": ["Sahel Region", "Mali", "Nigeria"],
    "North Kivu, DRC": ["Democratic Republic of Congo", "Ituri Province, DRC"],
    "Darfur (Ongoing)": ["Sudan", "Chad"],
    "South Sudan": ["Sudan", "Abyei, Sudan/South Sudan"],
    "Manipur, India": ["Nagaland, India", "Myanmar"],
    "Cameroon": ["Anglophone Cameroon", "Nigeria", "Lake Chad Basin"],
    "Anglophone Cameroon": ["Cameroon", "Nigeria"],
    "Colombia": ["Ecuador", "Venezuela", "Honduras"],
    "Ethiopia / Eritrea": ["Tigray, Ethiopia", "Oromo-Amhara, Ethiopia", "Ogaden, Ethiopia", "South Sudan"],
    "Tigray, Ethiopia": ["Ethiopia / Eritrea", "Oromo-Amhara, Ethiopia", "Sudan"],
    "Oromo-Amhara, Ethiopia": ["Ethiopia / Eritrea", "Tigray, Ethiopia"],
    "Ogaden, Ethiopia": ["Ethiopia / Eritrea", "Somalia"],
    "Kashmir": ["India - China Border", "Pakistan", "Balochistan"],
    "India - China Border": ["Kashmir", "Taiwan Strait", "South China Sea"],
    "Korean Peninsula": ["Taiwan Strait", "South China Sea", "US-China Trade & Tech War"],
    "Libya": ["Sahel Region", "Chad", "Egypt"],
    "Venezuela": ["Guyana - Venezuela Border", "Colombia", "Ecuador"],
    "Guyana - Venezuela Border": ["Venezuela", "Colombia"],
    "Nagorno-Karabakh / South Caucasus": ["Georgia", "Transnistria"],
    "US-China Trade & Tech War": ["Taiwan Strait", "South China Sea", "US-Canada Trade Tensions", "Korean Peninsula"],
    "US-Mexico Border": ["Mexico", "Mexico - Sinaloa", "Honduras", "Ecuador"],
    "Mexico - Chiapas": ["Mexico", "Honduras"],
    "Kosovo - Serbia": ["Bosnia & Herzegovina", "Georgia"],
    "Bosnia & Herzegovina": ["Kosovo - Serbia", "Georgia"],
    "Transnistria": ["Ukraine", "Georgia", "Nagorno-Karabakh / South Caucasus"],
    "Cyprus": ["Kosovo - Serbia", "Northern Ireland"],
    "Northern Ireland": ["Cyprus", "Bosnia & Herzegovina"],
    "Falkland Islands": ["Guyana - Venezuela Border"],
    "Western Sahara": ["Tindouf / Western Sahara Camps", "Senegal - Casamance"],
    "Tindouf / Western Sahara Camps": ["Western Sahara"],
    "Greenland / Arctic": ["EU-Russia Baltic Tensions", "US-Canada Trade Tensions"],
    "EU-Russia Baltic Tensions": ["Ukraine", "Transnistria", "Greenland / Arctic"],
    "Philippines - Insurgency": ["Mindanao, Philippines (BIFF)", "South China Sea"],
    "Mindanao, Philippines (BIFF)": ["Philippines - Insurgency"],
    "Central African Republic": ["Democratic Republic of Congo", "Chad", "Sahel Region"],
    "Mozambique": ["Cabo Delgado, Mozambique", "Mozambique - Post-Election"],
    "Mozambique - Post-Election": ["Mozambique", "Cabo Delgado, Mozambique"],
    "Cabo Delgado, Mozambique": ["Mozambique", "Mozambique - Post-Election"],
    "Ecuador": ["Colombia", "Honduras", "Mexico"],
    "Georgia": ["Transnistria", "Nagorno-Karabakh / South Caucasus", "Ukraine"],
    "Chad": ["Sudan", "Sahel Region", "Darfur (Ongoing)", "Central African Republic"],
    "Honduras": ["Mexico", "Ecuador", "Colombia"],
    "Peru": ["Colombia", "Ecuador"],
    "Thailand - Deep South": ["Myanmar", "Philippines - Insurgency"],
    "Papua (Indonesia)": ["Papua New Guinea - Tribal"],
    "Papua New Guinea - Tribal": ["Papua (Indonesia)"],
    "Balochistan": ["Pakistan", "Afghanistan", "Kashmir"],
    "Lake Chad Basin": ["Nigeria", "Sahel Region", "Chad", "Cameroon"],
    "Karenni State, Myanmar": ["Myanmar", "Chin State, Myanmar", "Rakhine State, Myanmar"],
    "Chin State, Myanmar": ["Myanmar", "Karenni State, Myanmar", "Manipur, India"],
    "Rakhine State, Myanmar": ["Myanmar", "Karenni State, Myanmar"],
    "Nagaland, India": ["Manipur, India", "Myanmar"],
    "Senegal - Casamance": ["Western Sahara", "Mali"],
    "Zamfara & Katsina, Nigeria": ["Nigeria", "Lake Chad Basin"],
    "Ituri Province, DRC": ["North Kivu, DRC", "Democratic Republic of Congo"],
    "Abyei, Sudan/South Sudan": ["Sudan", "South Sudan"],
    "US-Iran / Persian Gulf": ["Iran", "Red Sea / Gulf of Aden", "Iraq", "Yemen"],
};

// ============================================================
// HISTORICAL CONFLICT DATA
// ============================================================

// "Why were they fighting?" for historical conflicts
const WHY_FIGHTING_HIST = {
    "World War II - Europe": [
        "Nazi Germany's aggressive expansion — annexing Austria, Czechoslovakia, then invading Poland",
        "Hitler's ideology of racial supremacy and Lebensraum (living space) in the East",
        "Failure of appeasement — Allies let Hitler grow too powerful before responding",
        "Unresolved grievances from WWI — harsh Treaty of Versailles humiliated Germany",
        "Holocaust — systematic genocide of 6 million Jews and millions of others"
    ],
    "World War II - Pacific": [
        "Japan's imperial expansion to secure oil, rubber, and resources across Asia",
        "US oil embargo after Japan invaded Indochina threatened Japan's military machine",
        "Pearl Harbor surprise attack on Dec 7, 1941 drew the US into war",
        "Racial ideology — Japan saw itself as the liberator and ruler of Asia",
        "Ended with atomic bombs on Hiroshima and Nagasaki — the nuclear age began"
    ],
    "World War I": [
        "Alliance system dragged all of Europe into war after the assassination of Archduke Franz Ferdinand",
        "Imperial rivalries — Britain, France, Germany, Russia all competing for global dominance",
        "Arms race — massive military buildups made war seem inevitable",
        "Nationalism — ethnic tensions in the Balkans (the 'powder keg of Europe')",
        "Colonial competition in Africa and Asia heightened great power tensions"
    ],
    "Vietnam War": [
        "Cold War proxy conflict — US tried to prevent communist takeover of South Vietnam",
        "French colonial rule ended at Dien Bien Phu, Vietnam split into North (communist) and South",
        "Domino theory — US feared all of Southeast Asia would fall to communism",
        "Ho Chi Minh's nationalist movement had wide popular support in both North and South",
        "US escalated from advisors to 500,000 troops but couldn't defeat guerrilla warfare"
    ],
    "Korean War": [
        "North Korea (Soviet-backed) invaded South Korea (US-backed) in 1950",
        "Cold War battle lines — first major armed conflict of the superpower rivalry",
        "China intervened when US forces approached the Chinese border",
        "Korean peninsula had been divided by the US and USSR after WWII with no Korean input",
        "Ended in armistice, not peace — technically still at war today"
    ],
    "American Revolution": [
        "Taxation without representation — Britain taxed colonies but gave them no voice in Parliament",
        "Growing colonial identity — Americans saw themselves as distinct from Britain",
        "Enlightenment ideas about liberty, natural rights, and self-governance",
        "British attempts to tighten control after the costly French and Indian War",
        "French alliance proved decisive — France wanted to weaken Britain after its own losses"
    ],
    "Rwandan Genocide": [
        "Ethnic hatred between Hutu majority and Tutsi minority stoked by colonial-era racial classifications",
        "Belgian colonizers elevated Tutsis, creating deep resentment that festered for decades",
        "President Habyarimana's assassination triggered the planned genocide on April 6, 1994",
        "Hutu Power propaganda dehumanized Tutsis as 'cockroaches' via radio broadcasts",
        "International community knew and did nothing — UN peacekeepers were withdrawn"
    ],
    "Napoleonic Wars": [
        "French Revolution overthrew the monarchy — European monarchies feared revolution spreading",
        "Napoleon's ambition to dominate Europe and spread revolutionary ideals",
        "Britain's determination to prevent any single power from controlling the continent",
        "Economic warfare — Napoleon's Continental System vs British naval blockade",
        "Nationalism awakened across Europe as peoples resisted French occupation"
    ],
    "American Civil War": [
        "Slavery — Southern economy depended on 4 million enslaved people, North was industrializing",
        "States' rights vs federal authority — could states leave the Union?",
        "Election of Abraham Lincoln (anti-slavery expansion) triggered Southern secession",
        "Economic divide — agrarian South vs industrial North had incompatible visions",
        "Moral crisis — growing abolitionist movement made compromise impossible"
    ],
    "Crusades": [
        "Pope Urban II called for holy war to reclaim Jerusalem from Muslim control in 1095",
        "Religious fervor — participants believed they earned salvation through crusading",
        "Land and wealth — younger sons with no inheritance saw opportunity in the East",
        "Byzantine Empire asked for help against advancing Seljuk Turks",
        "Trade rivalries — Italian city-states wanted control of Eastern Mediterranean commerce"
    ],
    "Mongol Conquests": [
        "Genghis Khan united warring Mongol tribes and directed their aggression outward",
        "Revenge — Khwarezmian Shah's murder of Mongol ambassadors triggered the western campaigns",
        "Mongol military innovation — composite bows, mobility, psychological warfare, and intelligence networks",
        "Economic motivation — controlling the Silk Road trade routes",
        "Meritocratic system attracted talented warriors from conquered peoples"
    ],
    "Bosnian War": [
        "Breakup of Yugoslavia along ethnic lines — Serbs, Croats, and Bosniaks each wanted territory",
        "Serb nationalism under Milošević aimed to create a 'Greater Serbia'",
        "Ethnic cleansing — deliberate campaigns to remove populations from desired territories",
        "Arms embargo disadvantaged Bosnian Muslims who lacked weapons to defend themselves",
        "International failure — Srebrenica massacre happened under UN 'protection'"
    ],
    "Soviet-Afghan War": [
        "Soviet Union invaded to prop up a communist government facing Islamic insurgency",
        "Mujahideen resistance supported by US, Pakistan, and Saudi Arabia with weapons and funding",
        "Cold War proxy — US saw chance to give Soviets 'their own Vietnam'",
        "Afghan tribal resistance to foreign occupation — a pattern repeated throughout history",
        "Stinger missiles changed the war — Mujahideen could shoot down Soviet helicopters"
    ],
    "Iraq War": [
        "US claimed Iraq had weapons of mass destruction — later proven false",
        "Post-9/11 'War on Terror' expanded to regime change in Iraq",
        "Neoconservative agenda to reshape the Middle East through democracy promotion",
        "Oil interests — Iraq has the world's 5th largest oil reserves",
        "Sectarian violence between Sunni and Shia erupted after Saddam's fall"
    ],
    "War in Afghanistan (US)": [
        "9/11 attacks on September 11, 2001 — al-Qaeda operated from Taliban-controlled Afghanistan",
        "Taliban refused to hand over Osama bin Laden",
        "Mission creep — from destroying al-Qaeda to nation-building over 20 years",
        "Taliban insurgency never defeated — controlled rural areas throughout the war",
        "US withdrawal in August 2021 — Taliban retook the country in days"
    ],
    "Peloponnesian War": [
        "Athens' growing power threatened Sparta's dominance of Greece",
        "Delian League (Athens-led) vs Peloponnesian League (Sparta-led) — bipolar rivalry",
        "Athens used alliance contributions to build its own empire, angering allies",
        "Sparta feared Athenian democracy would inspire their own enslaved Helot population",
        "Trade disputes and colonial rivalries across the Mediterranean"
    ],
    "Punic Wars": [
        "Rome and Carthage were the two Mediterranean superpowers — only room for one",
        "Sicily was the flashpoint — both wanted control of the wealthy island",
        "Hannibal's invasion of Italy was revenge for Rome's seizure of Sardinia and Corsica",
        "Rome feared Carthage's naval power and commercial wealth",
        "Third Punic War was pure Roman aggression — 'Carthage must be destroyed'"
    ],
    "French Revolution & Revolutionary Wars": [
        "Massive inequality — nobles and clergy paid no taxes while peasants starved",
        "Enlightenment ideas challenged the divine right of kings",
        "Financial crisis — France was bankrupt after supporting the American Revolution",
        "European monarchies invaded to crush the revolution and restore the king",
        "Revolutionary government became increasingly radical — Reign of Terror killed 17,000"
    ],
    "Taiping Rebellion": [
        "Hong Xiuquan's religious visions — claimed to be Jesus Christ's brother",
        "Qing Dynasty was weak, corrupt, and humiliated by the Opium Wars",
        "Massive inequality — peasants were desperate after floods, famines, and overtaxation",
        "Ethnic tension — Han Chinese resented Manchu Qing rulers",
        "Taiping promised land redistribution, gender equality, and end to foot-binding"
    ],
    "Mexican Revolution": [
        "Porfirio Díaz ruled as dictator for 35 years — wealth concentrated among elites",
        "Peasants like Zapata demanded 'Land and Liberty' — return of stolen communal lands",
        "Emerging middle class wanted democracy and an end to foreign economic domination",
        "Multiple factions with incompatible goals — made the revolution chaotic and prolonged",
        "US intervention complicated the conflict — Pershing's expedition chased Pancho Villa"
    ],
    "Armenian Genocide": [
        "Ottoman Empire blamed Armenians as a Christian 'fifth column' during WWI",
        "Young Turk government pursued ethnic homogeneity — 'Turkey for the Turks'",
        "Wartime chaos provided cover for systematic deportation and massacre",
        "Armenians were marched into the Syrian desert to die of starvation and exposure",
        "International community knew but did nothing — set precedent for future genocides"
    ],
    "Congo Free State Atrocities": [
        "King Leopold II wanted personal wealth from Congo's rubber and ivory",
        "Forced labor system — villages had rubber quotas enforced by cutting off hands",
        "No accountability — Congo was Leopold's personal property, not a Belgian colony",
        "International pressure from journalists and activists eventually forced reform",
        "Set the template for colonial exploitation that devastated Africa for generations"
    ],
    "Holodomor (Ukraine Famine)": [
        "Stalin collectivized farms — peasants who resisted were labeled 'kulaks' and punished",
        "Grain confiscated even as people starved — armed brigades searched homes for hidden food",
        "Deliberately targeted Ukrainian national identity and peasant resistance to Soviet control",
        "Internal passports prevented starving Ukrainians from fleeing to cities for food",
        "Soviet Union denied the famine was happening — Western journalists helped cover it up"
    ],
    "Spartacus Slave Revolt": [
        "Spartacus and 70 gladiators escaped from a training school in Capua",
        "Roman slavery was brutal — gladiators fought to the death for entertainment",
        "Revolt grew to 70,000 escaped slaves who defeated multiple Roman armies",
        "Slaves wanted freedom and passage out of Italy, not to overthrow Rome",
        "Crassus crucified 6,000 captured slaves along the Appian Way as a warning"
    ],
    "Battle of Thermopylae": [
        "Persian King Xerxes invaded Greece with possibly the largest army assembled up to that point",
        "Greece was fragmented — 300 Spartans and ~7,000 allies volunteered to hold the pass",
        "Narrow terrain negated Persian numerical superiority — Spartans excelled in close combat",
        "Traitor Ephialtes showed Persians a mountain path to outflank the Greeks",
        "Leonidas dismissed most allies and stayed to die — buying time for Greece to prepare"
    ],
};

// Key dates for historical conflicts
const KEY_DATES_HIST = {
    "World War II - Europe": [
        { date: "Sep 1939", event: "Germany invades Poland — WWII begins" },
        { date: "Jun 1940", event: "France falls to Germany in 6 weeks" },
        { date: "Jun 1941", event: "Germany invades Soviet Union — Operation Barbarossa" },
        { date: "Jan 1943", event: "Germans surrender at Stalingrad — turning point" },
        { date: "Jun 1944", event: "D-Day — Allied invasion of Normandy" },
        { date: "Apr 1945", event: "Hitler commits suicide, Berlin falls" },
        { date: "May 1945", event: "Germany surrenders — V-E Day" },
    ],
    "World War I": [
        { date: "Jun 1914", event: "Archduke Franz Ferdinand assassinated in Sarajevo" },
        { date: "Aug 1914", event: "War declared — alliances drag in all of Europe" },
        { date: "1916", event: "Battle of the Somme — 1 million casualties" },
        { date: "Apr 1917", event: "US enters the war" },
        { date: "Nov 1917", event: "Russian Revolution — Russia exits the war" },
        { date: "Nov 1918", event: "Armistice signed — war ends" },
        { date: "Jun 1919", event: "Treaty of Versailles — seeds of WWII planted" },
    ],
    "American Revolution": [
        { date: "1765", event: "Stamp Act — 'No taxation without representation'" },
        { date: "1773", event: "Boston Tea Party" },
        { date: "Apr 1775", event: "Battles of Lexington and Concord — war begins" },
        { date: "Jul 1776", event: "Declaration of Independence signed" },
        { date: "1777", event: "Victory at Saratoga — France enters as ally" },
        { date: "1781", event: "Siege of Yorktown — British surrender" },
        { date: "1783", event: "Treaty of Paris — independence recognized" },
    ],
    "American Civil War": [
        { date: "Nov 1860", event: "Lincoln elected president" },
        { date: "Apr 1861", event: "Fort Sumter attacked — war begins" },
        { date: "Sep 1862", event: "Battle of Antietam — bloodiest single day" },
        { date: "Jan 1863", event: "Emancipation Proclamation frees slaves in rebel states" },
        { date: "Jul 1863", event: "Gettysburg and Vicksburg — turning points" },
        { date: "Apr 1865", event: "Lee surrenders at Appomattox" },
        { date: "Apr 1865", event: "Lincoln assassinated at Ford's Theatre" },
    ],
    "Vietnam War": [
        { date: "1955", event: "US begins sending military advisors to South Vietnam" },
        { date: "1964", event: "Gulf of Tonkin incident — US escalates" },
        { date: "Jan 1968", event: "Tet Offensive shocks America" },
        { date: "1969", event: "My Lai massacre revealed, anti-war protests peak" },
        { date: "1973", event: "Paris Peace Accords — US withdraws" },
        { date: "Apr 1975", event: "Fall of Saigon — helicopter evacuations" },
    ],
    "Korean War": [
        { date: "Jun 1950", event: "North Korea invades the South" },
        { date: "Sep 1950", event: "MacArthur's Inchon landing turns the tide" },
        { date: "Nov 1950", event: "China enters the war — pushes UN forces back" },
        { date: "1951", event: "Frontline stabilizes near the 38th parallel" },
        { date: "Jul 1953", event: "Armistice signed — no peace treaty" },
    ],
    "Rwandan Genocide": [
        { date: "Oct 1990", event: "RPF invades Rwanda from Uganda" },
        { date: "Aug 1993", event: "Arusha Accords peace agreement signed" },
        { date: "Apr 6, 1994", event: "President's plane shot down — genocide begins" },
        { date: "Apr-Jul 1994", event: "800,000 killed in 100 days" },
        { date: "Jul 1994", event: "RPF captures Kigali — genocide ends" },
    ],
    "Napoleonic Wars": [
        { date: "1799", event: "Napoleon seizes power in a coup" },
        { date: "1805", event: "Trafalgar (British naval victory) and Austerlitz (French land victory)" },
        { date: "1812", event: "Invasion of Russia — catastrophic retreat from Moscow" },
        { date: "1814", event: "Napoleon exiled to Elba" },
        { date: "1815", event: "Waterloo — final defeat, exiled to St. Helena" },
    ],
    "Crusades": [
        { date: "1095", event: "Pope Urban II calls the First Crusade" },
        { date: "1099", event: "Crusaders capture Jerusalem — massacre follows" },
        { date: "1187", event: "Saladin recaptures Jerusalem" },
        { date: "1191", event: "Third Crusade — Richard the Lionheart vs Saladin" },
        { date: "1204", event: "Fourth Crusade sacks Constantinople instead" },
        { date: "1291", event: "Fall of Acre — last crusader stronghold" },
    ],
    "Mongol Conquests": [
        { date: "1206", event: "Genghis Khan unites the Mongol tribes" },
        { date: "1219", event: "Invasion of Khwarezmia — cities obliterated" },
        { date: "1227", event: "Genghis Khan dies — empire divided among sons" },
        { date: "1241", event: "Mongols defeat European armies in Poland and Hungary" },
        { date: "1258", event: "Mongols sack Baghdad — end of the Abbasid Caliphate" },
        { date: "1279", event: "Kublai Khan conquers China — Yuan Dynasty" },
    ],
    "French Revolution & Revolutionary Wars": [
        { date: "Jul 1789", event: "Storming of the Bastille" },
        { date: "1792", event: "Monarchy abolished, Republic declared" },
        { date: "Jan 1793", event: "King Louis XVI executed by guillotine" },
        { date: "1793-94", event: "Reign of Terror — 17,000 executed" },
        { date: "1799", event: "Napoleon seizes power" },
    ],
    "Bosnian War": [
        { date: "1992", event: "Bosnia declares independence, Serbs begin siege of Sarajevo" },
        { date: "1992-95", event: "Siege of Sarajevo — longest siege in modern warfare" },
        { date: "Jul 1995", event: "Srebrenica massacre — 8,000 Muslim men and boys killed" },
        { date: "Aug 1995", event: "NATO airstrikes against Serb positions" },
        { date: "Dec 1995", event: "Dayton Accords end the war" },
    ],
    "Peloponnesian War": [
        { date: "431 BC", event: "War begins — Sparta invades Attica" },
        { date: "430 BC", event: "Plague of Athens kills Pericles and a quarter of the population" },
        { date: "415 BC", event: "Athens invades Sicily — total disaster" },
        { date: "405 BC", event: "Sparta destroys Athenian fleet at Aegospotami" },
        { date: "404 BC", event: "Athens surrenders — Sparta dominant" },
    ],
    "Mexican Revolution": [
        { date: "1910", event: "Francisco Madero calls for revolution against Díaz" },
        { date: "1911", event: "Díaz resigns and flees — Madero becomes president" },
        { date: "1913", event: "Madero assassinated in military coup" },
        { date: "1914", event: "Zapata and Villa fight both the government and each other" },
        { date: "1917", event: "New constitution written — still in effect today" },
        { date: "1920", event: "Fighting largely ends, revolution institutionalized" },
    ],
};

// Related historical conflicts
const RELATED_CONFLICTS_HIST = {
    "World War II - Europe": ["World War II - Pacific", "World War I", "Bosnian War", "Holodomor (Ukraine Famine)"],
    "World War II - Pacific": ["World War II - Europe", "Sino-Japanese Wars", "Korean War", "Vietnam War"],
    "World War I": ["World War II - Europe", "Armenian Genocide", "Russian Civil War", "Napoleonic Wars"],
    "Vietnam War": ["Korean War", "First Indochina War", "Cambodian Genocide", "Soviet-Afghan War"],
    "Korean War": ["Vietnam War", "World War II - Pacific", "Chinese Civil War"],
    "American Revolution": ["French Revolution & Revolutionary Wars", "Haitian Revolution", "Seven Years' War", "French and Indian War"],
    "Rwandan Genocide": ["Congo Wars", "Rwandan Civil War", "Darfur Conflict", "Bosnian War"],
    "Napoleonic Wars": ["French Revolution & Revolutionary Wars", "World War I", "War of 1812", "Haitian Revolution"],
    "American Civil War": ["Mexican-American War", "Trail of Tears", "Seminole Wars", "American Revolution"],
    "Crusades": ["Reconquista", "Albigensian Crusade", "Siege of Constantinople", "Islamic Conquests"],
    "Mongol Conquests": ["Genghis Khan's Invasion of Khwarezmia", "Conquests of Timur (Tamerlane)", "An Lushan Rebellion"],
    "Bosnian War": ["Yugoslav Wars", "World War II - Europe", "Kosovo - Serbia"],
    "Soviet-Afghan War": ["War in Afghanistan (US)", "Vietnam War", "Chechen Wars"],
    "Iraq War": ["Gulf War", "War in Afghanistan (US)", "Syrian Civil War"],
    "Peloponnesian War": ["Greco-Persian Wars", "Sicilian Expedition (Athens)", "Corinthian War", "Theban-Spartan Wars"],
    "Punic Wars": ["Destruction of Carthage", "Roman Civil Wars", "Gallic Wars (Caesar)", "Pyrrhic Wars"],
    "French Revolution & Revolutionary Wars": ["Napoleonic Wars", "American Revolution", "Haitian Revolution"],
    "Armenian Genocide": ["Greek Genocide (Pontian)", "Assyrian Genocide (Seyfo)", "World War I"],
    "Greek Genocide (Pontian)": ["Armenian Genocide", "Assyrian Genocide (Seyfo)", "Greco-Turkish War"],
    "Assyrian Genocide (Seyfo)": ["Armenian Genocide", "Greek Genocide (Pontian)", "World War I"],
    "Holodomor (Ukraine Famine)": ["World War II - Europe", "Russian Civil War", "Chinese Civil War"],
    "Congo Free State Atrocities": ["Herero & Nama Genocide", "Maji Maji Rebellion", "Rwandan Genocide"],
    "Battle of Thermopylae": ["Battle of Marathon", "Battle of Salamis", "Greco-Persian Wars"],
    "Battle of Marathon": ["Battle of Thermopylae", "Battle of Salamis", "Greco-Persian Wars"],
    "Battle of Salamis": ["Battle of Thermopylae", "Battle of Marathon", "Greco-Persian Wars"],
    "Greco-Persian Wars": ["Battle of Marathon", "Battle of Thermopylae", "Battle of Salamis", "Peloponnesian War"],
    "Roman Civil Wars": ["Punic Wars", "Gallic Wars (Caesar)", "Spartacus Slave Revolt", "Fall of the Roman Empire"],
    "Fall of the Roman Empire": ["Sack of Rome by Visigoths", "Hunnic Invasions", "Roman Civil Wars"],
    "Taiping Rebellion": ["Dungan Revolt", "Nien Rebellion", "Opium Wars", "Boxer Rebellion"],
    "Mexican Revolution": ["Cristero War", "Mexican-American War", "Texas Revolution"],
    "Haitian Revolution": ["French Revolution & Revolutionary Wars", "American Revolution", "Slave Trade & Middle Passage"],
    "War in Afghanistan (US)": ["Soviet-Afghan War", "Iraq War", "Vietnam War"],
    "Yugoslav Wars": ["Bosnian War", "World War II - Europe"],
    "Chechen Wars": ["Soviet-Afghan War", "Russian Civil War"],
    "Spanish Civil War": ["World War II - Europe", "Napoleonic Wars"],
    "Chinese Civil War": ["World War II - Pacific", "Korean War", "Taiping Rebellion"],
    "Falklands War": ["Falkland Islands"],
    "Gulf War": ["Iraq War", "Iran-Iraq War"],
    "Iran-Iraq War": ["Gulf War", "Islamic Conquests"],
    "Sri Lankan Civil War": ["Partition of India", "Indo-Pakistani Wars"],
    "Angolan Civil War": ["Mozambican Civil War", "South African Border War", "Rhodesian Bush War"],
    "Cambodian Genocide": ["Vietnam War", "Cambodian-Vietnamese War"],
    "Lebanese Civil War": ["Crusades", "Syrian Civil War"],
    "Somali Civil War": ["Ethiopian-Eritrean War", "Rwandan Genocide"],
    "Bronze Age Collapse": ["Sea Peoples Invasion", "Trojan War", "Hittite-Egyptian Rivalry"],
    "Sea Peoples Invasion": ["Bronze Age Collapse", "Trojan War"],
    "Norman Conquest of England": ["Viking Invasions", "Hundred Years' War"],
    "Viking Invasions": ["Norman Conquest of England", "Anglo-Dutch Wars"],
    "Hundred Years' War": ["Wars of the Roses", "Norman Conquest of England", "Reconquista"],
    "Thirty Years' War": ["Eighty Years' War (Dutch Revolt)", "English Civil War", "Hussite Wars"],
    "Seven Years' War": ["French and Indian War", "American Revolution", "War of Austrian Succession"],
    "French and Indian War": ["Seven Years' War", "American Revolution", "Pontiac's War"],
};
