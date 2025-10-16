import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

interface HeroSectionProps {
  onScrollToContact: () => void;
}

const HeroSection = ({ onScrollToContact }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight px-4">
            iOS Developer
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
            Crafting elegant mobile experiences with Swift & SwiftUI
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            onClick={onScrollToContact}
          >
            Get in Touch
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto border-2"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto pt-8 sm:pt-12 px-4">
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">5+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">20+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">15+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Apps Published</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
