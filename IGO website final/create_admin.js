import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, '.env') })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase vars. Expected VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function createAdmin() {
  const email = 'admin@igogroups.com'
  const password = 'admin@igo2026'
  
  console.log(`Creating/Verifying user: ${email}...`)
  
  // 1. Sign up user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  // Auth user might already exist but no admin record
  const userId = data?.user?.id

  if (error) {
    if (error.message.includes('User already registered') || error.message.includes('already exists')) {
      console.log('User already exists in auth.users. Fetching to re-link...')
    } else {
      console.error('Error signing up auth user:', error.message)
      return
    }
  }

  // 2. Try logging in to get the ID if signup said they exist
  let finalUserId = userId
  if (!finalUserId) {
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (signInError) {
      console.error('Could not login. Password might be different. Error:', signInError.message)
      return
    }
    finalUserId = signInData.user.id
  }

  console.log('User ID:', finalUserId)

  // 3. Add to admin_users table
  const { error: adminError } = await supabase
    .from('admin_users')
    .upsert({
      id: finalUserId,
      email: email,
      full_name: 'Admin',
      role: 'super_admin'
    })

  if (adminError) {
    console.error('Error adding to admin_users:', adminError.message)
  } else {
    console.log(`Successfully created and granted admin role to ${email}!`)
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
  }
}

createAdmin()
