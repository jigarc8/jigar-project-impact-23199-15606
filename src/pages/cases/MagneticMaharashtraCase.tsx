import { ArrowLeft, CheckCircle, TrendingUp, Users, Target, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AdminEditCTA from "@/components/AdminEditCTA";

const MagneticMaharashtraCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 slide-up">
            <h1 className="text-h1 mb-4 text-foreground">Magnetic Maharashtra: Summit Website</h1>
            <p className="text-lead text-muted-foreground">
              Delivering large-scale event platform for government investment summit
            </p>
          </div>
          
          <div className="aspect-video overflow-hidden rounded-lg mb-12 fade-in bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
            <Building2 className="w-32 h-32 text-primary/30" />
          </div>
        </div>
      </section>

      <section className="py-8 px-6 section-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Industry</h3>
                <p className="text-muted-foreground">Government Summit</p>
              </CardContent>
            </Card>
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">4 Months</p>
              </CardContent>
            </Card>
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Stakeholders</h3>
                <p className="text-muted-foreground">15+ Entities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 mb-8 text-foreground slide-up">The Challenge</h2>
          <Card className="card-professional slide-up">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Magnetic Maharashtra required a comprehensive event platform to support their flagship 
                investment summit, coordinating multiple government agencies and stakeholders with strict 
                timelines and high visibility requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6 section-gradient">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 mb-8 text-foreground slide-up">My Role</h2>
          <Card className="card-professional slide-up">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Led the delivery of large-scale event platform, managing stakeholder coordination 
                across 15+ government entities while ensuring timely delivery for the summit.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6 section-gradient">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 mb-8 text-foreground slide-up">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <h4 className="font-semibold text-foreground mb-4">Project Success</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Delivered on schedule for summit</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Coordinated 15+ stakeholder entities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <h4 className="font-semibold text-foreground mb-4">Business Impact</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Successful summit execution</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Enhanced government credibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Link to="/">
              <Button variant="hero" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <AdminEditCTA slug="magnetic-maharashtra" />
    </div>
  );
};

export default MagneticMaharashtraCase;
