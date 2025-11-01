import emailjs from "@emailjs/browser";

// Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

// Configuration
const getConfig = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS environment variables are not configured");
  }

  return { serviceId, templateId, publicKey };
};

// Validation
export const validateForm = (
  data: ContactFormData
): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const countWords = (text: string): number => {
  if (!text.trim()) return 0;
  return text.trim().split(/\s+/).length;
};

// Email sending
export const sendEmail = async (
  formData: ContactFormData
): Promise<EmailResponse> => {
  try {
    const config = getConfig();

    emailjs.init(config.publicKey);

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || "Not provided",
      message: formData.message.trim(),
      to_name: "Portfolio Owner",
    };

    const response = await emailjs.send(
      config.serviceId,
      config.templateId,
      templateParams,
      config.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      };
    } else {
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    return {
      success: false,
      message:
        "An error occurred while sending your message. Please try again later.",
    };
  }
};
