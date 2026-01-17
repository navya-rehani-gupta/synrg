-- Create log_entries table for the Living Log
CREATE TABLE public.log_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entry_date DATE NOT NULL DEFAULT CURRENT_DATE,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.log_entries ENABLE ROW LEVEL SECURITY;

-- Public can read all log entries
CREATE POLICY "Log entries are publicly readable"
  ON public.log_entries
  FOR SELECT
  USING (true);

-- Only authenticated users can insert (will be just you)
CREATE POLICY "Authenticated users can insert log entries"
  ON public.log_entries
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update their entries
CREATE POLICY "Authenticated users can update log entries"
  ON public.log_entries
  FOR UPDATE
  TO authenticated
  USING (true);

-- Only authenticated users can delete entries
CREATE POLICY "Authenticated users can delete log entries"
  ON public.log_entries
  FOR DELETE
  TO authenticated
  USING (true);