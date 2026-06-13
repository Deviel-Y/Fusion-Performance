import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "primary" &&
          "bg-[#CCFF00] text-black hover:bg-[#d4ff1a] hover:shadow-[0_0_40px_rgba(204,255,0,0.45)] active:scale-[0.98]",
        variant === "secondary" &&
          "border border-[#CCFF00] text-[#CCFF00] hover:bg-[#CCFF00] hover:text-black active:scale-[0.98]",
        variant === "ghost" &&
          "text-white hover:text-[#CCFF00] border border-white/20 hover:border-[#CCFF00]/40",
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
