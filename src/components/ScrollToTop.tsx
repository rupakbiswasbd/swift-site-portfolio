import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const ScrollToTop = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 border-2 border-primary/20 hover:border-primary/40 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
