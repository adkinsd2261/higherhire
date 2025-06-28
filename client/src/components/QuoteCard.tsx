interface QuoteCardProps {
  text_snippet: string;
  source_name: string;
  source_url?: string;
  author?: string;
  original_post_date: string;
  tags: string[];
  confidence_score?: 'High' | 'Medium' | 'Low';
}

/**
 * QuoteCard Component
 * 
 * Displays authentic user-generated content about employers with full
 * source attribution. Embodies the "real quotes with citations" principle
 * from the Product Bible, enabling users to verify original sources.
 */
export default function QuoteCard({
  text_snippet,
  source_name,
  source_url,
  author = "Anonymous",
  original_post_date,
  tags = [],
  confidence_score = "Medium"
}: QuoteCardProps) {
  
  // Format the date for display
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateString; // Fallback to original string if parsing fails
    }
  };

  // Get source platform color indicator
  const getSourceColor = (source: string) => {
    const lowerSource = source.toLowerCase();
    if (lowerSource.includes('reddit')) return 'bg-orange-500';
    if (lowerSource.includes('glassdoor')) return 'bg-green-500';
    if (lowerSource.includes('blind')) return 'bg-purple-500';
    if (lowerSource.includes('indeed')) return 'bg-blue-500';
    if (lowerSource.includes('linkedin')) return 'bg-blue-600';
    return 'bg-gray-500'; // Default color
  };

  // Get tag styling based on content
  const getTagStyle = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('compensation') || lowerTag.includes('salary') || lowerTag.includes('pay')) {
      return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-200';
    }
    if (lowerTag.includes('culture') || lowerTag.includes('environment')) {
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200';
    }
    if (lowerTag.includes('red-flag') || lowerTag.includes('warning') || lowerTag.includes('toxic')) {
      return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-200';
    }
    if (lowerTag.includes('praise') || lowerTag.includes('positive') || lowerTag.includes('recommend')) {
      return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-200';
    }
    if (lowerTag.includes('management') || lowerTag.includes('leadership')) {
      return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-200';
    }
    if (lowerTag.includes('work-life') || lowerTag.includes('balance')) {
      return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200';
    }
    // Default sage styling
    return 'bg-sage-100 dark:bg-sage-900/30 text-sage-700 dark:text-sage-200';
  };

  return (
    <article className="premium-card bg-card p-8 mb-6 transition-all duration-300 hover:shadow-elevated">
      
      {/* Main Quote Content */}
      <blockquote className="text-foreground leading-relaxed mb-6">
        <span className="text-secondary text-4xl leading-none mr-1 font-serif">"</span>
        <span className="text-lg font-normal leading-relaxed">
          {text_snippet}
        </span>
        <span className="text-secondary text-4xl leading-none ml-1 font-serif">"</span>
      </blockquote>

      {/* Tags Section */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${getTagStyle(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer with Source Attribution */}
      <footer className="flex items-center justify-between pt-4 border-t border-border">
        
        {/* Source and Author */}
        <div className="flex items-center space-x-4">
          {/* Source Platform Indicator */}
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${getSourceColor(source_name)}`}></div>
            {source_url ? (
              <a
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {source_name}
              </a>
            ) : (
              <span className="text-sm font-medium text-muted-foreground">
                {source_name}
              </span>
            )}
          </div>

          {/* Author */}
          {author && author !== "Anonymous" && (
            <>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                by {author}
              </span>
            </>
          )}
        </div>

        {/* Date and Confidence */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <time dateTime={original_post_date}>
            {formatDate(original_post_date)}
          </time>
          
          {/* Confidence Indicator */}
          {confidence_score && (
            <>
              <span>•</span>
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                confidence_score === 'High' ? 'bg-success/10 text-success' :
                confidence_score === 'Medium' ? 'bg-secondary/10 text-secondary' :
                'bg-muted text-muted-foreground'
              }`}>
                {confidence_score}
              </span>
            </>
          )}
        </div>
      </footer>

      {/* Verification Link (if external source) */}
      {source_url && (
        <div className="mt-4 pt-3 border-t border-border">
          <a
            href={source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary hover:text-primary transition-colors flex items-center space-x-2"
          >
            <span>View original source</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </article>
  );
}