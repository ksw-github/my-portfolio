"use client";

import { useState, useEffect } from "react";
import { COLORS } from "@/constants/colors";
import Blob from "@/components/ui/Blob";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
// import GithubSection from "@/components/sections/GithubSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const ids = [
      "home",
      "about",
      "experience",
      "education",
      "projects",
      "github",
      "contact",
    ];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div
      className="min-h-screen bg-theme-bg text-theme-text transition-all duration-300"
      style={{ fontFamily: "'Segoe UI', 'Noto Sans KR', sans-serif" }}
    >
      {/* Decorative blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <Blob
          style={{
            width: 500,
            height: 500,
            background: COLORS.coral,
            top: -100,
            left: -100,
            animation: "blobFloat1 3s ease-in-out infinite",
          }}
        />
        <Blob
          style={{
            width: 400,
            height: 400,
            background: COLORS.sky,
            top: 200,
            right: -100,
            animation: "blobFloat2 5s ease-in-out infinite",
          }}
        />
        <Blob
          style={{
            width: 350,
            height: 350,
            background: COLORS.mint,
            bottom: 100,
            left: "30%",
            animation: "blobFloat3 4s ease-in-out infinite",
          }}
        />
        <Blob
          style={{
            width: 300,
            height: 300,
            background: COLORS.purple,
            bottom: -50,
            right: "20%",
            animation: "blobFloat4 5s ease-in-out infinite",
          }}
        />
      </div>

      <Navbar activeSection={activeSection} onScrollTo={scrollTo} />

      <div className="relative z-10 pt-16">
        <HeroSection onScrollTo={scrollTo} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        {/* <GithubSection /> */}
        <ContactSection />
        <Footer />
      </div>
      <ScrollTopButton />
    </div>
  );
}
