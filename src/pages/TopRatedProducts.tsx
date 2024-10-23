import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  description: string;
  category: string;
  features: string[];
}

const products: Product[] = [
  // Sheets
  {
    id: 1,
    name: "Luxury Bamboo Sheet Set",
    image: "https://images.unsplash.com/photo-1629585961025-261e8737bece?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    price: 129.99,
    description: "Premium bamboo sheets with exceptional softness and breathability.",
    category: "sheets",
    features: ["400 Thread Count", "Temperature Regulating", "Deep Pockets"]
  },
  {
    id: 2,
    name: "Cooling Bamboo Sheets",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    price: 119.99,
    description: "Perfect for hot sleepers with advanced cooling technology.",
    category: "sheets",
    features: ["Moisture Wicking", "Cooling Technology", "Hypoallergenic"]
  },
  // Sleepwear
  {
    id: 3,
    name: "Classic Bamboo Pajama Set",
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    price: 89.99,
    description: "Ultra-soft bamboo pajamas for ultimate comfort.",
    category: "sleepwear",
    features: ["Breathable Fabric", "Temperature Regulating", "Anti-bacterial"]
  },
  {
    id: 4,
    name: "Bamboo Sleep Shirt",
    image: "https://images.unsplash.com/photo-1618677366787-9727aacca7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    price: 49.99,
    description: "Lightweight and comfortable sleep shirt for year-round use.",
    category: "sleepwear",
    features: ["Loose Fit", "Moisture Wicking", "Soft Touch"]
  },
  // Blankets
  {
    id: 5,
    name: "Plush Bamboo Throw",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    price: 69.99,
    description: "Cozy bamboo throw perfect for any season.",
    category: "blankets",
    features: ["All-Season", "Lightweight", "Machine Washable"]
  },
  {
    id: 6,
    name: "Weighted Bamboo Blanket",
    image: "https://images.unsplash.com/photo-1629385701021-cb8972ac7d0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    price: 149.99,
    description: "15lb weighted blanket with bamboo cover for better sleep.",
    category: "blankets",
    features: ["15lb Weight", "Removable Cover", "Even Weight Distribution"]
  }
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "sheets", name: "Sheets" },
  { id: "sleepwear", name: "Sleepwear" },
  { id: "blankets", name: "Blankets" }
];

const TopRatedProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.name,
      "image": product.image,
      "description": product.description,
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
        <title>Top-Rated Bamboo Products | Expert Reviews & Recommendations</title>
        <meta name="description" content="Discover our selection of top-rated bamboo products, from luxurious sheets to comfortable sleepwear. Expert-tested and customer-approved for the best sleep experience." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Top-Rated Bamboo Products
      </h1>

      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                category.id === selectedCategory
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <article key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <ProductCard
              name={product.name}
              image={product.image}
              rating={product.rating}
              price={product.price}
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="text-gray-600 dark:text-gray-300">{product.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-block mr-2 mb-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;