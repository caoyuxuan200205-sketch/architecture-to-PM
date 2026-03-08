-- 升级 game_results 表结构以支持更详细的数据分析
-- 请在 Supabase 的 SQL Editor 中运行此脚本

-- 1. 添加玩家画像字段
alter table game_results 
add column if not exists character_tier text,     -- 本科层级 (Tier 1-4)
add column if not exists undergrad_school text,   -- 具体本科学校
add column if not exists is_overseas boolean,     -- 是否留学
add column if not exists mentor_name text;        -- 导师名字

-- 2. 添加游戏过程与结果字段
alter table game_results 
add column if not exists final_stats jsonb,       -- 最终所有属性值 (JSON格式)
add column if not exists internship_count int;    -- 实习数量

-- 3. (可选) 如果之前的数据 final_score 没用，可以保留或忽略，不影响
