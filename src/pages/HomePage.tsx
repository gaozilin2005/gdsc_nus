import React, { useRef, useState } from "react";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white text-slate-900 selection:bg-indigo-500/40">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Community />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-slate-100 border-b border-slate-200">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="inline-flex items-center gap-2">
          <GdscDots />
          <span className="font-bold text-slate-900">GDSC NUS</span>
        </a>
        <div className="hidden gap-6 text-sm text-slate-700 md:flex">
          <a className="hover:text-slate-900" href="#about">
            About
          </a>
          <a className="hover:text-slate-900" href="#community">
            Events
          </a>
          <a className="hover:text-slate-900" href="#events">
            Meet The Team
          </a>
          <a className="hover:text-slate-900" href="#projects">
            Projects
          </a>
        </div>
        <a
          href="#join"
          className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-600"
        >
          Join Upcoming Events
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        {/* Left side - Text content */}
        <div>
          <h1 className="text-5xl tracking-tight md:text-7xl lg:text-5xl">
            <span className="bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-400 bg-clip-text text-transparent">
              Build. Learn. Connect
            </span>
          </h1>
          <p className="mt-4 text-sm text-slate-600 max-w-lg leading-relaxed md:text-base">
            Welcome to the Google Developer Student Club at the National
            University of Singapore. Join us to learn, build, and grow with a
            passionate community of developers.
          </p>
          <div className="mt-6">
            <a
              href="#events"
              className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Join Upcoming Events
            </a>
          </div>
        </div>

        {/* Right side - Team photo */}
        <div className="flex justify-center md:justify-end">
          <div className="overflow-hidden rounded-3xl w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="GDSC NUS Team"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
        About Us
      </h2>

      <div className="grid gap-6 md:grid-cols-2 mb-16">
        {/* Our Mission */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To cultivate empathetic & passionate learners of technology
                while equipping them with relevant skills and industry insights.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We strive for the betterment of society through technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Left side text + Right side FAQ */}
      <div className="grid gap-8 md:grid-cols-[1fr_1.8fr] items-start">
        {/* Left side */}
        <div>
          <h3
            className="text-4xl text-slate-900 mb-3 tracking-tight"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
            }}
          >
            Developer Student Club
          </h3>
          <div className="w-96 h-1.5 bg-slate-900 mb-6"></div>
          <p
            className="text-2xl text-slate-900 tracking-[0.15em]"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
            }}
          >
            #TECHFORGOOD
          </p>
        </div>

        {/* Right side - FAQ */}
        <FAQ />
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "What is DSC?",
      a: "A student community supported by Google Developers to grow peer-to-peer learning and build real projects.",
      color: "bg-amber-400 hover:bg-amber-500",
    },
    {
      q: "How is DSC different?",
      a: "We emphasise hands-on learning through workshops, hacknights and open-source projects with impact.",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      q: "How did we start?",
      a: "We began as a small group of builders that wanted a welcoming space to learn modern dev tools together.",
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <div className="space-y-4">
      {items.map((it, i) => (
        <Accordion key={i} title={it.q} color={it.color}>
          <p className="text-slate-700 text-sm leading-relaxed">{it.a}</p>
        </Accordion>
      ))}
    </div>
  );
}

function Accordion({
  title,
  children,
  color,
}: {
  title: string;
  children: React.ReactNode;
  color: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between ${color} px-6 py-4 text-left text-white transition-colors`}
        aria-expanded={open}
      >
        <span className="font-bold text-base">{title}</span>
        <span
          className={`text-2xl font-light transition-transform ${
            open ? "rotate-90" : ""
          }`}
        >
          ›
        </span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
            ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white px-6 py-5 border-x border-b border-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
}

function Community() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // 3 placeholders
  const items = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const scrollByOne = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]");
    const step = card ? card.clientWidth + 24 /* gap-6 */ : el.clientWidth / 3;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section id="community" className="relative mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
        Our Community In Action
      </h2>

      <div className="relative mt-8">
        {/* arrows */}
        <button
          aria-label="Previous"
          onClick={() => scrollByOne("left")}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur hover:bg-white"
        >
          ←
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollByOne("right")}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur hover:bg-white"
        >
          →
        </button>

        {/* scroller */}
        <div
          ref={scrollerRef}
          className="
              scroll-smooth overflow-x-auto px-12
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
        >
          <div
            className="
                grid grid-flow-col gap-6 snap-x snap-mandatory
                auto-cols-[85%]                           /* mobile: 1 card-ish */
                md:[grid-auto-columns:calc((100%-24px*2)/3)] /* md+: exactly 3 visible (gap-6 = 24px) */
              "
          >
            {items.map((it) => (
              <div
                key={it.id}
                data-card
                className="snap-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
              >
                <img
                  src={it.src}
                  alt="Community"
                  className="h-64 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Events() {
  const upcoming = [
    {
      title: "Intro to React + TypeScript",
      date: "Nov 12, 2025",
      where: "COM2 LT",
      tag: "Workshop",
    },
    {
      title: "Hacknight: #TechForGood",
      date: "Nov 19, 2025",
      where: "The Hangar",
      tag: "Hacknight",
    },
    {
      title: "Cloud Study Jam (GCP)",
      date: "Nov 26, 2025",
      where: "Online",
      tag: "Study Jam",
    },
  ];
  return (
    <section id="events" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold">Upcoming Events</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {upcoming.map((e, i) => (
          <article
            key={i}
            className="grid gap-2 rounded-2xl border border-slate-200 bg-slate-900 p-5"
          >
            <span className="text-xs font-bold tracking-wide text-indigo-300">
              {e.tag}
            </span>
            <h3 className="text-lg font-semibold">{e.title}</h3>
            <p className="text-slate-300">
              {e.date} • {e.where}
            </p>
            <a
              href="#join"
              className="mt-1 inline-flex w-fit items-center rounded-full bg-emerald-300 px-4 py-2 font-semibold text-slate-900 hover:bg-emerald-200"
            >
              Register
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-slate-200 px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3">
          <GdscDots />
          <div>
            <div className="font-semibold">GDSC NUS</div>
            <div className="text-xs text-slate-500">#TECHFORGOOD</div>
          </div>
        </div>
        <small className="text-slate-400">
          © {new Date().getFullYear()} GDSC NUS • Built with React + Vite
        </small>
      </div>
    </footer>
  );
}

function GdscDots() {
  const Dot = ({ c }: { c: string }) => (
    <span
      className="inline-block h-2.5 w-2.5 rounded-sm"
      style={{ background: c }}
    />
  );
  return (
    <span className="inline-flex items-center gap-1.5">
      <Dot c="#34a853" />
      <Dot c="#4285f4" />
      <Dot c="#fbbc05" />
      <Dot c="#ea4335" />
    </span>
  );
}
