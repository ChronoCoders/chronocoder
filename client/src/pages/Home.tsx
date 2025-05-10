import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import InteractiveBlockchainSection from "@/components/InteractiveBlockchainSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <InteractiveBlockchainSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
