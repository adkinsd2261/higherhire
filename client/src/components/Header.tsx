import { Link } from 'wouter';
import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              HigherHire
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link href="/employer-audit" className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted">
              Company Lookup
            </Link>
            <Link href="/home" className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted">
              My Research
            </Link>
            <Link href="/subscribe" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow-md">
              Upgrade to Pro
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}