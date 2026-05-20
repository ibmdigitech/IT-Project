import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { CheckCircle2, ArrowLeft, Send, Phone } from 'lucide-react';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { useEffect } from 'react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Service Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-center">Sorry, the service you are looking for does not exist or has been moved.</p>
        <Link to="/services" className="px-6 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition">
          Return to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200 min-h-screen">
      <WhatsAppButton />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-500 hover:text-primary-600 transition mb-8 font-medium group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6 inline-block">
              Premium Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 leading-tight">
              {service.title} <span className="text-primary-600 dark:text-primary-500">Experts</span> in UAE
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition shadow-lg flex items-center gap-2">
                <Send size={18} /> Get Free Audit
              </Link>
              <a href="tel:+971501234567" className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center gap-2">
                <Phone size={18} /> Call Specialist
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <img src={service.image} alt={service.title} className="w-full h-full object-cover aspect-video lg:aspect-square" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Capabilities</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition hover:shadow-md">
                    <CheckCircle2 className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-primary-100 dark:border-slate-800">
               <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-400 mb-4">Why choose SmartIT for {service.title}?</h3>
               <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                 We combine local UAE expertise with international standards. Our team of certified engineers ensures that your {service.title.toLowerCase()} is implemented with zero downtime, full SIRA/TRA compliance where applicable, and 24/7 post-deployment support.
               </p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Need Immediate Help?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Speak with our technology consultants now for a customized solution tailored to your business vertical.
              </p>
              <div className="space-y-4">
                <a href="mailto:info@smartit.ae" className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition group">
                   <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-primary-500 group-hover:scale-110 transition">@</div>
                   <span className="font-medium text-slate-700 dark:text-slate-200">info@smartit.ae</span>
                </a>
                <a href="https://wa.me/971501234567" className="flex items-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition group">
                   <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-green-500 group-hover:scale-110 transition">💬</div>
                   <span className="font-medium text-green-700 dark:text-green-400">WhatsApp Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
         <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Related Solutions</h2>
         <div className="grid md:grid-cols-3 gap-8">
           {/* eslint-disable-next-line react-hooks/purity */}
           {servicesData.filter(s => s.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 3).map((s) => (
             <Link key={s.slug} to={`/services/${s.slug}`} className="bento-card group h-72 p-0 overflow-hidden relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-8 flex flex-col justify-end">
                   <h4 className="text-white font-bold text-xl mb-2">{s.title}</h4>
                   <p className="text-slate-300 text-sm line-clamp-2">{s.description}</p>
                </div>
             </Link>
           ))}
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
