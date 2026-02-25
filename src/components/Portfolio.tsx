"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";
import Blob from "@/components/ui/Blob";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import GithubSection from "@/components/sections/GithubSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

export default function Portfolio() {
  const { bg, textMain } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "experience", "education", "projects", "github", "contact"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
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
      style={{
        background: bg,
        minHeight: "100vh",
        fontFamily: "'Segoe UI', 'Noto Sans KR', sans-serif",
        color: textMain,
        transition: "all 0.3s",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Blob
          style={{
            width: 500,
            height: 500,
            background: COLORS.coral,
            top: -100,
            left: -100,
          }}
        />
        <Blob
          style={{
            width: 400,
            height: 400,
            background: COLORS.sky,
            top: 200,
            right: -100,
          }}
        />
        <Blob
          style={{
            width: 350,
            height: 350,
            background: COLORS.mint,
            bottom: 100,
            left: "30%",
          }}
        />
        <Blob
          style={{
            width: 300,
            height: 300,
            background: COLORS.purple,
            bottom: -50,
            right: "20%",
          }}
        />
      </div>

      <Navbar activeSection={activeSection} onScrollTo={scrollTo} />

      <div style={{ position: "relative", zIndex: 1, paddingTop: 64 }}>
        <HeroSection onScrollTo={scrollTo} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <GithubSection />
        <ContactSection />
        <Footer />
      </div>
      <ScrollTopButton />
    </div>
  );
}
