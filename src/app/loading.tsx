export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-2 border-[#CCFF00]/20 rounded-full" />
          <div className="absolute inset-0 border-2 border-transparent border-t-[#CCFF00] rounded-full animate-spin" />
        </div>
        <span className="text-xs font-black uppercase tracking-[0.3em] text-[#555555]">
          Loading
        </span>
      </div>
    </div>
  );
}
