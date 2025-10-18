import { useState, useEffect } from "react";
import { X, ExternalLink, Github, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECT_DETAILS } from "@/constants";

interface ProjectDetailsPopoverProps {
  projectTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsPopover = ({
  projectTitle,
  isOpen,
  onClose,
}: ProjectDetailsPopoverProps) => {
  // Disable body scrolling when popover is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const project = PROJECT_DETAILS[projectTitle as keyof typeof PROJECT_DETAILS];

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border rounded-2xl shadow-2xl"
        role="dialog"
        aria-labelledby="project-title"
        aria-describedby="project-overview"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Header with mockup image */}
        <div className="relative h-64 bg-gradient-to-br from-yellow-400/20 via-orange-300/20 to-yellow-200/20 overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <img
                src={project.mockupImage}
                alt={project.title}
                className="h-48 w-auto rounded-2xl shadow-lg"
              />
              {/* Phone frame overlay */}
              <div className="absolute inset-0 rounded-2xl border-4 border-border shadow-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-foreground">
          {/* Title and Info */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
            <div className="mb-4 lg:mb-0">
              <h1 id="project-title" className="text-4xl font-bold mb-4">
                {project.title}
              </h1>
              <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1">
                {project.tag}
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground mb-1">
                <span className="font-semibold">Duration:</span>{" "}
                {project.duration}
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Role:</span> {project.role}
              </p>
            </div>
          </div>

          {/* Project Overview */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p
              id="project-overview"
              className="text-muted-foreground leading-relaxed"
            >
              {project.overview}
            </p>
          </div>

          {/* Technologies and Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Technologies Used */}
            <div>
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <div className="space-y-2">
                {project.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="px-6 py-3 rounded-lg flex items-center gap-2"
              onClick={() => window.open(project.appStoreUrl, "_blank")}
            >
              <ExternalLink className="h-4 w-4" />
              View on App Store
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 rounded-lg flex items-center gap-2"
              onClick={() => window.open(project.sourceCodeUrl, "_blank")}
            >
              <Github className="h-4 w-4" />
              View Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPopover;
