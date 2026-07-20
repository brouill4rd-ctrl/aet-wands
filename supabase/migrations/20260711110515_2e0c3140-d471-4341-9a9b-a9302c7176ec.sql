
CREATE TABLE public.wizards (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_id uuid NOT NULL,
  imie text NOT NULL,
  nazwisko text NOT NULL,
  rasa text NOT NULL,
  dom text NOT NULL,
  drewno text,
  rdzen text,
  elastycznosc text,
  dlugosc numeric,
  wlasciwosc_specjalna text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX wizards_owner_id_idx ON public.wizards(owner_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.wizards TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.wizards TO authenticated;
GRANT ALL ON public.wizards TO service_role;

ALTER TABLE public.wizards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read wizards"
  ON public.wizards FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert wizards"
  ON public.wizards FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update wizards"
  ON public.wizards FOR UPDATE
  USING (true) WITH CHECK (true);

CREATE POLICY "Anyone can delete wizards"
  ON public.wizards FOR DELETE
  USING (true);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER wizards_set_updated_at
  BEFORE UPDATE ON public.wizards
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
