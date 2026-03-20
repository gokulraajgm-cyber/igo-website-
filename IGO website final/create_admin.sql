-- Insert user into auth.users 
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  aud,
  role,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'admin@igogroups.com',
  crypt('admin123', gen_salt('bf')),
  now(),
  '{"provider": "email", "providers": ["email"]}',
  '{}',
  'authenticated',
  'authenticated',
  now(),
  now()
) ON CONFLICT (email) DO UPDATE SET encrypted_password = crypt('admin123', gen_salt('bf'))
RETURNING id;

-- Wait, returning the ID is better done via DO UPDATE, but we can just use another INSERT for admin_users
INSERT INTO public.admin_users (id, email, role)
SELECT id, email, 'super_admin'
FROM auth.users
WHERE email = 'admin@igogroups.com'
ON CONFLICT (id) DO UPDATE SET role = 'super_admin';
