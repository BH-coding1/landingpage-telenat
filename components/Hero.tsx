"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star, TrendingUp, Wrench } from "lucide-react";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn("bg-background py-24 md:py-32", className)}>
      <div className="w-full mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center  mb-12">
          <div className="space-y-6  w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              The Future of Manufacturing with Latest Technology
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Expert tech to elevate your manufacturing. Let&apos;s take your
              business further.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md text-base font-medium h-auto transition-all duration-200">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 rounded-md text-base font-medium h-auto border-foreground text-foreground hover:bg-muted hover:border-primary transition-all duration-200"
              >
                Try Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-base font-semibold text-foreground ml-2">
                5.0
              </span>
              <span className="text-sm text-muted-foreground ml-2">
                from 800+ reviews
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="bg-primary text-primary-foreground p-8 rounded-xl border-0 shadow-sm">
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-sm text-primary-foreground/90">
              Our Esteemed Clients and Partners
            </div>
          </Card>

          <Card className="bg-card border border-border p-8 rounded-xl shadow-sm">
            <TrendingUp className="w-6 h-6 text-primary mb-4" />
            <div className="text-xs text-muted-foreground mb-2">
              Total Projects
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">1951+</div>
            <div className="text-xs text-muted-foreground">
              Increase of 2% this month
            </div>
          </Card>

          <Card className="bg-secondary p-8 rounded-xl border-0 shadow-sm">
            <div className="text-4xl font-bold text-foreground mb-2">6+</div>
            <div className="text-sm text-foreground">
              Years of Dedicated Service
            </div>
          </Card>

          <Card className="bg-primary text-primary-foreground p-8 rounded-xl border-0 shadow-sm">
            <Wrench className="w-8 h-8 mb-3" />
            <div className="text-base font-medium">
              Achieve Optimal Efficiency and Boost Productivity
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
