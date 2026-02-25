-- ============================================================
-- COLLE CE CODE DANS : Supabase > SQL Editor > New Query
-- ============================================================

-- 1. Création de la table
create table if not exists blog_posts (
  id             uuid default gen_random_uuid() primary key,
  created_at     timestamp with time zone default timezone('utc'::text, now()) not null,
  title          text not null,
  slug           text not null unique,
  excerpt        text,
  content        text,
  image          text,
  category       text,
  tags           text[],
  reading_time   integer,
  published_at   date default now(),
  featured       boolean default false,
  author         jsonb,
  external_link  jsonb
);

-- 2. Activation de la sécurité par ligne (RLS)
alter table blog_posts enable row level security;

-- 3. Politique : TOUT LE MONDE peut lire les articles (pour le site)
create policy "Lecture publique"
  on blog_posts for select
  using (true);

-- 4. Politique : TOUT LE MONDE peut insérer (pour Make et le script de migration)
create policy "Insertion publique"
  on blog_posts for insert
  with check (true);

-- 5. Politique : TOUT LE MONDE peut mettre à jour (pour Make)
create policy "Mise à jour publique"
  on blog_posts for update
  using (true);
