import { useState } from 'react';
import axios from 'axios';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

const Contact = () => {
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

  const API_URL = import.meta.env.VITE_API_URL || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Sending your request...' });
    
    try {
      await axios.post(`${API_URL}/api/contacts`, formData);
      setStatus({ type: 'success', text: 'Message sent! Our UAE team will contact you shortly.' });
      setFormData({ name: '', email: '', phone: '', serviceType: 'IT Support', message: '' });
    } catch {
      setStatus({ type: 'error', text: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200 min-h-screen">
      <WhatsAppButton />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in-up">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Ready to upgrade your IT infrastructure? Reach out to our Dubai-based experts for a free consultation.
        </p>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400 h-max">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Dubai Headquarters</p>
                    <p className="text-slate-600 dark:text-slate-400">Business Bay, P.O. Box 12345<br/>Dubai, United Arab Emirates</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400 h-max">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Call Us</p>
                    <a href="tel:+971501234567" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition">+971-50-123-4567</a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400 h-max">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Email</p>
                    <a href="mailto:info@smartit.ae" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition">info@smartit.ae</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400 h-max">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Business Hours</p>
                    <p className="text-slate-600 dark:text-slate-400">Sunday - Thursday<br/>9:00 AM - 6:00 PM (GST)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input required name="name" onChange={handleChange} value={formData.name} type="text" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 transition" placeholder="Ahmed Al Fayed"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input required name="phone" onChange={handleChange} value={formData.phone} type="tel" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 transition" placeholder="+971 50 123 4567"/>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email address <span className="text-red-500">*</span></label>
                    <input required name="email" onChange={handleChange} value={formData.email} type="email" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 transition" placeholder="ahmed@company.ae"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Service Required</label>
                    <select name="serviceType" onChange={handleChange} value={formData.serviceType} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 transition">
                      <option>Managed IT Support (AMC)</option>
                      <option>CCTV & Access Control</option>
                      <option>Cybersecurity Solutions</option>
                      <option>Cloud & Server Migration</option>
                      <option>Web & App Development</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Details <span className="text-red-500">*</span></label>
                  <textarea required name="message" onChange={handleChange} value={formData.message} rows="4" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 transition" placeholder="Tell us about your requirements or IT challenges..."></textarea>
                </div>

                {status.text && (
                  <div className={`p-4 rounded-xl flex items-center gap-3 border ${
                    status.type === 'error' 
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800/50' 
                      : status.type === 'success' 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 border-green-200 dark:border-green-800/50' 
                      : 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 border-blue-200 dark:border-blue-800/50'
                  }`}>
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
      
      {/* Map Embed */}
      <section className="h-96 w-full relative overflow-hidden bg-slate-200 dark:bg-slate-800">
        <iframe 
          title="SmartIT Dubai Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539268853!2d55.26735517616164!3d25.181858977265853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682cf8eb7eb5%3A0xc47e33e46c7ccb8d!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1713391234567!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full grayscale-[0.8] dark:grayscale-0 dark:opacity-80 dark:invert-[0.9] transition-all duration-300"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
