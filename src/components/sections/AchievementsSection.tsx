import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Trophy, Zap } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "App Store Featured",
      description: "5 apps featured on App Store Editor's Choice",
      year: "2023"
    },
    {
      icon: Award,
      title: "Best Mobile App Award",
      description: "Won Best iOS App at Tech Innovation Summit",
      year: "2022"
    },
    {
      icon: Star,
      title: "4.8+ Rating",
      description: "Maintained high user satisfaction across all published apps",
      year: "2021-2024"
    },
    {
      icon: Zap,
      title: "Performance Excellence",
      description: "Achieved 99.9% crash-free rate in production apps",
      year: "2023"
    }
  ];

  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Achievements</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Recognition and milestones throughout my iOS development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all hover:shadow-lg group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{achievement.title}</h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
