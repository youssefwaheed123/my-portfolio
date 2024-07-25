// components/ContactForm.tsx
"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_yoe6adh",
          "template_npr4opw",
          formRef.current,
          "yYAqLekFoFpHbj1y5"
        )
        .then(
          () => {
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
      <form
        style={{
          background: "rgb(2,0,36)",
          backgroundColor:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,26,55,1) 54%, rgba(22,57,105,1) 100%)",
        }}
        ref={formRef}
        onSubmit={sendEmail}
        className=" p-8 rounded-lg shadow-lg mt-20"
      >
        <div className="text-white text-xl mb-4">Email Me!</div>
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
        <input
          type="submit"
          className="w-full p-3 bg-purple-600 text-white rounded cursor-pointer hover:bg-purple-700"
          value="Send"
        />
      </form>
    </section>
  );
};

export default ContactForm;
