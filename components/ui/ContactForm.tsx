// components/ContactForm.tsx
"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { Button } from "./button";

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      setIsSubmitting(true);
      emailjs
        .sendForm(
          "service_yoe6adh",
          "template_npr4opw",
          formRef.current,
          "yYAqLekFoFpHbj1y5"
        )
        .then(
          () => {
            formRef.current?.reset();
            setIsSubmitting(false);
            alert("Your message has been sent successfully!");
          },
          (error) => {
            console.error("Failed to send the message:", error);
            alert("Failed to send the message. Please try again later.");
          }
        );
    }
  };

  return (
    <section id="contact" className="container mx-auto p-6">
      <h1
        id="contact"
        className="container text-3xl border-b-2 pb-5 text-purple"
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
      <form
        style={{
          background: "rgb(2,0,36)",
          backgroundColor:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,26,55,1) 54%, rgba(22,57,105,1) 100%)",
        }}
        ref={formRef}
        onSubmit={sendEmail}
        className="px-8 rounded-lg shadow-lg mt-20"
      >
        <input
          placeholder="Your email"
          name="from_name"
          className="w-full p-3 mb-4 border border-gray-400 rounded"
          required
        />
        <input
          placeholder="Subject"
          name="subject"
          className="w-full p-3 mb-4 border border-gray-400 rounded"
          required
        />
        <textarea
          placeholder="Message"
          name="message"
          rows={4}
          className="w-full p-3 mb-4 border border-gray-400 rounded"
          required
        ></textarea>
        <Button
          type="submit"
          className="w-full p-3 text-black rounded cursor-pointer hover:bg-purple-700"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
