-- Add RLS policies for user_roles table
CREATE POLICY "Admins can view all user roles"
ON public.user_roles
FOR SELECT
USING (public.is_admin(auth.uid()));

CREATE POLICY "Only system can insert user roles"
ON public.user_roles
FOR INSERT
WITH CHECK (false);

CREATE POLICY "Admins can update user roles"
ON public.user_roles
FOR UPDATE
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete user roles"
ON public.user_roles
FOR DELETE
USING (public.is_admin(auth.uid()));