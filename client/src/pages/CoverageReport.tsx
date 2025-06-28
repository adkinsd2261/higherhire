import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, XCircle, Clock, Users, Search, Bell } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

interface DataCoverage {
  companyName: string;
  totalSources: number;
  highConfidence: number;
  mediumConfidence: number;
  lowConfidence: number;
  hasRecentData: boolean;
  coverageLevel: 'sufficient' | 'limited' | 'insufficient';
  sources: {
    reddit: number;
    glassdoor: number;
    indeed: number;
    news: number;
    forums: number;
  };
  recommendation: string;
  estimatedAuditQuality: 'High' | 'Medium' | 'Low' | 'Unreliable';
}

export default function CoverageReport() {
  const { companyName } = useParams<{ companyName: string }>();
  const [, navigate] = useLocation();
  const [notifyEmail, setNotifyEmail] = useState('');

  const { data: coverage, isLoading, error } = useQuery<DataCoverage>({
    queryKey: ['/api/coverage-check', companyName],
    enabled: !!companyName,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <div className="max-w-4xl mx-auto pt-12">
          <div className="text-center">
            <Search className="h-12 w-12 text-slate-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
              Checking Data Coverage
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Analyzing available sources for {companyName}...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !coverage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <div className="max-w-4xl mx-auto pt-12">
          <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
            <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
            <AlertDescription className="text-red-800 dark:text-red-200">
              Unable to check data coverage for this company. Please try again.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  const handleGenerateAudit = () => {
    navigate(`/company/${companyName}`);
  };

  const handleNotifyMe = async () => {
    // TODO: Implement notification signup
    console.log('Notify when data available:', notifyEmail);
  };

  const getCoverageIcon = (level: string) => {
    switch (level) {
      case 'sufficient':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'limited':
        return <AlertCircle className="h-5 w-5 text-amber-600" />;
      case 'insufficient':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-slate-500" />;
    }
  };

  const getCoverageColor = (level: string) => {
    switch (level) {
      case 'sufficient':
        return 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800';
      case 'limited':
        return 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800';
      case 'insufficient':
        return 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800';
      default:
        return 'bg-slate-50 border-slate-200 dark:bg-slate-900/20 dark:border-slate-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Data Coverage Report
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {coverage.companyName}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
            Honesty over hype - here's what we found
          </p>
        </div>

        {/* Main Coverage Card */}
        <Card className={`mb-6 ${getCoverageColor(coverage.coverageLevel)}`}>
          <CardHeader>
            <div className="flex items-center gap-3">
              {getCoverageIcon(coverage.coverageLevel)}
              <div>
                <CardTitle className="text-xl">
                  {coverage.coverageLevel === 'sufficient' && 'Sufficient Data Available'}
                  {coverage.coverageLevel === 'limited' && 'Limited Data Available'}
                  {coverage.coverageLevel === 'insufficient' && 'Insufficient Data Available'}
                </CardTitle>
                <CardDescription className="text-base mt-1">
                  {coverage.recommendation}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* High Confidence Sources */}
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {coverage.highConfidence}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">High Confidence</div>
                <div className="text-xs text-slate-500 mt-1">Employee communities</div>
              </div>

              {/* Medium Confidence Sources */}
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {coverage.mediumConfidence}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Medium Confidence</div>
                <div className="text-xs text-slate-500 mt-1">General discussions</div>
              </div>

              {/* Low Confidence Sources */}
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                  {coverage.lowConfidence}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Low Confidence</div>
                <div className="text-xs text-slate-500 mt-1">Indirect mentions</div>
              </div>
            </div>

            {/* Source Breakdown */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Data Sources</h3>
              <div className="flex flex-wrap gap-2">
                {coverage.sources.reddit > 0 && (
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                    Reddit: {coverage.sources.reddit}
                  </Badge>
                )}
                {coverage.sources.glassdoor > 0 && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Glassdoor: {coverage.sources.glassdoor}
                  </Badge>
                )}
                {coverage.sources.indeed > 0 && (
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    Indeed: {coverage.sources.indeed}
                  </Badge>
                )}
                {coverage.sources.news > 0 && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    News: {coverage.sources.news}
                  </Badge>
                )}
                {coverage.sources.forums > 0 && (
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                    Forums: {coverage.sources.forums}
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Section */}
        <div className="text-center">
          {coverage.coverageLevel === 'sufficient' ? (
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    Estimated Audit Quality: {coverage.estimatedAuditQuality}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We found enough authentic employee perspectives to generate a reliable audit report.
                </p>
                <Button 
                  onClick={handleGenerateAudit}
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                >
                  Generate Full Audit
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Bell className="h-5 w-5 text-amber-600" />
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    Not Enough Data for Reliable Audit
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We believe in honest reporting. Rather than generate a potentially misleading audit, 
                  we'll notify you when more employee perspectives become available.
                </p>
                
                <div className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md 
                               bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100
                               focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <Button 
                      onClick={handleNotifyMe}
                      disabled={!notifyEmail}
                      className="bg-slate-600 hover:bg-slate-700 text-white"
                    >
                      Notify Me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Trust Building Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Our commitment: We only show you what we can verify. No fake data, no inflated numbers.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            They check you. You check them.
          </p>
        </div>
      </div>
    </div>
  );
}