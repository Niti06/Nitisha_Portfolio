
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiCplusplus, SiJavascript, SiMysql } from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#award" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Nitisha Gaurh",
  info: "Computer Science Student | Full-Stack Developer | Data Analytics Enthusiast",
};

export const ABOUT = {
  text1:
    "I build responsive web applications and practical software solutions.",
  text2:
    "I'm Nitisha Gaurh, a Computer Science student at Vellore Institute of Technology, Bhopal. My technical skills include C++, Python, JavaScript, SQL, React.js, Node.js, Express.js, MongoDB, and MySQL. I enjoy solving problems, building full-stack applications, designing REST APIs, and creating interactive data visualizations.",
  text3:
    "Through projects such as Tomato, GitDocs, and Personal Finance Tracker, I've explored payment integration, authentication, AI-powered documentation, and data visualization. As a Web Developer at Vyraine, I have worked on responsive web experiences, Supabase integration, secure CRUD operations, and real-time data synchronization. I aim to build reliable, scalable, and user-focused software products.",
};

export const PROJECTS = [
  {
    title: "Tomato — Food Delivery Application",
    subtitle:
      "Built a full-stack food delivery application using MongoDB, Express.js, React, Node.js, and Stripe. Implemented tokenized payments, JWT authentication, rate limiting, 15+ REST API endpoints, and database optimizations.",
    image: image3,
  },
  {
    title: "GitDocs — AI Documentation Generator",
    subtitle:
      "Created an AI-powered documentation generator using Python, Flask, HTML, CSS, and Next.js. Used NLP and Abstract Syntax Tree analysis to extract code insights and generate structured technical documentation and blogs.",
    image: image2,
  },
  {
    title: "Personal Finance Tracker",
    subtitle:
      "Developed a MERN application for income tracking, expense categorization, and budget planning. Implemented JWT authentication, 20+ REST API endpoints, and interactive dashboards using Chart.js and D3.js.",
    image: image1,
  },
];

export const SKILLS = [
  {
    icon: <SiCplusplus className="text-4xl lg:text-6xl text-white" />,
    name: "C++",
    experience: "1+year",
  },
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-yellow-400" />,
    name: "Python",
    experience: "1+year",
  },
  {
    icon: <SiJavascript className="text-4xl lg:text-6xl text-yellow-300" />,
    name: "JavaScript",
    experience: "1+year",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React.js",
    experience: "1+year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-500" />,
    name: "Node.js & Express.js",
    experience: "1+year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1+year",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-500" />,
    name: "SQL",
    experience: "1+year",
  },
  {
    icon: <SiMysql className="text-4xl lg:text-6xl text-blue-400" />,
    name: "MySQL",
    experience: "1+year",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+year",
  },
  {
    icon: <VscGraph className="text-4xl lg:text-6xl text-blue-400" />,
    name: "Chart.js & D3.js",
    experience: "1+year",
  },
  // {
  //   icon: <SiMicrosoftpowerbi className="text-4xl lg:text-6xl text-yellow-400" />,
  //   name: "Power BI",
  //   experience: "Business Intelligence",
  // },
  {
    icon: <SiJavascript className="text-4xl lg:text-6xl text-green-400" />,
    name: "Microsoft Excel",
    experience: "1+year",
  },
];

export const ACHIEVEMENT = {
  title: "VIT Bhopal — Summer of CodeFest",
  award: "Top 5 Finalist",
  description:
    "Placed among the top 5 finalists out of 200+ teams at VIT Bhopal's Summer of CodeFest, delivering a full-stack solution within a 48-hour deadline as part of a collaborative team.",
};

export const TESTIMONIALS = [
  {
    name: "Vyraine",
    title: "Web Developer Experience",
    quote:
      "Developed and deployed a responsive web platform using React.js, JavaScript, HTML5, and CSS3, integrating Supabase and PostgreSQL for secure CRUD operations, structured data management, and real-time synchronization.",
    image: user1,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
