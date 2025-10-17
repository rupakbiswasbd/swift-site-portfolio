import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Square, Database, Cloud, Code } from "lucide-react";
import { Check } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Swift", level: 95, icon: Code2 },
    { name: "SwiftUI", level: 90, icon: Square },
    { name: "UIKit", level: 88, icon: Square },
    { name: "Core Data", level: 85, icon: Database },
    { name: "CloudKit", level: 80, icon: Cloud },
    { name: "Xcode", level: 92, icon: Code },
  ];

  const tools = [
    "Xcode", "Git", "CocoaPods", "Swift Package Manager",
    "TestFlight", "App Store Connect", "Firebase", "Realm",
    "Alamofire", "Combine"
  ];

  const whatIBring = [
    "Clean, maintainable code architecture",
    "Apple Human Interface Guidelines compliance",
    "Performance optimization and testing",
    "App Store submission expertise",
    "Continuous integration and deployment"
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-lg">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold text-lg">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools & What I Bring */}
          <div className="space-y-8">
            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-lg p-4 text-center font-medium hover:border-primary/50 transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* What I Bring */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">What I Bring</h3>
              <div className="space-y-3">
                {whatIBring.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
