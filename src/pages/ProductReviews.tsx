import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  review: string;
  category: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Luxe Bamboo Pajama Set",
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    price: 89.99,
    review: "Incredibly soft and comfortable. The perfect balance of breathability and warmth.",
    category: ["Fabric Guide", "Sleep Science"]
  },
  {
    id: 2,
    name: "Bamboo Sleep Shirt",
    image: "https://images.unsplash.com/photo-1618677366787-9727aacca7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.5,
    price: 49.99,
    review: "A great option for hot sleepers. Keeps you cool throughout the night.",
    category: ["Sleep Science", "Care Guide"]
  },
  {
    id: 3,
    name: "Eco-Friendly Bamboo Robe",
    image: "https://images.unsplash.com/photo-1583852131971-d217d5b27eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    price: 79.99,
    review: "Luxurious feel and great absorption. Perfect for after shower or lounging.",
    category: ["Maintenance", "Care Guide"]
  },
  {
    id: 4,
    name: "Bamboo Lounge Pants",
    image: "https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    price: 59.99,
    review: "Comfortable and versatile. Great for sleeping or casual wear.",
    category: ["Fabric Guide", "Comparison"]
  }
];

const categories = [
  "Fabric Guide",
  "Sleep Science",
  "Care Guide",
  "Maintenance",
  "Comparison"
];

const ProductReviews: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.includes(selectedCategory))
    : products;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.name,
      "image": product.image,
      "description": product.review,
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating,
        "reviewCount": Math.floor(Math.random() * 100) + 50
      }
    }))
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Bamboo Sleepwear Reviews & Ratings | Expert Guide</title>
        <meta name="description" content="Compare and find the best bamboo sleepwear with our expert reviews. Detailed analysis of comfort, quality, and sustainability for better sleep." />
        <meta name="keywords" content="bamboo sleepwear reviews, bamboo pajamas, sustainable sleepwear, eco-friendly nightwear, sleep comfort" />
        <link rel="canonical" href="https://bamboosleepreviews.com/reviews" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Bamboo Sleepwear Reviews
      </h1>

      <nav className="mb-12" aria-label="Product categories">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                category === selectedCategory
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800'
              }`}
              aria-pressed={category === selectedCategory}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <article key={product.id} className="h-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
              <ProductCard
                name={product.name}
                image={product.image}
                rating={product.rating}
                price={product.price}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.review}</p>
                <div className="flex flex-wrap gap-2">
                  {product.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-sm px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/reviews/${product.id}`}
                  className="mt-4 inline-block text-green-600 hover:text-green-700 font-semibold"
                >
                  Read Full Review
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;