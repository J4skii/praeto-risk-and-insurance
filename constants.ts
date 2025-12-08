import { CompanyDetails, Partner, StatItem, Testimonial } from "./types";

export const COMPANY_DETAILS: CompanyDetails = {
  regName: "Praeto Trading cc",
  tradingName: "Praeto Risk and Insurance Management Solutions",
  regNo: "CK 2003/049530/23",
  fsca: "1457",
  cms: "ORG 3620",
  tax: "9265546151",
  vat: "4620241028",
  office: "1 Mirka, 63 Eight Avenue, Windermere, Durban 4001",
  tel: "031 205 0384",
  email: "info@praeto.co.za",
  web: "www.praeto.co.za",
  members: ["Berkeley Eldred Pretorius (60 %)", "Keshnee Pretorius (40 %)"],
  bee: "Level 1 B-BBEE contributor, 40 % female owned"
};

export const BUSINESS_PRODUCTS = [
  {
    name: "Material Damage Insurance",
    desc: "Covers physical damage to municipal or business property, including standard & non-standard buildings, substations & transformers, street & traffic lights, community facilities, water purification plants & pump stations, JoJo tanks & stands, fencing, heritage assets, air conditioners, sport & recreation structures, bus shelters & ranks, standby generators, private dwellings/residential units/hostels/flats, non-standard structures, theft of immovable property, temporary repair costs, malicious damage, reasonable precautions, and claims preparation costs."
  },
  {
    name: "Deterioration of Stock Insurance",
    desc: "Covers spoilage or deterioration of temperature-sensitive stock stored in cold rooms, freezers or refrigerated units due to breakdown, power failure, or accidental damage, including reasonable costs and claims preparation costs."
  },
  {
    name: "Business Interruption",
    desc: "Cover for lost income and operational expenses following an insured event. Includes loss of income, increase in cost of working, additional increase in cost of working, fines & penalties, and claims preparation costs."
  },
  {
    name: "Office Contents Insurance",
    desc: "Covers office-based movable assets and administrative risks, including contents & movable property, theft (forcible & violent entry/exit), loss of documents, legal documents, reasonable costs, locks & keys, and claims preparation costs."
  },
  {
    name: "Accidental Damage Insurance",
    desc: "Covers sudden, unforeseen physical damage to insured property not otherwise insured under a more specific section. Includes coverage for the total value of property and claims preparation costs."
  },
  {
    name: "Accounts Receivable Insurance",
    desc: "Covers financial loss when debtors cannot pay. Includes outstanding debtors, indemnity limit, and claims preparation costs."
  },
  {
    name: "Electronic Equipment Insurance",
    desc: "Covers municipal and business electronics, including specified electronic equipment, laptops, tablets, CCTV and related devices, as well as data reconstruction, increased cost of working, and claims preparation costs."
  },
  {
    name: "Business All-Risk Insurance",
    desc: "Covers portable items taken off premises, including laptops & portable computers, cell phones, mayoral chains, firearms, CCTV equipment, and similar specified portable assets."
  },
  {
    name: "Theft Insurance",
    desc: "Covers theft following forcible and violent entry or exit. Includes first-loss theft cover, property in the open (locked area only), malicious damage to buildings, personal effects of employees used for work, locks & keys, reasonable precautions, and claims preparation costs."
  },
  {
    name: "Money Insurance",
    desc: "Covers loss of money on premises or in transit, including major & minor limits, seasonal increase, crossed cheques, receptacles, reasonable precautions, personal accident (capital, weekly, medical), and claims preparation costs."
  },
  {
    name: "Goods in Transit Insurance",
    desc: "Covers goods while being transported. Includes limit of indemnity, cover for fire, collision and overturning, debris removal, reasonable precautions, and claims preparation costs."
  },
  {
    name: "Glass Insurance",
    desc: "Covers breakage of glass structures including interior & exterior glass, windows and mirrors, as well as debris removal and claims preparation costs."
  },
  {
    name: "Fidelity Guarantee (Employee Dishonesty)",
    desc: "Covers financial loss due to employee theft or fraud. Includes blanket cover for all employees, period limits, costs of recovery, and claims preparation costs."
  },
  {
    name: "Computer Fraud Insurance",
    desc: "Covers theft of money or securities resulting from fraudulent or unauthorised use of computer systems, including investigation and claims preparation costs."
  },
  {
    name: "Fraudulent Transfer Instructions Insurance",
    desc: "Covers losses where fraudulent written or electronic payment instructions are issued to a financial institution, resulting in unauthorised transfers from the insured’s accounts, including claims preparation costs."
  },
  {
    name: "Machinery Breakdown Insurance",
    desc: "Covers operational failure and sudden accidental breakdown of machinery, including listed machinery items, damage to surrounding property, automatic additions, and claims preparation costs."
  },
  {
    name: "Contractors All Risks (CAR)",
    desc: "Covers construction projects and civil works. Includes estimated construction turnover, any one contract limits, debris removal, professional fees, surrounding property, public liability, escalation and claims preparation costs."
  },
  {
    name: "Small Craft Insurance",
    desc: "Covers boats and related marine equipment against accidental damage, theft, fire and other insured perils, including debris removal and claims preparation costs."
  },
  {
    name: "Commercial Hull Insurance",
    desc: "Covers commercial vessels for physical loss or damage, including hull, machinery and equipment, and may extend to liability-related costs and claims preparation expenses."
  },
  {
    name: "Kidnap & Ransom Insurance",
    desc: "Protects organisations and individuals against the financial impact of kidnapping and extortion events, including ransom payments, specialist negotiators, crisis response costs, and associated expenses."
  },
  {
    name: "Travel Insurance",
    desc: "Provides cover for business and official travel, including emergency medical expenses, personal accident, trip cancellation or curtailment, lost baggage, and other travel-related risks."
  },
  {
    name: "Cyber Liability Insurance",
    desc: "Covers losses arising from cyber incidents such as data breaches, ransomware, hacking and privacy violations, including incident response, notification costs, business interruption and liability to third parties."
  },
  {
    name: "Data Liability Insurance",
    desc: "Covers loss, corruption or unauthorised disclosure of electronic data, software or digital records, and may include restoration costs, privacy breach expenses and related claims preparation costs."
  },
  {
    name: "Medical Malpractice Insurance",
    desc: "Covers medical practitioners and healthcare providers for claims alleging negligence, error or omission in the provision of medical services, including defence costs and settlements."
  },
  {
    name: "Group Personal Accident Insurance",
    desc: "Provides lump-sum and/or weekly benefits for employees who suffer accidental death, permanent disability or temporary total disablement while on duty or travelling for work."
  },
  {
    name: "Personal Accident Cover",
    desc: "Covers injury, disability, or death of councillors, staff, or protection units. Includes death benefits, permanent disability, temporary total disablement, accelerated death benefit, medical expenses, repatriation, relocation, mobility, and maximum limits per life and per event."
  },
  {
    name: "Stated Benefits Insurance",
    desc: "Covers employees based on salary and wage roll. Includes death benefit, permanent disability, temporary disability, medical expenses, accelerated benefits, mobility/relocation, and maximum limits per life and per event."
  },
  {
    name: "Fleet Insurance – Comprehensive",
    desc: "Full cover for all municipal or business vehicles, including specified & unspecified fleets, private vehicles, LDVs & bakkies, trucks & commercial vehicles, fire engines, minibuses, tractors, emergency vehicles, buses, motorcycles, lawnmowers, implements & accessories, trailers & caravans, special-type vehicles, third-party/fire/theft cover, car hire extension (30 days), roadside assistance, motor third-party liability, and extensions such as wreckage removal, fire extinguishing, medical expenses, loss of keys, and theft of radios/phones."
  },
  {
    name: "Subsidised Motor Fleet Insurance",
    desc: "For staff on municipal subsidised vehicle schemes. Includes all subsidised scheme vehicles, total sum insured, and 30-day car hire (Class B) where selected."
  },
  {
    name: "Passenger Liability Insurance",
    desc: "Covers the insured’s legal liability for death or bodily injury to passengers travelling in insured vehicles in the course of municipal or business operations."
  },
  {
    name: "Public Liability Insurance",
    desc: "Covers public claims for injury, death, or property damage arising from the insured’s business activities. Includes extensions for wrongful arrest, defamation, gratuitous negligent advice, product liability, defective workmanship, incidental medical malpractice, spread of fire, employer’s liability, and legal defence costs."
  },
  {
    name: "Product Liability Insurance",
    desc: "Covers legal liability for injury, illness or property damage caused by products manufactured, supplied or distributed by the insured, including defence costs and settlements."
  },
  {
    name: "Professional Indemnity Insurance",
    desc: "Protects professionals and technical staff against claims for financial loss arising from negligent advice, design, error or omission in the performance of professional services, including defence costs."
  },
  {
    name: "Employers Liability Insurance",
    desc: "Covers the insured’s legal liability to employees for injury, illness or death arising out of and in the course of their employment where such claims fall outside statutory compensation."
  },
  {
    name: "Event Liability Insurance",
    desc: "Covers the organiser’s legal liability for injury, illness or property damage suffered by attendees or third parties at insured events, including legal defence costs."
  },
  {
    name: "Directors & Officers Liability",
    desc: "Covers councillors, directors and executives for wrongful acts, errors or omissions in their managerial capacity. Includes individual D&O cover, company reimbursement, and defence costs."
  },
  {
    name: "Business Strategy & Risk Advisory Services",
    desc: "Professional consulting for insurance structuring, risk management, corporate governance and operational optimisation, helping clients design and implement fit-for-purpose risk and insurance programmes."
  }
];

export const PERSONAL_PRODUCTS = [
  { name: "Vehicle Insurance", desc: "Protects cars, motorcycles, and road vehicles from accidents, damage, theft, and third-party liability. Includes roadside assistance." },
  { name: "Household Contents Insurance", desc: "Covers personal belongings inside your home from theft, burglary, storms, fire, and accidental damage." },
  { name: "Credit Life Insurance", desc: "Pays off outstanding debt (home loan, vehicle finance, personal loans) if the insured dies, becomes disabled, or is retrenched." },
  { name: "Medical Aid", desc: "Comprehensive healthcare cover including GP visits, specialists, hospitalisation, maternity, emergencies, and gap cover options." },
  { name: "Health Insurance (Medical Plans)", desc: "Affordable health cover for day-to-day and hospital expenses. Includes screening tests, vaccines, chronic medication, and procedures." },
  { name: "Educational Policies", desc: "Long-term savings and investment plans that fund your child’s education, protect against unexpected events, and reduce future financial pressure." },
  { name: "Retirement Planning", desc: "Investment strategies and retirement products that provide long-term financial independence with tax benefits and security." },
  { name: "Estate Planning", desc: "Helps individuals organise assets, reduce family disputes, and ensure that beneficiaries inherit according to their wishes." },
  { name: "Funeral Insurance", desc: "Quick payout (often within 24–48 hours) covering funeral costs for individuals and families, including accidental death and additional benefits." },
  { name: "Life Cover", desc: "Pays a lump sum to your family in the event of death, disability, or dread disease — providing income replacement and financial safety." },
  { name: "Wills", desc: "Ensures your estate is distributed according to your wishes, provides guardianship arrangements, and helps avoid legal conflicts." }
];

export const STATS: StatItem[] = [
  { value: 20, prefix: "R", suffix: "bn AUM" },
  { value: 15, suffix: "% claims ratio" },
  { value: 60, suffix: "% industry avg" },
  { value: 2300, prefix: "", suffix: "+ clients" }
];

export const PARTNERS: Partner[] = [
  { name: "Old Mutual Insure", href: "https://www.ominsure.co.za/", domain: "https://eu-images.contentstack.com/v3/assets/blt0554f48052bb4620/bltf7b00ce2a525b791/68c015f4063dd08789c702ea/H2_Campaign_1312x540.webp?width=1312&height=540&format=webp&quality=100" },
  { name: "Sanlam", href: "https://www.sanlam.co.za/", domain: "https://www.sanlam.co.za/Style%20Library/img/sanlam-logo.png" },
  { name: "Hollard", href: "https://www.hollard.co.za/", domain: "/logos/hollard.svg" },
  { name: "Santam", href: "https://www.santam.co.za/", domain: "https://www.santam.co.za/static/logo.svg" },
  { name: "Guardrisk", href: "https://www.guardrisk.co.za/", domain: "https://guardrisk.co.za/wp-content/themes/guardrisk/img/logo.png" }
];

export const TESTIMONIALS: Testimonial[] = [
  { text: "Praeto's risk survey reduced our premium by 22 % and we still had wider cover.", author: "Financial Manager, Gamagara Municipality" },
  { text: "Claims ratio below 7 % for three years running — unrivalled value.", author: "Risk Officer, Ray Nkonyeni LM" }
];

export const MAIN_CTA = "Get a tailored quote";
