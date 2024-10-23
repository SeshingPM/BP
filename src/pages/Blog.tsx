import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/BlogCard';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  categories: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "benefits-of-bamboo-fabric",
    title: "The Benefits of Bamboo Fabric for Sleep",
    excerpt: "Discover why bamboo is becoming the go-to material for quality sleep wear and bedding. Learn about its unique properties and how it can improve your sleep.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    date: "2024-03-15",
    author: "Emma Green",
    readTime: "5 min",
    categories: ["Fabric Guide", "Sleep Science"]
  },
  {
    id: "care-for-bamboo-sleepwear",
    title: "How to Care for Your Bamboo Sleepwear",
    excerpt: "Learn the best practices for washing and maintaining your bamboo pajamas to ensure long-lasting comfort and durability. Extend the life of your favorite sleepwear.",
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    date: "2024-03-10",
    author: "Liam Johnson",
    readTime: "4 min",
    categories: ["Care Guide", "Maintenance"]
  },
  {
    id: "bamboo-vs-cotton",
    title: "Bamboo vs. Cotton: Which is Better for Sleep?",
    excerpt: "We compare these two popular fabrics to help you decide which is best for your sleep needs. Understand the pros and cons of each material for optimal comfort.",
    image: "https://images.unsplash.com/photo-1617952385804-7e286628e05b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    date: "2024-03-05",
    author: "Sophia Lee",
    readTime: "6 min",
    categories: ["Comparison", "Fabric Guide"]
  }
];

const Blog: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BambooSleepReviews Blog",
    "description": "Expert insights on bamboo sleepwear, sleep health, and sustainable living",
    "url": "https://bamboosleepreviews.com/blog",
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "image": post.image,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://bamboosleepreviews.com/blog/${post.id}`
    }))
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Bamboo Sleepwear Blog | Expert Insights & Tips | BambooSleepReviews</title>
        <meta name="description" content="Discover expert insights on bamboo sleepwear, sleep health, and sustainable living. Learn about the benefits of bamboo fabric and how to care for your sleepwear." />
        <meta name="keywords" content="bamboo sleepwear, sleep health, sustainable living, eco-friendly pajamas, bamboo fabric care" />
        <link rel="canonical" href="https://bamboosleepreviews.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          BambooSleepReviews Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
          Expert insights, tips, and guides for better sleep with bamboo sleepwear
        </p>
      </header>

      <nav className="mb-8">
        <h2 className="sr-only">Blog categories</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {Array.from(new Set(blogPosts.flatMap(post => post.categories))).map((category, index) => (
            <li key={index}>
              <Link
                to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </main>

      <nav className="mt-12 flex justify-center" aria-label="Pagination">
        <ul className="flex space-x-2">
          <li>
            <span className="px-4 py-2 bg-green-600 text-white rounded-md">1</span>
          </li>
          <li>
            <Link to="/blog/page/2" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 rounded-md">
              2
            </Link>
          </li>
          <li>
            <Link to="/blog/page/3" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 rounded-md">
              3
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Blog;