import { useState } from "react";
import { Mail, Code2, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/portfolioData";
import Reveal from "./Reveal";
import { LinkedinMark } from "./BrandIcons";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // No backend/email service is configured yet — this only validates on the frontend.
    setSent(true);
  };

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Let's build something meaningful</h2>
          <span className="section-index mono">07 / 07</span>
        </div>

        <div className="contact__grid">
          <Reveal className="contact__info">
            <p className="contact__text">
              I'm open to opportunities where I can contribute to building scalable software,
              modern backend systems, and impactful products.
            </p>
            <div className="contact__links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={17} /> {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedinMark size={17} /> linkedin.com/in/premalatha115
              </a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer">
                <Code2 size={17} /> leetcode.com/u/Premalatha77
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="contact__form-wrap panel">
            {sent ? (
              <div className="contact__success">
                <CheckCircle2 size={28} className="contact__success-icon" />
                <p>Thanks — your message looks good. Since a backend isn't wired up yet, reach out directly at {profile.email} and I'll reply from there.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" value={form.name} onChange={handleChange("name")} />
                  {errors.name && <span className="contact__error">{errors.name}</span>}
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={form.email} onChange={handleChange("email")} />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={4} value={form.message} onChange={handleChange("message")} />
                  {errors.message && <span className="contact__error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
