import { useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import { timelineEvents, TimelineEvent } from "../data/architectureData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const typeColors: Record<TimelineEvent["type"], string> = {
  building: "#c9a84c",
  movement: "#4a8ec9",
  person: "#7ec94a",
  event: "#c94a7e",
};

const typeLabels: Record<TimelineEvent["type"], string> = {
  building: "建筑",
  movement: "运动",
  person: "人物",
  event: "事件",
};

export function TimelinePage() {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const types = ["all", "building", "movement", "person", "event"];
  const typeLabelsMap: Record<string, string> = { all: "全部", ...typeLabels };

  const filtered = selectedType === "all"
    ? timelineEvents
    : timelineEvents.filter((e) => e.type === selectedType);

  return (
    <div className="min-h-full bg-[#0e1017] px-4 md:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.25em] text-[#c9a84c] uppercase mb-2">
          HISTORICAL CHRONOLOGY
        </p>
        <h1 className="text-2xl text-white mb-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
          建筑史时间轴
        </h1>
        <p className="text-[13px] text-white/40" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
          1851 — 1997 · 近代建筑史重要节点
        </p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-3 py-1.5 rounded-full text-[11px] border transition-all ${
              selectedType === type
                ? "bg-[#c9a84c] text-[#0e1017] border-[#c9a84c]"
                : "border-white/10 text-white/50 hover:border-white/30 hover:text-white/70"
            }`}
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {typeLabelsMap[type]}
            {type !== "all" && (
              <span
                className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: selectedType === type ? "#0e1017" : typeColors[type as TimelineEvent["type"]] }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="flex gap-8">
        {/* Timeline */}
        <div className="flex-1 relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-2">
            {filtered.map((event, index) => (
              <div
                key={event.id}
                className={`relative pl-16 pr-4 pb-6 cursor-pointer group`}
                onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
              >
                {/* Year marker */}
                <div className="absolute left-0 flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                    style={{
                      borderColor: selectedEvent?.id === event.id ? typeColors[event.type] : "rgba(255,255,255,0.1)",
                      backgroundColor: selectedEvent?.id === event.id ? typeColors[event.type] + "20" : "transparent",
                    }}
                  >
                    <span
                      className="text-[8px] font-medium"
                      style={{
                        color: selectedEvent?.id === event.id ? typeColors[event.type] : "rgba(255,255,255,0.4)",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`bg-[#13161f] rounded-xl p-4 border transition-all duration-300 ${
                    selectedEvent?.id === event.id
                      ? "border-[#c9a84c]/30 shadow-lg shadow-[#c9a84c]/5"
                      : "border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="text-[9px] px-1.5 py-0.5 rounded border"
                          style={{
                            color: typeColors[event.type],
                            borderColor: typeColors[event.type] + "40",
                            backgroundColor: typeColors[event.type] + "10",
                          }}
                        >
                          {typeLabels[event.type]}
                        </span>
                        {event.location && (
                          <span className="flex items-center gap-1 text-[9px] text-white/30">
                            <MapPin size={9} /> {event.location}
                          </span>
                        )}
                      </div>
                      <h3 className="text-[14px] text-white/90 group-hover:text-white transition-colors" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                        {event.title}
                      </h3>
                    </div>
                    <span className="text-[11px] text-[#c9a84c] shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {event.year}
                    </span>
                  </div>

                  {/* Expanded content */}
                  {selectedEvent?.id === event.id && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex gap-4">
                        {event.image && (
                          <div className="w-32 h-24 rounded-lg overflow-hidden shrink-0">
                            <ImageWithFallback
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <p className="text-[12px] text-white/60 leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side legend */}
        <div className="hidden lg:block w-48 shrink-0">
          <div className="sticky top-6">
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-3">图例</p>
            <div className="space-y-2">
              {Object.entries(typeLabels).map(([type, label]) => (
                <div key={type} className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: typeColors[type as TimelineEvent["type"]] }}
                  />
                  <span className="text-[11px] text-white/50" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#13161f] rounded-xl border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={12} className="text-[#c9a84c]" />
                <p className="text-[10px] text-[#c9a84c]">时间跨度</p>
              </div>
              <p className="text-[11px] text-white/60" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                1851 — 1997
              </p>
              <p className="text-[10px] text-white/30 mt-1">共 {timelineEvents.length} 个事件</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
