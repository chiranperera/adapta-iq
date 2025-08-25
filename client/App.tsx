import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot, Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Why from "./pages/Why";
import EarlyAccess from "./pages/EarlyAccess";
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
          <Route path="/about" element={<About />} />
          <Route path="/why" element={<Why />} />
          <Route path="/early-access" element={<EarlyAccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Prevent multiple root creation in development
const container = document.getElementById("root")!;

// Global variable to track if root has been created
declare global {
  var __REACT_ROOT__: Root | undefined;
}

// Initialize root only once, even with HMR
function initializeApp() {
  if (!globalThis.__REACT_ROOT__) {
    globalThis.__REACT_ROOT__ = createRoot(container);
  }
  globalThis.__REACT_ROOT__.render(<App />);
}

// Initialize the app
initializeApp();
