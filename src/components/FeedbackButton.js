import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FeedbackButton = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4dem1pk',
        'template_w9kpy34',
        form.current,
        'HDHCktKual_NzJWW0'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Feedback sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send feedback. Please try again.');
        }
      );
  };

  return (
    <div className="feedback">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default FeedbackButton;
