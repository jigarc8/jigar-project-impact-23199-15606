import { ArrowLeft, CheckCircle, TrendingUp, Users, Target, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AdminEditCTA from "@/components/AdminEditCTA";

const RrpElectronicsCase = () => {
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
            <h1 className="text-h1 mb-4 text-foreground">RRP Electronics: Digital Platform Launch</h1>
            <p className="text-lead text-muted-foreground">
              Orchestrating a multi-channel digital launch for consumer electronics
            </p>
          </div>
          
          <div className="aspect-video overflow-hidden rounded-lg mb-12 fade-in bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Zap className="w-32 h-32 text-primary/30" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8 px-6 section-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Industry</h3>
                <p className="text-muted-foreground">Consumer Electronics</p>
              </CardContent>
            </Card>
            
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">5 Months</p>
              </CardContent>
            </Card>
            
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Team Size</h3>
                <p className="text-muted-foreground">12 Members</p>
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
                RRP Electronics needed to launch a comprehensive digital platform across multiple channels 
                simultaneously, requiring precise coordination between web development, marketing, content 
                creation, and e-commerce teams to ensure a unified brand experience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Launch Complexity</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Multi-channel coordination required</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Tight timeline with fixed launch date</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Multiple stakeholder requirements</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technical Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">E-commerce integration complexity</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Cross-platform consistency needs</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Large product catalog management</span>
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
                As the Lead Project Manager, I orchestrated the entire digital platform launch, managing 
                cross-functional teams across development, marketing, content, and e-commerce to deliver 
                a cohesive multi-channel digital presence.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Launch Coordination</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Led multi-channel digital launch strategy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Coordinated cross-functional teams</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Managed timeline and milestone delivery</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Stakeholder Management</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Aligned stakeholder expectations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Facilitated decision-making processes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Ensured brand consistency across channels</span>
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
                    <h4 className="font-semibold text-foreground mb-2">Strategic Planning</h4>
                    <p className="text-muted-foreground">
                      Developed comprehensive launch strategy with detailed timelines for each channel. 
                      Established clear dependencies and critical path for coordinated multi-channel delivery.
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
                    <h4 className="font-semibold text-foreground mb-2">Team Alignment</h4>
                    <p className="text-muted-foreground">
                      Created unified communication framework across all teams. Implemented daily standups 
                      and weekly sync meetings to ensure alignment and address blockers promptly.
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
                    <h4 className="font-semibold text-foreground mb-2">Phased Execution</h4>
                    <p className="text-muted-foreground">
                      Managed phased rollout with internal testing, beta launch, and full public launch. 
                      Coordinated content creation, platform development, and marketing campaigns simultaneously.
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
                    <h4 className="font-semibold text-foreground mb-2">Launch & Optimization</h4>
                    <p className="text-muted-foreground">
                      Executed coordinated launch across all channels with real-time monitoring. 
                      Implemented feedback loops for rapid optimization and issue resolution post-launch.
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
                <h4 className="font-semibold text-foreground mb-4">Launch Success</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">On-time delivery across all channels</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Zero critical issues at launch</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Seamless cross-platform experience</span>
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
                    <span className="text-muted-foreground">Strong initial customer engagement</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Positive stakeholder feedback</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Foundation for future growth</span>
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
      <AdminEditCTA slug="rrp-electronics" />
    </div>
  );
};

export default RrpElectronicsCase;
