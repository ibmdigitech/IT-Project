import { useState } from 'react';
import axios from 'axios';
import { 
  Monitor, ShieldAlert, Code, 
  CheckCircle2, Server, Smartphone, 
  Send 
} from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'IT Support',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Sending your request...' });
    
    try {
      await axios.post(`${API_URL}/api/contacts`, formData);
      setStatus({ type: 'success', text: 'Message sent! Our team will contact you shortly.' });
      setFormData({ name: '', email: '', phone: '', serviceType: 'IT Support', message: '' });
    } catch {
      setStatus({ type: 'error', text: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 relative transition-colors duration-200">
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/18001234567" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 transition-colors">
          Enterprise Tech for <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
            Modern Business
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl transition-colors">
          We provide scalable IT infrastructure, robust CCTV security solutions, and high-performance Web Design specifically tailored for forward-thinking companies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#services" className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition shadow-lg w-full sm:w-auto">Our Solutions</a>
          <a href="#contact" className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold rounded-lg hover:border-primary-500 transition shadow-sm w-full sm:w-auto">Talk to Sales</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight pt-12">Comprehensive IT & Security Solutions</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Everything you need to secure and scale your enterprise.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary-100 dark:hover:border-primary-900 transition bg-slate-50 dark:bg-slate-800 group">
              <Server className="text-primary-600 dark:text-primary-400 w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 dark:text-white">Managed IT Support</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">24/7 proactive monitoring, cloud infrastructure management, and technical troubleshooting to keep your business online.</p>
            </div>
            <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary-100 dark:hover:border-primary-900 transition bg-slate-50 dark:bg-slate-800 group">
              <ShieldAlert className="text-purple-600 dark:text-purple-400 w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 dark:text-white">CCTV & Security Systems</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">State-of-the-art surveillance networks, access control, and comprehensive digital recording solutions.</p>
            </div>
            <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary-100 dark:hover:border-primary-900 transition bg-slate-50 dark:bg-slate-800 group">
              <Code className="text-blue-500 dark:text-blue-400 w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 dark:text-white">Web Design & SaaS Apps</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Custom React/Node web applications, responsive corporate sites, and seamless user experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900 dark:bg-slate-950 text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pt-12">
            <h2 className="text-3xl font-bold tracking-tight">Transparent Pricing Plans</h2>
            <p className="mt-4 text-slate-400">Choose the perfect tier for your business scale.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="bg-slate-800 dark:bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <div className="text-4xl font-bold mb-6">$499<span className="text-lg text-slate-400 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> Remote IT Support</li>
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> Basic Cloud Backups</li>
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> 4-Camera CCTV Setup</li>
              </ul>
              <a href="#contact" className="block w-full text-center py-3 rounded-lg border border-slate-600 hover:bg-slate-700 transition">Get Started</a>
            </div>
            {/* Premium */}
            <div className="bg-gradient-to-b from-primary-900 to-slate-800 dark:from-primary-950 dark:to-slate-900 p-8 rounded-2xl border flex flex-col relative border-primary-500 ring-2 ring-primary-500 ring-opacity-50">
              <div className="absolute top-0 right-0 bg-primary-500 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">Popular</div>
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <div className="text-4xl font-bold mb-6">$999<span className="text-lg text-slate-400 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-slate-100 flex-grow">
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> On-site & Remote Support</li>
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> Full Infrastructure Management</li>
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> 8-Camera Security Integration</li>
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> Custom Website Maintenance</li>
              </ul>
              <a href="#contact" className="block w-full text-center py-3 rounded-lg bg-primary-600 hover:bg-primary-500 font-semibold transition">Get Started</a>
            </div>
            {/* Enterprise */}
            <div className="bg-slate-800 dark:bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> Dedicated IT Manager</li>
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> 24/7 SLA Response</li>
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> Complex Network Security</li>
                <li className="flex gap-3"><CheckCircle2 className="text-primary-400"/> Bespoke SaaS Development</li>
              </ul>
              <a href="#contact" className="block w-full text-center py-3 rounded-lg border border-slate-600 hover:bg-slate-700 transition">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-900 relative transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Let's solve your technology challenges.</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Whether you need a full IT overhaul, a custom software build, or a robust surveillance network, our specialists are ready to architect the perfect solution.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <div className="bg-primary-50 dark:bg-slate-800 p-3 rounded-full text-primary-600 dark:text-primary-400"><Monitor /></div>
                  <span className="font-medium text-lg">Tech Park Avenue, Suite 404</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <div className="bg-primary-50 dark:bg-slate-800 p-3 rounded-full text-primary-600 dark:text-primary-400"><Smartphone /></div>
                  <span className="font-medium text-lg">+1 (800) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Form inside a clean card */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Request a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                    <input required name="name" onChange={handleChange} value={formData.name} type="text" className="w-full px-4 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition" placeholder="John Doe"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                    <input required name="phone" onChange={handleChange} value={formData.phone} type="tel" className="w-full px-4 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition" placeholder="+1 (555) 000-0000"/>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email address</label>
                    <input required name="email" onChange={handleChange} value={formData.email} type="email" className="w-full px-4 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition" placeholder="john@company.com"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Service Required</label>
                    <select name="serviceType" onChange={handleChange} value={formData.serviceType} className="w-full px-4 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition">
                      <option>IT Support</option>
                      <option>CCTV Installation</option>
                      <option>Web Design</option>
                      <option>Full Scale Solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Details</label>
                  <textarea required name="message" onChange={handleChange} value={formData.message} rows="4" className="w-full px-4 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition" placeholder="Tell us about your requirements..."></textarea>
                </div>

                {status.text && (
                  <div className={`p-4 rounded-lg flex items-center gap-3 ${status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-blue-50 text-blue-800 border border-blue-200'}`}>
                    {status.type === 'success' && <CheckCircle2 size={20} />}
                    <span className="font-medium">{status.text}</span>
                  </div>
                )}

                <button disabled={status.type === 'loading'} type="submit" className="w-full py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition shadow-md flex items-center justify-center gap-2">
                  <Send size={18} />
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
           <div>
             <span className="text-2xl font-bold tracking-tight text-white"><span className="text-primary-500">Smart</span>IT</span>
             <p className="text-slate-400 mt-2">Premium technology solutions for modern businesses.</p>
           </div>
           <div className="text-slate-500 text-sm">
             &copy; 2026 Smart IT Solutions. All rights reserved.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
