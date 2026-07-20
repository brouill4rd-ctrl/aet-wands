DROP POLICY "Anyone can delete wizards" ON public.wizards;
REVOKE DELETE ON public.wizards FROM anon;