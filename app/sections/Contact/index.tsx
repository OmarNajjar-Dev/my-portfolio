"use client";

import React, { useState } from "react";
import FormInput from "@/components/ui/FormInput";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { contactData } from "./data";

function ContactSection() {
  const [wordCount, setWordCount] = useState(0);
  const maxWords = contactData.form.fields.message.maxWords;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const words = e.target.value
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Information */}
            <AnimateOnScroll direction="left">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    {contactData.title}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {contactData.subtitle}
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-base">
                  {contactData.description}
                </p>

                {/* Contact Details */}
                <div className="space-y-4 pt-4">
                  {contactData.contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={contact.icon}
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {contact.label}
                        </p>
                        <p className="text-sm text-gray-600">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right Column - Contact Form */}
            <AnimateOnScroll direction="right">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-10">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {contactData.form.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {contactData.form.subtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {contactData.form.fields.name.label}
                      </label>
                      <input
                        type={contactData.form.fields.name.type}
                        id="name"
                        name="name"
                        placeholder={contactData.form.fields.name.placeholder}
                        required={contactData.form.fields.name.required}
                        className="w-full px-4 py-3 border-2 border-accent rounded-lg text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-accent/80 focus:border-accent focus:ring-4 focus:ring-accent/10 focus:outline-none"
                        autoComplete={contactData.form.fields.name.autoComplete}
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {contactData.form.fields.email.label}
                      </label>
                      <input
                        type={contactData.form.fields.email.type}
                        id="email"
                        name="email"
                        placeholder={contactData.form.fields.email.placeholder}
                        required={contactData.form.fields.email.required}
                        className="w-full px-4 py-3 border-2 border-accent rounded-lg text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-accent/80 focus:border-accent focus:ring-4 focus:ring-accent/10 focus:outline-none"
                        autoComplete={
                          contactData.form.fields.email.autoComplete
                        }
                      />
                    </div>

                    {/* Phone Number Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {contactData.form.fields.phone.label}
                      </label>
                      <div className="flex border-2 border-accent rounded-lg transition-all duration-200 hover:border-accent/80 focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10">
                        {/* Country Code Selector */}
                        <div className="flex items-center gap-2 px-3 py-3 border-r border-gray-300 bg-gray-50">
                          <span className="text-sm">
                            {contactData.form.fields.phone.countryFlag}
                          </span>
                          <span className="text-sm font-medium">
                            {contactData.form.fields.phone.countryCode}
                          </span>
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                        {/* Phone Input */}
                        <input
                          type={contactData.form.fields.phone.type}
                          id="phone"
                          name="phone"
                          placeholder={
                            contactData.form.fields.phone.placeholder
                          }
                          required={contactData.form.fields.phone.required}
                          className="flex-1 px-4 py-3 border-none outline-none bg-transparent text-gray-900 placeholder-gray-500"
                          autoComplete={
                            contactData.form.fields.phone.autoComplete
                          }
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {contactData.form.fields.message.label}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder={
                          contactData.form.fields.message.placeholder
                        }
                        rows={contactData.form.fields.message.rows}
                        required={contactData.form.fields.message.required}
                        onChange={handleMessageChange}
                        className="w-full px-4 py-3 border-2 border-accent rounded-lg text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-accent/80 focus:border-accent focus:ring-4 focus:ring-accent/10 focus:outline-none resize-none"
                      />
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Maximum {maxWords} words</span>
                        <span className="font-medium">
                          {wordCount}/{maxWords}
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-accent text-white py-4 px-6 rounded-lg font-semibold text-base transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-4 focus:ring-accent/20 focus:bg-accent/90 active:scale-[0.98]"
                    >
                      {contactData.form.submitButton.text}
                    </button>
                  </form>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
