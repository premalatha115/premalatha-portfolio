import { Trophy } from "lucide-react";
import { achievement, currentlyLearning } from "../data/portfolioData";
import Reveal from "./Reveal";
import "./Extras.css";

export default function Extras() {
  return (
    <section id="extras" className="section extras">
      <div className="container extras__grid">
        <Reveal className="extras__achievement panel">
          <Trophy size={20} className="extras__trophy" />
          <div>
            <p className="extras__achievement-title">{achievement.title}</p>
            <p className="extras__achievement-date mono">{achievement.date}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="extras__learning panel">
          <p className="extras__learning-label mono">currently learning</p>
          <div className="extras__learning-chips">
            {currentlyLearning.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
