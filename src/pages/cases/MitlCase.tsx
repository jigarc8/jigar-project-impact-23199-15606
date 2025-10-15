import { ArrowLeft, CheckCircle, TrendingUp, Users, Target, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import mitlHero from "@/assets/mitl-hero.jpg";
import AdminEditCTA from "@/components/AdminEditCTA";

const MitlCase = () => {
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
            <h1 className="text-h1 mb-4 text-foreground">MITL Digital Transformation</h1>
            <p className="text-lead text-muted-foreground">
              Streamlining digital presence and enhancing client engagement for a logistics leader
            </p>
          </div>
          
          <div className="aspect-video overflow-hidden rounded-lg mb-12 fade-in">
            <img 
              src={mitlHero} 
              alt="MITL Logistics Digital Transformation" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8 px-6 section-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Truck className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Industry</h3>
                <p className="text-muted-foreground">Logistics</p>
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
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Engagement</h3>
                <p className="text-muted-foreground">+25% Increase</p>
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
                MITL, a growing logistics company, needed to modernize their digital presence to better 
                serve their clients and compete in an increasingly digital marketplace. Their existing 
                website was outdated and didn't reflect their professional capabilities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Digital Challenges</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Outdated website design and functionality</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Poor user experience and navigation</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Limited mobile responsiveness</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Business Impact</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Low client engagement online</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Difficulty showcasing service capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Competitive disadvantage in digital space</span>
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
                As the Project Manager for MITL's digital transformation, I led the complete overhaul 
                of their web presence, coordinating between stakeholders, developers, and design teams 
                to deliver a modern, user-friendly platform.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Project Leadership</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Led cross-functional project team</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Managed project timeline and deliverables</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Ensured quality standards and requirements</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Stakeholder Management</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Coordinated with MITL leadership team</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Facilitated client feedback sessions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Managed vendor relationships</span>
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
                    <h4 className="font-semibold text-foreground mb-2">Discovery & Requirements</h4>
                    <p className="text-muted-foreground">
                      Conducted stakeholder interviews and analyzed existing digital assets. 
                      Defined project scope, requirements, and success metrics in collaboration with MITL leadership.
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
                    <h4 className="font-semibold text-foreground mb-2">Planning & Design</h4>
                    <p className="text-muted-foreground">
                      Created detailed project roadmap with modular development approach. 
                      Collaborated with design team to create user-centered wireframes and prototypes.
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
                    <h4 className="font-semibold text-foreground mb-2">Modular Development</h4>
                    <p className="text-muted-foreground">
                      Implemented agile development methodology with iterative releases. 
                      Ensured timely delivery of website modules while maintaining quality standards.
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
                    <h4 className="font-semibold text-foreground mb-2">Testing & Launch</h4>
                    <p className="text-muted-foreground">
                      Conducted comprehensive testing across devices and browsers. 
                      Managed smooth launch process with minimal downtime and immediate performance monitoring.
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
                    <span className="text-muted-foreground">Delivered on time and within budget</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">100% stakeholder satisfaction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Seamless launch with zero downtime</span>
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
                    <span className="text-muted-foreground">25% increase in client engagement</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Improved brand perception</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Enhanced mobile user experience</span>
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
      <AdminEditCTA slug="mitl" />
    </div>
  );
};

export default MitlCase;