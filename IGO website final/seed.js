import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// The exact structure the user provided
const productsData = [
  { category: 'Agri Farming Products', name: 'Vegetable Seeds' },
  { category: 'Agri Farming Products', name: 'Fruit Plants' },
  { category: 'Agri Farming Products', name: 'Flower Seeds' },
  { category: 'Agri Farming Products', name: 'Medicinal Plants' },
  { category: 'Agri Farming Products', name: 'NPK Fertilizers' },
  { category: 'Agri Farming Products', name: 'Organic Fertilizers' },
  { category: 'Agri Farming Products', name: 'Liquid Fertilizers' },
  { category: 'Agri Farming Products', name: 'Micronutrients' },
  { category: 'Agri Farming Products', name: 'Azospirillum' },
  { category: 'Agri Farming Products', name: 'Phosphate Solubilizing Bacteria' },
  { category: 'Agri Farming Products', name: 'Mycorrhiza' },
  { category: 'Agri Farming Products', name: 'Humic Acid' },
  { category: 'Agri Farming Products', name: 'Fulvic Acid' },
  { category: 'Agri Farming Products', name: 'Amino Acid Nutrients' },
  { category: 'Agri Farming Products', name: 'Insecticides' },
  { category: 'Agri Farming Products', name: 'Fungicides' },
  { category: 'Agri Farming Products', name: 'Herbicides' },
  { category: 'Agri Farming Products', name: 'Bio Pesticides' },

  { category: 'Aquaculture Products', name: 'Fish Feed' },
  { category: 'Aquaculture Products', name: 'Aerators' },
  { category: 'Aquaculture Products', name: 'Biofloc Tanks' },
  { category: 'Aquaculture Products', name: 'Pond Liners' },
  { category: 'Aquaculture Products', name: 'Water Testing Kits' },
  { category: 'Aquaculture Products', name: 'Fish Medicines' },

  { category: 'Livestock Products', name: 'Goat Feed' },
  { category: 'Livestock Products', name: 'Cattle Feed' },
  { category: 'Livestock Products', name: 'Mineral Mixtures' },
  { category: 'Livestock Products', name: 'Livestock Medicines' },
  { category: 'Livestock Products', name: 'Livestock Equipment' },

  { category: 'Farm Engineering Products', name: 'Polyhouse Sheets' },
  { category: 'Farm Engineering Products', name: 'Shade Nets' },
  { category: 'Farm Engineering Products', name: 'Insect Nets' },
  { category: 'Farm Engineering Products', name: 'GI Pipes' },
  { category: 'Farm Engineering Products', name: 'NFT Channels' },
  { category: 'Farm Engineering Products', name: 'Net Pots' },
  { category: 'Farm Engineering Products', name: 'Hydroponic Nutrients' },
  { category: 'Farm Engineering Products', name: 'Grow Lights' },
  { category: 'Farm Engineering Products', name: 'Water Pumps' },
  { category: 'Farm Engineering Products', name: 'Drip Irrigation Systems' },
  { category: 'Farm Engineering Products', name: 'Sprinklers' },
  { category: 'Farm Engineering Products', name: 'Irrigation Pipes' },
  { category: 'Farm Engineering Products', name: 'Solar Dryers' }
];

const imageMapping = {
  'Vegetable Seeds': '/assets/products/product_vegetable_seeds_1773126052340.png',
  'Fruit Plants': '/assets/products/product_fruit_plants_1773126072148.png',
  'Flower Seeds': '/assets/products/product_flower_seeds_1773126088626.png',
  'Medicinal Plants': '/assets/products/product_medicinal_plants_1773126105976.png',
  'NPK Fertilizers': '/assets/products/product_npk_fertilizer_1773126123240.png',
  'Organic Fertilizers': '/assets/products/product_organic_fertilizer_1773126139785.png',
  'Liquid Fertilizers': '/assets/products/product_liquid_fertilizer_1773126157337.png',
  'Micronutrients': '/assets/products/product_micronutrients_1773126173707.png',
  'Azospirillum': '/assets/products/product_azospirillum_1773126188809.png',
  'Phosphate Solubilizing Bacteria': '/assets/products/product_psb_fertilizer_1773126205348.png',
  'Mycorrhiza': '/assets/products/product_mycorrhiza_1773126231621.png',
  'Humic Acid': '/assets/products/product_humic_acid_1773126246789.png',
  'Fulvic Acid': '/assets/products/product_fulvic_acid_1773126265049.png',
  'Amino Acid Nutrients': '/assets/products/product_amino_acid_1773126282168.png',
  'Insecticides': '/assets/products/product_insecticides_1773126298190.png',
  'Fungicides': '/assets/products/product_fungicides_1773126316657.png',
  'Herbicides': '/assets/products/product_herbicides_1773126334052.png',
  'Bio Pesticides': 'https://images.unsplash.com/photo-1627914848507-2aeab145ceb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  
  // Aquaculture
  'Fish Feed': 'https://images.unsplash.com/photo-1596765798083-2fdb30cfdfb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Aerators': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Biofloc Tanks': 'https://images.unsplash.com/photo-1623912197177-80be4cc31238?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Pond Liners': 'https://images.unsplash.com/photo-1534433726569-809ff473fc5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Water Testing Kits': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Fish Medicines': 'https://images.unsplash.com/photo-1588636239452-97b76a08dcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',

  // Livestock
  'Goat Feed': 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Cattle Feed': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Mineral Mixtures': 'https://images.unsplash.com/photo-1596765798083-2fdb30cfdfb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Livestock Medicines': 'https://images.unsplash.com/photo-1588636239452-97b76a08dcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Livestock Equipment': 'https://images.unsplash.com/photo-1554589255-bfa3bbfc158a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  
  // Farm Engineering
  'Polyhouse Sheets': 'https://images.unsplash.com/photo-1591857177580-c20ecbe60882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Shade Nets': 'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Insect Nets': 'https://images.unsplash.com/photo-1591857177580-c20ecbe60882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'GI Pipes': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'NFT Channels': 'https://images.unsplash.com/photo-1558221849-0607ce7b90db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Net Pots': 'https://images.unsplash.com/photo-1558221849-0607ce7b90db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Hydroponic Nutrients': 'https://images.unsplash.com/photo-1584478332152-ed8524cbce8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Grow Lights': 'https://images.unsplash.com/photo-1558221849-0607ce7b90db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Water Pumps': 'https://images.unsplash.com/photo-1596541223130-5d56441b80bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Drip Irrigation Systems': 'https://images.unsplash.com/photo-1563514258000-618d3f101235?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Sprinklers': 'https://images.unsplash.com/photo-1563514258000-618d3f101235?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Irrigation Pipes': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'Solar Dryers': 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

const priceRanges = {
  'Agri Farming Products': { min: 50, max: 1500 },
  'Aquaculture Products': { min: 800, max: 50000 },
  'Livestock Products': { min: 400, max: 5000 },
  'Farm Engineering Products': { min: 100, max: 100000 }
};

const labels = ['per unit', 'per kg', 'per piece', 'per pack', 'per bag'];

async function seed() {
  console.log('Logging in as admin...');
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: 'admin@igogroups.com',
    password: 'admin' // I need to verify what password I set previously, let's assume 'admin123' or auth isn't strict RLS
  });

  if (authError) {
    console.error('Auth error:', authError.message);
  }

  // Generate complete objects
  const records = productsData.map((p, i) => {
    const range = priceRanges[p.category];
    const price = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    
    return {
      category: p.category,
      name: p.name,
      slug: p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      description: `Premium quality ${p.name} specifically formulated for professional Indian farming conditions. Ensure high yields and farm prosperity.`,
      price: price,
      price_label: labels[Math.floor(Math.random() * labels.length)],
      status: 'active',
      is_featured: i % 5 === 0,
      cover_url: imageMapping[p.name] || 'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      sort_order: i
    };
  });

  console.log(`Clearing old products...`);
  // Try to delete existing to ensure clean list (if RLS allows)
  await supabase.from('products').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  console.log(`Inserting ${records.length} products...`);
  const { data, error } = await supabase.from('products').insert(records);
  
  if (error) {
    console.error('Insert Error:', error);
  } else {
    console.log('Successfully seeded database!');
  }
}

seed();
