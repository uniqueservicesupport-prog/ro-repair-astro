// src/brand-types.ts

export interface BrandInfo {
  id: string;
  name: string;
  slug: string;
  logoText: string;
  logoUrl?: string;
  subTagline?: string;
  tagline: string;
  accentColor: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroMotto?: string;
  calloutScript?: string;
  techBadge?: string;
  tollFree?: string;
  affiliationBadge?: string;
  brandThemeColors?: {
    primary: string;
    darkBg: string;
    accent: string;
    lightBg: string;
    border: string;
  };
  commonProblems: string[];
  brandFaqs: { question: string; answer: string }[];
  popularSearches?: string[];
  showcaseImage?: string;
  heroImage?: string;
  heroBgImage?: string;
  partsBannerImage?: string;
  bottomBannerImage?: string;
  serviceImages?: {
    repair?: string;
    filter?: string;
    amc?: string;
    quality?: string;
  };
}

// 👇 Ye LeadForm ke liye zaroori hai
export interface LeadFormData {
  fullName: string;
  mobileNumber: string;
  pinCode: string;
  selectedBrand: string;
  serviceType: string;
}