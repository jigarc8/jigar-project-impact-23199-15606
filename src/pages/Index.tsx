import { ArrowRight, CheckCircle, Mail, Linkedin, Download, Users, Target, TrendingUp, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import stuvioHero from "@/assets/stuvio-hero.jpg";
import mitlHero from "@/assets/mitl-hero.jpg";
import rrpHero from "@/assets/rrp-hero.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-primary">Jigar Chheda</h2>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 section-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center fade-in">
            <h1 className="text-hero mb-8 text-foreground leading-tight">
              Project Manager Driving <span className="text-primary">Digital Success</span>
            </h1>
            <p className="text-lead text-muted-foreground mb-12 max-w-3xl mx-auto">
              Helping businesses deliver projects on time, with impact, and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work <ArrowRight className="ml-2" />
              </Button>
              <Button variant="professional" size="lg">
                Download Resume <Download className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-h2 mb-6 text-foreground">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="text-center slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I'm Jigar Chheda, a Project and Operations Manager with 4+ years of experience in managing cross-functional teams, 
              delivering digital projects, and improving operational efficiency. With expertise in Agile, Scrum, and 
              tools like Jira, Trello, GanttPro, and Zoho Projects, I ensure smooth execution and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-24 px-6 section-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-h2 mb-6 text-foreground">Skills & Tools</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <h3 className="text-h3 mb-6 text-foreground flex items-center">
                  <Target className="w-6 h-6 text-primary mr-3" />
                  Project Management
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Agile', 'Scrum (Certified ScrumMaster)', 'Waterfall', 'Resource Management', 'Stakeholder Communication'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <h3 className="text-h3 mb-6 text-foreground flex items-center">
                  <TrendingUp className="w-6 h-6 text-primary mr-3" />
                  Digital Operations
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['SEO & Digital Marketing', 'Process Optimization', 'Team Leadership', 'Client Relations'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="card-professional slide-up">
              <CardContent className="p-8 text-center">
                <h3 className="text-h3 mb-6 text-foreground flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary mr-3" />
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Jira', 'Trello', 'GanttPro', 'Zoho Projects', 'Slack', 'Microsoft Project', 'Google Workspace'].map((tool) => (
                    <span key={tool} className="px-4 py-2 bg-muted text-muted-foreground rounded-lg font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-h2 mb-6 text-foreground">Case Studies</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore how I've helped organizations deliver successful projects and drive operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Link to="/case/stuvio" className="group stagger-animation">
              <Card className="card-professional h-full overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={stuvioHero} 
                    alt="Stuvio Operations & SEO Growth" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-h3 mb-3 text-foreground">Stuvio</h3>
                  <p className="text-muted-foreground mb-4">Operations & SEO Growth</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Managed team resources & client projects
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Improved SEO ranking to first page
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/case/mitl" className="group stagger-animation">
              <Card className="card-professional h-full overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={mitlHero} 
                    alt="MITL Digital Transformation" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-h3 mb-3 text-foreground">MITL</h3>
                  <p className="text-muted-foreground mb-4">Digital Transformation</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Streamlined digital presence project
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      25% improvement in client engagement
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/case/rrp-drones" className="group stagger-animation">
              <Card className="card-professional h-full overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={rrpHero} 
                    alt="RRP Drones Experience Website" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-h3 mb-3 text-foreground">RRP Drones</h3>
                  <p className="text-muted-foreground mb-4">Experience-Driven Website</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Managed scroll website development
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Coordinated with developers & video editors
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/case/rrp-electronics" className="group stagger-animation">
              <Card className="card-professional h-full overflow-hidden">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-h3 mb-3 text-foreground">RRP Electronics</h3>
                  <p className="text-muted-foreground mb-4">Digital Platform Launch</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Led multi-channel digital launch
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Coordinated cross-functional teams
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/case/rrp-defense" className="group stagger-animation">
              <Card className="card-professional h-full overflow-hidden">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <Target className="w-16 h-16 text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-h3 mb-3 text-foreground">RRP Defense Website</h3>
                  <p className="text-muted-foreground mb-4">Corporate Web Development</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Managed secure website development
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Ensured compliance standards
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/case/magnetic-maharashtra" className="group stagger-animation">
              <Card className="card-professional h-full overflow-hidden">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-h3 mb-3 text-foreground">Magnetic Maharashtra</h3>
                  <p className="text-muted-foreground mb-4">Government Summit Website</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Delivered large-scale event platform
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      Managed stakeholder coordination
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center slide-up">
            <h3 className="text-h3 mb-8 text-foreground">Additional Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="card-professional stagger-animation">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Showreels</h4>
                  <p className="text-sm text-muted-foreground">Production coordination & quality assurance</p>
                </CardContent>
              </Card>
              <Card className="card-professional stagger-animation">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Brand Films</h4>
                  <p className="text-sm text-muted-foreground">Project management & creative oversight</p>
                </CardContent>
              </Card>
              <Card className="card-professional stagger-animation">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">AVs</h4>
                  <p className="text-sm text-muted-foreground">Timeline & resource management</p>
                </CardContent>
              </Card>
              <Card className="card-professional stagger-animation">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Event Environmental Design</h4>
                  <p className="text-sm text-muted-foreground">Multi-vendor coordination & execution</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 section-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-h2 mb-6 text-foreground">What People Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-primary" />
                  <Star className="w-5 h-5 text-primary" />
                  <Star className="w-5 h-5 text-primary" />
                  <Star className="w-5 h-5 text-primary" />
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Jigar's ability to manage projects and keep everyone aligned is outstanding. 
                  His attention to detail and proactive communication made our project a huge success."
                </p>
                <p className="text-sm font-medium text-foreground">Former Colleague</p>
              </CardContent>
            </Card>

            <Card className="card-professional stagger-animation">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-primary" />
                  <Star className="w-5 h-5 text-primary" />
                  <Star className="w-5 h-5 text-primary" />
                  <Star className="w-5 h-5 text-primary" />
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "He ensures clarity and accountability in every project he handles. 
                  Working with Jigar means knowing your project is in capable hands."
                </p>
                <p className="text-sm font-medium text-foreground">Client Feedback</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center slide-up">
            <h2 className="text-h2 mb-6 text-foreground">Let's Work Together</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Let's work together to deliver your next successful project.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="professional" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Jigar Chheda. Project Manager & Operations Specialist.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;