import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  readTime,
}) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={`Cover image for article: ${title}`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <header>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            <Link to={`/blog/${id}`} className="hover:text-green-600 transition-colors">
              {title}
            </Link>
          </h2>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
            <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
            <span className="mx-2">•</span>
            <span>{readTime} read</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            By <span className="font-medium">{author}</span>
          </p>
        </header>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
          aria-label={`Read more about ${title}`}
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;