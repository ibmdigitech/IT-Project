import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { Globe, Shield, Zap, HeartHandshake } from 'lucide-react';

const partners = [
  { name: 'Microsoft', category: 'Cloud & Office 365', logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128', description: 'Certified Silver Partner for Cloud Productivity and Azure Management.' },
  { name: 'Dell Technologies', category: 'Hardware & Storage', logo: 'https://www.google.com/s2/favicons?domain=dell.com&sz=128', description: 'Authorized Reseller for Enterprise Server and Storage solutions.' },
  { name: 'Cisco', category: 'Networking', logo: 'https://www.google.com/s2/favicons?domain=cisco.com&sz=128', description: 'Premier Partner for Secure Networking and SD-WAN implementations.' },
  { name: 'Fortinet', category: 'Cybersecurity', logo: 'https://www.google.com/s2/favicons?domain=fortinet.com&sz=128', description: 'Advanced Partner for Next-Gen Firewalls and Zero-Trust access.' },
  { name: 'Sophos', category: 'Endpoint Security', logo: 'https://www.google.com/s2/favicons?domain=sophos.com&sz=128', description: 'Gold Partner for Managed Threat Response and Intercept X.' },
  { name: 'HP Enterprise', category: 'Infrastructure', logo: 'https://www.google.com/s2/favicons?domain=hpe.com&sz=128', description: 'Partner for Hybrid IT and Edge-to-Cloud platforms.' },
  { name: 'Lenovo', category: 'Computing', logo: 'https://www.google.com/s2/favicons?domain=lenovo.com&sz=128', description: 'Business Partner for Corporate Laptops and ThinkSystem Servers.' },
  { name: 'Veeam', category: 'Data Backup', logo: 'https://www.google.com/s2/favicons?domain=veeam.com&sz=128', description: 'Certified Partner for Modern Data Protection and Backup.' }
];

const Partners = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200 min-h-screen">
      <WhatsAppButton />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in-up">
          Our Strategic <span className="gradient-text">Partners</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          We collaborate with global technology leaders to deliver world-class IT solutions customized for the UAE market.
        </p>
      </section>
 
      {/* Partners Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all text-center flex flex-col items-center group animate-fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
              <div className="w-24 h-24 mb-6 flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => { e.target.src = 'https://www.google.com/s2/favicons?domain=google.com&sz=128'; }}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{partner.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest mb-4">
                {partner.category}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Value */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Shield className="text-primary-500" />, title: 'Genuine Software', desc: '100% legal licenses and original equipment guaranteed.' },
              { icon: <Zap className="text-amber-500" />, title: 'Expert Support', desc: 'Direct access to level 3 vendor support for fast resolution.' },
              { icon: <Globe className="text-blue-500" />, title: 'Global Standards', desc: 'Solution designs based on international best practices.' },
              { icon: <HeartHandshake className="text-red-500" />, title: 'Scalability', desc: 'Infrastructure that grows with your enterprise.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 * i}s` }}>
                 <div className="mb-6">{item.icon}</div>
                 <h4 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h4>
                 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
