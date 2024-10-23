import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>About BambooSleepReviews - Your Trusted Source for Eco-Friendly Sleepwear</title>
        <meta name="description" content="Discover the passion and expertise behind BambooSleepReviews. Learn about our mission to promote sustainable, comfortable sleep solutions through bamboo fabric sleepwear." />
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About BambooSleepReviews</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>Welcome to BambooSleepReviews, your ultimate destination for all things related to bamboo sleepwear and sustainable sleep solutions. We're more than just a review site; we're a community of sleep enthusiasts and eco-conscious individuals dedicated to helping you achieve the perfect night's rest while caring for our planet.</p>
        
        <p>At BambooSleepReviews, we believe that quality sleep and environmental responsibility go hand in hand. That's why we've made it our mission to explore, review, and promote the best bamboo sleepwear products on the market. Our team of sleep experts and sustainability advocates work tirelessly to bring you honest, in-depth reviews and informative content about the wonderful world of bamboo fabric and its benefits for your sleep and the environment.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">What Sets Us Apart</h2>
        <ul>
          <li><strong>Expertise:</strong> Our team combines years of experience in sleep science, textile engineering, and environmental studies to provide you with the most comprehensive and accurate information.</li>
          <li><strong>Transparency:</strong> We believe in full disclosure. All our reviews are unbiased, and we clearly state any affiliations or partnerships we may have.</li>
          <li><strong>Community-Driven:</strong> Your feedback and experiences are invaluable to us. We encourage our readers to share their thoughts and contribute to our growing community of bamboo sleepwear enthusiasts.</li>
          <li><strong>Sustainability Focus:</strong> We're committed to promoting eco-friendly sleep solutions and educating our readers about the environmental impact of their choices.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Commitment to You</h2>
        <p>We promise to always provide honest, thorough, and up-to-date information to help you make informed decisions about your sleepwear. Whether you're a bamboo fabric novice or a seasoned enthusiast, we're here to guide you every step of the way towards better, more sustainable sleep.</p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Explore More About Us</h3>
          <ul className="space-y-2">
            <li><Link to="/our-story" className="text-green-600 hover:text-green-700">Our Story</Link> - Discover how BambooSleepReviews came to be</li>
            <li><Link to="/our-team" className="text-green-600 hover:text-green-700">Our Team</Link> - Meet the passionate individuals behind our mission</li>
            <li><Link to="/contact" className="text-green-600 hover:text-green-700">Contact Us</Link> - Get in touch with questions, feedback, or collaboration ideas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;