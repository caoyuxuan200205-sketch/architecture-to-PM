import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, BookOpen, Building2, Clock, Users, Layers } from "lucide-react";
import { buildings, articles, architects, architecturalStyles } from "../data/architectureData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImages = [
  buildings[0].image,
  buildings[1].image,
  buildings[2].image,
  buildings[7].image,
];

export function HomePage() {
  const navigate = useNavigate();
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "建筑案例", value: "200+", icon: Building2 },
    { label: "建筑风格", value: "12", icon: Layers },
    { label: "建筑师档案", value: "80+", icon: Users },
    { label: "研究文献", value: "500+", icon: BookOpen },
  ];

  return (
    <div className="min-h-full bg-[#0e1017]">
      {/* Hero Section */}
      <section className="relative h-[480px] overflow-hidden">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === heroIndex ? 1 : 0 }}
          >
            <ImageWithFallback
              src={img}
              alt="建筑"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e1017]/40 via-[#0e1017]/30 to-[#0e1017]" />
          </div>
        ))}

        <div className="relative z-10 h-full flex flex-col justify-end px-8 pb-12 max-w-4xl">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] border border-[#c9a84c]/30 rounded-full">
              学术研究平台
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
            近代建筑史<br />
            <span className="text-[#c9a84c]">研究与探索</span>
          </h1>
          <p className="text-white/60 max-w-lg text-[14px] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            从工业革命到后现代主义，系统梳理近两百年建筑思想的演变脉络，探寻建筑如何塑造人类文明。
          </p>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => navigate("/timeline")}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#c9a84c] text-[#0e1017] rounded-lg text-[13px] hover:bg-[#d4b55e] transition-colors"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              探索时间轴 <ArrowRight size={14} />
            </button>
            <button
              onClick={() => navigate("/buildings")}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-lg text-[13px] hover:bg-white/15 transition-colors border border-white/10"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              浏览建筑图集
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 right-8 flex gap-1.5 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`h-0.5 transition-all duration-300 rounded-full ${
                i === heroIndex ? "w-6 bg-[#c9a84c]" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#13161f] rounded-xl p-5 border border-white/5">
            <stat.icon size={18} className="text-[#c9a84c] mb-3" />
            <p className="text-2xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              {stat.value}
            </p>
            <p className="text-[11px] text-white/40 mt-0.5" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Featured Buildings */}
      <section className="px-8 py-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[17px] text-white/90" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            精选建筑案例
          </h2>
          <button
            onClick={() => navigate("/buildings")}
            className="text-[11px] text-[#c9a84c] flex items-center gap-1 hover:underline"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            查看全部 <ArrowRight size={12} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {buildings.slice(0, 4).map((b) => (
            <div
              key={b.id}
              onClick={() => navigate("/buildings")}
              className="group cursor-pointer bg-[#13161f] rounded-xl overflow-hidden border border-white/5 hover:border-[#c9a84c]/30 transition-all duration-300"
            >
              <div className="relative h-36 overflow-hidden">
                <ImageWithFallback
                  src={b.image}
                  alt={b.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[9px] px-2 py-0.5 bg-[#c9a84c]/20 text-[#c9a84c] rounded-full border border-[#c9a84c]/30">
                  {b.year}
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-[13px] text-white/90 mb-0.5" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {b.name}
                </h3>
                <p className="text-[10px] text-white/40" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {b.location} · {b.style}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Styles Preview */}
      <section className="px-8 py-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[17px] text-white/90" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            建筑风格谱系
          </h2>
          <button
            onClick={() => navigate("/styles")}
            className="text-[11px] text-[#c9a84c] flex items-center gap-1 hover:underline"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            查看全部 <ArrowRight size={12} />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {architecturalStyles.map((style) => (
            <div
              key={style.id}
              onClick={() => navigate("/styles")}
              className="cursor-pointer flex-shrink-0 flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/5 bg-[#13161f] hover:border-white/15 transition-colors"
            >
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: style.color }}
              />
              <div>
                <p className="text-[12px] text-white/80 whitespace-nowrap" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {style.name}
                </p>
                <p className="text-[10px] text-white/35" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {style.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Articles */}
      <section className="px-8 py-6 pb-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[17px] text-white/90" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            近期研究文献
          </h2>
          <button
            onClick={() => navigate("/articles")}
            className="text-[11px] text-[#c9a84c] flex items-center gap-1 hover:underline"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            查看全部 <ArrowRight size={12} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.slice(0, 4).map((article) => (
            <div
              key={article.id}
              onClick={() => navigate("/articles")}
              className="group cursor-pointer bg-[#13161f] rounded-xl p-5 border border-white/5 hover:border-[#c9a84c]/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-[9px] px-2 py-0.5 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full border border-[#c9a84c]/20">
                  {article.category}
                </span>
                <span className="text-[10px] text-white/25">{article.readTime} 分钟阅读</span>
              </div>
              <h3 className="text-[13px] text-white/90 mb-2 group-hover:text-[#c9a84c] transition-colors leading-relaxed" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                {article.title}
              </h3>
              <p className="text-[11px] text-white/40 line-clamp-2 leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                {article.abstract}
              </p>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/5">
                <span className="text-[10px] text-white/35">{article.author}</span>
                <span className="text-[10px] text-white/20">·</span>
                <span className="text-[10px] text-white/25">{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
