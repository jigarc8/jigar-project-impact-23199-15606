import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/admin/Dashboard";
import CaseStudies from "./pages/admin/CaseStudies";
import CaseStudyEditor from "./pages/admin/CaseStudyEditor";
import ProfileEditor from "./pages/admin/ProfileEditor";
import StuvioCase from "./pages/cases/StuvioCase";
import MitlCase from "./pages/cases/MitlCase";
import RrpCase from "./pages/cases/RrpCase";
import RrpElectronicsCase from "./pages/cases/RrpElectronicsCase";
import RrpDefenseCase from "./pages/cases/RrpDefenseCase";
import MagneticMaharashtraCase from "./pages/cases/MagneticMaharashtraCase";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/case-studies" element={<CaseStudies />} />
          <Route path="/admin/case-studies/:id" element={<CaseStudyEditor />} />
          <Route path="/admin/profile" element={<ProfileEditor />} />
          <Route path="/case/stuvio" element={<StuvioCase />} />
          <Route path="/case/mitl" element={<MitlCase />} />
          <Route path="/case/rrp-drones" element={<RrpCase />} />
          <Route path="/case/rrp-electronics" element={<RrpElectronicsCase />} />
          <Route path="/case/rrp-defense" element={<RrpDefenseCase />} />
          <Route path="/case/magnetic-maharashtra" element={<MagneticMaharashtraCase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
