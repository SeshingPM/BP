import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { productData } from '../data/products';

const Home: React.FC = () => {
  const categories = [
    { id: 'fabric-guide', name: 'Fabric Guide', icon: '🧵' },
    { id: 'sleep-science', name: 'Sleep Science', icon: '🌙' },
    { id: 'care-guide', name: 'Care Guide', icon: '🧺' },
    { id: 'maintenance', name: 'Maintenance', icon: '🔧' },
    { id: 'comparison', name: 'Comparison', icon: '⚖️' }
  ];

  return (
    <div>
      <Helmet>
        <title>BambooSleepReviews - Expert Guide to Sustainable Sleepwear</title>
        <meta name="description" content="Discover premium bamboo sleepwear with expert reviews, comparisons, and care guides. Find sustainable, comfortable sleep solutions at BambooSleepReviews." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=2000&q=80')"
          }}
        ></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Luxury of Sustainable Sleep
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover premium bamboo sleepwear that's gentle on your skin and the planet
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/top-rated"
              className="bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Explore Products
            </Link>
            <Link
              to="/compare"
              className="bg-green-700 text-white hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Compare Products
            </Link>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="px-6 py-3 bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full hover:bg-green-100 dark:hover:bg-green-800 transition-colors flex items-center gap-2"
              >
                <span>{category.icon}</span>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Top-Rated Bamboo Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(productData).slice(0, 3).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white capitalize mb-4">
                  {category}
                </h3>
                <div className="grid gap-4">
                  {items.slice(0, 3).map((product) => (
                    <Link
                      key={product.id}
                      to={`/top-rated/${category}/${product.id}`}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex items-center"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-gray-800 dark:text-white">{product.name}</h4>
                        <p className="text-green-600 dark:text-green-400 font-bold">${product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to={`/top-rated#${category}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                >
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;