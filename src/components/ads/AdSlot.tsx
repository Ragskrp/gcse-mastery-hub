"use client";

interface AdSlotProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle";
  className?: string;
  style?: React.CSSProperties;
}

export function AdSlot({ slot, className = "", style = {} }: AdSlotProps) {
  // In production, this would use window.adsbygoogle
  // For now, we render a placeholder that looks professional and follows AdSense layout principles
  return (
    <div
      className={`ad-container my-8 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]/50 flex flex-col items-center justify-center min-h-[100px] ${className}`}
      style={style}
    >
      <div className="text-[10px] uppercase tracking-widest opacity-30 mb-2 font-bold">Advertisement</div>
      <div className="w-full flex items-center justify-center p-4">
        <div className="text-sm opacity-20 italic">Ad Slot: {slot}</div>
      </div>
      {/*
        Actual AdSense Code snippet (commented out):
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
      */}
    </div>
  );
}
