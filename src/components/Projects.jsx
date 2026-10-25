
import React from "react";
import { PROJECTS } from "../constants";
import { motion, useReducedMotion } from "framer-motion";

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="border-b border-neutral-800 pb-20 pt-10"
    >
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 2.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 mt-10 text-center font-['Cormorant_Garamond'] text-5xl font-medium tracking-tight text-neutral-100 md:text-6xl"
        >
          Selected Projects
        </motion.h2>

        {/* Project cards */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 2.9,
                delay: shouldReduceMotion ? 0 : index * 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex h-full flex-col overflow-hidden rounded-sm border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a44d]/60"
            >
              {/* Project image */}
              <div className="h-56 w-full shrink-0 overflow-hidden bg-neutral-900 sm:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Project content */}
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#c5a44d]" />

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#c5a44d]">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-4 min-h-[3.5rem] font-['Cormorant_Garamond'] text-3xl font-medium leading-tight text-neutral-100 transition-colors duration-300 group-hover:text-[#d8c28a]">
                  {project.title}
                </h3>

                <p className="flex-1 text-sm leading-7 text-neutral-400">
                  {project.subtitle}
                </p>

                <div className="mt-7 border-t border-neutral-800 pt-4">
                  <span className="text-xs uppercase tracking-[0.16em] text-neutral-500">
                    Featured Work
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
