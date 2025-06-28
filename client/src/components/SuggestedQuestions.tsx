interface SuggestedQuestionsProps {
  questions: string[];
  title?: string;
}

/**
 * SuggestedQuestions Component
 * 
 * Displays AI-generated interview questions based on authentic employee feedback.
 * Empowers users with actionable questions to ask during interviews,
 * supporting the "decide for yourself" brand promise.
 */
export default function SuggestedQuestions({
  questions,
  title = "Suggested Interview Questions"
}: SuggestedQuestionsProps) {
  
  if (!questions || questions.length === 0) {
    return (
      <div className="premium-card bg-card p-8">
        <h3 className="text-xl font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground text-base italic">
          No specific questions generated. Consider asking general questions about
          company culture, growth opportunities, and work-life balance.
        </p>
      </div>
    );
  }

  return (
    <div className="premium-card bg-card p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold text-foreground">
          {title}
        </h3>
        <div className="flex items-center space-x-3 text-sm text-secondary">
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <span className="font-medium">Based on employee feedback</span>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div
            key={index}
            className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-200"
          >
            {/* Question Number */}
            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>
            
            {/* Question Content */}
            <div className="flex-1 min-w-0">
              <p className="text-foreground leading-relaxed text-base">
                {question}
              </p>
            </div>

            {/* Copy Button */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(question);
              }}
              className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-2 text-secondary hover:text-primary transition-all duration-200 hover:bg-primary/10 rounded-lg"
              title="Copy question"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Footer Guidance */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-start space-x-4">
          <div className="w-6 h-6 text-secondary mt-1">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Interview Strategy:</strong> These questions are generated from patterns 
              in employee feedback. Use them to dig deeper into areas where this employer 
              has mixed reviews or concerning trends.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-3">
        <button
          onClick={() => {
            const allQuestions = questions.join('\n\n');
            navigator.clipboard.writeText(allQuestions);
          }}
          className="premium-button px-4 py-2.5 text-sm bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Copy All Questions
        </button>
      </div>
    </div>
  );
}