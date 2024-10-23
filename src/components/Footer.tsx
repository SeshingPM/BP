import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-green-600 dark:text-green-400">About</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link to="/about" className="hover:underline text-gray-600 dark:text-gray-400">Our Story</Link>
              </li>
              <li className="mt-2">
                <Link to="/team" className="hover:underline text-gray-600 dark:text-gray-400">Our Team</Link>
              </li>
              <li className="mt-2">
                <Link to="/contact" className="hover:underline text-gray-600 dark:text-gray-400">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-green-600 dark:text-green-400">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link to="/terms" className="hover:underline text-gray-600 dark:text-gray-400">Terms of Use</Link>
              </li>
              <li className="mt-2">
                <Link to="/privacy" className="hover:underline text-gray-600 dark:text-gray-400">Privacy Policy</Link>
              </li>
              <li className="mt-2">
                <Link to="/cookie-policy" className="hover:underline text-gray-600 dark:text-gray-400">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-green-600 dark:text-green-400">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="https://facebook.com" className="hover:underline text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start">
                  <Facebook className="h-5 w-5 mr-2" /> Facebook
                </a>
              </li>
              <li className="mt-2">
                <a href="https://twitter.com" className="hover:underline text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start">
                  <Twitter className="h-5 w-5 mr-2" /> Twitter
                </a>
              </li>
              <li className="mt-2">
                <a href="https://instagram.com" className="hover:underline text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start">
                  <Instagram className="h-5 w-5 mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-green-600 dark:text-green-400">Sustainability</h5>
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start">
              <Leaf className="h-5 w-5 mr-2" /> We're committed to promoting eco-friendly bamboo products
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-bold mb-2">
              © 2024 BambooSleepReviews. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;