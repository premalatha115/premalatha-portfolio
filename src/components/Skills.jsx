import { skillGroups } from "../data/portfolioData";
import Reveal from "./Reveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Skills</h2>
          <span className="section-index mono">04 / 07</span>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05} className="skills__group panel">
              <p className="skills__group-label mono">{group.label}</p>
              <div className="skills__chips">
                {group.items.map((item) => (
                  <span key={item} className="tag skills__chip">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
