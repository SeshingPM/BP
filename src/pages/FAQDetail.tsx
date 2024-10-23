import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { faqCategories } from '../data/faqData';

const FAQDetail: React.FC = () => {
  const { category, questionId } = useParams<{ category: string; questionId: string }>();
  
  const selectedCategory = faqCategories.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === category);
  const question = selectedCategory?.questions.find((_, index) => `q${index + 1}` === questionId);

  if (!question) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Question not found</h1>
        <Link to="/faq" className="text-green-600 hover:text-green-700">Return to FAQ</Link>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": question.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": question.answer
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>{question.question} | Bamboo Sleepwear FAQ</title>
        <meta name="description" content={`${question.answer.substring(0, 155)}...`} />
        <link rel="canonical" href={`https://bamboosleepreviews.com/faq/${category}/${questionId}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Link to="/faq" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to FAQ
      </Link>

      <article className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {question.question}
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              {question.answer}
            </p>
          </div>
        </div>
      </article>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Related Questions</h2>
        <div className="grid gap-4">
          {selectedCategory?.questions.map((q, index) => {
            if (q !== question) {
              return (
                <Link
                  key={index}
                  to={`/faq/${category}/q${index + 1}`}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  {q.question}
                </Link>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQDetail;