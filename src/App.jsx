import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';
import About from './pages/About';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';
import Partners from './pages/Partners';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <AnnouncementBar />
        <Header onDemoClick={() => setIsDemoModalOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero onDemoClick={() => setIsDemoModalOpen(true)} />
                  <Features />
                </>
              }
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <DemoModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
