'use client';

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';
import { FaEnvelope, FaUser, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactWithFooter() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error('Please fill in all fields.', {
        position: 'top-center',
        style: {
          backgroundColor: 'gray',
          color: '#ffffff',
          fontWeight: 'bold',
          borderRadius: '8px',
        },
      });
      return;
    }

    emailjs
      .sendForm('service_71p7ehw', 'template_occbwgs', form.current!, '2Z0qqashjwnBmgBOb')
      .then(() => {
        toast.success('Message sent successfully!', {
          position: 'top-center',
          style: {
            backgroundColor: 'gray',
            color: '#ffffff',
            fontWeight: 'bold',
            borderRadius: '8px',
          },
        });
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('Failed to send message.', {
          position: 'top-center',
          style: {
            backgroundColor: 'gray',
            color: '#ffffff',
            fontWeight: 'bold',
            borderRadius: '8px',
          },
        });
      });
  };

  return (
    <>
      <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Form Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-700 to-gray-300 text-transparent bg-clip-text">
              Get in Touch
            </h2>
            <p className="mb-8 text-gray-300 text-sm md:text-base">
              Have a project in mind or just want to say hello? Fill out the form and I'll get back to you soon.
            </p>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
              <Textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />

              <Button
                type="submit"
                className="w-full text-lg font-semibold flex items-center justify-center bg-gradient-to-r from-red-700 to-gray-700 hover:from-red-800 hover:to-gray-800 text-white transition-colors duration-300"
              >
                Send Message
                <FaPaperPlane className="ml-2" />
              </Button>
              <p className="text-center text-sm text-gray-400 font-medium">
                Hey there! Feel free to reach out anytime ✨
              </p>
            </form>
          </div>

          {/* Right: Fun Message + Socials */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="text-red-400 font-semibold text-sm">
              Living proof that nerds can be dangerously charming.
            </p>

            <div className="flex space-x-6 mt-4">
              <a
                href="mailto:chhatraneupane999@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition"
              >
                <FaEnvelope className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/chhatraraj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition"
              >
                <FaGithub className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/chhatra-neupane-95476b296"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-black text-white">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Chhatra Neupane. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link 
            href="#" 
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors" 
            prefetch={false}
          >
            Privacy
          </Link>
          <Link 
            href="#" 
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors" 
            prefetch={false}
          >
            Terms of Service
          </Link>
        </nav>
      </footer>
    </>
  );
}
