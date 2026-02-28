import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Paste your 3 EmailJS keys right here!
    emailjs.sendForm(
      'service_4mbvl0f', 
      'template_xbiyl9i', 
      form.current, 
      'FJIYvz_Li5XzP8MHL'
    )
      .then((result) => {
          setStatus('Message sent successfully!');
          e.target.reset();
      }, (error) => {
          setStatus('Failed to send message.');
          console.log(error.text);
      });
  };

  return (
    <div className="bento-card contact-form-card">
      <h2 style={{ color: '#f8fafc', marginBottom: '1.5rem' }}>Send a Direct Message</h2>
      
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required rows="3"></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </div>
  );
};

export default ContactForm;