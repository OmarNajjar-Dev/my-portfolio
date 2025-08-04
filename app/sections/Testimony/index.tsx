import { testimonials } from "./data";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Image from "next/image";
import { Quote } from "lucide-react";

function TestimonySection() {
  const testimonial = testimonials[0];

  return (
    <section
      id="testimony"
      aria-labelledby="testimony-heading"
      className="testimony-section relative py-4 md:py-6 lg:py-8 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="testimony-background absolute inset-0 opacity-3">
        <div className="absolute top-16 left-16 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#2d3748] transform rotate-6"></div>
        <div className="absolute bottom-20 right-12 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#4a5568] transform -rotate-12"></div>
      </div>

      <div className="testimony-container container mx-auto px-4 max-w-4xl lg:max-w-5xl relative z-10">
        {/* Section Header */}
        <AnimateOnScroll direction="left">
          <header className="testimony-header text-center mb-6 md:mb-8 lg:mb-10">
            <h2
              id="testimony-heading"
              className="testimony-title text-2xl md:text-3xl lg:text-4xl font-bold text-[#2d3748] mb-3"
            >
              Testimony
            </h2>
            <div className="testimony-divider w-12 h-0.5 bg-gradient-to-r from-[#2d3748] to-[#4a5568] mx-auto rounded-full"></div>
          </header>
        </AnimateOnScroll>

        {/* Testimonial Content */}
        <AnimateOnScroll direction="up" delay={200}>
          <article className="testimony-card relative">
            <div className="testimony-content bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Background Quote Icon */}
              <div className="testimony-quote-bg absolute top-6 right-6 md:top-8 md:right-8 text-[#f5f5f5] opacity-15">
                <Quote className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" />
              </div>

              <div className="testimony-inner relative z-10">
                {/* Quote */}
                <blockquote className="testimony-quote mb-8 md:mb-12">
                  <p className="testimony-text text-base md:text-lg lg:text-xl text-[#4a5568] leading-relaxed font-medium">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author Information */}
                <div className="testimony-author flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8">
                  {/* Author Avatar */}
                  <figure className="testimony-avatar flex-shrink-0">
                    <div className="testimony-avatar-wrapper relative">
                      <div className="testimony-avatar-glow absolute -inset-2 bg-gradient-to-r from-[#2d3748] to-[#4a5568] rounded-full blur opacity-10"></div>
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.title}`}
                        width={96}
                        height={96}
                        className="testimony-avatar-image relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-md transition-all duration-300 hover:scale-110"
                        priority
                      />
                    </div>
                  </figure>

                  {/* Author Details */}
                  <div className="testimony-author-info text-center sm:text-left">
                    <cite className="testimony-author-name not-italic">
                      <p className="testimony-author-name-text font-bold text-[#2d3748] text-lg md:text-xl lg:text-2xl mb-1">
                        {testimonial.name}
                      </p>
                      <p className="testimony-author-title text-xs md:text-sm text-[#718096] font-semibold uppercase tracking-wider">
                        {testimonial.title}
                      </p>
                    </cite>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="testimony-decoration-top absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-l-2 md:border-l-4 border-t-2 md:border-t-4 border-[#2d3748] rounded-tl-xl opacity-20"></div>
              <div className="testimony-decoration-bottom absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-r-2 md:border-r-4 border-b-2 md:border-b-4 border-[#4a5568] rounded-br-xl opacity-20"></div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="testimony-glow absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#2d3748] to-[#4a5568] rounded-xl md:rounded-2xl blur opacity-5 -z-10"></div>
          </article>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export default TestimonySection;
