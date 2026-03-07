import { useState } from "react";
import { architecturalStyles } from "../data/architectureData";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function StylesPage() {
  const [selected, setSelected] = useState(architecturalStyles[0]);

  return (
    <div className="min-h-full bg-[#0e1017]">
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-white/5">
        <p className="text-[10px] tracking-[0.25em] text-[#c9a84c] uppercase mb-2">
          ARCHITECTURAL MOVEMENTS
        </p>
        <h1 className="text-2xl text-white mb-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
          建筑风格谱系
        </h1>
        <p className="text-[13px] text-white/40" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
          近代建筑六大主要风格流派概述
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-0">
        {/* Style List + Timeline bar */}
        <div className="w-full lg:w-80 shrink-0 border-r border-white/5 bg-[#13161f]">
          {/* Timeline bar */}
          <div className="px-6 pt-6 pb-4 border-b border-white/5">
            <p className="text-[9px] text-white/25 uppercase tracking-widest mb-3">时间轴</p>
            <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
              {architecturalStyles.map((style) => {
                const totalRange = 2026 - 1820;
                const left = ((style.startYear - 1820) / totalRange) * 100;
                const width = ((style.endYear - style.startYear) / totalRange) * 100;
                return (
                  <div
                    key={style.id}
                    className="absolute h-full rounded-full opacity-70 hover:opacity-100 cursor-pointer transition-opacity"
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                      backgroundColor: style.color,
                    }}
                    onClick={() => setSelected(style)}
                    title={style.name}
                  />
                );
              })}
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[9px] text-white/25">1820</span>
              <span className="text-[9px] text-white/25">今</span>
            </div>
          </div>

          {/* Style items */}
          <div className="overflow-y-auto">
            {architecturalStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelected(style)}
                className={`w-full flex items-center gap-4 px-6 py-4 border-b border-white/5 text-left transition-all ${
                  selected?.id === style.id
                    ? "bg-white/5"
                    : "hover:bg-white/3"
                }`}
              >
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: style.color }}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] text-white/80" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    {style.name}
                  </p>
                  <p className="text-[10px] text-white/30 mt-0.5" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {style.period}
                  </p>
                </div>
                {selected?.id === style.id && (
                  <ArrowRight size={12} className="text-white/30 shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Detail */}
        {selected && (
          <div className="flex-1 overflow-y-auto">
            {/* Hero image */}
            <div className="relative h-56 overflow-hidden">
              <ImageWithFallback
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e1017]/30 to-[#0e1017]" />
              <div className="absolute bottom-6 left-8">
                <div
                  className="inline-block px-3 py-1 rounded-full text-[10px] mb-2"
                  style={{
                    backgroundColor: selected.color + "20",
                    color: selected.color,
                    border: `1px solid ${selected.color}40`,
                  }}
                >
                  {selected.period}
                </div>
              </div>
            </div>

            <div className="px-8 py-6">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-1 h-12 rounded-full shrink-0"
                  style={{ backgroundColor: selected.color }}
                />
                <div>
                  <h2 className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
                    {selected.name}
                  </h2>
                  <p className="text-[14px] text-white/35" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {selected.nameEn}
                  </p>
                </div>
              </div>

              <p className="text-[13px] text-white/60 leading-[1.9] mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                {selected.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Characteristics */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-4" style={{ color: selected.color }}>
                    核心特征
                  </p>
                  <div className="space-y-2.5">
                    {selected.characteristics.map((char) => (
                      <div key={char} className="flex items-center gap-2.5">
                        <CheckCircle2
                          size={13}
                          style={{ color: selected.color }}
                          className="shrink-0"
                        />
                        <span className="text-[13px] text-white/65" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                          {char}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Representative buildings */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-4" style={{ color: selected.color }}>
                    代表建筑
                  </p>
                  <div className="space-y-2">
                    {selected.representativeBuildings.map((building, i) => (
                      <div
                        key={building}
                        className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-[#13161f]"
                      >
                        <span
                          className="text-[10px] w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: selected.color + "20", color: selected.color }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-[12px] text-white/65" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                          {building}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time indicator */}
              <div className="mt-8 p-5 bg-[#13161f] rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">时间跨度</span>
                  <span className="text-[10px] text-white/30">
                    {selected.endYear - selected.startYear} 年
                  </span>
                </div>
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full rounded-full"
                    style={{
                      left: `${((selected.startYear - 1820) / (2026 - 1820)) * 100}%`,
                      width: `${((selected.endYear - selected.startYear) / (2026 - 1820)) * 100}%`,
                      backgroundColor: selected.color,
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[9px] text-white/25">{selected.startYear}</span>
                  <span className="text-[9px] text-white/25">{selected.endYear === 2026 ? "至今" : selected.endYear}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
