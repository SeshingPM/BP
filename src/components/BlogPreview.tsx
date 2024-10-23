import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPreviewProps {
  title: string;
  excerpt: string;
  image: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ title, excerpt, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
        <a
          href="#"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default BlogPreview;