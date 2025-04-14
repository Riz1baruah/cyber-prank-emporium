
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gradientButtonVariants = cva(
  [
    "gradient-button",
    "inline-flex items-center justify-center",
    "rounded-[11px] min-w-[132px] px-9 py-4",
    "text-base leading-[19px] font-[500]",
    "font-sans font-bold",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "transition-all duration-300 hover:-translate-y-0.5",
    "relative overflow-hidden",
    "bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500",
    "text-black shadow-md hover:shadow-lg",
    "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:opacity-50",
    "after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/5 after:to-transparent after:opacity-30",
    "border border-cyan-400/30",
  ],
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 text-black hover:shadow-cyan-500/20",
        variant: "bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 text-white hover:shadow-cyan-500/20 before:opacity-20 after:opacity-10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
