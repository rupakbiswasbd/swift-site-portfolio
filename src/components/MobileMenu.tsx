import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface MobileMenuProps {
  onNavigate: (section: string) => void;
}

const MobileMenu = ({ onNavigate }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", section: "hero" },
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
    { label: "Achievements", section: "achievements" },
    { label: "Contact", section: "contact" }
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setOpen(false);
  };

  return (
    <>
      <div className="fixed top-4 right-16 z-50 lg:hidden">
        <ThemeToggle />
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className="fixed top-4 right-4 z-50 lg:hidden bg-background/80 backdrop-blur-sm border-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader className="mb-8">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                className="justify-start text-lg hover:bg-primary/10 hover:text-primary"
                onClick={() => handleNavClick(item.section)}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
