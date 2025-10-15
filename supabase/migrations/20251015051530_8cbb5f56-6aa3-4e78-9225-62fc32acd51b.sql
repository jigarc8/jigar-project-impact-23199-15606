-- Fix 1: Protect email address from public exposure
-- Create a public view that excludes the email field
CREATE VIEW public.profile_public AS 
SELECT id, full_name, title, hero_tagline, about_text, 
       resume_url, linkedin_url, skills, tools, created_at, updated_at
FROM public.profile;

-- Update RLS policy to restrict direct table access
DROP POLICY "Anyone can view profile" ON public.profile;

CREATE POLICY "Only admins can view profile table" 
ON public.profile 
FOR SELECT 
USING (is_admin(auth.uid()));

-- Grant public access to the view
GRANT SELECT ON public.profile_public TO anon, authenticated;

-- Fix 2: Create mechanism for first admin user
-- Create a trigger function that automatically assigns admin role to the first user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- If this is the first user and no admins exist, make them admin
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin');
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger on auth.users to assign admin role to first user
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();