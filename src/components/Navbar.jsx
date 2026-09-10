import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "../data/portfolioData";
import "./Navbar.css";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.to))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <button className="navbar__brand mono" onClick={() => handleNav("home")}>
          premalatha<span className="navbar__brand-dot">.</span>dev
        </button>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.to}
              className={`navbar__link ${active === link.to ? "navbar__link--active" : ""}`}
              onClick={() => handleNav(link.to)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            className="btn navbar__resume"
            href={profile.resumeFile}
            download
          >
            <Download size={15} /> Resume
          </a>
          <button
            className="navbar__icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="navbar__icon-btn navbar__menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.to}
                className={`navbar__mobile-link ${active === link.to ? "navbar__link--active" : ""}`}
                onClick={() => handleNav(link.to)}
              >
                {link.label}
              </button>
            ))}
            <a className="btn btn-primary navbar__mobile-resume" href={profile.resumeFile} download>
              <Download size={15} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
