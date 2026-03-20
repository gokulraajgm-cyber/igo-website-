const fs = require('fs');
const path = require('path');

const targetFile = 'd:\\New folder\\IGO WEBSITE\\verdant-innovations-2\\src\\data\\catalogData.ts';
let content = fs.readFileSync(targetFile, 'utf8');

const replacements = {
  // Projects - Agri
  "name: 'Protected Farming Projects',": "name: 'Protected Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20greenhouse%20protected%20farming%20high%20quality%20photography%20agriculture?width=800&height=600&nologo=true&seed=42',",
  "name: 'Open Field Farming Projects',": "name: 'Open Field Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Vast%20open%20field%20farming%20tractor%20crops%20high%20quality%20photography%20agriculture?width=800&height=600&nologo=true&seed=43',",
  "name: 'Seed Production Projects',": "name: 'Seed Production Projects',\n        image: 'https://image.pollinations.ai/prompt/Agricultural%20seed%20production%20close%20up%20sprouts%20high%20quality%20photography?width=800&height=600&nologo=true&seed=44',",
  "name: 'Specialized Crop Projects',": "name: 'Specialized Crop Projects',\n        image: 'https://image.pollinations.ai/prompt/Specialized%20cash%20crops%20plantation%20high%20quality%20photography%20agriculture?width=800&height=600&nologo=true&seed=45',",

  // Projects - Aqua
  "name: 'Fish Farming Projects',": "name: 'Fish Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20fish%20farming%20ponds%20aerial%20view%20aquaculture?width=800&height=600&nologo=true&seed=46',",
  "name: 'Shrimp Farming Projects',": "name: 'Shrimp Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20shrimp%20farming%20aerators%20in%20pond%20aquaculture?width=800&height=600&nologo=true&seed=47',",
  "name: 'Biofloc Systems',": "name: 'Biofloc Systems',\n        image: 'https://image.pollinations.ai/prompt/Modern%20biofloc%20fish%20tanks%20indoor%20aquaculture%20system?width=800&height=600&nologo=true&seed=48',",
  "name: 'Aquaponics Projects',": "name: 'Aquaponics Projects',\n        image: 'https://image.pollinations.ai/prompt/Aquaponics%20system%20with%20plants%20and%20fish%20tanks%20commercial%20greenhouse?width=800&height=600&nologo=true&seed=49',",

  // Projects - Livestock
  "name: 'Goat and Sheep Farming Projects',": "name: 'Goat and Sheep Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20goat%20and%20sheep%20farming%20modern%20shed?width=800&height=600&nologo=true&seed=50',",
  "name: 'Dairy Farming Projects',": "name: 'Dairy Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Modern%20dairy%20cow%20farming%20facility%20clean%20cows?width=800&height=600&nologo=true&seed=51',",
  "name: 'Poultry Farming Projects',": "name: 'Poultry Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20poultry%20chicken%20farming%20modern%20facility?width=800&height=600&nologo=true&seed=52',",

  // Projects - Engineering
  "name: 'Greenhouse Construction',": "name: 'Greenhouse Construction',\n        image: 'https://image.pollinations.ai/prompt/Building%20commercial%20greenhouse%20steel%20structure%20agriculture?width=800&height=600&nologo=true&seed=53',",
  "name: 'Irrigation Systems',": "name: 'Irrigation Systems',\n        image: 'https://image.pollinations.ai/prompt/Modern%20drip%20irrigation%20system%20in%20agricultural%20field?width=800&height=600&nologo=true&seed=54',",
  "name: 'Farm Infrastructure',": "name: 'Farm Infrastructure',\n        image: 'https://image.pollinations.ai/prompt/Agricultural%20farm%20infrastructure%20silos%20and%20warehouses?width=800&height=600&nologo=true&seed=55',",
  "name: 'Solar Agriculture',": "name: 'Solar Agriculture',\n        image: 'https://image.pollinations.ai/prompt/Solar%20panels%20integrated%20with%20agricultural%20farming%20agrivoltaics?width=800&height=600&nologo=true&seed=56',",

  // Services - Agri
  "name: 'Farm Management',": "name: 'Farm Management',\n        image: 'https://image.pollinations.ai/prompt/Agronomist%20inspecting%20crops%20tablet%20farm%20management?width=800&height=600&nologo=true&seed=57',",
  "name: 'Soil and Water Testing',": "name: 'Soil and Water Testing',\n        image: 'https://image.pollinations.ai/prompt/Agricultural%20scientist%20testing%20soil%20and%20water%20laboratory?width=800&height=600&nologo=true&seed=58',",
  "name: 'Installation and Setup',": "name: 'Installation and Setup',\n        image: 'https://image.pollinations.ai/prompt/Engineers%20installing%20agricultural%20equipment%20greenhouse?width=800&height=600&nologo=true&seed=59',",

  // Services - Aqua
  "name: 'Farm Setup and Construction',": "name: 'Farm Setup and Construction',\n        image: 'https://image.pollinations.ai/prompt/Construction%20of%20large%20aquaculture%20fish%20farm%20ponds?width=800&height=600&nologo=true&seed=60',",
  "name: 'Consulting and Support',": "name: 'Consulting and Support',\n        image: 'https://image.pollinations.ai/prompt/Aquaculture%20expert%20consulting%20farmer%20near%20fish%20pond?width=800&height=600&nologo=true&seed=61',",

  // Services - Livestock
  "name: 'Farm Setup and Operations',": "name: 'Farm Setup and Operations',\n        image: 'https://image.pollinations.ai/prompt/Modern%20livestock%20farm%20operations%20feeding%20system?width=800&height=600&nologo=true&seed=62',",
  "name: 'Construction and Infrastructure',": "name: 'Construction and Infrastructure',\n        image: 'https://image.pollinations.ai/prompt/Building%20modern%20livestock%20barn%20infrastructure?width=800&height=600&nologo=true&seed=63',",

  // Services - Engineering
  "name: 'Civil and Construction',": "name: 'Civil and Construction',\n        image: 'https://image.pollinations.ai/prompt/Agricultural%20civil%20construction%20cold%20storage%20building?width=800&height=600&nologo=true&seed=64',",
  "name: 'Irrigation and Water',": "name: 'Irrigation and Water',\n        image: 'https://image.pollinations.ai/prompt/Large%20scale%20agricultural%20water%20pump%20and%20irrigation?width=800&height=600&nologo=true&seed=65',",
  "name: 'Land and Surveying',": "name: 'Land and Surveying',\n        image: 'https://image.pollinations.ai/prompt/Surveyors%20using%20equipment%20on%20agricultural%20land?width=800&height=600&nologo=true&seed=66',",
  "name: 'Maintenance and AMC',": "name: 'Maintenance and AMC',\n        image: 'https://image.pollinations.ai/prompt/Technician%20maintaining%20agricultural%20machinery%20tractor?width=800&height=600&nologo=true&seed=67',",

  // Products - Agri
  "name: 'Seeds and Plants',": "name: 'Seeds and Plants',\n        image: 'https://image.pollinations.ai/prompt/High%20quality%20agricultural%20seeds%20and%20young%20plants%20nursery?width=800&height=600&nologo=true&seed=68',",
  "name: 'Fertilizers and Nutrients',": "name: 'Fertilizers and Nutrients',\n        image: 'https://image.pollinations.ai/prompt/Agricultural%20organic%20fertilizer%20pellets%20and%20nutrients?width=800&height=600&nologo=true&seed=69',",
  "name: 'Crop Protection',": "name: 'Crop Protection',\n        image: 'https://image.pollinations.ai/prompt/Safe%20agricultural%20crop%20protection%20bio%20pesticides?width=800&height=600&nologo=true&seed=70',",

  // Products - Aqua
  "name: 'Feed and Medicines',": "name: 'Feed and Medicines',\n        image: 'https://image.pollinations.ai/prompt/High%20protein%20aquaculture%20fish%20feed%20pellets?width=800&height=600&nologo=true&seed=71',",
  "name: 'Equipment and Infrastructure',": "name: 'Equipment and Infrastructure', // Aqua\n        image: 'https://image.pollinations.ai/prompt/Aquaculture%20equipment%20paddle%20wheel%20aerators%20in%20water?width=800&height=600&nologo=true&seed=72',",

  // Products - Livestock
  "name: 'Feed and Nutrition',": "name: 'Feed and Nutrition',\n        image: 'https://image.pollinations.ai/prompt/Premium%20livestock%20cattle%20feed%20and%20nutrition%20supplements?width=800&height=600&nologo=true&seed=73',",
  "name: 'Health and Equipment',": "name: 'Health and Equipment',\n        image: 'https://image.pollinations.ai/prompt/Veterinary%20health%20equipment%20for%20livestock%20farming?width=800&height=600&nologo=true&seed=74',",

  // Products - Engineering
  "name: 'Polyhouse and Netting',": "name: 'Polyhouse and Netting',\n        image: 'https://image.pollinations.ai/prompt/Polyhouse%20films%20and%20agricultural%20shade%20netting%20materials?width=800&height=600&nologo=true&seed=75',",
  "name: 'Hydroponics',": "name: 'Hydroponics',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20hydroponics%20NFT%20channels%20equipment?width=800&height=600&nologo=true&seed=76',",
  "name: 'Irrigation and Pumps',": "name: 'Irrigation and Pumps',\n        image: 'https://image.pollinations.ai/prompt/Agricultural%20drip%20irrigation%20pipes%20and%20water%20pumps?width=800&height=600&nologo=true&seed=77',",
  "name: 'Solar Systems',": "name: 'Solar Systems',\n        image: 'https://image.pollinations.ai/prompt/Agricultural%20solar%20water%20pump%20system%20panels?width=800&height=600&nologo=true&seed=78',"
};

let replacedCount = 0;
for (const [key, value] of Object.entries(replacements)) {
  if (content.includes(key)) {
    content = content.replace(key, value);
    replacedCount++;
  }
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log(`Replaced ${replacedCount} subcategory images.`);
