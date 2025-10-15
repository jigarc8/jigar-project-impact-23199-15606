import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

interface AdminEditCTAProps {
  slug: string;
}

const AdminEditCTA = ({ slug }: AdminEditCTAProps) => {
  const { isAdmin, loading: authLoading } = useAuth();
  const [caseId, setCaseId] = useState<string | null>(null);

  useEffect(() => {
    if (!isAdmin || authLoading) return;

    const fetchId = async () => {
      const { data } = await supabase
        .from('case_studies')
        .select('id')
        .eq('slug', slug)
        .maybeSingle();
      setCaseId(data?.id ?? null);
    };

    fetchId();
  }, [isAdmin, authLoading, slug]);

  if (authLoading || !isAdmin || !caseId) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link to={`/admin/case-studies/${caseId}`}>
        <Button size="lg" className="shadow-lg">
          <Pencil className="w-4 h-4 mr-2" />
          Edit Case Study
        </Button>
      </Link>
    </div>
  );
};

export default AdminEditCTA;
