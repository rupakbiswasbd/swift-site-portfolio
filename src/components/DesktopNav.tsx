import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MENU_ITEMS } from "@/constants";

interface DesktopNavProps {
  onNavigate: (section: string) => void;
}

const DesktopNav = ({ onNavigate }: DesktopNavProps) => {
  return (
    <div className="hidden lg:flex fixed top-6 right-6 z-50 gap-3">
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {MENU_ITEMS.map((item) => (
            <DropdownMenuItem
              key={item.section}
              onClick={() => onNavigate(item.section)}
              className="cursor-pointer"
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DesktopNav;
