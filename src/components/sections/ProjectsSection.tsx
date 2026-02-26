import { COLORS } from "@/constants/colors";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProjectsSection() {
  const { ref, animStyle } = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={ref}
      id="projects"
      className="py-[100px] px-[5%] dark:bg-[#13131f]"
      style={animStyle}
    >
      <div className="max-w-[1100px] mx-auto">
        <SectionTitle title="Projects" accent={COLORS.coral} />
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
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
