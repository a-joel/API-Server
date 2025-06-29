const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Products array
const appleProducts = [
  {
    id: 1,
    brand: 'Apple',
    name: 'iPhone 15 Pro',
    image: "https://i.pinimg.com/736x/cb/2a/d0/cb2ad0bbc24149758f88797d22b54ab7.jpg",
    price: 120000,
    category: 'Smartphone',
    specs: {
      storage: '256GB',
      color: 'Titanium Blue',
      chip: 'A17 Pro'
    }
  },
  {
    id: 2,
    brand: 'Apple',
    name: 'MacBook Air M4',
    image: "https://i.pinimg.com/736x/d9/a2/e9/d9a2e908c8cfe414ec6e547e94bad386.jpg",
    price: 1599,
    category: 'Laptop',
    specs: {
      display: '13-inch Retina',
      chip: 'M4',
      ram: '16GB'
    }
  },
  {
    id: 3,
    brand: 'Apple',
    name: 'Apple Watch Series 9',
    image: "https://i.pinimg.com/736x/93/d5/d4/93d5d4c25e105ef15e73166a9c61318f.jpg",
    price: 50000,
    category: 'Smartwatch',
    specs: {
      size: '45mm',
      features: ['Blood Oxygen', 'ECG', 'Always-On Display']
    }
  },
  {
    id: 4,
    name: 'iPhone 16 Pro Max',
    image: "https://i.pinimg.com/736x/49/26/8b/49268b78450588518d574fc8f5c89461.jpg",
    price: 150000,
    category: 'Smartphone',
    specs: {
      storage: '512GB',
      color: 'Natural Titanium',
      chip: 'A17 Pro'
    }
  },
  {
    id: 5,
    name: 'MacBook Pro M3 Max',
    image: "https://i.pinimg.com/736x/18/30/7d/18307dfde0f655618d822607bda8c931.jpg",
    price: 24999,
    category: 'Laptop',
    specs: {
      display: '16-inch Liquid Retina XDR',
      chip: 'M3 Max',
      ram: '64GB'
    }
  },
  {
    id: 6,
    name: 'iPad Pro 2024',
    image: "https://i.pinimg.com/736x/03/e2/fb/03e2fbab236ba889a3d038c4c40db3ea.jpg",
    price: 11099,
    category: 'Tablet',
    specs: {
      display: '12.9-inch OLED',
      chip: 'M4',
      storage: '1TB'
    }
  }
];

const samsungProducts = [
          {
    id: 1,
    brand: 'Samsung',
    name: 'Galaxy S25 Ultra',
    price: 14399,
    category: 'Smartphone',
    image: "https://i.pinimg.com/736x/d9/82/12/d982123a83fe7a0f6c5ca92e5ea2d814.jpg",
    specs: {
      storage: '512GB',
      color: 'Phantom Black',
      chip: 'Snapdragon 8 Gen 3'
    }
  },
   {
    id: 2,
    brand: 'Samsung',
    name: 'Galaxy Tab S10',
    image: "https://i.pinimg.com/736x/5d/91/0d/5d910da2c11875836d7abe51cee35964.jpg",
    price: 80000,
    category: 'Tablet',
    specs: {
      display: '11-inch AMOLED',
      ram: '8GB',
      storage: '128GB'
    }
  },
    {
    id: 3,
    brand: 'Samsung',
    name: 'Galaxy Watch 6 Classic',
    image: "https://i.pinimg.com/736x/4f/5b/06/4f5b069edf4944acdf0f7658bbc94c69.jpg",
    price: 30000,
    category: 'Smartwatch',
    specs: {
      size: '47mm',
      features: ['Body Composition', 'Sleep Coach', 'Wear OS 4']
    }
  },
    {
    id: 4,
    brand: 'Samsung',
    name: 'Galaxy Buds 2 pro',
    image: "https://i.pinimg.com/736x/bc/e9/76/bce9763cc03ce78bd00dd9c81a419ea3.jpg",
    price: 20000,
    category: 'Ear Phones',
    specs: {
      size: '20mm',
      features: ['minimu latency', 'Charger Long last', 'Wear OS 4']
    }
  },
  {
    id: 5,
    name: 'Galaxy S25 Edge',
    image: "https://i.pinimg.com/736x/a8/63/7a/a8637a30b6942d8bf53cde1769e641c7.jpg",
    price: 11999,
    category: 'Smartphone',
    specs: {
      storage: '512GB',
      color: 'Titanium Gray',
      chip: 'Snapdragon 8 Gen 3'
    }
  },
  {
    id: 6,
    name: 'Galaxy Book 4 Pro',
    image: "https://i.pinimg.com/736x/c5/90/68/c59068bb79ee59ba15044e9b39c32358.jpg",
    price: 12899,
    category: 'Laptop',
    specs: {
      display: '16-inch AMOLED',
      chip: 'Intel Core Ultra 9',
      ram: '32GB'
    }
  }
];
app.get('/', (req, res) => {
        res.send({
                message: "This Application Programmig Interface is created by JOEL. A",
                apple: "To access the apple products visit to /joel/products/apple-products",
                samsung: "For samsung /joel/products/samsung-products"
        })
});

app.get('/joel/products/apple-products', (req, res) => {
  res.json(appleProducts);
});

app.get('/joel/products/samsung-products', (req, res) => {
  res.json(samsungProducts);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
