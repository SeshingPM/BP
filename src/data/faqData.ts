export interface FAQCategory {
  name: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export const faqCategories: FAQCategory[] = [
  {
    name: "Fabric Guide",
    questions: [
      {
        question: "What makes bamboo fabric good for sleepwear?",
        answer: "Bamboo fabric excels as sleepwear due to its natural properties: exceptional softness, superior breathability, and effective moisture-wicking capabilities. It's also hypoallergenic, naturally antibacterial, and temperature-regulating, making it perfect for sensitive skin and comfortable sleep in any season."
      },
      {
        question: "How does bamboo fabric compare to other natural materials?",
        answer: "Bamboo fabric offers several advantages over other natural materials. Compared to cotton, it's softer, more moisture-wicking, and has natural antibacterial properties. Versus silk, bamboo is more durable and easier to care for. It's also more sustainable than most traditional fabrics, requiring less water and no pesticides to grow."
      },
      {
        question: "Is bamboo fabric truly sustainable?",
        answer: "Bamboo is one of the most sustainable fabric sources available. The plant grows rapidly without pesticides, requires minimal water, and regenerates naturally. However, the processing method matters - look for products using closed-loop lyocell processing, which is more environmentally friendly than traditional viscose production."
      },
      {
        question: "What's the difference between bamboo viscose and bamboo lyocell?",
        answer: "While both are derived from bamboo, the manufacturing process differs significantly. Bamboo viscose uses chemical solvents that can impact the environment. Bamboo lyocell, produced in a closed-loop system, is more eco-friendly as chemicals are recycled and reused. Lyocell typically results in a slightly more durable fabric."
      }
    ]
  },
  // ... rest of the categories and questions remain the same as in the FAQ.tsx file
];