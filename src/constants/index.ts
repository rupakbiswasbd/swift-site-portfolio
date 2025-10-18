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

// Project details data
export const PROJECT_DETAILS = {
  FitTracker: {
    title: "FitTracker",
    duration: "8 months",
    role: "iOS Developer & UI/UX Designer",
    tag: "SwiftUI",
    overview:
      "FitTracker is a comprehensive health and fitness application that empowers users to take control of their wellness journey. The app integrates with HealthKit to provide accurate health data, features custom workout builders, nutrition tracking with barcode scanning, and beautiful data visualizations using Swift Charts. The app includes social features for motivation and progress sharing.",
    technologies: ["SwiftUI", "HealthKit", "Charts", "Combine"],
    keyFeatures: [
      "HealthKit integration",
      "Custom workouts",
      "Nutrition tracking",
      "Progress visualization",
      "Social features",
      "Apple Watch support",
    ],
    appStoreUrl: "#",
    sourceCodeUrl: "#",
    mockupImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop",
  },
  "TaskMaster Pro": {
    title: "TaskMaster Pro",
    duration: "6 months",
    role: "Lead iOS Developer",
    tag: "SwiftUI",
    overview:
      "A comprehensive task management app with advanced features including team collaboration, time tracking, and progress analytics. Built with modern SwiftUI architecture and Core Data for offline functionality.",
    technologies: ["Swift", "SwiftUI", "Core Data", "CloudKit"],
    keyFeatures: [
      "Team collaboration",
      "Time tracking",
      "Progress analytics",
      "Offline functionality",
      "Push notifications",
      "Dark mode support",
    ],
    appStoreUrl: "#",
    sourceCodeUrl: "#",
    mockupImage:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=800&fit=crop",
  },
  CryptoWallet: {
    title: "CryptoWallet",
    duration: "10 months",
    role: "Senior iOS Developer",
    tag: "UIKit",
    overview:
      "Secure cryptocurrency wallet app with portfolio tracking, price alerts, and transaction history management. Features advanced security with biometric authentication and encrypted storage.",
    technologies: ["UIKit", "Core Data", "CryptoKit", "Charts"],
    keyFeatures: [
      "Portfolio tracking",
      "Price alerts",
      "Biometric security",
      "Transaction history",
      "Multi-currency support",
      "Real-time updates",
    ],
    appStoreUrl: "#",
    sourceCodeUrl: "#",
    mockupImage:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=800&fit=crop",
  },
  "Recipe & Meal Planner": {
    title: "Recipe & Meal Planner",
    duration: "7 months",
    role: "iOS Developer",
    tag: "SwiftUI",
    overview:
      "Smart meal planning app with recipe suggestions, grocery lists, and nutritional information. Features AI-powered recipe recommendations, barcode scanning for ingredients, and meal prep scheduling with beautiful UI design.",
    technologies: ["SwiftUI", "Core ML", "CloudKit", "Vision"],
    keyFeatures: [
      "AI recipe recommendations",
      "Barcode scanning",
      "Meal prep scheduling",
      "Grocery list generation",
      "Nutritional analysis",
      "Recipe sharing",
    ],
    appStoreUrl: "#",
    sourceCodeUrl: "#",
    mockupImage:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=800&fit=crop",
  },
  "Weather Forecast": {
    title: "Weather Forecast",
    duration: "4 months",
    role: "iOS Developer",
    tag: "SwiftUI",
    overview:
      "Beautiful weather app with detailed forecasts, weather alerts, and location-based suggestions. Features stunning animations, interactive weather maps, and comprehensive weather data visualization.",
    technologies: ["SwiftUI", "WeatherKit", "MapKit", "Widgets"],
    keyFeatures: [
      "Detailed forecasts",
      "Weather alerts",
      "Interactive maps",
      "Widget support",
      "Location-based suggestions",
      "Beautiful animations",
    ],
    appStoreUrl: "#",
    sourceCodeUrl: "#",
    mockupImage:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=800&fit=crop",
  },
  "Social Connect": {
    title: "Social Connect",
    duration: "12 months",
    role: "Lead iOS Developer",
    tag: "SwiftUI",
    overview:
      "Modern social networking app with real-time messaging, stories, and content sharing. Built with scalable architecture supporting millions of users, featuring advanced privacy controls and content moderation.",
    technologies: ["SwiftUI", "Firebase", "WebRTC", "Push Notifications"],
    keyFeatures: [
      "Real-time messaging",
      "Stories and posts",
      "Video calling",
      "Content sharing",
      "Privacy controls",
      "Content moderation",
    ],
    appStoreUrl: "#",
    sourceCodeUrl: "#",
    mockupImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop",
  },
  "E-Commerce iOS": {
    title: "E-Commerce iOS",
    duration: "9 months",
    role: "Senior iOS Developer",
    tag: "SwiftUI",
    overview:
      "Full-featured shopping app with payment integration, real-time inventory, and personalized recommendations. Features advanced search, AR product preview, and seamless checkout experience.",
    technologies: ["SwiftUI", "Firebase", "Stripe API", "Core Data"],
    keyFeatures: [
      "Payment integration",
      "Real-time inventory",
      "AR product preview",
      "Personalized recommendations",
      "Advanced search",
      "Order tracking",
    ],
    appStoreUrl: "#",
    sourceCodeUrl: "#",
    mockupImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
  },
  "Finance Manager": {
    title: "Finance Manager",
    duration: "8 months",
    role: "iOS Developer",
    tag: "UIKit",
    overview:
      "Personal finance tracking with budget management, expense analytics, and financial insights. Features bank integration, investment tracking, and comprehensive financial reporting with data visualization.",
    technologies: ["UIKit", "Core Data", "Charts", "CloudKit"],
    keyFeatures: [
      "Budget management",
      "Expense tracking",
      "Investment monitoring",
      "Financial insights",
      "Bank integration",
      "Data visualization",
    ],
    appStoreUrl: "#",
    sourceCodeUrl: "#",
    mockupImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=800&fit=crop",
  },
} as const;
