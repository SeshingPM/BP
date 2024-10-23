import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TopRatedProducts from './pages/TopRatedProducts';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Comparison from './pages/Comparison';
import FAQ from './pages/FAQ';
import FAQDetail from './pages/FAQDetail';
import Newsletter from './components/Newsletter';
import About from './pages/About';
import OurStory from './pages/OurStory';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-rated" element={<TopRatedProducts />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/compare" element={<Comparison />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/faq/:category/:questionId" element={<FAQDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Newsletter />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;