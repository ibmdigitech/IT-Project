import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import WhatsAppButton from '../../components/WhatsAppButton';
import Footer from '../../components/Footer';
import AnimatedCounter from '../../components/AnimatedCounter';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import { Monitor, ShieldAlert, Zap, Cloud, Lock, Video, Code, Smartphone, Building, Headphones, Briefcase, Database, Search, ShoppingCart, Wifi, LineChart, Server, HardDrive, ArrowRight, CheckCircle2, Activity, Users, Award, MessageCircle } from 'lucide-react';

const iconMap = {
  'it-infrastructure': <Monitor className="w-6 h-6" />,
  'cyber-security': <ShieldAlert className="w-6 h-6" />,
  'fiber-optic-cabling': <Zap className="w-6 h-6" />,
  'cloud-solution': <Cloud className="w-6 h-6" />,
  'data-endpoint-security': <Lock className="w-6 h-6" />,
  'cctv-installation': <Video className="w-6 h-6" />,
  'web-design-development': <Code className="w-6 h-6" />,
  'mobile-app-development': <Smartphone className="w-6 h-6" />,
  'biometric-attendance': <Building className="w-6 h-6" />,
  'queue-management': <Headphones className="w-6 h-6" />,
  'meeting-room-solutions': <Briefcase className="w-6 h-6" />,
  'domain-registration-hosting': <Database className="w-6 h-6" />,
  'whatsapp-business-api': <Search className="w-6 h-6" />,
  'mdm-solutions': <ShoppingCart className="w-6 h-6" />,
  'next-gen-firewall': <Wifi className="w-6 h-6" />,
  'it-amc-support': <LineChart className="w-6 h-6" />,
  'it-outsourcing': <Server className="w-6 h-6" />,
  'structured-cabling': <HardDrive className="w-6 h-6" />,
};

const partnerLogos = [
  { name: 'Microsoft', url: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128' },
  { name: 'Cisco', url: 'https://www.google.com/s2/favicons?domain=cisco.com&sz=128' },
  { name: 'Dell', url: 'https://www.google.com/s2/favicons?domain=dell.com&sz=128' },
  { name: 'HP', url: 'https://www.google.com/s2/favicons?domain=hp.com&sz=128' },
  { name: 'Fortinet', url: 'https://www.google.com/s2/favicons?domain=fortinet.com&sz=128' },
  { name: 'AWS', url: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=128' },
  { name: 'Lenovo', url: 'https://www.google.com/s2/favicons?domain=lenovo.com&sz=128' },
  { name: 'VMware', url: 'https://www.google.com/s2/favicons?domain=vmware.com&sz=128' },
];

const Home = () => {
  const [statsRef, statsVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal(0.1);
  const [pricingRef, pricingVisible] = useScrollReveal(0.1);

  // Take top 3 services for home display
  const displayServices = servicesData.slice(0, 3);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/40 via-transparent to-transparent dark:from-primary-900/20"></div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 animate-fade-in-up">
          Enterprise Tech for <br className="hidden md:block"/>
          <span className="gradient-text">Modern Business</span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          We provide scalable IT infrastructure, SIRA-compliant CCTV security, and high-performance Web Design tailored for forward-thinking UAE companies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Link to="/services" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition shadow-xl w-full sm:w-auto hover:-translate-y-1">
            Explore Solutions
          </Link>
          <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:border-primary-500 transition shadow-sm w-full sm:w-auto flex items-center justify-center gap-2">
            <span className="text-green-500">WhatsApp</span> Consultation
          </a>
        </div>
      </section>

      {/* Animated Stats Banner */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`flex flex-wrap justify-center sm:justify-between items-center gap-8 md:gap-12 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{statsVisible && <AnimatedCounter end={1000} suffix="+" />}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{statsVisible && <AnimatedCounter end={10} suffix="+" />}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years in UAE</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">24/7</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Local Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{statsVisible && <AnimatedCounter end={98} suffix="%" />}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Marquee */}
      <section className="py-12 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest">Trusted By & Partnered With</p>
        </div>
        <div className="logo-marquee opacity-70 grayscale hover:grayscale-0 transition-all duration-500 cursor-default flex items-center">
            {/* First set of logos */}
            {partnerLogos.map((partner, i) => (
              <div key={i} className="px-10 flex items-center justify-center min-w-[200px]">
                <img src={partner.url} alt={`${partner.name} logo`} className="h-10 md:h-12 object-contain" title={partner.name} />
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {partnerLogos.map((partner, i) => (
              <div key={`dup-${i}`} className="px-10 flex items-center justify-center min-w-[200px]">
                <img src={partner.url} alt={`${partner.name} logo`} className="h-10 md:h-12 object-contain" title={partner.name} />
              </div>
            ))}
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Core IT Solutions</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Everything you need to secure, manage, and scale your enterprise.</p>
          </div>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${servicesVisible ? 'visible' : ''}`}>
            {displayServices.map((service) => (
              <Link key={service.id} to={`/services/${service.slug}`} className="bento-card group flex flex-col h-full overflow-hidden p-0 transition-all hover:translate-y-[-4px]">
                <div className="h-48 w-full overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur p-3 rounded-full z-20 shadow-lg text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                    {iconMap[service.id]}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <span className="text-primary-600 dark:text-primary-400 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform mt-auto w-max">
                    View Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-500 transition shadow-lg shadow-primary-900/20">
              View All 18 Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose SmartIT */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                 We don't just fix problems.<br/>We prevent them.
               </h2>
               <p className="text-lg text-slate-600 dark:text-slate-400">
                 UAE businesses face unique technological and regulatory challenges. Our proactive approach ensures your infrastructure is secure, compliant, and always online.
               </p>
               
               <div className="space-y-6">
                 {[
                   { icon: <Activity className="text-green-500" />, title: 'Proactive Monitoring', desc: 'We identify and resolve issues before they cause downtime.' },
                   { icon: <Award className="text-blue-500" />, title: 'Local Expertise', desc: 'Deep understanding of UAE compliance (SIRA, TDRA) and data laws.' },
                   { icon: <Users className="text-purple-500" />, title: 'Dedicated IT Manager', desc: 'A single point of contact who understands your business inside out.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="mt-1 bg-white dark:bg-slate-900 p-2 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 h-max">
                       {item.icon}
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                       <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             
             {/* Abstract visual/placeholder since we have no images */}
             <div className="relative h-96 rounded-3xl bg-gradient-to-br from-primary-600 to-purple-800 p-8 flex items-center justify-center overflow-hidden shadow-2xl">
               <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==')]"></div>
               <div className="glass-panel p-8 text-center max-w-sm relative z-10 animate-float">
                 <ShieldAlert className="w-16 h-16 text-white mx-auto mb-4" />
                 <h3 className="text-2xl font-bold text-white mb-2">Secure. Compliant. Fast.</h3>
                 <p className="text-white/80">Your technology partner in the UAE.</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Pricing Section (AED) */}
      <section id="pricing" className="py-24 bg-white dark:bg-slate-900 transition-colors" ref={pricingRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">IT AMC Pricing Plans</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Transparent, tiered contracts for Dubai businesses of all sizes.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Starter */}
            <div className="bento-card border-none bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Starter</h3>
              <p className="text-slate-500 mb-6 text-sm">Perfect for small offices</p>
              <div className="text-4xl font-black mb-6 text-slate-900 dark:text-white">AED 1,499<span className="text-base text-slate-500 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-8 text-slate-700 dark:text-slate-300">
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-green-500 flex-shrink-0" size={18}/> Remote IT Support</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-green-500 flex-shrink-0" size={18}/> Basic Endpoint Security</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-green-500 flex-shrink-0" size={18}/> Weekly Cloud Backups</li>
                <li className="flex gap-3 items-center text-slate-400 dark:text-slate-500"><CheckCircle2 className="flex-shrink-0" size={18}/> <del>On-site Troubleshooting</del></li>
              </ul>
              <Link to="/contact" className="block w-full text-center py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition">Get Started</Link>
            </div>
            
            {/* Business */}
            <div className="relative p-8 rounded-3xl bg-slate-900 dark:bg-slate-950 border border-slate-800 dark:border-slate-800 shadow-2xl transform md:-translate-y-4">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-t-3xl"></div>
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Popular</div>
              <h3 className="text-xl font-bold mb-2 text-white">Business</h3>
              <p className="text-slate-400 mb-6 text-sm">Full coverage for SMEs</p>
              <div className="text-4xl font-black mb-6 text-white">AED 3,499<span className="text-base text-slate-400 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-8 text-slate-200">
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-primary-400 flex-shrink-0" size={18}/> On-site & Remote Support</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-primary-400 flex-shrink-0" size={18}/> Advanced Cybersecurity</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-primary-400 flex-shrink-0" size={18}/> Daily Cloud Backups</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-primary-400 flex-shrink-0" size={18}/> CCTV & Network Maintenance</li>
              </ul>
              <Link to="/contact" className="block w-full text-center py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold transition shadow-lg shadow-primary-900/20">Get Started</Link>
            </div>
            
            {/* Enterprise */}
            <div className="bento-card border-none bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Enterprise</h3>
              <p className="text-slate-500 mb-6 text-sm">For complex requirements</p>
              <div className="text-4xl font-black mb-6 text-slate-900 dark:text-white">Custom</div>
              <ul className="space-y-4 mb-8 text-slate-700 dark:text-slate-300">
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-green-500 flex-shrink-0" size={18}/> Dedicated IT Manager</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-green-500 flex-shrink-0" size={18}/> 24/7 SLA Response</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-green-500 flex-shrink-0" size={18}/> Deep Security Audits</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="text-green-500 flex-shrink-0" size={18}/> Custom Software Integrations</li>
              </ul>
              <Link to="/contact" className="block w-full text-center py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What Our Partners Say</h2>
        </div>
        <div className="px-4">
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop letting IT issues slow you down.</h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Partner with a leading technology consultant in Dubai. Let's build a secure, efficient, and scalable technology future for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-slate-50 transition shadow-lg inline-block">
              Request a Free Audit
            </Link>
            <a href="tel:+971501234567" className="px-8 py-4 border-2 border-primary-400 text-white font-bold rounded-xl hover:bg-primary-700 transition inline-block">
              Call Now: +971 50 123 4567
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
