import { ArrowLeft, CheckCircle, TrendingUp, Users, Target, Clock, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import rrpHero from "@/assets/rrp-hero.jpg";
import AdminEditCTA from "@/components/AdminEditCTA";

const RrpCase = () => {
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
            <h1 className="text-h1 mb-4 text-foreground">RRP Drones: Experience-Driven Website</h1>
            <p className="text-lead text-muted-foreground">
              Creating an immersive digital experience through innovative scroll-based design
            </p>
          </div>
          
          <div className="aspect-video overflow-hidden rounded-lg mb-12 fade-in">
            <img 
              src={rrpHero} 
              alt="RRP Drones Experience Website" 
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
                <Plane className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Industry</h3>
                <p className="text-muted-foreground">Drone Technology</p>
              </CardContent>
            </Card>
            
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">3 Months</p>
              </CardContent>
            </Card>
            
            <Card className="card-professional stagger-animation">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Team Size</h3>
                <p className="text-muted-foreground">6 Members</p>
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
                RRP Drones wanted to create a unique digital experience that would showcase their 
                cutting-edge drone technology through an innovative, experience-driven scroll website. 
                The project required seamless coordination between developers and video editors to 
                create an immersive user journey.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technical Challenges</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Complex scroll-based interactions</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">High-quality video integration</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Performance optimization requirements</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Coordination Needs</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Developer and video editor alignment</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Brand consistency across all elements</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Tight timeline coordination</span>
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
                As the Project Manager, I orchestrated the development of RRP Drones' experience-driven 
                website, ensuring seamless collaboration between developers and video editors while 
                maintaining project timeline and quality standards.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Project Coordination</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Managed scroll website development project</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Coordinated between developers & video editors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Ensured seamless execution across teams</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Quality Assurance</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Maintained brand consistency standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Oversaw user experience optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Conducted cross-device testing coordination</span>
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
                    <h4 className="font-semibold text-foreground mb-2">Concept & Planning</h4>
                    <p className="text-muted-foreground">
                      Collaborated with RRP Drones to define the experience vision and create detailed 
                      storyboards. Established technical requirements for scroll interactions and video integration.
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
                    <h4 className="font-semibold text-foreground mb-2">Team Coordination Setup</h4>
                    <p className="text-muted-foreground">
                      Established clear communication channels between development and video editing teams. 
                      Created shared workflows and asset management systems for efficient collaboration.
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
                    <h4 className="font-semibold text-foreground mb-2">Iterative Development</h4>
                    <p className="text-muted-foreground">
                      Managed iterative development cycles with frequent testing and refinement. 
                      Coordinated video production timelines with development milestones for optimal integration.
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
                    <h4 className="font-semibold text-foreground mb-2">Experience Optimization</h4>
                    <p className="text-muted-foreground">
                      Conducted comprehensive user experience testing across devices and browsers. 
                      Fine-tuned scroll interactions and video performance for smooth, engaging experience.
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
                    <span className="text-muted-foreground">Delivered innovative scroll experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Seamless team collaboration achieved</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">High-performance video integration</span>
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
                    <span className="text-muted-foreground">Enhanced brand perception</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Improved user engagement</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-success mr-3" />
                    <span className="text-muted-foreground">Award-worthy digital experience</span>
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
      <AdminEditCTA slug="rrp-drones" />
    </div>
  );
};

export default RrpCase;