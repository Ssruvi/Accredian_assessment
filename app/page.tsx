"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Cpu,
  Globe2,
  GraduationCap,
  Lightbulb,
  Menu,
  MessageCircle,
  MonitorCheck,
  PlayCircle,
  Settings2,
  UsersRound,
  X,
} from "lucide-react";

const navItems = [
  ["Home", "home"], ["Stats", "stats"], ["Clients", "clients"],
  ["Accredian Edge", "edge"], ["CAT", "cat"], ["How It Works", "how"],
  ["FAQs", "faqs"], ["Testimonials", "testimonials"],
] as const;

const expertise = [
  [Lightbulb, "Product & Innovation Hub"], [BrainCircuit, "Gen-AI Mastery"],
  [UsersRound, "Leadership Elevation"], [BarChart3, "Tech & Data Insights"],
  [Settings2, "Operations Excellence"], [Globe2, "Digital Enterprise"],
  [Cpu, "Fintech Innovation Lab"],
];

const segmentation = [
  ["01", "Program Specific", "Certificate, Executive, Post Graduate Certificate", "Strategy"],
  ["02", "Industry Specific", "IT, Healthcare, Retail, Finance, Education, Manufacturing", "Industries"],
  ["03", "Topic Specific", "Machine Learning, Design, Analytics, Cybersecurity, Cloud", "Topics"],
  ["04", "Level Specific", "Senior Leadership, Mid-Career Professionals, Freshers", "Levels"],
];

const faqItems = [
  ["What types of corporate training programs does Accredian offer?", "We design custom learning programs across technology, leadership, operations and product innovation for teams of every size."],
  ["What domain specializations are available?", "Our specialised programs cover Gen-AI, data and analytics, cloud, cybersecurity, finance, operations and leadership."],
  ["Can programs be tailored for different employee groups?", "Yes. Every plan is calibrated for your audience, current skills, business objectives and preferred delivery format."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function jumpTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setFormMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      form.reset();
      setFormMessage(result.message);
    } catch {
      setFormMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={() => jumpTo("home")} aria-label="Go to home">
          accredian <small>credentials that matter</small>
        </button>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map(([label, id]) => <button key={id} onClick={() => jumpTo(id)}>{label}</button>)}
        </nav>
      </header>

      <section className="hero section-pad" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Enterprise learning solutions</p>
          <h1>Next-Gen <span>Expertise</span> For Your <span>Enterprise</span></h1>
          <p className="hero-text">Cultivate high-performance teams through expert learning.</p>
          <div className="check-row"><span><CheckCircle2 /> Tailored Solutions</span><span><CheckCircle2 /> Industry Insights</span><span><CheckCircle2 /> Expert Guidance</span></div>
          <button className="primary-btn" onClick={() => jumpTo("contact")}>Talk to an expert <ArrowRight /></button>
        </div>
        <div className="hero-visual" aria-label="Team collaboration illustration">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="hero-card card-a"><BookOpenCheck /><span>Learning<br />that delivers</span></div>
          <div className="hero-card card-b"><UsersRound /><span>Built for<br />your team</span></div>
          <div className="people people-back">M</div><div className="people people-front">A</div>
          <div className="laptop">Accredian <span>Enterprise</span></div>
        </div>
      </section>

      <section className="stats section-pad" id="stats">
        <div className="section-heading"><p className="eyebrow">OUR TRACK RECORD</p><h2>Our <span>Track Record</span></h2><p>The numbers behind <b>our success</b></p></div>
        <div className="stat-grid">
          {[ ["10K+", "Professionals trained for exceptional career success"], ["200+", "Sessions delivered with unmatched learning excellence"], ["5K+", "Active learners engaged in dynamic courses"] ].map(([number, label]) => <div className="stat" key={number}><strong>{number}</strong><p>{label}</p></div>)}
        </div>
      </section>

      <section className="clients" id="clients"><p>TRUSTED BY LEADING ENTERPRISES</p><div className="logo-row"><b>Reliance</b><b>HCL</b><b>IBM</b><b>CRIF</b><b>ADP</b><b>BAYER</b></div></section>

      <section className="edge section-pad" id="edge">
        <div className="section-heading"><p className="eyebrow">THE ACCREDIAN EDGE</p><h2>The <span>Accredian Edge</span></h2><p>Key aspects of <b>our strategic training</b></p></div>
        <div className="edge-grid">
          {[["Tailored Solutions", "Programs customized to your organization’s goals and challenges."], ["Innovative Framework", "Proprietary methods for impactful, application-driven results."], ["Diverse Offerings", "Courses across industries, skill levels, and emerging fields."], ["Flexible Delivery", "Online and offline options tailored to your needs."]].map(([title, text], i) => <div className="edge-item" key={title}><span>{String(i + 1).padStart(2, "0")}</span><div className="edge-icon">{i === 0 ? <Lightbulb /> : i === 1 ? <Settings2 /> : i === 2 ? <Globe2 /> : <BriefcaseBusiness />}</div><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section className="expertise section-pad">
        <div className="section-heading"><p className="eyebrow">SPECIALIZED PROGRAMS</p><h2>Our <span>Domain Expertise</span></h2><p><b>Specialized programs</b> designed to fuel innovation</p></div>
        <div className="expertise-grid">{expertise.map(([Icon, title]) => <article key={title as string}><Icon /><h3>{title}</h3></article>)}</div>
      </section>

      <section className="segments section-pad">
        <div className="section-heading"><p className="eyebrow">BUILT AROUND YOUR NEEDS</p><h2>Tailored <span>Course Segmentation</span></h2><p>Explore <b>custom-fit courses</b> designed to address every professional focus</p></div>
        <div className="segment-grid">{segmentation.map(([number, title, description, tag]) => <article key={title}><div className="segment-image"><span>{number}</span><i>{tag}</i></div><div className="segment-body"><h3>{title}</h3><p>{description}</p><button>Explore <ArrowRight /></button></div></article>)}</div>
      </section>

      <section className="cat section-pad" id="cat"><div className="cat-copy"><p className="eyebrow">WHO SHOULD JOIN?</p><h2>Strategic skill enhancement</h2><p>Programmes that meet people where they are and carry them where your organisation needs to go.</p><div className="cat-people"><span>R</span><span>S</span></div></div><div className="audience-grid">{[[MonitorCheck, "Tech Professionals", "Enhance expertise, embrace tech, drive innovation."], [CircleHelp, "Non-Tech Professionals", "Adapt digitally, collaborate in tech environments."], [GraduationCap, "Emerging Professionals", "Develop powerful skills for rapid career growth."], [BriefcaseBusiness, "Senior Professionals", "Strengthen leadership and enhance strategic decisions."]].map(([Icon, title, text]) => { const ItemIcon = Icon as typeof MonitorCheck; return <div key={title as string}><ItemIcon /><h3>{title}</h3><p>{text}</p></div> })}</div></section>

      <section className="how section-pad" id="how"><div className="section-heading"><p className="eyebrow">THE ACCREDIAN PROCESS</p><h2>How We <span>Deliver Results</span> That Matter?</h2><p>A structured three-step approach to <b>skill development</b></p></div><div className="step-grid">{[[BarChart3, "Skill Gap Analysis", "Assess team skill gaps and developmental needs."], [MonitorCheck, "Customized Training Plan", "Create a tailored roadmap addressing organizational goals."], [PlayCircle, "Flexible Program Delivery", "Deliver adaptable programs aligned with your needs."]].map(([Icon, title, text], i) => { const StepIcon = Icon as typeof BarChart3; return <article key={title as string}><em>{i + 1}</em><span><StepIcon /></span><h3>{title}</h3><p>{text}</p></article> })}</div></section>

      <section className="faq-section section-pad" id="faqs"><div className="faq-tabs"><button className="tab-active">About the Course</button><button>About the Delivery</button><button>Miscellaneous</button></div><div className="faq-list">{faqItems.map(([question, answer], i) => <article key={question}><button onClick={() => setActiveFaq(activeFaq === i ? null : i)}><span>{question}</span><ChevronDown className={activeFaq === i ? "rotate" : ""} /></button>{activeFaq === i && <p>{answer}</p>}</article>)}<button className="primary-btn" onClick={() => jumpTo("contact")}>Enquire Now <ArrowRight /></button></div></section>

      <section className="testimonials section-pad" id="testimonials"><div className="section-heading"><p className="eyebrow">CLIENT STORIES</p><h2>Testimonials from <span>Our Partners</span></h2><p>What <b>our clients</b> are saying</p></div><div className="testimonial-grid"><article><b className="company-mark">ADP</b><blockquote>“We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise.”</blockquote><p>— Enterprise Learning Partner</p></article><article><b className="company-mark bayer">BAYER</b><blockquote>“Accredian&apos;s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded at every step.”</blockquote><p>— People Development Leader</p></article></div></section>

      <section className="contact-panel" id="contact"><MessageCircle /><div><h2>Want to learn more about our training solutions?</h2><p>Get expert guidance for your team’s success.</p></div><button onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>Contact us <ArrowRight /></button></section>
      <section className="contact-form-section"><form id="contact-form" onSubmit={submitForm}><p className="eyebrow">LET’S BUILD WHAT’S NEXT</p><h2>Start a conversation</h2><div><input required name="name" placeholder="Your name" /><input required type="email" name="email" placeholder="Work email" /></div><input required name="company" placeholder="Company name" /><button className="primary-btn" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Request callback"} <ArrowRight /></button>{formMessage && <p className="form-success"><Check /> {formMessage}</p>}</form></section>

      <footer><div className="footer-top"><div><button className="brand" onClick={() => jumpTo("home")}>accredian <small>credentials that matter</small></button><div className="socials" aria-label="Social media"><span>f</span><span>in</span><span>◎</span><span>▶</span></div></div><button className="primary-btn" onClick={() => jumpTo("contact")}>Enquire Now</button></div><div className="footer-bottom"><div><h3>Accredian</h3><a>About</a><a>Blog</a><a>Why Accredian</a></div><div><h3>Contact Us</h3><p>Email us: <b>enterprise@accredian.com</b></p><p>4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</p></div></div><p className="copyright">© 2026 Accredian. All Rights Reserved.</p></footer>
    </main>
  );
}
