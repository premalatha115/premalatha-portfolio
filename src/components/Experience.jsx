import { ArrowRight } from "lucide-react";
import { experience } from "../data/portfolioData";
import Reveal from "./Reveal";
import "./Experience.css";

const flow = ["Legacy COBOL", "Analysis", "Java", "Modern Application"];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Experience</h2>
          <span className="section-index mono">02 / 07</span>
        </div>

        <Reveal className="experience__flow panel">
          {flow.map((step, i) => (
            <div className="experience__flow-step" key={step}>
              <span className={`experience__flow-label mono ${i === 0 ? "experience__flow-label--legacy" : ""} ${i === flow.length - 1 ? "experience__flow-label--modern" : ""}`}>
                {step}
              </span>
              {i < flow.length - 1 && <ArrowRight size={16} className="experience__flow-arrow" />}
            </div>
          ))}
        </Reveal>

        {experience.map((job) => (
          <Reveal key={job.company} delay={0.1} className="experience__card panel">
            <div className="experience__card-head">
              <div>
                <h3 className="experience__role">{job.role}</h3>
                <p className="experience__company">{job.company}</p>
              </div>
              <div className="experience__meta">
                <span className="mono">{job.period}</span>
                <span className="experience__location">{job.location}</span>
              </div>
            </div>
            <ul className="experience__list">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
