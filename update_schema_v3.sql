-- 升级 game_results 表结构 (v3)
-- 请在 Supabase 的 SQL Editor 中运行此脚本

-- 1. 添加地理位置信息
alter table game_results 
add column if not exists city text,       -- 用户所在城市 (如 "Beijing")
add column if not exists region text,     -- 省份/州
add column if not exists country text;    -- 国家

-- 2. 补全学历信息 (确保本科和研究生都清晰可查)
alter table game_results 
add column if not exists master_school text;      -- 具体研究生学校名称
-- (undergrad_school 之前 v2 已经加过了，如果没有加会自动忽略)

-- 3. (可选) 如果之前没加 v2 的字段，这里补一下以防万一
alter table game_results 
add column if not exists character_tier text,
add column if not exists undergrad_school text,
add column if not exists is_overseas boolean,
add column if not exists mentor_name text,
add column if not exists final_stats jsonb,
add column if not exists internship_count int;
