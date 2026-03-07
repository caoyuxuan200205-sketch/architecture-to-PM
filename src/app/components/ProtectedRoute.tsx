import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Loader2 } from "lucide-react";

export function ProtectedRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0e1017] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={24} className="animate-spin text-[#c9a84c]" />
          <p className="text-[12px] text-white/30" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            正在验证身份...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}

export function GuestRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0e1017] flex items-center justify-center">
        <Loader2 size={24} className="animate-spin text-[#c9a84c]" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
