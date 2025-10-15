import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, User, LogOut, Plus } from "lucide-react";

const Dashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/auth");
    }
  }, [user, isAdmin, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Portfolio CMS</h1>
          <Button variant="ghost" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-h2 mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">Manage your portfolio content</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                Case Studies
              </CardTitle>
              <CardDescription>Manage your project case studies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/admin/case-studies">
                <Button variant="outline" className="w-full">
                  View All Case Studies
                </Button>
              </Link>
              <Link to="/admin/case-studies/new">
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Case Study
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2 text-primary" />
                Profile
              </CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/admin/profile">
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
