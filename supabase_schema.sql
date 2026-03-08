-- 1. 创建存储游戏结果的表
create table game_results (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  ending_title text not null, -- 结局标题
  offer_name text,            -- 获得的 Offer 名称（如果有）
  final_score int             -- 备用字段
);

-- 2. 开启行级安全（虽然我们为了简单会允许匿名写入，但开启是好习惯）
alter table game_results enable row level security;

-- 3. 允许匿名用户（所有玩家）插入数据
create policy "Allow anon insert" on game_results for insert with check (true);

-- 4. 允许匿名用户（所有玩家）查询数据（为了显示统计）
create policy "Allow anon select" on game_results for select using (true);
