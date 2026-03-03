import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Make sure your EmailJS keys are still here!
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          setStatus('Message sent successfully!');
          e.target.reset();
      }, (error) => {
          setStatus('Failed to send message.');
      });
  };

  return (
    <div className="bento-card col-span-1 md:col-span-4 row-span-2 justify-center text-center">
      <h2 className="text-slate-50 text-2xl font-bold mb-6">Send a Direct Message</h2>
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 w-full max-w-[600px] mx-auto">
        <input 
          type="text" name="user_name" placeholder="Your Name" required 
          className="w-full p-4 rounded-xl border border-slate-700 bg-slate-900 text-slate-50 font-sans text-base transition-all duration-300 focus:outline-none focus:border-brand"
        />
        <input 
          type="email" name="user_email" placeholder="Your Email" required 
          className="w-full p-4 rounded-xl border border-slate-700 bg-slate-900 text-slate-50 font-sans text-base transition-all duration-300 focus:outline-none focus:border-brand"
        />
        <textarea 
          name="message" placeholder="Your Message" required rows="3"
          className="w-full p-4 rounded-xl border border-slate-700 bg-slate-900 text-slate-50 font-sans text-base transition-all duration-300 focus:outline-none focus:border-brand"
        ></textarea>
        
        <button type="submit" className="p-4 rounded-xl border-none bg-brand text-white font-bold text-base cursor-pointer transition-all duration-300 mt-2 hover:bg-purple-600 hover:-translate-y-[2px]">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 font-medium text-emerald-400 text-center">{status}</p>}
    </div>
  );
};

export default ContactForm;