import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/hooks/useAuth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import FloatingBackground from "@/components/FloatingBackground";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectRouter from "./pages/ProjectRouter";
import ServiceRouter from "./pages/ServiceRouter";
import ProductRouter from "./pages/ProductRouter";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Courses from "./pages/Courses";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import StartupPlatform from "./pages/StartupPlatform";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import AgriStartupPlatform from "./pages/AgriStartupPlatform";
import AgriStartupEnquiry from "./pages/AgriStartupEnquiry";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <main className="min-h-screen relative z-10">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                
                {/* Legacy specific project by ID handled by Projects page */}
                <Route path="/projects/legacy/:id" element={<Projects />} />
                
                {/* 4-Layer Dynamic Project Structure handling */}
                <Route path="/projects/:category" element={<ProjectRouter />} />
                <Route path="/projects/:category/:subcategory" element={<ProjectRouter />} />
                <Route path="/projects/:category/:subcategory/:feature" element={<ProjectRouter />} />

                 <Route path="/services" element={<Services />} />
                
                {/* 4-Layer Dynamic Services Structure handling */}
                <Route path="/services/:category" element={<ServiceRouter />} />
                <Route path="/services/:category/:subcategory" element={<ServiceRouter />} />
                <Route path="/services/:category/:subcategory/:feature" element={<ServiceRouter />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/products" element={<Products />} />
                
                {/* Dynamic Products Structure handling */}
                <Route path="/products/:category" element={<ProductRouter />} />
                <Route path="/products/:category/:productSlug" element={<ProductRouter />} />
                <Route path="/agri-startup-platform" element={<AgriStartupPlatform />} />
                <Route path="/startup-enquiry" element={<AgriStartupEnquiry />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/startup-platform" element={<StartupPlatform />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <Chatbot />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
