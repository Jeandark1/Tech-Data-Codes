export interface Metric {
  id: string;
  value: number;
  label: string;
  icon: string;
  suffix?: string;
  prefix?: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Language {
  code: 'es' | 'en';
  name: string;
  flag: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  metrics: {
    label: string;
    value: string;
  }[];
}