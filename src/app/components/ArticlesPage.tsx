import { useState } from "react";
import { Search, Clock, Tag, ChevronRight, BookOpen } from "lucide-react";
import { articles } from "../data/architectureData";

const categories = ["全部", ...Array.from(new Set(articles.map((a) => a.category)))];

const categoryColors: Record<string, string> = {
  "现代主义": "#4a8ec9",
  "建筑理论": "#c9a84c",
  "历史主义": "#8b6914",
  "粗野主义": "#5a5a6e",
  "后现代主义": "#8e4a8e",
  "建筑哲学": "#4a8e7e",
  "地域研究": "#7ec94a",
  "地域现代主义": "#c94a7e",
};

export function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedArticle, setSelectedArticle] = useState<(typeof articles)[0] | null>(null);

  const filtered = articles.filter((a) => {
    const matchesSearch =
      a.title.includes(search) ||
      a.author.includes(search) ||
      a.abstract.includes(search) ||
      a.tags.some((t) => t.includes(search));
    const matchesCat = selectedCategory === "全部" || a.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  if (selectedArticle) {
    return (
      <div className="min-h-full bg-[#0e1017] px-4 md:px-8 py-8 max-w-3xl mx-auto">
        <button
          onClick={() => setSelectedArticle(null)}
          className="flex items-center gap-2 text-[12px] text-white/40 hover:text-white/70 transition-colors mb-8"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          ← 返回文献列表
        </button>

        <div className="mb-2">
          <span
            className="inline-block text-[10px] px-2.5 py-1 rounded-full border mb-4"
            style={{
              color: categoryColors[selectedArticle.category] || "#c9a84c",
              borderColor: (categoryColors[selectedArticle.category] || "#c9a84c") + "40",
              backgroundColor: (categoryColors[selectedArticle.category] || "#c9a84c") + "10",
            }}
          >
            {selectedArticle.category}
          </span>
        </div>

        <h1 className="text-2xl text-white mb-4 leading-[1.5]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
          {selectedArticle.title}
        </h1>

        <div className="flex items-center gap-4 mb-8 text-[12px] text-white/35">
          <span>{selectedArticle.author}</span>
          <span className="w-px h-3 bg-white/15" />
          <span>{selectedArticle.date}</span>
          <span className="w-px h-3 bg-white/15" />
          <span className="flex items-center gap-1">
            <Clock size={11} /> {selectedArticle.readTime} 分钟阅读
          </span>
        </div>

        <div className="h-px bg-white/8 mb-8" />

        {/* Abstract */}
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-widest text-[#c9a84c] mb-3">摘要</p>
          <p className="text-[14px] text-white/70 leading-[2] italic" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            {selectedArticle.abstract}
          </p>
        </div>

        {/* Simulated content */}
        <div className="mb-8 space-y-4">
          <p className="text-[11px] uppercase tracking-widest text-[#c9a84c] mb-3">正文节选</p>
          <p className="text-[13px] text-white/55 leading-[2]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            在近代建筑史的研究框架中，本文所探讨的问题涉及建筑理论与实践的深层关联。自19世纪工业革命以来，建筑师面临着前所未有的材料革命与社会变革，这迫使其重新审视建筑的本质与使命。
          </p>
          <p className="text-[13px] text-white/55 leading-[2]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            通过对历史文献、建筑图档与实地调研的综合分析，我们得以追溯这一时期建筑思潮演变的内在逻辑。建筑不仅是物理空间的构造，更是特定历史语境下社会意识形态、文化价值观与技术能力的综合体现。
          </p>
          <p className="text-[13px] text-white/55 leading-[2]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            本研究试图突破传统风格史的叙述框架，从跨学科视角审视建筑师的创作实践，将其置于更广阔的社会、政治与经济背景之中，以期为理解近代建筑史的复杂性提供新的理论资源。
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {selectedArticle.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[11px] px-2.5 py-1 bg-[#13161f] text-white/40 rounded-full border border-white/8"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              <Tag size={9} /> {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[#0e1017]">
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-white/5">
        <p className="text-[10px] tracking-[0.25em] text-[#c9a84c] uppercase mb-2">
          RESEARCH LIBRARY
        </p>
        <h1 className="text-2xl text-white mb-4" style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
          研究文献
        </h1>

        {/* Search */}
        <div className="relative max-w-md mb-4">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="搜索文章标题、作者、关键词..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-[#13161f] border border-white/10 rounded-lg text-[13px] text-white/80 placeholder-white/25 outline-none focus:border-[#c9a84c]/40 transition-colors"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          />
        </div>

        {/* Category filters */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-[11px] border transition-all ${
                selectedCategory === cat
                  ? "bg-[#c9a84c] text-[#0e1017] border-[#c9a84c]"
                  : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/70"
              }`}
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="px-8 py-6">
        <p className="text-[11px] text-white/30 mb-6" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
          共 {filtered.length} 篇文献
        </p>

        <div className="space-y-3">
          {filtered.map((article) => {
            const color = categoryColors[article.category] || "#c9a84c";
            return (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group cursor-pointer flex gap-5 bg-[#13161f] rounded-xl p-5 border border-white/5 hover:border-white/15 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: color + "15", border: `1px solid ${color}25` }}
                >
                  <BookOpen size={15} style={{ color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span
                      className="text-[9px] px-2 py-0.5 rounded-full border shrink-0"
                      style={{
                        color,
                        borderColor: color + "40",
                        backgroundColor: color + "10",
                      }}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-white/25 shrink-0">
                      <Clock size={9} /> {article.readTime} 分钟
                    </span>
                  </div>

                  <h3 className="text-[14px] text-white/85 mb-2 group-hover:text-white transition-colors leading-relaxed" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    {article.title}
                  </h3>
                  <p className="text-[11px] text-white/40 line-clamp-2 leading-relaxed mb-3" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {article.abstract}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-white/30">{article.author}</span>
                    <span className="text-white/15">·</span>
                    <span className="text-[10px] text-white/25">{article.date}</span>
                    <div className="flex gap-1 ml-2">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] px-1.5 py-0.5 bg-white/5 text-white/25 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ChevronRight size={12} className="ml-auto text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
