import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface FeaturesSectionProps {
  className?: string;
}

const features = [
  "Advanced automation systems",
  "Real-time monitoring and analytics",
  "Scalable infrastructure solutions",
  "24/7 technical support",
];

export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section
      className={cn(
        "bg-background py-24 md:py-32 border-t border-border",
        className
      )}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Built for modern manufacturing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-4 p-6 border border-border rounded-lg bg-card"
            >
              <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <p className="text-base text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
