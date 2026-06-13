"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/utils/cn";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id?: string;
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  className?: string;
}

export function Select({
  id,
  label,
  error,
  options,
  placeholder = "Select an option",
  value,
  onChange,
  onBlur,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  // Close on outside click
  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
        onBlur?.();
      }
    }
    if (isOpen) document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [isOpen, onBlur]);

  function handleSelect(optValue: string) {
    onChange?.(optValue);
    setIsOpen(false);
    onBlur?.();
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold uppercase tracking-widest text-[#888888]"
        >
          {label}
        </label>
      )}

      <div ref={containerRef} className="relative">
        {/* ── Trigger ── */}
        <button
          type="button"
          id={id}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((p) => !p)}
          className={cn(
            "w-full flex items-center justify-between gap-3 px-4 py-3.5 text-sm text-left",
            "bg-white/5 border transition-colors duration-200 focus:outline-none",
            isOpen
              ? "border-[#CCFF00] shadow-[0_0_0_1px_rgba(204,255,0,0.15)]"
              : "border-white/10 hover:border-white/20",
            error && "border-red-500/60",
            selected ? "text-white" : "text-[#555555]"
          )}
        >
          <span className="truncate">{selected?.label ?? placeholder}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="shrink-0"
          >
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-colors duration-200",
                isOpen ? "text-[#CCFF00]" : "text-[#555555]"
              )}
            />
          </motion.span>
        </button>

        {/* ── Dropdown panel ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              role="listbox"
              initial={{ opacity: 0, y: -4, scaleY: 0.96 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -4, scaleY: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{ transformOrigin: "top center" }}
              className="absolute z-50 top-[calc(100%+4px)] inset-x-0 overflow-hidden bg-[#111111] border border-[#CCFF00]/25 shadow-[0_16px_48px_rgba(0,0,0,0.7),0_0_0_1px_rgba(204,255,0,0.05)]"
            >
              {options.map((opt, i) => {
                const isSelected = opt.value === value;
                return (
                  <li key={opt.value} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => handleSelect(opt.value)}
                      className={cn(
                        "w-full flex items-center justify-between gap-3 px-4 py-3 text-sm text-left transition-all duration-150",
                        /* divider between items */
                        i !== 0 && "border-t border-white/[0.05]",
                        isSelected
                          ? "bg-[#CCFF00]/10 text-[#CCFF00]"
                          : "text-[#aaaaaa] hover:bg-white/[0.05] hover:text-white"
                      )}
                    >
                      <span>{opt.label}</span>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                      )}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

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
