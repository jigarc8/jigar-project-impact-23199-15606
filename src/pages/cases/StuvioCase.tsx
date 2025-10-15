import { ArrowLeft, CheckCircle, TrendingUp, Users, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import stuvioHero from "@/assets/stuvio-hero.jpg";
import AdminEditCTA from "@/components/AdminEditCTA";

const StuvioCase = () => {
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
            <h1 className="text-h1 mb-4 text-foreground">Stuvio: Operations & SEO Growth</h1>
            <p className="text-lead text-muted-foreground">
              Transforming team operations and digital presence for sustained growth
            </p>
          </div>
          
          <div className="aspect-video overflow-hidden rounded-lg mb-12 fade-in">
            <img 
              src={stuvioHero} 
              alt="Stuvio Operations & SEO Growth" 
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
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Team Size</h3>
                <p className="text-muted-foreground">8-12 Members</p>
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
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">SEO Result</h3>
                <p className="text-muted-foreground">Google Page 1</p>
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
                Stuvio needed to optimize their team operations while improving their digital presence. 
                The organization faced challenges with resource allocation, project coordination, and 
                online visibility that were hindering their growth potential.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Operational Challenges</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Inefficient team resource allocation</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Lack of streamlined project processes</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Communication gaps between teams</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Digital Presence Issues</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Poor search engine visibility</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Inconsistent online brand presence</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Limited organic traffic and leads</span>
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
                As the Project and Operations Manager, I led the dual initiative of optimizing internal 
                operations while spearheading the SEO growth strategy to enhance Stuvio's digital footprint.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Operations Management</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Managed team resources and project allocation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Coordinated daily operations and business meetings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Implemented streamlined workflow processes</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">SEO & Digital Strategy</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Developed comprehensive SEO strategy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Coordinated content creation and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Monitored and analyzed digital performance metrics</span>
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
                    <h4 className="font-semibold text-foreground mb-2">Assessment & Planning</h4>
                    <p className="text-muted-foreground">
                      Conducted comprehensive audit of existing operations and digital presence. 
                      Identified key bottlenecks and opportunities for improvement through stakeholder interviews and data analysis.
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
                    <h4 className="font-semibold text-foreground mb-2">Resource Optimization</h4>
                    <p className="text-muted-foreground">
                      Implemented new resource allocation framework using project management tools. 
                      Established clear roles, responsibilities, and communication protocols for team efficiency.
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
                    <h4 className="font-semibold text-foreground mb-2">SEO Strategy Implementation</h4>
                    <p className="text-muted-foreground">
                      Developed and executed comprehensive SEO strategy including keyword research, 
                      content optimization, technical SEO improvements, and link building initiatives.
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
                    <h4 className="font-semibold text-foreground mb-2">Monitoring & Optimization</h4>
                    <p className="text-muted-foreground">
                      Established KPI tracking systems and regular review cycles. 
                      Continuously optimized processes based on performance data and team feedback.
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
                <h4 className="font-semibold text-foreground mb-4">Operational Improvements</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">30% increase in team productivity</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Reduced project delivery time by 25%</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Improved cross-team collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <h4 className="font-semibold text-foreground mb-4">Digital Growth</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Achieved Google first page ranking</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">150% increase in organic traffic</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">40% boost in qualified leads</span>
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
      <AdminEditCTA slug="stuvio" />
    </div>
  );
};

export default StuvioCase;