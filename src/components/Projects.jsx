import { ExternalLink, ChevronRight } from "lucide-react";
import { projects } from "../data/portfolioData";
import Reveal from "./Reveal";
import { GithubMark } from "./BrandIcons";
import "./Projects.css";

function ProjectCard({ project, index }) {
  return (
    <Reveal
      delay={index * 0.08}
      className={`project-card panel ${project.featured ? "project-card--featured" : ""}`}
    >
      {project.featured && <span className="project-card__badge mono">featured</span>}

      <div className="project-card__head">
        <div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__type mono">{project.type}</p>
        </div>
        <div className="project-card__links">
          <a
            className="btn"
            href={project.github || "#"}
            aria-disabled={!project.github}
            target={project.github ? "_blank" : undefined}
            rel="noreferrer"
          >
            <GithubMark size={15} /> Code
          </a>
          <a
            className="btn"
            href={project.demo || "#"}
            aria-disabled={!project.demo}
            target={project.demo ? "_blank" : undefined}
            rel="noreferrer"
          >
            <ExternalLink size={15} /> Live
          </a>
        </div>
      </div>

      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__stack">
        {project.stack.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="project-card__body">
        <div className="project-card__features">
          <p className="project-card__section-label mono">key features</p>
          <ul>
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="project-card__arch">
          <p className="project-card__section-label mono">architecture</p>
          <div className="project-card__arch-flow">
            {project.architecture.map((layer, i) => (
              <div className="project-card__arch-row" key={layer}>
                <span className="mono">{layer}</span>
                {i < project.architecture.length - 1 && (
                  <ChevronRight size={14} className="project-card__arch-arrow" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
          <span className="section-index mono">03 / 07</span>
        </div>

        <div className="projects__list">
          {projects.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
