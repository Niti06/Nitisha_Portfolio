
import React from "react";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

const focusAreas = [
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Development",
    description:
      "Building responsive web applications and complete user experiences.",
  },
  {
    icon: <FaCode />,
    title: "Problem Solving",
    description:
      "Solving algorithmic problems using data structures and algorithms.",
  },
  {
    icon: <FaChartLine />,
    title: "Data & Analytics",
    description:
      "Exploring data visualization, SQL, Microsoft Excel, and Power BI.",
  },
  {
    icon: <FaDatabase />,
    title: "Backend & APIs",
    description:
      "Working with databases, REST APIs, and secure CRUD operations.",
  },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const revealProps = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.15 },
    transition: {
      duration: shouldReduceMotion ? 0 : 2.9,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="about"
      className="border-b border-neutral-800 bg-black px-6 py-20 md:py-24"
    >
      <div className="mx-auto w-full md:w-[80vw]">
        {/* Section heading */}
        <motion.div
          {...revealProps()}
          className="mb-12 text-center"
        >
          <h2 className="font-['Cormorant_Garamond'] text-6xl font-medium tracking-tight text-neutral-100 md:text-7xl lg:text-7xl">
            About Me
          </h2>
        </motion.div>

        {/* Headline and introduction */}
        <motion.div
          {...revealProps(0.15)}
          className="mb-14"
        >
          <h3 className="mt-6 max-w-4xl font-['Cormorant_Garamond'] text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl xl:text-6xl">
            I build{" "}
            <span className="text-cyan-400">
              responsive applications
            </span>{" "}
            and practical software solutions.
          </h3>

          <p className="mt-7 max-w-5xl border-l border-neutral-800 pl-5 text-base leading-8 text-neutral-300 md:text-lg">
            I'm Nitisha Gaurh, a Computer Science student at Vellore
            Institute of Technology, Bhopal. My technical skills include
            C++, Python, JavaScript, SQL, React.js, Node.js, Express.js,
            MongoDB, and MySQL. I enjoy solving problems, building
            full-stack applications, designing REST APIs, and creating
            interactive data visualizations.
          </p>
        </motion.div>

        {/* Education section */}
        <motion.div
          {...revealProps(0.2)}
          className="mb-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:p-8"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400">
              <FaGraduationCap />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                Academic Background
              </p>
              <h3 className="mt-1 font-['Cormorant_Garamond'] text-3xl font-medium text-white">
                Education
              </h3>
            </div>
          </div>

          <div className="relative ml-2 space-y-8 border-l border-neutral-700 pl-7">
            {/* Bachelor's Degree */}
            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-cyan-400 bg-black" />

              <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                November 2022 – May 2026
              </p>

              <h4 className="mt-2 font-['Cormorant_Garamond'] text-2xl font-medium text-white">
                Bachelor of Technology (B.Tech)
              </h4>

              <p className="mt-1 text-neutral-300">
                Computer Science and Engineering
              </p>

              <p className="mt-1 text-sm text-neutral-400">
                Vellore Institute of Technology, Bhopal
              </p>

              <span className="mt-3 inline-block rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
                CGPA: 8.5/10
              </span>
            </div>

            {/* Class 12 */}
            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-cyan-400 bg-black" />

              <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                July 2022
              </p>

              <h4 className="mt-2 font-['Cormorant_Garamond'] text-2xl font-medium text-white">
                Class XII — Higher Secondary
              </h4>

              <p className="mt-1 text-neutral-300">
                Shevgaon English Medium Jr. College
              </p>

              <p className="mt-1 text-sm text-neutral-400">
                Maharashtra State Board (MAHA HSC)
              </p>
            </div>

            {/* Class 10 */}
            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-cyan-400 bg-black" />

              <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                July 2020
              </p>

              <h4 className="mt-2 font-['Cormorant_Garamond'] text-2xl font-medium text-white">
                Class X — Secondary School
              </h4>

              <p className="mt-1 text-neutral-300">
                Nirmal Bright Future School
              </p>

              <p className="mt-1 text-sm text-neutral-400">
                Central Board of Secondary Education (CBSE)
              </p>
            </div>
          </div>
        </motion.div>

        {/* My Focus section */}
        <motion.div
          {...revealProps(0.25)}
          className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:p-8"
        >
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              What drives me
            </p>

            <h3 className="mt-2 font-['Cormorant_Garamond'] text-3xl font-medium text-white">
              My Focus
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400">
              I enjoy combining software engineering, analytical
              thinking, and practical problem-solving to build useful
              digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                {...revealProps(index * 0.15)}
                className="group flex gap-4 rounded-xl border border-neutral-800/70 p-5 transition duration-300 hover:border-cyan-400/40 hover:bg-white/[0.02]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black text-lg text-cyan-400">
                  {area.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium text-white">
                      {area.title}
                    </h4>

                    <span className="text-xs text-neutral-600">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
