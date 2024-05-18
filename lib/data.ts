import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import emart from "@/public/emart.png";
import forkify from "@/public/forkify.png";
import secureDataSharing from "@/public/secureDataSharing.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated From St. Thomas' College of Engineering & Technology",
    location: "Kolkata, India",
    description:
      "I completed my B.Tech from St. Thomas' College of Engineering & Technology in Information Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
   {
    title: "Senior Executive",
    location: "Pune, India",
    description:
      "I'm a Full Stack Developer at Vodafone Intelligent Solutions (_VOIS). My stack includes React, JavaScript, Express, NodeJS, Azure DevOps, WebdriverIO, Mocha, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;


// export const experiencesData = [
//   {
//     title: "Senior Executive",
//     location: "Pune, India",
//     description:
//       "I'm a Full Stack Developer at Vodafone Intelligent Solutions (_VOIS). My stack includes React, JavaScript, Express, NodeJS, Azure DevOps, WebdriverIO, Mocha, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2022 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Emart",
    description:
      "A responsive e-commerce website built with HTML, CSS, and JavaScript. Featuring a user-friendly interface, product showcase, and shopping cart functionality.",
    tags: ["React JS", "Tailwind CSS", "MongoDB", "Express", "Node JS"],
    imageUrl: emart,
  },
  {
    title: "Forkify",
    description:
      "A user-interactive website that contains over 10000+ recipes. It has features like filtering, sorting and Bookmarks.",
    tags: ["React JS", "Firebase", "Tailwind CSS", "LocalStorage"],
    imageUrl: forkify,
  },
  {
    title: "Secure Data Sharing",
    description:
      "Created a chat application prototype with end-to-end encryption. It has a group chat system functionality where admin controls and message moderation.",
    tags: ["React JS", "Firebase", "Tailwind CSS", "ExpressJS", 'MongoDB'],
    imageUrl: secureDataSharing,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "WebdriverIO",
  "Mocha",
  "Appium",
  "Selenium",
  "MongoDB",
  "Express",
  "Framer Motion",
  "Azure",
  "AWS",
] as const;