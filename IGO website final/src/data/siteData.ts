// Site-wide data for IGO Agritech Farms
import { 
  Tent, Droplets, Layers, TreeDeciduous, Carrot, Pill, Flower, 
  Leaf, Building, Sprout, Fish, Waves, RefreshCcw, Shield, 
  Scissors, Milk, Bird, Heart, Factory, Sun, Map,
  Briefcase, TrendingUp, CircleDollarSign, MapPin, Globe, Ruler,
  Settings, PenTool, Wrench, Hammer, MessageSquare, Box, Package,
  PencilRuler, Droplet, CloudRain, Cog, ThermometerSnowflake,
  FlaskConical, Beaker, Bug, Fan, Database, Syringe, AlignJustify,
  Lightbulb, Zap, Microscope, Activity, Tractor
} from "lucide-react";
export const companyInfo = {
  name: "IGO Agritech Farms",
  tagline: "India's Leading Agri Engineering & Agri Consulting Brand",
  logo: "https://www.igoagritechfarms.com/images/logo.png",
  vision: "To be the leading pan-India brand in precision agriculture, empowering farmers with innovative, sustainable engineering that maximizes ROI while nurturing the earth.",
  mission: "To win lifetime loyal customers across pan-India by farming every square meter of land/space using high-tech engineering, professional consulting, and smart livestock ecosystems.",
  description: "IGO Agritech Farms is a leading agricultural solutions provider that has made a significant impact in the industry. Over the years, the company has received numerous awards and recognition for its excellence in the field of agriculture.",
  phone: "+91 73977 89803",
  email: "bankingbackend.indiagreen@gmail.com",
  website: "https://www.igoagritechfarms.com",
  address: "No 17, Kovalan street, 2nd main road, Uthandi kanathur, Chennai 600119",
  whatsapp: "https://wa.me/917397789803",
  awards: [
    "MSME Awards 2024 - Best Agri-Consulting Brand",
    "SISI Award for Industrial Development",
    "Trade Award for Export Excellence",
    "Valluvam Award for Agricultural Excellence",
    "National Excellence Award",
    "Best Innovative Start-up Agri tech brand 2022"
  ],
  social: {
    facebook: "https://www.facebook.com/IGOAgriTechfarms/",
    twitter: "https://twitter.com/igoagritechfarm",
    instagram: "https://www.instagram.com/igoagritechfarms/",
    linkedin: "https://www.linkedin.com/company/igo-agritechfarms/mycompany/",
    youtube: "https://youtube.com/@IGOAgriTechfarms?si=mUSQdsTySbT5d3Jo",
  },
};

export const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Successful Projects", value: "1,000+" },
  { label: "Team Members", value: "2,000+" },
  { label: "Winning Awards", value: "75+" },
];

export const projects = [
  { id: "joint-venture", title: "IGO Joint Venture Projects", category: "Infrastructure", image: "/assets/projects/joint_venture_premium_1773750685382.png", description: "Strategic partnerships for large-scale agricultural infrastructure development." },
  { id: "floriculture", title: "IGO Floriculture Projects", category: "Specialized", image: "/assets/projects/floriculture_high_tech_1773750708446.png", description: "High-tech commercial flower cultivation systems with automated climate control." },
  { id: "horticulture", title: "IGO Horticulture Projects", category: "Specialized", image: "/assets/projects/horticulture_enterprise_1773750728597.png", description: "Industrial orchard management and fruit production systems." },
  { id: "microgreens", title: "IGO Microgreens Projects", category: "High-Tech", image: "/assets/projects/microgreens_lab_style_1773750748522.png", description: "Scientific indoor cultivation of nutrient-dense microgreens." },
  { id: "vertical-farming", title: "IGO Vertical Farming Projects", category: "High-Tech", image: "/assets/projects/vertical_farming_futuristic_1773750768705.png", description: "Futuristic multi-layer growing systems maximizing yield per square meter." },
  { id: "mushroom", title: "IGO Mushroom Farming Projects", category: "Specialized", image: "/assets/projects/mushroom_industrial_premium_1773750798076.png", description: "Climate-controlled mushroom production with medical-grade precision." },
  { id: "polyhouse", title: "IGO Polyhouse Farming Projects", category: "Engineering", image: "/assets/projects/polyhouse_premium_wide_1773750820281.png", description: "State-of-the-art protected cultivation structures for optimal growth." },
  { id: "hydroponic", title: "IGO Hydroponic Farming Projects", category: "Engineering", image: "/assets/projects/hydroponic_nft_enterprise_1773750839362.png", description: "Advanced soil-less cultivation systems using NFT and DWC technologies." },
  { id: "rooftop", title: "IGO Rooftop Projects", category: "Urban", image: "/assets/projects/rooftop_farming_corporate_1773750857107.png", description: "Transforming urban spaces into productive, sustainable green ecosystems." },
  { id: "pond-liner", title: "IGO Pond Liner Projects", category: "Engineering", image: "/assets/projects/pond_liner_engineering_1773750874112.png", description: "High-precision reservoir engineering and water management solutions." },
  { id: "multi-tier", title: "IGO Multi-tier Farming Projects", category: "High-Tech", image: "/assets/projects/multi_tier_farming_sleek_1773750910232.png", description: "Innovative multi-layer soil-based and soil-less farming systems." },
  { id: "solar", title: "IGO Solar Powered Projects", category: "Energy", image: "/assets/projects/solar_agri_premium_1773750927133.png", description: "Renewable energy integration for self-sustaining agricultural ecosystems." },
  { id: "nursery", title: "IGO Nursery Projects", category: "Specialized", image: "/assets/projects/nursery_modern_minimalist_1773750946194.png", description: "Industrial-scale plant propagation and tissue culture facilities." },
  { id: "net-house", title: "IGO Net-house Projects", category: "Infrastructure", image: "/assets/projects/net_house_premium_1773750966052.png", description: "Cost-effective insect-protected cultivation for a variety of crops." },
  { id: "open-cultivation", title: "IGO Open Cultivation Projects", category: "Precision", image: "/assets/projects/open_cultivation_precision_1773750986052.png", description: "Large-scale field cultivation optimized with precision irrigation." },
];

export const services = [
  {
    title: "Polyhouse Projects",
    description: "Controlled environment farming with precision climate management.",
    icon: Tent,
    image: "/assets/projects/polyhouse_premium_wide_1773750820281.png",
    path: "/projects/agri/polyhouse"
  },
  {
    title: "Training & Academy",
    description: "Expert-led workshops on high-tech farming and precision agri-ops.",
    icon: Microscope,
    image: "/assets/services/academy.png",
    path: "/courses"
  },
  {
    title: "IGO AgriMart",
    description: "Premium marketplace for high-quality seeds, fertilizers, and tools.",
    icon: Package,
    image: "/assets/services/mart.png",
    path: "/agrimart"
  },
  {
    title: "Hydroponics Projects",
    description: "NFT and DWC systems designed for maximum rapid growth.",
    icon: Droplets,
    image: "/assets/projects/hydroponic_nft_enterprise_1773750839362.png",
    path: "/projects/agri/hydroponic"
  },
  {
    title: "Open Cultivation Projects",
    description: "Tailored outdoors projects for high-value fruit and medicinal crops.",
    icon: Tractor,
    image: "/assets/projects/open_cultivation_precision_1773750986052.png",
    path: "/projects/agri-farming"
  },
  {
    title: "IGO AMC Service",
    description: "Dedicated partner in farm maintenance and reliable support.",
    icon: Settings,
    image: "/assets/projects/pond_liner_engineering_1773750874112.png",
    path: "/services/engineering/maintenance"
  },
  {
    title: "IGO Buyback Service",
    description: "Beacon of trust for farmers in agricultural buyback programs.",
    icon: Heart,
    image: "/assets/projects/joint_venture_premium_1773750685382.png",
    path: "/contact"
  },
  {
    title: "IGO Gardening",
    description: "Rooftop Garden Services designed to inspire sustainable lifestyles.",
    icon: Sprout,
    image: "/assets/projects/rooftop_farming_corporate_1773750857107.png",
    path: "/projects/urban/rooftop"
  },
];

export const blogPosts = [
  {
    id: "igo-agrimart-solutions",
    title: "IGO Agrimart: Your One-Stop Shop for Cutting-Edge Farming Solutions",
    excerpt: "In the world of modern agriculture, innovation and efficiency reign supreme. As farmers and cultivators continue to embrace advanced techniques...",
    date: "June 12, 2024",
    image: "https://www.igoagritechfarms.com/images/blog1.png",
    author: "IGO Admin",
    content: `<p>In the world of modern agriculture, innovation and efficiency reign supreme. As farmers and cultivators continue to embrace advanced techniques and technologies to improve yields and sustainability, the need for a reliable partner in agritech becomes increasingly critical.</p>`
  },
  {
    id: "campus-drive-success",
    title: "Campus Drive for AgriTech Careers: 200+ Students Selected",
    excerpt: "IGO Group proudly announces the success of its recent campus drive. We have selected over 200 talented students...",
    date: "February 24, 2024",
    image: "https://www.igoagritechfarms.com/images/blog7.webp",
    author: "IGO Careers",
    content: `<p>We have selected over 200 talented students for various roles within our organization. These students represent the vanguard of change in the agritech sector.</p>`
  },
  {
    id: "independence-day-2023",
    title: "Celebrating 77th Independence Day with Pride: Flag Hosting at IGO",
    excerpt: "Freedom is a gift that demands to be cherished. As a nation, we celebrate this precious gift every year...",
    date: "August 15, 2023",
    image: "https://www.igoagritechfarms.com/images/blog2.webp",
    author: "IGO News",
    content: `<p>Freedom is a gift that demands to be cherished, and as a nation, we celebrate this precious gift every year on Independence Day with immense pride and joy.</p>`
  }
];

export const products = [
  { id: "polyethylene-sheet", title: "Polyethylene Sheet", category: "Polyhouse Parts", description: "UV-stabilized professional-grade polyhouse covering.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: "zig-zag-wire", title: "Zig Zag Wire", category: "Polyhouse Parts", description: "Specialized wires for securing polyethylene sheets safely.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: "insect-net", title: "Insect Net", category: "Polyhouse Parts", description: "High-density UV protected nets for pest exclusion.", price: "Price on Request", image: "https://images.unsplash.com/photo-1505063364134-4f42786d123b" },
  { id: "shade-net", title: "Shade Net", category: "Polyhouse Parts", description: "Multi-layered nets for light and heat management.", price: "Price on Request", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc" },
  { id: "gutter", title: "Structural Gutter", category: "Polyhouse Parts", description: "Industrial-grade galvanized gutters for drainage.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837" },
  { id: "universal-joint", title: "Universal Joint", category: "Polyhouse Parts", description: "Heavy-duty joints for structural stability.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: "aluminium-profile", title: "Aluminium Profile", category: "Polyhouse Parts", description: "High-strength C-profiles for sheet locking.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: "screw-nuts-bolts", title: "Screw, Nuts & Bolts", category: "Polyhouse Parts", description: "Corrosion-resistant fasteners for polyhouse assembly.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: "clamps", title: "Clamps", category: "Polyhouse Parts", description: "Various structural clamps for tube connections.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: "teflon-tape", title: "Teflon Thread Tape", category: "Hydroponic Parts", description: "Professional grade sealing tape for plumbing.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: "upvc-solvent", title: "UPVC Solvent", category: "Hydroponic Parts", description: "High-strength adhesive for hydroponic pipe networks.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: "crop-net", title: "Crop Net", category: "Hydroponic Parts", description: "Support netting for climbing and heavy crops.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: "twine-rope", title: "Twine Rope", category: "Hydroponic Parts", description: "Trellising rope for vertical growing systems.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: "nft-channel-2", title: "NFT Channel (2 inch)", category: "Hydroponic Parts", description: "High-grade food-safe channels for NFT systems.", price: "Price on Request", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2" },
  { id: "nft-channel-3", title: "NFT Channel (3 inch)", category: "Hydroponic Parts", description: "Wider NFT channels for larger root systems.", price: "Price on Request", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2" },
  { id: "greenpro", title: "Greenpro Products", category: "Specialized", description: "Exclusive range of Greenpro agricultural inputs.", price: "Price on Request", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
];

export const courses = [
  { id: "polyhouse-training", title: "Polyhouse Training", duration: "5 Days", description: "Complete training on polyhouse construction, operation, and crop management. We focus on industrial-grade standards.", topics: ["Structure Design", "Climate Control", "Crop Selection", "Business Planning"] },
  { id: "hydroponics-training", title: "Hydroponics Training", duration: "5 Days", description: "Hands-on training in soilless farming techniques and commercial NFT/DWC system setup.", topics: ["System Setup", "Nutrient Management", "pH Balancing", "Commercial Operations"] },
  { id: "vertical-farming-training", title: "Vertical Farming Training", duration: "3 Days", description: "Mastering the physics of light and modular layer design for high-density urban agriculture.", topics: ["Layer Design", "LED Systems", "Automation", "Cost Analysis"] },
];

export const faqs = [
  { question: "What is open cultivation in agriculture?", answer: "Open cultivation refers to the traditional method of growing crops in open fields, where plants are directly sown in soil or transplanted, and rely on natural environmental conditions such as sunlight, rain, and wind for their growth and development." },
  { question: "What are the advantages of open cultivation?", answer: "Some advantages include lower initial setup costs compared to controlled environment methods, reliance on natural sunlight and rain reducing energy costs, large-scale production potential, and opportunity for natural pest control through ecosystem services." },
  { question: "How is irrigation managed in IGO Agritech Farms' projects?", answer: "IGO Agritech Farms uses different irrigation methods such as drip irrigation, sprinkler irrigation, or furrow irrigation, depending on crop type, soil type, and water availability. Efficient water conservation practices are implemented to optimize crop growth." },
  { question: "What training programs do you offer?", answer: "We offer comprehensive training in Polyhouse, Hydroponics, Vertical Farming, Mushroom Cultivation, Goat Farming, and Aquaculture. Each program includes hands-on practical sessions and business planning guidance." },
  { question: "Do you provide buyback services?", answer: "Yes, IGO Agritech Farms provides buyback services for project partners, ensuring stable income and market access for the produce grown using our technology and guidance." },
  { question: "What is the investment required for a polyhouse project?", answer: "The investment varies based on the size, location, and crop selection. Our team provides detailed project reports with cost analysis, ROI projections, and subsidy information tailored to your requirements." },
  { question: "Do you offer joint venture partnerships?", answer: "Yes, we offer joint venture models where investors can partner with us. We provide end-to-end management including technology, operations, marketing, and assured returns." },
  { question: "How can I enroll in a training course?", answer: "You can enroll through our website's course enquiry form, call us at +91 7397789803, or visit our facility in Chennai. We conduct regular batches and also offer customized training sessions." },
];

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      {
        label: "Agri Farming Projects",
        href: "/projects/agri",
        icon: "/assets/projects/agri_farming_new_icon.png",
        children: [
          {
            label: "Protected Farming Projects",
            href: "/projects/agri/protected",
            icon: Tent,
            children: [
              { label: "Naturally Ventilated Polyhouse", href: "/projects/agri/protected/naturally-ventilated" },
              { label: "Climate Controlled Polyhouse", href: "/projects/agri/protected/climate-controlled" },
              { label: "Polycarbonate Greenhouse", href: "/projects/agri/protected/polycarbonate" },
              { label: "Shade Net House", href: "/projects/agri/protected/shade-net" },
              { label: "Mist Chamber", href: "/projects/agri/protected/mist-chamber" },
            ]
          },
          {
            label: "Hydroponic Farming Projects",
            href: "/projects/agri/hydroponic",
            icon: Droplets,
            children: [
              { label: "NFT Hydroponic System", href: "/projects/agri/hydroponic/nft" },
              { label: "Deep Water Culture System", href: "/projects/agri/hydroponic/dwc" },
              { label: "Vertical Hydroponic Towers", href: "/projects/agri/hydroponic/towers" },
              { label: "Commercial Hydroponic Farms", href: "/projects/agri/hydroponic/commercial" },
              { label: "Indoor Hydroponic Units", href: "/projects/agri/hydroponic/indoor" },
            ]
          },
          {
            label: "Vertical Farming Projects",
            href: "/projects/agri/vertical",
            icon: Layers,
            children: [
              { label: "Indoor Vertical Farms", href: "/projects/agri/vertical/indoor" },
              { label: "Commercial Vertical Farming Units", href: "/projects/agri/vertical/commercial" },
              { label: "Smart Grow Room Systems", href: "/projects/agri/vertical/smart-grow" },
            ]
          },
          {
            label: "Open Field Cultivation Projects",
            href: "/projects/agri/open-field",
            icon: TreeDeciduous,
            children: [
              { label: "Dragon Fruit Plantation", href: "/projects/agri/open-field/dragon-fruit" },
              { label: "Guava Plantation", href: "/projects/agri/open-field/guava" },
              { label: "Mango Plantation", href: "/projects/agri/open-field/mango" },
              { label: "Papaya Plantation", href: "/projects/agri/open-field/papaya" },
              { label: "Fig Plantation", href: "/projects/agri/open-field/fig" },
              { label: "Blueberry Plantation", href: "/projects/agri/open-field/blueberry" },
            ]
          },
          {
            label: "Vegetable Cultivation Projects",
            href: "/projects/agri/vegetable",
            icon: Carrot,
            children: [
              { label: "Cucumber Farming", href: "/projects/agri/vegetable/cucumber" },
              { label: "Capsicum Farming", href: "/projects/agri/vegetable/capsicum" },
              { label: "Tomato Farming", href: "/projects/agri/vegetable/tomato" },
              { label: "Chilli Farming", href: "/projects/agri/vegetable/chilli" },
              { label: "Muskmelon Farming", href: "/projects/agri/vegetable/muskmelon" },
              { label: "Watermelon Farming", href: "/projects/agri/vegetable/watermelon" },
            ]
          },
          {
            label: "Medicinal Crop Projects",
            href: "/projects/agri/medicinal",
            icon: Pill,
            children: [
              { label: "Aloe Vera Farming", href: "/projects/agri/medicinal/aloe-vera" },
              { label: "Moringa Plantation", href: "/projects/agri/medicinal/moringa" },
              { label: "Ginger Farming", href: "/projects/agri/medicinal/ginger" },
              { label: "Turmeric Farming", href: "/projects/agri/medicinal/turmeric" },
              { label: "Tapioca Cultivation", href: "/projects/agri/medicinal/tapioca" },
            ]
          },
          {
            label: "Floriculture Projects",
            href: "/projects/agri/floriculture",
            icon: Flower,
            children: [
              { label: "Rose Farming", href: "/projects/agri/floriculture/rose" },
              { label: "Jasmine Farming", href: "/projects/agri/floriculture/jasmine" },
              { label: "Marigold Farming", href: "/projects/agri/floriculture/marigold" },
              { label: "Exotic Flower Farming", href: "/projects/agri/floriculture/exotic" },
            ]
          },
          {
            label: "Mushroom Farming Projects",
            href: "/projects/agri/mushroom",
            icon: Leaf,
            children: [
              { label: "Oyster Mushroom Units", href: "/projects/agri/mushroom/oyster" },
              { label: "Button Mushroom Units", href: "/projects/agri/mushroom/button" },
              { label: "Commercial Mushroom Farms", href: "/projects/agri/mushroom/commercial" },
            ]
          },
          {
            label: "Urban Farming Projects",
            href: "/projects/agri/urban",
            icon: Building,
            children: [
              { label: "Rooftop Gardening Projects", href: "/projects/agri/urban/rooftop" },
              { label: "Terrace Farming Projects", href: "/projects/agri/urban/terrace" },
              { label: "Kitchen Garden Projects", href: "/projects/agri/urban/kitchen" },
              { label: "Microgreens Production Units", href: "/projects/agri/urban/microgreens" },
            ]
          },
          {
            label: "Nursery Projects",
            href: "/projects/agri/nursery",
            icon: Sprout,
            children: [
              { label: "Commercial Plant Nursery", href: "/projects/agri/nursery/commercial" },
              { label: "Seedling Production Units", href: "/projects/agri/nursery/seedling" },
              { label: "Tissue Culture Plant Nursery", href: "/projects/agri/nursery/tissue-culture" },
            ]
          }
        ]
      },
      {
        label: "Aquaculture Farming Projects",
        href: "/projects/aquaculture",
        icon: "/assets/projects/aquaculture_new_icon.png",
        children: [
          {
            label: "Fish Farming Projects",
            href: "/projects/aquaculture/fish",
            icon: Fish,
            children: [
              { label: "Traditional Fish Farming", href: "/projects/aquaculture/fish/traditional" },
              { label: "Intensive Fish Farming", href: "/projects/aquaculture/fish/intensive" },
              { label: "Cage Fish Farming", href: "/projects/aquaculture/fish/cage" },
            ]
          },
          {
            label: "Biofloc Farming Projects",
            href: "/projects/aquaculture/biofloc",
            icon: Waves,
            children: [
              { label: "Biofloc Fish Farming", href: "/projects/aquaculture/biofloc/fish" },
              { label: "Biofloc Shrimp Farming", href: "/projects/aquaculture/biofloc/shrimp" },
            ]
          },
          {
            label: "Shrimp Farming Projects",
            href: "/projects/aquaculture/shrimp",
            icon: Waves,
            children: [
              { label: "Vannamei Shrimp Farming", href: "/projects/aquaculture/shrimp/vannamei" },
              { label: "Freshwater Prawn Farming", href: "/projects/aquaculture/shrimp/prawn" },
            ]
          },
          {
            label: "Crab Farming Projects",
            href: "/projects/aquaculture/crab",
            icon: Waves,
            children: [
              { label: "Mud Crab Farming", href: "/projects/aquaculture/crab/mud-crab" },
            ]
          },
          {
            label: "Integrated Aquaculture",
            href: "/projects/aquaculture/integrated",
            icon: RefreshCcw,
            children: [
              { label: "Aquaponics Systems", href: "/projects/aquaculture/integrated/aquaponics" },
              { label: "Integrated Fish + Crop Farming", href: "/projects/aquaculture/integrated/fish-crop" },
            ]
          }
        ]
      },
      {
        label: "Livestock Farming Projects",
        href: "/projects/livestock",
        icon: "/assets/projects/livestock_new_icon.png",
        children: [
          {
            label: "Goat Farming",
            href: "/projects/livestock/goat",
            icon: Shield,
            children: [
              { label: "Commercial Goat Farming", href: "/projects/livestock/goat/commercial" },
              { label: "Integrated Goat Farming", href: "/projects/livestock/goat/integrated" },
            ]
          },
          {
            label: "Sheep Farming",
            href: "/projects/livestock/sheep",
            icon: Scissors,
            children: [
              { label: "Commercial Sheep Farming", href: "/projects/livestock/sheep/commercial" },
            ]
          },
          {
            label: "Dairy Farming",
            href: "/projects/livestock/dairy",
            icon: Milk,
            children: [
              { label: "Dairy Farm Setup", href: "/projects/livestock/dairy/setup" },
              { label: "Automated Dairy Systems", href: "/projects/livestock/dairy/automated" },
            ]
          },
          {
            label: "Poultry Farming",
            href: "/projects/livestock/poultry",
            icon: Bird,
            children: [
              { label: "Broiler Chicken Farms", href: "/projects/livestock/poultry/broiler" },
              { label: "Layer Chicken Farms", href: "/projects/livestock/poultry/layer" },
            ]
          },
          {
            label: "Integrated Livestock Farming",
            href: "/projects/livestock/integrated",
            icon: Heart,
            children: [
              { label: "Goat + Fish Farming", href: "/projects/livestock/integrated/goat-fish" },
              { label: "Dairy + Crop Farming", href: "/projects/livestock/integrated/dairy-crop" },
            ]
          }
        ]
      },
      {
        label: "Farm Engineering Projects",
        href: "/projects/engineering",
        icon: "/assets/projects/farm_engineering_new_icon.png",
        children: [
          {
            label: "Farm Infrastructure Projects",
            href: "/projects/engineering/infrastructure",
            icon: Factory,
            children: [
              { label: "Cold Storage", href: "/projects/engineering/infrastructure/cold-storage" },
              { label: "Pack House", href: "/projects/engineering/infrastructure/pack-house" },
              { label: "Farm Buildings", href: "/projects/engineering/infrastructure/buildings" },
              { label: "Farm Roads", href: "/projects/engineering/infrastructure/roads" },
            ]
          },
          {
            label: "Water Management Projects",
            href: "/projects/engineering/water",
            icon: Droplets,
            children: [
              { label: "Rainwater Harvesting", href: "/projects/engineering/water/rainwater" },
              { label: "Pond Liner Installation", href: "/projects/engineering/water/pond-liner" },
              { label: "Farm Irrigation Systems", href: "/projects/engineering/water/irrigation" },
              { label: "Borewell & Water Storage Systems", href: "/projects/engineering/water/borewell" },
            ]
          },
          {
            label: "Solar Agriculture Projects",
            href: "/projects/engineering/solar",
            icon: Sun,
            children: [
              { label: "Solar Crop Dryer", href: "/projects/engineering/solar/crop-dryer" },
              { label: "Solar Heater", href: "/projects/engineering/solar/heater" },
              { label: "Solar Fencing", href: "/projects/engineering/solar/fencing" },
              { label: "Solar Lighting", href: "/projects/engineering/solar/lighting" },
            ]
          },
          {
            label: "Farm Development Projects",
            href: "/projects/engineering/development",
            icon: Map,
            children: [
              { label: "Land Surveying", href: "/projects/engineering/development/surveying" },
              { label: "Topographic Mapping", href: "/projects/engineering/development/topographic" },
              { label: "Contour Mapping", href: "/projects/engineering/development/contour" },
              { label: "Land Leveling", href: "/projects/engineering/development/leveling" },
            ]
          }
        ]
      }
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Agri Farming Services",
        href: "/services/agri",
        icon: "/assets/projects/agri_farming.jpg",
        children: [
          {
            label: "Planning & Consulting",
            href: "/services/agri/planning",
            icon: Briefcase,
            children: [
              { label: "Farm Business Planning", href: "/services/agri/business-planning" },
              { label: "Agri Investment Consulting", href: "/services/agri/investment-consulting" },
              { label: "Crop Selection Consulting", href: "/services/agri/crop-selection" },
              { label: "Farm Layout Design", href: "/services/agri/layout-design" },
            ]
          },
          {
            label: "Setup & Installation",
            href: "/services/agri/installation",
            icon: Wrench,
            children: [
              { label: "Polyhouse Installation", href: "/services/agri/polyhouse" },
              { label: "Hydroponic Setup", href: "/services/agri/hydroponic" },
              { label: "Vertical Farming Setup", href: "/services/agri/vertical-farming" },
            ]
          }
        ]
      },
      {
        label: "Aquaculture Services",
        href: "/services/aquaculture",
        icon: "/assets/projects/aquaculture.jpg",
        children: [
          {
            label: "Setup & Construction",
            href: "/services/aquaculture/setup",
            icon: Waves,
            children: [
              { label: "Fish Farming Setup", href: "/services/aquaculture/fish-farming" },
              { label: "Biofloc Installation", href: "/services/aquaculture/biofloc" },
              { label: "Aquaculture Pond Construction", href: "/services/aquaculture/pond-construction" },
              { label: "Aquaponics Setup", href: "/services/aquaculture/aquaponics" },
            ]
          },
          {
            label: "Consulting Services",
            href: "/services/aquaculture/consulting-services",
            icon: MessageSquare,
            children: [
              { label: "Aquaculture Consulting", href: "/services/aquaculture/consulting" },
            ]
          }
        ]
      },
      {
        label: "Livestock Services",
        href: "/services/livestock",
        icon: "/assets/projects/livestock.jpg",
        children: [
          {
            label: "Farm Setup",
            href: "/services/livestock/setup",
            icon: Shield,
            children: [
              { label: "Goat Farm Setup", href: "/services/livestock/goat-farm" },
              { label: "Dairy Farm Setup", href: "/services/livestock/dairy-farm" },
              { label: "Sheep Farm Setup", href: "/services/livestock/sheep-farm" },
              { label: "Poultry Farm Setup", href: "/services/livestock/poultry-farm" },
            ]
          },
          {
            label: "Infrastructure",
            href: "/services/livestock/infrastructure",
            icon: Hammer,
            children: [
              { label: "Livestock Shed Construction", href: "/services/livestock/shed" },
            ]
          }
        ]
      },
      {
        label: "Farm Engineering Services",
        href: "/services/engineering",
        icon: "/assets/projects/farm_engineering.jpg",
        children: [
          {
            label: "Construction & Design",
            href: "/services/engineering/infrastructure",
            icon: Building,
            children: [
              { label: "Cold Storage Construction", href: "/services/engineering/cold-storage" },
              { label: "Packhouse Construction", href: "/services/engineering/packhouse" },
              { label: "Farm Building Design", href: "/services/engineering/building-design" },
            ]
          },
          {
            label: "Irrigation Systems",
            href: "/services/engineering/irrigation",
            icon: Droplet,
            children: [
              { label: "Drip Irrigation Installation", href: "/services/engineering/drip-irrigation" },
              { label: "Sprinkler Irrigation Systems", href: "/services/engineering/sprinkler" },
              { label: "Water Pump Systems", href: "/services/engineering/water-pump" },
            ]
          },
          {
            label: "Surveying & Mapping",
            href: "/services/engineering/surveying",
            icon: Map,
            children: [
              { label: "Land Surveying", href: "/services/engineering/land-survey" },
              { label: "GIS Mapping", href: "/services/engineering/gis-mapping" },
              { label: "Land Leveling", href: "/services/engineering/land-leveling" },
            ]
          },
          {
            label: "Maintenance & AMC",
            href: "/services/engineering/maintenance",
            icon: Settings,
            children: [
              { label: "Polyhouse AMC", href: "/services/engineering/polyhouse-amc" },
              { label: "Hydroponic System AMC", href: "/services/engineering/hydroponic-amc" },
              { label: "Farm Equipment Maintenance", href: "/services/engineering/equipment-maintenance" },
            ]
          }
        ]
      }
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Agri Farming Products",
        href: "/products/agri-farming",
        icon: "/assets/projects/agri_farming.jpg",
        children: [
          {
            label: "Seeds & Plants",
            href: "/products/agri-farming/seeds",
            icon: Sprout,
            children: [
              { label: "Vegetable Seeds", href: "/products/agri-farming/vegetable-seeds" },
              { label: "Fruit Plants", href: "/products/agri-farming/fruit-plants" },
              { label: "Flower Seeds", href: "/products/agri-farming/flower-seeds" },
              { label: "Medicinal Plants", href: "/products/agri-farming/medicinal-plants" },
            ]
          },
          {
            label: "Fertilizers & Nutrients",
            href: "/products/agri-farming/fertilizers",
            icon: FlaskConical,
            children: [
              { label: "NPK Fertilizers", href: "/products/agri-farming/npk-fertilizers" },
              { label: "Organic Fertilizers", href: "/products/agri-farming/organic-fertilizers" },
              { label: "Liquid Fertilizers", href: "/products/agri-farming/liquid-fertilizers" },
              { label: "Micronutrients", href: "/products/agri-farming/micronutrients" },
            ]
          },
          {
            label: "Bio-Fertilizers",
            href: "/products/agri-farming/bio",
            icon: Microscope,
            children: [
              { label: "Azospirillum", href: "/products/agri-farming/azospirillum" },
              { label: "Phosphate Solubilizing Bacteria", href: "/products/agri-farming/phosphate-solubilizing-bacteria" },
              { label: "Mycorrhiza", href: "/products/agri-farming/mycorrhiza" },
            ]
          },
          {
            label: "Plant Growth",
            href: "/products/agri-farming/growth",
            icon: TrendingUp,
            children: [
              { label: "Humic Acid", href: "/products/agri-farming/humic-acid" },
              { label: "Fulvic Acid", href: "/products/agri-farming/fulvic-acid" },
              { label: "Amino Acid Nutrients", href: "/products/agri-farming/amino-acid-nutrients" },
            ]
          },
          {
            label: "Crop Protection",
            href: "/products/agri-farming/protection",
            icon: Bug,
            children: [
              { label: "Insecticides", href: "/products/agri-farming/insecticides" },
              { label: "Fungicides", href: "/products/agri-farming/fungicides" },
              { label: "Herbicides", href: "/products/agri-farming/herbicides" },
              { label: "Bio Pesticides", href: "/products/agri-farming/bio-pesticides" },
            ]
          }
        ]
      },
      {
        label: "Aquaculture Products",
        href: "/products/aquaculture",
        icon: "/assets/projects/aquaculture.jpg",
        children: [
          {
            label: "Feed & Nutrition",
            href: "/products/aquaculture/feed",
            icon: Fish,
            children: [
              { label: "Fish Feed", href: "/products/aquaculture/fish-feed" },
            ]
          },
          {
            label: "Equipment & Tanks",
            href: "/products/aquaculture/equipment",
            icon: Database,
            children: [
              { label: "Aerators", href: "/products/aquaculture/aerators" },
              { label: "Biofloc Tanks", href: "/products/aquaculture/biofloc-tanks" },
              { label: "Pond Liners", href: "/products/aquaculture/pond-liners" },
            ]
          },
          {
            label: "Health Management",
            href: "/products/aquaculture/health",
            icon: Activity,
            children: [
              { label: "Water Testing Kits", href: "/products/aquaculture/water-testing-kits" },
              { label: "Fish Medicines", href: "/products/aquaculture/fish-medicines" },
            ]
          }
        ]
      },
      {
        label: "Livestock Products",
        href: "/products/livestock",
        icon: "/assets/projects/livestock.jpg",
        children: [
          {
            label: "Feed & Supplements",
            href: "/products/livestock/feed",
            icon: Leaf,
            children: [
              { label: "Goat Feed", href: "/products/livestock/goat-feed" },
              { label: "Cattle Feed", href: "/products/livestock/cattle-feed" },
              { label: "Mineral Mixtures", href: "/products/livestock/mineral-mixtures" },
            ]
          },
          {
            label: "Health Management",
            href: "/products/livestock/health",
            icon: Syringe,
            children: [
              { label: "Livestock Medicines", href: "/products/livestock/livestock-medicines" },
              { label: "Livestock Equipment", href: "/products/livestock/livestock-equipment" },
            ]
          }
        ]
      },
      {
        label: "Farm Engineering Products",
        href: "/products/farm-engineering",
        icon: "/assets/projects/farm_engineering.jpg",
        children: [
          {
            label: "Greenhouse & Structures",
            href: "/products/farm-engineering/structures",
            icon: Layers,
            children: [
              { label: "Polyhouse Sheets", href: "/products/farm-engineering/polyhouse-sheets" },
              { label: "Shade Nets", href: "/products/farm-engineering/shade-nets" },
              { label: "Insect Nets", href: "/products/farm-engineering/insect-nets" },
              { label: "GI Pipes", href: "/products/farm-engineering/gi-pipes" },
            ]
          },
          {
            label: "Hydroponic Systems",
            href: "/products/farm-engineering/hydroponics",
            icon: Box,
            children: [
              { label: "NFT Channels", href: "/products/farm-engineering/nft-channels" },
              { label: "Net Pots", href: "/products/farm-engineering/net-pots" },
              { label: "Hydroponic Nutrients", href: "/products/farm-engineering/hydroponic-nutrients" },
              { label: "Grow Lights", href: "/products/farm-engineering/grow-lights" },
            ]
          },
          {
            label: "Irrigation & Pumps",
            href: "/products/farm-engineering/irrigation",
            icon: CloudRain,
            children: [
              { label: "Water Pumps", href: "/products/farm-engineering/water-pumps" },
              { label: "Drip Irrigation Systems", href: "/products/farm-engineering/drip-irrigation-systems" },
              { label: "Sprinklers", href: "/products/farm-engineering/sprinklers" },
              { label: "Irrigation Pipes", href: "/products/farm-engineering/irrigation-pipes" },
            ]
          },
          {
            label: "Solar Solutions",
            href: "/products/farm-engineering/solar",
            icon: Sun,
            children: [
              { label: "Solar Dryers", href: "/products/farm-engineering/solar-dryers" },
              { label: "Solar Pumps", href: "/products/farm-engineering/solar-pumps" },
              { label: "Solar Fencing Systems", href: "/products/farm-engineering/solar-fencing-systems" },
            ]
          }
        ]
      }
    ]
  },
  { label: "Blog", href: "/blog", icon: "📰" },
  { label: "Careers", href: "/careers", icon: "💼" },
  { label: "Contact", href: "/contact", icon: "📞" },
  { label: "About", href: "/about", icon: "🏢" },
  { label: "IGO Academy", href: "/courses", icon: "🎓" },
];
