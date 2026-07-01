export interface Company {
  id: number;
  name: string;
  initial: string;
  verified: boolean;
  peopleCount: string;
  jobsCount: number;
  stage: string;
  websiteUrl: string;
}

export interface Job {
  id: number;
  title: string;
  employmentType: string;
  location: string;
  salaryRange: string;
  category: string;
  postedAt: string;
  companyId: number;
  companyName: string;
  companyInitial: string;
}

export const CATEGORIES = [
  "All",
  "Engineering",
  "Product",
  "Design",
  "Sales",
  "Marketing",
  "Operations",
] as const;

export type Category = (typeof CATEGORIES)[number];
