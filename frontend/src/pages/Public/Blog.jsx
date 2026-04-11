import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { ArrowRight, Calendar, User, Clock, Search as SearchIcon, Tag } from 'lucide-react';

import { useState } from 'react';

const featuredPost = {
  title: "The Future of IT Infrastructure in the UAE: What Businesses Need to Know for 2026",
  summary: "As digital transformation accelerates across the Middle East, we explore the top strategic technology investments Dubai enterprises must make to stay competitive, from AI-driven cybersecurity to hybrid cloud ecosystems.",
  date: "Apr 05, 2026",
  author: "SmartIT Executive Team",
  category: "Industry Insights",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
  readTime: "8 min read"
};

const posts = [
  {
    title: "5 Signs Your Dubai Business Needs a Managed IT Service Provider",
    summary: "Is your team overwhelmed with IT issues? Discover the key indicators that it's time to partner with an expert for your IT support in the UAE.",
    date: "Mar 24, 2026",
    author: "Tech Team",
    category: "IT Support",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    readTime: "4 min read"
  },
  {
    title: "CCTV Installation in Dubai: SIRA Compliance Guide 2026",
    summary: "A comprehensive guide to understanding SIRA regulations and ensuring your commercial property's surveillance systems are fully compliant.",
    date: "Mar 18, 2026",
    author: "Security Div",
    category: "Security",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read"
  },
  {
    title: "Why a Disaster Recovery Plan is Non-Negotiable for UAE SMEs",
    summary: "Don't wait for a crisis. Learn the essential components of a robust data backup and disaster recovery plan to protect your business continuity.",
    date: "Mar 10, 2026",
    author: "Cloud Ops",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  },
  {
    title: "The Benefits of Migrating Your Business to the Cloud",
    summary: "Explore how cloud computing can boost flexibility, scalability, and cost-efficiency for modern enterprises operating in the Middle East.",
    date: "Feb 28, 2026",
    author: "Tech Team",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  },
  {
    title: "Essential Cybersecurity Practices for Remote Teams in the UAE",
    summary: "With hybrid work becoming the norm, secure your endpoints and train your employees to spot phishing attacks and secure their VPNs.",
    date: "Feb 15, 2026",
    author: "Security Div",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min read"
  },
  {
    title: "Choosing the Right PABX / IP Telephony System",
    summary: "Upgrade your corporate communications. We break down the top features to look for when selecting a new VoIP solution for your office.",
    date: "Feb 02, 2026",
    author: "Network Ops",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    readTime: "4 min read"
  }
];

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-200 min-h-screen">
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            IT <span className="gradient-text">News & Insights</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Expert perspectives, industry trends, and practical guides on managed IT, cybersecurity, and cloud solutions in the UAE.
          </p>
          
          <div className="mt-8 max-w-lg mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm transition"
              placeholder="Search articles, guides, or topics..."
            />
          </div>
        </div>

        {/* Featured Article - only show if no search or if it matches */}
        {searchTerm === '' && (
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Tag className="text-primary-500" /> Featured Insight
            </h2>
            <div className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col lg:flex-row cursor-pointer transition-shadow hover:shadow-xl">
              <div className="w-full lg:w-1/2 h-72 lg:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-md">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                  <span className="flex items-center gap-1.5"><Calendar size={16} className="text-primary-500" /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={16} className="text-primary-500" /> {featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  {featuredPost.summary}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-slate-800 flex items-center justify-center text-primary-600 font-bold">
                      SE
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">{featuredPost.author}</span>
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Read Full Article <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          {searchTerm ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
        </h2>
        
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {filteredPosts.map((post, idx) => (
              <article key={idx} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg flex flex-col h-full cursor-pointer group transition-all">
                <div className="h-56 w-full overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-sm text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-bold tracking-wide border border-slate-100 dark:border-slate-700">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-slate-400" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-slate-400" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <User size={16} className="text-slate-400" /> {post.author}
                    </span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 mb-20">
            <SearchIcon size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try searching for something else, like "CCTV" or "Cloud".</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-6 text-primary-600 dark:text-primary-400 font-bold hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center animate-fade-in-up shadow-2xl relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
           <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary-600 rounded-full opacity-20 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-3xl font-extrabold text-white mb-4">Never Miss an IT Update</h2>
             <p className="text-slate-300 text-lg mb-8">
               Subscribe to our newsletter for the latest tech news, cybersecurity alerts, and IT infrastructure strategies delivered to your inbox monthly.
             </p>
             
             {isSubscribed ? (
               <div className="bg-green-500/20 border border-green-500 text-green-400 p-6 rounded-2xl">
                 <h3 className="text-xl font-bold mb-1">Successfully Subscribed!</h3>
                 <p>Welcome to the SmartIT tech circle. Check your inbox soon.</p>
               </div>
             ) : (
               <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
                 <input 
                   type="email" 
                   required
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="px-6 py-4 rounded-xl flex-grow max-w-md bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 backdrop-blur-sm"
                   placeholder="Enter your corporate email address"
                 />
                 <button 
                   type="submit" 
                   className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition shadow-lg shrink-0"
                 >
                   Subscribe Now
                 </button>
               </form>
             )}

             <p className="text-slate-500 text-sm mt-4">We respect your privacy. No spam, just value.</p>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
