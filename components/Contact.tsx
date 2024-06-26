"use client";
import React, { useState, useRef } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/text-area";
import { cn } from "../utils/cn";
import { BackgroundGradient } from "./ui/background-gradient";
import emailjs from '@emailjs/browser';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-semibold mb-4 text-accent">Let's Connect</h3>
              <p className="text-xl text-white opacity-90 mb-6">
                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/abdullahi-abdirahman-439bb4187/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                  style={{ color: "#6495ED" }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^(04\d{8}|\+614\d{8})$/;
    return phoneRegex.test(phone);
  };

  const validateMessageLength = (message: string) => {
    const wordCount = message.trim().split(/\s+/).length;
    return wordCount <= 150;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (formData.email && !validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (formData.phone && !validatePhoneNumber(formData.phone)) newErrors.phone = "Invalid Australian phone number";
    if (!formData.message) newErrors.message = "Message is required";
    if (formData.message && !validateMessageLength(formData.message)) newErrors.message = "Message must not exceed 150 words";

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== "");

    if (!hasErrors) {
      setIsSubmitting(true);
      emailjs.sendForm('service_l9nv4t9', 'template_c7ni53g', form.current!, 'xtKMvv6BGywb5XbYU')
        .then((result) => {
          console.log('EMAIL SENT SUCCESSFULLY!', result.text);
          setShowSuccessToast(true);
          setTimeout(() => setShowSuccessToast(false), 3000);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
          });
          setErrors({
            name: "",
            email: "",
            phone: "",
            message: ""
          });
        }, (error) => {
          console.log('EMAIL SENDING FAILED...', error.text);
          setShowErrorToast(true);
          setTimeout(() => setShowErrorToast(false), 3000);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <BackgroundGradient containerClassName="max-w-md w-full mx-auto">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Contact Me
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Please fill out the form below to get in touch with me.
        </p>

        <form className="my-8" ref={form} onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="yourname@example.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="text-red-500">{errors.phone}</span>}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
            />
            {errors.message && <span className="text-red-500">{errors.message}</span>}
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-blue-500 to-blue-700 block w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--blue-700)_inset,0px_-1px_0px_0px_var(--blue-700)_inset] transition-all duration-300 flex items-center justify-center"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              "Send Message"
            )}
            <BottomGradient />
          </button>
        </form>
        <div className={`toast toast-center ${showSuccessToast || showErrorToast ? 'visible' : 'hidden'}`}>
          {showSuccessToast && (
            <div className="alert alert-success" style={{ backgroundColor: '#6495ED' }}>
              <span>Message sent successfully.</span>
            </div>
          )}
          {showErrorToast && (
            <div className="alert alert-error" style={{ backgroundColor: '#DC143C' }}>
              <span>An error occurred while submitting the form. Please try again.</span>
            </div>
          )}
        </div>
      </div>
    </BackgroundGradient>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
