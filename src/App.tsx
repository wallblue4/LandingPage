import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import SuccessStories from './components/SuccessStories';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SuccessStories />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;