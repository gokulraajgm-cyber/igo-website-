-- 1. Create the products table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    category TEXT NOT NULL,
    subcategory TEXT,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT,
    full_content TEXT,
    cover_url TEXT,
    gallery_urls TEXT[],
    price NUMERIC,
    price_label TEXT,
    tags TEXT[],
    is_featured BOOLEAN DEFAULT false,
    status TEXT DEFAULT 'active',
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_by UUID
);

-- 2. Optional: Allow public read access to the products table
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'products' AND policyname = 'Allow public read access to products'
    ) THEN
        CREATE POLICY "Allow public read access to products" ON public.products
            FOR SELECT
            TO public
            USING (true);
    END IF;
END
$$;

-- 3. Clear existing data to avoid duplicates when re-running
TRUNCATE TABLE public.products;

-- 4. Insert exact required products with highly realistic image URLs and realistic Indian Market Prices
INSERT INTO public.products (id, category, subcategory, name, slug, description, price, price_label, status, is_featured, cover_url, sort_order) VALUES
-- Agri Farming Products (18 products)
(gen_random_uuid(), 'Agri Farming Products', 'Seeds & Plants', 'Vegetable Seeds', 'vegetable-seeds', 'High-germination commercial vegetable seeds suitable for heavy crop yields.', 250, 'per packet', 'active', true, '/assets/products/product_vegetable_seeds_1773126052340.png', 10),
(gen_random_uuid(), 'Agri Farming Products', 'Seeds & Plants', 'Fruit Plants', 'fruit-plants', 'Healthy, disease-resistant fruit plant saplings ready for transplanting.', 180, 'per sapling', 'active', false, '/assets/products/product_fruit_plants_1773126072148.png', 11),
(gen_random_uuid(), 'Agri Farming Products', 'Seeds & Plants', 'Flower Seeds', 'flower-seeds', 'Premium commercial flower seeds for floriculture yielding vibrant blooms.', 350, 'per 100g', 'active', false, '/assets/products/product_flower_seeds_1773126088626.png', 12),
(gen_random_uuid(), 'Agri Farming Products', 'Seeds & Plants', 'Medicinal Plants', 'medicinal-plants', 'Verified nursery seedlings for high-value medicinal crop cultivation.', 80, 'per seedling', 'active', true, '/assets/products/product_medicinal_plants_1773126105976.png', 13),
(gen_random_uuid(), 'Agri Farming Products', 'Fertilizers', 'NPK Fertilizers', 'npk-fertilizers', 'Essential agricultural macronutrients for rapid plant and root growth.', 1400, 'per 50kg bag', 'active', true, '/assets/products/product_npk_fertilizer_1773126123240.png', 14),
(gen_random_uuid(), 'Agri Farming Products', 'Fertilizers', 'Organic Fertilizers', 'organic-fertilizers', '100% natural organic compost to dramatically improve local soil health.', 400, 'per 25kg bag', 'active', false, '/assets/products/product_organic_fertilizer_1773126139785.png', 15),
(gen_random_uuid(), 'Agri Farming Products', 'Fertilizers', 'Liquid Fertilizers', 'liquid-fertilizers', 'Quick-absorbing liquid nutrients tailored for efficient drip irrigation.', 850, 'per 5 Liters', 'active', false, '/assets/products/product_liquid_fertilizer_1773126157337.png', 16),
(gen_random_uuid(), 'Agri Farming Products', 'Fertilizers', 'Micronutrients', 'micronutrients', 'Highly soluble trace minerals that instantly curé crop deficiencies.', 600, 'per 1kg pouch', 'active', false, '/assets/products/product_micronutrients_1773126173707.png', 17),
(gen_random_uuid(), 'Agri Farming Products', 'Bio Fertilizers', 'Azospirillum', 'azospirillum', 'Nitrogen-fixing organic bio-fertilizer promoting eco-friendly farming.', 300, 'per Liter', 'active', true, '/assets/products/product_azospirillum_1773126188809.png', 18),
(gen_random_uuid(), 'Agri Farming Products', 'Bio Fertilizers', 'Phosphate Solubilizing Bacteria', 'psb', 'Agri-culture biology that dissolves phosphorus for immediate root access.', 350, 'per Liter', 'active', false, '/assets/products/product_psb_fertilizer_1773126205348.png', 19),
(gen_random_uuid(), 'Agri Farming Products', 'Bio Fertilizers', 'Mycorrhiza', 'mycorrhiza', 'Beneficial fungi formula expanding root volume to enhance water uptake.', 500, 'per 500g', 'active', true, '/assets/products/product_mycorrhiza_1773126231621.png', 20),
(gen_random_uuid(), 'Agri Farming Products', 'Plant Supplements', 'Humic Acid', 'humic-acid', 'Potent soil-conditioning acid extract that chelates heavy soil nutrients.', 700, 'per Liter', 'active', false, '/assets/products/product_humic_acid_1773126246789.png', 21),
(gen_random_uuid(), 'Agri Farming Products', 'Plant Supplements', 'Fulvic Acid', 'fulvic-acid', 'Premium foliar spray component transporting minerals instantly to cells.', 900, 'per Liter', 'active', false, '/assets/products/product_fulvic_acid_1773126265049.png', 22),
(gen_random_uuid(), 'Agri Farming Products', 'Plant Supplements', 'Amino Acid Nutrients', 'amino-acid', 'Stress-reducing plant power boosting extreme flowering and fruiting.', 850, 'per Liter', 'active', true, '/assets/products/product_amino_acid_1773126282168.png', 23),
(gen_random_uuid(), 'Agri Farming Products', 'Crop Protection', 'Insecticides', 'insecticides', 'Broad-spectrum commercial protection against heavy farm pest infestations.', 1200, 'per Liter', 'active', true, '/assets/products/product_insecticides_1773126298190.png', 24),
(gen_random_uuid(), 'Agri Farming Products', 'Crop Protection', 'Fungicides', 'fungicides', 'Advanced systemic fungal control securing crop safety and harvest yields.', 1350, 'per Liter', 'active', false, '/assets/products/product_fungicides_1773126316657.png', 25),
(gen_random_uuid(), 'Agri Farming Products', 'Crop Protection', 'Herbicides', 'herbicides', 'Clean, efficient weed-management formulations for massive open fields.', 950, 'per Liter', 'active', false, '/assets/products/product_herbicides_1773126334052.png', 26),
(gen_random_uuid(), 'Agri Farming Products', 'Crop Protection', 'Bio Pesticides', 'bio-pesticides', 'Organic-certified defensive botanical extracts keeping plants perfectly safe.', 1600, 'per Liter', 'active', true, 'https://images.unsplash.com/photo-1627914848507-2aeab145ceb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 27),

-- Aquaculture Products (6 products)
(gen_random_uuid(), 'Aquaculture Products', NULL, 'Fish Feed', 'fish-feed', 'High-protein floating feed pellets maximizing quick fish weight gain.', 1800, 'per 25kg bag', 'active', true, 'https://images.unsplash.com/photo-1596765798083-2fdb30cfdfb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 30),
(gen_random_uuid(), 'Aquaculture Products', NULL, 'Aerators', 'aerators', 'Vigorous oxygen-infusing mechanical paddle wheels for active pond aeration.', 26000, 'per unit', 'active', true, 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 31),
(gen_random_uuid(), 'Aquaculture Products', NULL, 'Biofloc Tanks', 'biofloc-tanks', 'Thick UV-protected PVC tarpaulins perfectly welded for Biofloc aquaculture.', 12500, 'per tank liner', 'active', false, 'https://images.unsplash.com/photo-1623912197177-80be4cc31238?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 32),
(gen_random_uuid(), 'Aquaculture Products', NULL, 'Pond Liners', 'pond-liners', 'Industrial-strength 500-micron HDPE sheeting preventing pond water seepage.', 145, 'per Sq.M', 'active', false, 'https://images.unsplash.com/photo-1534433726569-809ff473fc5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 33),
(gen_random_uuid(), 'Aquaculture Products', NULL, 'Water Testing Kits', 'water-testing-kits', 'Multiparameter chemical testing laboratory kits analyzing vital tank ecology.', 2200, 'per kit', 'active', false, 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 34),
(gen_random_uuid(), 'Aquaculture Products', NULL, 'Fish Medicines', 'fish-medicines', 'Veterinary-certified aquaculture health blends protecting against bacterial infections.', 950, 'per 500g', 'active', false, 'https://images.unsplash.com/photo-1588636239452-97b76a08dcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 35),

-- Livestock Products (5 products)
(gen_random_uuid(), 'Livestock Products', NULL, 'Goat Feed', 'goat-feed', 'Nutritionally dense goat pellet mix encouraging faster commercial maturation.', 1450, 'per 50kg bag', 'active', true, 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 40),
(gen_random_uuid(), 'Livestock Products', NULL, 'Cattle Feed', 'cattle-feed', 'Advanced bypass-protein cattle feed formulated strictly to surge farm milk yields.', 1650, 'per 50kg bag', 'active', true, 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 41),
(gen_random_uuid(), 'Livestock Products', NULL, 'Mineral Mixtures', 'mineral-mixtures', 'VItal chelated animal trace minerals solidifying livestock skeletal integrity.', 850, 'per 5kg pack', 'active', false, 'https://images.unsplash.com/photo-1596765798083-2fdb30cfdfb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 42),
(gen_random_uuid(), 'Livestock Products', NULL, 'Livestock Medicines', 'livestock-medicines', 'Veterinary de-wormers and robust daily immune-boosting pharmaceutical arrays.', 600, 'per vial', 'active', false, 'https://images.unsplash.com/photo-1588636239452-97b76a08dcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 43),
(gen_random_uuid(), 'Livestock Products', NULL, 'Livestock Equipment', 'livestock-equipment', 'Indestructible mechanical automatic drinking and precision gravity feeding troughs.', 4200, 'per set', 'active', false, 'https://images.unsplash.com/photo-1554589255-bfa3bbfc158a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 44),

-- Farm Engineering Products (13 products)
(gen_random_uuid(), 'Farm Engineering Products', 'Greenhouse', 'Polyhouse Sheets', 'polyhouse-sheets', '200-micron robust UV-stabilized anti-drip plastic sheets securing greenhouse climates.', 70, 'per Sq.M', 'active', true, 'https://images.unsplash.com/photo-1591857177580-c20ecbe60882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 50),
(gen_random_uuid(), 'Farm Engineering Products', 'Greenhouse', 'Shade Nets', 'shade-nets', 'Premium 50-75% UV-blocked agricultural nylon shading nets preventing sunburn.', 40, 'per Sq.M', 'active', false, 'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 51),
(gen_random_uuid(), 'Farm Engineering Products', 'Greenhouse', 'Insect Nets', 'insect-nets', '40-mesh dense white net blocking disease-carrying insects from cultivated areas.', 50, 'per Sq.M', 'active', false, 'https://images.unsplash.com/photo-1591857177580-c20ecbe60882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 52),
(gen_random_uuid(), 'Farm Engineering Products', 'Structures', 'GI Pipes', 'gi-pipes', 'Rust-resistant heavy structural galvanized steel pipes constructing giant polyhouse frames.', 180, 'per Kg', 'active', false, 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 53),
(gen_random_uuid(), 'Farm Engineering Products', 'Hydroponics', 'NFT Channels', 'nft-channels', 'Rigid UPVC food-grade hydroponic channels optimizing shallow water nutrient farming.', 480, 'per 3 Meter', 'active', true, 'https://images.unsplash.com/photo-1558221849-0607ce7b90db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 54),
(gen_random_uuid(), 'Farm Engineering Products', 'Hydroponics', 'Net Pots', 'net-pots', 'Commercial durable plastic slotted net cups easily holding expanded clay pebbles.', 6, 'per piece', 'active', false, 'https://images.unsplash.com/photo-1558221849-0607ce7b90db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 55),
(gen_random_uuid(), 'Farm Engineering Products', 'Hydroponics', 'Hydroponic Nutrients', 'hydroponic-nutrients', 'Laboratory formulated two-part A+B perfectly balanced synthetic crop nutrient mixtures.', 1600, 'per 10L Set', 'active', true, 'https://images.unsplash.com/photo-1584478332152-ed8524cbce8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 56),
(gen_random_uuid(), 'Farm Engineering Products', 'Hydroponics', 'Grow Lights', 'grow-lights', 'Full-spectrum intense 100W agricultural LED matrix boards generating indoor photon energy.', 4800, 'per fixture', 'active', false, 'https://images.unsplash.com/photo-1558221849-0607ce7b90db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 57),
(gen_random_uuid(), 'Farm Engineering Products', 'Irrigation', 'Water Pumps', 'water-pumps', 'Submersible high-efficiency stainless steel agricultural borewell water extraction pumps.', 12500, 'per pump', 'active', true, 'https://images.unsplash.com/photo-1596541223130-5d56441b80bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 58),
(gen_random_uuid(), 'Farm Engineering Products', 'Irrigation', 'Drip Irrigation Systems', 'drip-irrigation', 'Fully engineered pressure-compensating precision farm-scale drip irrigation networks.', 28000, 'per acre', 'active', true, 'https://images.unsplash.com/photo-1563514258000-618d3f101235?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 59),
(gen_random_uuid(), 'Farm Engineering Products', 'Irrigation', 'Sprinklers', 'sprinklers', 'Broad-coverage high-pressure rotating impact sprinklers covering orchard canopies evenly.', 65, 'per unit', 'active', false, 'https://images.unsplash.com/photo-1563514258000-618d3f101235?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 60),
(gen_random_uuid(), 'Farm Engineering Products', 'Irrigation', 'Irrigation Pipes', 'irrigation-pipes', 'High-density 6kg/cm2 pressure PVC thick-wall farming distribution pipeline.', 550, 'per pipe', 'active', false, 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 61),
(gen_random_uuid(), 'Farm Engineering Products', 'Solar', 'Solar Dryers', 'solar-dryers', 'Zero-electricity thermal solar dehydration chambers precisely drying sensitive farm spices.', 42000, 'per chamber', 'active', true, 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 62);
