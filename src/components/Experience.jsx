
import React from "react";
import {
  FaBriefcase,
  FaArrowUpRightFromSquare,
  FaCode,
} from "react-icons/fa6";

const technologies = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Supabase",
  "PostgreSQL",
];

const responsibilities = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Developed and deployed a responsive web platform using React.js, JavaScript, HTML5, and CSS3.",
  },
  {
    number: "02",
    title: "Database Integration",
    description:
      "Integrated Supabase and PostgreSQL for structured data storage, secure CRUD operations, real-time synchronization, and efficient backend data management.",
  },
  {
    number: "03",
    title: "Performance & Optimization",
    description:
      "Built data-fetching workflows, managed application state, and optimized database interactions to improve application performance, scalability, and user experience.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-b border-neutral-900 bg-black px-6 py-20 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mb-14 text-center">

          <h2 className="text-3xl font-semibold text-white md:text-6xl">
            Work Experience
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-400 md:text-base">
            Applying technical skills to build responsive, reliable,
            and user-focused digital experiences.
          </p>
        </div>

        {/* Experience card */}
        <article className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 transition duration-300 hover:border-cyan-400/40">
          {/* Subtle decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-3xl"
          />

          <div className="relative p-6 md:p-10">
            {/* Company header */}
            <div className="flex flex-col gap-6 border-b border-neutral-800 pb-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-400 transition group-hover:border-cyan-400/50">
                  <FaBriefcase />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                    Web Development
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
                    Vyraine
                  </h3>

                  <p className="mt-1 text-base text-neutral-300">
                    Web Developer
                  </p>
                </div>
              </div>

              <span className="w-fit rounded-full border border-neutral-700 bg-black/50 px-4 py-2 text-xs font-medium text-neutral-300">
                Professional Experience
              </span>
            </div>

            {/* Responsibilities */}
            <div className="py-8">
              <div className="mb-6 flex items-center gap-3">
                <FaCode className="text-cyan-400" />
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-300">
                  Key Contributions
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {responsibilities.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-xl border border-neutral-800 bg-black/40 p-5 transition duration-300 hover:border-cyan-400/30"
                  >
                    <span className="text-xs font-semibold tracking-widest text-cyan-400">
                      {item.number}
                    </span>

                    <h5 className="mt-4 text-base font-semibold text-white">
                      {item.title}
                    </h5>

                    <p className="mt-3 text-sm leading-7 text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology stack */}
            <div className="border-t border-neutral-800 pt-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Technologies & Tools
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-neutral-800 bg-black px-3 py-2 text-sm text-neutral-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-60 transition group-hover:opacity-100" />
        </article>
      </div>
    </section>
  );
};

export default Experience;
