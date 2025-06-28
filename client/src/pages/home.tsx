import { useQuery } from "@tanstack/react-query";
import { Building, Plus, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";

export default function Home() {
  const { data: reports, isLoading: reportsLoading } = useQuery({
    queryKey: ["/api/reports"],
  });

  const displayReports = Array.isArray(reports) ? reports : [];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="glass-panel p-8 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Your Employer Research Dashboard
          </h1>
          <p className="glass-secondary text-lg">
            Track your employer audits and discover insights before you apply.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link href="/employer-audit">
            <a className="glass-panel p-8 rounded-xl group hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center space-x-5">
                <div className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center group-hover:from-white/40 group-hover:to-white/20 transition-all">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">New Employer Audit</h3>
                  <p className="glass-secondary text-sm">Research a new employer</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          </Link>

          <Link href="/subscribe">
            <a className="glass-panel p-8 rounded-xl group hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center space-x-5">
                <div className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center group-hover:from-white/40 group-hover:to-white/20 transition-all">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Upgrade to Pro</h3>
                  <p className="glass-secondary text-sm">Unlimited employer audits</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          </Link>
        </div>

        {/* Recent Searches */}
        <div className="glass-panel p-8 rounded-xl">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Recent Searches</h2>
          </div>

          {reportsLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin w-8 h-8 border-4 border-white/20 border-t-white rounded-full"></div>
            </div>
          ) : displayReports.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {displayReports.slice(0, 6).map((report: any) => (
                <Link 
                  key={report.id} 
                  href={`/employer-audit/${encodeURIComponent(report.companyName)}`}
                >
                  <a className="block glass-interactive rounded-xl p-6 group hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center group-hover:from-white/40 group-hover:to-white/20 transition-all">
                        <Building className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white group-hover:text-white/90 transition-colors mb-2 truncate">
                          {report.companyName}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm glass-secondary mb-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{new Date(report.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                            Intelligence Report
                          </span>
                          <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-12 h-12 text-white/60" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                No employer audits yet
              </h3>
              <p className="glass-secondary text-lg mb-8 max-w-md mx-auto">
                Start building your research portfolio by analyzing your first potential employer
              </p>
              <Link href="/employer-audit">
                <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white/25 to-white/15 hover:from-white/35 hover:to-white/25 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm">
                  <Plus className="w-6 h-6 mr-3" />
                  Start Your First Audit
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}