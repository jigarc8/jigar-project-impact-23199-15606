import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  subtitle: string;
  featured: boolean;
  live_url?: string;
  staging_url?: string;
  figma_url?: string;
}

const CaseStudies = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/auth");
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch case studies',
        variant: 'destructive',
      });
    } else {
      setCaseStudies(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('case_studies')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete case study',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Success',
        description: 'Case study deleted successfully',
      });
      fetchCaseStudies();
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/admin" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <Link to="/admin/case-studies/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-h1 mb-8">Manage Case Studies</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="card-professional">
              <CardContent className="p-6">
                <h3 className="text-h3 mb-2">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-4">{caseStudy.subtitle}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.live_url && (
                    <a href={caseStudy.live_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live
                      </Button>
                    </a>
                  )}
                  {caseStudy.staging_url && (
                    <a href={caseStudy.staging_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Staging
                      </Button>
                    </a>
                  )}
                  {caseStudy.figma_url && (
                    <a href={caseStudy.figma_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Figma
                      </Button>
                    </a>
                  )}
                </div>

                <div className="flex gap-2">
                  <Link to={`/admin/case-studies/${caseStudy.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </Link>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Case Study?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the case study.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(caseStudy.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
