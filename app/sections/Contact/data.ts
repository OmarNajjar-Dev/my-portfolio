export interface ContactInfo {
  type: "email" | "phone";
  label: string;
  value: string;
  icon: string;
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
    phone: {
      label: string;
      placeholder: string;
      type: string;
      required: boolean;
      autoComplete: string;
      countryCode: string;
      countryFlag: string;
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
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      type: "phone",
      label: "Phone",
      value: "+961 79 148 987",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
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
      phone: {
        label: "Phone Number",
        placeholder: "71 123 456",
        type: "tel",
        required: false,
        autoComplete: "tel",
        countryCode: "+961",
        countryFlag: "🇱🇧",
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
