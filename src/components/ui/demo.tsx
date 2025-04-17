
'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
 
export function SplineSceneBasic() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-cyan-500/30">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="cyan"
        size={300}
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Upgrade Your Human Experience
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Introducing next-generation cybernetic enhancements that push the boundaries of what's humanly possible.
            Transform yourself today with Cyborgi™.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <GradientButton onClick={() => scrollToSection('enhancement-categories')}>
              Shop Now
            </GradientButton>
            <GradientButton variant="variant" onClick={() => scrollToSection('transform-your-life')}>
              Learn More
            </GradientButton>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
