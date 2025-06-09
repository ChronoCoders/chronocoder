import { useEffect, Suspense } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { Skeleton } from "@/components/ui/skeleton-loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Loading components for each section
function SectionSkeleton({ height = "400px" }: { height?: string }) {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <Skeleton height="3rem" width="300px" className="mx-auto mb-4" />
        <Skeleton height="1.5rem" width="500px" className="mx-auto mb-12" />
        <div style={{ height }} className="w-full">
          <Skeleton height="100%" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  // Handle active nav link highlighting based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("text-primary");
        link.classList.add("text-white", "hover:text-primary-light");
        const href = link.getAttribute("href")?.substring(1);
        if (href === current) {
          link.classList.add("text-primary");
          link.classList.remove("text-white", "hover:text-primary-light");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add page metadata
  useEffect(() => {
    // Update page title dynamically if needed
    document.title = "ChronoCoder - Blockchain Solutions Architect & Smart Contract Developer";
    
    // You could also update meta description dynamically if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Specialized blockchain architect and smart contract developer with expertise in DeFi, NFTs, and Web3 integration. Building secure, innovative decentralized solutions for tomorrow\'s digital economy.');
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Navbar />
        {/* Using semantic HTML5 elements for better SEO */}
        <main id="content" role="main" itemScope itemType="https://schema.org/ProfilePage">
          {/* Adding structured data attributes */}
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="ChronoCoder" />
            <meta itemProp="jobTitle" content="Blockchain Solutions Architect" />
            <meta itemProp="description" content="Blockchain Solutions Architect specializing in smart contract development, DeFi protocols, and Web3 infrastructure" />
          </div>
          
          <ErrorBoundary fallback={<SectionSkeleton height="100vh" />}>
            <Suspense fallback={<SectionSkeleton height="100vh" />}>
              <HeroSection />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <AboutSection />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <SkillsSection />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <ServicesSection />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <ProjectsSection />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <BlogSection />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <TestimonialsSection />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <CertificationsSection />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <ContactSection />
            </Suspense>
          </ErrorBoundary>
        </main>
        
        <ErrorBoundary fallback={<div className="py-12 bg-card/50 border-t border-gray-800" />}>
          <Suspense fallback={<Skeleton height="200px" />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}