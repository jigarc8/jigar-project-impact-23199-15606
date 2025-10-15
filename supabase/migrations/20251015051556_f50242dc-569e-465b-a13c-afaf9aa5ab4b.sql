-- Fix the security definer view issue by recreating with security_invoker
DROP VIEW IF EXISTS public.profile_public;

CREATE VIEW public.profile_public 
WITH (security_invoker=on) AS 
SELECT id, full_name, title, hero_tagline, about_text, 
       resume_url, linkedin_url, skills, tools, created_at, updated_at
FROM public.profile;

-- Re-grant public access to the view
GRANT SELECT ON public.profile_public TO anon, authenticated;