
import { createClient } from '@supabase/supabase-js';

// 这些环境变量需要在 Vercel 后台配置
// VITE_SUPABASE_URL
// VITE_SUPABASE_ANON_KEY

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_SUPABASE_ANON_KEY;

// 如果没有配置环境变量，给一个空客户端避免报错，但在控制台输出警告
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase 环境变量未配置，数据统计功能将不可用。');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);
