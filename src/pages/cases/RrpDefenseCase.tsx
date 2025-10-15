import { ArrowLeft, CheckCircle, TrendingUp, Users, Target, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AdminEditCTA from "@/components/AdminEditCTA";

const RrpDefenseCase = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 slide-up">
            <h1 className="text-h1 mb-4 text-foreground">RRP Defense Website: Corporate Development</h1>
            <p className="text-lead text-muted-foreground">
              Managing secure corporate website development with strict compliance requirements
            </p>
          </div>
          
          <div className="aspect-video overflow-hidden rounded-lg mb-12 fade-in bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
            <Shield className="w-32 h-32 text-primary/30" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8 px-6 section-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Industry</h3>
                <p className="text-muted-foreground">Defense & Security</p>
              </CardContent>
            </Card>
            
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">6 Months</p>
              </CardContent>
            </Card>
            
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Team Size</h3>
                <p className="text-muted-foreground">8 Members</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 mb-8 text-foreground slide-up">The Challenge</h2>
          
          <Card className="card-professional slide-up">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RRP Defense required a corporate website that met stringent security and compliance 
                requirements while maintaining professional standards. The project demanded careful 
                coordination with security protocols and strict adherence to regulatory guidelines.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Security Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Strict compliance standards adherence</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Secure development protocols required</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Sensitive information handling</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Project Constraints</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Multiple approval layers needed</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Detailed documentation requirements</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Restricted development environment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* My Role */}
      <section className="py-16 px-6 section-gradient">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 mb-8 text-foreground slide-up">My Role</h2>
          
          <Card className="card-professional slide-up">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As the Project Manager, I ensured the development of RRP Defense's corporate website 
                met all security and compliance requirements while coordinating with multiple stakeholders 
                and managing strict approval processes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Compliance Management</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Managed secure website development process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Ensured compliance standards adherence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Coordinated security reviews and audits</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Stakeholder Coordination</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Navigated multi-layer approval processes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Maintained comprehensive documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Managed vendor and team communications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 mb-8 text-foreground slide-up">Process & Approach</h2>
          
          <div className="space-y-6">
            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Requirements & Compliance Analysis</h4>
                    <p className="text-muted-foreground">
                      Conducted thorough analysis of security requirements and compliance standards. 
                      Developed detailed project plan accounting for all regulatory and security constraints.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Secure Development Setup</h4>
                    <p className="text-muted-foreground">
                      Established secure development environment with proper access controls. 
                      Implemented strict version control and documentation protocols for audit trail.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phased Development & Review</h4>
                    <p className="text-muted-foreground">
                      Managed iterative development with regular security reviews at each milestone. 
                      Coordinated approvals from multiple stakeholders including security and compliance teams.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Security Testing & Launch</h4>
                    <p className="text-muted-foreground">
                      Conducted comprehensive security testing and vulnerability assessments. 
                      Managed controlled launch with continuous monitoring and compliance verification.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
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
                    <span className="text-muted-foreground">Full compliance certification achieved</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Zero security vulnerabilities at launch</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">All documentation requirements met</span>
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
                    <span className="text-muted-foreground">Enhanced corporate credibility</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Strengthened security posture</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Stakeholder confidence established</span>
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
      <AdminEditCTA slug="rrp-defense" />
    </div>
  );
};

export default RrpDefenseCase;
