import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { faqCategories } from '../data/faqData';

const FAQ: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Frequently Asked Questions About Bamboo Sleepwear | BambooSleepReviews</title>
        <meta name="description" content="Find answers to common questions about bamboo sleepwear, including care instructions, benefits, and sustainability. Expert guidance from BambooSleepReviews." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqCategories.map((category) => (
          <section key={category.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <h2 className="px-6 py-4 bg-green-50 dark:bg-green-900 text-xl font-semibold text-gray-800 dark:text-white">
              {category.name}
            </h2>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {category.questions.map((q, index) => {
                const categorySlug = category.name.toLowerCase().replace(/\s+/g, '-');
                const questionId = `q${index + 1}`;
                
                return (
                  <Link
                    key={index}
                    to={`/faq/${categorySlug}/${questionId}`}
                    className="block px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-800 dark:text-white font-medium pr-4">{q.question}</h3>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FAQ;