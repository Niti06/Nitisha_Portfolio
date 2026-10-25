
import React from "react";
import "./SkillsMarquee.css";

const topics = [
  "FULL-STACK DEVELOPMENT",
  "PROBLEM SOLVING",
  "DATA VISUALIZATION",
];

const SkillsMarquee = () => {
  return (
    <section
      className="skills-marquee"
      aria-label="Areas of expertise"
    >
      <div className="skills-marquee-track">
        {[0, 1, 2, 3].map((group) => (
          <div
            className="skills-marquee-group"
            key={group}
            aria-hidden={group !== 0}
          >
            {topics.map((topic) => (
              <React.Fragment key={`${group}-${topic}`}>
                <span className="skills-marquee-text">
                  {topic}
                </span>
                <span className="skills-marquee-star">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMarquee;
