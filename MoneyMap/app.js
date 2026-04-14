// ── All currencies used worldwide ──
const CURRENCIES = {
  USD: { name: "US Dollar", cc: "US" },
  EUR: { name: "Euro", cc: "EU" },
  GBP: { name: "British Pound", cc: "GB" },
  JPY: { name: "Japanese Yen", cc: "JP" },
  AUD: { name: "Australian Dollar", cc: "AU" },
  CAD: { name: "Canadian Dollar", cc: "CA" },
  CHF: { name: "Swiss Franc", cc: "CH" },
  CNY: { name: "Chinese Yuan", cc: "CN" },
  INR: { name: "Indian Rupee", cc: "IN" },
  MXN: { name: "Mexican Peso", cc: "MX" },
  BRL: { name: "Brazilian Real", cc: "BR" },
  KRW: { name: "South Korean Won", cc: "KR" },
  SGD: { name: "Singapore Dollar", cc: "SG" },
  HKD: { name: "Hong Kong Dollar", cc: "HK" },
  NOK: { name: "Norwegian Krone", cc: "NO" },
  SEK: { name: "Swedish Krona", cc: "SE" },
  DKK: { name: "Danish Krone", cc: "DK" },
  NZD: { name: "New Zealand Dollar", cc: "NZ" },
  ZAR: { name: "South African Rand", cc: "ZA" },
  RUB: { name: "Russian Ruble", cc: "RU" },
  TRY: { name: "Turkish Lira", cc: "TR" },
  PLN: { name: "Polish Zloty", cc: "PL" },
  THB: { name: "Thai Baht", cc: "TH" },
  IDR: { name: "Indonesian Rupiah", cc: "ID" },
  HUF: { name: "Hungarian Forint", cc: "HU" },
  CZK: { name: "Czech Koruna", cc: "CZ" },
  ILS: { name: "Israeli Shekel", cc: "IL" },
  CLP: { name: "Chilean Peso", cc: "CL" },
  PHP: { name: "Philippine Peso", cc: "PH" },
  AED: { name: "UAE Dirham", cc: "AE" },
  COP: { name: "Colombian Peso", cc: "CO" },
  SAR: { name: "Saudi Riyal", cc: "SA" },
  MYR: { name: "Malaysian Ringgit", cc: "MY" },
  RON: { name: "Romanian Leu", cc: "RO" },
  BGN: { name: "Bulgarian Lev", cc: "BG" },
  HRK: { name: "Croatian Kuna", cc: "HR" },
  PEN: { name: "Peruvian Sol", cc: "PE" },
  PKR: { name: "Pakistani Rupee", cc: "PK" },
  EGP: { name: "Egyptian Pound", cc: "EG" },
  NGN: { name: "Nigerian Naira", cc: "NG" },
  BDT: { name: "Bangladeshi Taka", cc: "BD" },
  VND: { name: "Vietnamese Dong", cc: "VN" },
  KES: { name: "Kenyan Shilling", cc: "KE" },
  UAH: { name: "Ukrainian Hryvnia", cc: "UA" },
  ARS: { name: "Argentine Peso", cc: "AR" },
  ISK: { name: "Icelandic Krona", cc: "IS" },
  GHS: { name: "Ghanaian Cedi", cc: "GH" },
  TWD: { name: "Taiwan Dollar", cc: "TW" },
  MAD: { name: "Moroccan Dirham", cc: "MA" },
  JOD: { name: "Jordanian Dinar", cc: "JO" },
  KWD: { name: "Kuwaiti Dinar", cc: "KW" },
  QAR: { name: "Qatari Riyal", cc: "QA" },
  BHD: { name: "Bahraini Dinar", cc: "BH" },
  OMR: { name: "Omani Rial", cc: "OM" },
  LKR: { name: "Sri Lankan Rupee", cc: "LK" },
  MMK: { name: "Myanmar Kyat", cc: "MM" },
  KZT: { name: "Kazakh Tenge", cc: "KZ" },
  UZS: { name: "Uzbek Som", cc: "UZ" },
  GEL: { name: "Georgian Lari", cc: "GE" },
  AMD: { name: "Armenian Dram", cc: "AM" },
  AZN: { name: "Azerbaijani Manat", cc: "AZ" },
  RSD: { name: "Serbian Dinar", cc: "RS" },
  BAM: { name: "Bosnian Mark", cc: "BA" },
  MKD: { name: "Macedonian Denar", cc: "MK" },
  ALL: { name: "Albanian Lek", cc: "AL" },
  MDL: { name: "Moldovan Leu", cc: "MD" },
  BYN: { name: "Belarusian Ruble", cc: "BY" },
  TND: { name: "Tunisian Dinar", cc: "TN" },
  DZD: { name: "Algerian Dinar", cc: "DZ" },
  LBP: { name: "Lebanese Pound", cc: "LB" },
  IQD: { name: "Iraqi Dinar", cc: "IQ" },
  IRR: { name: "Iranian Rial", cc: "IR" },
  AFN: { name: "Afghan Afghani", cc: "AF" },
  NPR: { name: "Nepalese Rupee", cc: "NP" },
  KHR: { name: "Cambodian Riel", cc: "KH" },
  LAK: { name: "Lao Kip", cc: "LA" },
  MNT: { name: "Mongolian Tugrik", cc: "MN" },
  KGS: { name: "Kyrgyz Som", cc: "KG" },
  TJS: { name: "Tajik Somoni", cc: "TJ" },
  TMT: { name: "Turkmen Manat", cc: "TM" },
  ETB: { name: "Ethiopian Birr", cc: "ET" },
  TZS: { name: "Tanzanian Shilling", cc: "TZ" },
  UGX: { name: "Ugandan Shilling", cc: "UG" },
  RWF: { name: "Rwandan Franc", cc: "RW" },
  XOF: { name: "West African CFA Franc", cc: "SN" },
  XAF: { name: "Central African CFA Franc", cc: "CM" },
  MZN: { name: "Mozambican Metical", cc: "MZ" },
  ZMW: { name: "Zambian Kwacha", cc: "ZM" },
  BWP: { name: "Botswana Pula", cc: "BW" },
  NAD: { name: "Namibian Dollar", cc: "NA" },
  SYP: { name: "Syrian Pound", cc: "SY" },
  YER: { name: "Yemeni Rial", cc: "YE" },
  JMD: { name: "Jamaican Dollar", cc: "JM" },
  TTD: { name: "Trinidad & Tobago Dollar", cc: "TT" },
  DOP: { name: "Dominican Peso", cc: "DO" },
  GTQ: { name: "Guatemalan Quetzal", cc: "GT" },
  HNL: { name: "Honduran Lempira", cc: "HN" },
  NIO: { name: "Nicaraguan Cordoba", cc: "NI" },
  CRC: { name: "Costa Rican Colon", cc: "CR" },
  PAB: { name: "Panamanian Balboa", cc: "PA" },
  BOB: { name: "Bolivian Boliviano", cc: "BO" },
  PYG: { name: "Paraguayan Guarani", cc: "PY" },
  UYU: { name: "Uruguayan Peso", cc: "UY" },
  KPW: { name: "North Korean Won", cc: "KP" },
  CUP: { name: "Cuban Peso", cc: "CU" },
  SOS: { name: "Somali Shilling", cc: "SO" },
  SDG: { name: "Sudanese Pound", cc: "SD" },
  SSP: { name: "South Sudanese Pound", cc: "SS" },
  LYD: { name: "Libyan Dinar", cc: "LY" },
  ERN: { name: "Eritrean Nakfa", cc: "ER" },
  DJF: { name: "Djiboutian Franc", cc: "DJ" },
  CDF: { name: "Congolese Franc", cc: "CD" },
  AOA: { name: "Angolan Kwanza", cc: "AO" },
  ZWL: { name: "Zimbabwean Dollar", cc: "ZW" },
  MWK: { name: "Malawian Kwacha", cc: "MW" },
  MGA: { name: "Malagasy Ariary", cc: "MG" },
  PGK: { name: "Papua New Guinean Kina", cc: "PG" },
  FJD: { name: "Fijian Dollar", cc: "FJ" },
  VUV: { name: "Vanuatu Vatu", cc: "VU" },
  SBD: { name: "Solomon Islands Dollar", cc: "SB" },
  HTG: { name: "Haitian Gourde", cc: "HT" },
  BSD: { name: "Bahamian Dollar", cc: "BS" },
  BZD: { name: "Belize Dollar", cc: "BZ" },
  VES: { name: "Venezuelan Bolivar", cc: "VE" },
  GYD: { name: "Guyanese Dollar", cc: "GY" },
  SRD: { name: "Surinamese Dollar", cc: "SR" },
  SZL: { name: "Eswatini Lilangeni", cc: "SZ" },
  LSL: { name: "Lesotho Loti", cc: "LS" },
  BIF: { name: "Burundian Franc", cc: "BI" },
  GMD: { name: "Gambian Dalasi", cc: "GM" },
  MRU: { name: "Mauritanian Ouguiya", cc: "MR" },
  GNF: { name: "Guinean Franc", cc: "GN" },
  LRD: { name: "Liberian Dollar", cc: "LR" },
  SLE: { name: "Sierra Leonean Leone", cc: "SL" },
  BTN: { name: "Bhutanese Ngultrum", cc: "BT" },
  BND: { name: "Brunei Dollar", cc: "BN" },
  XPF: { name: "CFP Franc", cc: "PF" },
  FKP: { name: "Falkland Islands Pound", cc: "FK" },
  XCD: { name: "East Caribbean Dollar", cc: "AG" },
  BBD: { name: "Barbadian Dollar", cc: "BB" },
  CVE: { name: "Cape Verdean Escudo", cc: "CV" },
  KMF: { name: "Comorian Franc", cc: "KM" },
  MOP: { name: "Macanese Pataca", cc: "MO" },
  MVR: { name: "Maldivian Rufiyaa", cc: "MV" },
  MUR: { name: "Mauritian Rupee", cc: "MU" },
  SCR: { name: "Seychellois Rupee", cc: "SC" },
  WST: { name: "Samoan Tala", cc: "WS" },
  TOP: { name: "Tongan Paanga", cc: "TO" },
  ANG: { name: "Netherlands Antillean Guilder", cc: "CW" },
  AWG: { name: "Aruban Florin", cc: "AW" },
  BMD: { name: "Bermudian Dollar", cc: "BM" },
  KYD: { name: "Cayman Islands Dollar", cc: "KY" },
  STN: { name: "São Tomé Dobra", cc: "ST" },
};

// ── Correct country names for every feature in 50m TopoJSON ──
const NAME_OVERRIDES = {
  // Americas
  "840": "United States",
  "124": "Canada",
  "484": "Mexico",
  "076": "Brazil",
  "032": "Argentina",
  "152": "Chile",
  "170": "Colombia",
  "604": "Peru",
  "862": "Venezuela",
  "218": "Ecuador",
  "068": "Bolivia",
  "600": "Paraguay",
  "858": "Uruguay",
  "328": "Guyana",
  "740": "Suriname",
  "591": "Panama",
  "188": "Costa Rica",
  "558": "Nicaragua",
  "340": "Honduras",
  "222": "El Salvador",
  "320": "Guatemala",
  "084": "Belize",
  "192": "Cuba",
  "332": "Haiti",
  "214": "Dominican Republic",
  "388": "Jamaica",
  "780": "Trinidad & Tobago",
  "044": "Bahamas",
  "630": "Puerto Rico",
  "304": "Greenland",
  "238": "Falkland Islands",
  "028": "Antigua & Barbuda",
  "052": "Barbados",
  "212": "Dominica",
  "308": "Grenada",
  "659": "Saint Kitts & Nevis",
  "662": "Saint Lucia",
  "670": "Saint Vincent & the Grenadines",
  "060": "Bermuda",
  "136": "Cayman Islands",
  "092": "British Virgin Islands",
  "850": "U.S. Virgin Islands",
  "796": "Turks & Caicos Islands",
  "660": "Anguilla",
  "500": "Montserrat",
  "531": "Curaçao",
  "533": "Aruba",
  "534": "Sint Maarten",
  "666": "Saint Pierre & Miquelon",
  "652": "Saint Barthélemy",
  "663": "Saint Martin",

  // Europe
  "826": "United Kingdom",
  "250": "France",
  "276": "Germany",
  "380": "Italy",
  "724": "Spain",
  "620": "Portugal",
  "528": "Netherlands",
  "056": "Belgium",
  "040": "Austria",
  "756": "Switzerland",
  "442": "Luxembourg",
  "372": "Ireland",
  "246": "Finland",
  "752": "Sweden",
  "578": "Norway",
  "208": "Denmark",
  "352": "Iceland",
  "616": "Poland",
  "203": "Czech Republic",
  "703": "Slovakia",
  "348": "Hungary",
  "642": "Romania",
  "100": "Bulgaria",
  "300": "Greece",
  "792": "Turkey",
  "804": "Ukraine",
  "112": "Belarus",
  "440": "Lithuania",
  "428": "Latvia",
  "233": "Estonia",
  "498": "Moldova",
  "191": "Croatia",
  "705": "Slovenia",
  "070": "Bosnia & Herzegovina",
  "688": "Serbia",
  "499": "Montenegro",
  "807": "North Macedonia",
  "008": "Albania",
  "196": "Cyprus",
  "438": "Liechtenstein",
  "492": "Monaco",
  "674": "San Marino",
  "336": "Vatican City",
  "234": "Faroe Islands",
  "831": "Guernsey",
  "832": "Jersey",
  "833": "Isle of Man",
  "248": "Åland Islands",

  // Middle East
  "682": "Saudi Arabia",
  "784": "United Arab Emirates",
  "634": "Qatar",
  "414": "Kuwait",
  "048": "Bahrain",
  "512": "Oman",
  "368": "Iraq",
  "364": "Iran",
  "760": "Syria",
  "422": "Lebanon",
  "400": "Jordan",
  "376": "Israel",
  "275": "Palestine",
  "887": "Yemen",

  // Central & South Asia
  "004": "Afghanistan",
  "586": "Pakistan",
  "356": "India",
  "050": "Bangladesh",
  "524": "Nepal",
  "064": "Bhutan",
  "144": "Sri Lanka",
  "462": "Maldives",

  // East & Southeast Asia
  "156": "China",
  "392": "Japan",
  "410": "South Korea",
  "408": "North Korea",
  "158": "Taiwan",
  "496": "Mongolia",
  "764": "Thailand",
  "704": "Vietnam",
  "418": "Laos",
  "116": "Cambodia",
  "104": "Myanmar",
  "458": "Malaysia",
  "702": "Singapore",
  "360": "Indonesia",
  "608": "Philippines",
  "096": "Brunei",
  "344": "Hong Kong",
  "446": "Macau",
  "626": "Timor-Leste",

  // Central Asia
  "398": "Kazakhstan",
  "860": "Uzbekistan",
  "762": "Tajikistan",
  "417": "Kyrgyzstan",
  "795": "Turkmenistan",

  // Caucasus
  "268": "Georgia",
  "051": "Armenia",
  "031": "Azerbaijan",

  // North Africa
  "818": "Egypt",
  "504": "Morocco",
  "012": "Algeria",
  "788": "Tunisia",
  "434": "Libya",
  "732": "Western Sahara",

  // East Africa
  "729": "Sudan",
  "728": "South Sudan",
  "231": "Ethiopia",
  "232": "Eritrea",
  "262": "Djibouti",
  "706": "Somalia",
  "404": "Kenya",
  "834": "Tanzania",
  "800": "Uganda",
  "646": "Rwanda",
  "108": "Burundi",

  // Central Africa
  "180": "Democratic Republic of the Congo",
  "178": "Republic of the Congo",
  "140": "Central African Republic",
  "148": "Chad",
  "120": "Cameroon",
  "266": "Gabon",
  "226": "Equatorial Guinea",

  // West Africa
  "566": "Nigeria",
  "562": "Niger",
  "466": "Mali",
  "854": "Burkina Faso",
  "686": "Senegal",
  "270": "Gambia",
  "324": "Guinea",
  "624": "Guinea-Bissau",
  "694": "Sierra Leone",
  "430": "Liberia",
  "384": "Ivory Coast",
  "288": "Ghana",
  "768": "Togo",
  "204": "Benin",
  "478": "Mauritania",
  "132": "Cape Verde",
  "678": "São Tomé & Príncipe",

  // Southern Africa
  "710": "South Africa",
  "072": "Botswana",
  "516": "Namibia",
  "894": "Zambia",
  "508": "Mozambique",
  "454": "Malawi",
  "716": "Zimbabwe",
  "024": "Angola",
  "748": "Eswatini",
  "426": "Lesotho",
  "450": "Madagascar",
  "174": "Comoros",
  "480": "Mauritius",
  "690": "Seychelles",

  // Oceania
  "036": "Australia",
  "554": "New Zealand",
  "598": "Papua New Guinea",
  "242": "Fiji",
  "548": "Vanuatu",
  "090": "Solomon Islands",
  "540": "New Caledonia",
  "882": "Samoa",
  "776": "Tonga",
  "585": "Palau",
  "583": "Micronesia",
  "584": "Marshall Islands",
  "296": "Kiribati",
  "520": "Nauru",
  "016": "American Samoa",
  "258": "French Polynesia",
  "316": "Guam",
  "580": "Northern Mariana Islands",
  "570": "Niue",
  "184": "Cook Islands",
  "876": "Wallis & Futuna",
  "574": "Norfolk Island",

  // Territories & other
  "239": "South Georgia",
  "260": "French Southern Territories",
  "334": "Heard Island",
  "086": "British Indian Ocean Territory",
  "612": "Pitcairn Islands",
  "654": "Saint Helena",
};

// ── Map from ISO 3166-1 numeric → currency code ──
const COUNTRY_TO_CURRENCY = {
  // Americas
  "840": "USD", "124": "CAD", "484": "MXN", "076": "BRL", "032": "ARS",
  "152": "CLP", "170": "COP", "604": "PEN", "862": "VES", "218": "USD",
  "068": "BOB", "600": "PYG", "858": "UYU", "328": "GYD", "740": "SRD",
  "591": "PAB", "188": "CRC", "558": "NIO", "340": "HNL", "320": "GTQ",
  "222": "USD", "084": "BZD", "192": "CUP", "332": "HTG", "214": "DOP",
  "388": "JMD", "780": "TTD", "044": "BSD", "630": "USD",
  "238": "FKP", "304": "DKK",
  "028": "XCD", "052": "BBD", "212": "XCD", "308": "XCD",
  "659": "XCD", "662": "XCD", "670": "XCD",
  "060": "BMD", "136": "KYD", "092": "USD", "850": "USD",
  "796": "USD", "660": "XCD", "500": "XCD",
  "531": "ANG", "533": "AWG", "534": "ANG",
  "666": "EUR", "652": "EUR", "663": "EUR",

  // Europe
  "826": "GBP", "756": "CHF", "578": "NOK", "752": "SEK", "208": "DKK",
  "352": "ISK", "643": "RUB", "792": "TRY", "616": "PLN", "348": "HUF",
  "203": "CZK", "642": "RON", "100": "BGN", "191": "HRK", "804": "UAH",
  "112": "BYN", "498": "MDL", "688": "RSD", "499": "EUR", "807": "MKD",
  "008": "ALL", "070": "BAM",
  "438": "CHF", "492": "EUR", "674": "EUR", "336": "EUR",
  "234": "DKK", "831": "GBP", "832": "GBP", "833": "GBP", "248": "EUR",
  // Eurozone
  "276": "EUR", "250": "EUR", "380": "EUR", "724": "EUR", "620": "EUR",
  "528": "EUR", "056": "EUR", "040": "EUR", "246": "EUR", "372": "EUR",
  "300": "EUR", "703": "EUR", "705": "EUR", "233": "EUR", "428": "EUR",
  "440": "EUR", "442": "EUR", "470": "EUR", "196": "EUR",

  // Middle East
  "682": "SAR", "784": "AED", "634": "QAR", "414": "KWD", "048": "BHD",
  "512": "OMR", "368": "IQD", "364": "IRR", "760": "SYP", "422": "LBP",
  "400": "JOD", "376": "ILS", "275": "ILS", "887": "YER",

  // Central & South Asia
  "356": "INR", "586": "PKR", "050": "BDT", "524": "NPR", "064": "BTN",
  "144": "LKR", "004": "AFN", "462": "MVR",

  // East & Southeast Asia
  "156": "CNY", "392": "JPY", "410": "KRW", "408": "KPW", "158": "TWD",
  "496": "MNT", "764": "THB", "704": "VND", "418": "LAK", "116": "KHR",
  "104": "MMK", "458": "MYR", "702": "SGD", "360": "IDR", "608": "PHP",
  "096": "BND", "344": "HKD", "446": "MOP", "626": "USD",

  // Central Asia
  "398": "KZT", "860": "UZS", "762": "TJS", "417": "KGS", "795": "TMT",

  // Caucasus
  "268": "GEL", "051": "AMD", "031": "AZN",

  // North Africa
  "818": "EGP", "504": "MAD", "012": "DZD", "788": "TND", "434": "LYD",
  "732": "MAD",

  // East Africa
  "404": "KES", "834": "TZS", "800": "UGX", "646": "RWF", "108": "BIF",
  "231": "ETB", "232": "ERN", "262": "DJF", "706": "SOS", "729": "SDG",
  "728": "SSP", "450": "MGA",

  // West Africa
  "566": "NGN", "288": "GHS",
  "686": "XOF", "466": "XOF", "854": "XOF", "384": "XOF", "562": "XOF",
  "768": "XOF", "204": "XOF", "624": "XOF",
  "324": "GNF", "430": "LRD", "694": "SLE", "270": "GMD", "478": "MRU",
  "132": "CVE", "678": "STN",

  // Central Africa
  "180": "CDF",
  "120": "XAF", "266": "XAF", "178": "XAF", "148": "XAF", "140": "XAF",
  "226": "XAF",

  // Southern Africa
  "710": "ZAR", "072": "BWP", "516": "NAD", "894": "ZMW", "508": "MZN",
  "454": "MWK", "716": "ZWL", "024": "AOA", "748": "SZL", "426": "LSL",
  "174": "KMF", "480": "MUR", "690": "SCR",

  // Oceania
  "036": "AUD", "554": "NZD", "598": "PGK", "242": "FJD", "548": "VUV",
  "090": "SBD", "540": "XPF", "882": "WST", "776": "TOP",
  "585": "USD", "583": "USD", "584": "USD", "296": "AUD",
  "520": "AUD", "016": "USD", "258": "XPF", "316": "USD",
  "580": "USD", "570": "NZD", "184": "NZD", "876": "XPF",
  "574": "AUD",

  // Territories
  "239": "GBP", "260": "EUR", "334": "AUD",
  "086": "USD", "612": "NZD", "654": "GBP",
};

// ── Numeric ISO → alpha-2 for flag images ──
const NUMERIC_TO_ALPHA2 = {
  "840": "US", "826": "GB", "392": "JP", "036": "AU", "124": "CA",
  "756": "CH", "156": "CN", "356": "IN", "484": "MX", "076": "BR",
  "410": "KR", "702": "SG", "344": "HK", "578": "NO", "752": "SE",
  "208": "DK", "554": "NZ", "710": "ZA", "643": "RU", "792": "TR",
  "616": "PL", "764": "TH", "360": "ID", "348": "HU", "203": "CZ",
  "376": "IL", "152": "CL", "608": "PH", "784": "AE", "170": "CO",
  "682": "SA", "458": "MY", "642": "RO", "100": "BG", "191": "HR",
  "604": "PE", "586": "PK", "818": "EG", "566": "NG", "050": "BD",
  "704": "VN", "404": "KE", "804": "UA", "032": "AR", "352": "IS",
  "288": "GH", "158": "TW", "504": "MA", "400": "JO", "414": "KW",
  "634": "QA", "048": "BH", "512": "OM", "144": "LK", "104": "MM",
  "398": "KZ", "860": "UZ", "268": "GE", "051": "AM", "031": "AZ",
  "688": "RS", "070": "BA", "807": "MK", "008": "AL", "498": "MD",
  "112": "BY", "788": "TN", "012": "DZ", "422": "LB", "368": "IQ",
  "364": "IR", "004": "AF", "524": "NP", "116": "KH", "418": "LA",
  "496": "MN", "417": "KG", "762": "TJ", "795": "TM", "231": "ET",
  "834": "TZ", "800": "UG", "646": "RW", "508": "MZ", "894": "ZM",
  "072": "BW", "516": "NA", "760": "SY", "887": "YE", "388": "JM",
  "780": "TT", "214": "DO", "320": "GT", "340": "HN", "558": "NI",
  "188": "CR", "591": "PA", "068": "BO", "600": "PY", "858": "UY",
  "408": "KP", "192": "CU", "706": "SO", "729": "SD", "728": "SS",
  "434": "LY", "232": "ER", "262": "DJ", "180": "CD", "024": "AO",
  "716": "ZW", "454": "MW", "450": "MG", "598": "PG", "242": "FJ",
  "548": "VU", "090": "SB", "332": "HT", "044": "BS", "084": "BZ",
  "862": "VE", "328": "GY", "740": "SR", "748": "SZ", "426": "LS",
  "108": "BI", "270": "GM", "478": "MR", "324": "GN", "430": "LR",
  "694": "SL", "854": "BF", "140": "CF", "178": "CG", "266": "GA",
  "226": "GQ", "384": "CI", "686": "SN", "466": "ML", "562": "NE",
  "768": "TG", "204": "BJ", "624": "GW", "275": "PS", "064": "BT",
  "096": "BN", "540": "NC", "304": "GL", "238": "FK", "218": "EC",
  "222": "SV", "630": "PR", "732": "EH", "499": "ME",
  "276": "DE", "250": "FR", "380": "IT", "724": "ES", "620": "PT",
  "528": "NL", "056": "BE", "040": "AT", "246": "FI", "372": "IE",
  "300": "GR", "703": "SK", "705": "SI", "233": "EE", "428": "LV",
  "440": "LT", "442": "LU", "470": "MT", "196": "CY",
  "120": "CM", "148": "TD", "626": "TL",
  "028": "AG", "052": "BB", "212": "DM", "308": "GD",
  "659": "KN", "662": "LC", "670": "VC",
  "060": "BM", "136": "KY", "092": "VG", "850": "VI",
  "796": "TC", "660": "AI", "500": "MS",
  "531": "CW", "533": "AW", "534": "SX",
  "438": "LI", "492": "MC", "674": "SM", "336": "VA",
  "234": "FO", "831": "GG", "832": "JE", "833": "IM", "248": "AX",
  "462": "MV", "446": "MO", "174": "KM", "480": "MU", "690": "SC",
  "132": "CV", "678": "ST",
  "882": "WS", "776": "TO", "585": "PW", "583": "FM", "584": "MH",
  "296": "KI", "520": "NR", "016": "AS", "258": "PF", "316": "GU",
  "580": "MP", "570": "NU", "184": "CK", "876": "WF", "574": "NF",
  "239": "GS", "260": "TF", "334": "HM", "086": "IO",
  "612": "PN", "654": "SH",
  "666": "PM", "652": "BL", "663": "MF",
};

// ── IDs to skip on the map (Antarctica + uninhabited territories that cause visual artifacts) ──
const SKIP_IDS = new Set(["010", "260", "334", "086"]);

// ── Region mapping (numeric ID → region) ──
const REGIONS = {
  americas: new Set([
    "840","124","484","076","032","152","170","604","862","218","068","600","858",
    "328","740","591","188","558","340","222","320","084","192","332","214","388",
    "780","044","630","238","304","028","052","212","308","659","662","670","060",
    "136","092","850","796","660","500","531","533","534","666","652","663",
  ]),
  europe: new Set([
    "826","756","578","752","208","352","643","792","616","348","203","642","100",
    "191","804","112","498","688","499","807","008","070","438","492","674","336",
    "234","831","832","833","248",
    "276","250","380","724","620","528","056","040","246","372","300","703","705",
    "233","428","440","442","470","196",
  ]),
  asia: new Set([
    "156","392","410","408","158","496","764","704","418","116","104","458","702",
    "360","608","096","344","446","626",
    "398","860","762","417","795",
    "356","586","050","524","064","144","004","462",
    "268","051","031",
  ]),
  middleeast: new Set([
    "682","784","634","414","048","512","368","364","760","422","400","376","275","887",
  ]),
  africa: new Set([
    "818","504","012","788","434","732","729","728","231","232","262","706","404",
    "834","800","646","108","180","178","140","148","120","266","226","566","562",
    "466","854","686","270","324","624","694","430","384","288","768","204","478",
    "132","678","710","072","516","894","508","454","716","024","748","426","450",
    "174","480","690",
  ]),
  oceania: new Set([
    "036","554","598","242","548","090","540","882","776","585","583","584","296",
    "520","016","258","316","580","570","184","876","574",
  ]),
};

function getRegion(numId) {
  for (const [region, ids] of Object.entries(REGIONS)) {
    if (ids.has(numId)) return region;
  }
  return "other";
}

const REGION_LABELS = {
  americas: "Americas",
  europe: "Europe",
  asia: "Asia",
  middleeast: "Middle East",
  africa: "Africa",
  oceania: "Oceania",
  other: "Other",
};

// ── Favorites (persisted in localStorage) ──
function getFavorites() {
  try { return JSON.parse(localStorage.getItem("mm_favs") || "[]"); }
  catch { return []; }
}
function setFavorites(favs) {
  localStorage.setItem("mm_favs", JSON.stringify(favs));
}
function toggleFavorite(key) {
  const favs = getFavorites();
  const idx = favs.indexOf(key);
  if (idx >= 0) favs.splice(idx, 1);
  else favs.push(key);
  setFavorites(favs);
  return favs;
}

// ── State ──
let rates = null;
let geoData = null;
let leafletMap = null;
let geoLayer = null;
let lockedCountry = null;
let rankDir = "desc";
let activeRegion = "all";

// ── Skeleton loading ──
function showSkeletons(containerId, count) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  el.className = "skeleton-grid";
  for (let i = 0; i < count; i++) {
    const card = document.createElement("div");
    card.className = "skeleton-card";
    card.innerHTML = `
      <div class="skeleton-flag"></div>
      <div class="skeleton-lines">
        <div class="skeleton-line short"></div>
        <div class="skeleton-line long"></div>
      </div>
    `;
    el.appendChild(card);
  }
}

// ── Animated count-up ──
function animateValue(el, endValue, code) {
  const formatted = formatAmount(endValue, code);
  // Extract numeric part for animation
  const numMatch = formatted.match(/[\d,.]+/);
  if (!numMatch || endValue == null) {
    el.textContent = formatted;
    return;
  }
  const prefix = formatted.slice(0, formatted.indexOf(numMatch[0]));
  const suffix = formatted.slice(formatted.indexOf(numMatch[0]) + numMatch[0].length);
  const target = endValue;
  const duration = 400;
  const start = performance.now();

  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
    const current = target * eased;
    try {
      const num = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      }).format(current);
      el.textContent = prefix + num + suffix;
    } catch {
      el.textContent = formatted;
    }
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = formatted;
  }
  requestAnimationFrame(tick);
}

const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");
const convertBtn = document.getElementById("convert-btn");

// ── Populate currency dropdown ──
function populateDropdown() {
  const codes = Object.keys(CURRENCIES).sort();
  for (const code of codes) {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = `${code} — ${CURRENCIES[code].name}`;
    currencySelect.appendChild(opt);
  }
  currencySelect.value = "USD";
}

// ── Fetch exchange rates ──
async function fetchRates(base) {
  convertBtn.disabled = true;
  convertBtn.textContent = "Loading…";
  try {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    rates = data.rates;
  } catch (err) {
    alert("Failed to fetch exchange rates. Please try again.");
    console.error(err);
  } finally {
    convertBtn.disabled = false;
    convertBtn.textContent = "Convert";
  }
}

// ── Fix antimeridian-crossing polygons ──
// For rings that cross the antimeridian, we split them into separate
// east (positive lng) and west (negative lng) polygons so Leaflet
// doesn't draw lines across the entire map.
function ringCrossesAntimeridian(ring) {
  for (let i = 0; i < ring.length - 1; i++) {
    if (Math.abs(ring[i][0] - ring[i + 1][0]) > 300) return true;
  }
  return false;
}

function splitCrossingRing(ring) {
  // Split ring into segments on each side of the antimeridian.
  // Each time the ring crosses, we close off the current segment
  // and start a new one on the other side.
  const eastPoints = [];
  const westPoints = [];

  for (let i = 0; i < ring.length; i++) {
    const p = ring[i];
    if (p[0] >= 0) {
      eastPoints.push(p);
    } else {
      // Shift to positive side for the west polygon (render west of -180 as east of 180)
      westPoints.push([p[0] + 360, p[1]]);
    }
  }

  const results = [];
  if (eastPoints.length > 2) {
    eastPoints.push(eastPoints[0]); // close ring
    results.push([eastPoints]);
  }
  if (westPoints.length > 2) {
    westPoints.push(westPoints[0]); // close ring
    results.push([westPoints]);
  }
  return results;
}

function fixFeature(feature) {
  const { type, coordinates } = feature.geometry;
  const newPolygons = [];

  const polys = type === "Polygon" ? [coordinates] : coordinates;

  for (const poly of polys) {
    const outerRing = poly[0];
    if (!ringCrossesAntimeridian(outerRing)) {
      newPolygons.push(poly);
    } else {
      // Split crossing ring into east/west halves
      const splits = splitCrossingRing(outerRing);
      newPolygons.push(...splits);
    }
  }

  if (newPolygons.length === 0) return null;
  return {
    ...feature,
    geometry: { type: "MultiPolygon", coordinates: newPolygons },
  };
}

// ── Fetch world TopoJSON (50m, ~1.5MB) and convert to GeoJSON ──
async function fetchGeoJSON() {
  if (geoData) return geoData;
  const res = await fetch(
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"
  );
  const topo = await res.json();
  const allFeatures = topojson.feature(topo, topo.objects.countries);

  // Assign IDs to no-ID features so they render with the right currency,
  // then filter out Antarctica and uninhabited territories
  allFeatures.features.forEach((f) => {
    if (f.id == null && f.properties.name) {
      // Map disputed/unrecognized territories to parent country IDs
      const nameMap = {
        "Somaliland": "706",       // → Somalia / SOS
        "Kosovo": "688",           // → Serbia / EUR (uses EUR in practice)
        "N. Cyprus": "196",        // → Cyprus / EUR
        "Indian Ocean Ter.": null, // skip
        "Siachen Glacier": null,   // skip
      };
      const mapped = nameMap[f.properties.name];
      if (mapped) f.id = mapped;
      else f._skip = true;
    }
  });

  const filtered = allFeatures.features.filter((f) => {
    if (f._skip) return false;
    if (f.id == null) return false;
    const id = String(f.id).padStart(3, "0");
    return !SKIP_IDS.has(id);
  });

  // Fix polygons that cross the antimeridian (Russia, Fiji, USA/Alaska, etc.)
  // We drop any sub-polygon ring that crosses — removes tiny slivers but kills all line artifacts
  allFeatures.features = filtered.map(fixFeature).filter(Boolean);
  geoData = allFeatures;
  return geoData;
}

// ── Fallback rates for currencies not in the API (relative to USD) ──
const FALLBACK_RATES_USD = {
  KPW: 900, // North Korean Won — official rate ~900 per 1 USD
};

// ── Convert amount ──
function convert(targetCode) {
  if (!rates) return null;
  const amount = parseFloat(amountInput.value) || 0;
  let rate = rates[targetCode];
  if (rate == null) {
    // Try fallback: convert via USD
    const fallback = FALLBACK_RATES_USD[targetCode];
    const usdRate = rates["USD"];
    if (fallback != null && usdRate != null) {
      rate = fallback * usdRate;
    } else {
      return null;
    }
  }
  return amount * rate;
}

// ── Format currency ──
function formatAmount(value, code) {
  if (value == null) return "—";
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${code} ${value.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
  }
}

// ── Country color based on converted value ──
function getColor(value) {
  if (value == null) return "#27272a";
  const log = Math.log10(Math.max(value, 0.01));
  const t = Math.max(0, Math.min(1, (log + 2) / 10));
  const r = Math.round(56 + t * 111);
  const g = Math.round(189 - t * 50);
  const b = Math.round(248 - t * 90);
  return `rgb(${r},${g},${b})`;
}

// ── Flag URL ──
function flagUrl(countryCode) {
  return `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
}

// ── Get country name with overrides ──
function getCountryName(feature) {
  const id = feature.id;
  if (id != null) {
    const paddedId = String(id).padStart(3, "0");
    if (NAME_OVERRIDES[paddedId]) return NAME_OVERRIDES[paddedId];
  }
  return feature.properties.name || "Unknown";
}

// ── Render map ──
async function renderMap() {
  const geo = await fetchGeoJSON();

  if (!leafletMap) {
    leafletMap = L.map("map", {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 7,
      worldCopyJump: true,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    }).addTo(leafletMap);
  }

  if (geoLayer) {
    leafletMap.removeLayer(geoLayer);
  }

  geoLayer = L.geoJSON(geo, {
    style: (feature) => {
      const id = feature.id;
      const paddedId = id != null ? String(id).padStart(3, "0") : null;
      const currCode = paddedId ? COUNTRY_TO_CURRENCY[paddedId] : null;
      const value = currCode ? convert(currCode) : null;
      return {
        fillColor: getColor(value),
        fillOpacity: 0.7,
        color: "#3f3f46",
        weight: 0.8,
      };
    },
    onEachFeature: (feature, layer) => {
      const id = feature.id;
      const paddedId = id != null ? String(id).padStart(3, "0") : null;
      const name = getCountryName(feature);
      const currCode = paddedId ? COUNTRY_TO_CURRENCY[paddedId] : null;
      const value = currCode ? convert(currCode) : null;
      const display = currCode ? formatAmount(value, currCode) : "N/A";

      layer.bindTooltip(
        `<div class="country-name">${name}</div>` +
        `<div class="country-amount">${display}</div>` +
        (currCode ? `<div style="color:#a1a1aa;font-size:0.75rem">${currCode}</div>` : ""),
        { className: "country-tooltip", sticky: true }
      );

      layer.on("mouseover", function () {
        this.setStyle({ fillOpacity: 0.9, weight: 2, color: "#38bdf8" });
        this.bringToFront();
      });
      layer.on("mouseout", function () {
        geoLayer.resetStyle(this);
      });
      layer.on("click", function () {
        showLockedPanel(name, currCode, paddedId);
      });
    },
  }).addTo(leafletMap);
}

// ── Locked panel (click-to-lock on map) ──
function showLockedPanel(name, currCode, numId) {
  const panel = document.getElementById("locked-panel");
  if (!currCode) { panel.classList.add("hidden"); return; }
  const value = convert(currCode);
  const cc = NUMERIC_TO_ALPHA2[numId] || (CURRENCIES[currCode] && CURRENCIES[currCode].cc) || "";
  panel.classList.remove("hidden");
  const rateStr = getRateString(currCode);
  panel.innerHTML = `
    <img class="lp-flag" src="https://flagcdn.com/w80/${cc.toLowerCase()}.png"
         alt="${name}" onerror="this.style.display='none'">
    <div class="lp-info">
      <div class="lp-name">${name}</div>
      <div class="lp-amount">${formatAmount(value, currCode)}</div>
      <div class="lp-rate">${rateStr}</div>
      <div class="lp-code">${currCode} — ${CURRENCIES[currCode] ? CURRENCIES[currCode].name : currCode}</div>
    </div>
    <button class="lp-close" title="Close">&times;</button>
  `;
  panel.querySelector(".lp-close").addEventListener("click", () => {
    panel.classList.add("hidden");
  });
}

// ── Build flag list from all mapped countries ──
function getAllFlagEntries() {
  const entries = [];

  for (const [numId, currCode] of Object.entries(COUNTRY_TO_CURRENCY)) {
    if (SKIP_IDS.has(numId)) continue;
    const name = NAME_OVERRIDES[numId] || numId;
    const info = CURRENCIES[currCode];
    if (!info) continue;
    const cc = NUMERIC_TO_ALPHA2[numId] || info.cc;
    const region = getRegion(numId);
    entries.push({ name, code: currCode, cc, currName: info.name, region, numId });
  }

  return entries.sort((a, b) => a.name.localeCompare(b.name));
}

// ── Get rate indicator (strong/weak relative to 1:1) ──
function getRateIndicator(code) {
  if (!rates) return { cls: "neutral", text: "—" };
  const rate = rates[code];
  if (rate == null) {
    const fb = FALLBACK_RATES_USD[code];
    if (fb == null) return { cls: "neutral", text: "—" };
    if (fb > 1) return { cls: "up", text: "\u25B2 " + fb.toFixed(2) };
    if (fb < 1) return { cls: "down", text: "\u25BC " + fb.toFixed(4) };
    return { cls: "neutral", text: "1:1" };
  }
  // Rate relative to the selected base currency
  if (rate > 1.01) return { cls: "up", text: "\u25B2 " + rate.toFixed(2) };
  if (rate < 0.99) return { cls: "down", text: "\u25BC " + rate.toFixed(4) };
  return { cls: "neutral", text: "1:1" };
}

// ── Format raw rate ──
function getRateString(code) {
  if (!rates) return "";
  const base = currencySelect.value;
  const rate = rates[code];
  if (rate == null) {
    const fb = FALLBACK_RATES_USD[code];
    const usdRate = rates["USD"];
    if (fb != null && usdRate != null) {
      return `1 ${base} = ${(fb * usdRate).toFixed(4)} ${code}`;
    }
    return "";
  }
  return `1 ${base} = ${rate > 0.01 ? rate.toFixed(4) : rate.toFixed(6)} ${code}`;
}

// ── Render flags with search, favorites, regions, rates, indicators ──
function renderFlags() {
  const grid = document.getElementById("flags-grid");
  grid.innerHTML = "";
  grid.className = ""; // clear skeleton class
  grid.style.display = ""; // reset
  // Re-add proper grid class via id selector in CSS

  const searchVal = (document.getElementById("flags-search").value || "").toLowerCase();
  const favs = getFavorites();

  let entries = getAllFlagEntries();

  // Filter by search
  if (searchVal) {
    entries = entries.filter((e) =>
      e.name.toLowerCase().includes(searchVal) ||
      e.code.toLowerCase().includes(searchVal) ||
      e.currName.toLowerCase().includes(searchVal)
    );
  }

  // Filter by region
  if (activeRegion !== "all") {
    entries = entries.filter((e) => e.region === activeRegion);
  }

  // Sort: favorites first, then alphabetical (or by region if grouping)
  entries.sort((a, b) => {
    const aFav = favs.includes(a.name) ? 0 : 1;
    const bFav = favs.includes(b.name) ? 0 : 1;
    if (aFav !== bFav) return aFav - bFav;
    return a.name.localeCompare(b.name);
  });

  // Group by region if "all" is selected and no search
  const grouped = activeRegion === "all" && !searchVal;
  if (grouped) {
    const regionOrder = ["americas", "europe", "asia", "middleeast", "africa", "oceania", "other"];
    const groups = {};
    for (const e of entries) {
      const r = favs.includes(e.name) ? "_favorites" : e.region;
      if (!groups[r]) groups[r] = [];
      groups[r].push(e);
    }
    // Render favorites first
    if (groups._favorites && groups._favorites.length > 0) {
      renderRegionGroup(grid, "Favorites", groups._favorites, favs);
    }
    for (const r of regionOrder) {
      if (groups[r] && groups[r].length > 0) {
        renderRegionGroup(grid, REGION_LABELS[r] || r, groups[r], favs);
      }
    }
  } else {
    for (const entry of entries) {
      grid.appendChild(createFlagCard(entry, favs));
    }
  }
}

function renderRegionGroup(grid, label, entries, favs) {
  const header = document.createElement("div");
  header.className = "region-header";
  header.textContent = label;
  grid.appendChild(header);
  for (const entry of entries) {
    grid.appendChild(createFlagCard(entry, favs));
  }
}

function createFlagCard(entry, favs) {
  const value = convert(entry.code);
  const isFav = favs.includes(entry.name);
  const rateStr = getRateString(entry.code);
  const indicator = getRateIndicator(entry.code);

  const card = document.createElement("div");
  card.className = "flag-card";
  card.innerHTML = `
    <img src="${flagUrl(entry.cc)}" alt="${entry.name} flag" loading="lazy"
         onerror="this.style.display='none'">
    <div class="flag-info">
      <span class="flag-country">${entry.name}</span>
      <span class="flag-amount count-up" data-code="${entry.code}" data-value="${value || 0}"></span>
      <span class="flag-rate">${rateStr}</span>
    </div>
    <span class="flag-indicator ${indicator.cls}">${indicator.text}</span>
    <button class="fav-btn ${isFav ? "active" : ""}" title="Favorite">&#9733;</button>
  `;

  // Animate the amount
  const amountEl = card.querySelector(".flag-amount");
  if (value != null) {
    animateValue(amountEl, value, entry.code);
  } else {
    amountEl.textContent = "—";
  }

  card.querySelector(".fav-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(entry.name);
    renderFlags();
  });
  return card;
}

// ── Search input listener ──
document.getElementById("flags-search").addEventListener("input", () => {
  renderFlags();
});

// ── Region button listeners ──
document.querySelectorAll(".region-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".region-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeRegion = btn.dataset.region;
    renderFlags();
  });
});

// ── Ranking mode ──
function renderRanking() {
  const list = document.getElementById("ranking-list");
  list.innerHTML = "";

  const entries = getAllFlagEntries();
  const ranked = entries
    .map((e) => ({ ...e, value: convert(e.code) }))
    .filter((e) => e.value != null && e.value > 0);

  ranked.sort((a, b) =>
    rankDir === "desc" ? b.value - a.value : a.value - b.value
  );

  const maxVal = ranked.length > 0 ? ranked[0].value : 1;

  ranked.forEach((entry, i) => {
    const pct = (entry.value / maxVal) * 100;
    const posClass = i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : "";
    const row = document.createElement("div");
    row.className = "rank-row";
    row.innerHTML = `
      <span class="rank-pos ${posClass}">#${i + 1}</span>
      <img class="rank-flag" src="${flagUrl(entry.cc)}" alt="${entry.name}"
           onerror="this.style.display='none'" loading="lazy">
      <div class="rank-info">
        <div class="rank-name">${entry.name}</div>
        <div class="rank-code">${entry.code}</div>
      </div>
      <div class="rank-bar-wrap">
        <div class="rank-bar" style="width: ${pct.toFixed(1)}%"></div>
      </div>
      <span class="rank-amount">${formatAmount(entry.value, entry.code)}</span>
    `;
    list.appendChild(row);
  });
}

// ── Ranking sort buttons ──
document.querySelectorAll(".rank-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".rank-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    rankDir = btn.dataset.dir;
    const title = document.querySelector(".ranking-title");
    title.textContent = rankDir === "desc"
      ? "Where your money goes furthest"
      : "Where your money is worth least";
    renderRanking();
  });
});

// ── Tab switching ──
function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const views = {
    map: document.getElementById("map-view"),
    flags: document.getElementById("flags-view"),
    ranking: document.getElementById("ranking-view"),
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      Object.values(views).forEach((v) => v.classList.remove("active"));
      views[tab.dataset.mode].classList.add("active");

      if (tab.dataset.mode === "map" && leafletMap) {
        setTimeout(() => leafletMap.invalidateSize(), 100);
      }
    });
  });
}

// ── Theme toggle ──
function setupTheme() {
  const saved = localStorage.getItem("mm_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);

  // Swap map tiles when theme changes
  function updateMapTiles() {
    if (!leafletMap) return;
    const theme = document.documentElement.getAttribute("data-theme");
    leafletMap.eachLayer((layer) => {
      if (layer._url && layer._url.includes("basemaps.cartocdn.com")) {
        leafletMap.removeLayer(layer);
      }
    });
    const tileUrl = theme === "light"
      ? "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png";
    L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    }).addTo(leafletMap);
  }

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("mm_theme", next);
    updateMapTiles();
  });
}

// ── Convert action ──
async function doConvert() {
  const base = currencySelect.value;

  // Show skeletons while loading
  if (!rates) {
    showSkeletons("flags-grid", 12);
  }

  await fetchRates(base);
  if (!rates) return;

  renderMap();
  renderFlags();
  renderRanking();
}

// ── Enter key triggers convert ──
amountInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") doConvert();
});

currencySelect.addEventListener("keydown", (e) => {
  if (e.key === "Enter") doConvert();
});

convertBtn.addEventListener("click", doConvert);

// ── Init ──
populateDropdown();
setupTabs();
setupTheme();
doConvert();
