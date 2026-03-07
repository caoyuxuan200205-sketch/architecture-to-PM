import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import {
  Building2,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1695067439031-f59068994fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "https://images.unsplash.com/photo-1765715303682-2e6bc42af2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "https://images.unsplash.com/photo-1760485524677-c7e00cc1c7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
];

const QUOTES = [
  { text: "建筑是凝固的音乐。", author: "谢林" },
  { text: "形式追随功能。", author: "路易斯·沙利文" },
  { text: "少即是多。", author: "密斯·凡·德·罗" },
];

type Mode = "login" | "register";

function InputField({
  label,
  type,
  value,
  onChange,
  placeholder,
  icon: Icon,
  showToggle,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  icon: React.ElementType;
  showToggle?: boolean;
}) {
  const [show, setShow] = useState(false);
  const inputType = showToggle ? (show ? "text" : "password") : type;

  return (
    <div className="space-y-1.5">
      <label
        className="block text-[11px] text-white/40 uppercase tracking-widest"
        style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
      >
        {label}
      </label>
      <div className="relative group">
        <Icon
          size={14}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 group-focus-within:text-[#c9a84c] transition-colors"
        />
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-[13px] text-white placeholder-white/20 outline-none focus:border-[#c9a84c]/50 focus:bg-white/8 transition-all"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
          >
            {show ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        )}
      </div>
    </div>
  );
}

export function AuthPage() {
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [mode, setMode] = useState<Mode>("login");
  const [bgIndex] = useState(() => Math.floor(Math.random() * BG_IMAGES.length));
  const quoteIndex = bgIndex % QUOTES.length;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setSuccess(false);
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    resetForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (mode === "register" && password !== confirmPassword) {
      setError("两次输入的密码不一致");
      return;
    }

    setLoading(true);
    const result =
      mode === "login"
        ? await login(email, password)
        : await register(name, email, password);
    setLoading(false);

    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(true);
      setTimeout(() => navigate("/"), 800);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0e1017]">
      {/* Left — decorative panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BG_IMAGES[bgIndex]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1017]/80 via-[#0e1017]/50 to-[#0e1017]/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center">
              <Building2 size={18} className="text-[#c9a84c]" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#c9a84c] uppercase">
                ARCH·HISTORIA
              </p>
              <p
                className="text-[12px] text-white/50"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                近代建筑史研究平台
              </p>
            </div>
          </div>

          {/* Center content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-sm">
              <div className="w-12 h-px bg-[#c9a84c]/50 mb-8" />
              <blockquote
                className="text-2xl text-white/90 leading-relaxed mb-4"
                style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
              >
                "{QUOTES[quoteIndex].text}"
              </blockquote>
              <p className="text-[12px] text-white/35" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                — {QUOTES[quoteIndex].author}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {[
              "系统梳理近两百年建筑思想演变脉络",
              "涵盖建筑图集、建筑师档案与风格谱系",
              "汇聚学术研究文献与历史事件时间轴",
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={13} className="text-[#c9a84c] shrink-0" />
                <p
                  className="text-[12px] text-white/45"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center">
              <Building2 size={15} className="text-[#c9a84c]" />
            </div>
            <p
              className="text-[11px] tracking-[0.2em] text-[#c9a84c] uppercase"
            >
              ARCH·HISTORIA
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex mb-8 bg-white/5 rounded-xl p-1">
            {(["login", "register"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className={`flex-1 py-2.5 rounded-lg text-[13px] transition-all duration-300 ${
                  mode === m
                    ? "bg-[#c9a84c] text-[#0e1017]"
                    : "text-white/40 hover:text-white/70"
                }`}
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {m === "login" ? "登录" : "注册"}
              </button>
            ))}
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1
              className="text-2xl text-white mb-2"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              {mode === "login" ? "欢迎回来" : "创建账号"}
            </h1>
            <p
              className="text-[12px] text-white/35"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              {mode === "login"
                ? "登录以访问您的研究资料与收藏"
                : "加入近代建筑史研究社群"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <InputField
                label="姓名"
                type="text"
                value={name}
                onChange={setName}
                placeholder="您的姓名"
                icon={User}
              />
            )}

            <InputField
              label="邮箱"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="your@email.com"
              icon={Mail}
            />

            <InputField
              label="密码"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder={mode === "register" ? "至少 6 位字符" : "输入密码"}
              icon={Lock}
              showToggle
            />

            {mode === "register" && (
              <InputField
                label="确认密码"
                type="password"
                value={confirmPassword}
                onChange={setConfirmPassword}
                placeholder="再次输入密码"
                icon={Lock}
                showToggle
              />
            )}

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2.5 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                <AlertCircle size={14} className="text-red-400 shrink-0" />
                <p
                  className="text-[12px] text-red-400"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {error}
                </p>
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="flex items-center gap-2.5 px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                <CheckCircle2 size={14} className="text-green-400 shrink-0" />
                <p
                  className="text-[12px] text-green-400"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {mode === "login" ? "登录成功，正在跳转..." : "注册成功，正在跳转..."}
                </p>
              </div>
            )}

            {/* Forgot password (login only) */}
            {mode === "login" && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-[11px] text-white/30 hover:text-[#c9a84c] transition-colors"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  忘记密码？
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || success}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#c9a84c] hover:bg-[#d4b55e] disabled:opacity-60 disabled:cursor-not-allowed text-[#0e1017] rounded-xl text-[14px] transition-all duration-200 mt-2"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              {loading ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  {mode === "login" ? "登录中..." : "注册中..."}
                </>
              ) : (
                <>
                  {mode === "login" ? "登录" : "创建账号"}
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-[10px] text-white/20 uppercase tracking-widest">或</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Switch mode */}
          <p
            className="text-center text-[12px] text-white/30"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {mode === "login" ? "还没有账号？" : "已有账号？"}
            <button
              onClick={() => switchMode(mode === "login" ? "register" : "login")}
              className="text-[#c9a84c] hover:underline ml-1 transition-colors"
            >
              {mode === "login" ? "立即注册" : "直接登录"}
            </button>
          </p>

          {/* Terms (register only) */}
          {mode === "register" && (
            <p
              className="text-center text-[10px] text-white/20 mt-4 leading-relaxed"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              注册即表示您同意我们的
              <span className="text-white/35"> 服务条款 </span>与
              <span className="text-white/35"> 隐私政策</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
