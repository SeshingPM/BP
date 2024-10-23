export interface Product {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: number;
  description: string;
  category: string;
}

export const productData = {
  sheets: [
    {
      id: 'sheet-1',
      name: 'Luxury Bamboo Sheet Set',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      price: 129.99,
      description: 'Ultra-soft bamboo sheets with temperature regulation',
      category: 'sheets'
    },
    {
      id: 'sheet-2',
      name: 'Premium Bamboo Bedding Set',
      image: 'https://images.unsplash.com/photo-1584100936693-b87b5730b4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      price: 149.99,
      description: 'Complete bedding set made from sustainable bamboo',
      category: 'sheets'
    },
    {
      id: 'sheet-3',
      name: 'Eco-Friendly Sheet Collection',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.9,
      price: 159.99,
      description: 'Environmentally conscious bamboo sheets',
      category: 'sheets'
    }
  ],
  sleepwear: [
    {
      id: 'sleep-1',
      name: 'Classic Bamboo Pajama Set',
      image: 'https://images.unsplash.com/photo-1613188665424-b6790816c9f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      price: 89.99,
      description: 'Comfortable and breathable pajama set',
      category: 'sleepwear'
    },
    {
      id: 'sleep-2',
      name: 'Bamboo Sleep Shirt',
      image: 'https://images.unsplash.com/photo-1617952385804-7e286628e05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      price: 49.99,
      description: 'Lightweight and cooling sleep shirt',
      category: 'sleepwear'
    },
    {
      id: 'sleep-3',
      name: 'Bamboo Loungewear Set',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      price: 79.99,
      description: 'Versatile loungewear for day and night',
      category: 'sleepwear'
    }
  ],
  blankets: [
    {
      id: 'blanket-1',
      name: 'Bamboo Throw Blanket',
      image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      price: 69.99,
      description: 'Cozy throw blanket for any room',
      category: 'blankets'
    },
    {
      id: 'blanket-2',
      name: 'Weighted Bamboo Blanket',
      image: 'https://images.unsplash.com/photo-1584100936753-41c307b7eb56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.9,
      price: 149.99,
      description: 'Calming weighted blanket with bamboo cover',
      category: 'blankets'
    },
    {
      id: 'blanket-3',
      name: 'Summer Weight Blanket',
      image: 'https://images.unsplash.com/photo-1629385701021-cb8972ac7d0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      price: 89.99,
      description: 'Lightweight blanket for warm nights',
      category: 'blankets'
    }
  ],
  pillowcases: [
    {
      id: 'pillow-1',
      name: 'Bamboo Pillowcase Set',
      image: 'https://images.unsplash.com/photo-1584947897558-4e06f5024c8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      price: 39.99,
      description: 'Silky smooth bamboo pillowcases',
      category: 'pillowcases'
    },
    {
      id: 'pillow-2',
      name: 'Luxury Pillowcase Pair',
      image: 'https://images.unsplash.com/photo-1629385701161-2fc4b45b7588?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      price: 44.99,
      description: 'Premium bamboo pillowcases',
      category: 'pillowcases'
    },
    {
      id: 'pillow-3',
      name: 'Eco Pillowcase Bundle',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      price: 49.99,
      description: 'Sustainable pillowcase set',
      category: 'pillowcases'
    }
  ],
  accessories: [
    {
      id: 'acc-1',
      name: 'Bamboo Sleep Mask',
      image: 'https://images.unsplash.com/photo-1613521140785-e85e427f8002?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      price: 19.99,
      description: 'Soft bamboo sleep mask',
      category: 'accessories'
    },
    {
      id: 'acc-2',
      name: 'Bamboo Hair Wrap',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      price: 24.99,
      description: 'Gentle hair drying wrap',
      category: 'accessories'
    },
    {
      id: 'acc-3',
      name: 'Bamboo Sleep Socks',
      image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      price: 14.99,
      description: 'Cozy bamboo sleep socks',
      category: 'accessories'
    }
  ]
};