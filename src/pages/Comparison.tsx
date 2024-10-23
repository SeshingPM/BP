import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  const products = [
    {
      name: "Luxe Bamboo Pajama Set",
      price: 89.99,
      softness: 5,
      breathability: 5,
      durability: 4,
      ecoFriendly: true,
      hypoallergenic: true,
    },
    {
      name: "Bamboo Sleep Shirt",
      price: 49.99,
      softness: 4,
      breathability: 5,
      durability: 3,
      ecoFriendly: true,
      hypoallergenic: true,
    },
    {
      name: "Eco-Friendly Bamboo Robe",
      price: 79.99,
      softness: 5,
      breathability: 4,
      durability: 4,
      ecoFriendly: true,
      hypoallergenic: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Product Comparison
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="p-3 border">Feature</th>
              {products.map((product, index) => (
                <th key={index} className="p-3 border">{product.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border font-semibold">Price</td>
              {products.map((product, index) => (
                <td key={index} className="p-3 border">${product.price}</td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Softness</td>
              {products.map((product, index) => (
                <td key={index} className="p-3 border">
                  {Array(product.softness).fill('★').join('')}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Breathability</td>
              {products.map((product, index) => (
                <td key={index} className="p-3 border">
                  {Array(product.breathability).fill('★').join('')}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Durability</td>
              {products.map((product, index) => (
                <td key={index} className="p-3 border">
                  {Array(product.durability).fill('★').join('')}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Eco-Friendly</td>
              {products.map((product, index) => (
                <td key={index} className="p-3 border">
                  {product.ecoFriendly ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Hypoallergenic</td>
              {products.map((product, index) => (
                <td key={index} className="p-3 border">
                  {product.hypoallergenic ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;