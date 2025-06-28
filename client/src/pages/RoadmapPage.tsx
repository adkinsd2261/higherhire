import { CheckCircle, Clock, Target, Users, MapPin, Building2, TrendingUp, Shield, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Product Roadmap
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building the future of workplace transparency, one authentic insight at a time. 
            Here's what we've built, what's coming next, and where we're headed.
          </p>
        </div>

        {/* Now Live Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Now Live</h2>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              Available Today
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Deep Regional Coverage</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comprehensive employer insights across Arizona and Washington state, covering 100+ major employers 
                  and 120+ school districts. From tech giants like Amazon and Microsoft to regional leaders like 
                  Banner Health and Intel.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Arizona Coverage</span>
                    <span className="font-medium text-blue-600">50+ Major Employers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Washington Coverage</span>
                    <span className="font-medium text-blue-600">50+ Major Employers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">School Districts</span>
                    <span className="font-medium text-blue-600">120+ Districts</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Authentic Community Insights</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Real employee perspectives sourced from Reddit, Glassdoor, Indeed, and workplace forums. 
                  Every insight is traced back to authentic sources with transparent confidence scoring.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Data Sources</span>
                    <span className="font-medium text-blue-600">5+ Authentic Platforms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Quality Control</span>
                    <span className="font-medium text-blue-600">3-Tier Confidence System</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Pre-Audit Coverage Check</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Know before you audit. Our coverage assessment shows exactly what data is available for any employer, 
                  preventing unreliable reports and setting clear expectations.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Coverage Levels</span>
                    <span className="font-medium text-blue-600">Comprehensive/Limited/Insufficient</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Transparency</span>
                    <span className="font-medium text-blue-600">Source Breakdown</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Smart Company Detection</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Intelligent employer matching that recognizes company variations, subsidiaries, and regional 
                  operations. Works seamlessly across different company naming conventions.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Recognition</span>
                    <span className="font-medium text-blue-600">200+ Company Patterns</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Fallback System</span>
                    <span className="font-medium text-blue-600">Industry-Specific Matching</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Coming Soon</h2>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
              In Development
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Advanced Filtering & Analytics</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Filter insights by role, department, tenure, and location. Compare employers within industries 
                  and track workplace trends over time with data-driven visualizations.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Role-specific employee experiences</li>
                  <li>• Department-level culture insights</li>
                  <li>• Geographic workplace variations</li>
                  <li>• Industry benchmarking tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">National Expansion</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Expanding our regional density model to Texas, California, and Florida. Deep employer coverage 
                  in major metropolitan areas with the same quality standards you expect.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Texas: Austin, Dallas, Houston metros</li>
                  <li>• California: Bay Area, LA, San Diego</li>
                  <li>• Florida: Miami, Tampa, Orlando</li>
                  <li>• 300+ additional major employers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Community-Driven Insights</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Verified employee contribution system where current and former employees can share anonymous 
                  insights directly, enhancing our authentic data with firsthand experiences.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Anonymous employee submissions</li>
                  <li>• Verification system for contributors</li>
                  <li>• Community-moderated quality control</li>
                  <li>• Real-time workplace updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Smart Recommendations</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Personalized employer suggestions based on your preferences, career stage, and values. 
                  Discover companies that align with what matters most to you.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Values-based employer matching</li>
                  <li>• Career progression predictions</li>
                  <li>• Salary negotiation insights</li>
                  <li>• Interview preparation guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Vision Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
              The Future
            </Badge>
          </div>

          <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Universal Business Transparency
              </h3>
              
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-6">
                  We envision a world where every working person can make informed career decisions based on authentic, 
                  transparent information about potential employers. No more information asymmetry. No more surprise 
                  toxic cultures or hidden compensation gaps.
                </p>
                
                <p className="mb-6">
                  Our long-term goal is to create the definitive platform for workplace transparency—where any business 
                  with employees can be researched, understood, and evaluated fairly. This means expanding beyond our 
                  current regional focus to provide comprehensive coverage across all industries, company sizes, and 
                  geographic markets.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">10,000+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Companies Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50 States</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Geographic Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">Real-Time</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Workplace Insights</div>
                  </div>
                </div>
                
                <p className="mb-4">
                  We believe that transparency drives positive change. When companies know their workplace practices 
                  are visible and searchable, they're incentivized to create better environments for their employees. 
                  When job seekers have access to authentic insider perspectives, they can choose employers that align 
                  with their values and career goals.
                </p>
                
                <p className="text-lg font-medium text-purple-700 dark:text-purple-300">
                  This is more than a product roadmap—it's a movement toward a more transparent, equitable workplace culture 
                  where information empowers better decisions for everyone.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Research Your Next Employer?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the movement toward workplace transparency. Start with a free company audit and experience 
            what authentic employer insights can do for your career decisions.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Start Free Audit
            </button>
            <button className="w-full sm:w-auto border border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 font-semibold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}