import { CompanyDetails, Partner, StatItem, Testimonial } from "./types";

export const COMPANY_DETAILS: CompanyDetails = {
  regName: "Praeto Trading cc",
  tradingName: "Praeto Risk and Insurance Management Solutions",
  regNo: "CK 2003/049530/23",
  fsp: "1457",
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
  "Accidental Damage", "Accounts Receivable", "Business All Risk", "Business Interruption", "Commercial Crime",
  "Contractors All Risk", "Commercial Hull", "Computer Fraud", "Cyber Liability", "Data Liability",
  "Deterioration of Stock", "D&O Liability", "Employee Dishonesty", "Employer’s Liability", "EPLI",
  "Event Liability", "Fidelity Guarantee", "Fire", "Fraudulent Transfer", "Glass", "Goods in Transit",
  "Group Personal Accident", "K&R", "Machinery Breakdown", "Medical Malpractice", "Money", "Passenger Liability",
  "Product Liability", "PII", "Public Liability", "Theft", "Travel", "Stated Benefits", "Key-Man", "Buy-Sell Agreement"
];

export const PERSONAL_PRODUCTS = [
  "Vehicle Insurance", "Household Contents", "Credit Life", "Medical Aid", "Health Insurance",
  "Educational Policies", "Retirement Planning", "Estate Planning", "Funeral Insurance", "Life Cover", "Wills"
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
  { name: "Hollard", href: "https://www.hollard.co.za/", domain: "https://www.hollard.co.za/_next/static/media/hollard-logo-white.8b55d018.svg" },
  { name: "Santam", href: "https://www.santam.co.za/", domain: "https://www.santam.co.za/static/logo.svg" },
  { name: "Guardrisk", href: "https://www.guardrisk.co.za/", domain: "https://guardrisk.co.za/wp-content/themes/guardrisk/img/logo.png" }
];

export const TESTIMONIALS: Testimonial[] = [
  { text: "Praeto's risk survey reduced our premium by 22 % and we still had wider cover.", author: "Financial Manager, Gamagara Municipality" },
  { text: "Claims ratio below 7 % for three years running — unrivalled value.", author: "Risk Officer, Ray Nkonyeni LM" }
];

export const MAIN_CTA = "Get a tailored quote";
