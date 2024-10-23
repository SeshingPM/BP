import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';

const ProductCard: React.FC<Product> = ({ id, name, image, rating, price, description, category }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform transition-transform group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Link
              to={`/top-rated/${category}/${id}`}
              className="block w-full text-center bg-white/90 hover:bg-white text-green-800 text-sm font-semibold py-2 px-3 rounded-lg transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 dark:text-white mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center gap-1 mb-1">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">{rating.toFixed(1)}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 line-clamp-2">{description}</p>
        <p className="text-green-600 dark:text-green-400 font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;