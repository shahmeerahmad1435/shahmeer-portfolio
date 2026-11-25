import { useEffect, useState } from "react";
import Neural from "./Neural.jsx";
import { flow, jobs, pages, rails, skills, summary, whatsappHref, work } from "./content.js";
import { logos } from "./logos.js";

export default function App() {
  const [view, setView] = useState("field");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (view !== "signal") return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const id = window.setInterval(() => setTick((value) => (value + 1) % flow.length), 1600);
    return () => window.clearInterval(id);
  }, [view]);

  const go = (id) => {
    setView(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="shell dark">
      <Neural active />
      <header className="bar">
        <button className="mark" onClick={() => go("field")} type="button">
          <span>SA</span>
          Shahmeer Ahmad
        </button>
        <nav>
          {pages.map((page) => (
            <button
              key={page.id}
              type="button"
              className={view === page.id ? "nav on" : "nav"}
              onClick={() => go(page.id)}
            >
              {page.label}
            </button>
          ))}
        </nav>
        <a className="pill" href={whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp me
        </a>
      </header>

      <main key={view} className={`stage stage-${view}`}>
        {view === "field" && <Field onWork={() => go("work")} onSignal={() => go("signal")} />}
        {view === "work" && <Work />}
        {view === "signal" && <Signal tick={tick} />}
        {view === "record" && <Record />}
        {view === "contact" && <Contact go={go} />}
      </main>
      <Footer go={go} />
    </div>
  );
}

function Field({ onWork, onSignal }) {
  return (
    <section className="hero">
      <p className="eyebrow">Bahawalpur · Flutter and full-stack · since 2021</p>
      <h1>
        <span>The app,</span>
        <span>the API,</span>
        <span>the payment.</span>
      </h1>
      <p className="lede">{summary}</p>
      <div className="hero-actions">
        <button type="button" className="solid" onClick={onWork}>
          See the work
        </button>
        <button type="button" className="ghost" onClick={onSignal}>
          How payments clear
        </button>
        <a className="ghost linkish" href={whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp me
        </a>
      </div>
      <div className="stacks">
        {skills.map((group) => (
          <section key={group.name} className="stack-block">
            <header>
              <h2>{group.name}</h2>
              <p>{group.line}</p>
            </header>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <Mark name={item.name} slug={item.slug} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <section className="proof">
        <p className="eyebrow">Counted from this site</p>
        <ul>
          <li>
            <strong>{work.length}</strong>
            <span>products written up here, from the resume and the GitHub folder</span>
          </li>
          <li>
            <strong>2021</strong>
            <span>the year client delivery started, and it is still the current job at Entspos</span>
          </li>
          <li>
            <strong>4</strong>
            <span>payment rails shipped: Stripe, PayPal, in-app purchases, and Azericard</span>
          </li>
        </ul>
      </section>
    </section>
  );
}

function Mark({ name, slug }) {
  const path = slug && logos[slug];
  if (!path) {
    return <i className="logo-fallback" aria-hidden="true">{name.slice(0, 2)}</i>;
  }
  return (
    <svg className="logo" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#efe8d8" d={path} />
    </svg>
  );
}

function Work() {
  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="dossier">
      <div className="dossier-head">
        <p className="eyebrow">Products</p>
        <h2>The work, written out.</h2>
        <p className="lede">
          WingsDiet and DietCoach are separate products. Every card below is a product from the
          resume or from the GitHub folder. A button is a real website or store listing.
        </p>
      </div>
      <div className="jumps">
        {work.map((piece) => (
          <button key={piece.id} type="button" onClick={() => jump(piece.id)}>
            {piece.name}
          </button>
        ))}
      </div>
      <div className="catalog">
        {work.map((item) => (
          <article className="case" id={item.id} key={item.id}>
            <p className="case-kicker">{item.kind}</p>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
            <ul className="built">
              {item.built.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="nodes" aria-label="Stack">
              {item.stack.map((name, index) => (
                <span key={name} style={{ animationDelay: `${index * 70}ms` }}>
                  {index > 0 && <i />}
                  {name}
                </span>
              ))}
            </div>
            {item.links.length > 0 && (
              <div className="store-links">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            {item.note && <p className="case-note">{item.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Signal({ tick }) {
  return (
    <section className="signal">
      <p className="eyebrow">Money, on our side of the gateway</p>
      <h2>The card network already exists. The app still has to believe the result.</h2>
      <p className="lede">
        I do not build a bank. I connect a gateway and keep the payment state honest: pending
        until the gateway says paid, credited once, and refunded once.
      </p>
      <div className="rail-row">
        {rails.map((rail) => (
          <article key={rail.name}>
            <strong>{rail.name}</strong>
            <span>{rail.where}</span>
          </article>
        ))}
      </div>
      <ul className="flow">
        {flow.map((step, index) => (
          <li key={step.title} className={index === tick ? "live" : ""}>
            <div>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Record() {
  return (
    <section className="record">
      <p className="eyebrow">Employment</p>
      <h2>Where the work happened.</h2>
      <p className="lede">
        Entspos is the current company. ContactVA is earlier remote delivery, not the current job.
      </p>
      <ul className="timeline">
        {jobs.map((job) => (
          <li key={job.org}>
            <div>
              <strong>{job.org}</strong>
              <em>{job.place}</em>
            </div>
            <div>
              <p className="role">{job.role}</p>
              <p className="when">{job.when}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <p className="note">
        GDSC Lead, 2020–2021. English and Urdu. BSCS, Islamia University of Bahawalpur, 2018–2022.
        I can join immediately, or within seven days.
      </p>
    </section>
  );
}

function Contact({ go }) {
  return (
    <section className="contact-studio">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Tell me the product. I can start immediately.</h2>
        <p className="lede">
          WhatsApp opens the chat if this phone or computer is already signed in. Otherwise it
          opens WhatsApp Web. Email and the phone number are the same person.
        </p>
        <ul className="facts">
          <li>Available now, or within seven days</li>
          <li>Remote, or relocation when the visa is sponsored</li>
          <li>Bahawalpur, Pakistan</li>
          <li>English and Urdu</li>
        </ul>
        <button type="button" className="ghost" onClick={() => go("work")}>
          Read the work first
        </button>
      </div>
      <div className="contact-card">
        <a className="channel" href={whatsappHref} target="_blank" rel="noreferrer">
          <small>WhatsApp</small>
          <strong>Message +92 304 1628668</strong>
        </a>
        <a className="channel" href="mailto:shahmeerofficial786@gmail.com">
          <small>Email</small>
          <strong>shahmeerofficial786@gmail.com</strong>
        </a>
        <a className="channel" href="tel:+923041628668">
          <small>Phone</small>
          <strong>+92 304 1628668</strong>
        </a>
        <a className="channel" href="https://www.linkedin.com/in/shahmeerahmad1435" target="_blank" rel="noreferrer">
          <small>LinkedIn</small>
          <strong>shahmeerahmad1435</strong>
        </a>
        <a className="channel" href="https://github.com/shahmeerahmad1435" target="_blank" rel="noreferrer">
          <small>GitHub</small>
          <strong>github.com/shahmeerahmad1435</strong>
        </a>
        <a className="channel" href="https://github.com/ShahmeerAhmad" target="_blank" rel="noreferrer">
          <small>GitHub</small>
          <strong>github.com/ShahmeerAhmad</strong>
        </a>
      </div>
    </section>
  );
}

function Footer({ go }) {
  return (
    <footer className="foot">
      <div>
        <strong>Shahmeer Ahmad</strong>
        <p>Flutter and full-stack engineer. Entspos, since 2021.</p>
      </div>
      <div className="foot-nav">
        {pages.map((page) => (
          <button key={page.id} type="button" onClick={() => go(page.id)}>
            {page.label}
          </button>
        ))}
      </div>
      <div className="foot-meta">
        <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="mailto:shahmeerofficial786@gmail.com">Email</a>
        <a href="tel:+923041628668">+92 304 1628668</a>
        <span>Bahawalpur, Pakistan</span>
      </div>
    </footer>
  );
}
