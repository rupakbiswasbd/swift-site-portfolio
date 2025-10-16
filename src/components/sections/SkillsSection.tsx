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
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building exceptional iOS applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
