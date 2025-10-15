import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProfileEditor = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [profileId, setProfileId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    full_name: "",
    title: "",
    hero_tagline: "",
    about_text: "",
    resume_url: "",
    email: "",
    linkedin_url: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/auth");
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .limit(1)
      .maybeSingle();

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch profile',
        variant: 'destructive',
      });
    } else if (data) {
      setProfileId(data.id);
      setFormData({
        full_name: data.full_name || "",
        title: data.title || "",
        hero_tagline: data.hero_tagline || "",
        about_text: data.about_text || "",
        resume_url: data.resume_url || "",
        email: data.email || "",
        linkedin_url: data.linkedin_url || "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (profileId) {
      const { error } = await supabase
        .from('profile')
        .update(formData)
        .eq('id', profileId);

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Success',
          description: 'Profile updated successfully',
        });
      }
    }

    setLoading(false);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/admin" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-h1 mb-8">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="full_name">Full Name *</Label>
                <Input
                  id="full_name"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="title">Professional Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Project and Operations Manager"
                  required
                />
              </div>

              <div>
                <Label htmlFor="hero_tagline">Hero Tagline</Label>
                <Input
                  id="hero_tagline"
                  value={formData.hero_tagline}
                  onChange={(e) => setFormData({ ...formData, hero_tagline: e.target.value })}
                  placeholder="Project Manager Driving Digital Success"
                />
              </div>

              <div>
                <Label htmlFor="about_text">About Text</Label>
                <Textarea
                  id="about_text"
                  value={formData.about_text}
                  onChange={(e) => setFormData({ ...formData, about_text: e.target.value })}
                  rows={6}
                  placeholder="Tell visitors about yourself..."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact & Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                <Input
                  id="linkedin_url"
                  value={formData.linkedin_url}
                  onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div>
                <Label htmlFor="resume_url">Resume URL</Label>
                <Input
                  id="resume_url"
                  value={formData.resume_url}
                  onChange={(e) => setFormData({ ...formData, resume_url: e.target.value })}
                  placeholder="https://..."
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" disabled={loading} size="lg">
              <Save className="w-4 h-4 mr-2" />
              {loading ? "Saving..." : "Save Profile"}
            </Button>
            <Link to="/admin">
              <Button type="button" variant="outline" size="lg">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditor;
