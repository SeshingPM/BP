import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="bg-green-100 dark:bg-green-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Stay updated with the latest bamboo sleepwear trends and exclusive offers!
        </p>
        {subscribed ? (
          <p className="text-green-600 dark:text-green-400 text-center font-semibold">
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex items-center border-b border-green-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;