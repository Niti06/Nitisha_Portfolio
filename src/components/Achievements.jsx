
import React, { useState } from "react";

const achievements = [
  {
    number: "01",
    title: "Competitive Programming",
    highlight: "150+ Problems Solved",
    description:
      "Solved 150+ algorithmic problems on competitive coding platforms, strengthening data structures, algorithms, and analytical problem-solving skills.",
    tag: "Problem Solving",
  },
  {
    number: "02",
    title: "Summer of CodeFest",
    highlight: "Top 5 Finalist",
    description:
      "Placed among the Top 5 finalists out of 200+ teams at VIT Bhopal's Summer of CodeFest, delivering a full-stack solution within a 48-hour deadline as part of a collaborative team.",
    tag: "Hackathon",
  },
  {
    number: "03",
    title: "Technical & Campus Leadership",
    highlight: "Clubs & Community",
    description:
      "Volunteered for the Cloud Computing Club, served as a Core Member of the IoT Club, and contributed to the Insights Club and Marathi Cultural Club's Event Management Team.",
    tag: "Leadership",
  },
];

const certifications = [
  {
    id: "aws",
    title: "AWS Solutions Architect – Associate",
    provider: "Ethnus",
    date: "April 25, 2025",
    certificateId: "6KL6PQ6R",
    period: "January 2025 – April 2025",
    description:
      "Completed the AWS Solutions Architect – Associate Certification Program.",
    detail:
      "Certificate of Completion issued by Ethnus. Certificate ID: 6KL6PQ6R.",
    url: "/certificates/aws-certificate.pdf",
    accent: "border-lime-500",
    icon: "☁",
  },
  {
    id: "mern",
    title: "MERN Full Stack Certification",
    provider: "Ethnus",
    date: "April 25, 2025",
    certificateId: "SD89R4RG",
    period: "January 2025 – April 2025",
    description:
      "Completed the MERN Full Stack Certification Program.",
    detail:
      "Certificate of Completion issued by Ethnus. Certificate ID: SD89R4RG.",
    url: "/certificates/mern-certificate.pdf",
    accent: "border-orange-500",
    icon: "</>",
  },
];

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="award"
      className="border-b border-neutral-900 bg-black py-20 md:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Achievements heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Milestones & Recognition
          </p>

          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Achievements
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">
            Highlights of my problem-solving journey, teamwork, and
            contributions beyond academics.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item) => (
            <article
              key={item.number}
              className="group flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-cyan-400">
                  {item.number}
                </span>

                <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-lg font-medium text-neutral-300">
                {item.title}
              </h3>

              <p className="mt-3 text-2xl font-bold leading-snug text-white transition group-hover:text-cyan-300">
                {item.highlight}
              </p>

              <p className="mt-5 flex-1 text-sm leading-7 text-neutral-400">
                {item.description}
              </p>

              <div className="mt-7 h-1 w-12 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>

        {/* Certifications heading */}
        <div className="mb-12 mt-24 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-6xl">
            Certifications
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-400 md:text-base">
            Professional certification programs completed through Ethnus.
            Explore the details or open the original certificate.
          </p>
        </div>

        {/* Certification cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-6 md:grid-cols-2">
          {certifications.map((certificate) => {
            const isSelected =
              selectedCertificate === certificate.id;

            return (
              <article
                key={certificate.id}
                className={`flex h-full flex-col rounded-2xl border border-neutral-800 border-t-2 ${certificate.accent} bg-neutral-950 p-6 transition duration-300 hover:border-neutral-600`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-xl font-bold text-white">
                    {certificate.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-widest text-cyan-400">
                      {certificate.provider}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold leading-7 text-white">
                      {certificate.title}
                    </h3>

                    <p className="mt-2 text-sm text-neutral-400">
                      {certificate.date}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-neutral-400">
                  {certificate.description}
                </p>

                <div className="mt-5 rounded-xl border border-neutral-800 bg-black/50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-neutral-500">
                      Program duration
                    </span>

                    <span className="text-right text-xs text-neutral-300">
                      {certificate.period}
                    </span>
                  </div>
                </div>

                {/* Expandable certificate details */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedCertificate(
                      isSelected ? null : certificate.id
                    )
                  }
                  aria-expanded={isSelected}
                  className="mt-5 flex w-full items-center justify-between rounded-lg border border-neutral-800 px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-500 hover:text-cyan-300"
                >
                  <span>
                    {isSelected ? "Hide details" : "Certificate details"}
                  </span>

                  <span aria-hidden="true">
                    {isSelected ? "−" : "+"}
                  </span>
                </button>

                {isSelected && (
                  <div className="mt-3 rounded-xl border border-neutral-800 bg-black p-4">
                    <p className="text-sm leading-7 text-neutral-300">
                      {certificate.detail}
                    </p>

                    <p className="mt-3 text-xs text-neutral-500">
                      Certificate ID: {certificate.certificateId}
                    </p>
                  </div>
                )}

                {/* Open original certificate PDF */}
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  View Certificate
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
