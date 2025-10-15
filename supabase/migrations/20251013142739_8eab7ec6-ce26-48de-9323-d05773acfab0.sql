-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for admin access
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check admin role
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_roles.user_id = $1
      AND role = 'admin'
  )
$$;

-- Create case_studies table
CREATE TABLE public.case_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    client TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    hero_image TEXT,
    overview_stats JSONB DEFAULT '[]'::jsonb,
    challenge_text TEXT,
    challenge_points JSONB DEFAULT '[]'::jsonb,
    role_text TEXT,
    role_responsibilities JSONB DEFAULT '[]'::jsonb,
    process_steps JSONB DEFAULT '[]'::jsonb,
    results JSONB DEFAULT '[]'::jsonb,
    live_url TEXT,
    staging_url TEXT,
    figma_url TEXT,
    featured BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on case_studies
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Case studies policies - anyone can read, only admins can modify
CREATE POLICY "Anyone can view case studies"
ON public.case_studies
FOR SELECT
USING (true);

CREATE POLICY "Admins can insert case studies"
ON public.case_studies
FOR INSERT
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update case studies"
ON public.case_studies
FOR UPDATE
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete case studies"
ON public.case_studies
FOR DELETE
USING (public.is_admin(auth.uid()));

-- Create profile table
CREATE TABLE public.profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    title TEXT NOT NULL,
    hero_tagline TEXT,
    about_text TEXT,
    resume_url TEXT,
    email TEXT,
    linkedin_url TEXT,
    skills JSONB DEFAULT '[]'::jsonb,
    tools JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profile
ALTER TABLE public.profile ENABLE ROW LEVEL SECURITY;

-- Profile policies - anyone can read, only admins can modify
CREATE POLICY "Anyone can view profile"
ON public.profile
FOR SELECT
USING (true);

CREATE POLICY "Admins can update profile"
ON public.profile
FOR UPDATE
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert profile"
ON public.profile
FOR INSERT
WITH CHECK (public.is_admin(auth.uid()));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

-- Add triggers for updated_at
CREATE TRIGGER update_case_studies_updated_at
BEFORE UPDATE ON public.case_studies
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_profile_updated_at
BEFORE UPDATE ON public.profile
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default profile data
INSERT INTO public.profile (
    full_name,
    title,
    hero_tagline,
    about_text,
    email,
    skills,
    tools
) VALUES (
    'Jigar Chheda',
    'Project and Operations Manager',
    'Project Manager Driving Digital Success',
    'I''m Jigar Chheda, a Project and Operations Manager with 4+ years of experience in managing cross-functional teams, delivering digital projects, and improving operational efficiency. With expertise in Agile, Scrum, and tools like Jira, Trello, GanttPro, and Zoho Projects, I ensure smooth execution and measurable results.',
    'jigar@example.com',
    '[
        {
            "category": "Project Management",
            "icon": "Target",
            "skills": ["Agile", "Scrum (Certified ScrumMaster)", "Waterfall", "Resource Management", "Stakeholder Communication"]
        },
        {
            "category": "Digital Operations",
            "icon": "TrendingUp",
            "skills": ["SEO & Digital Marketing", "Process Optimization", "Team Leadership", "Client Relations"]
        }
    ]'::jsonb,
    '["Jira", "Trello", "GanttPro", "Zoho Projects", "Slack", "Microsoft Project", "Google Workspace"]'::jsonb
);