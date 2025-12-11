import { ServiceCard } from "@/components/ServiceCard";
import { cn } from "@/lib/utils";
import { Sparkles, Boxes, Wrench } from "lucide-react";

interface ServicesSectionProps {
  className?: string;
}

const services = [
  {
    icon: Sparkles,
    title: "Production and Assembly",
    description:
      "Details on production processes, assembly capability, and product types.",
  },
  {
    icon: Boxes,
    title: "Custom Manufacturing",
    description:
      "Custom product creation with design and customization options.",
  },
  {
    icon: Wrench,
    title: "Quality Control",
    description:
      "Procedures and systems in place to ensure high product quality.",
  },
];

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section
      className={cn(
        "bg-primary py-24 md:py-32",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Efficient and Integrated Manufacturing Services
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Simplify operations with our efficient, quality-focused services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

