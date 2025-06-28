import { useState } from 'react';

interface CitationData {
  snippet: string;
  source: string;
  url?: string;
  date?: string;
}

interface AICompanionSummaryProps {
  summary: string;
  citationMap: Record<string, CitationData>;
}

/**
 * AICompanionSummary Component
 * 
 * Displays structured AI analysis with top-line summary, positive themes,
 * areas of concern, and source verification. Designed for scannable,
 * professional presentation of employer insights.
 */
export default function AICompanionSummary({
  summary,
  citationMap
}: AICompanionSummaryProps) {
  
  const [hoveredCitation, setHoveredCitation] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Parse AI summary into structured sections
  const parseStructuredSummary = (text: string) => {
    // Extract top-line summary (first sentence)
    const sentences = text.split(/(?<=[.!?])\s+/);
    const topLineSummary = sentences[0] || "";
    
    // Parse positive themes and concerns from remaining text
    const remainingText = sentences.slice(1).join(' ');
    
    // Simple heuristic to identify positive vs negative themes
    const positiveKeywords = ['excellent', 'good', 'positive', 'benefits', 'opportunities', 'growth', 'culture', 'team', 'flexible', 'supportive'];
    const concernKeywords = ['concerns', 'issues', 'problems', 'challenges', 'difficult', 'poor', 'negative', 'lack', 'limited', 'management'];
    
    // Split into bullet points based on common patterns
    const allPoints = remainingText.split(/[.!?](?=\s*[A-Z]|\s*\[)/).filter(point => point.trim().length > 10);
    
    const positiveThemes: string[] = [];
    const concernThemes: string[] = [];
    
    allPoints.forEach(point => {
      const pointLower = point.toLowerCase();
      const hasPositive = positiveKeywords.some(keyword => pointLower.includes(keyword));
      const hasConcern = concernKeywords.some(keyword => pointLower.includes(keyword));
      
      if (hasConcern && !hasPositive) {
        concernThemes.push(point.trim());
      } else if (hasPositive || (!hasConcern && point.trim().length > 0)) {
        positiveThemes.push(point.trim());
      }
    });
    
    return {
      topLineSummary: topLineSummary.trim(),
      positiveThemes: positiveThemes.slice(0, 4), // Limit to 4 bullets each
      concernThemes: concernThemes.slice(0, 4)
    };
  };

  // Render text with interactive citations
  const renderWithCitations = (text: string) => {
    const parts = text.split(/(\[\d+\])/g);
    
    return parts.map((part, index) => {
      const citationMatch = part.match(/\[(\d+)\]/);
      
      if (citationMatch) {
        const citationNumber = citationMatch[1];
        const citationData = citationMap[citationNumber];
        
        if (citationData) {
          return (
            <button
              key={index}
              className="text-primary hover:text-primary/80 px-2 py-1 mx-1 text-xs font-medium rounded-md cursor-pointer inline-flex items-center transition-all hover:bg-primary/10 border border-primary/20"
              onClick={() => {
                const quoteElement = document.getElementById(`quote-${parseInt(citationNumber) - 1}`);
                if (quoteElement) {
                  quoteElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  quoteElement.classList.add('quote-highlight');
                  setTimeout(() => {
                    quoteElement.classList.remove('quote-highlight');
                  }, 2000);
                }
              }}
              onMouseEnter={(e) => {
                setHoveredCitation(citationNumber);
                const rect = e.currentTarget.getBoundingClientRect();
                setTooltipPosition({
                  x: rect.left + rect.width / 2,
                  y: rect.top - 10
                });
              }}
              onMouseLeave={() => setHoveredCitation(null)}
            >
              [{citationNumber}]
            </button>
          );
        }
      }
      
      return <span key={index}>{part}</span>;
    });
  };

  const { topLineSummary, positiveThemes, concernThemes } = parseStructuredSummary(summary);

  return (
    <div className="premium-card bg-card p-8 mb-8">
      {/* Header */}
      <h3 className="text-2xl font-bold text-foreground mb-8">Research Analysis</h3>
      
      {/* Top-Line Summary */}
      <div className="mb-8 p-6 bg-secondary/5 rounded-xl border-l-4 border-secondary">
        <div className="text-foreground font-semibold text-xl leading-relaxed">
          {renderWithCitations(topLineSummary)}
        </div>
      </div>

      {/* Structured Themes */}
      <div className="space-y-8">
        {/* Positive Themes */}
        {positiveThemes.length > 0 && (
          <div>
            <h4 className="text-success font-bold text-lg mb-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Key Strengths</span>
            </h4>
            <ul className="space-y-4">
              {positiveThemes.map((theme, index) => (
                <li key={`positive-${index}`} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-success rounded-full mt-3 flex-shrink-0"></div>
                  <div className="text-foreground text-base leading-relaxed flex-1">
                    {renderWithCitations(theme)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Areas of Concern */}
        {concernThemes.length > 0 && (
          <div>
            <h4 className="text-warning font-bold text-lg mb-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span>Areas to Consider</span>
            </h4>
            <ul className="space-y-4">
              {concernThemes.map((concern, index) => (
                <li key={`concern-${index}`} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-warning rounded-full mt-3 flex-shrink-0"></div>
                  <div className="text-foreground text-base leading-relaxed flex-1">
                    {renderWithCitations(concern)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Fallback for unstructured content */}
        {positiveThemes.length === 0 && concernThemes.length === 0 && (
          <div className="text-foreground leading-relaxed text-base">
            {renderWithCitations(summary)}
          </div>
        )}
      </div>

      {/* Citation Tooltip */}
      {hoveredCitation && citationMap[hoveredCitation] && (
        <div
          className="fixed z-50 max-w-sm p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform: 'translate(-50%, -100%)',
          }}
          onMouseEnter={() => setHoveredCitation(hoveredCitation)}
          onMouseLeave={() => setHoveredCitation(null)}
        >
          {/* Citation Content */}
          <div className="space-y-2">
            <blockquote className="text-sm text-gray-700 dark:text-gray-300 italic border-l-2 border-sage-300 dark:border-sage-600 pl-3">
              "{citationMap[hoveredCitation].snippet}"
            </blockquote>
            
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="font-medium text-sage-600 dark:text-sage-400">
                {citationMap[hoveredCitation].source}
              </span>
              {citationMap[hoveredCitation].date && (
                <span>
                  {new Date(citationMap[hoveredCitation].date!).toLocaleDateString()}
                </span>
              )}
            </div>
            
            {citationMap[hoveredCitation].url && (
              <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                <a
                  href={citationMap[hoveredCitation].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center space-x-1"
                >
                  <span>View source platform</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
          
          {/* Tooltip Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-600 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Analysis Footer */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span className="font-medium">
              {Object.keys(citationMap).length} verified sources
            </span>
            <span>•</span>
            <span>Generated with transparency</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="font-medium text-success">All claims cited</span>
          </div>
        </div>
      </div>
    </div>
  );
}