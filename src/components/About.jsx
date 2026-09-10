import { aboutPoints, stats, education, profile } from "../data/portfolioData";
import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">About</h2>
          <span className="section-index mono">01 / 07</span>
        </div>

        <div className="about__grid">
          <Reveal className="about__photo-wrap">
            <div className="about__photo panel">
              <img src={profile.photo} alt={`${profile.name}, ${profile.title}`} />
            </div>
          </Reveal>

          <Reveal delay={0.06} className="about__text">
            <p className="about__lead">
              I build backend systems that hold up under real use — and lately, I've been
              turning decades-old COBOL logic into Java that a modern team can actually maintain.
            </p>
            <ul className="about__points">
              {aboutPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="about__education">
              <p className="about__edu-label mono">education</p>
              {education.map((e) => (
                <div className="about__edu-row" key={e.degree}>
                  <div>
                    <p className="about__edu-degree">{e.degree}</p>
                    <p className="about__edu-school">{e.school}</p>
                  </div>
                  <span className="about__edu-period mono">{e.period}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="about__stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="about__stat panel">
                <p className="about__stat-value">{s.value}</p>
                <p className="about__stat-label">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
