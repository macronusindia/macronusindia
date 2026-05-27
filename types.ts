/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
}

export interface TechCard {
  name: string;
  category: string;
  description: string;
  icon: string;
  color: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  image: string;
  stats: { label: string; value: string };
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  details: string[];
  metrics: string;
}
