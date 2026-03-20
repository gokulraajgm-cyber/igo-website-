import fs from 'fs';

const targetFile = 'd:\\New folder\\IGO WEBSITE\\verdant-innovations-2\\src\\data\\catalogData.ts';
let content = fs.readFileSync(targetFile, 'utf8');

const replacements = {
  // --- PROJECT SUBCATEGORIES ---
  "name: 'Hydroponic Farming Projects',": "name: 'Hydroponic Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20hydroponics%20indoor%20farming%20NFT%20system%20high%20quality?width=800&height=600&nologo=true&seed=80',",
  "name: 'Vertical Farming Projects',": "name: 'Vertical Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Indoor%20vertical%20farming%20purple%20grow%20lights%20modern%20agriculture?width=800&height=600&nologo=true&seed=81',",
  "name: 'Open Field Cultivation Projects',": "name: 'Open Field Cultivation Projects',\n        image: 'https://image.pollinations.ai/prompt/Vast%20open%20field%20farming%20tractor%20crops%20high%20quality%20photography%20agriculture?width=800&height=600&nologo=true&seed=82',",
  "name: 'Vegetable Cultivation Projects',": "name: 'Vegetable Cultivation Projects',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20vegetable%20farming%20tomatoes%20harvest?width=800&height=600&nologo=true&seed=83',",
  "name: 'Medicinal Crop Projects',": "name: 'Medicinal Crop Projects',\n        image: 'https://image.pollinations.ai/prompt/Medicinal%20plants%20farming%20aloe%20vera%20field%20agriculture?width=800&height=600&nologo=true&seed=84',",
  "name: 'Floriculture Projects',": "name: 'Floriculture Projects',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20flower%20farming%20greenhouse%20roses?width=800&height=600&nologo=true&seed=85',",
  "name: 'Mushroom Farming Projects',": "name: 'Mushroom Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20mushroom%20farming%20indoor%20bags%20agriculture?width=800&height=600&nologo=true&seed=86',",
  "name: 'Urban Farming Projects',": "name: 'Urban Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Rooftop%20urban%20farming%20city%20background%20agriculture?width=800&height=600&nologo=true&seed=87',",
  "name: 'Nursery Projects',": "name: 'Nursery Projects',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20plant%20nursery%20seedlings%20greenhouse%20agriculture?width=800&height=600&nologo=true&seed=88',",

  "name: 'Biofloc Farming Projects',": "name: 'Biofloc Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Modern%20biofloc%20fish%20tanks%20indoor%20aquaculture%20system?width=800&height=600&nologo=true&seed=89',",
  "name: 'Crab Farming Projects',": "name: 'Crab Farming Projects',\n        image: 'https://image.pollinations.ai/prompt/Mud%20crab%20farming%20commercial%20aquaculture%20pond?width=800&height=600&nologo=true&seed=90',",
  "name: 'Integrated Aquaculture',": "name: 'Integrated Aquaculture',\n        image: 'https://image.pollinations.ai/prompt/Integrated%20aquaculture%20and%20agriculture%20farming%20system?width=800&height=600&nologo=true&seed=91',",

  "name: 'Goat Farming',": "name: 'Goat Farming',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20goat%20farming%20modern%20shed?width=800&height=600&nologo=true&seed=92',",
  "name: 'Sheep Farming',": "name: 'Sheep Farming',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20sheep%20farming%20modern%20pasture?width=800&height=600&nologo=true&seed=93',",
  "name: 'Dairy Farming',": "name: 'Dairy Farming',\n        image: 'https://image.pollinations.ai/prompt/Modern%20dairy%20cow%20farming%20facility%20clean%20cows?width=800&height=600&nologo=true&seed=94',",
  "name: 'Poultry Farming',": "name: 'Poultry Farming',\n        image: 'https://image.pollinations.ai/prompt/Commercial%20poultry%20chicken%20farming%20modern%20facility?width=800&height=600&nologo=true&seed=95',",
  "name: 'Integrated Livestock Farming',": "name: 'Integrated Livestock Farming',\n        image: 'https://image.pollinations.ai/prompt/Integrated%20livestock%20and%20fish%20farming%20pond%20system?width=800&height=600&nologo=true&seed=96',",

  "name: 'Farm Infrastructure Projects',": "name: 'Farm Infrastructure Projects',\n        image: 'https://image.pollinations.ai/prompt/Agricultural%20farm%20infrastructure%20silos%20and%20warehouses?width=800&height=600&nologo=true&seed=97',",
  "name: 'Water Management Projects',": "name: 'Water Management Projects',\n        image: 'https://image.pollinations.ai/prompt/Large%20scale%20agricultural%20water%20pump%20and%20irrigation%20reservoir?width=800&height=600&nologo=true&seed=98',",
  "name: 'Solar Agriculture Projects',": "name: 'Solar Agriculture Projects',\n        image: 'https://image.pollinations.ai/prompt/Solar%20panels%20integrated%20with%20agricultural%20farming%20agrivoltaics?width=800&height=600&nologo=true&seed=99',",
  "name: 'Farm Development Projects',": "name: 'Farm Development Projects',\n        image: 'https://image.pollinations.ai/prompt/Agricultural%20land%20leveling%20laser%20grading%20tractor?width=800&height=600&nologo=true&seed=100',",

  // --- SERVICE SUBCATEGORIES ---
  "name: 'Planning and Consulting',": "name: 'Planning and Consulting',\n        image: 'https://image.pollinations.ai/prompt/Agronomist%20inspecting%20crops%20tablet%20farm%20management?width=800&height=600&nologo=true&seed=101',",
  // Other service categories have overlapping names with projects or products, or they matched successfully in script 1.
  // Wait, I mapped 23 before. Those are already replaced.
};

let replacedCount = 0;
for (const [key, value] of Object.entries(replacements)) {
  if (content.includes(key) && !content.includes(value)) { // Ensure not replacing twice if script re-runs
    content = content.replace(key, value);
    replacedCount++;
  } else {
    // console.log(`Could not find ${key}`);
  }
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log(`Replaced ${replacedCount} remaining subcategory images.`);
