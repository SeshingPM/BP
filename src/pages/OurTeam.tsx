import React from 'react';
import { Helmet } from 'react-helmet-async';

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    bio: "Environmental scientist turned sleep enthusiast, Sarah's discovery of bamboo fabric sparked the creation of BambooSleepReviews.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Dr. Michael Patel",
    role: "Sleep Science Expert",
    bio: "With a Ph.D. in Sleep Medicine, Michael brings scientific rigor to our product evaluations and sleep-related content.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Emma Rodriguez",
    role: "Sustainable Textile Specialist",
    bio: "Emma's background in textile engineering and passion for sustainability ensures our reviews consider both comfort and environmental impact.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Alex Thompson",
    role: "Content Director",
    bio: "A seasoned journalist with a knack for storytelling, Alex ensures our content is engaging, informative, and accessible to all.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  }
];

const OurTeam: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Our Team - The Experts Behind BambooSleepReviews</title>
        <meta name="description" content="Meet the passionate experts behind BambooSleepReviews. Our team of sleep scientists, textile specialists, and content creators are dedicated to bringing you the best in bamboo sleepwear." />
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Our Team</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{member.name}</h2>
              <p className="text-green-600 dark:text-green-400 mb-4">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;