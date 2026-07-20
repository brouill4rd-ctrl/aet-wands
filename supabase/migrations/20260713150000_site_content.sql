
CREATE TABLE public.site_content (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section text NOT NULL,
  item_key text NOT NULL,
  field text NOT NULL,
  value text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(section, item_key, field)
);

CREATE INDEX site_content_section_idx ON public.site_content(section);
CREATE INDEX site_content_lookup_idx ON public.site_content(section, item_key);

GRANT SELECT ON public.site_content TO anon;
GRANT SELECT ON public.site_content TO authenticated;
GRANT ALL ON public.site_content TO service_role;

ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site_content"
  ON public.site_content FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert site_content"
  ON public.site_content FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update site_content"
  ON public.site_content FOR UPDATE
  USING (true) WITH CHECK (true);

CREATE POLICY "Anyone can delete site_content"
  ON public.site_content FOR DELETE
  USING (true);

CREATE TRIGGER site_content_set_updated_at
  BEFORE UPDATE ON public.site_content
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
