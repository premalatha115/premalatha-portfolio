import { Award } from "lucide-react";
import { certifications } from "../data/portfolioData";
import Reveal from "./Reveal";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Certifications</h2>
          <span className="section-index mono">06 / 07</span>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.05} className="cert-card panel">
              <Award size={18} className="cert-card__icon" />
              <div>
                <p className="cert-card__name">{cert.name}</p>
                <p className="cert-card__org mono">{cert.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
