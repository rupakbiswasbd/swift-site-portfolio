import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { ANIMATION_DELAYS } from "@/constants";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable iOS applications",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying updated with latest iOS technologies",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing apps for speed and efficiency",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Creating intuitive user experiences",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            I'm a passionate iOS developer with expertise in building robust,
            user-friendly mobile applications. With a strong foundation in Swift
            and SwiftUI, I transform ideas into polished apps that users love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all hover:shadow-lg group"
              style={{
                animationDelay: `${index * ANIMATION_DELAYS.stagger}ms`,
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
