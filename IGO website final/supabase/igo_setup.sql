CREATE TABLE admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'editor'
);

CREATE TABLE content_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL,         
  section TEXT NOT NULL,      
  field TEXT NOT NULL,        
  value TEXT,
  media_url TEXT,
  sort_order INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  benefits TEXT[] DEFAULT '{}',
  tech TEXT[] DEFAULT '{}',
  sort_order INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE services (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT NOT NULL,
  image TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now()
);

INSERT INTO content_blocks (page, section, field, value) VALUES 
('home', 'hero', 'hero_tag', 'Indias Leading Agri Engineering Brand'),
('home', 'hero', 'hero_title_1', 'Building Profitable Smart Farms Across '),
('home', 'hero', 'hero_title_2', 'India'),
('home', 'about', 'about_tag', 'Why Choose IGO');

-- Auto-whitelist existing registered auth users as admins for testing
INSERT INTO admin_users (id, email, role)
SELECT id, email, 'admin' FROM auth.users
ON CONFLICT DO NOTHING;
