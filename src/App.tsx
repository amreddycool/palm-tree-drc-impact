import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Registration from "./pages/Registration";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import USA from "./pages/countries/USA";
import UK from "./pages/countries/UK";
import DRC from "./pages/countries/DRC";
import SouthAfrica from "./pages/countries/SouthAfrica";
import Australia from "./pages/countries/Australia";
import India from "./pages/countries/India";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/team" element={<Team />} />
          <Route path="/countries/usa" element={<USA />} />
          <Route path="/countries/uk" element={<UK />} />
          <Route path="/countries/drc" element={<DRC />} />
          <Route path="/countries/south-africa" element={<SouthAfrica />} />
          <Route path="/countries/australia" element={<Australia />} />
          <Route path="/countries/india" element={<India />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
