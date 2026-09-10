import { ArrowUpRight } from "lucide-react";
import { dsaJourney } from "../data/portfolioData";
import Reveal from "./Reveal";
import "./DSA.css";

export default function DSA() {
  return (
    <section id="dsa" className="section dsa">
      <div className="container">
        <Reveal className="dsa__panel panel">
          <div className="dsa__content">
            <p className="dsa__label mono">problem solving</p>
            <p className="dsa__text">{dsaJourney.text}</p>
            <div className="dsa__tags">
              {dsaJourney.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a className="btn btn-primary dsa__cta" href={dsaJourney.leetcode} target="_blank" rel="noreferrer">
            View my LeetCode <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
