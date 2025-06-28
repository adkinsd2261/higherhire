import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, ExternalLink, Heart } from "lucide-react";
import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";

export default function Subscribe() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Sign In Required
              </h1>
              <p className="text-muted-foreground mb-4">
                Please sign in to support HigherHire and get Pro access.
              </p>
              <Button asChild>
                <Link href="/home">Sign In</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
            <h1 className="text-xl font-bold text-primary">HigherHire</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Support HigherHire & Get Pro Access
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us keep the service running and get unlimited detailed company audits in return!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Support Information */}
          <div>
            <Card className="bg-primary text-primary-foreground mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">HigherHire Pro</CardTitle>
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    Support Us
                  </Badge>
                </div>
                <div className="text-4xl font-bold">$8.99</div>
                <p className="text-primary-foreground/80">one-time support</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                    <span>Unlimited company audits</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                    <span>Advanced AI analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                    <span>Detailed salary breakdowns</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                    <span>Risk assessment & red flags</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                    <span>Company culture insights</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                    <span>Interview process analysis</span>
                  </li>
                </ul>

                <div className="mt-8 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Save Hours of Research</h4>
                    <p className="text-primary-foreground/80">
                      Get instant insights that would take hours to compile manually 
                      from multiple sources.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">10x More Data</h4>
                    <p className="text-primary-foreground/80">
                      Get comprehensive analysis including work-life balance, management quality, 
                      and career growth opportunities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Salary Intelligence</h4>
                    <p className="text-primary-foreground/80">
                      Detailed salary breakdowns by role, experience level, and location 
                      to help you negotiate better offers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Support Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-red-500" />
                  Other Ways to Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Any amount helps keep HigherHire running and improving!
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://ko-fi.com/higherhireai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      $3 Coffee
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://ko-fi.com/higherhireai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      $5 Support
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ko-fi Support */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Support via Ko-fi</CardTitle>
                <p className="text-muted-foreground">
                  Support HigherHire and get Pro access instantly!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Ko-fi Button */}
                <div className="text-center">
                  <Button size="lg" className="w-full bg-[#13C3FF] hover:bg-[#0fa8e6] text-white" asChild>
                    <a 
                      href="https://ko-fi.com/higherhireai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      Support on Ko-fi - $8.99
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">How it works:</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-bold text-primary mr-2">1.</span>
                      Click the Ko-fi button above to make a $8.99 support
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-primary mr-2">2.</span>
                      Include your Replit username in the Ko-fi message
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-primary mr-2">3.</span>
                      We'll activate Pro access within 24 hours
                    </li>
                  </ol>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-green-800 dark:text-green-200">
                      One-time Payment
                    </h4>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Unlike subscriptions, this is a one-time support payment. 
                    Pro access lasts for 12 months from activation.
                  </p>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Prefer monthly support? Ko-fi also offers monthly memberships!</p>
                  <Button variant="link" size="sm" asChild>
                    <a 
                      href="https://ko-fi.com/higherhireai/commissions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      View membership options
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm">Test Pro Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    For testing: Use activation code "KOFI_SUPPORT_2024"
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/activate-pro', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ activationCode: 'KOFI_SUPPORT_2024' })
                        });
                        const data = await response.json();
                        if (response.ok) {
                          alert('Pro access activated! Refresh the page to see changes.');
                          window.location.reload();
                        } else {
                          alert(data.message || 'Activation failed');
                        }
                      } catch (error) {
                        alert('Activation failed');
                      }
                    }}
                  >
                    Activate Test Pro
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Questions?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need help with your Pro access or have questions about supporting HigherHire?
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:support@yourdomain.com">
                      Contact Support
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}