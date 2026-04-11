import { useState } from 'react';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "What is an IT AMC and why does my business need one?",
    a: "An Annual Maintenance Contract (AMC) provides your business with consistent, priority IT support. It covers regular maintenance, emergency response, and proactive system health checks to prevent downtime before it happens."
  },
  {
    q: "Are your CCTV solutions SIRA-compliant?",
    a: "Yes! SmartIT is fully authorized to provide SIRA-compliant CCTV systems for commercial and residential buildings in Dubai. We handle design, installation, and certification."
  },
  {
    q: "Do you provide support for Microsoft 365 migration?",
    a: "Absolutely. We specialize in seamless transitions to the cloud, managing data migration, email setup, and security policies for Microsoft 365 and Azure environments."
  },
  {
    q: "What is the typical response time for support requests?",
    a: "For clients with an active AMC, our remote support response is within 30 minutes, and on-site emergency dispatch within 2-4 hours, depending on the severity level (SLA)."
  },
  {
    q: "Can you help with office IT relocation in Dubai?",
    a: "Yes, we handle end-to-end office IT relocation, including server move, structured cabling, network re-configuration, and setting up your new workstation desks."
  },
  {
    q: "Is cybersecurity audit mandatory for Dubai businesses?",
    a: "While not always legally mandatory for every sector, a VAPT (Vulnerability Assessment and Penetration Testing) is highly recommended for any business handling sensitive data or operating online."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200 min-h-screen">
      <WhatsAppButton />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in-up">
          Support <span className="gradient-text">Center</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Frequently asked questions about our technology services and IT infrastructure management in the UAE.
        </p>
      </section>

      {/* Accordion List */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto px-4">
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all animate-fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-sm"
              >
                <div className="flex items-center gap-4">
                   <HelpCircle className="text-primary-500 shrink-0" size={24} />
                   <span className="text-lg font-bold text-slate-800 dark:text-slate-100">{item.q}</span>
                </div>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-primary-500' : ''}`} size={20} />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${activeIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still No Answer? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800 text-center">
         <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Still have questions?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
              Our team is ready to assist you. Get in touch via WhatsApp or send us a message for personalized technical support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition shadow-lg flex items-center gap-2 justify-center">
                  <MessageCircle size={18} /> Contact Support
               </Link>
               <a href="https://wa.me/971501234567" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition flex items-center gap-2 justify-center">
                  💬 Chat on WhatsApp
               </a>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
