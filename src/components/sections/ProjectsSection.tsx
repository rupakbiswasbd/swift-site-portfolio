import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Info } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectDetailsPopover from "@/components/ProjectDetailsPopover";
import { usePopover } from "@/contexts/PopoverContext";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { isPopoverOpen, setIsPopoverOpen } = usePopover();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleProjectDetails = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setIsPopoverOpen(true);
  };

  const handleClosePopover = () => {
    setIsPopoverOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "TaskMaster Pro",
      category: "iOS Apps",
      description:
        "A comprehensive task management app with advanced features including team collaboration, time tracking, and progress analytics.",
      technologies: ["Swift", "SwiftUI", "Core Data", "CloudKit"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      gradient: "from-purple-400/20 via-pink-300/20 to-purple-200/20",
      github: "#",
      demo: "#",
      appStore: "#",
    },
    {
      title: "FitTracker",
      category: "SwiftUI",
      description:
        "A fitness tracking application that monitors workouts, nutrition, and health metrics with beautiful data visualizations.",
      technologies: ["SwiftUI", "HealthKit", "Charts", "Combine"],
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      gradient: "from-yellow-400/20 via-orange-300/20 to-yellow-200/20",
      github: "#",
      demo: "#",
      appStore: "#",
    },
    {
      title: "CryptoWallet",
      category: "UIKit",
      description:
        "Secure cryptocurrency wallet app with portfolio tracking, price alerts, and transaction history management.",
      technologies: ["UIKit", "Core Data", "CryptoKit", "Charts"],
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
      gradient: "from-slate-700/20 via-slate-600/20 to-slate-500/20",
      github: "#",
      demo: "#",
      appStore: "#",
    },
    {
      title: "Recipe & Meal Planner",
      category: "Core Data",
      description:
        "Smart meal planning app with recipe suggestions, grocery lists, and nutritional information.",
      technologies: ["SwiftUI", "Core ML", "CloudKit", "Vision"],
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
      gradient: "from-green-400/20 via-emerald-300/20 to-green-200/20",
      github: "#",
      demo: "#",
      appStore: "#",
    },
    {
      title: "Weather Forecast",
      category: "SwiftUI",
      description:
        "Beautiful weather app with detailed forecasts, weather alerts, and location-based suggestions.",
      technologies: ["SwiftUI", "WeatherKit", "MapKit", "Widgets"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      gradient: "from-blue-400/20 via-cyan-300/20 to-blue-200/20",
      github: "#",
      demo: "#",
      appStore: "#",
    },
    {
      title: "Social Connect",
      category: "iOS Apps",
      description:
        "Modern social networking app with real-time messaging, stories, and content sharing.",
      technologies: ["SwiftUI", "Firebase", "WebRTC", "Push Notifications"],
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      gradient: "from-indigo-400/20 via-purple-300/20 to-indigo-200/20",
      github: "#",
      demo: "#",
      appStore: "#",
    },
    {
      title: "E-Commerce iOS",
      category: "iOS Apps",
      description:
        "Full-featured shopping app with payment integration, real-time inventory, and personalized recommendations.",
      technologies: ["SwiftUI", "Firebase", "Stripe API", "Core Data"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      gradient: "from-rose-400/20 via-pink-300/20 to-rose-200/20",
      github: "#",
      demo: "#",
      appStore: "#",
    },
    {
      title: "Finance Manager",
      category: "Core Data",
      description:
        "Personal finance tracking with budget management, expense analytics, and financial insights.",
      technologies: ["UIKit", "Core Data", "Charts", "CloudKit"],
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      gradient: "from-teal-400/20 via-cyan-300/20 to-teal-200/20",
      github: "#",
      demo: "#",
      appStore: "#",
    },
  ];

  const categories = ["all", "iOS Apps", "SwiftUI", "UIKit", "Core Data"];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Reset carousel when filter changes
  useEffect(() => {
    if (api) {
      // Recalculate count and reset position when filter changes
      setTimeout(() => {
        const newCount = api.scrollSnapList().length;
        setCount(newCount);
        setCurrent(1);
        api.scrollTo(0);
      }, 100); // Increased timeout to ensure DOM is updated
    }
  }, [activeFilter, api]);

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Explore some of my recent iOS development projects showcasing
            various technologies and design patterns.
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs
          value={activeFilter}
          onValueChange={setActiveFilter}
          className="mb-8 sm:mb-12"
        >
          <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 sm:px-6 py-2 capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Projects Carousel */}
        <div className="relative px-8 sm:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filteredProjects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-2xl group h-full">
                    <div
                      className={`relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl sm:text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1 text-primary hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="text-xs">App Store</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                        >
                          <Github className="h-4 w-4" />
                          <span className="text-xs">GitHub</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-auto hover:text-primary"
                          onClick={() => handleProjectDetails(project.title)}
                        >
                          <Info className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-6 lg:-left-12" />
            <CarouselNext className="hidden sm:flex -right-6 lg:-right-12" />
          </Carousel>

          {/* Carousel Indicators */}
          {count > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current - 1
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Details Popover */}
      {selectedProject && (
        <ProjectDetailsPopover
          projectTitle={selectedProject}
          isOpen={isPopoverOpen}
          onClose={handleClosePopover}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
