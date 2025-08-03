"use client";

import { Mail, Loader2 } from "lucide-react";
import FormInput from "@/components/ui/FormInput";
import Toast from "@/components/ui/Toast";
import { contactData } from "@/app/sections/Contact/data";
import { useContactForm } from "@/components/ui/hooks/useContactForm";

export default function ContactForm() {
  const {
    formData,
    errors,
    wordCount,
    isSubmitting,
    maxWords,
    toast,
    handleInputChange,
    handleMessageChange,
    handleSubmit,
    closeToast,
  } = useContactForm();

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm shadow-2xl border border-white/30">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent/5" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/8 rounded-full -translate-y-16 translate-x-16 blur-xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/6 rounded-full translate-y-12 -translate-x-12 blur-xl" />

        {/* Content */}
        <div className="relative z-10 p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl mb-6 shadow-sm">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {contactData.form.title}
            </h3>
            <p className="text-gray-600 text-lg">
              I&apos;ll respond within 24 hours
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <FormInput
              name="name"
              id="name"
              label={contactData.form.fields.name.label}
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
              id="email"
              label={contactData.form.fields.email.label}
              type="email"
              placeholder={contactData.form.fields.email.placeholder}
              required={contactData.form.fields.email.required}
              autoComplete={contactData.form.fields.email.autoComplete}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              error={errors.email}
            />

            {/* Phone Field */}
            <FormInput
              name="phone"
              id="phone"
              label={contactData.form.fields.phone.label}
              type="tel"
              placeholder={contactData.form.fields.phone.placeholder}
              required={contactData.form.fields.phone.required}
              autoComplete={contactData.form.fields.phone.autoComplete}
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              error={errors.phone}
            />

            {/* Message Field */}
            <div className="space-y-3">
              <FormInput
                name="message"
                id="message"
                label={contactData.form.fields.message.label}
                type="textarea"
                placeholder={contactData.form.fields.message.placeholder}
                required={contactData.form.fields.message.required}
                rows={5}
                value={formData.message}
                onChange={handleMessageChange}
                error={errors.message}
              />
              <div className="flex justify-end text-sm">
                <span className="text-gray-500 font-medium">
                  {wordCount}/{maxWords} words
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 shadow-lg ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed shadow-gray-400/30"
                  : "bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent focus:ring-4 focus:ring-accent/30 focus:outline-none transform hover:scale-[1.02] active:scale-[0.98] shadow-accent/30 hover:shadow-xl hover:shadow-accent/20"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  <span className="font-semibold">Sending...</span>
                </div>
              ) : (
                <span className="font-semibold">
                  {contactData.form.submitButton.text}
                </span>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </>
  );
}
