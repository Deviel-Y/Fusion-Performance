import type { NavItem, Feature, Service, Transformation, GoalOption } from "@/types/types";

export const NAV_ITEMS: NavItem[] = [
  { key: "programs", href: "#programs" },
  { key: "coach", href: "#coach" },
  { key: "results", href: "#results" },
  { key: "contact", href: "#contact" },
];

export const BRANDS = [
  "Nike",
  "Under Armour",
  "Adidas",
  "Rogue Fitness",
  "Gymshark",
  "Optimum Nutrition",
  "MyProtein",
  "Bowflex",
  "Lululemon",
  "Reebok",
];

export const FEATURES: Feature[] = [
  {
    id: "training",
    title: "Personalized Training",
    description:
      "Custom workout programs engineered around your body type, fitness level, and schedule — no two plans are ever the same.",
    colSpan: 2,
  },
  {
    id: "nutrition",
    title: "Nutrition Plans",
    description:
      "Science-backed macro and meal strategies tailored to fuel performance and accelerate your transformation.",
  },
  {
    id: "support",
    title: "24/7 Support",
    description:
      "Dedicated coach access around the clock — questions answered, form checked, motivation delivered.",
  },
  {
    id: "tracking",
    title: "Progress Tracking",
    description:
      "Advanced biometric and performance metrics visualized week over week so you always know exactly how far you've come.",
    colSpan: 2,
  },
];

export const SERVICES: Service[] = [
  {
    id: "strength",
    title: "Strength Training",
    description:
      "Build raw power and sculpt dense muscle through progressive overload protocols designed by elite-level coaches. Every rep, every set, counts.",
    badge: "Most Popular",
    stats: [
      { label: "Avg Strength Gain", value: "+45%" },
      { label: "Program Length", value: "12 Weeks" },
    ],
  },
  {
    id: "fat-loss",
    title: "Fat Loss Protocol",
    description:
      "Precision-engineered programs that maximize fat oxidation while preserving every ounce of hard-earned muscle mass. Real results, no gimmicks.",
    badge: "Results Guaranteed",
    stats: [
      { label: "Avg Weight Lost", value: "18 lbs" },
      { label: "Program Length", value: "8 Weeks" },
    ],
  },
  {
    id: "hiit",
    title: "HIIT & Conditioning",
    description:
      "High-intensity interval protocols that shred body fat and skyrocket cardiovascular endurance simultaneously. Brutal. Effective. Transformative.",
    badge: "Elite Level",
    stats: [
      { label: "Calorie Burn", value: "3× Increase" },
      { label: "Sessions / Week", value: "4–5" },
    ],
  },
];

const PX = "https://images.pexels.com/photos";

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "1",
    name: "Marcus T.",
    duration: "12 Weeks",
    result: "Lost 32 lbs",
    photoUrl: `${PX}/8875312/pexels-photo-8875312.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`,
  },
  {
    id: "2",
    name: "Priya K.",
    duration: "8 Weeks",
    result: "Lost 18 lbs",
    photoUrl: `${PX}/277861/pexels-photo-277861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`,
  },
  {
    id: "3",
    name: "Jason R.",
    duration: "16 Weeks",
    result: "Lost 45 lbs",
    photoUrl: `${PX}/8875307/pexels-photo-8875307.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`,
  },
  {
    id: "4",
    name: "Sofia M.",
    duration: "10 Weeks",
    result: "Lost 22 lbs",
    photoUrl: `${PX}/866027/pexels-photo-866027.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`,
  },
  {
    id: "5",
    name: "Derek W.",
    duration: "12 Weeks",
    result: "+15 lbs Muscle",
    photoUrl: `${PX}/17924370/pexels-photo-17924370.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`,
  },
  {
    id: "6",
    name: "Aisha N.",
    duration: "8 Weeks",
    result: "Lost 20 lbs",
    photoUrl: `${PX}/5149167/pexels-photo-5149167.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`,
  },
];

export const GOAL_OPTIONS: GoalOption[] = [
  { value: "weight-loss", label: "Weight Loss" },
  { value: "muscle-gain", label: "Muscle Gain" },
  { value: "athletic-performance", label: "Athletic Performance" },
  { value: "general-fitness", label: "General Fitness & Health" },
];
