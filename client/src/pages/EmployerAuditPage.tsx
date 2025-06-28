import { useQuery } from '@tanstack/react-query';
import { useParams, useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import DataQualitySummary from '@/components/DataQualitySummary';
import QuoteCard from '@/components/QuoteCard';
import AICompanionSummary from '@/components/AICompanionSummary';
import SuggestedQuestions from '@/components/SuggestedQuestions';
import HonestFallback from '@/components/HonestFallback';
import { generateEmployerSEO, applySEOMetadata, generateStructuredData, applyStructuredData } from '@/utils/seoUtils';

/**
 * EmployerAuditPage - Production employer audit system
 * 
 * Implements Product Bible v2.0 specifications:
 * - Real user quotes with source attribution
 * - Inline citations with tooltips
 * - Data quality transparency
 * - "Here's what's actually out there. Decide for yourself."
 */
export default function EmployerAuditPage() {
  const params = useParams();
  const [location, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const companyName = params.companyName || "";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setLocation(`/employer-audit/${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // Fetch production audit data only if we have a company name
  const { data: auditData, isLoading, error } = useQuery({
    queryKey: ['/api/employers', companyName, 'audit'],
    queryFn: async () => {
      const response = await fetch(`/api/employers/${encodeURIComponent(companyName)}/audit`);
      if (!response.ok) {
        throw new Error(`Failed to fetch audit data: ${response.statusText}`);
      }
      return response.json();
    },
    enabled: !!companyName && companyName.length > 0,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 2
  });

  // Apply SEO metadata when audit data loads
  useEffect(() => {
    if (companyName && auditData) {
      const seoData = generateEmployerSEO(companyName);
      applySEOMetadata(seoData);
      
      // Add structured data with Golden Post if available
      const structuredData = generateStructuredData(companyName, auditData.goldenPost);
      applyStructuredData(structuredData);
    }
  }, [companyName, auditData]);

  // Show search interface if no company name is provided
  if (!companyName) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <div className="glass-panel p-12 rounded-xl text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Employer Research Tool
            </h1>
            <p className="glass-secondary text-lg mb-8">
              They check you. You check them.
            </p>
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter employer name (e.g., Best Buy)"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-white/40 text-white placeholder-white/60 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors flex items-center gap-2 font-medium backdrop-blur-sm"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <div className="glass-panel p-12 rounded-xl text-center">
            <div className="animate-spin w-12 h-12 border-4 border-white/30 border-t-white rounded-full mx-auto"></div>
            <p className="glass-secondary text-lg mt-6">Analyzing employer data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !auditData) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <div className="glass-panel p-12 rounded-xl text-center">
            <p className="text-red-300 text-lg font-medium">Failed to load employer data</p>
            <p className="glass-secondary mt-2">Please try again</p>
          </div>
        </div>
      </div>
    );
  }

  const {
    aiSummary,
    citationMap,
    contentItems,
    dataQuality,
    suggestedQuestions,
    sparsData,
    sourceCount,
    sentiment,
    limitedSummary
  } = auditData;

  // HONEST FALLBACK: Show sparse data component when we don't have enough high-quality sources
  if (sparsData === true) {
    return (
      <div className="min-h-screen">
        <Header />
        <HonestFallback
          companyName={companyName}
          sourceCount={sourceCount || 0}
          sentiment={sentiment}
          limitedSummary={limitedSummary}
          suggestedQuestions={suggestedQuestions || []}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto p-6">
        {/* Premium Company Header with Data Quality */}
        <div className="premium-card bg-card p-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground leading-tight">
                {companyName} Employee Reviews: What It's Really Like to Work Here
              </h1>
              <p className="text-secondary text-lg mt-3 font-medium">
                Research Report
              </p>
            </div>
            <div className="px-6 py-3 bg-primary/10 text-primary rounded-xl text-sm font-bold border border-primary/20">
              Verified Sources
            </div>
          </div>
          
          {/* Data Quality Summary integrated into header */}
          <DataQualitySummary 
            sourceCount={dataQuality?.sourceCount || 0}
            dateRange={dataQuality?.dateRange || "2024"}
            medianDate={dataQuality?.medianDate || "Recent"}
            confidence={dataQuality?.confidence || "Medium"}
            recentSourcesCount={dataQuality?.recentSourcesCount}
            totalMonthsSpan={dataQuality?.totalMonthsSpan}
          />
        </div>

        {/* Two-Column Premium Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: AI Analysis and Suggested Questions */}
          <div className="space-y-8">
            <AICompanionSummary 
              summary={aiSummary || "Analyzing employer data..."}
              citationMap={citationMap || {}}
            />
            
            <SuggestedQuestions questions={suggestedQuestions || []} />
          </div>

          {/* Right Column: Scrollable Quote Feed */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What People Actually Say
            </h2>
            
            <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
              {contentItems && contentItems.length > 0 ? (
                contentItems.map((item: any, index: number) => (
                  <div key={item.id || index} id={`quote-${index}`}>
                    <QuoteCard 
                      text_snippet={item.textSnippet}
                      author={item.author || 'Anonymous'}
                      source_name={item.sourceName}
                      source_url={item.sourceUrl}
                      original_post_date={item.originalPostDate}
                      tags={item.tags || []}
                      confidence_score={item.confidenceScore}
                    />
                  </div>
                ))
              ) : (
                <div className="premium-card bg-card p-8 text-center">
                  <p className="text-foreground text-lg mb-3">Limited employee feedback available for {companyName}.</p>
                  <p className="text-muted-foreground">
                    This could indicate a smaller company or limited online employee presence.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Brand Promise Footer */}
        <div className="text-center py-12 mt-16">
          <p className="text-muted-foreground text-lg font-medium">
            Here's what's actually out there. Decide for yourself.
          </p>
        </div>
      </main>
    </div>
  );
}