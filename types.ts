export interface CompanyDetails {
  regName: string;
  tradingName: string;
  regNo: string;
  fsp: string;
  cms: string;
  tax: string;
  vat: string;
  office: string;
  tel: string;
  email: string;
  web: string;
  members: string[];
  bee: string;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix: string;
}

export interface Partner {
  name: string;
  href: string;
  domain: string; // Used for fetching logo
}

export interface Testimonial {
  text: string;
  author: string;
}
