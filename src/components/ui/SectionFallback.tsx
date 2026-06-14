interface Props {
  height?: string;
}

const SectionFallback = ({ height = "h-96" }: Props) => {
  return (
    <div
      className={`${height} bg-dark-50 animate-pulse flex items-center justify-center`}
    >
      <div className="w-8 h-8 border-2 border-[#CCFF00]/30 border-t-[#CCFF00] rounded-full animate-spin" />
    </div>
  );
};

export default SectionFallback;
