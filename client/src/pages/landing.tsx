import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
// Landing page components
import { 
  Brain, 
  MessageSquare, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Clock,
  Building,
  Star,
  CheckCircle,
  Play,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";
import { Link } from "wouter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Premium Navigation */}
      <nav className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary tracking-tight">HigherHire</h1>
              </div>
              <div className="hidden md:block ml-12">
                <div className="flex items-baseline space-x-10">
                  <a href="#features" className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium">Features</a>
                  <a href="#pricing" className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium">Pricing</a>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium">About</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" className="premium-button font-medium" asChild>
                  <Link href="/home">Sign In</Link>
                </Button>
                <Button className="premium-button bg-primary hover:bg-primary/90 font-medium px-6" asChild>
                  <Link href="/home">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Premium Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/10 to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(30,58,138,0.08),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center fade-in">
            <div className="mb-8">
              <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20 font-medium">
                Your Standards. Your Career.
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
              Know before you
              <span className="text-primary block md:inline"> say yes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Research employers the same way they research you. Get real insights, 
              honest employee experiences, and crucial red flags.
            </p>
            
            <p className="text-lg font-medium text-foreground/80 mb-12 max-w-2xl mx-auto">
              Because your career decisions deserve better than guesswork.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="premium-button bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto" asChild>
                <Link href="/home">Look Up a Company</Link>
              </Button>
              <Button variant="outline" size="lg" className="premium-button text-lg px-8 py-4 h-auto border-primary/20 hover:bg-primary/5">
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>
            
            {/* Premium Company Search Demo */}
            <div className="max-w-2xl mx-auto slide-up">
              <Card className="premium-card p-8 bg-card/50 backdrop-blur-sm border-primary/10">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6 text-left text-foreground">
                    Try searching for any company
                  </h3>
                  <Button asChild size="lg" className="w-full">
                    <Link href="/employer-audit">Start Company Research</Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-left leading-relaxed">
                    Discover what employees actually think—not just what corporate PR wants you to see. 
                    Start with one free lookup, then unlock unlimited insights with Pro.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Actually Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real employee perspectives, salary data, and workplace insights you won't find in job postings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-accent dark:bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Employee Insights</h3>
              <p className="text-muted-foreground">Data from Glassdoor, Reddit, Blind, and other sources where employees share honest experiences about their workplaces.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-accent dark:bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Workplace Culture Reality</h3>
              <p className="text-muted-foreground">Anonymous employee posts, honest reviews, and workplace experiences that reveal what it's actually like to work there.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-accent dark:bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Salary Intelligence</h3>
              <p className="text-muted-foreground">Real compensation data from current and former employees, not the ranges companies post in job descriptions.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-accent dark:bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Warning Signs</h3>
              <p className="text-muted-foreground">Patterns in employee feedback that reveal potential issues with management, culture, or workplace practices.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-accent dark:bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unbiased Information</h3>
              <p className="text-muted-foreground">Independent research not influenced by employer partnerships. Data-driven insights focused on helping you make informed career decisions.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-accent dark:bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Current Information</h3>
              <p className="text-muted-foreground">Regular updates with the latest employee feedback, company changes, and workplace trends to give you the most current picture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why HigherHire Is Different
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 dark:text-red-300 mb-3">
                  🏢 Corporate Job Sites
                </h3>
                <ul className="text-left text-red-800 dark:text-red-400 space-y-2">
                  <li>• Paid by employers to hide problems</li>
                  <li>• Filter out negative reviews</li>
                  <li>• Push you toward any job opening</li>
                  <li>• Care about ad revenue, not your career</li>
                  <li>• Show inflated salary ranges</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  💙 Your AI Companion
                </h3>
                <ul className="text-left text-blue-800 dark:text-blue-400 space-y-2">
                  <li>• Only loyal to you and your wellbeing</li>
                  <li>• Digs up the dirt they don't want you to see</li>
                  <li>• Warns you away from toxic workplaces</li>
                  <li>• Fights for your career happiness</li>
                  <li>• Shows real compensation data</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <p className="text-xl text-muted-foreground font-medium">
                "Companies spend millions researching you. Now you have someone in your corner doing the same for them."
              </p>
              <p className="text-lg text-muted-foreground italic">
                Professional tool by day, workplace drama detector by night. Perfect for job hunting... or just satisfying your curiosity about that company everyone talks about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Report Preview */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See What You Get</h2>
            <p className="text-xl text-muted-foreground">Sample audit report for a Fortune 500 company</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <Building className="text-primary-foreground text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">TechCorp Inc.</h3>
                      <p className="text-muted-foreground">Technology • San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">8.1/10</div>
                    <p className="text-sm text-muted-foreground">Overall Score</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  <Card className="bg-green-50 dark:bg-green-950/20 p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">4.2/5</div>
                    <p className="text-sm text-muted-foreground">Employee Rating</p>
                  </Card>
                  <Card className="bg-blue-50 dark:bg-blue-950/20 p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">$165k</div>
                    <p className="text-sm text-muted-foreground">Avg. Salary</p>
                  </Card>
                  <Card className="bg-purple-50 dark:bg-purple-950/20 p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">23%</div>
                    <p className="text-sm text-muted-foreground">Growth Rate</p>
                  </Card>
                  <Card className="bg-yellow-50 dark:bg-yellow-950/20 p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">Medium</div>
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                  </Card>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Brain className="text-primary mr-2" />
                    AI Summary
                  </h4>
                  <Card className="bg-muted/50 p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      TechCorp Inc. shows strong employee satisfaction with competitive compensation packages, particularly in engineering roles. The company culture emphasizes innovation and work-life balance, though some employees report high-pressure environments during product launches. Recent expansion into AI markets presents growth opportunities, but increased competition may impact long-term stability...
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Generated by GPT-4 • Last updated 2 hours ago</span>
                      <Button variant="link" className="p-0">
                        Read Full Report →
                      </Button>
                    </div>
                  </Card>
                </div>
                
                <Card className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-primary">Want the full detailed analysis?</h5>
                      <p className="text-sm text-muted-foreground">Pro users get 10x more insights, salary breakdowns by role, and risk analysis.</p>
                    </div>
                    <Button asChild>
                      <Link href="/home">Upgrade</Link>
                    </Button>
                  </div>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Start free, upgrade when you need more</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <Card className="premium-card p-6">
              <CardContent className="p-0">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Free</h3>
                  <p className="text-3xl font-bold mb-4">$0</p>
                  <p className="text-muted-foreground mb-6">One company lookup to try it out</p>
                  <Button asChild className="w-full">
                    <Link href="/employer-audit">Start Free</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tier */}
            <Card className="premium-card p-6 border-primary">
              <CardContent className="p-0">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Pro</h3>
                  <p className="text-3xl font-bold mb-4">$8.99</p>
                  <p className="text-muted-foreground mb-6">Unlimited company research for 12 months</p>
                  <Button asChild className="w-full">
                    <Link href="/subscribe">Upgrade to Pro</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JobAudit</h3>
              <p className="text-muted-foreground mb-4">AI-powered employer intelligence for smarter career decisions.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 JobAudit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
