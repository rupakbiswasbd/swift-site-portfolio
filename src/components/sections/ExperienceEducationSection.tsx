import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";

const ExperienceEducationSection = () => {
  const workExperience = [
    {
      title: "Senior iOS Developer",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      description: "Lead iOS development team of 5 developers, architecting and developing enterprise-level applications with over 100K+ active users.",
      achievements: [
        "Increased app performance by 40% through code optimization",
        "Led migration from UIKit to SwiftUI for 3 major applications",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["Swift", "SwiftUI", "Combine", "Core Data", "CloudKit"]
    },
    {
      title: "iOS Developer",
      company: "Innovation Labs",
      period: "2019 - 2021",
      description: "Developed multiple iOS applications from concept to App Store release, focusing on user experience and performance optimization.",
      achievements: [
        "Built and launched 5 iOS apps with 4.5+ star ratings",
        "Implemented real-time features using Firebase and WebSockets",
        "Reduced app crash rate to below 0.5% through rigorous testing"
      ],
      technologies: ["Swift", "UIKit", "Firebase", "REST APIs"]
    }
  ];

  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2014 - 2018",
    description: "Specialized in mobile development and software engineering with focus on iOS ecosystem.",
    gpa: "3.8/4.0"
  };

  const certifications = [
    "Apple Certified iOS Developer",
    "Swift Programming Certification",
    "AWS Mobile Developer Associate",
    "Agile Development Certification"
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Experience & Education</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden sm:block"></div>

              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-0 sm:pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary hidden sm:block" style={{ left: '-4px' }}></div>

                  <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                        <h4 className="font-bold text-lg">{job.title}</h4>
                        <span className="text-sm text-primary font-semibold">{job.period}</span>
                      </div>
                      <p className="text-accent font-medium mb-3">{job.company}</p>
                      <p className="text-muted-foreground mb-4 text-sm">{job.description}</p>
                      
                      <div className="mb-4">
                        <p className="font-semibold mb-2 text-sm">Key Achievements:</p>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-green-500 mt-0.5">✓</span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Education & Certifications</h3>
            </div>

            {/* Education */}
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h4 className="font-bold text-lg mb-2">{education.degree}</h4>
                <p className="text-accent font-medium mb-2">{education.institution}</p>
                <p className="text-sm text-muted-foreground mb-3">{education.period}</p>
                <p className="text-sm text-muted-foreground mb-3">{education.description}</p>
                <div className="inline-block">
                  <Badge variant="outline" className="text-green-500 border-green-500">
                    GPA: {education.gpa}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Certifications</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card border hover:border-primary transition-all">
                    <Award className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-6">
              <Button className="w-full sm:w-auto" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Full Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
