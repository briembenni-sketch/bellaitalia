/** Fínlegur skilari með demanti — endurnýttur á milli kafla. */
export default function Divider({
  bg = "bg-[#F0E6D3]",
  color = "text-gold/60",
  line = "bg-gold/25",
}: {
  bg?: string;
  color?: string;
  line?: string;
}) {
  return (
    <div className={`${bg} py-2`} aria-hidden="true">
      <div className="mx-auto max-w-7xl px-6 flex items-center gap-4">
        <div className={`flex-1 h-px ${line}`} />
        <span className={`${color} text-xs rotate-45 inline-block`}>◆</span>
        <div className={`flex-1 h-px ${line}`} />
      </div>
    </div>
  );
}
