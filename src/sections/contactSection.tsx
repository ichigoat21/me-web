import { useRef, useState } from "react";
import { InputComponent } from "../components/Input";
import { TextComponent } from "../components/textarea";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

interface StatusMessage {
  type: 'success' | 'error' | '';
  message: string;
}

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<StatusMessage>({ type: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    if (!form.current) {
      setStatus({ 
        type: 'error', 
        message: 'Form reference not found.' 
      });
      setIsLoading(false);
      return;
    }

    try {
      console.log('Sending email with form data:', {
        service: 'service_81k5j2d',
        template: 'template_07cvtkx',
        formData: new FormData(form.current)
      });

      const result = await emailjs.sendForm(
        'service_81k5j2d',     
        'template_07cvtkx',     
        form.current,
        'ckxzk4EZ2bgHxC1DU'       
      );

      console.log('Email sent successfully:', result);
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      
      form.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({ 
        type: 'error', 
        message: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}` 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
        <p className="mb-8 text-gray-300">Got a project in mind? Drop me a message and let's create something amazing.</p>

        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <InputComponent
            ref={nameRef}
            name="user_name"
            type="text"
            placeholder="Your Name"
            required
          />
          
          <InputComponent
            name="user_email"
            type="email"
            placeholder="Your Email"
            required
          />
          
          <TextComponent
            ref={messageRef}
            name="message"
            placeholder="Your Message"
            required
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>

          {status.message && (
            <div className={`mt-4 p-4 rounded-lg text-center ${
              status.type === 'success' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}>
              {status.message}
            </div>
          )}
        </form>
      </motion.div>
    </section>
  );
}