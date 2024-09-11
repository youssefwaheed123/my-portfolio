import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

import { education, navItems } from "@/data";
import Projects from "@/components/ui/Projects";
import ContactForm from "@/components/ui/ContactForm";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import Navbar from "@/components/ui/FloatingNav";
import Education from "@/components/ui/Experience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Grid />
        <Projects />
        <Education />
        <ContactForm />
      </div>
    </main>
  );
}
