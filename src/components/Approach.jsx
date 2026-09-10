import { buildApproach } from "../data/portfolioData";
import Reveal from "./Reveal";
import "./Approach.css";

export default function Approach() {
  return (
    <section id="approach" className="section approach">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">How I build software</h2>
          <span className="section-index mono">05 / 07</span>
        </div>

        <div className="approach__timeline">
          {buildApproach.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.04} className="approach__step">
              <span className="approach__step-num mono">{step.step}</span>
              <div className="approach__step-body">
                <h3 className="approach__step-title">{step.title}</h3>
                <p className="approach__step-detail">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
