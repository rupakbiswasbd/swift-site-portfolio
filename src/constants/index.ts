// Navigation menu items - shared between desktop and mobile menus
export const MENU_ITEMS = [
  { label: "Home", section: "hero" },
  { label: "About", section: "about" },
  { label: "Skills", section: "skills" },
  { label: "Experience and education", section: "experience" },
  { label: "Projects", section: "projects" },
  { label: "Contact", section: "contact" },
] as const;

// Personal information
export const PERSONAL_INFO = {
  name: "Hemendra Rupak Biswas",
  title: "iOS Developer",
  email: "rupakbiswas@live.com",
  linkedin: "https://www.linkedin.com/in/rupak-biswas",
  github: "https://github.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hemendra",
  initials: "HB",
} as const;

// Skills data - shared between ProfileSidebar and other components
export const SKILLS_DATA = {
  languages: ["Swift", "Objective-C", "Python", "JavaScript"],
  frameworks: ["SwiftUI", "UIKit", "Core Data", "Combine"],
  tools: ["Xcode", "Git", "Firebase", "TestFlight"],
} as const;

// Statistics for hero section
export const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Apps Published" },
] as const;

// Animation delays
export const ANIMATION_DELAYS = {
  stagger: 100, // milliseconds between staggered animations
  scroll: 300, // scroll threshold for scroll-to-top button
} as const;
