import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce iOS App",
      description: "Full-featured shopping app with payment integration, real-time inventory, and personalized recommendations.",
      technologies: ["SwiftUI", "Firebase", "Stripe API", "Core Data"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Health and fitness companion with workout plans, progress tracking, and social features.",
      technologies: ["UIKit", "HealthKit", "MapKit", "Combine"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking app with real-time messaging, stories, and content sharing.",
      technologies: ["SwiftUI", "Firebase", "WebRTC", "Push Notifications"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Recipe & Meal Planner",
      description: "Smart meal planning app with recipe suggestions, grocery lists, and nutritional information.",
      technologies: ["SwiftUI", "Core ML", "CloudKit", "Vision"],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management Tool",
      description: "Productivity app with project management, team collaboration, and smart notifications.",
      technologies: ["UIKit", "Core Data", "CloudKit", "Widgets"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with detailed forecasts, weather alerts, and location-based suggestions.",
      technologies: ["SwiftUI", "WeatherKit", "MapKit", "Widgets"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Featured Projects</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            A selection of iOS applications I've built, showcasing diverse functionalities and design patterns
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
