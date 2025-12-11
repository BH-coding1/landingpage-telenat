import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  planName: string;
  price?: string;
  period?: string;
  features?: string[];
  description?: string;
  highlighted?: boolean;
  className?: string;
}

export function PricingCard({
  planName,
  price,
  period,
  features,
  description,
  highlighted = false,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "p-10 rounded-2xl border shadow-sm",
        highlighted
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-[#141414] text-white border-[#374151]",
        className
      )}
    >
      <h3 className="text-2xl font-semibold mb-4">{planName}</h3>

      {description ? (
        <p className="text-base leading-relaxed mb-8 opacity-90">
          {description}
        </p>
      ) : (
        <>
          <div className="mb-8">
            <span className="text-5xl font-bold">{price}</span>
            <span className="text-xl ml-1 opacity-90">{period}</span>
          </div>

          {features && features.length > 0 && (
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="text-base opacity-90">
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      <Button
        className={cn(
          "w-full py-4 rounded-md text-base font-medium h-auto transition-all duration-200",
          highlighted
            ? "bg-white text-primary hover:bg-white/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        Get Started
      </Button>
    </Card>
  );
}
