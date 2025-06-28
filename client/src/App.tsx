import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import EmployerAuditPage from "@/pages/EmployerAuditPage";
import CoverageReport from "@/pages/CoverageReport";
import RoadmapPage from "@/pages/RoadmapPage";
import Subscribe from "@/pages/subscribe";
import SignInPage from "@/pages/sign-in";
import SignUpPage from "@/pages/sign-up";
import ContentModerationDashboard from "@/pages/ContentModerationDashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Core User Journey */}
      <Route path="/" component={Landing} />
      <Route path="/coverage/:companyName" component={CoverageReport} />
      <Route path="/employer-audit" component={EmployerAuditPage} />
      <Route path="/employer-audit/:companyName" component={EmployerAuditPage} />
      <Route path="/roadmap" component={RoadmapPage} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/home" component={Home} />
      
      {/* Admin Tools */}
      <Route path="/admin/moderation" component={ContentModerationDashboard} />
      
      {/* Deprecated routes - redirect to main flow */}
      <Route path="/sign-in" component={Home} />
      <Route path="/sign-up" component={Home} />
      <Route path="/report/:id" component={EmployerAuditPage} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
