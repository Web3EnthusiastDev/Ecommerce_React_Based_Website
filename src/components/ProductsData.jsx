// src/components/ProductsData.jsx
import blackCutlery from '../assets/black_cutlery.jpg';
import bronzeCutlery from '../assets/bronze_cutlery.jpg';
import ceramicHandleCutlery from '../assets/ceramic_handle_cutlery.jpg';
import chromeCutlery from '../assets/chrome_cutlery.jpg';
import copperCutlery from '../assets/copper_cutlery.jpg';
import disposableCutlery from '../assets/disposable_cutlery.jpg';
import flatwareCase from '../assets/flatware_case.jpg';
import holidayCutlery from '../assets/holiday_cutlery.jpg';
import kidsCutlery from '../assets/kids_cutlery.jpg';
import rainbowCutlery from '../assets/rainbow_cutlery.jpg';
import woodenImage2 from '../assets/w2.jpg';
import woodenImage3 from '../assets/w3.jpg';
import woodenImage4 from '../assets/w4.jpg';
import woodenImage5 from '../assets/w5.jpg';
import woodenImage6 from '../assets/w6.jpg';
import woodenImage7 from '../assets/w7.jpg';
import woodenImage8 from '../assets/w8.jpg';
import woodenImage9 from '../assets/w9.jpg';
import steelImage1 from '../assets/s1.jpg';
import steelImage2 from '../assets/s2.jpg';
import steelImage3 from '../assets/s3.jpg';
import steelImage4 from '../assets/s4.jpg';
import steelImage5 from '../assets/s5.jpg';
import steelImage6 from '../assets/s6.jpg';
import plasticImage1 from '../assets/p1.jpg';
import plasticImage2 from '../assets/p2.jpg';
import plasticImage3 from '../assets/p3.jpg';
import plasticImage4 from '../assets/p4.jpg';
import ceramicImage1 from '../assets/c1.jpg';
import ceramicImage2 from '../assets/c2.jpg';
import ceramicImage3 from '../assets/c3.jpg';
import ceramicImage4 from '../assets/c4.jpg';
import ceramicImage5 from '../assets/c5.jpg';
import ceramicImage6 from '../assets/c6.jpg';
import ceramicImage7 from '../assets/c7.jpg';

const ProductsData = [
  {
    id: 1,
    orderId: 'ORD-001',
    name: 'Stainless Steel Knife Set',
    description: 'High-quality stainless steel knife set with ergonomic handles.',
    image: steelImage1,
    price: 2999,
    category: 'steel'
  },
  {
    id: 2,
    orderId: 'ORD-002',
    name: 'Premium Cutlery Set',
    description: 'Complete cutlery set including spoons, forks, and knives.',
    image: steelImage2,
    price: 4999,
    category: 'steel'
  },
  {
    id: 3,
    orderId: 'ORD-003',
    name: 'Silver Plated Forks',
    description: 'Elegant silver-plated forks for formal dining.',
    image: ceramicHandleCutlery,
    price: 1599,
    category: 'ceramic'
  },
  {
    id: 4,
    orderId: 'ORD-004',
    name: 'Chef’s Knife',
    description: 'Professional chef’s knife with a razor-sharp blade.',
    image: steelImage3,
    price: 2499,
    category: 'steel'
  },
  {
    id: 5,
    orderId: 'ORD-005',
    name: 'Wooden Cutting Board',
    description: 'Durable wooden cutting board with anti-slip feet.',
    image: woodenImage2,
    price: 899,
    category: 'wooden'
  },
  {
    id: 6,
    orderId: 'ORD-006',
    name: 'Elegant Soup Spoons',
    description: 'Set of elegant soup spoons for a stylish table.',
    image: plasticImage1,
    price: 1299,
    category: 'plastic'
  },
  {
    id: 7,
    orderId: 'ORD-007',
    name: 'Dishwasher Safe Knife Set',
    description: 'Knife set designed to be dishwasher safe and rust-resistant.',
    image: steelImage4,
    price: 3499,
    category: 'steel'
  },
  {
    id: 8,
    orderId: 'ORD-008',
    name: 'Stainless Steel Fork Set',
    description: 'Set of stainless steel forks with a modern design.',
    image: steelImage5,
    price: 1799,
    category: 'steel'
  },
  {
    id: 9,
    orderId: 'ORD-009',
    name: 'High-Quality Cutlery Tray',
    description: 'Organize your cutlery with this high-quality tray.',
    image: plasticImage2,
    price: 599,
    category: 'plastic'
  },
  {
    id: 10,
    orderId: 'ORD-010',
    name: 'Decorative Cake Server',
    description: 'Stylish cake server for special occasions.',
    image: ceramicImage1,
    price: 999,
    category: 'ceramic'
  },
  {
    id: 11,
    orderId: 'ORD-011',
    name: 'Wooden Spoon Set',
    description: 'Set of wooden spoons ideal for cooking and serving.',
    image: woodenImage3,
    price: 1499,
    category: 'wooden'
  },
  {
    id: 12,
    orderId: 'ORD-012',
    name: 'Ceramic Dinner Plates',
    description: 'Elegant ceramic dinner plates for formal dining.',
    image: ceramicImage2,
    price: 2599,
    category: 'ceramic'
  },
  {
    id: 13,
    orderId: 'ORD-013',
    name: 'Plastic Cutlery Set',
    description: 'Durable plastic cutlery set for picnics and parties.',
    image: plasticImage3,
    price: 399,
    category: 'plastic'
  },
  {
    id: 14,
    orderId: 'ORD-014',
    name: 'Wooden Spatula Set',
    description: 'Set of wooden spatulas for non-stick cookware.',
    image: woodenImage4,
    price: 1299,
    category: 'wooden'
  },
  {
    id: 15,
    orderId: 'ORD-015',
    name: 'Stainless Steel Chopsticks',
    description: 'Reusable stainless steel chopsticks with a sleek design.',
    image: steelImage6,
    price: 699,
    category: 'steel'
  },
  {
    id: 16,
    orderId: 'ORD-016',
    name: 'Plastic Soup Bowls',
    description: 'Set of lightweight plastic soup bowls.',
    image: plasticImage4,
    price: 499,
    category: 'plastic'
  },
  {
    id: 17,
    orderId: 'ORD-017',
    name: 'Wooden Salad Bowl',
    description: 'Large wooden salad bowl for serving fresh salads.',
    image: woodenImage5,
    price: 1899,
    category: 'wooden'
  },
  {
    id: 18,
    orderId: 'ORD-018',
    name: 'Wooden Utensil Holder',
    description: 'Stylish wooden utensil holder for kitchen organization.',
    image: woodenImage6,
    price: 799,
    category: 'wooden'
  },
  {
    id: 19,
    orderId: 'ORD-019',
    name: 'Wooden Knife Block',
    description: 'Durable wooden knife block with a modern design.',
    image: woodenImage7,
    price: 2499,
    category: 'wooden'
  },
  {
    id: 20,
    orderId: 'ORD-020',
    name: 'Wooden Pizza Peel',
    description: 'Large wooden pizza peel for easy handling of pizzas.',
    image: woodenImage8,
    price: 1599,
    category: 'wooden'
  }
];

export default ProductsData;
