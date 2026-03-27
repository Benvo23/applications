// Historical conflicts data
const HISTORICAL_REGIONS = [
    {
        name: "World War II - Europe",
        lat: 50.1,
        lng: 14.4,
        years: "1939–1945",
        summary: "The deadliest conflict in human history. Nazi Germany's invasion of Poland triggered a global war across Europe, North Africa, and the Pacific. Over 70 million killed.",
        keywords: "World War II Europe history",
        category: "World War",
        casualties: "70+ million"
    },
    {
        name: "World War II - Pacific",
        lat: 20.0,
        lng: 140.0,
        years: "1941–1945",
        summary: "War in the Pacific theater between the Allied powers and Imperial Japan. Ended with the atomic bombings of Hiroshima and Nagasaki.",
        keywords: "World War II Pacific Japan history",
        category: "World War",
        casualties: "30+ million"
    },
    {
        name: "World War I",
        lat: 49.0,
        lng: 5.5,
        years: "1914–1918",
        summary: "The Great War — trench warfare across Western Europe, Ottoman campaigns, and the collapse of four empires. Introduced chemical warfare and modern mechanized combat.",
        keywords: "World War I history Western Front",
        category: "World War",
        casualties: "20 million"
    },
    {
        name: "Korean War",
        lat: 38.0,
        lng: 127.5,
        years: "1950–1953",
        summary: "Cold War proxy conflict between North Korea (backed by China and USSR) and South Korea (backed by the US and UN). Ended in armistice, not a peace treaty — technically still ongoing.",
        keywords: "Korean War history 1950",
        category: "Cold War Conflict",
        casualties: "3–5 million"
    },
    {
        name: "Vietnam War",
        lat: 16.0,
        lng: 108.0,
        years: "1955–1975",
        summary: "Prolonged conflict between communist North Vietnam and US-backed South Vietnam. Massive aerial bombing campaigns and guerrilla warfare. Ended with the fall of Saigon.",
        keywords: "Vietnam War history",
        category: "Cold War Conflict",
        casualties: "3.5 million"
    },
    {
        name: "Soviet-Afghan War",
        lat: 34.5,
        lng: 69.2,
        years: "1979–1989",
        summary: "Soviet Union's military intervention in Afghanistan against Mujahideen rebels. Often called the Soviet Union's 'Vietnam.' Led to Soviet withdrawal and eventual collapse.",
        keywords: "Soviet Afghan War history 1979",
        category: "Cold War Conflict",
        casualties: "2 million"
    },
    {
        name: "Rwandan Genocide",
        lat: -1.9,
        lng: 29.9,
        years: "1994",
        summary: "Approximately 800,000 Tutsi and moderate Hutu killed in 100 days by Hutu extremists. One of the fastest genocides in history. International community failed to intervene.",
        keywords: "Rwanda genocide 1994 history",
        category: "Genocide",
        casualties: "800,000"
    },
    {
        name: "Bosnian War",
        lat: 43.9,
        lng: 18.4,
        years: "1992–1995",
        summary: "Ethnic conflict during the breakup of Yugoslavia. Siege of Sarajevo, Srebrenica massacre, and widespread ethnic cleansing. NATO intervention eventually ended the war.",
        keywords: "Bosnian War Srebrenica Yugoslavia history",
        category: "Ethnic Conflict",
        casualties: "100,000"
    },
    {
        name: "Gulf War",
        lat: 29.3,
        lng: 47.5,
        years: "1990–1991",
        summary: "US-led coalition expelled Iraqi forces from Kuwait after Saddam Hussein's invasion. Operation Desert Storm showcased precision-guided munitions and modern air warfare.",
        keywords: "Gulf War Desert Storm Kuwait Iraq history",
        category: "Interstate War",
        casualties: "25,000–50,000"
    },
    {
        name: "Iraq War",
        lat: 33.3,
        lng: 44.4,
        years: "2003–2011",
        summary: "US-led invasion toppled Saddam Hussein's regime. Prolonged insurgency, sectarian violence, and rise of ISIS followed. Destabilized the entire Middle East region.",
        keywords: "Iraq War 2003 history invasion",
        category: "Invasion & Insurgency",
        casualties: "500,000+"
    },
    {
        name: "Falklands War",
        lat: -51.8,
        lng: -59.5,
        years: "1982",
        summary: "Argentina invaded the British-held Falkland Islands. Britain launched a naval task force and recaptured the islands in 74 days. Argentina's junta fell shortly after.",
        keywords: "Falklands War 1982 Britain Argentina history",
        category: "Interstate War",
        casualties: "900"
    },
    {
        name: "Cambodian Genocide",
        lat: 11.6,
        lng: 104.9,
        years: "1975–1979",
        summary: "Khmer Rouge regime under Pol Pot killed an estimated 2 million Cambodians through execution, forced labor, and starvation. One of the worst genocides of the 20th century.",
        keywords: "Cambodia genocide Khmer Rouge Pol Pot history",
        category: "Genocide",
        casualties: "2 million"
    },
    {
        name: "The Troubles - Northern Ireland",
        lat: 54.6,
        lng: -5.9,
        years: "1968–1998",
        summary: "Ethno-nationalist conflict between unionists (Protestant, pro-British) and nationalists (Catholic, pro-Irish). Bombings, assassinations, and British military deployment. Ended with the Good Friday Agreement.",
        keywords: "Northern Ireland Troubles IRA history",
        category: "Ethno-Nationalist Conflict",
        casualties: "3,500"
    },
    {
        name: "Six-Day War",
        lat: 31.0,
        lng: 34.8,
        years: "1967",
        summary: "Israel fought Egypt, Jordan, and Syria in a rapid six-day conflict. Israel captured the Sinai, Gaza, West Bank, Golan Heights, and East Jerusalem. Reshaped the Middle East.",
        keywords: "Six Day War 1967 Israel history",
        category: "Interstate War",
        casualties: "20,000"
    },
    {
        name: "Yom Kippur War",
        lat: 30.5,
        lng: 33.5,
        years: "1973",
        summary: "Egypt and Syria launched a surprise attack on Israel during Yom Kippur. Initial Arab advances reversed by Israeli counteroffensives. Led to the Camp David Accords.",
        keywords: "Yom Kippur War 1973 Israel Egypt history",
        category: "Interstate War",
        casualties: "18,000"
    },
    {
        name: "Algerian War of Independence",
        lat: 36.7,
        lng: 3.1,
        years: "1954–1962",
        summary: "Brutal independence war against French colonial rule. Guerrilla warfare, terrorism, and French military operations. Algeria gained independence; over a million Europeans fled.",
        keywords: "Algeria independence war France history",
        category: "Independence War",
        casualties: "1.5 million"
    },
    {
        name: "Sri Lankan Civil War",
        lat: 7.9,
        lng: 80.8,
        years: "1983–2009",
        summary: "Conflict between the Sri Lankan government and Tamil Tiger (LTTE) separatists. Suicide bombings, military offensives, and a brutal endgame in 2009 with heavy civilian casualties.",
        keywords: "Sri Lanka civil war Tamil Tigers LTTE history",
        category: "Civil War",
        casualties: "100,000+"
    },
    {
        name: "Chechen Wars",
        lat: 43.3,
        lng: 45.7,
        years: "1994–2009",
        summary: "Two wars between Russia and Chechen separatists. Devastating destruction of Grozny, terrorism including the Beslan school siege, and eventual installation of Kadyrov regime.",
        keywords: "Chechnya war Russia Grozny history",
        category: "Separatist War",
        casualties: "200,000+"
    },
    {
        name: "Darfur Conflict",
        lat: 13.5,
        lng: 25.0,
        years: "2003–2020",
        summary: "Genocide and ethnic cleansing in western Sudan by government-backed Janjaweed militias against non-Arab populations. ICC warrants issued for Sudanese president Omar al-Bashir.",
        keywords: "Darfur genocide Sudan history",
        category: "Genocide",
        casualties: "300,000+"
    },
    {
        name: "Congo Wars",
        lat: -4.3,
        lng: 23.0,
        years: "1996–2003",
        summary: "Two devastating wars in the DRC involving nine African nations. Called 'Africa's World War.' Driven by ethnic tensions, resource exploitation, and spillover from the Rwandan genocide.",
        keywords: "Congo war Africa history DRC",
        category: "Continental War",
        casualties: "5.4 million"
    },
    {
        name: "Iran-Iraq War",
        lat: 32.0,
        lng: 48.0,
        years: "1980–1988",
        summary: "Eight-year war of attrition between Iran and Iraq. Chemical weapons used extensively. Trench warfare reminiscent of WWI. Neither side achieved its war aims.",
        keywords: "Iran Iraq war 1980 history",
        category: "Interstate War",
        casualties: "1 million+"
    },
    {
        name: "Chinese Civil War",
        lat: 34.3,
        lng: 108.9,
        years: "1927–1949",
        summary: "Conflict between Mao Zedong's Communists and Chiang Kai-shek's Nationalists. Interrupted by WWII, then resumed. Communists won; Nationalists fled to Taiwan.",
        keywords: "Chinese Civil War Mao history",
        category: "Civil War",
        casualties: "8 million"
    },
    {
        name: "Spanish Civil War",
        lat: 40.4,
        lng: -3.7,
        years: "1936–1939",
        summary: "Nationalist forces under Franco defeated the Republican government. A prelude to WWII with German and Italian intervention. Guernica bombing became a symbol of war's horror.",
        keywords: "Spanish Civil War Franco history",
        category: "Civil War",
        casualties: "500,000"
    },
    {
        name: "Yugoslav Wars",
        lat: 44.8,
        lng: 20.5,
        years: "1991–2001",
        summary: "Series of wars during the breakup of Yugoslavia. Slovenia, Croatia, Bosnia, and Kosovo conflicts. Ethnic cleansing, siege of Sarajevo, NATO bombing of Serbia.",
        keywords: "Yugoslav Wars Kosovo Croatia history",
        category: "Ethnic Conflict",
        casualties: "140,000"
    },
    {
        name: "War in Afghanistan (US)",
        lat: 34.5,
        lng: 69.2,
        years: "2001–2021",
        summary: "America's longest war, launched after 9/11 to dismantle al-Qaeda and the Taliban. Taliban retook power as US withdrew in August 2021 in a chaotic evacuation.",
        keywords: "Afghanistan war US Taliban 2001 history",
        category: "War on Terror",
        casualties: "240,000+"
    },
    {
        name: "Napoleonic Wars",
        lat: 50.7,
        lng: 2.3,
        years: "1803–1815",
        summary: "Series of wars fought by Napoleon's French Empire against various European coalitions. Reshaped Europe's borders and spread revolutionary ideals. Ended at Waterloo.",
        keywords: "Napoleonic Wars Napoleon Waterloo history",
        category: "Continental War",
        casualties: "3.5–6 million"
    },
    {
        name: "American Civil War",
        lat: 37.7,
        lng: -79.4,
        years: "1861–1865",
        summary: "War between the Union (North) and Confederacy (South) over slavery and states' rights. Deadliest American conflict. Led to abolition of slavery and preservation of the Union.",
        keywords: "American Civil War history 1861",
        category: "Civil War",
        casualties: "750,000"
    },
    {
        name: "2011 Libyan Civil War",
        lat: 32.9,
        lng: 13.2,
        years: "2011",
        summary: "NATO-backed uprising against Muammar Gaddafi's regime during the Arab Spring. Gaddafi was captured and killed. Libya has been fractured and unstable ever since.",
        keywords: "Libya civil war Gaddafi 2011 history",
        category: "Civil War",
        casualties: "30,000+"
    },
    {
        name: "Ethiopian-Eritrean War",
        lat: 15.3,
        lng: 39.0,
        years: "1998–2000",
        summary: "Border war between Ethiopia and Eritrea over the town of Badme. Trench warfare with massive casualties on both sides over a barren stretch of land.",
        keywords: "Ethiopia Eritrea war 1998 history",
        category: "Border War",
        casualties: "100,000"
    },
    {
        name: "Angolan Civil War",
        lat: -8.8,
        lng: 13.2,
        years: "1975–2002",
        summary: "Cold War proxy conflict between the MPLA (Soviet/Cuban-backed) and UNITA (US/South Africa-backed). 27 years of devastation in one of Africa's longest civil wars.",
        keywords: "Angola civil war MPLA UNITA history",
        category: "Civil War",
        casualties: "500,000+"
    },
    {
        name: "Russo-Japanese War",
        lat: 38.9,
        lng: 125.8,
        years: "1904–1905",
        summary: "First modern war where an Asian power defeated a European one. Fought over Manchuria and Korea. Japan's victory shocked the world and shifted the balance of power in East Asia.",
        keywords: "Russo Japanese War 1904 history",
        category: "Interstate War",
        casualties: "130,000"
    },
    {
        name: "Crimean War",
        lat: 44.6,
        lng: 33.5,
        years: "1853–1856",
        summary: "Britain, France, and the Ottoman Empire fought Russia over influence in the declining Ottoman Empire. Notable for the Charge of the Light Brigade and Florence Nightingale's nursing reforms.",
        keywords: "Crimean War history 1853",
        category: "Interstate War",
        casualties: "650,000"
    },
    {
        name: "Mexican Revolution",
        lat: 19.4,
        lng: -99.1,
        years: "1910–1920",
        summary: "Decade-long armed struggle that overthrew dictator Porfirio Díaz. Pancho Villa, Emiliano Zapata, and multiple factions fought for land reform and political power.",
        keywords: "Mexican Revolution Pancho Villa Zapata history",
        category: "Revolution",
        casualties: "1–2 million"
    },
    {
        name: "Biafran War (Nigeria)",
        lat: 6.5,
        lng: 7.5,
        years: "1967–1970",
        summary: "Southeastern Nigeria declared independence as Biafra. Federal forces blockaded the region causing mass starvation. One of the first televised humanitarian disasters.",
        keywords: "Biafra Nigeria civil war history",
        category: "Civil War",
        casualties: "1–3 million"
    },
    {
        name: "Mozambican Civil War",
        lat: -15.8,
        lng: 35.0,
        years: "1977–1992",
        summary: "RENAMO rebels backed by Rhodesia and South Africa fought the FRELIMO government. Brutal violence against civilians, landmines, and famine devastated the country.",
        keywords: "Mozambique civil war RENAMO history",
        category: "Civil War",
        casualties: "1 million"
    },
    {
        name: "Sierra Leone Civil War",
        lat: 8.5,
        lng: -11.8,
        years: "1991–2002",
        summary: "RUF rebels funded by 'blood diamonds' terrorized civilians with mass amputations and child soldiers. British intervention and UN peacekeeping eventually ended the war.",
        keywords: "Sierra Leone civil war blood diamonds RUF history",
        category: "Civil War",
        casualties: "70,000"
    },
    {
        name: "Greco-Turkish War",
        lat: 39.9,
        lng: 32.9,
        years: "1919–1922",
        summary: "Greece invaded Anatolia after WWI but was defeated by Turkish nationalist forces under Mustafa Kemal. Led to massive population exchanges and the Treaty of Lausanne.",
        keywords: "Greco Turkish War Ataturk history 1922",
        category: "Interstate War",
        casualties: "300,000+"
    },
    {
        name: "First Indochina War",
        lat: 21.0,
        lng: 105.8,
        years: "1946–1954",
        summary: "Viet Minh independence movement fought French colonial forces. French defeat at Dien Bien Phu ended the war and split Vietnam into North and South, setting the stage for the Vietnam War.",
        keywords: "First Indochina War Dien Bien Phu France Vietnam history",
        category: "Independence War",
        casualties: "500,000+"
    },
    {
        name: "Boer Wars",
        lat: -29.1,
        lng: 26.2,
        years: "1880–1902",
        summary: "Two wars between the British Empire and Boer republics in South Africa. Britain used scorched-earth tactics and concentration camps. Laid the groundwork for apartheid.",
        keywords: "Boer War South Africa British history",
        category: "Colonial War",
        casualties: "75,000+"
    },
    {
        name: "Taiping Rebellion",
        lat: 30.3,
        lng: 120.2,
        years: "1850–1864",
        summary: "Massive civil war in China led by Hong Xiuquan who claimed to be Jesus's brother. The deadliest civil war in history — more deaths than World War I.",
        keywords: "Taiping Rebellion China history",
        category: "Civil War",
        casualties: "20–30 million"
    },
    {
        name: "Partition of India",
        lat: 30.7,
        lng: 73.0,
        years: "1947",
        summary: "British India split into India and Pakistan along religious lines. Triggered the largest mass migration in history — 15 million displaced — and horrific communal violence.",
        keywords: "Partition India Pakistan 1947 history",
        category: "Partition Violence",
        casualties: "1–2 million"
    },
    {
        name: "Bangladesh Liberation War",
        lat: 23.8,
        lng: 90.4,
        years: "1971",
        summary: "East Pakistan fought for independence from West Pakistan. Pakistani military committed genocide. India intervened, and Bangladesh was born. One of the fastest genocides in history.",
        keywords: "Bangladesh liberation war 1971 Pakistan history",
        category: "Independence War",
        casualties: "3 million"
    },
    {
        name: "Lebanese Civil War",
        lat: 33.9,
        lng: 35.5,
        years: "1975–1990",
        summary: "Complex multi-faction conflict between Christian, Sunni, Shia, Druze, and Palestinian forces. Syrian and Israeli interventions. Beirut was devastated and the country never fully recovered.",
        keywords: "Lebanon civil war 1975 Beirut history",
        category: "Civil War",
        casualties: "120,000"
    },
    {
        name: "Somali Civil War",
        lat: 2.0,
        lng: 45.3,
        years: "1991–2012",
        summary: "Collapse of central government led to clan warfare, warlordism, and famine. 'Black Hawk Down' incident in 1993. Al-Shabaab emerged as a major insurgent force.",
        keywords: "Somalia civil war Black Hawk Down history",
        category: "Civil War",
        casualties: "500,000+"
    },
    {
        name: "Guatemalan Civil War",
        lat: 14.6,
        lng: -90.5,
        years: "1960–1996",
        summary: "36-year conflict between military governments and leftist rebels. Army committed genocide against Mayan indigenous populations. US-backed military regimes carried out widespread atrocities.",
        keywords: "Guatemala civil war genocide Maya history",
        category: "Civil War / Genocide",
        casualties: "200,000"
    },
    {
        name: "Salvadoran Civil War",
        lat: 13.7,
        lng: -89.2,
        years: "1979–1992",
        summary: "FMLN guerrillas fought the US-backed military government. Death squads, massacres of civilians, and assassination of Archbishop Romero. Ended with UN-brokered peace accords.",
        keywords: "El Salvador civil war FMLN history",
        category: "Civil War",
        casualties: "75,000"
    },
    {
        name: "Rhodesian Bush War",
        lat: -17.8,
        lng: 31.0,
        years: "1964–1979",
        summary: "Guerrilla war by black nationalist movements against white-minority Rhodesian government. Led to the creation of Zimbabwe under Robert Mugabe.",
        keywords: "Rhodesia Bush War Zimbabwe history",
        category: "Independence War",
        casualties: "30,000"
    },
    {
        name: "South African Border War",
        lat: -18.5,
        lng: 19.0,
        years: "1966–1990",
        summary: "Conflict in Namibia and Angola between South Africa and SWAPO/Cuban/MPLA forces. Part of the broader Cold War in Africa. Led to Namibian independence.",
        keywords: "South Africa border war Namibia Angola history",
        category: "Cold War Conflict",
        casualties: "30,000+"
    },
    {
        name: "Sino-Japanese Wars",
        lat: 37.5,
        lng: 121.0,
        years: "1894–1895 / 1937–1945",
        summary: "Two wars between China and Japan. The second, during WWII, included the Nanjing Massacre and Unit 731 biological warfare. Over 20 million Chinese killed.",
        keywords: "Sino Japanese War Nanjing massacre history",
        category: "Interstate War",
        casualties: "20+ million"
    },
    {
        name: "Russian Civil War",
        lat: 55.8,
        lng: 49.1,
        years: "1917–1922",
        summary: "Bolshevik Red Army fought the White Army and foreign interventionists after the Russian Revolution. Famine, terror, and chaos. Bolsheviks won, establishing the Soviet Union.",
        keywords: "Russian Civil War Bolshevik history 1917",
        category: "Civil War",
        casualties: "7–12 million"
    },
    {
        name: "Thirty Years' War",
        lat: 50.1,
        lng: 11.0,
        years: "1618–1648",
        summary: "Devastating religious and political conflict across Central Europe. Catholic and Protestant states fought alongside great power rivalries. Ended with the Peace of Westphalia.",
        keywords: "Thirty Years War Westphalia history",
        category: "Religious War",
        casualties: "8 million"
    },
    {
        name: "Crusades",
        lat: 31.8,
        lng: 35.2,
        years: "1095–1291",
        summary: "Series of religious wars sanctioned by the Latin Church to reclaim the Holy Land from Muslim rule. Multiple campaigns over two centuries reshaped Europe and the Middle East.",
        keywords: "Crusades Jerusalem Holy Land history",
        category: "Religious War",
        casualties: "1–3 million"
    },
    {
        name: "Mongol Conquests",
        lat: 47.9,
        lng: 106.9,
        years: "1206–1368",
        summary: "Genghis Khan and his successors built the largest contiguous land empire in history. Campaigns across Asia, the Middle East, and Europe killed an estimated 40 million people.",
        keywords: "Mongol Empire Genghis Khan conquests history",
        category: "Imperial Conquest",
        casualties: "40 million"
    },
    {
        name: "Colombian La Violencia",
        lat: 4.6,
        lng: -74.1,
        years: "1948–1958",
        summary: "Period of extreme partisan violence between Liberal and Conservative parties in Colombia. Assassinations, massacres in rural areas, and urban riots. Precursor to the FARC insurgency.",
        keywords: "Colombia La Violencia history 1948",
        category: "Political Violence",
        casualties: "200,000–300,000"
    },
    {
        name: "Zulu Wars",
        lat: -28.5,
        lng: 30.5,
        years: "1879",
        summary: "British invasion of the Zulu Kingdom in South Africa. Zulu victory at Isandlwana shocked Britain before ultimate British conquest. End of Zulu independence.",
        keywords: "Zulu War Isandlwana Rorke's Drift history",
        category: "Colonial War",
        casualties: "15,000+"
    },
    {
        name: "First Sino-Japanese War",
        lat: 38.7,
        lng: 124.0,
        years: "1894–1895",
        summary: "Japan defeated Qing China over control of Korea. Marked Japan's emergence as a major military power and accelerated the decline of the Qing dynasty.",
        keywords: "First Sino Japanese War 1894 Korea history",
        category: "Interstate War",
        casualties: "50,000"
    },
    {
        name: "Suez Crisis",
        lat: 30.5,
        lng: 32.3,
        years: "1956",
        summary: "Britain, France, and Israel invaded Egypt after Nasser nationalized the Suez Canal. US and Soviet pressure forced withdrawal. Marked the end of British and French imperial power.",
        keywords: "Suez Crisis 1956 Egypt Nasser history",
        category: "Interstate War",
        casualties: "3,000"
    },
    {
        name: "Troubles in Colombia (FARC)",
        lat: 2.4,
        lng: -76.6,
        years: "1964–2016",
        summary: "Decades-long guerrilla war between FARC, ELN, paramilitaries, and the Colombian government. Drug trafficking fueled the conflict. 2016 peace deal ended FARC's armed struggle.",
        keywords: "Colombia FARC guerrilla war history",
        category: "Guerrilla War",
        casualties: "260,000"
    },
    {
        name: "Mau Mau Uprising",
        lat: -0.5,
        lng: 37.0,
        years: "1952–1960",
        summary: "Kenyan revolt against British colonial rule, primarily by the Kikuyu people. British forces used detention camps and collective punishment. Led to Kenyan independence in 1963.",
        keywords: "Mau Mau Kenya uprising British colonial history",
        category: "Independence Revolt",
        casualties: "30,000+"
    },
    {
        name: "Mexican-American War",
        lat: 25.7,
        lng: -100.3,
        years: "1846–1848",
        summary: "US invaded Mexico after the annexation of Texas. Mexico lost half its territory — California, Nevada, Utah, Arizona, New Mexico, and more — in the Treaty of Guadalupe Hidalgo.",
        keywords: "Mexican American War 1846 history",
        category: "Interstate War",
        casualties: "25,000"
    },
    {
        name: "War of the Pacific",
        lat: -23.6,
        lng: -70.4,
        years: "1879–1884",
        summary: "Chile fought Bolivia and Peru over nitrate-rich territories in the Atacama Desert. Chile won, Bolivia lost its coastline, and territorial grievances persist to this day.",
        keywords: "War Pacific Chile Bolivia Peru 1879 history",
        category: "Interstate War",
        casualties: "23,000"
    },
    {
        name: "Rwandan Civil War",
        lat: -2.5,
        lng: 29.3,
        years: "1990–1994",
        summary: "RPF invasion from Uganda led to civil war that culminated in the 1994 genocide. RPF ultimately took power under Paul Kagame, ending the genocide.",
        keywords: "Rwanda civil war RPF 1990 history",
        category: "Civil War",
        casualties: "800,000+"
    },
    {
        name: "Indo-Pakistani Wars",
        lat: 32.0,
        lng: 72.0,
        years: "1947–1999",
        summary: "Four wars between India and Pakistan over Kashmir and broader rivalry. The 1971 war led to Bangladesh's creation. Both nations became nuclear powers, raising the stakes permanently.",
        keywords: "India Pakistan wars Kashmir 1947 1971 history",
        category: "Interstate Wars",
        casualties: "100,000+"
    },
    {
        name: "Philippine-American War",
        lat: 14.6,
        lng: 121.0,
        years: "1899–1902",
        summary: "After helping defeat Spain, the US fought Filipino independence forces. Guerrilla warfare and brutal counterinsurgency. Established American colonial rule over the Philippines.",
        keywords: "Philippine American War 1899 history",
        category: "Colonial War",
        casualties: "200,000–1 million"
    },
    {
        name: "Boxer Rebellion",
        lat: 39.9,
        lng: 116.4,
        years: "1899–1901",
        summary: "Chinese anti-foreign, anti-Christian uprising. Eight-nation alliance invaded to relieve the siege of Beijing's diplomatic quarter. Humiliating defeat accelerated the fall of the Qing dynasty.",
        keywords: "Boxer Rebellion China 1900 history",
        category: "Uprising",
        casualties: "100,000+"
    },
    {
        name: "First Arab-Israeli War",
        lat: 31.8,
        lng: 34.8,
        years: "1948",
        summary: "Five Arab nations invaded the newly declared State of Israel. Israel survived and expanded beyond UN partition borders. 700,000 Palestinians displaced in the Nakba.",
        keywords: "1948 Arab Israeli War Nakba history",
        category: "Interstate War",
        casualties: "20,000+"
    },
    {
        name: "Liberian Civil Wars",
        lat: 6.3,
        lng: -10.8,
        years: "1989–2003",
        summary: "Two brutal civil wars with warlords like Charles Taylor using child soldiers. Extreme violence, cannibalism, and total state collapse. UN peacekeeping eventually stabilized the country.",
        keywords: "Liberia civil war Charles Taylor history",
        category: "Civil War",
        casualties: "250,000"
    },
    {
        name: "Opium Wars",
        lat: 23.1,
        lng: 113.3,
        years: "1839–1860",
        summary: "Two wars where Britain (and France) forced China to open trade ports and cede Hong Kong. Symbol of Western imperialism in Asia. Began China's 'Century of Humiliation.'",
        keywords: "Opium Wars China Britain Hong Kong history",
        category: "Colonial War",
        casualties: "50,000+"
    },
    // --- Ancient & Medieval ---
    {
        name: "Peloponnesian War",
        lat: 37.97,
        lng: 23.72,
        years: "431–404 BC",
        summary: "Athens vs Sparta for dominance of ancient Greece. Thucydides documented it as the first great work of political history. Athens fell, ending its golden age.",
        keywords: "Peloponnesian War Athens Sparta ancient Greece history",
        category: "Ancient War",
        casualties: "Unknown (tens of thousands)"
    },
    {
        name: "Punic Wars",
        lat: 36.8,
        lng: 10.2,
        years: "264–146 BC",
        summary: "Three wars between Rome and Carthage. Hannibal crossed the Alps with elephants. Rome ultimately destroyed Carthage completely, salting the earth. Rome became the Mediterranean superpower.",
        keywords: "Punic Wars Rome Carthage Hannibal history",
        category: "Ancient War",
        casualties: "1.5+ million"
    },
    {
        name: "Fall of the Roman Empire",
        lat: 41.9,
        lng: 12.5,
        years: "376–476",
        summary: "Barbarian invasions, internal decay, and economic collapse brought down the Western Roman Empire. The sack of Rome in 410 AD shocked the ancient world. Ushered in the Middle Ages.",
        keywords: "Fall Roman Empire barbarian invasions history",
        category: "Imperial Collapse",
        casualties: "Millions over decades"
    },
    {
        name: "Alexander the Great's Conquests",
        lat: 40.6,
        lng: 22.9,
        years: "334–323 BC",
        summary: "Macedonian king conquered the Persian Empire, Egypt, and reached India by age 30. Created one of history's largest empires. His death triggered wars among his generals that reshaped the ancient world.",
        keywords: "Alexander Great conquest Persia Macedonia history",
        category: "Imperial Conquest",
        casualties: "Unknown (hundreds of thousands)"
    },
    {
        name: "Hundred Years' War",
        lat: 48.1,
        lng: 1.2,
        years: "1337–1453",
        summary: "England vs France over the French throne. Joan of Arc turned the tide for France. Introduced longbows, cannons, and standing armies. Ended English claims to France.",
        keywords: "Hundred Years War England France Joan Arc history",
        category: "Dynastic War",
        casualties: "2.5–3.5 million"
    },
    {
        name: "Wars of the Roses",
        lat: 52.5,
        lng: -1.5,
        years: "1455–1487",
        summary: "English civil wars between the Houses of Lancaster and York for the throne. Brutal noble warfare. Ended when Henry Tudor won at Bosworth Field, founding the Tudor dynasty.",
        keywords: "Wars Roses Lancaster York Tudor England history",
        category: "Civil War",
        casualties: "50,000+"
    },
    {
        name: "Seven Years' War",
        lat: 52.5,
        lng: 13.4,
        years: "1756–1763",
        summary: "The first true 'world war' — fought across Europe, the Americas, Africa, and Asia. Britain emerged dominant, France lost Canada and India. Set the stage for the American Revolution.",
        keywords: "Seven Years War France Britain Prussia history",
        category: "World War",
        casualties: "1–2 million"
    },
    {
        name: "American Revolution",
        lat: 40.0,
        lng: -74.5,
        years: "1775–1783",
        summary: "Thirteen British colonies declared independence and fought for freedom. George Washington led the Continental Army. French alliance proved decisive. Created the United States of America and inspired revolutions worldwide.",
        keywords: "American Revolution independence 1776 Washington history",
        category: "Independence War",
        casualties: "70,000"
    },
    {
        name: "French and Indian War",
        lat: 44.5,
        lng: -73.5,
        years: "1754–1763",
        summary: "North American theater of the Seven Years' War. Britain and France fought for control of the continent with Native American allies on both sides. British victory expelled France from North America and planted seeds for the American Revolution.",
        keywords: "French Indian War colonial America Britain France history",
        category: "Colonial War",
        casualties: "25,000"
    },
    {
        name: "War of Austrian Succession",
        lat: 50.1,
        lng: 14.4,
        years: "1740–1748",
        summary: "European powers fought over Maria Theresa's right to the Habsburg throne. Prussia seized Silesia. Battles raged from Europe to India to North America (King George's War). Inconclusive peace set up the Seven Years' War.",
        keywords: "War Austrian Succession Maria Theresa Prussia history",
        category: "Dynastic War",
        casualties: "500,000"
    },
    {
        name: "King Philip's War",
        lat: 41.8,
        lng: -71.4,
        years: "1675–1678",
        summary: "Deadliest war in American colonial history relative to population. Wampanoag leader Metacom (King Philip) united tribes against New England colonists. Proportionally more deadly than the Civil War.",
        keywords: "King Philip War colonial New England Metacom history",
        category: "Colonial War",
        casualties: "5,000+"
    },
    {
        name: "Bacon's Rebellion",
        lat: 37.5,
        lng: -77.4,
        years: "1676",
        summary: "First armed rebellion in colonial America. Nathaniel Bacon led settlers against Virginia's governor over Native American policy. Burned Jamestown. Foreshadowed revolutionary tensions a century later.",
        keywords: "Bacon Rebellion Virginia colonial America history",
        category: "Rebellion",
        casualties: "Unknown"
    },
    {
        name: "Pontiac's War",
        lat: 42.3,
        lng: -83.0,
        years: "1763–1766",
        summary: "Native American coalition led by Ottawa chief Pontiac attacked British forts after the French and Indian War. Britain responded with the Royal Proclamation of 1763, restricting colonial expansion — angering colonists.",
        keywords: "Pontiac War Native American British colonial history",
        category: "Native Resistance",
        casualties: "5,000+"
    },
    {
        name: "Shays' Rebellion",
        lat: 42.3,
        lng: -72.6,
        years: "1786–1787",
        summary: "Debt-ridden farmers in Massachusetts revolted against state government. The rebellion exposed weaknesses of the Articles of Confederation and directly led to the Constitutional Convention.",
        keywords: "Shays Rebellion Massachusetts Constitution history",
        category: "Rebellion",
        casualties: "Minimal"
    },
    {
        name: "Whiskey Rebellion",
        lat: 40.4,
        lng: -80.0,
        years: "1794",
        summary: "Western Pennsylvania farmers revolted against federal whiskey tax. President Washington personally led 13,000 troops to crush it — the first test of federal authority under the new Constitution.",
        keywords: "Whiskey Rebellion Washington federal authority history",
        category: "Rebellion",
        casualties: "Minimal"
    },
    {
        name: "Barbary Wars",
        lat: 32.9,
        lng: 13.2,
        years: "1801–1815",
        summary: "Young United States fought North African Barbary pirates who demanded tribute. 'To the shores of Tripoli' — the Marines' first overseas engagement. Established American naval power.",
        keywords: "Barbary Wars Tripoli pirates Marines US history",
        category: "Naval War",
        casualties: "1,000+"
    },
    {
        name: "Quasi-War (US vs France)",
        lat: 19.0,
        lng: -69.0,
        years: "1798–1800",
        summary: "Undeclared naval war between the US and France in the Caribbean. France seized American merchant ships. Led to the creation of the US Navy and the Department of the Navy.",
        keywords: "Quasi War US France naval Caribbean history",
        category: "Naval War",
        casualties: "500+"
    },
    {
        name: "Seminole Wars",
        lat: 28.5,
        lng: -81.4,
        years: "1817–1858",
        summary: "Three wars between the US and the Seminole people in Florida. The costliest of the Indian Wars. Seminoles never formally surrendered — the 'unconquered people.' Osceola became a legendary resistance leader.",
        keywords: "Seminole Wars Florida Native American Osceola history",
        category: "Colonial War",
        casualties: "5,000+"
    },
    {
        name: "Trail of Tears",
        lat: 35.5,
        lng: -84.5,
        years: "1830–1850",
        summary: "Forced relocation of 60,000 Native Americans from southeastern US to Oklahoma. Thousands died of disease, starvation, and exposure during the march. Cherokee, Choctaw, Creek, Chickasaw, and Seminole nations devastated.",
        keywords: "Trail of Tears Native American removal Cherokee history",
        category: "Ethnic Cleansing",
        casualties: "15,000+"
    },
    {
        name: "Texas Revolution",
        lat: 29.4,
        lng: -98.5,
        years: "1835–1836",
        summary: "American settlers in Texas revolted against Mexico. The Alamo and Goliad became rallying cries. Sam Houston defeated Santa Anna at San Jacinto. Texas became an independent republic before joining the US.",
        keywords: "Texas Revolution Alamo San Jacinto Santa Anna history",
        category: "Independence War",
        casualties: "3,000+"
    },
    {
        name: "Siege of Constantinople",
        lat: 41.0,
        lng: 29.0,
        years: "1453",
        summary: "Ottoman Sultan Mehmed II conquered Constantinople using massive cannons, ending the 1,100-year Byzantine Empire. Renamed Istanbul. A turning point between the medieval and modern eras.",
        keywords: "Constantinople siege Ottoman Byzantine 1453 history",
        category: "Siege",
        casualties: "4,000+"
    },
    {
        name: "Viking Invasions",
        lat: 53.5,
        lng: -1.5,
        years: "793–1066",
        summary: "Norse raiders terrorized Europe for nearly 300 years. From the sack of Lindisfarne to the Norman Conquest. Vikings settled in Britain, France, Russia, and reached North America.",
        keywords: "Viking invasions Norse raids England history",
        category: "Raids & Conquest",
        casualties: "Unknown (widespread)"
    },
    {
        name: "Reconquista",
        lat: 37.4,
        lng: -3.8,
        years: "711–1492",
        summary: "Nearly 800 years of Christian kingdoms reclaiming the Iberian Peninsula from Moorish Muslim rule. Ended with the fall of Granada. Spain unified and launched the Age of Exploration.",
        keywords: "Reconquista Spain Moors Granada history",
        category: "Religious War",
        casualties: "Unknown (millions over centuries)"
    },
    // --- Early Modern ---
    {
        name: "English Civil War",
        lat: 52.2,
        lng: -1.0,
        years: "1642–1651",
        summary: "Parliament vs King Charles I over governance and religion. Charles was executed — the first European monarch publicly tried and beheaded. Oliver Cromwell ruled as Lord Protector.",
        keywords: "English Civil War Cromwell Charles history",
        category: "Civil War",
        casualties: "200,000"
    },
    {
        name: "French Revolution & Revolutionary Wars",
        lat: 48.9,
        lng: 2.35,
        years: "1789–1802",
        summary: "Overthrow of the French monarchy. The Reign of Terror, guillotine executions, and wars against European coalitions. Gave rise to Napoleon and reshaped the political order of Europe.",
        keywords: "French Revolution Reign Terror Napoleon history",
        category: "Revolution",
        casualties: "2+ million"
    },
    {
        name: "Haitian Revolution",
        lat: 19.0,
        lng: -72.3,
        years: "1791–1804",
        summary: "The only successful large-scale slave revolution in history. Enslaved Africans defeated Napoleon's army and established Haiti as the first free Black republic in the Western Hemisphere.",
        keywords: "Haitian Revolution slave revolt Toussaint history",
        category: "Revolution",
        casualties: "350,000"
    },
    {
        name: "Russo-Turkish Wars",
        lat: 43.2,
        lng: 28.0,
        years: "1568–1878",
        summary: "Twelve wars over three centuries between Russia and the Ottoman Empire for control of the Black Sea, the Balkans, and the Caucasus. Gradually weakened the Ottoman Empire.",
        keywords: "Russo Turkish Wars Ottoman Russia Balkans history",
        category: "Interstate Wars",
        casualties: "Millions over centuries"
    },
    {
        name: "War of 1812",
        lat: 43.7,
        lng: -79.4,
        years: "1812–1815",
        summary: "US invaded British-held Canada while Britain was fighting Napoleon. The White House was burned. Ended in stalemate but cemented Canadian identity and US-British peace.",
        keywords: "War 1812 US Britain Canada history",
        category: "Interstate War",
        casualties: "20,000"
    },
    // --- 20th Century additions ---
    {
        name: "Greek Civil War",
        lat: 39.6,
        lng: 21.4,
        years: "1946–1949",
        summary: "First proxy war of the Cold War. Communist guerrillas fought the Western-backed Greek government. The Truman Doctrine was created in response. Communists were defeated.",
        keywords: "Greek Civil War Cold War Truman Doctrine history",
        category: "Civil War",
        casualties: "158,000"
    },
    {
        name: "Chinese Invasion of Tibet",
        lat: 29.7,
        lng: 91.1,
        years: "1950–1959",
        summary: "China invaded and annexed Tibet, forcing the Dalai Lama into exile in 1959. Cultural suppression and resistance continue. One of the longest-running occupations.",
        keywords: "Tibet China invasion Dalai Lama history",
        category: "Invasion & Occupation",
        casualties: "100,000+"
    },
    {
        name: "Hungarian Revolution",
        lat: 47.5,
        lng: 19.0,
        years: "1956",
        summary: "Hungarians rose up against Soviet-imposed communist rule. The USSR crushed the uprising with tanks in weeks. 200,000 Hungarians fled as refugees. A defining Cold War moment.",
        keywords: "Hungarian Revolution 1956 Soviet Budapest history",
        category: "Uprising",
        casualties: "3,000"
    },
    {
        name: "Malayan Emergency",
        lat: 4.2,
        lng: 101.7,
        years: "1948–1960",
        summary: "British counter-insurgency against communist guerrillas in Malaya. Pioneered 'hearts and minds' strategy. One of the few successful Western counter-insurgencies of the Cold War.",
        keywords: "Malayan Emergency British communist guerrilla history",
        category: "Counter-Insurgency",
        casualties: "11,000"
    },
    {
        name: "Eritrean War of Independence",
        lat: 15.3,
        lng: 38.9,
        years: "1961–1991",
        summary: "30-year guerrilla war against Ethiopian rule. One of Africa's longest independence struggles. Eritrean fighters defeated a Soviet-backed Ethiopian army against all odds.",
        keywords: "Eritrea independence war Ethiopia history",
        category: "Independence War",
        casualties: "150,000+"
    },
    {
        name: "Troubles in Kashmir (1947–)",
        lat: 34.1,
        lng: 74.8,
        years: "1947–2004",
        summary: "Decades of insurgency, cross-border terrorism, and military operations in Indian-administered Kashmir. Multiple wars between India and Pakistan over the territory.",
        keywords: "Kashmir insurgency India Pakistan conflict history",
        category: "Insurgency",
        casualties: "70,000+"
    },
    {
        name: "Cambodian-Vietnamese War",
        lat: 11.6,
        lng: 104.9,
        years: "1978–1989",
        summary: "Vietnam invaded Cambodia and toppled the Khmer Rouge genocide regime. Installed a new government but faced international isolation and guerrilla resistance for a decade.",
        keywords: "Cambodia Vietnam war Khmer Rouge invasion history",
        category: "Interstate War",
        casualties: "100,000+"
    },
    {
        name: "Famine Wars of Bengal",
        lat: 22.6,
        lng: 88.4,
        years: "1769–1943",
        summary: "Multiple devastating famines under British rule, notably the 1943 Bengal Famine that killed 3 million while Britain exported food for the war effort. Churchill's response remains deeply controversial.",
        keywords: "Bengal famine British India Churchill 1943 history",
        category: "Colonial Violence",
        casualties: "10+ million (across all famines)"
    },
    {
        name: "Paraguayan War (War of Triple Alliance)",
        lat: -25.3,
        lng: -57.6,
        years: "1864–1870",
        summary: "Paraguay fought Brazil, Argentina, and Uruguay. The most destructive war in South American history. Paraguay lost up to 90% of its male population.",
        keywords: "Paraguayan War Triple Alliance South America history",
        category: "Interstate War",
        casualties: "400,000+"
    },
    {
        name: "Rwandan-Congolese Wars",
        lat: -1.5,
        lng: 29.0,
        years: "1996–2003",
        summary: "Spillover from the Rwandan genocide sparked two wars in Congo involving nine African nations. Often called Africa's World War. Deadliest conflict since WWII.",
        keywords: "Congo war Rwanda Africa World War history",
        category: "Continental War",
        casualties: "5.4 million"
    },
    {
        name: "Aztec-Spanish Conquest",
        lat: 19.4,
        lng: -99.1,
        years: "1519–1521",
        summary: "Hernán Cortés and a small band of conquistadors toppled the Aztec Empire with indigenous allies, superior weapons, and smallpox. Tenochtitlan was destroyed and rebuilt as Mexico City.",
        keywords: "Aztec conquest Cortés Spain Mexico history",
        category: "Colonial Conquest",
        casualties: "300,000+ (millions from disease)"
    },
    {
        name: "Inca-Spanish Conquest",
        lat: -13.5,
        lng: -72.0,
        years: "1532–1572",
        summary: "Francisco Pizarro captured Inca emperor Atahualpa with 168 men. Spanish conquered the largest empire in pre-Columbian America. Disease killed up to 90% of the indigenous population.",
        keywords: "Inca conquest Pizarro Spain Peru history",
        category: "Colonial Conquest",
        casualties: "Millions (mostly disease)"
    },
    {
        name: "Slave Trade & Middle Passage",
        lat: 6.5,
        lng: -2.0,
        years: "1500–1866",
        summary: "Transatlantic slave trade forcibly transported 12.5 million Africans to the Americas. Millions died during the Middle Passage. One of the greatest crimes in human history.",
        keywords: "slave trade Middle Passage Africa transatlantic history",
        category: "Systemic Violence",
        casualties: "12.5 million enslaved, millions died"
    },
    {
        name: "Zanj Rebellion",
        lat: 30.5,
        lng: 47.8,
        years: "869–883",
        summary: "Massive slave revolt in the Abbasid Caliphate near Basra. Enslaved East Africans established their own state for 14 years before being crushed. One of the largest slave revolts in history.",
        keywords: "Zanj Rebellion slave revolt Abbasid Basra history",
        category: "Slave Revolt",
        casualties: "500,000+"
    },
    {
        name: "An Lushan Rebellion",
        lat: 34.3,
        lng: 108.9,
        years: "755–763",
        summary: "General An Lushan revolted against the Tang Dynasty in China. One of the deadliest conflicts in human history — census data suggests a population drop of 36 million during the chaos.",
        keywords: "An Lushan Rebellion Tang Dynasty China history",
        category: "Civil War",
        casualties: "13–36 million"
    },
    {
        name: "Conquests of Timur (Tamerlane)",
        lat: 39.7,
        lng: 66.9,
        years: "1370–1405",
        summary: "Turco-Mongol conqueror Timur built an empire from Turkey to India. Known for extreme brutality — building towers of skulls at conquered cities. Killed an estimated 5% of the world's population.",
        keywords: "Timur Tamerlane conquest empire history",
        category: "Imperial Conquest",
        casualties: "17 million"
    },
    {
        name: "Manchu Conquest of China",
        lat: 39.9,
        lng: 116.4,
        years: "1618–1683",
        summary: "Manchu forces conquered Ming Dynasty China and established the Qing Dynasty. Decades of warfare, mass killings, and forced haircutting edicts. China's last imperial dynasty.",
        keywords: "Manchu conquest Ming Qing Dynasty China history",
        category: "Imperial Conquest",
        casualties: "25 million"
    },
    {
        name: "Greco-Persian Wars",
        lat: 38.0,
        lng: 24.0,
        years: "499–449 BC",
        summary: "Greek city-states united against the Persian Empire's invasions. Marathon, Thermopylae, and Salamis became legendary battles. Greek victory preserved Western civilization's foundations.",
        keywords: "Greco Persian Wars Marathon Thermopylae Sparta history",
        category: "Ancient War",
        casualties: "300,000+"
    },
    // --- Pre-American Revolution Wars & Ancient Tensions ---
    {
        name: "Jacobite Risings",
        lat: 56.8,
        lng: -5.1,
        years: "1688–1746",
        summary: "Series of uprisings in Britain to restore the Stuart dynasty. Culminated in the Battle of Culloden in 1746 — the last pitched battle on British soil. Highland way of life was destroyed afterward.",
        keywords: "Jacobite Rising Culloden Scotland Stuart history",
        category: "Civil War",
        casualties: "30,000+"
    },
    {
        name: "War of Spanish Succession",
        lat: 40.4,
        lng: -3.7,
        years: "1701–1714",
        summary: "European powers fought to prevent French Bourbon dominance after the Spanish king died without an heir. Britain gained Gibraltar. Reshaped the European balance of power.",
        keywords: "War Spanish Succession Britain France Bourbon history",
        category: "Dynastic War",
        casualties: "700,000"
    },
    {
        name: "Great Northern War",
        lat: 59.3,
        lng: 18.1,
        years: "1700–1721",
        summary: "Sweden under Charles XII fought Russia under Peter the Great for Baltic supremacy. Russia's victory at Poltava marked the rise of the Russian Empire and the end of Swedish dominance.",
        keywords: "Great Northern War Sweden Russia Peter Great history",
        category: "Interstate War",
        casualties: "350,000"
    },
    {
        name: "Nine Years' War (King William's War)",
        lat: 49.0,
        lng: 2.5,
        years: "1688–1697",
        summary: "Grand Alliance vs Louis XIV's France across Europe and the colonies. First truly global conflict involving fighting in North America, the Caribbean, India, and Europe simultaneously.",
        keywords: "Nine Years War King William War Louis XIV history",
        category: "World War",
        casualties: "700,000"
    },
    {
        name: "Queen Anne's War",
        lat: 44.6,
        lng: -63.6,
        years: "1702–1713",
        summary: "North American theater of the War of Spanish Succession. British and French colonists with Native allies fought across New England, Acadia, and the Caribbean. Britain gained Nova Scotia.",
        keywords: "Queen Anne War colonial America French British history",
        category: "Colonial War",
        casualties: "10,000+"
    },
    {
        name: "Anglo-Dutch Wars",
        lat: 52.4,
        lng: 4.9,
        years: "1652–1674",
        summary: "Three naval wars between England and the Dutch Republic for control of global trade routes. Some of the largest naval battles in history. England gained New Amsterdam (New York).",
        keywords: "Anglo Dutch Wars naval trade England Netherlands history",
        category: "Naval War",
        casualties: "50,000+"
    },
    {
        name: "Ottoman-Hapsburg Wars",
        lat: 47.5,
        lng: 19.0,
        years: "1526–1718",
        summary: "Two centuries of conflict between the Ottoman Empire and the Hapsburg dynasty. The siege of Vienna in 1683 marked the turning point. Ottoman expansion into Europe was permanently halted.",
        keywords: "Ottoman Hapsburg Wars Vienna siege history",
        category: "Imperial War",
        casualties: "Hundreds of thousands"
    },
    {
        name: "Eighty Years' War (Dutch Revolt)",
        lat: 52.1,
        lng: 5.1,
        years: "1568–1648",
        summary: "The Dutch provinces revolted against Spanish Hapsburg rule. William the Silent led the resistance. Created the Dutch Republic, which became a global trading superpower.",
        keywords: "Eighty Years War Dutch Revolt Spain Netherlands history",
        category: "Independence War",
        casualties: "100,000+"
    },
    {
        name: "Mughal Conquests of India",
        lat: 28.6,
        lng: 77.2,
        years: "1526–1707",
        summary: "Babur founded the Mughal Empire at the Battle of Panipat. His descendants conquered most of the Indian subcontinent. Built the Taj Mahal. Empire collapsed after Aurangzeb's death.",
        keywords: "Mughal Empire India Babur conquest history",
        category: "Imperial Conquest",
        casualties: "Millions over centuries"
    },
    {
        name: "Sengoku Period (Japan)",
        lat: 35.0,
        lng: 136.9,
        years: "1467–1615",
        summary: "Nearly 150 years of civil war across Japan. Samurai warlords fought for supremacy. Oda Nobunaga, Toyotomi Hideyoshi, and Tokugawa Ieyasu unified Japan. Age of the samurai.",
        keywords: "Sengoku period Japan samurai civil war history",
        category: "Civil War",
        casualties: "Unknown (widespread)"
    },
    {
        name: "Fall of the Aztec & Maya",
        lat: 17.2,
        lng: -89.6,
        years: "1519–1697",
        summary: "Spanish conquest of Mesoamerican civilizations over nearly two centuries. The last Maya kingdom, Nojpetén, fell in 1697. Disease killed up to 90% of indigenous populations.",
        keywords: "Aztec Maya conquest Spain Mesoamerica history",
        category: "Colonial Conquest",
        casualties: "Tens of millions (disease)"
    },
    {
        name: "Portuguese Colonial Wars (Africa/Asia)",
        lat: 38.7,
        lng: -9.1,
        years: "1500–1700",
        summary: "Portugal built the first global maritime empire. Conquered territories in Brazil, Angola, Mozambique, Goa, Malacca, and the Spice Islands. Brutality and the slave trade defined the era.",
        keywords: "Portuguese colonial empire Africa Asia conquest history",
        category: "Colonial War",
        casualties: "Millions"
    },
    {
        name: "Trojan War",
        lat: 39.9,
        lng: 26.2,
        years: "~1250 BC",
        summary: "Legendary war between Greeks and Trojans, immortalized in Homer's Iliad. Whether myth or history, it shaped Western civilization's storytelling. The Trojan Horse remains one of history's greatest deceptions.",
        keywords: "Trojan War Homer Iliad Troy ancient history",
        category: "Ancient/Legendary War",
        casualties: "Unknown"
    },
    {
        name: "Warring States Period (China)",
        lat: 34.8,
        lng: 113.7,
        years: "475–221 BC",
        summary: "Seven major Chinese states fought for dominance for 250 years. Sun Tzu wrote The Art of War. Ended when Qin Shi Huang unified China and built the Great Wall. Birth of imperial China.",
        keywords: "Warring States China Qin dynasty Sun Tzu history",
        category: "Civil War",
        casualties: "Millions"
    },
    {
        name: "Wars of the Diadochi",
        lat: 31.2,
        lng: 29.9,
        years: "322–281 BC",
        summary: "Alexander the Great's generals fought over his empire after his death. The wars split his conquests into the Ptolemaic (Egypt), Seleucid (Persia), and Antigonid (Greece) kingdoms.",
        keywords: "Wars Diadochi Alexander successors Ptolemy Seleucid history",
        category: "Succession War",
        casualties: "Unknown (tens of thousands)"
    },
    {
        name: "Roman Civil Wars",
        lat: 41.9,
        lng: 12.5,
        years: "88–30 BC",
        summary: "Series of civil wars that destroyed the Roman Republic. Caesar crossed the Rubicon, was assassinated. Octavian defeated Antony and Cleopatra. The Republic became the Roman Empire.",
        keywords: "Roman Civil War Caesar Augustus Cleopatra history",
        category: "Civil War",
        casualties: "Hundreds of thousands"
    },
    {
        name: "Jewish-Roman Wars",
        lat: 31.8,
        lng: 35.2,
        years: "66–135 AD",
        summary: "Three major revolts by Jews against Roman rule. Jerusalem and the Second Temple were destroyed in 70 AD. The Bar Kokhba revolt led to mass exile — the Jewish diaspora.",
        keywords: "Jewish Roman Wars Jerusalem Temple destruction diaspora history",
        category: "Independence War",
        casualties: "1+ million"
    },
    {
        name: "Hunnic Invasions",
        lat: 47.5,
        lng: 19.0,
        years: "370–469 AD",
        summary: "Attila the Hun terrorized both the Roman and Persian empires. 'The Scourge of God' pushed Germanic tribes into Roman territory, accelerating the fall of Rome. His empire collapsed after his death.",
        keywords: "Attila Hun invasions Roman Empire history",
        category: "Imperial Conquest",
        casualties: "Unknown (widespread)"
    },
    {
        name: "Islamic Conquests",
        lat: 24.5,
        lng: 39.6,
        years: "632–750 AD",
        summary: "After Muhammad's death, Arab armies conquered the Persian Empire, most of the Byzantine Empire, North Africa, and Spain within a century. One of the most rapid expansions in history.",
        keywords: "Islamic Arab conquests caliphate expansion history",
        category: "Imperial Conquest",
        casualties: "Unknown (millions)"
    },
    {
        name: "Gallic Wars (Caesar)",
        lat: 47.3,
        lng: 2.3,
        years: "58–50 BC",
        summary: "Julius Caesar conquered Gaul (modern France) in a brutal eight-year campaign. An estimated one million Gauls killed and another million enslaved. Caesar wrote his own account, still read today.",
        keywords: "Gallic Wars Julius Caesar Gaul France Roman history",
        category: "Imperial Conquest",
        casualties: "1+ million"
    },
    {
        name: "Spartacus Slave Revolt",
        lat: 40.8,
        lng: 14.3,
        years: "73–71 BC",
        summary: "Gladiator Spartacus led 70,000 escaped slaves against Rome. Won multiple battles before being crushed by Crassus. 6,000 captured slaves were crucified along the Appian Way.",
        keywords: "Spartacus slave revolt Rome gladiator history",
        category: "Slave Revolt",
        casualties: "100,000+"
    },
    {
        name: "Sack of Rome by Visigoths",
        lat: 41.9,
        lng: 12.5,
        years: "410 AD",
        summary: "Alaric and the Visigoths sacked Rome for the first time in 800 years. The Eternal City fell in three days. Shook the foundations of the Western world and signaled the end of an era.",
        keywords: "Sack Rome Visigoths Alaric 410 AD history",
        category: "Siege & Sack",
        casualties: "Unknown"
    },
    {
        name: "Norman Conquest of England",
        lat: 50.9,
        lng: 0.5,
        years: "1066",
        summary: "William the Conqueror defeated Harold at the Battle of Hastings. Completely transformed England — new ruling class, language, architecture, and the Domesday Book. One of history's most consequential invasions.",
        keywords: "Norman Conquest Hastings 1066 William Conqueror history",
        category: "Invasion",
        casualties: "10,000+"
    },
    {
        name: "Genghis Khan's Invasion of Khwarezmia",
        lat: 39.6,
        lng: 64.4,
        years: "1219–1221",
        summary: "After the Khwarezmian Shah killed Mongol ambassadors, Genghis Khan unleashed total war. Cities like Samarkand, Bukhara, and Merv were obliterated. Possibly the most destructive campaign in history.",
        keywords: "Genghis Khan Khwarezmia Mongol invasion destruction history",
        category: "Imperial Conquest",
        casualties: "2–5 million"
    },
    {
        name: "Black Death / Societal Collapse",
        lat: 45.4,
        lng: 12.3,
        years: "1347–1353",
        summary: "Bubonic plague killed 30–60% of Europe's population. Arrived via Mongol trade routes. Triggered peasant revolts, labor shortages, and the collapse of feudalism. Changed the course of civilization.",
        keywords: "Black Death plague pandemic medieval Europe history",
        category: "Pandemic & Upheaval",
        casualties: "75–200 million"
    },
    {
        name: "Fall of the Inca Empire",
        lat: -13.5,
        lng: -72.0,
        years: "1532–1572",
        summary: "Francisco Pizarro captured emperor Atahualpa with 168 men. Spanish weaponry, indigenous allies, and smallpox devastated the largest empire in pre-Columbian America.",
        keywords: "Inca fall Pizarro Spain Peru conquest history",
        category: "Colonial Conquest",
        casualties: "Millions (disease)"
    },
    {
        name: "Peasants' War (Germany)",
        lat: 49.5,
        lng: 10.5,
        years: "1524–1525",
        summary: "Largest popular uprising in Europe before the French Revolution. 300,000 German peasants revolted against feudal oppression, inspired by Luther's Reformation. Crushed with extreme violence.",
        keywords: "German Peasants War Reformation Luther uprising history",
        category: "Uprising",
        casualties: "100,000"
    },
    {
        name: "Three Kingdoms War (China)",
        lat: 30.6,
        lng: 114.3,
        years: "220–280 AD",
        summary: "The Han Dynasty collapsed into three warring states — Wei, Shu, and Wu. Immortalized in 'Romance of the Three Kingdoms.' One of the deadliest periods in human history by some estimates.",
        keywords: "Three Kingdoms China Wei Shu Wu history",
        category: "Civil War",
        casualties: "36–40 million"
    },
    {
        name: "Assyrian Empire Conquests",
        lat: 36.3,
        lng: 43.1,
        years: "911–609 BC",
        summary: "The Neo-Assyrian Empire was the first true military superpower. Conquered Mesopotamia, Egypt, and the Levant with iron weapons and siege warfare. Notorious for mass deportations and brutal punishments.",
        keywords: "Assyrian Empire conquest Mesopotamia ancient history",
        category: "Imperial Conquest",
        casualties: "Unknown (widespread)"
    },
    {
        name: "Persian Empire (Achaemenid) Conquests",
        lat: 30.0,
        lng: 52.0,
        years: "550–330 BC",
        summary: "Cyrus the Great built the largest empire the world had ever seen, from Egypt to India. Known for relative tolerance and the first declaration of human rights. Fell to Alexander the Great.",
        keywords: "Persian Empire Cyrus Great Achaemenid conquest history",
        category: "Imperial Conquest",
        casualties: "Unknown"
    },
    {
        name: "Destruction of Carthage",
        lat: 36.85,
        lng: 10.32,
        years: "146 BC",
        summary: "Rome besieged Carthage for three years in the Third Punic War. The city was systematically destroyed — burned for 17 days. 50,000 survivors sold into slavery. 'Carthago delenda est.'",
        keywords: "Carthage destruction Rome Third Punic War history",
        category: "Siege & Destruction",
        casualties: "150,000+"
    },
    // --- Earliest known conflicts & more Greek wars ---
    {
        name: "Battle of Megiddo",
        lat: 32.6,
        lng: 35.2,
        years: "~1457 BC",
        summary: "The earliest recorded battle in history with reliable details. Egyptian Pharaoh Thutmose III defeated a Canaanite coalition. The site (Armageddon) later became synonymous with the apocalypse.",
        keywords: "Battle Megiddo Armageddon earliest battle Egypt history",
        category: "Earliest Recorded Battle",
        casualties: "Unknown"
    },
    {
        name: "Battle of Kadesh",
        lat: 34.6,
        lng: 36.5,
        years: "~1274 BC",
        summary: "Largest chariot battle in history between Egypt (Ramesses II) and the Hittite Empire. Both sides claimed victory. Led to the first known peace treaty in human history.",
        keywords: "Battle Kadesh Ramesses Hittite Egypt first peace treaty history",
        category: "Ancient Battle",
        casualties: "Unknown (thousands)"
    },
    {
        name: "Sumerian City-State Wars",
        lat: 31.3,
        lng: 45.8,
        years: "~2700–2300 BC",
        summary: "The world's first wars between organized states. Lagash, Umma, Ur, and Uruk fought for control of Mesopotamian irrigation canals and trade routes. Recorded on the Stele of the Vultures — humanity's first war monument.",
        keywords: "Sumer city state wars Lagash Umma Mesopotamia earliest war history",
        category: "First Known Wars",
        casualties: "Unknown"
    },
    {
        name: "Akkadian Empire Conquests",
        lat: 33.1,
        lng: 44.1,
        years: "~2334–2154 BC",
        summary: "Sargon of Akkad built the world's first empire, conquering all of Mesopotamia. The first ruler to maintain a standing army. His empire lasted nearly 200 years before collapsing.",
        keywords: "Akkadian Empire Sargon first empire Mesopotamia history",
        category: "First Empire",
        casualties: "Unknown"
    },
    {
        name: "Egyptian-Hyksos Wars",
        lat: 30.1,
        lng: 31.2,
        years: "~1650–1550 BC",
        summary: "The Hyksos, foreign invaders with chariots and bronze weapons, conquered Lower Egypt. Pharaoh Ahmose I drove them out and reunified Egypt, founding the New Kingdom — Egypt's golden age.",
        keywords: "Hyksos Egypt invasion Ahmose New Kingdom ancient history",
        category: "Ancient War",
        casualties: "Unknown"
    },
    {
        name: "Sea Peoples Invasion",
        lat: 31.5,
        lng: 34.5,
        years: "~1200 BC",
        summary: "Mysterious coalition of naval raiders attacked and destroyed Bronze Age civilizations across the Mediterranean. The Hittite Empire, Mycenaean Greece, and Ugarit collapsed. Triggered the Bronze Age Collapse — one of history's greatest catastrophes.",
        keywords: "Sea Peoples Bronze Age Collapse Mediterranean ancient history",
        category: "Civilizational Collapse",
        casualties: "Unknown (millions displaced)"
    },
    {
        name: "Bronze Age Collapse",
        lat: 36.0,
        lng: 30.0,
        years: "~1200–1150 BC",
        summary: "Within 50 years, nearly every major civilization in the Eastern Mediterranean collapsed. Mycenaean Greece, the Hittites, Egypt weakened, Ugarit destroyed. Trade networks disintegrated. Writing was lost in some regions for centuries.",
        keywords: "Bronze Age Collapse ancient civilization fall history",
        category: "Civilizational Collapse",
        casualties: "Unknown (catastrophic)"
    },
    // --- Greek Wars ---
    {
        name: "Battle of Marathon",
        lat: 38.1,
        lng: 24.0,
        years: "490 BC",
        summary: "10,000 Athenians defeated 25,000 Persian invaders on the plains of Marathon. A runner carried the news 26 miles to Athens — the origin of the marathon race. Saved Greek democracy.",
        keywords: "Battle Marathon Athens Persia Greek ancient history",
        category: "Ancient Battle",
        casualties: "7,000"
    },
    {
        name: "Battle of Thermopylae",
        lat: 38.8,
        lng: 22.5,
        years: "480 BC",
        summary: "300 Spartans under King Leonidas held the narrow pass against Xerxes' massive Persian army for three days. All 300 died. Their sacrifice bought time for Greece to organize its defense.",
        keywords: "Thermopylae 300 Spartans Leonidas Xerxes Persia history",
        category: "Ancient Battle",
        casualties: "4,000 Greeks, 20,000 Persians"
    },
    {
        name: "Battle of Salamis",
        lat: 37.9,
        lng: 23.5,
        years: "480 BC",
        summary: "Athenian-led Greek fleet destroyed the Persian navy in the straits of Salamis. Themistocles lured Xerxes into the narrow waters where Persian numbers meant nothing. Turned the tide of the Greco-Persian Wars.",
        keywords: "Battle Salamis Athens Persia Themistocles naval ancient history",
        category: "Ancient Naval Battle",
        casualties: "40,000+"
    },
    {
        name: "Sicilian Expedition (Athens)",
        lat: 37.1,
        lng: 15.3,
        years: "415–413 BC",
        summary: "Athens launched a massive invasion of Syracuse during the Peloponnesian War. Complete disaster — the entire fleet and army were destroyed. 7,000 Athenians enslaved in stone quarries. Beginning of the end for Athens.",
        keywords: "Sicilian Expedition Athens Syracuse Peloponnesian history",
        category: "Ancient War",
        casualties: "20,000+ Athenians"
    },
    {
        name: "Corinthian War",
        lat: 37.9,
        lng: 22.9,
        years: "395–387 BC",
        summary: "Thebes, Athens, Corinth, and Argos fought against Spartan hegemony after the Peloponnesian War. Persia funded both sides. Ended with the King's Peace, giving Persia influence over Greek affairs.",
        keywords: "Corinthian War Sparta Thebes Athens ancient Greece history",
        category: "Ancient War",
        casualties: "Unknown"
    },
    {
        name: "Theban-Spartan Wars",
        lat: 38.3,
        lng: 23.3,
        years: "379–362 BC",
        summary: "Thebes under Epaminondas shattered Spartan military dominance at the Battle of Leuctra in 371 BC. The Sacred Band of Thebes — 150 pairs of male lovers — proved unstoppable. Sparta never recovered.",
        keywords: "Theban Spartan Wars Leuctra Epaminondas Sacred Band history",
        category: "Ancient War",
        casualties: "Unknown"
    },
    {
        name: "Philip II's Conquest of Greece",
        lat: 40.6,
        lng: 22.9,
        years: "359–338 BC",
        summary: "Philip II of Macedon unified Greece by conquest and diplomacy. Defeated Athens and Thebes at Chaeronea in 338 BC. Created the League of Corinth. His son Alexander would conquer the world.",
        keywords: "Philip II Macedonia Greece Chaeronea conquest history",
        category: "Conquest",
        casualties: "Unknown"
    },
    {
        name: "Maccabean Revolt",
        lat: 31.8,
        lng: 35.2,
        years: "167–160 BC",
        summary: "Jewish revolt against the Seleucid Empire after Antiochus IV banned Judaism and desecrated the Temple. Judas Maccabeus recaptured Jerusalem. Origin of Hanukkah.",
        keywords: "Maccabean Revolt Hanukkah Jewish Seleucid Jerusalem history",
        category: "Independence Revolt",
        casualties: "Unknown"
    },
    {
        name: "Pyrrhic Wars",
        lat: 40.6,
        lng: 16.5,
        years: "280–275 BC",
        summary: "King Pyrrhus of Epirus fought Rome in southern Italy, winning battles at such devastating cost that 'Pyrrhic victory' became synonymous with hollow success. Rome ultimately prevailed.",
        keywords: "Pyrrhic War Pyrrhus Rome Italy ancient history",
        category: "Ancient War",
        casualties: "50,000+"
    },
    {
        name: "Sack of Troy / Mycenaean Wars",
        lat: 39.9,
        lng: 26.2,
        years: "~1300–1200 BC",
        summary: "Archaeological evidence confirms warfare around Troy during the late Bronze Age. Mycenaean Greeks were aggressive raiders across the Mediterranean. Their civilization collapsed mysteriously around 1200 BC.",
        keywords: "Mycenaean Greece Troy Bronze Age warfare ancient history",
        category: "Ancient War",
        casualties: "Unknown"
    },
    {
        name: "Egyptian-Nubian Wars",
        lat: 22.0,
        lng: 31.6,
        years: "~2000–700 BC",
        summary: "Centuries of conflict between Egypt and the Kingdom of Kush (Nubia/Sudan). Nubians eventually conquered Egypt and ruled as the 25th Dynasty. One of Africa's longest-running rivalries.",
        keywords: "Egypt Nubia Kush war ancient Africa history",
        category: "Ancient War",
        casualties: "Unknown"
    },
    {
        name: "Battle of Jericho",
        lat: 31.9,
        lng: 35.4,
        years: "~1400 BC",
        summary: "One of the earliest recorded sieges. Biblical account describes walls falling; archaeology confirms the city was violently destroyed around this period. One of humanity's first fortified cities to fall.",
        keywords: "Battle Jericho siege ancient walls biblical history",
        category: "Ancient Siege",
        casualties: "Unknown"
    },
    {
        name: "Hittite-Egyptian Rivalry",
        lat: 40.0,
        lng: 34.6,
        years: "~1400–1200 BC",
        summary: "Two Bronze Age superpowers competed for control of the Levant for centuries. Culminated in the Battle of Kadesh. Their peace treaty is displayed at the UN as a symbol of diplomacy.",
        keywords: "Hittite Egypt rivalry ancient superpower Levant history",
        category: "Ancient Rivalry",
        casualties: "Unknown"
    },
    // --- Lesser-known / obscure historical conflicts ---
    {
        name: "Caste War of Yucatán",
        lat: 20.5,
        lng: -89.0,
        years: "1847–1901",
        summary: "Indigenous Maya rose up against Mexican and European-descended elites in one of the most successful indigenous revolts in the Americas. Maya established an independent state (Chan Santa Cruz) that lasted over 50 years.",
        keywords: "Caste War Yucatan Maya revolt Mexico history",
        category: "Indigenous Revolt",
        casualties: "250,000+"
    },
    {
        name: "Taiping Heavenly Kingdom",
        lat: 32.1,
        lng: 118.8,
        years: "1850–1864",
        summary: "Hong Xiuquan, who believed he was Jesus's brother, led a rebellion that created a theocratic state controlling much of southern China. Possibly the deadliest civil war in all of human history.",
        keywords: "Taiping Rebellion Heavenly Kingdom China deadliest civil war",
        category: "Civil War",
        casualties: "20–30 million"
    },
    {
        name: "Dungan Revolt",
        lat: 36.6,
        lng: 101.8,
        years: "1862–1877",
        summary: "Muslim Hui people revolted against the Qing Dynasty in northwest China. One of the deadliest conflicts you've never heard of. Entire regions depopulated. Estimated death toll rivals World War I.",
        keywords: "Dungan Revolt Hui Muslim China Qing history",
        category: "Civil War",
        casualties: "8–12 million"
    },
    {
        name: "Congo Free State Atrocities",
        lat: -4.3,
        lng: 15.3,
        years: "1885–1908",
        summary: "King Leopold II of Belgium's personal colony. Forced rubber harvesting enforced by cutting off hands. One of history's worst genocides. Population halved from 20 million to 10 million.",
        keywords: "Congo Free State Leopold Belgium rubber genocide history",
        category: "Colonial Genocide",
        casualties: "10 million"
    },
    {
        name: "Herero & Nama Genocide",
        lat: -22.6,
        lng: 17.1,
        years: "1904–1908",
        summary: "German colonial forces committed the 20th century's first genocide in Namibia. General von Trotha issued an extermination order. Survivors driven into the Omaheke Desert to die. Concentration camps used.",
        keywords: "Herero Nama genocide Namibia Germany colonial history",
        category: "Genocide",
        casualties: "100,000+"
    },
    {
        name: "Circassian Genocide",
        lat: 43.5,
        lng: 40.0,
        years: "1864–1867",
        summary: "Russia expelled 1.5 million Circassians from the Caucasus after conquering the region. Up to 600,000 died during forced marches and sea crossings. One of the 19th century's largest ethnic cleansings.",
        keywords: "Circassian genocide Russia Caucasus expulsion history",
        category: "Genocide",
        casualties: "600,000"
    },
    {
        name: "Armenian Genocide",
        lat: 39.0,
        lng: 44.5,
        years: "1915–1923",
        summary: "Ottoman Empire systematically killed 1.5 million Armenians through death marches, massacres, and starvation. The word 'genocide' was coined to describe it. Turkey still denies it.",
        keywords: "Armenian genocide Ottoman Turkey 1915 history",
        category: "Genocide",
        casualties: "1.5 million"
    },
    {
        name: "Greek Genocide (Pontian)",
        lat: 41.0,
        lng: 39.7,
        years: "1914–1923",
        summary: "Ottoman Empire killed 300,000–900,000 Pontic Greeks through massacres, death marches, and forced labor in mines. Part of the same systematic campaign that targeted Armenians and Assyrians.",
        keywords: "Pontian Greek genocide Ottoman Turkey history",
        category: "Genocide",
        casualties: "300,000–900,000"
    },
    {
        name: "Assyrian Genocide (Seyfo)",
        lat: 37.5,
        lng: 43.0,
        years: "1914–1920",
        summary: "Ottoman and Kurdish forces massacred 250,000–750,000 Assyrian Christians. Called 'Seyfo' (the sword) by survivors. The least recognized of the three simultaneous Ottoman genocides.",
        keywords: "Assyrian genocide Seyfo Ottoman massacre history",
        category: "Genocide",
        casualties: "250,000–750,000"
    },
    {
        name: "Holodomor (Ukraine Famine)",
        lat: 49.4,
        lng: 32.1,
        years: "1932–1933",
        summary: "Stalin engineered a famine in Soviet Ukraine by confiscating grain. 3.5–7.5 million Ukrainians starved to death. Recognized as genocide by many nations. Soviets denied it for decades.",
        keywords: "Holodomor Ukraine famine Stalin Soviet genocide history",
        category: "Genocide / Famine",
        casualties: "3.5–7.5 million"
    },
    {
        name: "Dzungar Genocide",
        lat: 44.0,
        lng: 81.0,
        years: "1755–1758",
        summary: "Qing Dynasty China exterminated 80% of the Dzungar Mongol people. One of the 18th century's most complete genocides — an entire civilization essentially erased. Rarely taught anywhere.",
        keywords: "Dzungar genocide Qing China Mongol extermination history",
        category: "Genocide",
        casualties: "500,000–800,000"
    },
    {
        name: "Moriori Genocide",
        lat: -43.9,
        lng: -176.5,
        years: "1835",
        summary: "Māori warriors invaded the Chatham Islands and enslaved or killed the pacifist Moriori people. One of the clearest cases of deliberate cultural annihilation. The Moriori nearly vanished entirely.",
        keywords: "Moriori genocide Maori Chatham Islands New Zealand history",
        category: "Genocide",
        casualties: "1,600"
    },
    {
        name: "Albigensian Crusade",
        lat: 43.2,
        lng: 2.3,
        years: "1209–1229",
        summary: "The Pope launched a crusade against Cathar Christians in southern France. 'Kill them all, God will know his own' was allegedly said at Béziers. Destroyed Occitan culture and killed up to 1 million.",
        keywords: "Albigensian Crusade Cathar heresy France massacre history",
        category: "Religious War",
        casualties: "200,000–1 million"
    },
    {
        name: "Hussite Wars",
        lat: 50.1,
        lng: 14.4,
        years: "1419–1434",
        summary: "Czech followers of Jan Hus fought five Catholic crusades and won them all. Pioneered wagon forts and early firearms. Foreshadowed the Protestant Reformation by a century.",
        keywords: "Hussite Wars Czech Bohemia Jan Hus crusade history",
        category: "Religious War",
        casualties: "Unknown"
    },
    {
        name: "War of the Two Peters",
        lat: 39.5,
        lng: -0.4,
        years: "1356–1369",
        summary: "Castile and Aragon fought a brutal medieval war on the Iberian Peninsula. Peter the Cruel vs Peter the Ceremonious. Featured backstabbing, betrayal, and mercenary companies ravaging Spain.",
        keywords: "War Two Peters Castile Aragon Spain medieval history",
        category: "Dynastic War",
        casualties: "Unknown"
    },
    {
        name: "Shimabara Rebellion",
        lat: 32.8,
        lng: 130.3,
        years: "1637–1638",
        summary: "Japanese Christian peasants revolted against persecution and heavy taxation. 37,000 rebels were massacred. Japan banned Christianity and closed itself to the outside world for 200 years.",
        keywords: "Shimabara Rebellion Japan Christian revolt isolation history",
        category: "Religious Revolt",
        casualties: "37,000"
    },
    {
        name: "Maratha-Mughal Wars",
        lat: 18.5,
        lng: 73.9,
        years: "1680–1707",
        summary: "Shivaji's Maratha Empire fought Emperor Aurangzeb's Mughal forces across India. Guerrilla warfare in the Deccan drained the Mughals. Aurangzeb died on campaign — the empire never recovered.",
        keywords: "Maratha Mughal Wars Shivaji Aurangzeb India history",
        category: "Imperial War",
        casualties: "Unknown (hundreds of thousands)"
    },
    {
        name: "Zulu Civil Wars (Mfecane)",
        lat: -28.5,
        lng: 31.0,
        years: "1815–1840",
        summary: "Shaka Zulu's military revolution triggered the Mfecane — a wave of wars, migrations, and state-building across southern Africa. Millions displaced. Reshaped the entire subcontinent.",
        keywords: "Mfecane Shaka Zulu southern Africa migration war history",
        category: "Imperial Conquest",
        casualties: "1–2 million"
    },
    {
        name: "Comanche Wars",
        lat: 33.5,
        lng: -101.0,
        years: "1706–1875",
        summary: "The Comanche Empire dominated the southern Great Plains for nearly 200 years. Master horsemen who defeated the Spanish, Mexicans, and Texans. Their fall reshaped the American frontier.",
        keywords: "Comanche Empire wars plains Native American Texas history",
        category: "Native American War",
        casualties: "Unknown"
    },
    {
        name: "Cambodian Dark Ages",
        lat: 13.4,
        lng: 103.9,
        years: "1431–1863",
        summary: "After the fall of Angkor to Siam in 1431, the Khmer Empire collapsed into 400 years of invasions by Thailand and Vietnam. Cambodia nearly ceased to exist before French colonization 'saved' it.",
        keywords: "Cambodia Angkor fall Siam Vietnam dark ages history",
        category: "Civilizational Decline",
        casualties: "Unknown"
    },
    {
        name: "Zanzibar Revolution",
        lat: -6.2,
        lng: 39.2,
        years: "1964",
        summary: "African majority overthrew the Arab Sultan of Zanzibar in a violent revolution lasting hours. Between 2,000 and 20,000 Arabs and South Asians killed. Led to the creation of Tanzania.",
        keywords: "Zanzibar Revolution Tanzania Arab African 1964 history",
        category: "Revolution",
        casualties: "2,000–20,000"
    },
    {
        name: "Football War (Soccer War)",
        lat: 14.0,
        lng: -87.9,
        years: "1969",
        summary: "El Salvador invaded Honduras after tensions boiled over during World Cup qualifiers. The real causes were land reform disputes and migration. War lasted 100 hours. 3,000 killed.",
        keywords: "Football War Soccer War El Salvador Honduras 1969 history",
        category: "Interstate War",
        casualties: "3,000"
    },
    {
        name: "Chaco War",
        lat: -21.0,
        lng: -60.0,
        years: "1932–1935",
        summary: "Bolivia and Paraguay fought over the Gran Chaco region, believed (wrongly) to be oil-rich. The deadliest South American war of the 20th century. Bolivia lost despite being larger.",
        keywords: "Chaco War Bolivia Paraguay South America history",
        category: "Interstate War",
        casualties: "100,000"
    },
    {
        name: "Cristero War",
        lat: 21.0,
        lng: -102.5,
        years: "1926–1929",
        summary: "Mexican Catholics revolted against the government's anti-clerical laws. 'Viva Cristo Rey!' became the battle cry. Brutal on both sides — priests hanged, rebels shot. Largely forgotten outside Mexico.",
        keywords: "Cristero War Mexico Catholic revolt history",
        category: "Religious War",
        casualties: "90,000"
    },
    {
        name: "Maji Maji Rebellion",
        lat: -10.0,
        lng: 37.0,
        years: "1905–1907",
        summary: "Massive uprising against German colonial rule in East Africa (Tanzania). Rebels believed magic water ('maji') would turn bullets to water. Germany's scorched-earth response killed 300,000.",
        keywords: "Maji Maji Rebellion Tanzania German East Africa colonial history",
        category: "Colonial Revolt",
        casualties: "300,000"
    },
    {
        name: "Taiping of the West (Panthay Rebellion)",
        lat: 25.0,
        lng: 102.7,
        years: "1856–1873",
        summary: "Hui Muslims in Yunnan, China established the Pingnan Sultanate. Qing reconquest was brutal — Kunming's Muslim quarter was exterminated. Another forgotten multi-million death toll conflict.",
        keywords: "Panthay Rebellion Yunnan China Muslim Hui Qing history",
        category: "Civil War",
        casualties: "1 million+"
    },
    {
        name: "White Lotus Rebellion",
        lat: 31.0,
        lng: 109.0,
        years: "1796–1804",
        summary: "Buddhist millenarian sect revolted against the Qing Dynasty in central China. The rebellion exposed Qing military weakness and drained the treasury. Signaled the beginning of the dynasty's decline.",
        keywords: "White Lotus Rebellion Qing China Buddhist revolt history",
        category: "Religious Revolt",
        casualties: "100,000+"
    },
    {
        name: "Nien Rebellion",
        lat: 33.9,
        lng: 116.6,
        years: "1851–1868",
        summary: "Massive peasant uprising in northern China overlapping with the Taiping Rebellion. Nien cavalry forces terrorized the countryside. Took the Qing Dynasty 17 years to suppress.",
        keywords: "Nien Rebellion China Qing peasant uprising history",
        category: "Peasant Revolt",
        casualties: "Unknown (millions)"
    },
    {
        name: "Italo-Ethiopian Wars",
        lat: 9.0,
        lng: 38.7,
        years: "1895–1941",
        summary: "Ethiopia defeated Italy at Adwa in 1896 — the most decisive African victory over European colonizers. Mussolini invaded again in 1935 using poison gas. Ethiopia was liberated in 1941.",
        keywords: "Italo Ethiopian War Adwa Mussolini Africa colonialism history",
        category: "Colonial War",
        casualties: "760,000"
    },
    {
        name: "Boxer Protocol & Eight-Nation Invasion",
        lat: 39.9,
        lng: 116.4,
        years: "1900–1901",
        summary: "Eight foreign nations invaded China to suppress the Boxer Rebellion. Troops looted Beijing for days. China was forced to pay massive reparations, deepening the 'Century of Humiliation.'",
        keywords: "Eight Nation Alliance Boxer China invasion humiliation history",
        category: "Foreign Invasion",
        casualties: "100,000+"
    },
    {
        name: "Zanzibar-Anglo War",
        lat: -6.2,
        lng: 39.2,
        years: "1896",
        summary: "The shortest war in recorded history — lasted 38 to 45 minutes. Britain bombarded the Sultan's palace in Zanzibar after he refused to abdicate. The sultan fled. Britain installed a puppet ruler.",
        keywords: "Anglo Zanzibar War shortest war history 1896",
        category: "Shortest War",
        casualties: "500"
    },
    {
        name: "Preah Vihear Temple Conflict",
        lat: 14.39,
        lng: 104.68,
        years: "2008–2011",
        summary: "Armed clashes between Cambodia and Thailand over the ancient Hindu temple of Preah Vihear on their disputed border. UNESCO's World Heritage listing in 2008 triggered the crisis. Artillery exchanges, troops deployed, and civilians displaced. The ICJ ruled in Cambodia's favor in 2013.",
        keywords: "Preah Vihear temple Cambodia Thailand border conflict history",
        category: "Border Conflict",
        casualties: "30+"
    },
    {
        name: "Thai-Cambodian Wars",
        lat: 13.4,
        lng: 103.9,
        years: "1431–1907",
        summary: "Centuries of conflict between Siam (Thailand) and the Khmer Empire. Siam sacked Angkor in 1431, ending the classical Khmer period. Thailand repeatedly invaded and occupied Cambodian territory, taking provinces that remain Thai today.",
        keywords: "Siam Cambodia Thailand Angkor Khmer wars history",
        category: "Interstate Wars",
        casualties: "Unknown"
    }
];
