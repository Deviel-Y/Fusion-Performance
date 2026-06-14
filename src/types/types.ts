export type NavItem = {
  key: string;
  href: string;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  colSpan?: number;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  badge: string;
  stats: { label: string; value: string }[];
};

export type Transformation = {
  id: string;
  name: string;
  duration: string;
  result: string;
  photoUrl: string;
};

export type LeadFormData = {
  name: string;
  email: string;
  goal: string;
  phone?: string;
};

export type GoalOption = {
  value: string;
  label: string;
};

export type Lang = "en" | "fa";
