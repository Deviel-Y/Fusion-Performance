"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-xs font-semibold uppercase tracking-widest text-[#888888]"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "bg-white/5 border border-white/10 text-white placeholder:text-[#555555]",
            "px-4 py-3.5 text-sm focus:outline-none focus:border-[#CCFF00] transition-colors duration-200",
            error && "border-red-500/60 focus:border-red-400",
            className
          )}
          {...props}
        />
        <AnimatePresence mode="wait">
          {error && (
            <motion.span
              key={error}
              initial={{ opacity: 0, y: -4, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -4, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-xs text-red-400 font-medium overflow-hidden block"
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = "Input";
