import { profile } from "../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="mono footer__built">built with React &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
