import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "bg-card border border-border p-8 rounded-2xl shadow-sm",
        className
      )}
    >
      <Icon className="w-12 h-12 text-primary mb-6" />
      <h3 className="text-2xl font-semibold text-foreground mb-4">{title}</h3>
      <p className="text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
}

