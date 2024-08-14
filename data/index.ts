import {
  FaPython,
  FaJava,
  FaCuttlefish,
  FaHtml5,
  FaNode,
  FaReact,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
  FaHome,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiInternetcomputer, SiMiro, SiCanva, SiExpress } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import React from "react";

interface NavItem {
  name: string;
  link: string;
  icon?: string;
}

export const navItems: NavItem[] = [
  { name: "About", link: "#about", icon: "FaHome" },
  { name: "Projects", link: "#projects", icon: "FaTasks" },
  { name: "Education", link: "#education", icon: "FaGraduationCap" },
  { name: "Contact", link: "#contact", icon: "FaEnvelope" },
];

interface Skill {
  id: number;
  icon?: IconType;
  skill: string;
}

export const webSkills: Skill[] = [
  { id: 1, icon: IoLogoJavascript, skill: "JavaScript" },
  { id: 2, icon: FaHtml5, skill: "HTML" },
  { id: 3, icon: FaCss3Alt, skill: "CSS" },
  { id: 4, icon: FaBootstrap, skill: "Bootstrap" },
  { id: 5, icon: FaReact, skill: "React Js" },
  { id: 6, icon: RiNextjsLine, skill: "Next Js" },
  { id: 7, icon: RiTailwindCssFill, skill: "Tailwind" },
  { id: 8, icon: FaNode, skill: "Node Js" },
  { id: 9, icon: SiExpress, skill: "Express Js" },
  { id: 10, icon: GrMysql, skill: "MySQL" },
  { id: 11, icon: BiLogoPostgresql, skill: "PostgreSQL" },
  { id: 12, icon: SiInternetcomputer, skill: "Internet Computer" },
  { id: 13, skill: "Motoko" },
];

export const programmingSkills: Skill[] = [
  { id: 1, icon: FaCuttlefish, skill: "" },
  { id: 2, icon: FaJava, skill: "Java" },
  { id: 3, icon: FaPython, skill: "Python" },
];

export const otherSkills: Skill[] = [
  { id: 1, icon: VscVscode, skill: "VS Code" },
  { id: 3, icon: FaGithub, skill: "GitHub" },
  { id: 4, icon: FaGitAlt, skill: "Git" },
  { id: 5, icon: SiMiro, skill: "Miro" },
  { id: 5, icon: SiCanva, skill: "Canva" },
];

export const gridItems = [
  {
    id: 1,
    title: "My Technical Stack",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Do you want to start a project together?",
    description: "",
    className: " lg:col-span-2 md:col-span-3 md:row-span-1 ",
    imgClassName: "",
    titleClassName:
      "justify-center md:max-w-full max-w-60 text-center text-purple",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Currently learning Blockchain and building my own Crypto Token",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
];

export const tabs = [
  {
    title: "All",
    value: "All",
  },
  {
    title: "Web Projects",
    value: "Web Projects",
  },
  {
    title: "Mobile Projects",
    value: "Mobile Projects",
  },
  {
    title: "Java Projects",
    value: "Java Projects",
  },
];

interface Project {
  id: number;
  iconLists?: string[];
  title: string;
  content: string;
  img: string;
  link?: string;
  liveLink?: string;
  videoLink?: string;
}

export const javaProjects: Project[] = [
  {
    id: 1,
    title: "Circus Of Plates",
    content:
      "A single player-game in which the clown tries to catch falling blocks, his score increases when he catches 3 consecutive blocks of the same color.",
    img: "./circusOfPlates.png",
    link: "https://github.com/youssefwaheedd/circus-of-plates.git",
    iconLists: ["FaJava"],
  },
  {
    id: 2,
    title: "Mini-paint Application",
    content:
      "A Java application to create, edit, and delete shapes.",
    img: "./miniPaint.png",
    link: "https://github.com/youssefwaheeds/miniPaint",
    iconLists: ["FaJava"],
  },
];

export const webProjects: Project[] = [
  {
    id: 1,
    title: "Simon Game",
    content:
      "Test your memory skills with this interactive Simon game implemented using vanilla JavaScript.",
    img: "/SimonGame.png",
    iconLists: ["FaHtml5", "FaCss3Alt"],
    link: "https://github.com/adrianhajdin?tab=repositories",
    liveLink: "https://youssefwaheedd.github.io/simon-game/",
  },
  {
    id: 2,
    title: "Gym Web App",
    content:
      "A comprehensive gym web application implemented using React.",
    img: "/GymWebApp.png",
    iconLists: ["FaReact", "IoLogoJavascript"],
    link: "https://github.com/youssefwaheedd/gym-app",
    liveLink: "https://milogym.vercel.app/",
  },
  {
    id: 3,
    title: "Circus Of Plates",
    content:
      "A single player-game implemented using React in which the clown tries to catch falling blocks, his score increases when he catches 3 consecutive blocks of the same color.",
    img: "/CircusOfPlatesWebGame.png",
    iconLists: ["FaReact", "IoLogoJavascript"],
    link: "https://github.com/youssefwaheedd/circus-of-plates-web-game",
    liveLink: "https://circus-of-plates-web-game.vercel.app/",
  },
  {
    id: 4,
    title: "PromptHub",
    content:
      "The ultimate hub for creative inspiration and innovative prompts across various fields",
    img: "/prompthub.png",
    iconLists: ["FaReact", "RiNextjsLine", "IoLogoJavascript"],
    link: "https://github.com/youssefwaheedd/prompt-hub",
    liveLink: "https://prompt-hub.netlify.app/",
  },
];

export const mobileProjects: Project[] = [
  {
    id: 1,
    title: 'Aora App',
    content: 'The ultimate hub to upload and share your AI-generated videos with the world',
    img: '/aora.png',
    link: 'https://github.com/youssefwaheedd/aora-app'
  },
];

interface Education {
  title: string;
  description: string;
  content: string;
}

export const education: Education[] = [
  {
    title: "High School",
    description: "My high school journey at Riada Language School was a transformative experience that nurtured intellectual curiosity and personal growth. The school's rigorous academic environment and holistic approach fostered critical thinking, creativity, and global awareness. This journey shaped my vision for the future, instilling a deep appreciation for learning and a sense of purpose.",
    content: '<Image src="/RiadaSchool.png" className="h-[30px] w-[30px]" />',
  },
  {
    title: "",
    description: "Currently in my final year at the Faculty of Engineering, Alexandria University, my academic journey has been both challenging and enriching. With a current GPA of 3.6, I have delved into a rigorous curriculum that has sharpened my technical skills and problem-solving abilities. This experience has not only deepened my knowledge in engineering but also fostered a sense of innovation and resilience. As I approach graduation, I am inspired by the possibilities that lie ahead and motivated to apply my learning to real-world challenges.",
    content: '<Image className="float-right" src="/FacultyOfEngineering.png" />',
  },
  {
    title: "Expected Graduation 2025",
    description: "Upon graduating from the Faculty of Engineering at Alexandria University, I am eager to embark on a professional journey that allows me to apply my academic knowledge and technical skills in a dynamic work environment. My primary goal is to secure a position at a forward-thinking organization where I can contribute to impactful projects and continue to grow both personally and professionally. I am committed to lifelong learning and look forward to embracing new challenges that will enhance my expertise and drive innovation. Through continuous improvement and dedication, I aim to make meaningful contributions to the engineering field and advance my career.",
    content: '<Image src="/Graduation.png" />',
  },
];


