export interface ContactInfo {
  type: "email" | "phone";
  label: string;
  value: string;
}

export interface ContactForm {
  title: string;
  subtitle: string;
  fields: {
    name: {
      label: string;
      placeholder: string;
      type: string;
      required: boolean;
      autoComplete: string;
    };
    email: {
      label: string;
      placeholder: string;
      type: string;
      required: boolean;
      autoComplete: string;
    };
    message: {
      label: string;
      placeholder: string;
      rows: number;
      required: boolean;
      maxWords: number;
    };
  };
  submitButton: {
    text: string;
  };
}

export interface ContactSection {
  title: string;
  subtitle: string;
  description: string;
  contactInfo: ContactInfo[];
  form: ContactForm;
}

export const contactData: ContactSection = {
  title: "Let's Connect",
  subtitle: "Ready to bring your ideas to life?",
  description:
    "Feel free to reach out to me for any inquiries, collaborations, or opportunities. Whether you have a project in mind, need assistance, or just want to connect, I'd be happy to hear from you. Fill out the form and I'll get back to you as soon as possible.",
  contactInfo: [
    {
      type: "email",
      label: "Email",
      value: "najjar_omar@outlook.com",
    },
    {
      type: "phone",
      label: "Phone",
      value: "+961 79 148 987",
    },
  ],
  form: {
    title: "Send Message",
    subtitle: "I'll respond within 24 hours",
    fields: {
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
        type: "text",
        required: true,
        autoComplete: "name",
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email address",
        type: "email",
        required: true,
        autoComplete: "email",
      },
      message: {
        label: "Message",
        placeholder: "Tell me about your project or inquiry...",
        rows: 5,
        required: true,
        maxWords: 300,
      },
    },
    submitButton: {
      text: "Send Message",
    },
  },
} as const;
