"use client";

import React, { useState, useCallback } from "react";
import FormInput from "@/components/ui/FormInput";
import { contactData } from "@/app/sections/Contact/data";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Email regex for validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const maxWords = contactData.form.fields.message.maxWords;

  // Validate email format
  const validateEmail = useCallback((email: string): boolean => {
    return EMAIL_REGEX.test(email);
  }, []);

  // Handle input changes
  const handleInputChange = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    []
  );

  // Handle message change with word counting
  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const value = e.target.value;
      const words = value
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
      const currentWordCount = words.length;

      // Only allow input if within word limit
      if (
        currentWordCount <= maxWords ||
        value.length < formData.message.length
      ) {
        setFormData((prev) => ({ ...prev, message: value }));
        setWordCount(currentWordCount);
        setErrors((prev) => ({ ...prev, message: undefined }));
      }
    },
    [maxWords, formData.message.length]
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Validate form
      const newErrors: FormErrors = {};

      // Name validation
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }

      // Email validation
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }

      // Message validation
      if (!formData.message.trim()) {
        newErrors.message = "Message is required";
      } else if (wordCount > maxWords) {
        newErrors.message = `Message cannot exceed ${maxWords} words`;
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
        return;
      }

      setIsSubmitting(true);

      try {
        // Here you would typically send the form data to your backend
        console.log("Form submitted:", formData);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setWordCount(0);
        setErrors({});

        // You could show a success message here
        alert("Message sent successfully!");
      } catch (error) {
        console.error("Form submission error:", error);
        setErrors({ message: "Failed to send message. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, wordCount, maxWords, validateEmail]
  );

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-accent/10 rounded-full translate-y-12 -translate-x-12"></div>

      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {contactData.form.title}
          </h3>
          <p className="text-gray-600 text-sm font-medium">
            {contactData.form.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <FormInput
            name="name"
            label={contactData.form.fields.name.label}
            id="name"
            type="text"
            placeholder={contactData.form.fields.name.placeholder}
            required={contactData.form.fields.name.required}
            autoComplete={contactData.form.fields.name.autoComplete}
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            error={errors.name}
          />

          {/* Email Field */}
          <FormInput
            name="email"
            label={contactData.form.fields.email.label}
            id="email"
            type="email"
            placeholder={contactData.form.fields.email.placeholder}
            required={contactData.form.fields.email.required}
            autoComplete={contactData.form.fields.email.autoComplete}
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            error={errors.email}
          />

          {/* Phone Number Field */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              {contactData.form.fields.phone.label}
              {contactData.form.fields.phone.required && (
                <span className="text-red-500 ml-1">*</span>
              )}
            </label>
            <div
              className={`flex border-2 rounded-xl transition-all duration-200 ${
                errors.phone
                  ? "border-red-500 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-500/10"
                  : "border-gray-200 hover:border-accent/50 focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10"
              }`}
            >
              {/* Country Code Selector */}
              <div className="flex items-center gap-2 px-4 py-3 border-r border-gray-200 bg-gray-50 rounded-l-lg">
                <span className="text-sm">
                  {contactData.form.fields.phone.countryFlag}
                </span>
                <span className="text-sm font-medium text-gray-700">
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
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder={contactData.form.fields.phone.placeholder}
                required={contactData.form.fields.phone.required}
                className="flex-1 px-4 py-3 border-none outline-none bg-transparent text-gray-900 placeholder-gray-500 rounded-r-lg"
                autoComplete={contactData.form.fields.phone.autoComplete}
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <FormInput
              name="message"
              label={contactData.form.fields.message.label}
              id="message"
              type="textarea"
              placeholder={contactData.form.fields.message.placeholder}
              required={contactData.form.fields.message.required}
              onChange={handleMessageChange}
              rows={contactData.form.fields.message.rows}
              value={formData.message}
              error={errors.message}
            />
            <div className="flex justify-between items-center text-xs text-gray-500 px-1">
              <span>Maximum {maxWords} words</span>
              <span
                className={`font-medium ${
                  wordCount > maxWords ? "text-red-500" : ""
                }`}
              >
                {wordCount}/{maxWords}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-accent to-accent/90 text-white py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 focus:outline-none focus:ring-4 focus:ring-accent/20 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              contactData.form.submitButton.text
            )}
          </button>
        </form>

        {/* Footer Note */}
        <div className="text-center pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Your information is secure and will only be used to respond to your
            inquiry.
          </p>
        </div>
      </div>
    </div>
  );
}
