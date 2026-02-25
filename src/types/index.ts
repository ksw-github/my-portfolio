export interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

export interface Project {
  title: string;
  desc: string;
  stack: string[];
  color: string;
  image: string;
  company: string;
  github: string;
  demo: string;
}

export interface GithubStat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export interface Experience {
  company: string;
  department?: string;
  level?: string;
  position: string;
  role: string;
  period: string;
  desc: string[];
  stack: string[];
  color: string;
  icon: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa?: string;
  color: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  color: string;
  icon: string;
}
