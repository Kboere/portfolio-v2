"use client";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import H2 from "./../atoms/heading/h2";

export default function ContactForm({ homeContactData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // Initialize EmailJS with public key on component mount
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      if (response.status === 200) {
        setStatus("Your message has been sent!");
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section className="container grid grid-cols-12 relative py-16 md:py-40">
      <H2
        title={homeContactData.titel_contact_form}
        className="col-span-12 md:col-span-6 md:col-start-4 text-center mb-10 capitalize"
      />
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="col-span-12 md:col-span-6 md:col-start-4 flex flex-col items-center"
      >
        <div className="w-full p-6 backdrop-filter backdrop-blur bg-opacity-30 bg-white shadow-md rounded-md grid grid-cols-12 gap-6">
          <div className="mb-4 text-secondary col-span-12 md:col-span-6">
            <label htmlFor="name" className="block text-sm font-light">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="mt-1 block w-full pr-3 py-2 border-b bg-transparent text-secondary border-secondary focus:outline-none focus:ring-secondary focus:border-secondary placeholder:text-secondary placeholder:text-lg"
            />
          </div>
          <div className="mb-4 text-secondary col-span-12 md:col-span-6">
            <label htmlFor="email" className="block text-sm font-light">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="mt-1 block w-full pr-3 py-2 border-b bg-transparent text-secondary border-secondary focus:outline-none focus:ring-secondary focus:border-secondary placeholder:text-secondary placeholder:text-lg"
            />
          </div>
          <div className="mb-4 text-secondary col-span-12">
            <label htmlFor="message" className="block text-sm font-light">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi, I think I have a project for Company X. How soon can you hop on to discuss this?"
              required
              className="mt-1 block h-20 w-full pr-3 py-2 border-b bg-transparent text-secondary border-secondary focus:outline-none focus:ring-secondary focus:border-secondary placeholder:text-secondary placeholder:text-lg overflow-y-auto resize-none"
            ></textarea>
          </div>
        </div>
        <button className="btn btn-solid mt-10" type="submit">
          Send
        </button>
      </form>

      {status && <p>{status}</p>}
    </section>
  );
}
