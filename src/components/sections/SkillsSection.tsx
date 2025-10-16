import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Swift", level: 95 },
        { name: "Objective-C", level: 85 },
        { name: "Python", level: 75 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      category: "iOS Frameworks",
      skills: [
        { name: "SwiftUI", level: 90 },
        { name: "UIKit", level: 95 },
        { name: "Core Data", level: 85 },
        { name: "Combine", level: 80 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Xcode", level: 95 },
        { name: "Git", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "REST APIs", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Skills & Expertise</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            A comprehensive toolkit for building exceptional iOS applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="border-2 hover:shadow-lg transition-all"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
