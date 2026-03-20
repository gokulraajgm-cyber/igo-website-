-- ─────────────────────────────────────────
-- 1. ADMIN USERS (team access whitelist)
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_users (
  id         uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email      text UNIQUE NOT NULL,
  full_name  text NOT NULL,
  role       text NOT NULL DEFAULT 'editor',
  avatar_url text,
  last_login timestamptz,
  created_at timestamptz DEFAULT now()
);

-- ─────────────────────────────────────────
-- 2. SITE SETTINGS (logo, brand, contact)
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS site_settings (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key        text UNIQUE NOT NULL,
  value      text,
  media_url  text,
  updated_at timestamptz DEFAULT now(),
  updated_by uuid REFERENCES admin_users(id)
);

-- ─────────────────────────────────────────
-- 3. CONTENT BLOCKS (every page, every section)
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS content_blocks (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page        text NOT NULL,
  section     text NOT NULL,
  field       text NOT NULL,
  value       text,
  media_url   text,
  sort_order  int DEFAULT 0,
  status      text DEFAULT 'published',
  updated_at  timestamptz DEFAULT now(),
  updated_by  uuid REFERENCES admin_users(id),
  UNIQUE(page, section, field)
);

-- ─────────────────────────────────────────
-- 4. NAVBAR (header links — live editable)
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS nav_items (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label       text NOT NULL,
  href        text NOT NULL,
  parent_id   uuid REFERENCES nav_items(id),
  sort_order  int DEFAULT 0,
  is_visible  boolean DEFAULT true,
  updated_at  timestamptz DEFAULT now()
);

-- ─────────────────────────────────────────
-- 5. PROJECTS
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS projects (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  domain       text NOT NULL,
  title        text NOT NULL,
  slug         text UNIQUE NOT NULL,
  description  text,
  full_content text,
  cover_url    text,
  gallery_urls text[],
  tags         text[],
  location     text,
  year         text,
  status       text DEFAULT 'published',
  is_featured  boolean DEFAULT false,
  sort_order   int DEFAULT 0,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now(),
  updated_by   uuid REFERENCES admin_users(id)
);

-- ─────────────────────────────────────────
-- 6. PRODUCTS
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category     text NOT NULL,
  name         text NOT NULL,
  slug         text UNIQUE NOT NULL,
  description  text,
  full_content text,
  cover_url    text,
  gallery_urls text[],
  price_label  text,
  tags         text[],
  is_featured  boolean DEFAULT false,
  status       text DEFAULT 'published',
  sort_order   int DEFAULT 0,
  updated_at   timestamptz DEFAULT now(),
  updated_by   uuid REFERENCES admin_users(id)
);

-- ─────────────────────────────────────────
-- 7. SERVICES
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS services (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  domain       text NOT NULL,
  title        text NOT NULL,
  description  text,
  icon         text,
  cover_url    text,
  is_featured  boolean DEFAULT false,
  status       text DEFAULT 'published',
  sort_order   int DEFAULT 0,
  updated_at   timestamptz DEFAULT now(),
  updated_by   uuid REFERENCES admin_users(id)
);

-- ─────────────────────────────────────────
-- 8. TEAM MEMBERS
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS team_members (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text NOT NULL,
  role       text,
  department text,
  bio        text,
  photo_url  text,
  email      text,
  linkedin   text,
  status     text DEFAULT 'published',
  sort_order int DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

-- ─────────────────────────────────────────
-- 9. BLOG POSTS
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text NOT NULL,
  slug         text UNIQUE NOT NULL,
  excerpt      text,
  content      text,
  cover_url    text,
  author_id    uuid REFERENCES admin_users(id),
  tags         text[],
  status       text DEFAULT 'draft',
  published_at timestamptz,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- ─────────────────────────────────────────
-- 10. FAQ
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS faq_items (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category   text DEFAULT 'general',
  question   text NOT NULL,
  answer     text NOT NULL,
  sort_order int DEFAULT 0,
  status     text DEFAULT 'published',
  updated_at timestamptz DEFAULT now()
);

-- ─────────────────────────────────────────
-- 11. MEDIA LIBRARY
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS media_library (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name   text NOT NULL,
  file_url    text NOT NULL,
  file_type   text,
  file_size   int,
  alt_text    text,
  folder      text DEFAULT 'general',
  uploaded_by uuid REFERENCES admin_users(id),
  uploaded_at timestamptz DEFAULT now()
);

-- ─────────────────────────────────────────
-- 12. ACTIVITY LOG
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS activity_log (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid REFERENCES admin_users(id),
  user_name   text,
  action      text NOT NULL,
  table_name  text NOT NULL,
  record_id   uuid,
  old_value   jsonb,
  new_value   jsonb,
  created_at  timestamptz DEFAULT now()
);

-- ─────────────────────────────────────────
-- RLS POLICIES
-- ─────────────────────────────────────────
ALTER TABLE site_settings   ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_blocks  ENABLE ROW LEVEL SECURITY;
ALTER TABLE nav_items       ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects        ENABLE ROW LEVEL SECURITY;
ALTER TABLE products        ENABLE ROW LEVEL SECURITY;
ALTER TABLE services        ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members    ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts      ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq_items       ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_library   ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_log    ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users     ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ ACCESS
DO $$ BEGIN
  CREATE POLICY "Public Read Site Settings" ON site_settings FOR SELECT USING (true);
  CREATE POLICY "Public Read Content Blocks" ON content_blocks FOR SELECT USING (status = 'published');
  CREATE POLICY "Public Read Nav Items" ON nav_items FOR SELECT USING (is_visible = true);
  CREATE POLICY "Public Read Projects" ON projects FOR SELECT USING (status = 'published');
  CREATE POLICY "Public Read Products" ON products FOR SELECT USING (status = 'published');
  CREATE POLICY "Public Read Services" ON services FOR SELECT USING (status = 'published');
  CREATE POLICY "Public Read Team Members" ON team_members FOR SELECT USING (status = 'published');
  CREATE POLICY "Public Read Blog Posts" ON blog_posts FOR SELECT USING (status = 'published');
  CREATE POLICY "Public Read FAQ" ON faq_items FOR SELECT USING (status = 'published');
EXCEPTION WHEN OTHERS THEN NULL; END $$;

-- ADMIN FULL ACCESS
DO $$ BEGIN
  CREATE POLICY "Admin All Site Settings" ON site_settings FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All Content Blocks" ON content_blocks FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All Nav Items" ON nav_items FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All Projects" ON projects FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All Products" ON products FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All Services" ON services FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All Team Members" ON team_members FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All Blog Posts" ON blog_posts FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All FAQ" ON faq_items FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All Media Library" ON media_library FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All Activity Log" ON activity_log FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
  CREATE POLICY "Admin All Users" ON admin_users FOR ALL USING (auth.uid() IN (SELECT id FROM admin_users));
EXCEPTION WHEN OTHERS THEN NULL; END $$;

-- INITIAL SEEDING
INSERT INTO site_settings (key, value) VALUES 
('site_name', 'IGO Agri Tech Farms'),
('site_tagline', 'Indias Leading Agri Engineering & Consulting Brand')
ON CONFLICT (key) DO NOTHING;

INSERT INTO content_blocks (page, section, field, value) VALUES 
('home', 'hero', 'hero_tag', 'Indias Leading Agri Engineering Brand'),
('home', 'hero', 'hero_title_1', 'Building Profitable Smart Farms Across '),
('home', 'hero', 'hero_title_2', 'India')
ON CONFLICT (page, section, field) DO NOTHING;
