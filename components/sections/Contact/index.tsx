import ContactForm from "@/components/ui/ContactForm";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { contactData } from "./data";
import { Mail, Phone } from "lucide-react";

function ContactSection() {
  // Icon mapping for contact types
  const getContactIcon = (type: "email" | "phone") => {
    switch (type) {
      case "email":
        return <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />;
      case "phone":
        return <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />;
      default:
        return <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="contact-section relative py-6 md:py-8 lg:py-12 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-8 left-8 md:top-16 md:left-16 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-accent/10 transform rotate-6"></div>
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-accent/5 transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateOnScroll direction="up">
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <h2
              id="contact-heading"
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3"
            >
              {contactData.title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              {contactData.subtitle}
            </p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent/60 mx-auto rounded-full shadow-sm"></div>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column - Contact Information */}
          <AnimateOnScroll direction="left">
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              {/* Introduction */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                  Get in Touch
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                  {contactData.description}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">
                  Contact Information
                </h4>
                <div className="space-y-3 md:space-y-4">
                  {contactData.contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 lg:p-5 bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all duration-300 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-accent/20 focus-within:border-accent/30"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-accent to-accent/80 rounded-lg md:rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
                        {getContactIcon(contact.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          {contact.label}
                        </p>
                        <p className="text-sm md:text-base font-semibold text-gray-900 break-words">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column - Contact Form */}
          <AnimateOnScroll direction="right">
            <div className="lg:sticky lg:top-8 mt-6 lg:mt-0">
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
