import { useState } from "react";
import { Search, MapPin, User, Tag } from "lucide-react";
import { buildings } from "../data/architectureData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const allStyles = ["全部", ...Array.from(new Set(buildings.map((b) => b.style)))];

export function BuildingsPage() {
  const [search, setSearch] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("全部");
  const [selectedBuilding, setSelectedBuilding] = useState<(typeof buildings)[0] | null>(null);

  const filtered = buildings.filter((b) => {
    const matchesSearch =
      b.name.includes(search) ||
      b.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      b.architect.includes(search) ||
      b.location.includes(search);
    const matchesStyle = selectedStyle === "全部" || b.style === selectedStyle;
    return matchesSearch && matchesStyle;
  });

  return (
    <div className="min-h-full bg-[#0e1017]">
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-white/5">
        <p className="text-[10px] tracking-[0.25em] text-[#c9a84c] uppercase mb-2">
          BUILDING ARCHIVE
        </p>
        <h1 className="text-2xl text-white mb-4" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
          建筑图集
        </h1>

        {/* Search */}
        <div className="relative max-w-md mb-4">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="搜索建筑名称、建筑师、地点..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-[#13161f] border border-white/10 rounded-lg text-[13px] text-white/80 placeholder-white/25 outline-none focus:border-[#c9a84c]/40 transition-colors"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          />
        </div>

        {/* Style filters */}
        <div className="flex gap-2 flex-wrap">
          {allStyles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-3 py-1 rounded-full text-[11px] border transition-all ${
                selectedStyle === style
                  ? "bg-[#c9a84c] text-[#0e1017] border-[#c9a84c]"
                  : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/70"
              }`}
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      <div className="flex">
        {/* Grid */}
        <div className={`flex-1 p-8 ${selectedBuilding ? "md:pr-4" : ""}`}>
          <p className="text-[11px] text-white/30 mb-5" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            共 {filtered.length} 个建筑案例
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((b) => (
              <div
                key={b.id}
                onClick={() => setSelectedBuilding(selectedBuilding?.id === b.id ? null : b)}
                className={`group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 ${
                  selectedBuilding?.id === b.id
                    ? "border-[#c9a84c]/50 ring-1 ring-[#c9a84c]/20"
                    : "border-white/5 hover:border-white/15"
                } bg-[#13161f]`}
              >
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={b.image}
                    alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.2)",
                        color: "#c9a84c",
                        border: "1px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      {b.year}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-[13px] text-white/90 mb-0.5" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    {b.name}
                  </h3>
                  <p className="text-[10px] text-white/35 mb-2">{b.nameEn}</p>
                  <div className="flex flex-wrap gap-1">
                    {b.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-1.5 py-0.5 bg-white/5 text-white/35 rounded"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        {selectedBuilding && (
          <div className="hidden md:block w-80 shrink-0 border-l border-white/5 bg-[#13161f] sticky top-0 h-[calc(100vh-57px)] overflow-y-auto">
            <div className="relative h-52 overflow-hidden">
              <ImageWithFallback
                src={selectedBuilding.image}
                alt={selectedBuilding.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13161f] via-transparent to-transparent" />
              <button
                onClick={() => setSelectedBuilding(null)}
                className="absolute top-3 right-3 w-6 h-6 rounded-full bg-black/40 text-white/60 flex items-center justify-center text-xs hover:bg-black/60 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="px-5 py-4">
              <h2 className="text-[18px] text-white mb-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                {selectedBuilding.name}
              </h2>
              <p className="text-[12px] text-white/35 mb-4">{selectedBuilding.nameEn}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-[12px] text-white/55">
                  <User size={12} className="text-[#c9a84c]" />
                  <span style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{selectedBuilding.architect}</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-white/55">
                  <MapPin size={12} className="text-[#c9a84c]" />
                  <span style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{selectedBuilding.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-white/55">
                  <Tag size={12} className="text-[#c9a84c]" />
                  <span style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{selectedBuilding.style}</span>
                </div>
              </div>

              <div className="h-px bg-white/8 mb-4" />

              <p className="text-[12px] text-white/55 leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                {selectedBuilding.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {selectedBuilding.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full border border-[#c9a84c]/20"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
