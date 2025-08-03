"use client";

import { useState, useCallback } from "react";
import {
  ContactFormData,
  FormErrors,
  validateForm,
  countWords,
  sendEmail,
} from "@/lib/emailjs";
import { contactData } from "@/app/sections/Contact/data";

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    isVisible: boolean;
    message: string;
    type: "success" | "error";
  }>({
    isVisible: false,
    message: "",
    type: "success",
  });

  const maxWords = contactData.form.fields.message.maxWords;

  // Handle input changes
  const handleInputChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    []
  );

  // Handle message change with word counting
  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const value = e.target.value;
      const currentWordCount = countWords(value);

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
      const validation = validateForm(formData);

      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }

      setIsSubmitting(true);
      setErrors({});

      try {
        const result = await sendEmail(formData);

        if (result.success) {
          setToast({
            isVisible: true,
            message: result.message,
            type: "success",
          });

          // Reset form on success
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setWordCount(0);
        } else {
          setToast({
            isVisible: true,
            message: result.message,
            type: "error",
          });
        }
      } catch (error) {
        setToast({
          isVisible: true,
          message: "An unexpected error occurred. Please try again.",
          type: "error",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  // Close toast
  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
    setWordCount(0);
  }, []);

  return {
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
    resetForm,
  };
};
