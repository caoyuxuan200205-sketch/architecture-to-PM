import { useState } from "react";
import { Globe, Clock, Building2, Search } from "lucide-react";
import { architects } from "../data/architectureData";

export function ArchitectsPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<(typeof architects)[0] | null>(architects[0]);

  const filtered = architects.filter((a) =>
    a.name.includes(search) || a.nameEn.toLowerCase().includes(search.toLowerCase()) || a.nationality.includes(search)
  );

  const avatarColors = ["#c9a84c", "#4a8ec9", "#7ec94a", "#c94a7e", "#8e4a8e", "#2a7a8e"];

  return (
    <div className="min-h-full bg-[#0e1017] flex flex-col md:flex-row">
      {/* Left column - list */}
      <div className="w-full md:w-96 shrink-0 border-r border-white/5 bg-[#13161f] flex flex-col">
        {/* Header */}
        <div className="px-6 pt-8 pb-5 border-b border-white/5">
          <p className="text-[10px] tracking-[0.25em] text-[#c9a84c] uppercase mb-2">
            ARCHITECT PROFILES
          </p>
          <h1 className="text-2xl text-white mb-4" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
            建筑师档案
          </h1>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="搜索建筑师..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-4 py-2 bg-[#1c1f2c] border border-white/10 rounded-lg text-[12px] text-white/80 placeholder-white/25 outline-none focus:border-[#c9a84c]/40 transition-colors"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            />
          </div>
        </div>

        {/* Architect List */}
        <div className="flex-1 overflow-y-auto">
          {filtered.map((architect, i) => (
            <button
              key={architect.id}
              onClick={() => setSelected(architect)}
              className={`w-full flex items-center gap-4 px-6 py-4 border-b border-white/5 text-left transition-all ${
                selected?.id === architect.id
                  ? "bg-[#c9a84c]/10 border-l-2 border-l-[#c9a84c]"
                  : "hover:bg-white/3"
              }`}
            >
              {/* Avatar */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] shrink-0"
                style={{
                  backgroundColor: avatarColors[i % avatarColors.length] + "20",
                  color: avatarColors[i % avatarColors.length],
                  border: `1px solid ${avatarColors[i % avatarColors.length]}30`,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {architect.avatar}
              </div>
              <div className="min-w-0">
                <p className="text-[13px] text-white/90 truncate" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {architect.name}
                </p>
                <p className="text-[10px] text-white/35 truncate" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {architect.nameEn} · {architect.nationality}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right column - detail */}
      <div className="flex-1 overflow-y-auto">
        {selected ? (
          <div className="p-8 max-w-2xl">
            {/* Name section */}
            <div className="mb-8">
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl shrink-0"
                  style={{
                    backgroundColor: "#c9a84c20",
                    color: "#c9a84c",
                    border: "1px solid rgba(201,168,76,0.3)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {selected.avatar}
                </div>
                <div>
                  <h2 className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
                    {selected.name}
                  </h2>
                  <p className="text-[15px] text-white/40" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {selected.nameEn}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#13161f] rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={12} className="text-[#c9a84c]" />
                    <span className="text-[10px] text-[#c9a84c] uppercase tracking-wider">生卒年份</span>
                  </div>
                  <p className="text-[13px] text-white/80" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {selected.years}
                  </p>
                </div>
                <div className="bg-[#13161f] rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe size={12} className="text-[#c9a84c]" />
                    <span className="text-[10px] text-[#c9a84c] uppercase tracking-wider">国籍</span>
                  </div>
                  <p className="text-[13px] text-white/80" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {selected.nationality}
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/8 mb-6" />

              {/* Bio */}
              <p className="text-[13px] text-white/60 leading-[1.9] mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                {selected.description}
              </p>

              {/* Styles */}
              <div className="mb-6">
                <p className="text-[10px] text-[#c9a84c] uppercase tracking-widest mb-3">建筑风格</p>
                <div className="flex flex-wrap gap-2">
                  {selected.style.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-[11px] border border-[#c9a84c]/20"
                      style={{ fontFamily: "'Noto Serif SC', serif" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Representative Works */}
              <div>
                <p className="text-[10px] text-[#c9a84c] uppercase tracking-widest mb-3">代表作品</p>
                <div className="space-y-2">
                  {selected.representative.map((work, i) => (
                    <div
                      key={work}
                      className="flex items-center gap-3 bg-[#13161f] rounded-xl p-3.5 border border-white/5"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center shrink-0">
                        <Building2 size={12} className="text-[#c9a84c]" />
                      </div>
                      <p className="text-[13px] text-white/70" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                        {work}
                      </p>
                      <span className="ml-auto text-[10px] text-white/20">0{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-white/20 text-[13px]">
            选择一位建筑师查看详情
          </div>
        )}
      </div>
    </div>
  );
}
