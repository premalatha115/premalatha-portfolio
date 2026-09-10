import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, Code2 } from "lucide-react";
import { profile, introLine, heroStack } from "../data/portfolioData";
import { GithubMark, LinkedinMark } from "./BrandIcons";
import "./Hero.css";

const cobolLines = [
  "IDENTIFICATION DIVISION.",
  "PROGRAM-ID. CALC-PAYROLL.",
  "MOVE EMP-BASIC TO WS-GROSS.",
  "ADD EMP-ALLOW TO WS-GROSS.",
  "PERFORM CALC-DEDUCTIONS.",
];

const javaLines = [
  "public class PayrollService {",
  "  public Payroll calculate(Employee e) {",
  "    double gross = e.getBasic() + e.getAllowance();",
  "    return deductions.apply(gross);",
  "  }",
  "}",
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p
            className="hero__eyebrow mono"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.title} · {profile.company}
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="hero__role"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Software Developer — Java, Spring Boot, Full Stack
          </motion.p>

          <motion.p
            className="hero__intro"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            {introLine}
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <a className="btn btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              View Projects <ArrowUpRight size={16} />
            </a>
            <a className="btn" href={profile.resumeFile} download>
              <Download size={16} /> Download Resume
            </a>
            <a className="btn" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinMark size={17} /> LinkedIn
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
              <Code2 size={17} /> LeetCode
            </a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubMark size={17} /> GitHub
              </a>
            )}
          </motion.div>

          <motion.div
            className="hero__stack"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {heroStack.map((t) => (
              <span key={t} className="tag hero__stack-chip">
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__panel panel"
          initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero__panel-head">
            <span className="hero__dot hero__dot--red" />
            <span className="hero__dot hero__dot--amber" />
            <span className="hero__dot hero__dot--green" />
            <span className="hero__panel-title mono">migration.diff</span>
          </div>

          <div className="hero__diff">
            <div className="hero__diff-col">
              <p className="hero__diff-label mono">legacy · COBOL</p>
              {cobolLines.map((line, i) => (
                <motion.div
                  key={line}
                  className="hero__diff-line hero__diff-line--removed mono"
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.12 }}
                >
                  <span className="hero__diff-marker">−</span>
                  {line}
                </motion.div>
              ))}
            </div>

            <div className="hero__diff-col">
              <p className="hero__diff-label mono">modernized · Java</p>
              {javaLines.map((line, i) => (
                <motion.div
                  key={line}
                  className="hero__diff-line hero__diff-line--added mono"
                  initial={reduce ? false : { opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.6 + i * 0.1 }}
                >
                  <span className="hero__diff-marker">+</span>
                  {line}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hero__panel-footer mono">
            <span>enterprise-modernization</span>
            <span className="hero__panel-status">
              <span className="hero__status-dot" /> build passing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
