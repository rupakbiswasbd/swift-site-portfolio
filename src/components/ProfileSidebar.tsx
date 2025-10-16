import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github, FileText } from "lucide-react";

interface ProfileSidebarProps {
  onNavigate: (section: string) => void;
}

const ProfileSidebar = ({ onNavigate }: ProfileSidebarProps) => {
  const skills = {
    languages: ["Swift", "Objective-C", "Python", "JavaScript"],
    frameworks: ["SwiftUI", "UIKit", "Core Data", "Combine"],
    tools: ["Xcode", "Git", "Firebase", "TestFlight"]
  };

  return (
    <aside className="h-full bg-sidebar border-r border-sidebar-border p-6 overflow-y-auto">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hemendra" alt="Hemendra Rupak Biswas" />
          <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
            HB
          </AvatarFallback>
        </Avatar>
        
        <h2 className="text-xl font-bold text-sidebar-foreground mb-1">
          Hemendra Rupak Biswas
        </h2>
        <p className="text-sm text-muted-foreground mb-3">iOS Developer</p>
        <Badge variant="secondary" className="mb-4">
          Available for Work
        </Badge>
      </div>

      {/* Quick Links */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-sidebar-foreground mb-3 uppercase tracking-wider">
          Connect
        </h3>
        <div className="space-y-2">
          <Button 
            variant="ghost" 
            className="w-full justify-start hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            onClick={() => window.open('https://www.linkedin.com/in/rupak-biswas', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            onClick={() => window.open('mailto:rupakbiswas@live.com', '_blank')}
          >
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </div>

      {/* Skills Overview */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-sidebar-foreground mb-3 uppercase tracking-wider">
          Languages
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.languages.map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-sidebar-foreground mb-3 uppercase tracking-wider">
          Frameworks
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.frameworks.map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-sidebar-foreground mb-3 uppercase tracking-wider">
          Tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.tools.map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
