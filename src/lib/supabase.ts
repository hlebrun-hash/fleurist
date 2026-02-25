import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials are missing. Check your environment variables.');
}

// Valeurs de repli pour éviter le crash au build Vercel (les pages sont 'use client' donc pas de prerendering réel)
export const supabase = createClient(
    supabaseUrl ?? 'https://placeholder.supabase.co',
    supabaseAnonKey ?? 'placeholder-key'
);
