import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Public/Home';
import About from './pages/Public/About';
import Services from './pages/Public/Services';
import ServiceDetail from './pages/Public/ServiceDetail';
import Solutions from './pages/Public/Solutions';
import Partners from './pages/Public/Partners';
import Careers from './pages/Public/Careers';
import Blog from './pages/Public/Blog';
import Contact from './pages/Public/Contact';
import FAQ from './pages/Public/FAQ';
import Legal from './pages/Public/Legal';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/legal" element={<Legal />} />
              
              <Route path="/admin/login" element={<Login />} />
              
              {/* Protected Admin Routes */}
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
