import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  joinedAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Simulated user store (in real app, this would be Supabase)
const STORAGE_KEY = "arch_historia_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Restore session from localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ error?: string }> => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 900));

    // Demo: accept any valid-looking credentials
    if (!email || !password) return { error: "请填写邮箱和密码" };
    if (password.length < 6) return { error: "密码至少需要 6 位字符" };

    // Check if user registered before (stored in localStorage mock db)
    const mockDb = JSON.parse(localStorage.getItem("arch_historia_db") || "{}");
    const existing = mockDb[email.toLowerCase()];
    if (existing && existing.password !== password) {
      return { error: "密码错误，请重试" };
    }

    const newUser: User = existing
      ? { id: existing.id, email: existing.email, name: existing.name, avatar: existing.avatar, joinedAt: existing.joinedAt }
      : {
          id: Math.random().toString(36).slice(2),
          email,
          name: email.split("@")[0],
          avatar: email.slice(0, 2).toUpperCase(),
          joinedAt: new Date().toISOString(),
        };

    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    return {};
  };

  const register = async (name: string, email: string, password: string): Promise<{ error?: string }> => {
    await new Promise((r) => setTimeout(r, 1000));

    if (!name.trim()) return { error: "请输入您的姓名" };
    if (!email.includes("@")) return { error: "请输入有效的邮箱地址" };
    if (password.length < 6) return { error: "密码至少需要 6 位字符" };

    const mockDb = JSON.parse(localStorage.getItem("arch_historia_db") || "{}");
    if (mockDb[email.toLowerCase()]) {
      return { error: "该邮箱已注册，请直接登录" };
    }

    const newUser: User = {
      id: Math.random().toString(36).slice(2),
      email,
      name,
      avatar: name.slice(0, 2).toUpperCase(),
      joinedAt: new Date().toISOString(),
    };

    mockDb[email.toLowerCase()] = { ...newUser, password };
    localStorage.setItem("arch_historia_db", JSON.stringify(mockDb));
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    return {};
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
