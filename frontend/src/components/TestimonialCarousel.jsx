import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "SmartIT transformed our entire IT infrastructure. Their team handled the migration to cloud seamlessly, and our downtime dropped by 40%. Exceptional service!",
    name: "Ahmed Al Rashid",
    title: "Operations Director",
    company: "Gulf Logistics Group, Dubai",
  },
  {
    quote: "We needed a reliable CCTV and access control setup across 3 branches. SmartIT delivered a SIRA-compliant solution on time and within budget. Highly recommended.",
    name: "Fatima Hassan",
    title: "Facilities Manager",
    company: "Al Noor Medical Center, Abu Dhabi",
  },
  {
    quote: "Their managed IT support is outstanding. Response times under 20 minutes, and the proactive monitoring has prevented countless issues before they impact our operations.",
    name: "Rajesh Sharma",
    title: "IT Manager",
    company: "Emirates Trading LLC, Sharjah",
  },
  {
    quote: "SmartIT built us a stunning e-commerce website with Arabic/English support and local payment integration. Our online sales increased 65% in 3 months.",
    name: "Sara Al Maktoum",
    title: "Marketing Director",
    company: "Luxe Interiors, Dubai Marina",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl p-8 md:p-12 min-h-[280px] flex flex-col justify-center">
        {/* Quote icon */}
        <Quote className="absolute top-6 left-6 w-10 h-10 text-primary-200 dark:text-primary-900 opacity-60" />

        {/* Testimonial content */}
        <div className="relative z-10">
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed mb-8 italic">
            "{testimonials[current].quote}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              {testimonials[current].name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">{testimonials[current].name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {testimonials[current].title}, {testimonials[current].company}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="text-slate-600 dark:text-slate-300" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-primary-500 w-8'
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="text-slate-600 dark:text-slate-300" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
