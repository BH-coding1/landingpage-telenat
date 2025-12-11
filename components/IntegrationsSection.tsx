import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IntegrationsSectionProps {
  className?: string;
}

export function IntegrationsSection({ className }: IntegrationsSectionProps) {
  return (
    <section
      className={cn(
        "bg-background py-24 md:py-32",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Empowering Top Companies with Seamless Integrations
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partial description visible
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-base font-medium h-auto transition-all duration-200">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}

