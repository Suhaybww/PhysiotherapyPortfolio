// contact.tsx
"use client";
import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./text-area";
import { cn } from "../utils/cn";

export function ContactForm() {
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
      console.log("Form data:", formData);
      // You can handle the form submission here (e.g., sending data to a server)
      alert("Form submitted successfully!");
      // Reset form fields after submission
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
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contact Us
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please fill out the form below to get in touch with me.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
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
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows={4} 
          />
          {errors.message && <span className="text-red-500">{errors.message}</span>}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-blue-500 to-blue-700 block w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--blue-700)_inset,0px_-1px_0px_0px_var(--blue-700)_inset] transition-all duration-300"
          type="submit"
        >
          Send Message
          <BottomGradient />
        </button>
      </form>
    </div>
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
