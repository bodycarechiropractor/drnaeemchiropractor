// supabase.js
// Supabase client initialization

(function() {
    const SUPABASE_URL = 'https://aifxgnnkkqkdkxtpgeyg.supabase.co';
    const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_zgfC_qtrm5ZSyO9LgAh9tQ_71yFZV8n';

    // Create Supabase client and attach to window
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
})();
