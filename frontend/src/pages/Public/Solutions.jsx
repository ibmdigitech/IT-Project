import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { ShieldCheck, Database, Zap, Users, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: "Data Backup & Recovery",
    description: "Multi-layered backup strategies protecting your critical business data from hardware failure or cyber-attacks.",
    icon: <Database className="w-12 h-12 text-blue-500" />,
    features: ["Local & Cloud Backups", "Ransomware Protection", "Fast Restore (RTO)", "Veeam/Acronis Partners"]
  },
  {
    title: "Business Continuity",
    description: "Ensure your operations never stop. We design disaster recovery systems with failover and 99.9% availability.",
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    features: ["Disaster Recovery (DR) Site", "High-Availability Clusters", "Automated Failover", "Redundant Connectivity"]
  },
  {
    title: "IT Audit & Compliance",
    description: "Navigate UAE regulatory requirements with confidence. We handle SIRA, TRA, and internal IT audits.",
    icon: <ShieldCheck className="w-12 h-12 text-green-500" />,
    features: ["SIRA Approved Systems", "ISO 27001 Readiness", "Vulnerability Audits", "Asset Management"]
  },
  {
    title: "Project Management",
    description: "End-to-end management of complex IT deployments, office relocations, and infrastructure upgrades.",
    icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
    features: ["Phased Rollouts", "Vendor Management", "Quality Assurance", "Timeline & Budget Control"]
  },
  {
    title: "IT Outsourcing",
    description: "Augment your workforce with specialized talent or delegate your entire IT department to our managed team.",
    icon: <Users className="w-12 h-12 text-indigo-500" />,
    features: ["Staff Augmentation", "Resident Engineers", "Expert Level Consultants", "24/7 Remote Monitoring"]
  },
  {
    title: "Network Solutions",
    description: "High-performance enterprise networking using advanced routing, switching, and security protocols.",
    icon: <Globe className="w-12 h-12 text-cyan-500" />,
    features: ["SD-WAN Setup", "VPN Solutions", "Wireless Optimization", "Fortinet/Cisco Integration"]
  }
];

const Solutions = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200 min-h-screen">
      <WhatsAppButton />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in-up">
          Enterprise <span className="gradient-text">IT Solutions</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          We provide strategic technology frameworks that empower UAE businesses to scale securely and efficiently in a digital-first economy.
        </p>
        <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition shadow-lg animate-fade-in-up inline-block" style={{ animationDelay: '0.2s' }}>
          Consult an Expert
        </Link>
      </section>

      {/* Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group animate-fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
              <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl w-max group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {item.description}
              </p>
              <ul className="space-y-3 mb-8">
                {item.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> {feat}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-primary-600 dark:text-primary-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 blur-[120px] rounded-full"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-16">Our Proven <span className="text-primary-500">Methodology</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { step: '01', title: 'Consultation', desc: 'Understanding your business workflow and challenges.' },
                 { step: '02', title: 'Design', desc: 'Crafting a scalable architecture based on best practices.' },
                 { step: '03', title: 'Execution', desc: 'Deploying solutions with rigorous quality and safety standards.' },
                 { step: '04', title: 'Optimization', desc: 'Continuous monitoring and 24/7 technical support.' }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 shadow-lg shadow-primary-600/20">{item.step}</div>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    {i < 3 && <div className="hidden md:block absolute right-0 top-1/2 w-8 h-px bg-slate-700"></div>}
                 </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
