import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { Briefcase, Send, Users, Star, Coffee, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs = [
  { title: 'IT Resident Engineer', location: 'Dubai, UAE', type: 'Full-time', category: 'Support', desc: 'On-site technical support for corporate clients. Must have 3+ years experience with Windows Server and CCNA.' },
  { title: 'Sales Executive (IT Solutions)', location: 'Dubai, UAE', type: 'Full-time', category: 'Sales', desc: 'Drive growth for our Managed Services and CCTV solutions. UAE driving license preferred.' },
  { title: 'Cybersecurity Analyst', location: 'Abu Dhabi, UAE', type: 'Full-time', category: 'Security', desc: 'VAPT and threat monitoring for enterprise clients. CEH or CISSP certification is a plus.' },
  { title: 'Network Technician', location: 'Dubai, UAE', type: 'Full-time', category: 'Networking', desc: 'Expert in structured cabling, fiber splicing, and rack management.' }
];

const Careers = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200 min-h-screen">
      <WhatsAppButton />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Join the <span className="gradient-text">Innovation</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Build your career at SmartIT. We are looking for passionate technologists who want to shape the digital landscape of the Middle East.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
           {[
             { icon: <Users className="text-primary-500" />, title: 'Diverse Team' },
             { icon: <Star className="text-amber-500" />, title: 'Skill Growth' },
             { icon: <Coffee className="text-indigo-500" />, title: 'Dynamic Office' },
             { icon: <Sparkles className="text-purple-500" />, title: 'Free Lunch' }
           ].map((perk, i) => (
             <div key={i} className="flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition hover:shadow-md animate-fade-in-up" style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="mb-4">{perk.icon}</div>
                <h4 className="font-bold text-slate-900 dark:text-white">{perk.title}</h4>
             </div>
           ))}
        </div>
      </section>

      {/* Jobs List */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
          <Briefcase className="text-primary-600" /> Current Openings
        </h2>
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group animate-fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors uppercase tracking-tight">{job.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm font-semibold">
                    <span className="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950 px-3 py-1 rounded-full">{job.category}</span>
                    <span className="text-slate-500">{job.location}</span>
                    <span className="text-slate-500">{job.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="px-6 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition shadow-md whitespace-nowrap text-center">
                   Apply Now
                </Link>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                {job.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Referral CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800 text-center">
         <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Don&apos;t see a matching role?</h2>
         <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
           Send your CV to <span className="font-bold text-primary-600">hr@smartit.ae</span> and we&apos;ll keep you in our talent pool for future opportunities in IT and Digital Transformation.
         </p>
         <Link to="/contact" className="flex items-center gap-2 mx-auto w-max text-primary-600 font-bold hover:gap-3 transition-all text-lg">
            Submit General Inquiry <Send size={18} />
         </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
