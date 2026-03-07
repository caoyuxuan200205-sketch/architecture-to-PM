import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import {
  Home,
  Clock,
  Building2,
  Users,
  Layers,
  BookOpen,
  Menu,
  ChevronRight,
  LogOut,
  Gamepad2,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { path: "/", label: "首页", icon: Home, exact: true },
  { path: "/timeline", label: "历史时间轴", icon: Clock },
  { path: "/buildings", label: "建筑图集", icon: Building2 },
  { path: "/architects", label: "建筑师", icon: Users },
  { path: "/styles", label: "建筑风格", icon: Layers },
  { path: "/articles", label: "研究文献", icon: BookOpen },
  { path: "/game", label: "我是一个「建」人", icon: Gamepad2 },
];

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const currentPage = navItems.find((item) =>
    item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path)
  );

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div className="flex h-screen bg-[#0e1017] text-[#e8e2d5] overflow-hidden">
      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full z-30 flex flex-col
          w-64 bg-[#13161f] border-r border-white/5 transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="px-6 pt-8 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded bg-[#c9a84c]/20 flex items-center justify-center">
              <Building2 size={16} className="text-[#c9a84c]" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase font-medium">
                ARCH·HISTORIA
              </p>
            </div>
          </div>
          <h1 className="text-[15px] text-white/90 tracking-wide mt-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            近代建筑史研究
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.exact
              ? location.pathname === item.path
              : location.pathname.startsWith(item.path);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group
                  ${isActive
                    ? "bg-[#c9a84c]/15 text-[#c9a84c]"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  }`}
              >
                <item.icon size={17} />
                <span className="text-[13px] tracking-wide flex-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {item.label}
                </span>
                {isActive && <ChevronRight size={13} className="opacity-60" />}
              </NavLink>
            );
          })}
        </nav>

        {/* User + Footer */}
        <div className="px-4 py-4 border-t border-white/5 space-y-3">
          {user && (
            <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-white/3 border border-white/5">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
                <span className="text-[10px] text-[#c9a84c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {user.avatar}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] text-white/70 truncate" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {user.name}
                </p>
                <p className="text-[10px] text-white/25 truncate">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                title="退出登录"
                className="text-white/20 hover:text-red-400 transition-colors shrink-0"
              >
                <LogOut size={14} />
              </button>
            </div>
          )}
          <p className="text-[10px] text-white/20 leading-relaxed px-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            © 2026 Arch·Historia
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center gap-4 px-6 py-4 border-b border-white/5 bg-[#0e1017]/80 backdrop-blur-sm shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white/50 hover:text-white transition-colors"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2 text-white/30 flex-1">
            <span className="text-[11px] tracking-widest uppercase">
              {currentPage?.label || "首页"}
            </span>
          </div>
          {/* Top bar user (mobile) */}
          {user && (
            <div className="flex items-center gap-2 lg:hidden">
              <div className="w-7 h-7 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center">
                <span className="text-[9px] text-[#c9a84c]">{user.avatar}</span>
              </div>
              <button onClick={handleLogout} className="text-white/25 hover:text-red-400 transition-colors">
                <LogOut size={14} />
              </button>
            </div>
          )}
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}