import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CaseStudyEditor = () => {
  const { id } = useParams();
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    client: "",
    subtitle: "",
    hero_image: "",
    challenge_text: "",
    role_text: "",
    live_url: "",
    staging_url: "",
    figma_url: "",
    featured: false,
    display_order: 0,
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/auth");
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (id && id !== "new") {
      fetchCaseStudy();
    }
  }, [id]);

  const fetchCaseStudy = async () => {
    if (!id || id === "new") return;
    
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch case study',
        variant: 'destructive',
      });
    } else if (data) {
      setFormData({
        slug: data.slug || "",
        title: data.title || "",
        client: data.client || "",
        subtitle: data.subtitle || "",
        hero_image: data.hero_image || "",
        challenge_text: data.challenge_text || "",
        role_text: data.role_text || "",
        live_url: data.live_url || "",
        staging_url: data.staging_url || "",
        figma_url: data.figma_url || "",
        featured: data.featured || false,
        display_order: data.display_order || 0,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const isNew = !id || id === "new";

    if (isNew) {
      const { error } = await supabase
        .from('case_studies')
        .insert([formData]);

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Success',
          description: 'Case study created successfully',
        });
        navigate('/admin/case-studies');
      }
    } else {
      const { error } = await supabase
        .from('case_studies')
        .update(formData)
        .eq('id', id);

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Success',
          description: 'Case study updated successfully',
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
          <Link to="/admin/case-studies" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-h1 mb-8">
          {id === "new" ? "Create New Case Study" : "Edit Case Study"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="stuvio"
                  required
                />
              </div>

              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Stuvio"
                  required
                />
              </div>

              <div>
                <Label htmlFor="client">Client *</Label>
                <Input
                  id="client"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  placeholder="Stuvio Inc."
                  required
                />
              </div>

              <div>
                <Label htmlFor="subtitle">Subtitle *</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Operations & SEO Growth"
                  required
                />
              </div>

              <div>
                <Label htmlFor="hero_image">Hero Image URL</Label>
                <Input
                  id="hero_image"
                  value={formData.hero_image}
                  onChange={(e) => setFormData({ ...formData, hero_image: e.target.value })}
                  placeholder="/path/to/image.jpg"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="live_url">Live Website URL</Label>
                <Input
                  id="live_url"
                  value={formData.live_url}
                  onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <Label htmlFor="staging_url">Staging/Vercel URL</Label>
                <Input
                  id="staging_url"
                  value={formData.staging_url}
                  onChange={(e) => setFormData({ ...formData, staging_url: e.target.value })}
                  placeholder="https://staging.vercel.app"
                />
              </div>

              <div>
                <Label htmlFor="figma_url">Figma Design URL</Label>
                <Input
                  id="figma_url"
                  value={formData.figma_url}
                  onChange={(e) => setFormData({ ...formData, figma_url: e.target.value })}
                  placeholder="https://figma.com/file/..."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="challenge_text">Challenge Description</Label>
                <Textarea
                  id="challenge_text"
                  value={formData.challenge_text}
                  onChange={(e) => setFormData({ ...formData, challenge_text: e.target.value })}
                  rows={4}
                  placeholder="Describe the challenge..."
                />
              </div>

              <div>
                <Label htmlFor="role_text">Role Description</Label>
                <Textarea
                  id="role_text"
                  value={formData.role_text}
                  onChange={(e) => setFormData({ ...formData, role_text: e.target.value })}
                  rows={4}
                  placeholder="Describe your role..."
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" disabled={loading} size="lg">
              <Save className="w-4 h-4 mr-2" />
              {loading ? "Saving..." : "Save Case Study"}
            </Button>
            <Link to="/admin/case-studies">
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

export default CaseStudyEditor;
