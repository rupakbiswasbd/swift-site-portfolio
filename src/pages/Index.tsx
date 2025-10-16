import { useState } from "react";
import ProfileSidebar from "@/components/ProfileSidebar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import MobileMenu from "@/components/MobileMenu";
import DesktopNav from "@/components/DesktopNav";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gradient-subtle">
      {/* Desktop Sidebar */}
      <div className={`hidden lg:block ${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300`}>
        {sidebarOpen && <ProfileSidebar onNavigate={scrollToSection} />}
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Navigation */}
        <MobileMenu onNavigate={scrollToSection} />
        <DesktopNav onNavigate={scrollToSection} />

        {/* Sections */}
        <HeroSection onScrollToContact={() => scrollToSection("contact")} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="bg-muted/50 border-t py-8 px-6">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p>© 2024 Hemendra Rupak Biswas. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
