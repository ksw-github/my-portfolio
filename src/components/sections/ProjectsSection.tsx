import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProjectsSection() {
  const { dark } = useTheme();
  const { ref, animStyle } = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={ref}
      id="projects"
      style={{
        padding: "100px 5%",
        background: dark ? "#13131f" : "#f5f5ff",
        ...animStyle,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle title="Projects" accent={COLORS.coral} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
