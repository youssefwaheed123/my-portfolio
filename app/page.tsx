import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { education, navItems } from "@/data";
import Projects from "@/components/ui/Projects";
import { StickyScroll } from "@/components/ui/Education";
import ContactForm from "@/components/ui/ContactForm";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <h1
          id="projects"
          className="container text-3xl border-b-2 pb-5 text-purple pt-20"
        >
          Projects
        </h1>
        <Projects />
        <h1
          id="education"
          className="container text-3xl border-b-2 pb-5 text-purple"
        >
          Education
        </h1>
        <StickyScroll content={education} />
        <h1
          id="contact"
          className="mt-20 container text-3xl border-b-2 pb-5 text-purple"
        >
          Contact Me
        </h1>
        <div className="container flex gap-3 p-5 px-8">
          <a href="https://www.linkedin.com/in/youssefwaheed/">
            <CiLinkedin className="w-[35px] h-[35px]" />
          </a>
          <a href="https://www.instagram.com/youssefwahidd/">
            <FaInstagram className="w-[35px] h-[35px]" />
          </a>
          <a href="https://www.facebook.com/youssef.waheed.10">
            <FaFacebookF className="w-[35px] h-[35px]" />
          </a>
          <a href="https://github.com/youssefwaheedd">
            <FaGithub className="w-[35px] h-[35px]" />
          </a>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
