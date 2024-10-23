import React from 'react';
import { Helmet } from 'react-helmet-async';

const OurStory: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Our Story - The Journey of BambooSleepReviews</title>
        <meta name="description" content="Explore the inspiring journey of BambooSleepReviews, from a simple idea to becoming the leading authority on bamboo sleepwear. Discover our passion for sustainable sleep solutions." />
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Story</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>The story of BambooSleepReviews begins with a simple yet powerful realization: the profound impact that quality sleep can have on our lives and the environment. Our founder, Sarah Chen, experienced this firsthand when she discovered bamboo fabric sleepwear during a trip to Southeast Asia in 2018.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">A Serendipitous Discovery</h2>
        <p>Sarah, a chronic insomniac and environmental scientist, had tried countless sleep solutions without success. During her research trip studying sustainable agriculture, she was gifted a pair of bamboo pajamas by a local artisan. The comfort and quality of sleep she experienced that night were unlike anything she had known before.</p>
        
        <p>Intrigued by this discovery, Sarah delved deeper into the world of bamboo fabric. She learned about its incredible softness, breathability, and eco-friendly properties. It was a revelation – here was a material that not only provided unparalleled comfort but also aligned with her passion for environmental conservation.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">From Passion to Purpose</h2>
        <p>Returning home, Sarah was determined to share her discovery with others. She found, however, that reliable information about bamboo sleepwear was scarce and scattered. This gap in the market sparked an idea: why not create a comprehensive resource for people seeking better sleep through sustainable means?</p>
        
        <p>In 2019, BambooSleepReviews was born. Sarah assembled a team of sleep experts, textile engineers, and fellow environmental enthusiasts. Together, they set out to create the most trusted and informative platform for bamboo sleepwear reviews and education.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Growing a Community</h2>
        <p>What started as a small blog quickly grew into a thriving community. Sleep-deprived individuals, eco-conscious consumers, and curious readers alike found value in our detailed reviews, informative articles, and commitment to sustainability.</p>
        
        <p>As our readership grew, so did our mission. We expanded beyond just reviews, delving into the science of sleep, the environmental impact of textile production, and the broader implications of conscious consumerism. We partnered with sleep clinics, environmental organizations, and ethical manufacturers to broaden our impact and deepen our expertise.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Where We Are Today</h2>
        <p>Today, BambooSleepReviews stands as the leading authority on bamboo sleepwear and sustainable sleep solutions. Our team has grown, but our core mission remains the same: to help people sleep better while making choices that are kind to our planet.</p>
        
        <p>We've reviewed hundreds of products, helped countless individuals improve their sleep quality, and contributed to raising awareness about sustainable textile options. But we're not resting on our laurels. We continue to explore, learn, and share, always striving to provide our community with the best information and resources possible.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Join Our Journey</h2>
        <p>Our story is still being written, and we invite you to be a part of it. Whether you're here to find your perfect pair of bamboo pajamas, learn about sustainable living, or share your own experiences, you're an integral part of the BambooSleepReviews community.</p>
        
        <p>Together, we can revolutionize the way the world sleeps – one bamboo thread at a time.</p>
      </div>
    </div>
  );
};

export default OurStory;