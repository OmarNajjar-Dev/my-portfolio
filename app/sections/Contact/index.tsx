import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/ui/ContactForm";
import { contactData } from "./data";

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimateOnScroll direction="up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {contactData.title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                {contactData.subtitle}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent/60 mx-auto rounded-full"></div>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Information */}
            <AnimateOnScroll direction="left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    Get in Touch
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {contactData.description}
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h4>
                  {contactData.contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
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
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          {contact.label}
                        </p>
                        <p className="text-base font-semibold text-gray-900">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl p-6 border border-accent/20">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Why Choose Me?
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Fast response time (within 24 hours)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Professional communication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Quality-focused development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right Column - Contact Form */}
            <AnimateOnScroll direction="right">
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
