import { ShieldAlert, Users, Award, Monitor, Target, Eye, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../../components/AnimatedCounter';
import WhatsAppButton from '../../components/WhatsAppButton';
import Footer from '../../components/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const About = () => {
  const [statsRef, statsVisible] = useScrollReveal();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in-up">
          Your Partner for Innovative <span className="gradient-text">IT Solutions</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          In Dubai, UAE, we offer a wide range of IT solutions to different business clients by understanding their unique demands. With over 15 years of industry experience, delivering excellent and customized IT solutions to drive digital transformation is our top priority.
        </p>
      </section>

      {/* Feature Image Banner */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
          <img src="https://loremflickr.com/1200/600/dubai,business?lock=100" alt="Dubai Business IT" className="w-full h-full object-cover" />
          <div className="absolute bottom-10 left-10 z-20">
            <p className="text-white font-bold text-2xl max-w-xl">"Empowering UAE businesses to thrive in the modern digital landscape."</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-extrabold text-primary-600 dark:text-primary-400 mb-2">
                {statsVisible && <AnimatedCounter end={1000} suffix="+" />}
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Clients Served</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-extrabold text-primary-600 dark:text-primary-400 mb-2">
                {statsVisible && <AnimatedCounter end={15} suffix="+" />}
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Years in UAE</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-extrabold text-primary-600 dark:text-primary-400 mb-2">
                {statsVisible && <AnimatedCounter end={50} suffix="+" />}
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Certified Engineers</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-extrabold text-primary-600 dark:text-primary-400 mb-2">
                {statsVisible && <AnimatedCounter end={98} suffix="%" />}
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-100 dark:bg-slate-800 p-10 rounded-3xl border-l-4 border-primary-500">
            <Target className="w-12 h-12 text-primary-500 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To provide robust, scalable, and secure IT ecosystems that eliminate technological barriers for businesses. We strive to be the invisible engine that powers our clients' daily operations, ensuring maximum uptime and efficiency.
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 p-10 rounded-3xl border-l-4 border-purple-500">
            <Eye className="w-12 h-12 text-purple-500 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To be the most trusted and innovative technological partner in the Middle East, seamlessly bridging the gap between complex enterprise technologies and everyday business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Comprehensive IT Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bento-card">
            <ShieldAlert className="text-primary-500 w-12 h-12 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Specialized Security</h3>
            <p className="text-slate-600 dark:text-slate-400">Our IT solutions cover firewall management, virus removal, storage and backup, and unified SIRA-compliant security.</p>
          </div>
          <div className="bento-card">
            <Monitor className="text-purple-500 w-12 h-12 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Core Infrastructure</h3>
            <p className="text-slate-600 dark:text-slate-400">We offer specialized services including complete Structured Cabling, CCTV, Business Telephony, and IT AMC Outsourcing.</p>
          </div>
          <div className="bento-card">
            <Award className="text-blue-500 w-12 h-12 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Certified Expertise</h3>
            <p className="text-slate-600 dark:text-slate-400">Our engineers hold top-tier certifications from industry leaders including Microsoft, Cisco, and Fortinet.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
