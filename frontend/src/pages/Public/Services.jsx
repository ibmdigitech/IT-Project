import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import WhatsAppButton from '../../components/WhatsAppButton';
import Footer from '../../components/Footer';
import { Monitor, ShieldAlert, Zap, Cloud, Lock, Video, Code, Smartphone, Building, Headphones, Briefcase, Database, Search, ShoppingCart, Wifi, LineChart, Server, HardDrive } from 'lucide-react';

const iconMap = {
  'it-infrastructure': <Monitor className="w-10 h-10 text-primary-500" />,
  'cyber-security': <ShieldAlert className="w-10 h-10 text-purple-500" />,
  'fiber-optic-cabling': <Zap className="w-10 h-10 text-yellow-500" />,
  'cloud-solution': <Cloud className="w-10 h-10 text-sky-500" />,
  'data-endpoint-security': <Lock className="w-10 h-10 text-red-500" />,
  'cctv-installation': <Video className="w-10 h-10 text-fuchsia-500" />,
  'web-design-development': <Code className="w-10 h-10 text-blue-500" />,
  'mobile-app-development': <Smartphone className="w-10 h-10 text-orange-500" />,
  'biometric-attendance': <Building className="w-10 h-10 text-emerald-500" />,
  'queue-management': <Headphones className="w-10 h-10 text-cyan-500" />,
  'meeting-room-solutions': <Briefcase className="w-10 h-10 text-slate-800 dark:text-slate-200" />,
  'domain-registration-hosting': <Database className="w-10 h-10 text-rose-500" />,
  'whatsapp-business-api': <Search className="w-10 h-10 text-pink-500" />,
  'mdm-solutions': <ShoppingCart className="w-10 h-10 text-amber-500" />,
  'next-gen-firewall': <Wifi className="w-10 h-10 text-teal-500" />,
  'it-amc-support': <LineChart className="w-10 h-10 text-lime-500" />,
  'it-outsourcing': <Server className="w-10 h-10 text-green-500" />,
  'structured-cabling': <HardDrive className="w-10 h-10 text-indigo-500" />,
};

const ServiceCard = ({ service }) => (
  <Link to={`/services/${service.slug}`} className="bento-card group cursor-pointer overflow-hidden p-0 flex flex-col transition-all hover:translate-y-[-4px]">
    <div className="h-48 w-full overflow-hidden relative">
      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur p-3 rounded-full z-20 shadow-lg group-hover:scale-110 transition-transform">
        {iconMap[service.id]}
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow line-clamp-3">
        {service.description}
      </p>
      <span className="text-primary-600 dark:text-primary-400 font-bold group-hover:translate-x-2 transition-transform inline-block w-max mt-auto flex items-center gap-2">
        Learn More &rarr;
      </span>
    </div>
  </Link>
);

const Services = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200 min-h-screen">
      <WhatsAppButton />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in-up">
          Comprehensive <span className="gradient-text">IT Solutions</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          From foundational infrastructure to advanced cloud and security systems, we provide everything your UAE business needs to thrive digitally.
        </p>
      </section>

      {/* Services Grid Part 1 (Core Infrastructure) */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10 text-slate-800 dark:text-slate-200 animate-fade-in-up">
          <div className="w-12 h-1 bg-primary-500 rounded-full"></div>
          <h2 className="text-2xl font-bold">Core IT & Infrastructure</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {servicesData.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Break: AMC Callout */}
      <section className="py-20 mb-16 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_10%,_transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Need an Annual Maintenance Contract?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Protect your business with our proactive 24/7 support plans. We offer flexible tiers designed for startups, SMEs, and enterprises in Dubai.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-slate-50 transition shadow-lg hover:-translate-y-1">
            Request AMC Pricing
          </Link>
        </div>
      </section>

      {/* Services Grid Part 2 (Digital & Software) */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10 text-slate-800 dark:text-slate-200">
          <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
          <h2 className="text-2xl font-bold">Digital Transformation & Software</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(6, 12).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Break: Consultation Banner */}
      <section className="py-24 mb-16 bg-slate-900 text-white border-y border-slate-800 relative">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Unsure Which Solution You Need?</h2>
            <p className="text-lg text-slate-400 max-w-xl">
              Let our expert consultants assess your business needs and design a custom IT strategy that fits your budget and goals.
            </p>
          </div>
          <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-primary-500 text-primary-400 font-bold rounded-xl hover:bg-primary-500 hover:text-white transition shadow-lg shrink-0">
            Chat with an Expert
          </a>
        </div>
      </section>

      {/* Services Grid Part 3 (Managed IT & Security) */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10 text-slate-800 dark:text-slate-200">
          <div className="w-12 h-1 bg-teal-500 rounded-full"></div>
          <h2 className="text-2xl font-bold">Managed Services & Consulting</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(12, 18).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
