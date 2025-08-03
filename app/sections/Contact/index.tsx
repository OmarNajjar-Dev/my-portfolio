import ContactForm from "@/components/ui/ContactForm";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { contactData } from "./data";
import { Mail, Phone } from "lucide-react";

function ContactSection() {
  // Icon mapping for contact types
  const getContactIcon = (type: "email" | "phone") => {
    switch (type) {
      case "email":
        return <Mail className="w-5 h-5 text-white" />;
      case "phone":
        return <Phone className="w-5 h-5 text-white" />;
      default:
        return <Mail className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="contact-section relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-16 left-16 w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent/10 transform rotate-6"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/5 transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              {contactData.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {contactData.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent/60 mx-auto rounded-full shadow-sm"></div>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column - Contact Information */}
          <AnimateOnScroll direction="left">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Get in Touch
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {contactData.description}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h4>
                <div className="space-y-4">
                  {contactData.contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all duration-300 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-accent/20 focus-within:border-accent/30"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        {getContactIcon(contact.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          {contact.label}
                        </p>
                        <p className="text-base font-semibold text-gray-900 truncate">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-accent/5 via-accent/3 to-accent/8 rounded-3xl p-8 border border-accent/10 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  Why Choose Me?
                </h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                    <span className="leading-relaxed">
                      Fast response time (within 24 hours)
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                    <span className="leading-relaxed">
                      Professional communication
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                    <span className="leading-relaxed">
                      Quality-focused development
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column - Contact Form */}
          <AnimateOnScroll direction="right">
            <div className="lg:sticky lg:top-8">
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
