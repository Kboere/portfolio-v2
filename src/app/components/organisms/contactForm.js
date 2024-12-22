'use client';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import H2 from "./../atoms/heading/h2";

export default function ContactForm({homeContactData}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  console.log(homeContactData.titel_contact_form);

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
        setStatus('Your message has been sent!');
      } else {
        setStatus('Failed to send the message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <section className="container relative py-16 md:py-24">
      <H2 title={homeContactData.titel_contact_form} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
      </section>
  );
}
