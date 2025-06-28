import { AlertTriangle, Search, Users } from 'lucide-react';
import SuggestedQuestions from './SuggestedQuestions';

interface HonestFallbackProps {
  companyName: string;
  sourceCount: number;
  sentiment?: 'Positive' | 'Negative' | 'Mixed' | null;
  limitedSummary?: string;
  suggestedQuestions?: string[];
}

/**
 * HonestFallback Component
 * 
 * Displays transparent, helpful messaging when we don't have enough
 * high-quality sources to generate a full confidence audit.
 * Embodies our "Honesty over Hype" brand promise.
 */
export default function HonestFallback({
  companyName,
  sourceCount,
  sentiment,
  limitedSummary,
  suggestedQuestions = []
}: HonestFallbackProps) {
  
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive':
        return 'text-success';
      case 'Negative':
        return 'text-destructive';
      case 'Mixed':
        return 'text-warning';
      default:
        return 'text-muted-foreground';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive':
        return '✓';
      case 'Negative':
        return '⚠';
      case 'Mixed':
        return '~';
      default:
        return '?';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Transparent Message Card */}
      <div className="premium-card bg-card p-8 mb-8 border-l-4 border-warning">
        <div className="flex items-start space-x-4 mb-6">
          <AlertTriangle className="w-6 h-6 text-warning mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Limited Data Available
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't have enough data to generate a full, high-confidence audit for <strong className="text-foreground">{companyName}</strong>.
            </p>
          </div>
        </div>

        {/* Data Confidence Score */}
        <div className="bg-warning/10 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span className="font-bold text-warning">Data Confidence: Low</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {sourceCount} {sourceCount === 1 ? 'source' : 'sources'} found
            </div>
          </div>
        </div>

        {/* Tentative Summary (if available) */}
        {(sentiment || limitedSummary) && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Based on Limited Sources
            </h3>
            
            {sentiment && (
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-sm text-muted-foreground">Overall sentiment appears to be:</span>
                <span className={`font-bold text-base ${getSentimentColor(sentiment)}`}>
                  {getSentimentIcon(sentiment)} {sentiment}
                </span>
              </div>
            )}
            
            {limitedSummary && (
              <p className="text-muted-foreground leading-relaxed bg-secondary/5 p-4 rounded-lg">
                {limitedSummary}
              </p>
            )}
          </div>
        )}

        {/* Actionable Advice */}
        <div className="bg-primary/5 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Our Recommendation</span>
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span>Research through professional networks like LinkedIn</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span>Ask detailed questions during your interview process</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span>Connect with current employees through industry events</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span>Check back later as we continue gathering authentic insights</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interview Questions Section */}
      {suggestedQuestions.length > 0 ? (
        <SuggestedQuestions 
          questions={suggestedQuestions}
          title="Essential Questions to Ask"
        />
      ) : (
        <div className="premium-card bg-card p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
            <Search className="w-5 h-5" />
            <span>Essential Questions to Ask</span>
          </h3>
          <div className="space-y-4">
            {[
              "What does a typical day look like in this role?",
              "How would you describe the company culture and team dynamics?",
              "What are the biggest challenges facing the team or company currently?",
              "How does the company support professional development and career growth?",
              "What does work-life balance look like for employees in similar roles?",
              "How are performance reviews conducted and what does success look like?",
              "What's the management style and how often do you interact with leadership?",
              "Are there any upcoming changes or initiatives I should know about?"
            ].map((question, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-200">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-foreground leading-relaxed">{question}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Message */}
      <div className="text-center py-8 mt-8">
        <p className="text-muted-foreground text-lg font-medium">
          Here's what's actually out there. Decide for yourself.
        </p>
      </div>
    </div>
  );
}