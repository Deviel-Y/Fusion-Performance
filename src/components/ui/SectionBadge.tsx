interface SectionBadgeProps {
  label: string;
}

export function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#CCFF00]/30 bg-[#CCFF00]/10 text-[#CCFF00] text-xs font-bold uppercase tracking-widest">
      <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
      {label}
    </span>
  );
}
