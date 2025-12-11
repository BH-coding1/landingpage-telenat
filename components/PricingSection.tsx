import { PricingCard } from "@/components/PricingCard";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  className?: string;
}

interface PricingPlan {
  planName: string;
  price?: string;
  period?: string;
  features?: string[];
  description?: string;
  highlighted?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    planName: "Starter",
    price: "$39",
    period: "/mo",
    features: [
      "Production up to 500 units per month",
      "24/7 technical support",
      "Access to our dashboard",
      "Basic setup guide",
    ],
  },
  {
    planName: "Professional",
    description:
      "Designed for growing businesses, this includes all features of Enterprise, plus advanced analytics and custom integrations.",
    highlighted: true,
  },
  {
    planName: "Enterprise",
    price: "$99",
    period: "/mo",
    features: [
      "Unlimited production",
      "Dedicated account manager",
      "Advanced analytics",
      "Custom integrations",
    ],
  },
];

export function PricingSection({ className }: PricingSectionProps) {
  return (
    <section className={cn("bg-[#010203] py-24 md:py-32", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tailored Plans for Your Manufacturing Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.planName}
              planName={plan.planName}
              {...(plan.price && { price: plan.price })}
              {...(plan.period && { period: plan.period })}
              {...(plan.features && { features: plan.features })}
              {...(plan.description && { description: plan.description })}
              {...(plan.highlighted && { highlighted: plan.highlighted })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
