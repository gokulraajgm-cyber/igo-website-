export interface ProductPricing {
  retail: number;
  wholesale: number;
  bulk: number;
}

export interface ProductDetail {
  id: string; // product-slug
  category: string; // agri-farming, aquaculture, livestock, farm-engineering
  categoryName: string;
  name: string;
  description: string;
  features: string[];
  packSizes: string[];
  pricing: ProductPricing;
  tabDescription: string;
  howToUse: string[];
  specifications: Record<string, string>;
  relatedProducts: string[];
  unsplashKeyword: string;
}

export const productDetailData: ProductDetail[] = [
  // AGRI FARMING PRODUCTS (18)
  {
    id: "vegetable-seeds",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Premium Vegetable Seeds",
    description: "High-yield, disease-resistant hybrid vegetable seeds optimized for Indian climatic conditions.",
    features: [
      "99% germination rate guaranteed",
      "High resistance to local pests and wilt",
      "Uniform fruit size and superior taste",
      "Suitable for both polyhouse and open field"
    ],
    packSizes: ["10g Pouch", "50g Tin", "100g Bulk Pack"],
    pricing: { retail: 150, wholesale: 120, bulk: 95 },
    tabDescription: "Our premium vegetable seeds are sourced from leading global breeders and tested in our IGO R&D farms. These hybrids are specifically selected for their high vigour and ability to withstand temperature fluctuations common in tropical climates. Whether you are growing tomatoes, chillies, or exotic bell peppers, these seeds provide the foundation for a successful commercial harvest.",
    howToUse: [
      "Sow seeds in pro-trays using coco-peat medium",
      "Ensure proper moisture levels during germination (3-5 days)",
      "Transplant to main field after 25-30 days of hardening",
      "Follow recommended spacing for optimal sunlight penetration"
    ],
    specifications: {
      "Purity": "98%",
      "Germination": "Above 85%",
      "Moisture": "Below 7%",
      "Shelf Life": "18 Months"
    },
    relatedProducts: ["fruit-plants", "organic-fertilizers", "insecticides", "humic-acid"],
    unsplashKeyword: "vegetable seeds"
  },
  {
    id: "fruit-plants",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Elite Grafted Fruit Plants",
    description: "Superior quality grafted and tissue-cultured fruit saplings for high-density plantation.",
    features: [
      "Early fruiting (within 1-2 years)",
      "True-to-type mother plant selection",
      "Strong rootstock for soil-borne disease resistance",
      "Certified viral-free material"
    ],
    packSizes: ["Single Sapling", "Box of 25", "Bulk Truck Load"],
    pricing: { retail: 250, wholesale: 180, bulk: 140 },
    tabDescription: "IGO's fruit plants are the gold standard for commercial orchardists. We specialize in high-density varieties of Mango (Alphonso, Ratnagiri), Guava (VNR Bihi), and Thai Seedless Lemon. Each plant is nurtured in a controlled nursery environment to ensure zero transplant shock and rapid field establishment.",
    howToUse: [
      "Prepare pits of 2x2x2 feet with organic manure",
      "Plant during early morning or late evening",
      "Ensure the graft union is 2 inches above soil level",
      "Immediate watering and staking required after planting"
    ],
    specifications: {
      "Propagation": "Grafting/Tissue Culture",
      "Age": "12-15 Months",
      "Height": "2-3 Feet",
      "Potting": "Polybag/Earth-ball"
    },
    relatedProducts: ["vegetable-seeds", "npk-fertilizers", "bio-pesticides", "mycorrhiza"],
    unsplashKeyword: "fruit saplings"
  },
  {
    id: "flower-seeds",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "High-Vigour Flower Seeds",
    description: "Professional grade seeds for floriculture including Marigold, Jasmine, and Rose varieties.",
    features: [
      "Brilliant color saturation",
      "Extended bloom period",
      "Short crop cycle for rapid ROI",
      "Ideal for garland and extraction industries"
    ],
    packSizes: ["5g Packet", "25g Packet", "500g Commercial Pack"],
    pricing: { retail: 300, wholesale: 240, bulk: 190 },
    tabDescription: "Our flower seeds are curated for the professional floriculturist aiming for the fresh flower market. With a focus on shelf-life and petal durability, these varieties are perfect for transport over long distances. We provide specialized hybrids for Marigold that offer dense flowering with minimal gap between nodes.",
    howToUse: [
      "Prepare a fine seedbed with well-drained soil",
      "Sow shallowly and cover with a thin layer of fine soil",
      "Maintain consistent humidity using misting",
      "Pinch apical buds early to encourage lateral branching"
    ],
    specifications: {
      "Type": "F1 Hybrid",
      "Plant Type": "Bushy/Erect",
      "Flower Diameter": "8-12 cm (Marigold)",
      "Cycle": "65-75 Days"
    },
    relatedProducts: ["vegetable-seeds", "liquid-fertilizers", "micronutrients", "fungicides"],
    unsplashKeyword: "flower seeds"
  },
  {
    id: "medicinal-plants",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Contract-Grade Medicinal Plants",
    description: "Highly potent medicinal plant saplings including Aloe Vera, Moringa, and Ginger.",
    features: [
      "High alkaloid/active ingredient content",
      "Organic certified mother stock",
      "Suited for pharmaceutical and ayurvedic use",
      "Easy maintenance with low water requirement"
    ],
    packSizes: ["Standard Tray", "100 Plants Box", "Thousand Unit Batch"],
    pricing: { retail: 45, wholesale: 32, bulk: 22 },
    tabDescription: "Medicinal farming is a high-margin sector, and site success depends on secondary metabolite concentration. IGO provides tissue-cultured Aloe Vera (Barbadensis Miller) and high-yielding Moringa (PKM1/PKM2) that are sought after by extraction units globally. We provide full technical support for organic cultivation protocols.",
    howToUse: [
      "Select well-drained land with good sunlight",
      "Minimal chemical input recommended for purity",
      "Harvest at the peak of active ingredient concentration",
      "Proper post-harvest drying essential for value addition"
    ],
    specifications: {
      "Variety": "Pharma Grade",
      "Potency": "High Active Ingredient",
      "Drought Resistance": "Excellent",
      "Harvest Window": "Product Specific"
    },
    relatedProducts: ["organic-fertilizers", "bio-pesticides", "azospirillum", "fulvic-acid"],
    unsplashKeyword: "medicinal plants"
  },
  {
    id: "npk-fertilizers",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Water Soluble NPK (19:19:19)",
    description: "Premium grade 100% water-soluble fertilizer for balanced crop nutrition.",
    features: [
      "Rapid absorption through fertigation",
      "Optimized for vegetative and flowering stages",
      "Chlorine and Sodium free",
      "Promotes deep green foliage and strong stems"
    ],
    packSizes: ["1kg Bag", "5kg Bag", "25kg Commercial Bag"],
    pricing: { retail: 180, wholesale: 145, bulk: 110 },
    tabDescription: "This balanced NPK formulation is essential for the early stages of all crops. Being 100% water-soluble, it leaves no residue in drip irrigation emitters, preventing clogging. It provides Nitrogen for growth, Phosphorus for roots, and Potassium for immunity and fruit quality in an instantly available form.",
    howToUse: [
      "Dissolve 5g in 1 liter of water for foliar spray",
      "Apply 2-3kg per acre during fertigation cycles",
      "Best applied during early morning or late evening",
      "Store in a cool, dry place away from moisture"
    ],
    specifications: {
      "N-P-K Ratio": "19:19:19",
      "Solubility": "100% in Water",
      "Appearance": "White Crystalline",
      "Grade": "Horticultural"
    },
    relatedProducts: ["liquid-fertilizers", "micronutrients", "humic-acid", "drip-irrigation-systems"],
    unsplashKeyword: "fertilizer"
  },
  {
    id: "organic-fertilizers",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Concentrated Organic Vermipost",
    description: "Enriched organic manure formulated with neem-cake and beneficial microbes.",
    features: [
      "Improves soil structure and aeration",
      "Long-term nutrient release (slow release)",
      "Zero chemical residue",
      "High microbial load for soil health"
    ],
    packSizes: ["5kg Pack", "40kg Bag", "Bulk Metric Ton"],
    pricing: { retail: 25, wholesale: 18, bulk: 12 },
    tabDescription: "IGO's organic fertilizers are processed through controlled decomposition of botanical waste. Unlike raw manure, our vermicompost is weed-free and pathogen-free. It acts as a soil conditioner, increasing the water-holding capacity and rejuvenating tired soil that has been over-treated with chemicals.",
    howToUse: [
      "Incorporate into soil during land preparation",
      "Apply as a top dressing around the root zone",
      "Mix with potting soil for nursery use (30% ratio)",
      "Keep soil moist after application to activate microbes"
    ],
    specifications: {
      "Organic Carbon": "Min 14%",
      "C:N Ratio": "< 20:1",
      "Moisture": "15-25%",
      "Pathogens": "Zero"
    },
    relatedProducts: ["medicinal-plants", "bio-pesticides", "azospirillum", "mycorrhiza"],
    unsplashKeyword: "organic fertilizer"
  },
  {
    id: "liquid-fertilizers",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Nano Liquid Fertilizer",
    description: "Advanced liquid nutrition for instant foliar response and rapid energy boost.",
    features: [
      "90%+ nutrient use efficiency",
      "Compatible with most pesticides",
      "Instantly corrects nutrient deficiencies",
      "Low application dose (only 2-3ml per liter)"
    ],
    packSizes: ["250ml Bottle", "500ml Bottle", "1 Litre Bottle"],
    pricing: { retail: 450, wholesale: 380, bulk: 320 },
    tabDescription: "Our liquid fertilizers are formulated with chelated nutrients that penetrate the leaf cuticle within minutes. This is especially useful during critical growth stages like bloom initiation or fruit setting where the plant requires an immediate surge of energy. It reduces the reliance on heavy soil-based urea and DAP.",
    howToUse: [
      "Mix 2.5ml per liter of clean water",
      "Spray on both surfaces of the leaves (stomata)",
      "Repeat every 15 days for continuous growth",
      "Avoid spraying during peak sunlight hours"
    ],
    specifications: {
      "pH": "6.0 - 7.0 (Neutral)",
      "Specific Gravity": "1.2",
      "Available Nutrients": "Macro & Micro (Chelated)",
      "Stability": "2 Years"
    },
    relatedProducts: ["npk-fertilizers", "flower-seeds", "amino-acid-nutrients", "grow-lights"],
    unsplashKeyword: "liquid fertilizer"
  },
  {
    id: "micronutrients",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Chelated Multi-Micronutrient Mix",
    description: "Balanced mixture of Zinc, Iron, Boron, Manganese, and Molybdenum for comprehensive health.",
    features: [
      "Prevents leaf yellowing and stunted growth",
      "Enhances floral retention and fruit quality",
      "Increases cold and drought tolerance",
      "Essential for enzyme activation in plants"
    ],
    packSizes: ["250g Pouch", "500g Pouch", "1kg Pouch"],
    pricing: { retail: 220, wholesale: 185, bulk: 150 },
    tabDescription: "While NPK provides the bulk, micronutrients are the technical engineers of plant growth. Deficiencies in Zinc or Boron can lead to massive yield losses even with high NPK. Our chelated formula ensures that these minerals are not locked up in the soil and are easily available to the plant's vascular system.",
    howToUse: [
      "Use as a foliar spray at 1.5g per liter",
      "Mix with water-soluble fertilizers for fertigation",
      "Apply during early vegetative and pre-flowering stages",
      "Do not exceed recommended dose to avoid toxicity"
    ],
    specifications: {
      "Zinc (Zn)": "3.0%",
      "Iron (Fe)": "2.5%",
      "Boron (B)": "0.5%",
      "Manganese (Mn)": "1.0%"
    },
    relatedProducts: ["npk-fertilizers", "liquid-fertilizers", "fruit-plants", "flower-seeds"],
    unsplashKeyword: "nutrients"
  },
  {
    id: "azospirillum",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "IGO-BioAzo (Azospirillum)",
    description: "Biological nitrogen-fixing bacteria that reduces chemical urea requirement by 25%.",
    features: [
      "Fixes atmospheric nitrogen in non-leguminous plants",
      "Produces growth-promoting substances (IAA/Gibberellins)",
      "Improves root development and surface area",
      "Environmentally friendly and sustainable"
    ],
    packSizes: ["500ml Liquid", "1kg Carrier Based", "Bulk Drum"],
    pricing: { retail: 120, wholesale: 95, bulk: 75 },
    tabDescription: "Azospirillum is a free-living nitrogen-fixing bacterium that colonizes the plant root zone. It literally pulls nitrogen from the air and feeds it directly to the crop. Regular use builds a healthy rhizosphere and significantly improves the plant's ability to resist drought and soil-borne pathogens.",
    howToUse: [
      "Seed treatment: Mix 200g with jaggery solution for 10kg seeds",
      "Root dipping: 500g in 50 liters water for 30 minutes",
      "Soil application: Mix with vermicompost and apply near roots",
      "Avoid mixing with chemical fungicides or pesticides"
    ],
    specifications: {
      "Viable Count": "Min 1 x 10^9 cells/ml",
      "pH": "6.5 - 7.5",
      "Efficiency": "15-20kg N/Ha/Year",
      "Shelf Life": "6-12 Months"
    },
    relatedProducts: ["organic-fertilizers", "medicinal-plants", "phosphate-solubilizing-bacteria", "mycorrhiza"],
    unsplashKeyword: "bio fertilizer"
  },
  {
    id: "phosphate-solubilizing-bacteria",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "IGO-PSB (Phosphate Solubilizer)",
    description: "Bio-agent that makes insoluble phosphorus available to plants, improving root strength.",
    features: [
      "Unlocks unavailable phosphorus in alkaline/acidic soils",
      "Enriches soil microbial diversity",
      "Increases yield by 10-15%",
      "Cost-effective alternative to heavy DAP application"
    ],
    packSizes: ["500ml Liquid", "1kg Powder", "Bulk 25kg"],
    pricing: { retail: 130, wholesale: 105, bulk: 82 },
    tabDescription: "Much of the Phosphorus applied to soil becomes locked and unavailable. IGO-PSB produces organic acids that dissolve these fixed phosphates, turning them into a form the plant can easily drink. This leads to early root development and overall stronger, more resilient crops.",
    howToUse: [
      "Apply 1-2 liters per acre via drip or soil drenching",
      "Best applied along with organic manure",
      "Use during the early building phase of the plant",
      "Keep the soil moist to maintain bacterial activity"
    ],
    specifications: {
      "Bacterium": "Bacillus megaterium",
      "Count": "Min 5 x 10^8 per g",
      "P Solubility": "Highly Effective",
      "Purity": "Pathogen Free"
    },
    relatedProducts: ["azospirillum", "mycorrhiza", "npk-fertilizers", "organic-fertilizers"],
    unsplashKeyword: "agri microbe"
  },
  {
    id: "mycorrhiza",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "VAM Root Accelerator (Mycorrhiza)",
    description: "Symbiotic fungus that extends root systems 100x for massive nutrient uptake.",
    features: [
      "Extends the effective root surface area via hyphae",
      "Drastically improves water uptake efficiency",
      "Protects roots against nematodes and soil fungi",
      "Essential for soilless media and depleted soils"
    ],
    packSizes: ["100g Pouch", "1kg Box", "5kg Bucket"],
    pricing: { retail: 350, wholesale: 290, bulk: 240 },
    tabDescription: "Mycorrhiza forms a 'second root system' for the plant. Its microscopic filaments reach where plant roots cannot, mining for water and minerals like Phosphorus and Zinc. This is arguably the most important biological input for high-density farming and polyhouse systems where root space is limited.",
    howToUse: [
      "Soil application: 4kg per acre near the root zone",
      "Nursery: Mix 50g per 1kg of potting soil",
      "Direct planting: Place 5-10g in the planting hole",
      "Avoid use of phosphate-heavy fertilizers during application"
    ],
    specifications: {
      "Spore Count": "Min 1000 IP per g",
      "Host": "Sorghum roots",
      "Form": "Granular/Powder",
      "Benefit": "P & Water Transport"
    },
    relatedProducts: ["vegetable-seeds", "fruit-plants", "azospirillum", "humic-acid"],
    unsplashKeyword: "root growth"
  },
  {
    id: "humic-acid",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Premium Humic-Gold (85%)",
    description: "Potassium Humate granules for soil softening and instant nutrient mobilization.",
    features: [
      "Natural soil conditioner and chelator",
      "Increases Cation Exchange Capacity (CEC)",
      "Boosts seed germination and root initiation",
      "Buffers soil pH extremes"
    ],
    packSizes: ["1kg Pouch", "5kg Bucket", "20kg Bag"],
    pricing: { retail: 480, wholesale: 410, bulk: 350 },
    tabDescription: "Our Humic Acid is derived from high-grade leonardite. It acts as a bridge between soil and roots, holding nutrients close so they don't leach away. It darkens the soil color, helping in heat absorption and provides a massive energy source for the beneficial microbes in the root zone.",
    howToUse: [
      "Drip Irrigation: 500g per acre per month",
      "Foliar Spray: 1-2g per liter of water",
      "Soil Application: Mix 2-4kg with manure",
      "Can be mixed with NPK for better utilization"
    ],
    specifications: {
      "Humic Acid": "Min 85%",
      "Potassium (as K2O)": "10-12%",
      "Solubility": "99.5% in Water",
      "Form": "Black Shiny Flakes"
    },
    relatedProducts: ["fulvic-acid", "npk-fertilizers", "micronutrients", "organic-fertilizers"],
    unsplashKeyword: "black gold soil"
  },
  {
    id: "fulvic-acid",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "IGO Fulvic-Micro (Foliar Grade)",
    description: "Highly reactive organic molecule for rapid leaf absorption and fruit sizing.",
    features: [
      "Smallest molecular size for instant leaf entry",
      "Transports minerals directly into plant cells",
      "Stimulates plant metabolism and photosynthesis",
      "Detoxifies soil of heavy metals"
    ],
    packSizes: ["250ml Liquid", "500ml Liquid", "1 Litre Liquid"],
    pricing: { retail: 550, wholesale: 480, bulk: 410 },
    tabDescription: "While Humic works in the soil, Fulvic is the king of foliar nutrition. It is the perfect carrier for micronutrients. Mixing Fulvic acid with your sprays makes the chemicals more effective and helps the plant recover from environmental stress almost instantly.",
    howToUse: [
      "Foliar: Mix 1-2ml per liter of water",
      "Delt with pesticides to increase efficiency",
      "Apply during early morning or evening",
      "Best used during the reproductive/fruiting stage"
    ],
    specifications: {
      "Fulvic Content": "Min 15-20% Liquid",
      "pH": "4.5 - 5.5",
      "Color": "Golden Brown",
      "Action": "Metabolic Catalyst"
    },
    relatedProducts: ["humic-acid", "liquid-fertilizers", "amino-acid-nutrients", "fruit-plants"],
    unsplashKeyword: "organic spray"
  },
  {
    id: "amino-acid-nutrients",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Multi-Amino Plant Bio-stimulant",
    description: "Essential amino acids derived from vegetable protein for ultimate stress recovery.",
    features: [
      "Direct source of plant protein building blocks",
      "Reduces energy loss during drought/extreme heat",
      "Improves floral set and prevents dropping",
      "Increases fruit size, color, and sugar content"
    ],
    packSizes: ["250ml", "500ml", "1 Litre", "5 Litre"],
    pricing: { retail: 650, wholesale: 560, bulk: 480 },
    tabDescription: "Plants usually synthesize amino acids through huge energetic costs. By providing them directly, you allow the plant to focus its energy on growing fruit rather than surviving stress. Our formula contains 18 essential L-amino acids that are bio-available for rapid growth bursts.",
    howToUse: [
      "Foliar Spray: 2ml per liter at 15-day intervals",
      "Drip: 1 liter per acre during peak fruiting",
      "Combine with micronutrients for synergistic effect",
      "Use before and after expected stress periods (frost/heat)"
    ],
    specifications: {
      "Free Amino Acids": "Min 20%",
      "Organic Nitrogen": "5.0%",
      "Total Protein": "30%",
      "Source": "Soybean/Corn Enzyme Hydrolysis"
    },
    relatedProducts: ["fulvic-acid", "liquid-fertilizers", "flower-seeds", "vegetable-seeds"],
    unsplashKeyword: "plant health"
  },
  {
    id: "insecticides",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Broad Spectrum Eco-Insecticide",
    description: "Highly effective control for aphids, thrips, and sucking pests with low toxicity.",
    features: [
      "Rapid knockdown effect on target insects",
      "Translaminar action (protects both sides of leaf)",
      "Low residual effect (safe for harvest after 7-10 days)",
      "Optimized for greenhouse and protected farming"
    ],
    packSizes: ["100ml", "250ml", "500ml", "1 Litre"],
    pricing: { retail: 850, wholesale: 730, bulk: 620 },
    tabDescription: "Pest control is the biggest challenge in high-tech farming. Our insecticides are selected for their high efficacy and low impact on beneficial insects like bees. This formulation targets the nervous system of pests while remaining safe for the applicator and the environment when used as directed.",
    howToUse: [
      "Spray at first sign of infestation",
      "Dilute 1-1.5ml per liter of water",
      "Ensure thorough coverage of entire plant canopy",
      "Rotate with different chemistries to avoid resistance"
    ],
    specifications: {
      "Target Group": "Sucking/Chewing Pests",
      "Formulation": "EC (Emulsifiable Concentrate)",
      "Safety Class": "Blue Label (Caution)",
      "Action": "Contact & Systemic"
    },
    relatedProducts: ["bio-pesticides", "insect-nets", "fungicides", "vegetable-seeds"],
    unsplashKeyword: "insect control"
  },
  {
    id: "fungicides",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "IGO-Pro Guard Fungicide",
    description: "Advanced systemic fungicide for control of Powdery Mildew, Blight, and Rot.",
    features: [
      "Both curative and preventive action",
      "Long-lasting protection (up to 14 days)",
      "Improves crop 'greenness' after application",
      "Excellent rain-fastness properties"
    ],
    packSizes: ["100g", "250g", "500g", "1kg"],
    pricing: { retail: 750, wholesale: 640, bulk: 550 },
    tabDescription: "Fungal diseases can wipe out a crop overnight. Our systemic fungicides move through the plant's vascular system, protecting even the new growth. Whether you are dealing with soil-borne damping-off in the nursery or late blight in the field, IGO-Pro Guard provides industrial-strength protection.",
    howToUse: [
      "Preventive: 1g per liter of water every 15 days",
      "Curative: 2g per liter at 7-day intervals",
      "Ensure nozzles are clean for uniform fine mist",
      "Apply during early morning before dew dries"
    ],
    specifications: {
      "Active Chemistry": "Triazole/Strobilurin Blend",
      "Form": "WP (Wettable Powder)",
      "Water Solubility": "Excellent",
      "Residue Period": "Minimal"
    },
    relatedProducts: ["insecticides", "bio-pesticides", "humic-acid", "polyhouse-sheets"],
    unsplashKeyword: "mold control"
  },
  {
    id: "herbicides",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Selective Crop Herbicide",
    description: "Targeted weed control that eliminates competing grasses without harming the crop.",
    features: [
      "Eliminates tough perennial and annual weeds",
      "Reduces manual labor costs by 80%",
      "Safe for specific crop families (check label)",
      "Rapid absorption through weed foliage"
    ],
    packSizes: ["250ml", "500ml", "1 Litre", "10 Litre"],
    pricing: { retail: 950, wholesale: 820, bulk: 710 },
    tabDescription: "Competition for nutrients between weeds and your crop can reduce yields by 40%. Our selective herbicides allow you to clean your field with precision. We provide tailored solutions for broad-leaf weeds or grassy weeds, ensuring your commercial plantation gets 100% of the fertilizers you apply.",
    howToUse: [
      "Apply when weeds are in 2-4 leaf stage",
      "Requires moisture in soil for best results",
      "Use specified hood on sprayers to avoid drift",
      "Wait 24 hours before any irrigation"
    ],
    specifications: {
      "Action": "Post-Emergence Selective",
      "Target": "Broadleaf / Grassy Weeds",
      "Application": "Foliar Spray",
      "Safety": "Handle with Care"
    },
    relatedProducts: ["insecticides", "fungicides", "npk-fertilizers", "open-field-cultivation"],
    unsplashKeyword: "weed control"
  },
  {
    id: "bio-pesticides",
    category: "agri-farming",
    categoryName: "Agri Farming Products",
    name: "Neem-Turbo Bio-Pesticide",
    description: "Pure Azadirachtin based solution for 100% organic pest and fungus management.",
    features: [
      "Derived from high-potency Neem seeds",
      "Non-toxic to humans and livestock",
      "Repels and interrupts the life cycle of over 200 pests",
      "Zero-wait harvest (harvest right after spray)"
    ],
    packSizes: ["100ml", "500ml", "1 Litre", "5 Litre"],
    pricing: { retail: 450, wholesale: 380, bulk: 310 },
    tabDescription: "For the health-conscious market and organic certification, Neem-Turbo is indispensable. It works by making the plant unpalatable to pests and interfering with their hormonal development. It's the perfect backbone for Integrated Pest Management (IPM) in polyhouses and vegetable farms.",
    howToUse: [
      "Mix 3-5ml per liter of water with a drop of soap",
      "Spray every 7-10 days for total protection",
      "Best used as a preventive measure",
      "Store in a dark, cool place to prevent UV degradation"
    ],
    specifications: {
      "Azadirachtin": "3000 PPM / 10000 PPM",
      "Source": "Cold Pressed Neem",
      "Organic Status": "Certified",
      "Biodegradable": "100%"
    },
    relatedProducts: ["medicinal-plants", "organic-fertilizers", "insect-nets", "azospirillum"],
    unsplashKeyword: "neem oil"
  },

  // AQUACULTURE PRODUCTS (6)
  {
    id: "fish-feed",
    category: "aquaculture",
    categoryName: "Aquaculture Products",
    name: "Grow-Fast High-Protein Fish Feed",
    description: "Extruded floating pellets with 32% protein content for rapid biomass growth.",
    features: [
      "Optimized FCR (Food Conversion Ratio)",
      "High water stability (stays floating for 4 hours)",
      "Fortified with Omega-3 and essential vitamins",
      "Dust-free pellets to minimize water pollution"
    ],
    packSizes: ["10kg Bag", "25kg Bag", "Bulk Tonne"],
    pricing: { retail: 85, wholesale: 68, bulk: 54 },
    tabDescription: "Our specialized fish feed is formulated for Tilapia, Carp, and Catfish. It contains high-quality fish meal and soy protein that ensures your fish reach marketable size faster. The floating nature allows you to monitor feeding activity and prevent overfeeding, keeping your pond or tank environment clean.",
    howToUse: [
      "Feed 2-3% of total body weight daily",
      "Spread evenly across the water surface",
      "Adjust feeding based on water temperature and oxygen levels",
      "Remove uneaten feed after 20 minutes"
    ],
    specifications: {
      "Protein": "32%",
      "Fat": "5.0%",
      "Fiber": "4.0%",
      "Form": "Floating Pellets"
    },
    relatedProducts: ["aerators", "biofloc-tanks", "water-testing-kits", "fish-medicines"],
    unsplashKeyword: "fish feed"
  },
  {
    id: "aerators",
    category: "aquaculture",
    categoryName: "Aquaculture Products",
    name: "Industrial Paddle Wheel Aerator",
    description: "High-efficiency 2HP aerator for maintaining optimal dissolved oxygen in intensive farming.",
    features: [
      "Stainless steel frame for corrosion resistance",
      "High oxygen transfer rate (OTR)",
      "Heavy-duty copper motor with thermal protection",
      "Adjustable impellers for varying pond depths"
    ],
    packSizes: ["1HP Unit", "2HP Unit", "Complete Pond Set"],
    pricing: { retail: 28000, wholesale: 24500, bulk: 21000 },
    tabDescription: "Aeration is the heartbeat of aquaculture. Our paddle wheel aerators create a massive horizontal currents, ensuring oxygen reaches the bottom layers of the pond. This prevents anaerobic conditions and allows for much higher stocking densities compared to traditional ponds.",
    howToUse: [
      "Install using floating pontoons at 45-degree angles",
      "Position to create a circular water flow",
      "Run for 6-8 hours during night and early morning",
      "Regularly grease the gearbox and check cable integrity"
    ],
    specifications: {
      "Power": "2 HP / 1.5 KW",
      "Phase": "Single/Three Phase",
      "RPM": "1440 (Motor) / 100 (Paddle)",
      "Material": "HDPE/SS-304"
    },
    relatedProducts: ["fish-feed", "biofloc-tanks", "pond-liners", "water-pumps"],
    unsplashKeyword: "paddle wheel aerator"
  },
  {
    id: "biofloc-tanks",
    category: "aquaculture",
    categoryName: "Aquaculture Products",
    name: "Standard Biofloc Canvas Tanks",
    description: "Multi-layered PVC coated fabric tanks with heavy-duty GI frame support.",
    features: [
      "1000 GSM high-tenacity fabric",
      "Easy to assemble and relocate",
      "UV treated and leak-proof warranty",
      "Integrated center drainage for sludge removal"
    ],
    packSizes: ["2m Diameter (3.5k L)", "4m Diameter (13k L)", "5m Diameter (20k L)"],
    pricing: { retail: 12500, wholesale: 10800, bulk: 9200 },
    tabDescription: "Biofloc technology allows for high-yield farming in minimal space. Our tanks are designed for longevity and ease of maintenance. The circular design ensures perfect water circulation, essential for keeping the 'floc' (beneficial bacteria) in suspension. Ideal for urban fish farming.",
    howToUse: [
      "Level the ground and lay the protective mat",
      "Assemble the GI mesh frame and lock the connectors",
      "Fit the tank liner and secure the top rope",
      "Connect the drainage pipe to your waste management system"
    ],
    specifications: {
      "Fabric": "PVC Coated Polyester",
      "Thickness": "1.0mm",
      "Frame": "Hot Dip Galvanized Steel",
      "Drainage": "Standard 2-inch PVC"
    },
    relatedProducts: ["aerators", "fish-feed", "water-testing-kits", "gi-pipes"],
    unsplashKeyword: "fish tank"
  },
  {
    id: "pond-liners",
    category: "aquaculture",
    categoryName: "Aquaculture Products",
    name: "HDPE Waterproof Pond Liner",
    description: "Premium black HDPE liners for seepage-proof reservoirs and aquaculture ponds.",
    features: [
      "Puncture resistant and highly flexible",
      "Tested for 10-year UV stability",
      "Non-toxic and fish-safe material",
      "Custom sizes available for large reservoirs"
    ],
    packSizes: ["100sqm Roll", "500sqm Roll", "Custom Size"],
    pricing: { retail: 45, wholesale: 38, bulk: 32 },
    tabDescription: "Water retention is the foundation of pond farming. Our HDPE liners prevent the loss of water and expensive fertilizers via seepage. They are easy to clean and maintain, providing a hygienic environment that significantly reduces the risk of soil-borne diseases in your fish or shrimp.",
    howToUse: [
      "Remove sharp rocks and level the pond bed",
      "Overlap sheets by 6 inches for welding",
      "Use professional extrusion welding for seams",
      "Secure the edges in an anchor trench at the top"
    ],
    specifications: {
      "GSM": "500 / 750 / 1000",
      "Material": "High-Density Polyethylene",
      "Elongation": "600%",
      "Color": "Jet Black"
    },
    relatedProducts: ["biofloc-tanks", "water-pumps", "irrigation-pipes", "solar-pumps"],
    unsplashKeyword: "pond liner"
  },
  {
    id: "water-testing-kits",
    category: "aquaculture",
    categoryName: "Aquaculture Products",
    name: "Professional Multiparameter Water Kit",
    description: "Comprehensive testing kit for Ammonia, pH, Nitrite, Nitrate, and Alkalinity.",
    features: [
      "High accuracy field reagents",
      "Color-coded comparison charts for easy reading",
      "Compact carry case for farm-gate testing",
      "Results in less than 5 minutes"
    ],
    packSizes: ["Individual Parameter", "Master Kit (5 in 1)", "Refill Packs"],
    pricing: { retail: 1850, wholesale: 1600, bulk: 1350 },
    tabDescription: "In aquaculture, you aren't farming fish; you are farming water. Ammonia spikes are the silent killers of intensive biofloc and pond systems. Our testing kit empowers farmers to monitor water chemistry daily and take corrective actions like water exchange or molasses addition before heavy losses occur.",
    howToUse: [
      "Collect 5ml water sample in the test vial",
      "Add the specified number of drops of reagent",
      "Shake gently and wait for the color to develop",
      "Compare against the master chart provided"
    ],
    specifications: {
      "Parameters": "Ammonia, pH, NO2, NO3, GH/KH",
      "Tests per Kit": "50+ Tests",
      "Detection Limit": "0.1 ppm (Ammonia)",
      "Certification": "Standard Grade"
    },
    relatedProducts: ["fish-medicines", "biofloc-tanks", "fish-feed", "microscope"],
    unsplashKeyword: "water test"
  },
  {
    id: "fish-medicines",
    category: "aquaculture",
    categoryName: "Aquaculture Products",
    name: "Aquatic Health Support Pack",
    description: "Essential collection of probiotics, sanitizers, and growth promoters for fish health.",
    features: [
      "Broad-spectrum control against fin-rot and gill-rot",
      "Gut-acting probiotics for better digestion",
      "Instant water sanitizers to reduce microbial load",
      "Vitamins for stress reduction during transport"
    ],
    packSizes: ["250g Pouch", "500ml Liquid", "5kg Economy Pack"],
    pricing: { retail: 450, wholesale: 380, bulk: 320 },
    tabDescription: "Preventive health is better than curative treatment in a tank. Our aquatic healh range includes 'Aqua-Pure' sanitizers and 'Gut-Pro' feed additives that build the immunity of your stock. These are formulated to be safe for the biofloc bacteria while targeting harmful opportunistic pathogens.",
    howToUse: [
      "Mix growth promoters with feed using a binder",
      "Dissolve sanitizers in water and spread evenly",
      "Maintain a quarantine tank for new arrivals",
      "Do not overdose; follow specific parameter alerts"
    ],
    specifications: {
      "Type": "Probiotic/Antiseptic",
      "Residue Area": "Zero in Flesh",
      "Target": "Commercial Fish/Shrimp",
      "Storage": "Cool & Dark"
    },
    relatedProducts: ["water-testing-kits", "fish-feed", "aerators", "bio-pesticides"],
    unsplashKeyword: "fish medicine"
  },

  // LIVESTOCK PRODUCTS (5)
  {
    id: "goat-feed",
    category: "livestock",
    categoryName: "Livestock Products",
    name: "Standard Goat Grow Pellets",
    description: "High-fiber, protein-rich concentrated feed for weight gain in stall-fed goats.",
    features: [
      "Balanced energy-protein ratio",
      "Includes bypass protein for better growth",
      "Dust-free crumble form prevents respiratory issues",
      "Rich in calcium and phosphorus for bone strength"
    ],
    packSizes: ["25kg Bag", "50kg Bag", "Bulk Shipment"],
    pricing: { retail: 1200, wholesale: 1050, bulk: 920 },
    tabDescription: "Our goat feed is formulated for intensive stall-fed (Zero grazing) systems. It contains the perfect mix of de-oiled rice bran, maize, and pulse husks, fortified with mineral mixtures. Regular use ensures a weight gain of 3-4kg per month in growing kids, maximizing your farm's productivity.",
    howToUse: [
      "Start with 50g per day and increase slowly",
      "Feed 200g - 500g based on age and weight",
      "Ensure availability of fresh drinking water",
      "Combine with 60% green fodder for best digestion"
    ],
    specifications: {
      "Crude Protein": "16-18%",
      "Crude Fiber": "12%",
      "Metabolic Energy": "2400 Kcal/kg",
      "Moisture": "10%"
    },
    relatedProducts: ["mineral-mixtures", "livestock-medicines", "livestock-equipment", "goat-farm-setup"],
    unsplashKeyword: "goat feed"
  },
  {
    id: "cattle-feed",
    category: "livestock",
    categoryName: "Livestock Products",
    name: "High-Fat Dairy Cattle Feed",
    description: "Balanced cattle feed pellets designed to increase milk yield and fat content (SNF).",
    features: [
      "Promotes rumen health with natural buffers",
      "Increases milk production by 1-2 liters",
      "Prevents metabolic disorders like ketosis",
      "Highly palatable molasses-enriched pellets"
    ],
    packSizes: ["40kg Bag", "50kg Bag", "Direct Silo Loading"],
    pricing: { retail: 1450, wholesale: 1280, bulk: 1100 },
    tabDescription: "IGO's dairy pellets are a complete nutritional package for high-yielding cross-bred cows and buffaloes. It provides the high energy required for lactation without depleting the cow's body reserves. It specifically targets the improvement of 'milk fat' and 'solids-not-fat' (SNF), ensuring better dairy collection prices.",
    howToUse: [
      "Feed 1kg for every 2 liters of milk produced",
      "Maintain a 1:3 ratio of concentrate vs dry matter",
      "Best fed during milking time",
      "Allow cows free access to salt licks"
    ],
    specifications: {
      "TDN": "70-72%",
      "Bypass Protein": "Yes",
      "Urea Content": "Nil",
      "Additives": "Enzymes & Probiotics"
    },
    relatedProducts: ["mineral-mixtures", "livestock-medicines", "dairy-farm-setup", "milk-can"],
    unsplashKeyword: "cattle feed"
  },
  {
    id: "mineral-mixtures",
    category: "livestock",
    categoryName: "Livestock Products",
    name: "Chelated Livestock Mineral Mix",
    description: "Fortified supplement with Vitamins A, D3, E and essential trace minerals.",
    features: [
      "Improves conception rates and fertility",
      "Shortens the calving interval",
      "Prevents milk fever and rickets",
      "Strengthens the immune system against FMD"
    ],
    packSizes: ["1kg Pouch", "5kg Bucket", "25kg Drum"],
    pricing: { retail: 280, wholesale: 240, bulk: 210 },
    tabDescription: "Minerals are the 'micro-managers' of animal health. A lack of Phosphorus or Vitamin E can lead to silent heat and reproductive failure. Our chelated formula ensures 3x better absorption compared to standard oxide-based mixtures. A small daily dose is the cheapest insurance for your farm capital.",
    howToUse: [
      "30-40g per day for large animals (Cows/Buffaloes)",
      "10-15g per day for small animals (Goats/Sheep)",
      "Mix thoroughly with the concentrate feed",
      "Store in a dry place to avoid clumping"
    ],
    specifications: {
      "Calcium": "24%",
      "Phosphorus": "12%",
      "Magnesium": "5.0%",
      "Vitamin A": "7,00,000 IU/kg"
    },
    relatedProducts: ["goat-feed", "cattle-feed", "livestock-medicines", "syringes"],
    unsplashKeyword: "minerals"
  },
  {
    id: "livestock-medicines",
    category: "livestock",
    categoryName: "Livestock Products",
    name: "Essential Vet Care Kit",
    description: "A selection of dewormers, liver tonics, and topical ointments for farm first-aid.",
    features: [
      "Broad-spectrum dewormers for internal parasites",
      "Antiseptic sprays for wound management",
      "Digestive tonics to improve appetite",
      "Emergency electrolytes for dehydration"
    ],
    packSizes: ["Individual Items", "Basic Farm Kit", "Advanced Vet Kit"],
    pricing: { retail: 850, wholesale: 750, bulk: 650 },
    tabDescription: "Every professional farm must have a medical cabinet. Deworming every 3 months is mandatory for profitable livestock farming. Our medical range covers the basics that every shepherd or dairy farmer needs to handle before the vet arrives. These are selected for safety and proven efficacy in Indian farms.",
    howToUse: [
      "Follow veterinary advice for dosage",
      "Oral administration for tonics and dewormers",
      "Clean wounds with saline before applying sprays",
      "Observe withdrawal periods for milk/meat consumption"
    ],
    specifications: {
      "Classes": "Dewormer, Liver Tonic, Antiseptic",
      "Form": "Liquid / Spray / Bolus",
      "Shelf Life": "2-3 Years",
      "Certification": "Standard Veterinary Grade"
    },
    relatedProducts: ["livestock-equipment", "mineral-mixtures", "syringe", "disinfectants"],
    unsplashKeyword: "veterinary medicine"
  },
  {
    id: "livestock-equipment",
    category: "livestock",
    categoryName: "Livestock Products",
    name: "Modern Farm Utility Equipment",
    description: "High-durability feeders, automatic waterers, and animal marking tools.",
    features: [
      "Waste-preventing feeder designs",
      "Automatic nipple waterers for zero waste",
      "Corrosion resistant PVC and GI material",
      "Ergonomic handling for reduced animal stress"
    ],
    packSizes: ["Single Item", "Batch of 10", "Full Shed Setup"],
    pricing: { retail: 1200, wholesale: 1000, bulk: 850 },
    tabDescription: "Labor is the highest cost in livestock. Our automated waterers and smart feeders reduce cleaning time by 60% and prevent expensive feed wastage. From ear-tags for identification to heavy-duty mats for dairy comfort, we provide the engineering that makes livestock farming a professional business.",
    howToUse: [
      "Fix waterers at the average shoulder height of animals",
      "Ensure feeders are cleaned daily to prevent fungal growth",
      "Install flooring mats on a sloped concrete base",
      "Regularly disinfect all equipment using biosecurity protocols"
    ],
    specifications: {
      "Material": "SS-304 / Virgin HDPE",
      "Water Capacity": "2.5 Litre (Automatic)",
      "Feeder Type": "Linear/Round",
      "Mounting": "Wall/Floor"
    },
    relatedProducts: ["livestock-shed-construction", "cattle-feed", "medicines", "gi-pipes"],
    unsplashKeyword: "farm tools"
  },

  // FARM ENGINEERING PRODUCTS (15)
  {
    id: "polyhouse-sheets",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Premium UV-Stabilized Polyhouse Sheets",
    description: "Multi-layered, thermal-diffused 200-micron polyethylene sheets for protected cultivation.",
    features: [
      "Anti-drip and anti-dust additives",
      "85% light transmission with high diffusion",
      "Resistant to sulfur and chlorine chemicals",
      "5-year pro-rata warranty against UV degradation"
    ],
    packSizes: ["4.5m x 100m Roll", "5.5m x 100m Roll", "7m x 100m Roll"],
    pricing: { retail: 120, wholesale: 105, bulk: 92 },
    tabDescription: "The covering material is the most critical component of a polyhouse. Our sheets are manufactured using 7-layer co-extrusion technology, providing superior mechanical strength and optical properties. The thermal diffusion feature ensures that sunlight reaches even the lower leaves of the crop, preventing hotspots and promoting uniform growth.",
    howToUse: [
      "Install during early morning to avoid wind",
      "Ensure the 'Inside' and 'Outside' labels are correctly oriented",
      "Use high-quality aluminum profiles and zig-zag wires for fixing",
      "Clean every 6 months with plain water to maintain light transmission"
    ],
    specifications: {
      "Thickness": "200 Micron",
      "Diffusion": "60-70%",
      "Light Transmission": "85%",
      "Antidrip": "Yes"
    },
    relatedProducts: ["shade-nets", "insect-nets", "gi-pipes", "aluminium-profile"],
    unsplashKeyword: "greenhouse plastic"
  },
  {
    id: "shade-nets",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "High-Density Mono-Tape Shade Nets",
    description: "UV-stabilized agro-nets for light intensity control and temperature reduction.",
    features: [
      "Made from 100% virgin HDPE material",
      "Uniform block-out percentages (35%, 50%, 75%, 90%)",
      "Tear-resistant lock-stitch construction",
      "Edges with eyelets for easy installation"
    ],
    packSizes: ["3m x 50m", "4m x 50m", "Custom Lengths"],
    pricing: { retail: 35, wholesale: 28, bulk: 22 },
    tabDescription: "Shade nets are essential for raising nurseries and growing leafy greens in tropical India. Our mono-tape technology provides higher tensile strength than standard tape nets. They act as a barrier against heavy rain and hail while maintaining a 5-8 degree temperature difference, ensuring your plants don't wilt during peak summer.",
    howToUse: [
      "Select the shade percentage based on crop requirements",
      "Install on a GI or stone-post structure",
      "Maintain proper tension to avoid sagging",
      "Avoid contact with sharp edges to prevent tearing"
    ],
    specifications: {
      "Shade Factor": "50% / 75%",
      "Color": "Green / Black / White",
      "Weight": "120-160 GSM",
      "UV Life": "Min 3 Years"
    },
    relatedProducts: ["polyhouse-sheets", "insect-nets", "gi-pipes", "nursery-projects"],
    unsplashKeyword: "shade net"
  },
  {
    id: "insect-nets",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Anti-Virus 40/50 Mesh Insect Nets",
    description: "Precision-woven nets to prevent entry of thrips, aphids, and whiteflies into polyhouses.",
    features: [
      "High-tenacity UV stabilized monofilament",
      "Strict mesh consistency for guaranteed exclusion",
      "Allows excellent ventilation while blocking pests",
      "Resistant to chemicals and easy to wash"
    ],
    packSizes: ["2.5m x 100m", "3m x 100m", "Custom Widths"],
    pricing: { retail: 65, wholesale: 54, bulk: 45 },
    tabDescription: "Viral diseases transmitted by chewing/sucking insects are a major threat to yield. Our insect nets are woven with such precision that they block even the smallest thrips without significantly reducing the airflow. This reduces the need for heavy pesticide sprays, leading to cleaner produce and higher market value.",
    howToUse: [
      "Seal all openings including doors and vents",
      "Use 40 mesh for general pests, 50 mesh for whitefly",
      "Inspect weekly for any small holes or tears",
      "Clean regularly to maintain air exchange"
    ],
    specifications: {
      "Mesh Size": "40 Mesh / 50 Mesh",
      "Hole Size": "0.4mm x 0.4mm",
      "Weight": "110 GSM",
      "Color": "Natural White"
    },
    relatedProducts: ["polyhouse-sheets", "shade-nets", "bio-pesticides", "yellow-sticky-traps"],
    unsplashKeyword: "insect mesh"
  },
  {
    id: "gi-pipes",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Hot-Dip Galvanized Structural Pipes",
    description: "High-grade B-Class GI pipes for long-lasting polyhouse and shed construction.",
    features: [
      "Uniform galvanization (min 300 GSM zinc coating)",
      "High tensile strength and easy to weld",
      "Pre-bent arches available for various polyhouse spans",
      "Corrosion-resistant in high humidity environments"
    ],
    packSizes: ["6m Standard Length", "Custom Pre-Bent Arches", "Bundle of 20"],
    pricing: { retail: 85, wholesale: 78, bulk: 72 },
    tabDescription: "The skeleton of your project defines its life. We provide YST-210 and YST-310 grade GI pipes that can withstand wind loads up to 120km/hr. Unlike local pipes, our hot-dip galvanization is done after the pipe is formed, ensuring that even the weld lines are protected from rust for decades.",
    howToUse: [
      "Use for structural columns, trusses, and purlins",
      "Concrete the base columns at least 3 feet deep",
      "Use cold-galvanizing spray on weld joints",
      "Consult our engineering team for load-bearing designs"
    ],
    specifications: {
      "OD Range": "32mm - 60mm",
      "Wall Thickness": "2.0mm - 3.2mm",
      "Coating": "Hot Dip Galvanized",
      "Grade": "IS-1239 / IS-1161"
    },
    relatedProducts: ["polyhouse-sheets", "shade-nets", "livestock-shed-construction", "clamps"],
    unsplashKeyword: "galvanized pipe"
  },
  {
    id: "nft-channels",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Food-Safe Hydroponic NFT Channels",
    description: "Specially designed white PVC channels for Nutrient Film Technique (NFT) systems.",
    features: [
      "100% Virgin Food-Grade PVC (Lead-free)",
      "UV stabilized for indoor and outdoor use",
      "Removable top lid for easy cleaning",
      "Optimized width-to-depth ratio for root health"
    ],
    packSizes: ["100mm x 50mm (Leafy)", "100mm x 100mm (Vine)", "Sample Kit"],
    pricing: { retail: 250, wholesale: 210, bulk: 180 },
    tabDescription: "NFT is the most popular soil-less method for lettuce and herbs. Our channels are white to reflect heat and keep the nutrient solution cool. The flat bottom ensures a thin film of water flows uniformly, providing the perfect balance of oxygen and nutrients to the roots. Built for industrial commercial farms.",
    howToUse: [
      "Install on a stand with a 1:40 slope",
      "Snap on the lids after placing net pots",
      "Flush with clean water between crop cycles",
      "Avoid using dark colored PVC pipes for NFT"
    ],
    specifications: {
      "Width": "100mm / 4 inch",
      "Depth": "50mm / 2 inch",
      "Thickness": "2.0mm",
      "Lid": "Removable with Pre-cut Holes"
    },
    relatedProducts: ["net-pots", "hydroponic-nutrients", "water-pumps", "nft-hydroponic-system"],
    unsplashKeyword: "hydroponic channel"
  },
  {
    id: "net-pots",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Heavy-Duty Recyclable Net Pots",
    description: "High-quality plastic mesh pots for NFT and DWC hydroponic systems.",
    features: [
      "Wide rim for stability in channel holes",
      "Large mesh openings for free root growth",
      "Compatible with clay-balls and coco-discs",
      "BPA-free and reusable for many seasons"
    ],
    packSizes: ["50pcs Bag", "500pcs Box", "5000pcs Master Carton"],
    pricing: { retail: 8, wholesale: 5, bulk: 3 },
    tabDescription: "Net pots hold your plant in place. Our design features reinforced rims that don't crack under the weight of a mature tomato or cucumber plant. The vertical mesh slits ensure that roots can exit the pot into the nutrient stream without being girdled or constricted.",
    howToUse: [
      "Place germinated seedling in the center",
      "Fill with expanded clay or rockwool for support",
      "Drop into the 2-inch or 3-inch hole of the NFT LID",
      "Wash and disinfect by soaking in hydrogen-peroxide"
    ],
    specifications: {
      "Diameter": "2 inch / 3 inch / 4 inch",
      "Material": "Virgin Polypropylene",
      "Color": "Black",
      "Bottom": "Open Mesh"
    },
    relatedProducts: ["nft-channels", "hydroponic-nutrients", "vegetable-seeds", "clay-pebbles"],
    unsplashKeyword: "net pot"
  },
  {
    id: "hydroponic-nutrients",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "IGO Hydro-Mix A & B (Commercial)",
    description: "Two-part specialized nutrient set for soil-less farming of leafy greens and berries.",
    features: [
      "Contains all 13 essential macro and micro nutrients",
      "Phosphate-Calcite separation via A & B tanks",
      "Fully chelated micronutrients for stable pH",
      "Optimized for NFT, DWC, and Dutch Bucket systems"
    ],
    packSizes: ["1 Litre Set", "5 Litre Set", "25 Litre Concentrate"],
    pricing: { retail: 850, wholesale: 720, bulk: 610 },
    tabDescription: "In hydroponics, the water is the soil. Our A&B mix follows the Howard Resh formula, adjusted for Indian water hardness. It prevents nutrient lockout and ensures your plants never face deficiency. Whether you're a hobbyist or a commercial farm owner, this mix provides repeatable, high-quality results.",
    howToUse: [
      "Dilute in equal proportions (e.g., 5ml A + 5ml B per liter)",
      "Never mix A and B concentrates directly",
      "Maintain EC (Conductivity) between 1.2 - 2.5",
      "Check pH daily and adjust to 5.8 - 6.2"
    ],
    specifications: {
      "Tank A": "Calcium & Iron",
      "Tank B": "NPK, Mag, Sulfur & Micros",
      "State": "Concentrated Liquid",
      "Grade": "Commercial Hydroponic"
    },
    relatedProducts: ["nft-channels", "water-testing-kits", "water-pumps", "grow-lights"],
    unsplashKeyword: "hydroponic liquid"
  },
  {
    id: "grow-lights",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Full Spectrum LED Grow Bars",
    description: "High-PPFD LED bars for indoor vertical farming and supplemental lighting.",
    features: [
      "Specific 450nm Blue and 660nm Red spectrum",
      "IP65 waterproof rating for humid greenhouses",
      "Low heat emission and 50,000-hour life",
      "Daisy-chain connection for large installations"
    ],
    packSizes: ["2ft Bar", "4ft Bar", "Grow Room Panel"],
    pricing: { retail: 3500, wholesale: 2900, bulk: 2450 },
    tabDescription: "Plants see light differently than humans. Our LED bars provide the exact photons required for photosynthesis without wasting energy on unusable wavelengths. This results in shorter crop cycles and thicker leaves. Essential for microgreens and indoor vertical farms where sunlight is unavailable.",
    howToUse: [
      "Mount 12-18 inches above the plant canopy",
      "Set timer for 12-16 hours per day",
      "Ensure proper ventilation around the LED drivers",
      "Regularly wipe the lens to maintain light intensity"
    ],
    specifications: {
      "Wattage": "40W / 65W",
      "Efficiency": "2.1 µmol/J",
      "Voltage": "220V AC",
      "Spectrum": "Targeted Grow Spectrum"
    },
    relatedProducts: ["vertical-farming-projects", "smart-grow-room", "nft-channels", "water-testing-kits"],
    unsplashKeyword: "grow lamp"
  },
  {
    id: "water-pumps",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "High-Pressure Fertigation Pumps",
    description: "Self-priming centrifugal pumps designed for drip and hydroponic irrigation.",
    features: [
      "Cast iron body with brass impeller",
      "Continuous duty S1 rated motor",
      "Low power consumption for high head pressure",
      "Compatible with liquid fertilizer injectors"
    ],
    packSizes: ["0.5 HP", "1.0 HP", "2.0 HP Industrial"],
    pricing: { retail: 4500, wholesale: 3800, bulk: 3200 },
    tabDescription: "Reliable water delivery is non-negotiable. Our pumps are selected for their ability to maintain constant pressure across large drip networks. This ensures that the last emitter in the row gets as much water as the first. Built for use with timer-based automation systems.",
    howToUse: [
      "Install on a dry, level concrete foundation",
      "Use a foot-valve to maintain prime in the suction line",
      "Connect to a 3-pin starter with voltage protection",
      "Check for leaks in the mechanical seal monthly"
    ],
    specifications: {
      "Max Head": "25 - 45 Meters",
      "Flow Rate": "30 - 150 LPM",
      "Inlet/Outlet": "25mm / 32mm",
      "Phase": "Single Phase 220V"
    },
    relatedProducts: ["drip-irrigation-systems", "solar-pumps", "irrigation-pipes", "liquid-fertilizers"],
    unsplashKeyword: "water pump"
  },
  {
    id: "drip-irrigation-systems",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Precision Inline Drip Kits",
    description: "Anti-clogging drip lateral systems for orchards and vegetable rows.",
    features: [
      "Pressure compensating (PC) emitters for hilly terrain",
      "UV resistant LDPE laterals (Class 2)",
      "Uniform discharge (2LPH or 4LPH)",
      "Includes filter and venturi for fertilization"
    ],
    packSizes: ["1 Acre Kit", "5 Acre Kit", "Custom Layout Roll"],
    pricing: { retail: 12500, wholesale: 11200, bulk: 9800 },
    tabDescription: "Drip irrigation is the most efficient way to grow. It delivers water directly to the root zone, reducing weed growth and saving 60% water. Our system includes a screen filter and a venturi injector, allowing you to feed your plants automatically twice a day with zero wastage.",
    howToUse: [
      "Lay main lines and connect sub-mains",
      "Punch holes and insert the 16mm drip laterals",
      "Flush the system before fitting the end-caps",
      "Clean the disk filter weekly to prevent clogging"
    ],
    specifications: {
      "Lateral Diameter": "16mm",
      "Emitter Spacing": "30cm - 60cm",
      "Max Pressure": "3.5 kg/cm2",
      "Life Expectancy": "5-7 Years"
    },
    relatedProducts: ["water-pumps", "irrigation-pipes", "water-testing-kits", "npk-fertilizers"],
    unsplashKeyword: "drip irrigation"
  },
  {
    id: "sprinklers",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Rotary Impact Sprinklers (Heavy Duty)",
    description: "Brass and polymer impact sprinklers for large-scale open cultivation.",
    features: [
      "Adjustable arc (30 to 360 degrees)",
      "20-30 meter throw radius",
      "Interchangeable nozzles for flow control",
      "Weighted arm for slow, uniform rotation"
    ],
    packSizes: ["Single Head", "Full Field Set", "Mini Sprinkler Kit"],
    pricing: { retail: 350, wholesale: 280, bulk: 210 },
    tabDescription: "For crops like pulses or groundnuts, overhead sprinkling provides the best coverage. Our impact sprinklers are made of high-quality brass to prevent rust and can throw water in a wide radius, simulating natural rain. This also helps in washing dust off the leaves, improving photosynthesis.",
    howToUse: [
      "Mount on a 1-meter riser pipe",
      "Overlap the spray circles by 10% for uniform coverage",
      "Spring tension can be adjusted for faster rotation",
      "Ensure sufficient pump pressure (min 2kg/cm2)"
    ],
    specifications: {
      "Radius": "12 - 18 Meters",
      "Flow": "1500 - 3000 LPH",
      "Material": "Brass / Polymer",
      "Connection": "3/4 inch Threded"
    },
    relatedProducts: ["irrigation-pipes", "water-pumps", "open-field-cultivation", "solar-pumps"],
    unsplashKeyword: "agriculture sprinkler"
  },
  {
    id: "irrigation-pipes",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Heavy-Duty HDPE Mainline Pipes",
    description: "IS-4984 certified high-density polyethylene pipes for pressurized water transport.",
    features: [
      "Flexible and lightweight for easy handling",
      "Chemical and UV resistant",
      "Can withstand high impact and ground pressure",
      "Heat-fusion or compression fitting capability"
    ],
    packSizes: ["63mm (6kg/cm2)", "75mm (6kg/cm2)", "90mm (6kg/cm2)"],
    pricing: { retail: 120, wholesale: 105, bulk: 92 },
    tabDescription: "Don't trust low-quality PVC for your underground mainlines. Our HDPE pipes are built for the harsh conditions of Indian farms. They won't crack during expansion or contraction and have a smooth inner surface that reduces friction loss, helping you save on pumping electricity costs.",
    howToUse: [
      "Bury at least 1.5 - 2 feet deep",
      "Avoid sharp bends; use standard elbows",
      "Use sand bedding in rocky soils",
      "Air-release valves should be installed at highest points"
    ],
    specifications: {
      "Material": "Virgin HDPE PE-100 Grade",
      "Pressure Rating": "PN-6 / PN-10",
      "Standard": "IS-4984 / ISO-4427",
      "Coils": "100 Meters"
    },
    relatedProducts: ["water-pumps", "drip-irrigation-systems", "sprinklers", "pond-liners"],
    unsplashKeyword: "black pipe"
  },
  {
    id: "solar-dryers",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Industrial Solar Tunnel Dryer",
    description: "Hygienic drying solution for vegetables, fruits, and spices using solar thermal energy.",
    features: [
      "Food-grade stainless steel trays",
      "UV stabilized polycarbonate covering",
      "Integrated solar fans for air circulation",
      "Protection from birds, rain, and dust"
    ],
    packSizes: ["50kg Capacity", "200kg Capacity", "Industrial Tunnel"],
    pricing: { retail: 45000, wholesale: 38000, bulk: 32000 },
    tabDescription: "Post-harvest loss is a major profit-killer. Our solar dryers allow you to dehydrate your produce hygienically, significantly increasing its shelf life and market value. Dry your chillies, turmeric, or herbal leaves in a fraction of the time compared to open sun drying while maintaining 100% nutrient quality.",
    howToUse: [
      "Place on a flat, sun-exposed area facing south",
      "Spread sliced produce evenly on the trays",
      "Keep the tunnel door closed to maintain heat",
      "Monitor temperature (should not exceed 65°C)"
    ],
    specifications: {
      "Covering": "6mm Polycarbonate",
      "Trays": "SS-304 Mesh",
      "Frame": "Anodized Aluminum",
      "Venting": "Solar DC Fans"
    },
    relatedProducts: ["medicinal-plants", "vegetable-seeds", "fruit-plants", "packhouse-construction"],
    unsplashKeyword: "solar dryer"
  },
  {
    id: "solar-pumps",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "High-Volume Solar Surface Pump",
    description: "DC brushless surface pump with high-efficiency PV panels for off-grid irrigation.",
    features: [
      "No electricity bills or fuel costs",
      "Maintenance-free brushless DC motor",
      "Automatic operation (Starts with sun, stops at dusk)",
      "High head capability for tank filling"
    ],
    packSizes: ["1 HP DC", "3 HP DC", "5 HP DC"],
    pricing: { retail: 65000, wholesale: 58000, bulk: 52000 },
    tabDescription: "Independence from the grid is the future of Indian farming. Our solar pump systems come with MNRE-approved components and high-efficiency mono-crystalline panels. Whether you need to lift water from a canal or a pond liner reservoir, our DC pumps deliver reliable water flow every sunny day.",
    howToUse: [
      "Install panels at a 15-degree angle facing south",
      "Keep the pump as close to the water source as possible",
      "Clean panels daily to maintain max power",
      "The controller must be kept in a shaded, ventilated box"
    ],
    specifications: {
      "Motor": "BLDC (Permanent Magnet)",
      "Solar Panels": "Mono-perc 330W/400W",
      "Controller": "MPPT High Efficiency",
      "Max Head": "30 - 60 Meters"
    },
    relatedProducts: ["water-pumps", "irrigation-pipes", "sprinklers", "solar-projects"],
    unsplashKeyword: "solar pump"
  },
  {
    id: "solar-fencing-systems",
    category: "farm-engineering",
    categoryName: "Farm Engineering Products",
    name: "Smart Solar Agri-Energizer (Fencing)",
    description: "Electronic perimeter protection for farms against wild boars and elephants.",
    features: [
      "High-voltage short pulses (non-lethal but effective)",
      "Solar charging with battery backup for 24/7 use",
      "Alarm siren for wire-cut or ground-fall events",
      "Weatherproof IP65 energizer housing"
    ],
    packSizes: ["5 Acre Unit", "10 Acre Unit", "Community Protection Set"],
    pricing: { retail: 18500, wholesale: 16200, bulk: 14500 },
    tabDescription: "Protect your hard-earned harvest from animal intrusion. Our solar energizers convert standard battery power into a high-voltage pulse that deters animals without harming them. It's the most humane and effective way to secure large crop areas or livestock paddocks in forest-border regions.",
    howToUse: [
      "Install GI fence wires with high-quality insulators",
      "Ensure proper grounding (earthing) for the system",
      "Keep the fence line free of overgrown weeds",
      "Test the shock pulse weekly with long-range tester"
    ],
    specifications: {
      "Output Voltage": "8.5 KV - 10 KV",
      "Stored Energy": "3.5 Joules",
      "Battery": "12V 26AH/40AH",
      "Panel": "20W - 40W Solar"
    },
    relatedProducts: ["livestock-projects", "gi-pipes", "open-field-cultivation", "solar-dryers"],
    unsplashKeyword: "electric fence"
  }
];
