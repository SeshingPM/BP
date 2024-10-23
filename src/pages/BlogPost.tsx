import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "benefits-of-bamboo-fabric",
    title: "The Benefits of Bamboo Fabric for Sleep",
    content: `
      <p>When it comes to getting a good night's sleep, the fabric of your sleepwear and bedding plays a crucial role. In recent years, bamboo fabric has gained popularity as a superior material for sleep-related products. Let's explore the numerous benefits of bamboo fabric and why it's becoming the go-to choice for quality sleep wear and bedding.</p>

      <h2>Unparalleled Softness</h2>
      <p>One of the most notable characteristics of bamboo fabric is its incredible softness. The natural fibers of bamboo create a texture that's often compared to silk or high-quality cotton. This softness translates to ultimate comfort against your skin, helping you relax and fall asleep more easily.</p>

      <h2>Excellent Breathability</h2>
      <p>Bamboo fabric is highly breathable, allowing air to circulate freely. This property helps regulate your body temperature throughout the night, preventing overheating and keeping you comfortable. The breathability of bamboo fabric makes it an excellent choice for both warm and cool sleepers.</p>

      <h2>Moisture-Wicking Properties</h2>
      <p>Bamboo fabric has natural moisture-wicking properties, which means it can absorb and evaporate sweat quickly. This feature helps keep you dry and comfortable throughout the night, even if you tend to perspire during sleep.</p>

      <h2>Hypoallergenic and Antibacterial</h2>
      <p>For those with sensitive skin or allergies, bamboo fabric is a game-changer. It's naturally hypoallergenic and resistant to dust mites, mold, and mildew. Additionally, bamboo has inherent antibacterial properties, which can help reduce odors and keep your sleepwear fresh for longer.</p>

      <h2>Eco-Friendly and Sustainable</h2>
      <p>Bamboo is one of the fastest-growing plants in the world, making it a highly sustainable resource. It requires minimal water and no pesticides to grow, making bamboo fabric an environmentally friendly choice for conscious consumers.</p>

      <h2>Durability</h2>
      <p>Despite its softness, bamboo fabric is surprisingly durable. When cared for properly, bamboo sleepwear and bedding can last for years, maintaining their softness and quality through multiple washes.</p>

      <h2>UV Protection</h2>
      <p>While not directly related to sleep, it's worth noting that bamboo fabric offers natural UV protection. This makes it an excellent choice for loungewear or for those who like to sleep in during sunny mornings.</p>

      <h2>Conclusion</h2>
      <p>The benefits of bamboo fabric for sleep are numerous and significant. From its unparalleled softness and breathability to its eco-friendly nature and durability, bamboo fabric offers a superior sleep experience. As more people discover the advantages of this remarkable material, it's no wonder that bamboo sleepwear and bedding are becoming increasingly popular choices for those seeking better sleep quality.</p>
    `,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    date: "2024-03-15",
    author: "Emma Green"
  },
  // Add other blog posts here...
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>{post.title} | BambooSleepReviews.com</title>
        <meta name="description" content={post.content.substring(0, 160)} />
        <meta name="author" content={post.author} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.substring(0, 160)} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <link rel="canonical" href={`https://bamboosleepreviews.com/blog/${post.id}`} />
      </Helmet>

      <Link to="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Link>

      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{post.title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            By {post.author} | {new Date(post.date).toLocaleDateString()}
          </p>
          <div 
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;