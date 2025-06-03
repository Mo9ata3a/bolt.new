import { supabase } from '../lib/supabaseClient';

export async function searchProducts(p_search_term: string) {
  if (!p_search_term) return [];

  const { data, error } = await supabase
    .rpc('search_products', { p_search_term });

  if (error) {
    console.error('RPC error:', error.message);
    throw error;
  }

  return data;
}
