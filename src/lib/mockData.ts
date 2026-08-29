export type Category = {
  id: string;
  name: string;
  slug: string;
  image_url?: string;
  subcategories: Subcategory[];
};

export type Subcategory = {
  id: string;
  name: string;
  slug: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  sale_price?: number;
  category: string;
  subcategory: string;
  images: string[];
  is_new_arrival: boolean;
  is_bestseller: boolean;
  stock: number;
};

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'c1',
    name: 'Jewellery',
    slug: 'jewellery',
    image_url: '/images/category_jewellery_1787982178244.png',
    subcategories: [
      { id: 'sc1', name: 'Earrings', slug: 'earrings' },
      { id: 'sc2', name: 'Necklaces', slug: 'necklaces' },
      { id: 'sc3', name: 'Bangles', slug: 'bangles' },
      { id: 'sc4', name: 'Jewellery Sets', slug: 'jewellery-sets' },
    ],
  },
  {
    id: 'c2',
    name: 'Clothing',
    slug: 'clothing',
    image_url: '/images/category_clothing_1787982193530.png',
    subcategories: [
      { id: 'sc5', name: 'Sarees', slug: 'sarees' },
      { id: 'sc6', name: 'Kurtis', slug: 'kurtis' },
      { id: 'sc7', name: 'Lehengas', slug: 'lehengas' },
      { id: 'sc8', name: 'Dresses', slug: 'dresses' },
    ],
  },
  {
    id: 'c3',
    name: 'Accessories',
    slug: 'accessories',
    image_url: '/images/category_accessories_1787982209121.png',
    subcategories: [
      { id: 'sc9', name: 'Handbags', slug: 'handbags' },
      { id: 'sc10', name: 'Hair Accessories', slug: 'hair-accessories' },
      { id: 'sc11', name: 'Sunglasses', slug: 'sunglasses' },
    ],
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Pearl Drop Earrings',
    slug: 'pearl-drop-earrings',
    description: 'Elegant pearl drop earrings perfect for evening wear or festive occasions. Plated with premium gold for long-lasting shine.',
    price: 999,
    sale_price: 799,
    category: 'Jewellery',
    subcategory: 'Earrings',
    images: [
      '/images/product_pearl_earrings_1_1787982225300.png',
      '/images/product_pearl_earrings_2_1787982250900.png',
    ],
    is_new_arrival: true,
    is_bestseller: false,
    stock: 15,
  },
  {
    id: 'p2',
    name: 'Traditional Temple Necklace',
    slug: 'traditional-temple-necklace',
    description: 'Classic South Indian temple jewellery necklace with intricate detailing.',
    price: 2499,
    sale_price: 1999,
    category: 'Jewellery',
    subcategory: 'Necklaces',
    images: [
      '/images/product_temple_necklace_1787982266255.png',
    ],
    is_new_arrival: false,
    is_bestseller: true,
    stock: 5,
  },
  {
    id: 'p3',
    name: 'Classic Gold-Tone Bangles',
    slug: 'classic-gold-tone-bangles',
    description: 'Set of 4 elegant bangles with a matte gold finish.',
    price: 1199,
    sale_price: 899,
    category: 'Jewellery',
    subcategory: 'Bangles',
    images: [
      '/images/product_gold_bangles_1787982281449.png',
    ],
    is_new_arrival: false,
    is_bestseller: true,
    stock: 20,
  },
  {
    id: 'p4',
    name: 'Floral Elegance Kurti',
    slug: 'floral-elegance-kurti',
    description: 'Beautiful cotton kurti with delicate floral block prints.',
    price: 1599,
    sale_price: 1299,
    category: 'Clothing',
    subcategory: 'Kurtis',
    images: [
      '/images/product_floral_kurti_1787982299419.png',
    ],
    is_new_arrival: true,
    is_bestseller: true,
    stock: 12,
  },
  {
    id: 'p5',
    name: 'Classic Festive Saree',
    slug: 'classic-festive-saree',
    description: 'Premium silk blend saree for weddings and festive occasions.',
    price: 3499,
    sale_price: 2499,
    category: 'Clothing',
    subcategory: 'Sarees',
    images: [
      '/images/product_silk_saree_1787982317793.png',
    ],
    is_new_arrival: false,
    is_bestseller: false,
    stock: 8,
  },
  {
    id: 'p6',
    name: 'Classic Sling Bag',
    slug: 'classic-sling-bag',
    description: 'Minimalist vegan leather sling bag for everyday use.',
    price: 1499,
    sale_price: 1199,
    category: 'Accessories',
    subcategory: 'Handbags',
    images: [
      '/images/product_sling_bag_1787982331437.png',
    ],
    is_new_arrival: true,
    is_bestseller: true,
    stock: 10,
  },
];
