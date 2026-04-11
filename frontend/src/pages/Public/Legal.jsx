import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { Shield, FileText, Lock, Scale } from 'lucide-react';

const Legal = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200 min-h-screen font-sans">
      <WhatsAppButton />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in-up">
          Legal <span className="gradient-text">Information</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          By accessing and using SmartIT website, you agree to the following terms and conditions.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16">
        
        {/* Privacy Policy */}
        <div className="animate-fade-in-up">
           <div className="flex items-center gap-3 mb-6">
              <Shield className="text-primary-600" size={32} />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Privacy Policy</h2>
           </div>
           <div className="prose prose-slate dark:prose-invert max-w-none space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
             <p className="font-bold text-slate-900 dark:text-white mb-2">Last Updated: April 06, 2026</p>
             <p>
               At SmartIT Solutions LLC, your privacy is our top priority. We collect minimal information required to provide you with the best technical services. This includes your name, email, and contact number when you fill out our "Get a Quote" forms.
             </p>
             <p>
               We use your data strictly for communication regarding your IT requests and do not sell or share your personal information with third-party marketers. Your project data is protected by enterprise-grade encryption and restricted internally to relevant authorized personnel.
             </p>
             <ul className="list-disc pl-6 space-y-2">
               <li>We use cookies to improve your user experience and track site analytics.</li>
               <li>You have the right to request a copy of the data we hold about you.</li>
               <li>We comply with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection.</li>
             </ul>
           </div>
        </div>

        {/* Terms of Service */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
           <div className="flex items-center gap-3 mb-6">
              <Scale className="text-primary-600" size={32} />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Terms of Service</h2>
           </div>
           <div className="prose prose-slate dark:prose-invert max-w-none space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
             <p>
               By using our services, you agree to abide by the following terms of use:
             </p>
             <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                   <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                      <Lock size={18} className="text-primary-500" /> Acceptable Use
                   </h4>
                   <p className="text-sm">Users are prohibited from using our site for illegal activities or attempting to penetrate our secure systems.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                   <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                      <FileText size={18} className="text-primary-500" /> IP Rights
                   </h4>
                   <p className="text-sm">All content, logos, and graphics on this site are the intellectual property of SmartIT Solutions LLC.</p>
                </div>
             </div>
             <p className="mt-8">
               SmartIT Solutions LLC reserves the right to update these terms at任何时间 without prior notice. Any disputes arising from the use of this website shall be subject to the laws of Dubai and the United Arab Emirates.
             </p>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-100 dark:bg-slate-900 py-16 px-4">
         <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Legal Questions?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
              If you have any questions regarding our legal documents or privacy practices, please contact our compliance team.
            </p>
            <a href="mailto:legal@smartit.ae" className="text-primary-600 font-bold text-lg hover:underline transition">legal@smartit.ae</a>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;
