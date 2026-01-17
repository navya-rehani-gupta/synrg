-- Drop the unused log_entries table and its policies
-- The Living Log feature has been removed from the application

-- First drop all RLS policies on the table
DROP POLICY IF EXISTS "Log entries are publicly readable" ON public.log_entries;
DROP POLICY IF EXISTS "Authenticated users can insert log entries" ON public.log_entries;
DROP POLICY IF EXISTS "Authenticated users can update log entries" ON public.log_entries;
DROP POLICY IF EXISTS "Authenticated users can delete log entries" ON public.log_entries;

-- Then drop the table
DROP TABLE IF EXISTS public.log_entries;