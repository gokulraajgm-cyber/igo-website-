import { Building, Globe, Shield, Activity, GraduationCap, Leaf } from "lucide-react";

export interface Brand {
  id: string;
  name: string;
  description?: string;
  image?: string;
}

export interface Division {
  id: string;
  name: string;
  icon: any;
  description: string;
  brands: Brand[];
}

export const directoryData: Division[] = [
  {
    id: "core-agri-production",
    name: "01 Core Agri Production",
    icon: Leaf,
    description: "The foundation of our agricultural operations, focused on primary food production and farming infrastructure.",
    brands: [
      { id: "igo-agritech-farms", name: "01 IGO Agritech Farms" },
      { id: "igo-farm-land-estates", name: "02 IGO Farm Land Estates" },
      { id: "igo-farm-factories", name: "03 IGO Farm Factories" },
      { id: "igo-nursery", name: "04 IGO Nursery" },
      { id: "farmers-factory", name: "05 Farmers Factory" }
    ]
  },
  {
    id: "market-commerce",
    name: "02 Market & Commerce",
    icon: Globe,
    description: "Bridging the gap between the farm and the global market with efficient B2B and B2C channels.",
    brands: [
      { id: "igo-agrimart", name: "06 IGO Agrimart" },
      { id: "igo-mart", name: "07 IGO Mart" },
      { id: "igo-farmgate-mandi", name: "08 IGO Farmgate Mandi" },
      { id: "igo-imports-exports", name: "09 IGO Imports & Exports" }
    ]
  },
  {
    id: "consumer-brands",
    name: "03 Consumer Brands",
    icon: Building,
    description: "Direct-to-consumer lifestyle and health brands offering premium, organic, and ethically sourced products.",
    brands: [
      { id: "palm-cafe", name: "10 Palm Cafe" },
      { id: "protein-cuts", name: "11 Protein Cuts" },
      { id: "igo-organic-pharmacy", name: "12 IGO Organic Pharmacy" },
      { id: "igo-natural-cosmetics", name: "13 IGO Natural Cosmetics" },
      { id: "india-green", name: "14 India Green" },
      { id: "india-green-organics", name: "15 India Green Organics" },
      { id: "valluvam", name: "16 Valluvam" }
    ]
  },
  {
    id: "financial-growth",
    name: "04 Financial & Growth",
    icon: Shield,
    description: "Empowering agricultural entrepreneurs through robust financial, investment, and franchise models.",
    brands: [
      { id: "igo-fintech", name: "17 IGO Fintech" },
      { id: "igo-farm-loans-subsidy", name: "18 IGO Farm Loans, Subsidy & Grants" },
      { id: "igo-wealth-management", name: "19 IGO Wealth Management Services" },
      { id: "igo-franchise", name: "20 IGO Franchise" }
    ]
  },
  {
    id: "knowledge-technology",
    name: "05 Knowledge & Technology",
    icon: GraduationCap,
    description: "Advancing the frontier of agritech through world-class engineering, automation, and education.",
    brands: [
      { id: "igo-farm-automation", name: "21 IGO Farm Automation" },
      { id: "igo-training-courses", name: "22 IGO Training Courses" },
      { id: "tech-farming-expert", name: "23 Tech Farming Expert" },
      { id: "igo-tech-farming-scientists", name: "24 IGO Tech Farming Scientists Foundation" }
    ]
  },
  {
    id: "sustainability-inputs",
    name: "06 Sustainability & Inputs",
    icon: Activity,
    description: "Safeguarding the earth and maximizing yields with sustainable crop care and renewable energy.",
    brands: [
      { id: "igo-green-energy", name: "25 IGO Green Energy" },
      { id: "igo-crop-care", name: "26 IGO Crop Care" }
    ]
  }
];
