# Full Codebase Dump

## Directory Structure
```text
├── .env
├── .gitignore
├── bun.lock
├── bun.lockb
├── changes_instructions.md
├── components.json
├── dump-codebase.js
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── src
│   ├── app
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── assets
│   │   └── agri-pattern.png
│   ├── components
│   │   ├── 3d
│   │   │   └── Hero3D.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── data
│   │   ├── company-data.ts
│   │   ├── course-data.ts
│   │   ├── faq-data.ts
│   │   ├── index.ts
│   │   ├── nav-data.ts
│   │   ├── product-data.ts
│   │   ├── project-data.ts
│   │   └── service-data.ts
│   ├── features
│   │   ├── admin
│   │   │   ├── AdminDashboard.tsx
│   │   │   └── AdminLogin.tsx
│   │   ├── agri
│   │   │   ├── components
│   │   │   ├── data
│   │   │   │   ├── index.ts
│   │   │   │   └── sub-projects.ts
│   │   │   └── pages
│   │   │       ├── AgriProjectsPage.tsx
│   │   │       ├── AgriServicesPage.tsx
│   │   │       └── AgriSubProjectPage.tsx
│   │   ├── aquaculture
│   │   │   ├── components
│   │   │   ├── data
│   │   │   │   └── index.ts
│   │   │   └── pages
│   │   │       ├── AquaProjectsPage.tsx
│   │   │       └── AquaServicesPage.tsx
│   │   ├── aquaculture-farming
│   │   │   └── pages
│   │   │       └── AquaServicesPage.tsx
│   │   ├── auth
│   │   │   └── useAuth.tsx
│   │   ├── chatbot
│   │   │   └── Chatbot.tsx
│   │   ├── courses
│   │   │   └── Courses.tsx
│   │   ├── engineering
│   │   │   ├── components
│   │   │   ├── data
│   │   │   │   └── index.ts
│   │   │   └── pages
│   │   │       ├── EngineeringProjectsPage.tsx
│   │   │       └── EngineeringServicesPage.tsx
│   │   ├── enquiry
│   │   │   └── StudentEnquiry.tsx
│   │   ├── livestock
│   │   │   ├── components
│   │   │   ├── data
│   │   │   │   └── index.ts
│   │   │   └── pages
│   │   │       ├── LivestockProjectsPage.tsx
│   │   │       └── LivestockServicesPage.tsx
│   │   ├── marketing
│   │   └── projects
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── integrations
│   ├── layouts
│   │   ├── main-layout
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── FloatingBackground.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavLink.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   └── SectionHeading.tsx
│   │   └── project-layout
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Academy.tsx
│   │   ├── Blog.tsx
│   │   ├── Careers.tsx
│   │   ├── ConnectStartup.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── home
│   │   │   └── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Projects.tsx
│   │   └── Services.tsx
│   ├── test
│   │   ├── example.test.ts
│   │   └── setup.ts
│   ├── utils
│   │   └── index.ts
│   └── vite-env.d.ts
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.config.ts
```

## File Contents

### File: `changes_instructions.md`
```md
#change 1 
    ## Read the file project images document or file to add the photos to the website as perspective area of projects and also add the content for the all project to that read the file project content 

#change 2 
   ## Read the service image file to add the photos to the service  categories and sub-categories  and also Read the content file for the addition of the contents in services 

#chnage 3
   ##IGO Academy  content bye 2 sectors like training programme  and interns and courses  concept and knowledge of that pages 

#change 4 
   ## connect to startup change to Agri Startup Platform and in that have sections of Startup Incubation,Investor Network,Joint Venture Farming,Franchise Farming and there perspective content  which suits the Domaine

#chnage 5 
   ## career content additions and photos 

#chnage 5
    ## our blog photos addition and content addition 

#chnage 6
   ## Change in student enquire to set the defaults and add the (not null) to the NAME,CONTACT and EMAIL

#chnage 7
   ## Increasing page navigation  animations , adding the IGO logo to the website ,  AADING the background floating animation to pages and  show the flotations with the respective minimal visible structure like professional  website and premium look , re-new the numbers in the project achieved or completed ,team members, wining awards 

#change 8 
   ##  improve the about as for an impressive info 

#chnage 9 
   ## Make header more premium look and high ranking headers, and highlight the IGO academy

#chnage 10 
   ##                            PROJECTS
--------------------------------------------------------------------------------
|        Agri Farming        |     Aquaculture Farming     |   Livestock Farming   |   Farm Engineering   |
--------------------------------------------------------------------------------
| Protected Farming          | Fish Farming                | Goat Farming          | Farm Infrastructure  |
| Hydroponic Farming         | Bio floc Farming            | Sheep Farming         | Water Management     |
| Vertical Farming           | Shrimp Farming              | Dairy Farming         | Solar Agriculture    |
| Open Field Cultivation     | Crab Farming                | Poultry Farming       | Farm Development     |
| Vegetable Cultivation      | Integrated Aquaculture      | Integrated Livestock  |
| Medicinal Crops            |                             |                       |
| Floriculture               |                             |                       |
| Mushroom Farming           |                             |                       |
| Urban Farming              |                             |                       |
| Nursery                    |                             |                       |                           want same as in the website this is  the clear structure and there have the drop down animations and  compulsories want  each sub-categories cartoon image in small size like a button 

#change 11 
   ##                          SERVICES
---------------------------------------------------------------------
|     Agri Farming     |    Aquaculture     |    Livestock     | Farm Engineering |
---------------------------------------------------------------------
| Farm Planning        | Fish Farming Setup | Goat Farm Setup  | Cold Storage     |
| Investment Consulting| Bio floc Setup     | Dairy Farm Setup | Packhouse        |
| Polyhouse Setup      | Pond Construction  | Sheep Farm Setup | Irrigation       |
| Hydroponic Setup     | Aquaponics Setup   | Poultry Setup    | Water Systems    |
| Vertical Farming     | Consulting         | Shed Construction| Surveying        |
| Crop Consulting      |                    |                  | GIS Mapping      |
| Farm Layout Design   |                    |                  | Land Leveling    | compulsories want  each sub-categories cartoon image in small size like a button


#change 12
   ##                          PRODUCTS
---------------------------------------------------------------------
|     Agri Products     |   Aquaculture Products   | Livestock Products | Engineering Products |
---------------------------------------------------------------------
| Seeds                 | Fish Feed                | Goat Feed          | Polyhouse Materials  |
| Plants                | Aerators                 | Cattle Feed        | Hydroponic Materials |
| Fertilizers           | Bio floc Tanks           | Mineral Mix        | Irrigation Systems   |
| Nutrients             | Pond Liners              | Livestock Medicine | Water Pumps          |
| Pesticides            | Water Testing Kits       | Equipment          | Solar Systems        | compulsories want  each sub-categories cartoon image in small size like a button


#chnage 13
   ## IN the core business sector and floating  action logo while selecting , colour changes while selection  and animated selection with colour changes 

#chnage 14 
   ## Add photos of success stories , add later blog articles content and the background (pics) have to visible in all pages behind the background with the transparency and moveable floating animation in the background  
 
#change 15 
   ## want to revamp the full website and want professional structured and fully animated website  use colours only black green white  and gold want to use in the website and also us ethe picture already have in the background 








```

### File: `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}

```

### File: `dump-codebase.js`
```js
import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const OUTPUT_FILE = path.join(ROOT_DIR, 'llm_feed_data.md');

// Directories to completely ignore
const IGNORE_DIRS = ['node_modules', 'dist', '.git', '.vscode', 'public', '.npm', 'supabase'];
// Files to ignore
const IGNORE_FILES = ['package-lock.json', 'bun.lock', 'bun.lockb', '.env'];
// Allowed extensions to read content from
const ALLOWED_EXT = ['.tsx', '.ts', '.jsx', '.js', '.json', '.md', '.css', '.html'];

let output = '# Full Codebase Dump\n\n';

function walkDir(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!IGNORE_DIRS.includes(item)) {
        walkDir(fullPath, fileList);
      }
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// 1. Generate Directory Structure
output += '## Directory Structure\n```text\n';
function generateTree(dir, prefix = '') {
  const items = fs.readdirSync(dir);
  const filteredItems = items.filter(item => {
    const isDir = fs.statSync(path.join(dir, item)).isDirectory();
    return isDir ? !IGNORE_DIRS.includes(item) : true;
  });

  filteredItems.forEach((item, index) => {
    const isLast = index === filteredItems.length - 1;
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();
    output += `${prefix}${isLast ? '└── ' : '├── '}${item}\n`;
    if (isDir) {
      generateTree(fullPath, prefix + (isLast ? '    ' : '│   '));
    }
  });
}
generateTree(ROOT_DIR);
output += '```\n\n';

// 2. Dump File Contents
output += '## File Contents\n\n';
const allFiles = walkDir(ROOT_DIR);

for (const file of allFiles) {
  const fileName = path.basename(file);
  const ext = path.extname(file);
  if (IGNORE_FILES.includes(fileName) || !ALLOWED_EXT.includes(ext)) {
    continue;
  }
  
  const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
  output += `### File: \`${relPath}\`\n`;
  output += '```' + (ext === '.tsx' || ext === '.ts' ? 'typescript' : ext.replace('.', '')) + '\n';
  try {
    const content = fs.readFileSync(file, 'utf-8');
    output += content;
  } catch (err) {
    output += `// Error reading file: ${err.message}`;
  }
  output += '\n```\n\n';
}

fs.writeFileSync(OUTPUT_FILE, output);
console.log(`Generated LLM feed data at: ${OUTPUT_FILE}`);

```

### File: `eslint.config.js`
```js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);

```

### File: `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- TODO: Set the document title to the name of your application -->
    <title>Lovable App</title>
    <meta name="description" content="Lovable Generated Project" />
    <meta name="author" content="Lovable" />

    <!-- TODO: Update og:title to match your application name -->
    <meta property="og:title" content="Lovable App" />
    <meta property="og:description" content="Lovable Generated Project" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Lovable" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/app/main.tsx"></script>
  </body>
</html>

```

### File: `package.json`
```json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@react-three/drei": "^9.122.0",
    "@react-three/fiber": "^8.18.0",
    "@supabase/supabase-js": "^2.98.0",
    "@tanstack/react-query": "^5.83.0",
    "@types/three": "^0.183.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.35.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-markdown": "^10.1.0",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.183.2",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@tailwindcss/typography": "^0.5.16",
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.0.0",
    "@types/node": "^22.16.5",
    "@types/react": "^18.3.23",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "jsdom": "^20.0.3",
    "lovable-tagger": "^1.1.13",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^5.4.19",
    "vitest": "^3.2.4"
  }
}

```

### File: `postcss.config.js`
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

### File: `README.md`
```md
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

```

### File: `src/app/App.css`
```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

### File: `src/app/App.tsx`
```typescript
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/features/auth/useAuth";
import Navbar from "@/layouts/main-layout/Navbar";
import Footer from "@/layouts/main-layout/Footer";
import Chatbot from "@/features/chatbot/Chatbot";
import FloatingBackground from "@/layouts/main-layout/FloatingBackground";
import Home from "@/pages/home/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Academy from "@/pages/Academy";
import ConnectStartup from "@/pages/ConnectStartup";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import Courses from "@/features/courses/Courses";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import StudentEnquiry from "@/features/enquiry/StudentEnquiry";
import AdminLogin from "@/features/admin/AdminLogin";
import AdminDashboard from "@/features/admin/AdminDashboard";
import NotFound from "@/pages/NotFound";

import { AgriProjectsPage } from "@/features/agri/pages/AgriProjectsPage";
import { AgriServicesPage } from "@/features/agri/pages/AgriServicesPage";
import { AgriSubProjectPage } from "@/features/agri/pages/AgriSubProjectPage";
import { AquaProjectsPage } from "@/features/aquaculture/pages/AquaProjectsPage";
import { AquaServicesPage } from "@/features/aquaculture/pages/AquaServicesPage";
import { LivestockProjectsPage } from "@/features/livestock/pages/LivestockProjectsPage";
import { LivestockServicesPage } from "@/features/livestock/pages/LivestockServicesPage";
import { EngineeringProjectsPage } from "@/features/engineering/pages/EngineeringProjectsPage";
import { EngineeringServicesPage } from "@/features/engineering/pages/EngineeringServicesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <FloatingBackground />
          <Navbar />
          <main className="min-h-screen relative z-10">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<Projects />} />
                <Route path="/projects/agri" element={<AgriProjectsPage />} />
                <Route path="/projects/agri/:id" element={<AgriProjectsPage />} />
                <Route path="/projects/agri/:id/:subId" element={<AgriSubProjectPage />} />
                <Route path="/projects/aquaculture" element={<AquaProjectsPage />} />
                <Route path="/projects/aquaculture/:id" element={<AquaProjectsPage />} />
                <Route path="/projects/livestock" element={<LivestockProjectsPage />} />
                <Route path="/projects/livestock/:id" element={<LivestockProjectsPage />} />
                <Route path="/projects/engineering" element={<EngineeringProjectsPage />} />
                <Route path="/projects/engineering/:id" element={<EngineeringProjectsPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/agri" element={<AgriServicesPage />} />
                <Route path="/services/aquaculture" element={<AquaServicesPage />} />
                <Route path="/services/livestock" element={<LivestockServicesPage />} />
                <Route path="/services/engineering" element={<EngineeringServicesPage />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/connect-startup" element={<ConnectStartup />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/student-enquiry" element={<StudentEnquiry />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <Chatbot />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

```

### File: `src/app/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;          /* White */
    --foreground: 0 0% 4%;            /* Black */
    --card: 0 0% 98%;                 /* Very Light Gray */
    --card-foreground: 0 0% 4%;       /* Black */
    --popover: 0 0% 100%;             /* White */
    --popover-foreground: 0 0% 4%;    /* Black */
    
    --primary: 125 60% 35%;           /* Vibrant Green */
    --primary-foreground: 0 0% 100%;  /* White */
    
    --secondary: 42 70% 50%;          /* Gold */
    --secondary-foreground: 0 0% 100%;/* White */
    
    --muted: 0 0% 96%;                /* Light Gray */
    --muted-foreground: 0 0% 45%;     /* Medium Gray */
    
    --accent: 42 70% 50%;             /* Gold */
    --accent-foreground: 0 0% 100%;   /* White */
    
    --destructive: 0 62% 30%;
    --destructive-foreground: 0 0% 98%;
    
    --border: 0 0% 90%;               /* Subtle Border */
    --input: 0 0% 90%;
    --ring: 125 60% 35%;
    --radius: 0.75rem;

    --gold: 42 70% 50%;
    --gold-rgb: 212, 175, 55;         /* For rgba usage */
    --gold-light: 42 80% 65%;
    --green-dark: 125 70% 20%;
    
    --font-display: 'Playfair Display', serif;
    --font-body: 'DM Sans', sans-serif;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-body antialiased;
    font-family: var(--font-body);
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }
}

@layer utilities {
  .font-display {
    font-family: var(--font-display);
  }
  .font-body {
    font-family: var(--font-body);
  }
  .text-gold {
    color: hsl(var(--gold));
  }
  .bg-gold {
    background-color: hsl(var(--gold));
  }
  .border-gold {
    border-color: hsl(var(--gold));
  }
  .gradient-gold {
    background: linear-gradient(135deg, hsl(42, 52%, 55%), hsl(42, 60%, 70%));
  }
  .gradient-green {
    background: linear-gradient(135deg, hsl(125, 52%, 24%), hsl(125, 40%, 35%));
  }
  .gradient-hero {
    background: linear-gradient(180deg, rgba(27, 94, 32, 0.85) 0%, rgba(17, 17, 17, 0.9) 100%);
  }
}

/* Floating pattern background */
@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes count-up {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.7s ease-out forwards;
}

.pattern-bg {
  position: relative;
}
.pattern-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--pattern-url);
  background-size: 600px;
  background-repeat: repeat;
  opacity: 0.04;
  animation: float-slow 12s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

/* Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: hsl(var(--muted)); }
::-webkit-scrollbar-thumb { background: hsl(var(--primary)); border-radius: 4px; }

/* Smooth scroll */
html { scroll-behavior: smooth; }

```

### File: `src/app/main.tsx`
```typescript
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/app/index.css";

createRoot(document.getElementById("root")!).render(<App />);

```

### File: `src/components/3d/Hero3D.tsx`
```typescript
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

const FloatingLeaf = ({ position, color, scale = 1, rotationOffset = 0 }: { position: [number, number, number]; color: string; scale?: number; rotationOffset?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  const leafShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    // Draw a leaf-like curve
    shape.quadraticCurveTo(0.5, 0.5, 0, 1.2);
    shape.quadraticCurveTo(-0.5, 0.5, 0, 0);
    return shape;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3 + rotationOffset;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + rotationOffset;
      ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <shapeGeometry args={[leafShape]} />
        <meshStandardMaterial color={color} transparent opacity={0.85} roughness={0.4} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
};

const Scene = () => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 10, 5]} intensity={0.8} color="#C8A951" />
    <pointLight position={[-3, 2, 4]} intensity={0.5} color="#1B5E20" />

    {/* Replace spheres and stones with floating leaves of various greens and golds */}
    <FloatingLeaf position={[-2.5, 1, -1]} color="#2E7D32" scale={1.2} rotationOffset={0} />
    <FloatingLeaf position={[2.8, -0.5, -2]} color="#1B5E20" scale={0.8} rotationOffset={1} />
    <FloatingLeaf position={[0, 2, -3]} color="#4CAF50" scale={1} rotationOffset={2} />
    <FloatingLeaf position={[-1.5, -1.5, -1.5]} color="#388E3C" scale={0.6} rotationOffset={3} />
    <FloatingLeaf position={[3.5, 1.5, -2.5]} color="#C8A951" scale={0.9} rotationOffset={4} />
    
    <FloatingLeaf position={[-3, 0, -4]} color="#C8A951" scale={0.7} rotationOffset={1.5} />
    <FloatingLeaf position={[3, -1, -3]} color="#1B5E20" scale={1.1} rotationOffset={2.5} />
    <FloatingLeaf position={[0.5, 2.5, -5]} color="#6B4F2A" scale={0.8} rotationOffset={0.5} />

    {/* Floating magical sparkles */}
    <Sparkles count={60} scale={10} size={2} speed={0.3} color="#C8A951" opacity={0.4} />
  </>
);

const Hero3D = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);

export default Hero3D;

```

### File: `src/components/ui/accordion.tsx`
```typescript
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

```

### File: `src/components/ui/alert-dialog.tsx`
```typescript
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

```

### File: `src/components/ui/alert.tsx`
```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };

```

### File: `src/components/ui/aspect-ratio.tsx`
```typescript
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };

```

### File: `src/components/ui/avatar.tsx`
```typescript
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };

```

### File: `src/components/ui/badge.tsx`
```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

```

### File: `src/components/ui/breadcrumb.tsx`
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

```

### File: `src/components/ui/button.tsx`
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

```

### File: `src/components/ui/calendar.tsx`
```typescript
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

```

### File: `src/components/ui/card.tsx`
```typescript
import * as React from "react";

import { cn } from "@/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

```

### File: `src/components/ui/carousel.tsx`
```typescript
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };

```

### File: `src/components/ui/chart.tsx`
```typescript
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          })}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };

```

### File: `src/components/ui/checkbox.tsx`
```typescript
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

```

### File: `src/components/ui/collapsible.tsx`
```typescript
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

```

### File: `src/components/ui/command.tsx`
```typescript
import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

```

### File: `src/components/ui/context-menu.tsx`
```typescript
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};

```

### File: `src/components/ui/dialog.tsx`
```typescript
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

```

### File: `src/components/ui/drawer.tsx`
```typescript
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/utils";

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};

```

### File: `src/components/ui/dropdown-menu.tsx`
```typescript
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};

```

### File: `src/components/ui/form.tsx`
```typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />;
  },
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-destructive", className)} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };

```

### File: `src/components/ui/hover-card.tsx`
```typescript
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };

```

### File: `src/components/ui/input-otp.tsx`
```typescript
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "@/utils";

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  ),
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />,
);
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  ),
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

```

### File: `src/components/ui/input.tsx`
```typescript
import * as React from "react";

import { cn } from "@/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

```

### File: `src/components/ui/label.tsx`
```typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

```

### File: `src/components/ui/menubar.tsx`
```typescript
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};

```

### File: `src/components/ui/navigation-menu.tsx`
```typescript
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};

```

### File: `src/components/ui/pagination.tsx`
```typescript
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};

```

### File: `src/components/ui/popover.tsx`
```typescript
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };

```

### File: `src/components/ui/progress.tsx`
```typescript
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

```

### File: `src/components/ui/radio-group.tsx`
```typescript
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

```

### File: `src/components/ui/resizable.tsx`
```typescript
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

```

### File: `src/components/ui/scroll-area.tsx`
```typescript
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };

```

### File: `src/components/ui/select.tsx`
```typescript
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};

```

### File: `src/components/ui/separator.tsx`
```typescript
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

```

### File: `src/components/ui/sheet.tsx`
```typescript
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};

```

### File: `src/components/ui/sidebar.tsx`
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
});
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        className={cn("h-7 w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  },
);
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<React.ElementRef<typeof Input>, React.ComponentProps<typeof Input>>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-sidebar="input"
        className={cn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="header" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="footer" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<React.ElementRef<typeof Separator>, React.ComponentProps<typeof Separator>>(
  ({ className, ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        data-sidebar="separator"
        className={cn("mx-2 w-auto bg-sidebar-border", className)}
        {...props}
      />
    );
  },
);
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-sidebar="group-content" className={cn("w-full text-sm", className)} {...props} />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul ref={ref} data-sidebar="menu" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} data-sidebar="menu-item" className={cn("group/menu-item relative", className)} {...props} />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ ...props }, ref) => (
  <li ref={ref} {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};

```

### File: `src/components/ui/skeleton.tsx`
```typescript
import { cn } from "@/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };

```

### File: `src/components/ui/slider.tsx`
```typescript
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

```

### File: `src/components/ui/sonner.tsx`
```typescript
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };

```

### File: `src/components/ui/switch.tsx`
```typescript
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

```

### File: `src/components/ui/table.tsx`
```typescript
import * as React from "react";

import { cn } from "@/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />,
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  ),
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
  ),
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className)}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
  ),
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };

```

### File: `src/components/ui/tabs.tsx`
```typescript
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

```

### File: `src/components/ui/textarea.tsx`
```typescript
import * as React from "react";

import { cn } from "@/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };

```

### File: `src/components/ui/toast.tsx`
```typescript
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};

```

### File: `src/components/ui/toaster.tsx`
```typescript
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

```

### File: `src/components/ui/toggle-group.tsx`
```typescript
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };

```

### File: `src/components/ui/toggle.tsx`
```typescript
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };

```

### File: `src/components/ui/tooltip.tsx`
```typescript
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

```

### File: `src/components/ui/use-toast.ts`
```typescript
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };

```

### File: `src/data/company-data.ts`
```typescript
export const companyInfo = {
  name: "IGO Agritech Farms",
  tagline: "India's Leading Agri Engineering & Consulting Brand",
  description:
    "At IGO Agritech Farms, we offer a range of innovative and sustainable agricultural solutions, including polyhouse projects, hydroponics projects, open cultivation, floriculture, goat farming, aquaculture, vertical farming, gardening, and rooftop gardens.",
  phone: "+91 7397789803",
  email: "info@igoagritechfarms.com",
  website: "https://www.igoagritechfarms.com",
  address: "Chennai, Tamil Nadu, India",
  whatsapp: "https://wa.me/917397789803",
};

export const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "10000+", label: "Successful Projects" },
  { value: "2000+", label: "Team Members" },
  { value: "75+", label: "Winning Awards" },
];

```

### File: `src/data/course-data.ts`
```typescript
export const courses = [
  { id: "polyhouse-training", title: "Polyhouse Training", duration: "5 Days", description: "Complete training on polyhouse construction, operation, and crop management.", topics: ["Structure Design", "Climate Control", "Crop Selection", "Business Planning"] },
  { id: "hydroponics-training", title: "Hydroponics Training", duration: "5 Days", description: "Hands-on training in soilless farming techniques and system setup.", topics: ["System Setup", "Nutrient Management", "pH Balancing", "Commercial Operations"] },
  { id: "vertical-farming-training", title: "Vertical Farming Training", duration: "3 Days", description: "Learn vertical farming technology and indoor agriculture systems.", topics: ["Layer Design", "LED Systems", "Automation", "Cost Analysis"] },
  { id: "mushroom-cultivation", title: "Mushroom Cultivation", duration: "3 Days", description: "Comprehensive mushroom farming from spawn preparation to marketing.", topics: ["Spawn Production", "Growing Environment", "Harvesting", "Value Addition"] },
  { id: "goat-farming-training", title: "Goat Farming Training", duration: "3 Days", description: "Scientific goat management covering breed selection, feeding, and healthcare.", topics: ["Breed Selection", "Nutrition", "Health Management", "Marketing"] },
  { id: "aquaculture-training", title: "Aquaculture Training", duration: "4 Days", description: "Fish and shrimp farming techniques with water management systems.", topics: ["Pond Design", "Species Selection", "Feed Management", "Water Quality"] },
];

```

### File: `src/data/faq-data.ts`
```typescript
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

```

### File: `src/data/index.ts`
```typescript
export * from "./company-data";
export * from "./project-data";
export * from "./service-data";
export * from "./product-data";
export * from "./course-data";
export * from "./faq-data";
export * from "./nav-data";

```

### File: `src/data/nav-data.ts`
```typescript
export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      {
        label: "Agri Farming",
        href: "/projects/agri",
        children: [
          { label: "Protected Farming", href: "/projects/agri/protected-farming", icon: "⛺" },
          { label: "Hydroponic Farming", href: "/projects/agri/hydroponic-farming", icon: "💧" },
          { label: "Vertical Farming", href: "/projects/agri/vertical-farming", icon: "🏢" },
          { label: "Open Field Cultivation", href: "/projects/agri/open-field", icon: "🌾" },
          { label: "Vegetable Cultivation", href: "/projects/agri/vegetable-cultivation", icon: "🍅" },
          { label: "Medicinal Crops", href: "/projects/agri/medicinal-crops", icon: "🌿" },
          { label: "Floriculture", href: "/projects/agri/floriculture", icon: "🌸" },
          { label: "Mushroom Farming", href: "/projects/agri/mushroom-farming", icon: "🍄" },
          { label: "Urban Farming", href: "/projects/agri/urban-farming", icon: "🌆" },
          { label: "Nursery", href: "/projects/agri/nursery", icon: "🌱" },
        ],
      },
      {
        label: "Aquaculture Farming",
        href: "/projects/aquaculture",
        children: [
          { label: "Fish Farming", href: "/projects/aquaculture/fish-farming", icon: "🐟" },
          { label: "Biofloc Farming", href: "/projects/aquaculture/biofloc-farming", icon: "🦠" },
          { label: "Shrimp Farming", href: "/projects/aquaculture/shrimp-farming", icon: "🦐" },
          { label: "Crab Farming", href: "/projects/aquaculture/crab-farming", icon: "🦀" },
          { label: "Integrated Aquaculture", href: "/projects/aquaculture/integrated-aquaculture", icon: "🌊" },
        ],
      },
      {
        label: "Livestock Farming",
        href: "/projects/livestock",
        children: [
          { label: "Goat Farming", href: "/projects/livestock/goat-farming", icon: "🐐" },
          { label: "Sheep Farming", href: "/projects/livestock/sheep-farming", icon: "🐑" },
          { label: "Dairy Farming", href: "/projects/livestock/dairy-farming", icon: "🐄" },
          { label: "Poultry Farming", href: "/projects/livestock/poultry-farming", icon: "🐔" },
          { label: "Integrated Livestock", href: "/projects/livestock/integrated-livestock", icon: "🚜" },
        ],
      },
      {
        label: "Farm Engineering",
        href: "/projects/engineering",
        children: [
          { label: "Farm Infrastructure", href: "/projects/engineering/farm-infrastructure", icon: "🏗️" },
          { label: "Water Management", href: "/projects/engineering/water-management", icon: "💧" },
          { label: "Solar Agriculture", href: "/projects/engineering/solar-agriculture", icon: "☀️" },
          { label: "Farm Development", href: "/projects/engineering/farm-development", icon: "🚜" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Agri Farming",
        href: "/services/agri",
        children: [
          { label: "Farm Planning", href: "/services/agri#planning", icon: "📋" },
          { label: "Investment Consulting", href: "/services/agri#consulting", icon: "💰" },
          { label: "Polyhouse Setup", href: "/services/agri#polyhouse", icon: "⛺" },
          { label: "Hydroponic Setup", href: "/services/agri#hydroponic", icon: "💧" },
          { label: "Vertical Farming", href: "/services/agri#vertical", icon: "🏢" },
          { label: "Crop Consulting", href: "/services/agri#crop", icon: "🌾" },
          { label: "Farm Layout Design", href: "/services/agri#layout", icon: "📐" },
        ],
      },
      {
        label: "Aquaculture",
        href: "/services/aquaculture",
        children: [
          { label: "Fish Farming Setup", href: "/services/aquaculture#fish-setup", icon: "🐟" },
          { label: "Bio floc Setup", href: "/services/aquaculture#biofloc", icon: "🦠" },
          { label: "Pond Construction", href: "/services/aquaculture#pond", icon: "🚜" },
          { label: "Aquaponics Setup", href: "/services/aquaculture#aquaponics", icon: "🌱" },
          { label: "Consulting", href: "/services/aquaculture#consulting", icon: "📈" },
        ],
      },
      {
        label: "Livestock",
        href: "/services/livestock",
        children: [
          { label: "Goat Farm Setup", href: "/services/livestock#goat", icon: "🐐" },
          { label: "Dairy Farm Setup", href: "/services/livestock#dairy", icon: "🐄" },
          { label: "Sheep Farm Setup", href: "/services/livestock#sheep", icon: "🐑" },
          { label: "Poultry Setup", href: "/services/livestock#poultry", icon: "🐔" },
          { label: "Shed Construction", href: "/services/livestock#shed", icon: "🏗️" },
        ],
      },
      {
        label: "Farm Engineering",
        href: "/services/engineering",
        children: [
          { label: "Cold Storage", href: "/services/engineering#cold-storage", icon: "❄️" },
          { label: "Packhouse", href: "/services/engineering#packhouse", icon: "📦" },
          { label: "Irrigation", href: "/services/engineering#irrigation", icon: "💧" },
          { label: "Water Systems", href: "/services/engineering#water-systems", icon: "🚰" },
          { label: "Surveying", href: "/services/engineering#surveying", icon: "🛰️" },
          { label: "GIS Mapping", href: "/services/engineering#gis", icon: "🗺️" },
          { label: "Land Leveling", href: "/services/engineering#leveling", icon: "🚜" },
        ],
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Agri Products",
        href: "/products/agri",
        children: [
          { label: "Seeds", href: "/products/agri#seeds", icon: "🌱" },
          { label: "Plants", href: "/products/agri#plants", icon: "🌿" },
          { label: "Fertilizers", href: "/products/agri#fertilizers", icon: "🧪" },
          { label: "Nutrients", href: "/products/agri#nutrients", icon: "💧" },
          { label: "Pesticides", href: "/products/agri#pesticides", icon: "🛡️" },
        ],
      },
      {
        label: "Aquaculture Products",
        href: "/products/aquaculture",
        children: [
          { label: "Fish Feed", href: "/products/aquaculture#fish-feed", icon: "🧆" },
          { label: "Aerators", href: "/products/aquaculture#aerators", icon: "⚙️" },
          { label: "Bio floc Tanks", href: "/products/aquaculture#tanks", icon: "🛢️" },
          { label: "Pond Liners", href: "/products/aquaculture#liners", icon: "⛺" },
          { label: "Water Testing Kits", href: "/products/aquaculture#testing", icon: "🧪" },
        ],
      },
      {
        label: "Livestock Products",
        href: "/products/livestock",
        children: [
          { label: "Goat Feed", href: "/products/livestock#goat", icon: "🌾" },
          { label: "Cattle Feed", href: "/products/livestock#cattle", icon: "🌽" },
          { label: "Mineral Mix", href: "/products/livestock#mineral", icon: "🧂" },
          { label: "Livestock Medicine", href: "/products/livestock#medicine", icon: "💊" },
          { label: "Equipment", href: "/products/livestock#equipment", icon: "⚙️" },
        ],
      },
      {
        label: "Engineering Products",
        href: "/products/engineering",
        children: [
          { label: "Polyhouse Materials", href: "/products/engineering#polyhouse", icon: "🏗️" },
          { label: "Hydroponic Materials", href: "/products/engineering#hydroponic", icon: "🥬" },
          { label: "Irrigation Systems", href: "/products/engineering#irrigation", icon: "💧" },
          { label: "Water Pumps", href: "/products/engineering#pumps", icon: "⚙️" },
          { label: "Solar Systems", href: "/products/engineering#solar", icon: "☀️" },
        ],
      },
    ],
  },
  {
    label: "IGO Academy",
    href: "/academy",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Agri Startup Platform",
    href: "/connect-startup",
  },
];

```

### File: `src/data/product-data.ts`
```typescript
export const products = [
  // Keeping products data minimal as actual items were not present in previous data file, but requested by user.
];

```

### File: `src/data/project-data.ts`
```typescript
export const projects = [
  {
    id: "polyhouse",
    title: "Polyhouse Projects",
    description: "State-of-the-art polyhouse farming with climate-controlled environments for year-round production of high-value crops.",
    image: "https://www.igoagritechfarms.com/images/Polyhouse.jpeg",
    benefits: ["Climate Control", "Year-round Production", "Higher Yields", "Pest Protection"],
    tech: ["Automated Ventilation", "Drip Irrigation", "Fertigation Systems", "UV-stabilized Films"],
  },
  {
    id: "hydroponics",
    title: "Hydroponic Projects",
    description: "Soilless farming technology enabling faster growth cycles and water-efficient agriculture in controlled setups.",
    image: "https://www.igoagritechfarms.com/images/hydro1.jpg",
    benefits: ["90% Water Savings", "Faster Growth", "No Soil Needed", "Urban Farming"],
    tech: ["NFT Systems", "Dutch Bucket", "Grow Lights", "pH Monitoring"],
  },
  {
    id: "joint-venture",
    title: "Joint Venture Projects",
    description: "Partnership-based farming models combining investment, technology, and agricultural expertise for mutual growth.",
    image: "https://www.igoagritechfarms.com/images/jointventure.png",
    benefits: ["Shared Risk", "Expert Management", "Assured Returns", "End-to-End Support"],
    tech: ["Business Planning", "Market Analysis", "Revenue Sharing", "Crop Advisory"],
  },
  {
    id: "open-cultivation",
    title: "Open Cultivation Projects",
    description: "Traditional farming enhanced with modern technology and practices for large-scale crop production.",
    image: "https://www.igoagritechfarms.com/images/opencultivation.jpg",
    benefits: ["Low Setup Cost", "Large Scale", "Natural Growth", "Diverse Crops"],
    tech: ["Drip Irrigation", "Sprinkler Systems", "Soil Testing", "Crop Rotation"],
  },
  {
    id: "vertical-farming",
    title: "Vertical Farming Projects",
    description: "Multi-layer indoor farming systems that maximize production per square foot using cutting-edge technology.",
    image: "https://www.igoagritechfarms.com/images/vertical.jpeg",
    benefits: ["Space Efficient", "Urban Compatible", "Year-round Harvest", "Minimal Water"],
    tech: ["LED Grow Lights", "Automated Stacking", "Climate Control", "IoT Monitoring"],
  },
  {
    id: "goat-farming",
    title: "Goat Farming Projects",
    description: "Scientifically managed goat farming for dairy, meat, and breeding with modern housing and feed systems.",
    image: "https://www.igoagritechfarms.com/images/goat.jpeg",
    benefits: ["Low Investment", "Quick Returns", "High Demand", "Easy Management"],
    tech: ["Breed Selection", "Feed Management", "Veterinary Care", "Housing Design"],
  },
  {
    id: "aquaculture",
    title: "Aquaculture Projects",
    description: "Fish and shrimp farming with advanced water management and feeding systems for sustainable aquatic production.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
    benefits: ["High Protein", "Scalable", "Water Recycling", "Fast Growth"],
    tech: ["Aeration Systems", "Bio-filters", "Auto Feeders", "Water Quality Sensors"],
  },
  {
    id: "microgreens",
    title: "Microgreens Projects",
    description: "Urban-friendly microgreens production for restaurants, supermarkets and health-conscious consumers.",
    image: "https://www.igoagritechfarms.com/images/micro-3.png",
    benefits: ["Quick Harvest", "High Value", "Nutrient Dense", "Low Space"],
    tech: ["Grow Trays", "LED Lighting", "Seed Selection", "Climate Chambers"],
  },
];

```

### File: `src/data/service-data.ts`
```typescript
export const services = [
  { title: "Landscaping", description: "Professional landscaping services for residential and commercial properties with sustainable plant selections.", icon: "🌿" },
  { title: "Rooftop Gardening", description: "Transform your rooftop into a productive green space with our custom gardening solutions.", icon: "🏠" },
  { title: "AMC Service", description: "Annual Maintenance Contracts for all agricultural setups ensuring optimal performance year-round.", icon: "🔧" },
  { title: "Joint Venture Projects", description: "Partnership models for investors looking to enter agriculture with expert guidance and support.", icon: "🤝" },
  { title: "Buyback Services", description: "Guaranteed buyback of produce ensuring stable income for our project partners.", icon: "💰" },
  { title: "Gardening", description: "Home and kitchen gardening solutions for fresh organic produce at your doorstep.", icon: "🌱" },
  { title: "Nursery Projects", description: "Commercial nursery setup and management for plant propagation and sales.", icon: "🌳" },
  { title: "Solar Dryer Projects", description: "Solar-powered drying solutions for agricultural produce preservation.", icon: "☀️" },
];

```

### File: `src/features/admin/AdminDashboard.tsx`
```typescript
import { useState, useEffect } from "react";
import { useAuth } from "@/features/auth/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { LogOut, Users, MessageSquare, BookOpen, Phone, ChevronRight } from "lucide-react";

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const fetchData = async () => {
    setLoadingData(true);
    const [enqRes, conRes] = await Promise.all([
      supabase.from("course_enquiries").select("*").order("created_at", { ascending: false }),
      supabase.from("contacts").select("*").order("created_at", { ascending: false }),
    ]);
    setEnquiries(enqRes.data || []);
    setContacts(conRes.data || []);
    setLoadingData(false);
  };

  if (loading || !isAdmin) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
    </div>
  );

  const stats = [
    { label: "Course Enquiries", value: enquiries.length, icon: BookOpen, color: "bg-primary/10 text-primary" },
    { label: "Contact Messages", value: contacts.length, icon: Phone, color: "bg-accent/20 text-accent-foreground" },
    { label: "Pending Enquiries", value: enquiries.filter(e => e.status === "pending").length, icon: MessageSquare, color: "bg-gold/20 text-foreground" },
  ];

  return (
    <div className="min-h-screen bg-muted pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground text-sm">Welcome, {user?.email}</p>
          </div>
          <button onClick={() => { signOut(); navigate("/"); }} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-card transition-colors text-sm">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {stats.map((s: any, i: number) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-3`}>
                <s.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-display font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Course Enquiries Table */}
        <div className="bg-card rounded-2xl border border-border shadow-sm mb-8">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="font-display text-xl font-bold">Course Enquiries</h2>
            <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{enquiries.length} total</span>
          </div>
          <div className="overflow-x-auto">
            {loadingData ? (
              <div className="p-8 text-center text-muted-foreground">Loading...</div>
            ) : enquiries.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">No enquiries yet</div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Phone</th>
                    <th className="px-6 py-3">Course</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((e) => (
                    <tr key={e.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{e.name}</td>
                      <td className="px-6 py-4">{e.email}</td>
                      <td className="px-6 py-4">{e.phone}</td>
                      <td className="px-6 py-4">{e.course}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${e.status === "pending" ? "bg-gold/20 text-foreground" : "bg-primary/10 text-primary"}`}>
                          {e.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{new Date(e.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Contact Messages Table */}
        <div className="bg-card rounded-2xl border border-border shadow-sm">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="font-display text-xl font-bold">Contact Messages</h2>
            <span className="text-xs px-3 py-1 bg-accent/20 text-accent-foreground rounded-full font-medium">{contacts.length} total</span>
          </div>
          <div className="overflow-x-auto">
            {loadingData ? (
              <div className="p-8 text-center text-muted-foreground">Loading...</div>
            ) : contacts.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">No messages yet</div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Subject</th>
                    <th className="px-6 py-3">Message</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c) => (
                    <tr key={c.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{c.name}</td>
                      <td className="px-6 py-4">{c.email}</td>
                      <td className="px-6 py-4">{c.subject || "—"}</td>
                      <td className="px-6 py-4 max-w-[300px] truncate">{c.message}</td>
                      <td className="px-6 py-4 text-muted-foreground">{new Date(c.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

```

### File: `src/features/admin/AdminLogin.tsx`
```typescript
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/useAuth";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-card rounded-2xl shadow-2xl p-8 border border-border"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold">Admin Login</h1>
          <p className="text-sm text-muted-foreground mt-1">IGO Agritech Farms Dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type={showPw ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none"
            />
            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl gradient-green text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;

```

### File: `src/features/agri/data/index.ts`
```typescript
// Agri Farming sector data

export const agriProjects = [
  {
    id: "protected-farming",
    title: "Protected Farming",
    description: "State-of-the-art polyhouse and shade net farming with climate-controlled environments for year-round production of high-value crops. Our protected farming solutions provide optimal growing conditions regardless of external weather conditions, enabling farmers to maximize productivity and quality.",
    image: "/images/polyhouse_farming.png",
    benefits: ["Year-round production irrespective of season", "Protection from extreme weather, pests & diseases", "Higher yield quality and premium market price", "Water-efficient drip irrigation integration", "Reduced dependency on pesticides"],
    tech: ["Naturally Ventilated Polyhouse", "Climate Controlled Polyhouse", "Polycarbonate Greenhouse", "Shade Net House", "Mist Chamber"],
    subProjects: [
      { name: "Naturally Ventilated Polyhouse", desc: "Low-cost passive ventilation designs for tropical climates. Ideal for floriculture and vegetables." },
      { name: "Climate Controlled Polyhouse", desc: "Temperature, humidity, and CO2 regulated structures with HVAC for high-value export crops." },
      { name: "Polycarbonate Greenhouse", desc: "Rigid twin-wall polycarbonate panels allowing controlled light diffusion for precision crop growing." },
      { name: "Shade Net House", desc: "UV-stabilized shade net structures reducing heat and light intensity for shade-loving crops." },
      { name: "Mist Chamber", desc: "High-pressure misting systems for rooting cuttings and maintaining humidity in propagation units." },
    ],
  },
  {
    id: "hydroponic-farming",
    title: "Hydroponic Farming",
    description: "Soilless farming technology enabling faster growth cycles and water-efficient agriculture in controlled setups. Our hydroponic systems deliver 90% more water efficiency than traditional farming while producing superior quality crops in a fraction of the time.",
    image: "/images/hydroponic_farming.png",
    benefits: ["90% water savings compared to soil farming", "Up to 30% faster crop growth cycles", "No soil-borne diseases or pests", "Ideal for urban and rooftop farming", "Premium quality produce with high market value"],
    tech: ["NFT Hydroponic System", "Deep Water Culture System", "Vertical Hydroponic Towers", "Commercial Hydroponic Farms", "Indoor Hydroponic Units"],
    subProjects: [
      { name: "NFT Hydroponic System", desc: "Nutrient Film Technique — a thin stream of nutrient solution flows continuously over plant roots in sloped channels." },
      { name: "Deep Water Culture System", desc: "Plant roots are suspended in oxygenated nutrient solution for rapid growth of leafy greens." },
      { name: "Vertical Hydroponic Towers", desc: "Vertical tower systems maximizing space efficiency for urban farms and small footprint production." },
      { name: "Commercial Hydroponic Farms", desc: "Large-scale media-based and bucket systems for commercial production of tomato, capsicum, and cucumber." },
      { name: "Indoor Hydroponic Units", desc: "Compact all-in-one grow boxes and rack systems with integrated LED lighting for indoor production." },
    ],
  },
  {
    id: "vertical-farming",
    title: "Vertical Farming",
    description: "Multi-layer indoor farming systems that maximize production per square foot using cutting-edge technology. Our vertical farming solutions redefine space efficiency, allowing urban entrepreneurs and agripreneurs to produce fresh crops year-round with minimal footprint.",
    image: "/images/vertical_farming.png",
    benefits: ["Maximize yield in minimal floor space", "Fully controlled environment for 365-day production", "Suitable for urban buildings and warehouses", "Minimal water and zero chemical usage", "Premium pricing for urban fresh produce"],
    tech: ["Indoor Vertical Farms", "Commercial Vertical Farming Units", "Smart Grow Room Systems", "LED Spectrum Growing", "IoT Climate Monitoring"],
    subProjects: [
      { name: "Indoor Vertical Farms", desc: "Multi-tier stainless steel racks with full-spectrum LED arrays for high-density indoor leaf and herb production." },
      { name: "Commercial Vertical Farming Units", desc: "Scalable modular vertical farm units designed for warehouses and commercial B2B produce supply." },
      { name: "Smart Grow Room Systems", desc: "Fully automated grow rooms with IoT monitoring, auto-nutrient dosing, and remote crop management." },
    ],
  },
  {
    id: "open-field",
    title: "Open Field Cultivation",
    description: "Traditional farming enhanced with modern technology and practices for large-scale crop production. We design and execute open-field plantation projects with precision irrigation, soil health management, and crop advisory for sustained profitability.",
    image: "/images/open_field_cultivation.png",
    benefits: ["Low initial setup cost compared to protected farming", "Scalable to large acreage in flat terrain", "Wide variety of high-value crops suitable", "Drip and sprinkler irrigation integration", "Expert crop rotation and agronomic advisory"],
    tech: ["Drip Irrigation", "Sprinkler Systems", "Soil Testing & Mapping", "Crop Rotation Planning", "Organic Certification Support"],
    subProjects: [
      { name: "Dragon Fruit Plantation", desc: "A premium, high-ROI perennial plantation with 20+ year production cycle and high market demand in India and exports." },
      { name: "Guava Plantation", desc: "Commercial guava orchards with drip irrigation and high-density planting for early returns and continuous cropping." },
      { name: "Mango Plantation", desc: "High-density mango orchards using grafted saplings of Alphonso, Kesar, and export-grade varieties." },
      { name: "Papaya Plantation", desc: "Short-duration cash crop with 10–12 months to first harvest. Excellent for intercropping." },
      { name: "Fig Plantation", desc: "Drought-tolerant, high-value fig cultivation gaining massive market demand in fresh and dried form." },
      { name: "Blueberry Plantation", desc: "Premium antioxidant-rich blueberry cultivation in high-altitude and cooler climate zones." },
    ],
  },
  {
    id: "vegetable-cultivation",
    title: "Vegetable Cultivation",
    description: "High-yield commercial vegetable production using precision farming techniques. Our vegetable cultivation projects cover a wide range of commercially successful crops grown under drip irrigation and integrated crop management for maximum returns.",
    image: "/images/vegetable_cultivation.png",
    benefits: ["Short crop cycles with quick cash returns", "High demand in domestic and export markets", "Premium price for organically grown vegetables", "Integrated pest management reduces chemical use", "Multiple harvests per year for continuous income"],
    tech: ["Precision Planting", "Integrated Pest Management", "Soil Enrichment", "Drip Fertigation", "Post-harvest Handling"],
    subProjects: [
      { name: "Cucumber Farming", desc: "High-yield cucumber cultivation in open field and polyhouse with trellising for maximum productivity." },
      { name: "Capsicum Farming", desc: "Coloured capsicum (green, red, yellow) farming in polyhouse with international export quality standards." },
      { name: "Tomato Farming", desc: "Indeterminate tomato cultivation with bamboo staking, fertigation, and protected cultivation." },
      { name: "Chilli Farming", desc: "Commercial chilli production with high pungency varieties for export and local processing industries." },
      { name: "Muskmelon Farming", desc: "Water-efficient muskmelon cultivation in open field, highly profitable summer cash crop." },
      { name: "Watermelon Farming", desc: "Large-scale watermelon farming with drip irrigation and plastic mulching for superior results." },
    ],
  },
  {
    id: "medicinal-crops",
    title: "Medicinal Crops",
    description: "Cultivation of high-value medicinal and aromatic plants for the pharmaceutical and wellness industry. With steadily growing demand across India and globally, medicinal crop farming offers excellent returns and drought-resistance advantages.",
    image: "/images/medicinal_crops.png",
    benefits: ["High profit margin per acre vs food crops", "Massive demand from pharma and FMCG industries", "Drought-tolerant with low water requirements", "Organic certification eligible and export potential", "Minimum chemical use for premium pricing"],
    tech: ["Organic Cultivation Practices", "Quality Control & Grading", "Extraction Pre-processing", "Certified Seed & Planting Material", "Contract Farming Linkages"],
    subProjects: [
      { name: "Aloe Vera Farming", desc: "High-demand perennial succulent with gel extraction contracts available from cosmetic and pharma sectors." },
      { name: "Moringa Plantation", desc: "The miracle tree — leaves, pods, and seeds all command premium price in domestic and global markets." },
      { name: "Ginger Farming", desc: "Shade-tolerant intercrop with ginger used in food, medicine, and export. High value per kg." },
      { name: "Turmeric Farming", desc: "Curcumin-rich turmeric farming with certified organic produce commanding 2–3x premium price." },
      { name: "Tapioca Cultivation", desc: "Hardy root crop used widely for starch production and biofuel with consistent industrial demand." },
    ],
  },
  {
    id: "floriculture",
    title: "Floriculture",
    description: "Commercial cultivation of cut flowers and ornamental plants for domestic and export markets. Our floriculture projects are designed to meet the rapidly growing demand for premium fresh flowers from hotels, events, e-commerce platforms, and export markets.",
    image: "/images/floriculture.png",
    benefits: ["Continuous multi-cycle income throughout the year", "High value per kg compared to food crops", "Premium export demand for roses, lilies, gerbera", "Polyhouse cultivation enables consistent quality", "Cold chain logistics and buyer linkages provided"],
    tech: ["Greenhouse Technology", "Cold Chain Logistics", "Light Control & Shading", "Post-harvest Packing Facilities", "Drip Fertigation Systems"],
    subProjects: [
      { name: "Rose Farming", desc: "India's most popular cut flower — Dutch roses in polyhouse for consistent 52-week supply to florists and events." },
      { name: "Jasmine Farming", desc: "High fragrance varieties for garland, temple, and perfume industries with year-round income." },
      { name: "Marigold Farming", desc: "Commercial marigold farming for temple and festival decor — heavy seasonal demand with high ROI." },
      { name: "Exotic Flower Farming", desc: "Premium lilium, gerbera, anthurium, orchid cultivation for export and 5-star hospitality sectors." },
    ],
  },
  {
    id: "mushroom-farming",
    title: "Mushroom Farming",
    description: "Controlled environment cultivation of exotic and medicinal mushrooms with rapid ROI cycles. Mushroom farming is one of the fastest-growing agri-business segments in India with year-round indoor cultivation potential and high market value.",
    image: "/images/mushroom_farm_detail.png",
    benefits: ["Fast turnover — first harvest in 25–30 days", "High profitability with low land requirement", "Controlled environment ensures consistent quality", "Vertical integration possible with processing unit", "Growing demand from restaurants, e-commerce, pharma"],
    tech: ["Humidity & Temperature Control", "Sterile Spawning Environments", "Substrate Preparation", "Spore Incubation Chambers", "Auto-mist & Ventilation Systems"],
    subProjects: [
      { name: "Oyster Mushroom Units", desc: "The most popular variety in India. Fast-growing with excellent market demand in fresh and dried form." },
      { name: "Button Mushroom Units", desc: "White button mushrooms with controlled temperature and composted substrate for steady year-round supply." },
      { name: "Commercial Mushroom Farms", desc: "Large-scale multi-variety mushroom production units designed for urban and peri-urban entrepreneurs." },
    ],
  },
  {
    id: "urban-farming",
    title: "Urban Farming",
    description: "Rooftop and balcony farming solutions bringing fresh produce to urban landscapes. Our urban farming projects provide city dwellers and entrepreneurs with turnkey solutions to grow food in underutilized spaces, creating hyperlocal food systems.",
    image: "/images/microgreens_production.png",
    benefits: ["Zero transport cost and ultra-fresh produce", "Ideal for restaurants, cafes, and organic home supply", "Community integration and social farming model", "Low initial investment with strong branding potential", "Premium pricing for locally grown urban produce"],
    tech: ["Container Farming Systems", "Microgreens Trays & Racks", "Smart Drip Irrigation", "Rooftop Waterproofing", "Compact LED Grow Systems"],
    subProjects: [
      { name: "Rooftop Gardening Projects", desc: "Lightweight growing systems for flat roof terraces — ideal for apartments, malls, and office complexes." },
      { name: "Terrace Farming Projects", desc: "Productive kitchen gardens and mini-farms using raised bed techniques and drip irrigation." },
      { name: "Kitchen Garden Projects", desc: "Home kitchen garden setups with vegetables, herbs, and medicinal plants for personal use." },
      { name: "Microgreens Production Units", desc: "Fast-cycle indoor microgreens production for premium restaurant supply and health-conscious consumers." },
    ],
  },
  {
    id: "nursery",
    title: "Nursery",
    description: "High-quality seedling and sapling production for robust early plant development. Our nursery projects supply certified, disease-free planting material to farmers across the country, forming the backbone of successful agriculture.",
    image: "/images/nursery_plant_production.png",
    benefits: ["Strong, vigorous starts ensuring farm success", "Disease-free certified planting material", "Mass propagation at scale for large projects", "Tissue culture technology for superior genetics", "Year-round production with consistency"],
    tech: ["Tissue Culture Laboratory", "Root Trainers & Plug Trays", "Mist Propagation Chambers", "Hardening Chambers", "Certified Seed Production"],
    subProjects: [
      { name: "Commercial Plant Nursery", desc: "Large-scale production of vegetable seedlings, fruit plant saplings, and ornamental plants for commercial farms." },
      { name: "Seedling Production Units", desc: "Automated seedling production with germination chambers and plug trays for bulk supply to polyhouse farmers." },
      { name: "Tissue Culture Plant Nursery", desc: "High-quality tissue culture plants of banana, sugarcane, potato, and other crops with disease-free guarantee." },
    ],
  },
];

export const agriServices = [
  { title: "Farm Business Planning", description: "Comprehensive agricultural feasibility studies, financial projections, and business plan preparation for bank loans and subsidies.", icon: "📋" },
  { title: "Agri Investment Consulting", description: "Strategic advisory for agricultural investment — land selection, crop economics, and ROI analysis.", icon: "💰" },
  { title: "Polyhouse Installation", description: "End-to-end design, construction, and commissioning of naturally ventilated and climate-controlled polyhouses.", icon: "🏗️" },
  { title: "Hydroponic Setup", description: "Installation of NFT, DWC, and Dutch Bucket hydroponic systems for commercial soilless farming.", icon: "💧" },
  { title: "Vertical Farming Setup", description: "Design and implementation of multi-tier indoor vertical farming units with LED grow lights.", icon: "🏢" },
  { title: "Crop Selection Consulting", description: "Expert agronomy support for selecting the most profitable crops based on climate, soil, and market demand.", icon: "🌾" },
  { title: "Farm Layout Design", description: "Optimal spatial planning and CAD-based farm layout for efficient water, road, and crop zone allocation.", icon: "📐" },
];

export const agriProducts = [
  { title: "Vegetable Seeds", description: "High-germination hybrid and open-pollinated seeds for cucumber, tomato, capsicum, and more.", icon: "🌱" },
  { title: "Fruit Plants", description: "Grafted saplings of dragon fruit, guava, mango, papaya, fig, and blueberry.", icon: "🍎" },
  { title: "Flower Seeds", description: "Premium seeds for rose, jasmine, marigold, chrysanthemum, and exotic varieties.", icon: "🌸" },
  { title: "Medicinal Plants", description: "Live plants and seeds of aloe vera, moringa, turmeric, ginger, and ashwagandha.", icon: "🌿" },
  { title: "NPK Fertilizers", description: "Balanced nitrogen-phosphorus-potassium fertilizers for soil and hydroponic use.", icon: "🧪" },
  { title: "Organic Fertilizers", description: "Vermicompost, neem cake, bone meal, and composted organic manure.", icon: "♻️" },
  { title: "Liquid Fertilizers", description: "Ready-to-use foliar spray fertilizers for quick nutrient uptake.", icon: "💧" },
  { title: "Micronutrients", description: "Zinc, boron, manganese, iron, and copper supplements for micronutrient correction.", icon: "🔬" },
  { title: "Azospirillum", description: "Nitrogen-fixing biofertilizer for cereals, millets, and vegetable crops.", icon: "🦠" },
  { title: "Phosphate Solubilizing Bacteria", description: "PSB biofertilizer to unlock soil-bound phosphorus for plant availability.", icon: "🧫" },
  { title: "Mycorrhiza", description: "VAM (Vesicular-Arbuscular Mycorrhiza) for enhanced root nutrient absorption.", icon: "🍄" },
  { title: "Humic Acid", description: "Soil conditioner that improves soil structure, CEC, and water retention.", icon: "🏔️" },
  { title: "Fulvic Acid", description: "Plant growth stimulant enhancing nutrient transport and cell membrane permeability.", icon: "⚗️" },
  { title: "Amino Acid Nutrients", description: "L-amino acid-based foliar sprays for stress recovery and yield enhancement.", icon: "🧬" },
  { title: "Insecticides", description: "Targeted insecticides for sucking pests, borers, and caterpillars.", icon: "🛡️" },
  { title: "Fungicides", description: "Systemic and contact fungicides for powdery mildew, rust, and blight diseases.", icon: "🧴" },
  { title: "Herbicides", description: "Selective and non-selective herbicides for weed management in field and polyhouse crops.", icon: "🌾" },
  { title: "Bio Pesticides", description: "Neem-based, Trichoderma, Pseudomonas, and Beauveria bassiana bio-control products.", icon: "🐛" },
];


```

### File: `src/features/agri/data/sub-projects.ts`
```typescript
// Detailed sub-project data for each Agri Farming project type

export const agriSubProjects: Record<string, Record<string, any>> = {
  "protected-farming": {
    "naturally-ventilated": {
      id: "naturally-ventilated",
      name: "Naturally Ventilated Polyhouse",
      parentId: "protected-farming",
      parentName: "Protected Farming",
      image: "/images/naturally_ventilated_polyhouse.png",
      tagline: "Low-Cost, High-Yield Passive Ventilation Farming",
      description:
        "A Naturally Ventilated Polyhouse (NVP) uses passive airflow through strategically placed openings — side walls and ridge vents covered with insect-proof nets — to maintain an optimal growing microclimate. This system is designed for tropical and subtropical climates like India where passive ventilation is sufficient for growing a wide range of crops.",
      longDesc:
        "IGO Agritech Farms designs NVP projects with galvanized iron tubular frames, UV-stabilized polyethylene film covers (200-micron), and anti-insect net side walls. Our designs are engineered to local wind patterns, ensuring that cross-ventilation remains effective even during peak summer months. These structures are the most popular choice among first-time agripreneurs and progressive farmers due to their favorable cost-to-ROI ratio.",
      benefits: [
        "Up to 40% higher yield compared to open field farming",
        "Significantly reduced pest and disease pressure",
        "Year-round cultivation of vegetables and flowers",
        "Cost-effective structure — lowest capital investment in protected farming",
        "Ideal for floriculture, vegetables, cucumber, tomato, and capsicum",
        "Reduces water consumption by 30-40% through drip irrigation",
      ],
      tech: [
        "Galvanized Iron Tubular Frame",
        "200-micron UV Polyethylene Film",
        "Anti-insect Net Side Walls (40 Mesh)",
        "Drip Irrigation & Fertigation Unit",
        "Ridge & Side Ventilation System",
      ],
      specs: [
        { label: "Typical Size Range", value: "500 sqm to 5,000+ sqm" },
        { label: "Frame Material", value: "Hot-dip Galvanized Iron (GI) Tubes" },
        { label: "Covering Material", value: "200-Micron UV-Stabilized PE Film" },
        { label: "Ventilation Type", value: "Passive / Natural Convection" },
        { label: "Crops Suited", value: "Vegetables, Flowers, Cucurbits, Herbs" },
        { label: "Lifespan", value: "10–15 Years (Structure), 3–5 Years (Film)" },
      ],
      investment: "₹800 – ₹1,200 per sqm (structure only)",
      roi: "ROI achievable within 18–30 months",
    },
    "climate-controlled": {
      id: "climate-controlled",
      name: "Climate Controlled Polyhouse",
      parentId: "protected-farming",
      parentName: "Protected Farming",
      image: "/images/climate_controlled_polyhouse.png",
      tagline: "Precision Farming for Export-Quality Crops",
      description:
        "A Climate Controlled Polyhouse (CCP) integrates advanced HVAC systems, fogging units, CO2 enrichment, and automated shade curtain systems to maintain the exact temperature, humidity, and light conditions required for premium crop production. These are ideal for growing export-quality Dutch roses, bell peppers, and exotic vegetables.",
      longDesc:
        "Our Climate Controlled Polyhouse designs incorporate Pad-and-Fan cooling systems capable of maintaining 22–28°C even in harsh Indian summers. Automated Argus or Priva Climate Controllers monitor and adjust all parameters 24/7. CO2 dosing systems boost photosynthesis rates by up to 30%, resulting in dramatically higher yields and superior crop uniformity. These facilities are typically integrated with cold chain storage and packing units for direct export.",
      benefits: [
        "Precise temperature (±1°C), humidity (±5% RH) control year-round",
        "3–5x higher yield than open-field cultivation",
        "Consistent export-quality produce meeting European standards",
        "CO2 enrichment boosts photosynthesis and yield by 25–30%",
        "Eligible for government subsidy under NHM/MIDH schemes",
        "Automated operations reduce labor costs significantly",
      ],
      tech: [
        "Pad-and-Fan HVAC Cooling System",
        "Automated Climate Controller (Argus/Priva)",
        "CO2 Enrichment System",
        "Automated Thermal / Shade Curtains",
        "High-Pressure Fogging System",
        "Computerized Drip & Fertigation",
      ],
      specs: [
        { label: "Temperature Control", value: "22°C – 34°C (±1°C accuracy)" },
        { label: "Humidity Control", value: "60% – 90% RH (automated)" },
        { label: "CO2 Level", value: "800–1200 ppm (enriched)" },
        { label: "Ventilation Type", value: "Active / Mechanical (Pad & Fan)" },
        { label: "Crops Suited", value: "Dutch Roses, Bell Peppers, Premium Vegetables" },
        { label: "Typical Size", value: "2,000 sqm to 20,000+ sqm" },
      ],
      investment: "₹2,500 – ₹4,500 per sqm (with equipment)",
      roi: "ROI achievable within 3–5 years via premium market pricing",
    },
    "polycarbonate-greenhouse": {
      id: "polycarbonate-greenhouse",
      name: "Polycarbonate Greenhouse",
      parentId: "protected-farming",
      parentName: "Protected Farming",
      image: "/images/polycarbonate_greenhouse.png",
      tagline: "Premium Light-Diffusing Structures for Precision Crops",
      description:
        "Polycarbonate Greenhouses use rigid twin-wall or multi-wall polycarbonate panels that diffuse sunlight uniformly across the crop canopy, eliminating hotspots and enabling highly uniform crop growth. They offer superior insulation compared to PE film and are ideal for floriculture, hydroponics, and propagation nurseries.",
      longDesc:
        "IGO Agritech builds aluminum or steel-framed polycarbonate greenhouses using 6mm to 16mm multi-wall panels from leading brands. The panels provide 10x better insulation than single-layer glass and diffuse light at 80% transmission with near-zero heat spots. This makes them perfect for high-value crops like orchids, gerbera, anthurium, and lettuce. Polycarbonate greenhouses also integrate seamlessly with hydroponic NFT and Dutch bucket systems.",
      benefits: [
        "Superior uniform light diffusion — no crop burn or shadows",
        "10x better insulation than single-layer glass",
        "Hail-proof, impact-resistant panels rated for 50+ years",
        "Ideal for high-value floriculture and hydroponics",
        "Reduced heating/cooling costs through thermal barrier",
        "Premium aesthetics for agri-tourism and demonstration farms",
      ],
      tech: [
        "Twin / Multi-wall Polycarbonate Panels (6mm–16mm)",
        "Aluminum or Galvanized Steel Frame",
        "UV-Protected Panel Coatings",
        "Integrated Gutter & Rainwater Collection",
        "Automated Roof Vent Windows",
        "Climate Control Integration Ready",
      ],
      specs: [
        { label: "Panel Thickness", value: "6mm, 10mm, or 16mm multi-wall" },
        { label: "Light Transmission", value: "75–80% diffused light" },
        { label: "Panel Lifespan", value: "10–15 Years with UV coating" },
        { label: "Frame", value: "Aluminum or Hot-Dip Galvanized Steel" },
        { label: "Crops Suited", value: "Orchids, Gerbera, Lettuce, Hydroponics" },
        { label: "Typical Size", value: "500 sqm to 10,000+ sqm" },
      ],
      investment: "₹1,800 – ₹3,200 per sqm",
      roi: "Premium pricing for produce; ROI in 2–4 years for floriculture",
    },
    "shade-net-house": {
      id: "shade-net-house",
      name: "Shade Net House",
      parentId: "protected-farming",
      parentName: "Protected Farming",
      image: "/images/shade_net_house.png",
      tagline: "Affordable Protection for Shade-Loving Crops",
      description:
        "Shade Net Houses are cost-effective protected farming structures using HDPE (High-Density Polyethylene) nets of 25% to 90% shade variants to reduce light intensity, temperature, and evaporation. They are widely used for nurseries, leafy vegetables, exotic crops, and summer crop protection.",
      longDesc:
        "IGO Agritech installs flat-roof or arch-type shade net structures using GI pipe frames and UV-stabilized HDPE nets. The shade percentage is selected based on crop requirement — 25–35% for vegetable nurseries, 50% for leafy greens, 75–90% for ornamental and anthurium crops. These low-cost structures can transform productivity in areas prone to extreme heat, strong sunlight, or high UV radiation.",
      benefits: [
        "Reduces temperature by 5–10°C under the net",
        "Protects crops from excessive sunlight, UV damage, and hailstorms",
        "Reduces water evaporation and irrigation frequency",
        "Significant reduction in pest and insect pressure",
        "Most affordable protected farming structure available",
        "Suitable for organic farming certification",
      ],
      tech: [
        "HDPE UV-Stabilized Shade Nets (25%–90%)",
        "GI Pipe Framing (Flat / Arch Type)",
        "Drip Irrigation Integration",
        "Side Wall Net Enclosure Option",
        "Anchor Wire Tensioning System",
      ],
      specs: [
        { label: "Shade Percentage Options", value: "25%, 35%, 50%, 75%, 90%" },
        { label: "Frame Material", value: "Hot-Dip GI Pipe" },
        { label: "Net Material", value: "UV-Stabilized HDPE Knitted Net" },
        { label: "Net Lifespan", value: "5–7 Years" },
        { label: "Crops Suited", value: "Leafy Vegetables, Nursery Plants, Anthurium, Betel" },
        { label: "Typical Size", value: "Any scale — 200 sqm to 50,000+ sqm" },
      ],
      investment: "₹250 – ₹600 per sqm",
      roi: "Very fast ROI — 6–12 months for nursery and vegetable operations",
    },
    "mist-chamber": {
      id: "mist-chamber",
      name: "Mist Chamber",
      parentId: "protected-farming",
      parentName: "Protected Farming",
      image: "/images/polyhouse_farming.png", // fallback since mist chamber image quota exhausted
      tagline: "High-Precision Propagation for Disease-Free Planting Material",
      description:
        "A Mist Chamber is a highly specialized propagation unit that maintains near-100% relative humidity through high-frequency fine mist spray, enabling excellent rooting and establishment of cuttings, tissue culture plantlets, and exotic vegetable seedlings. It is a critical component of any commercial nursery or tissue culture hardening unit.",
      longDesc:
        "IGO Agritech designs mist chambers with polycarbonate or PE film covers, high-pressure misting nozzles on 30–60 second interval timers, and bottom-heating benches (at 25°C) that promote rapid, uniform root development. Controlled humidity (95–100% RH) and temperature (22–28°C) eliminate transplant shock and dramatically increase survival rates. These chambers are essential for banana TC hardening, rose cutting propagation, and exotic ornamental multiplication.",
      benefits: [
        "95–100% relative humidity eliminates transplant shock",
        "Propagation success rate of 85–95% for cuttings",
        "Bottom-heating bench promotes uniform root development",
        "Ideal for tissue culture hardening and exotic ornamentals",
        "Reduces time to rooting by 40% vs. conventional nursery",
        "Precise humidity timer control — automated operation",
      ],
      tech: [
        "High-Pressure Misting Nozzle System",
        "Automated Humidity Timer Controller",
        "Bottom-Heating Bench (Electric or Hot Water)",
        "PE Film or Polycarbonate Enclosure",
        "Temperature Monitoring Sensors",
        "Anti-algae UV Water Treatment",
      ],
      specs: [
        { label: "Humidity Range", value: "95–100% RH (automated misting)" },
        { label: "Temperature Range", value: "22–28°C (controlled)" },
        { label: "Mist Interval", value: "30–90 seconds (timer-controlled)" },
        { label: "Typical Size", value: "20 sqm to 500 sqm" },
        { label: "Applications", value: "TC Hardening, Cuttings, Seedling Establishment" },
        { label: "Rooting Success Rate", value: "85–95%" },
      ],
      investment: "₹1,500 – ₹2,500 per sqm (fully equipped)",
      roi: "High margins from sale of rooted cuttings and TC-hardened plants",
    },
  },
};

```

### File: `src/features/agri/pages/AgriProjectsPage.tsx`
```typescript
import { Link, useParams } from "react-router-dom";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import agriPattern from "@/assets/agri-pattern.png";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { agriProjects } from "../data";

// ---- Individual Project Detail Page ----
const ProjectDetail = ({ project }: { project: any }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link to="/projects/agri" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            ← Back to Agri Farming Projects
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{project.title}</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">{project.description.substring(0, 120)}...</p>
        </div>
      </section>

      {/* Overview section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://www.igoagritechfarms.com/images/Polyhouse.jpeg"; }}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-3xl font-bold mb-4 text-foreground">{project.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p>

              <h3 className="font-display text-xl font-bold mb-4 text-foreground">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {project.benefits.map((b: string) => (
                  <li key={b} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-bold mb-4 text-foreground">Technology Used</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">{t}</span>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sub-Projects section */}
      {project.subProjects && project.subProjects.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold mb-2 text-center">Project Types</h2>
              <p className="text-muted-foreground text-center mb-12">
                We design and execute the following {project.title} variants
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.subProjects.map((sub: any, i: number) => {
                const subSlug = sub.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                return (
                  <AnimatedSection key={sub.name} delay={i * 0.07}>
                    <Link
                      to={`/projects/agri/${project.id}/${subSlug}`}
                      className="group block bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <ChevronRight className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{sub.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{sub.desc}</p>
                      <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        View Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 gradient-hero text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your {project.title} Project?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Our experts will design a fully customised farm solution tailored to your land, budget, and goals.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">
              Contact Our Experts
            </Link>
            <Link to="/projects/agri" className="px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// ---- Main Agri Projects Listing Page ----
export const AgriProjectsPage = () => {
  const { id } = useParams();

  if (id) {
    const project = agriProjects.find((p) => p.id === id);
    if (project) return <ProjectDetail project={project} />;
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Agri Farming Projects</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            End-to-end sustainable farming solutions — from polyhouses to plantations, built for profitability.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-2">Our Agri Farming Projects</h2>
            <p className="text-muted-foreground text-center mb-12">Click on any project to explore its types, benefits, and technology</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agriProjects.map((p: any, i: number) => (
              <AnimatedSection key={p.id} delay={i * 0.08}>
                <Link to={`/projects/agri/${p.id}`} className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://www.igoagritechfarms.com/images/Polyhouse.jpeg"; }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                    {p.subProjects && (
                      <p className="text-xs text-muted-foreground/70">{p.subProjects.length} project types</p>
                    )}
                    <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Start Your Farm Today</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            From feasibility to harvest — IGO Agritech delivers end-to-end farm solutions across India.
          </p>
          <Link to="/contact" className="px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

```

### File: `src/features/agri/pages/AgriServicesPage.tsx`
```typescript
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import agriPattern from "@/assets/agri-pattern.png";
import { agriServices } from "../data";

export const AgriServicesPage = () => (
  <>
    <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Agri Farming Services</h1>
        <p className="text-primary-foreground/70 text-lg">Comprehensive Agricultural Solutions</p>
      </div>
    </section>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agriServices.map((s: any, i: number) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div id={s.title.toLowerCase().replace(/ /g, "-")} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full group">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

```

### File: `src/features/agri/pages/AgriSubProjectPage.tsx`
```typescript
import { Link, useParams } from "react-router-dom";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import agriPattern from "@/assets/agri-pattern.png";
import { ArrowRight, CheckCircle, ChevronLeft, IndianRupee, TrendingUp } from "lucide-react";
import { agriSubProjects } from "../data/sub-projects";

export const AgriSubProjectPage = () => {
  const { id, subId } = useParams();

  const parentData = id ? agriSubProjects[id] : null;
  const project = parentData && subId ? parentData[subId] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32">
        <h1 className="font-display text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">This project type page is coming soon.</p>
        <Link to="/projects/agri" className="px-8 py-3 gradient-gold rounded-full text-foreground font-semibold">
          View All Agri Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6 flex-wrap">
            <Link to="/projects" className="hover:text-primary-foreground transition-colors">Projects</Link>
            <span>›</span>
            <Link to="/projects/agri" className="hover:text-primary-foreground transition-colors">Agri Farming</Link>
            <span>›</span>
            <Link to={`/projects/agri/${project.parentId}`} className="hover:text-primary-foreground transition-colors">{project.parentName}</Link>
            <span>›</span>
            <span className="text-primary-foreground">{project.name}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">{project.name}</h1>
          <p className="text-gold text-lg font-semibold">{project.tagline}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <img
                src={project.image}
                alt={project.name}
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://www.igoagritechfarms.com/images/Polyhouse.jpeg"; }}
              />
              {/* Investment box */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 text-center">
                  <IndianRupee className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground mb-1">Est. Investment</div>
                  <div className="font-bold text-sm text-foreground">{project.investment}</div>
                </div>
                <div className="bg-gold/10 border border-gold/20 rounded-2xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-gold mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground mb-1">Expected ROI</div>
                  <div className="font-bold text-sm text-foreground">{project.roi}</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-3xl font-bold mb-5">{project.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{project.description}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{project.longDesc}</p>

              <h3 className="font-display text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {project.benefits.map((b: string) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-bold mb-4">Technology & Systems</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-sm font-medium rounded-full">{t}</span>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105"
              >
                Get Free Project Estimate <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {project.specs && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold mb-10 text-center">Technical Specifications</h2>
              <div className="max-w-3xl mx-auto bg-card rounded-3xl border border-border overflow-hidden shadow-lg">
                {project.specs.map((spec: { label: string; value: string }, i: number) => (
                  <div key={spec.label} className={`flex justify-between items-center px-8 py-5 ${i % 2 === 0 ? "bg-muted/30" : ""} border-b border-border last:border-0`}>
                    <span className="font-semibold text-foreground">{spec.label}</span>
                    <span className="text-right text-muted-foreground max-w-xs">{spec.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Back Navigation + CTA */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Ready to Build Your {project.name}?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            IGO Agritech delivers end-to-end farm setup — from site selection to first harvest. Contact us for a free site assessment.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">
              Get Free Consultation
            </Link>
            <Link to={`/projects/agri/${project.parentId}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all">
              <ChevronLeft className="w-4 h-4" /> Back to {project.parentName}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

```

### File: `src/features/aquaculture/data/index.ts`
```typescript
// Aquaculture Farming sector data

export const aquaProjects = [
  {
    id: "fish-farming",
    title: "Fish Farming",
    description: "Commercial fish farming projects with advanced water management, feeding systems, and hatchery support for sustainable aquatic production. From earthen ponds to RAS units, we deliver end-to-end fish farming solutions.",
    image: "https://www.igoagritechfarms.com/images/fishfarming.jpg",
    benefits: ["High-quality protein production with strong domestic demand", "Scalable from backyard ponds to large commercial operations", "Water recycling systems reduce operational costs", "Fast growth cycles — harvest within 6–8 months", "Government subsidy available through PMMSY scheme"],
    tech: ["Aeration Systems", "Bio-filtration Units", "Auto Feeders", "Water Quality Sensors", "Hatchery Technology"],
    subProjects: [
      { name: "Traditional Fish Farming", desc: "Earthen pond-based extensive fish culture systems for freshwater species like Rohu, Catla, and Mrigal." },
      { name: "Intensive Fish Farming", desc: "High-density RAS (Recirculating Aquaculture Systems) for maximized production per unit water volume." },
      { name: "Cage Fish Farming", desc: "Floating cage culture in reservoirs, dams, and rivers for commercial-scale fish production without land ownership." },
    ],
  },
  {
    id: "biofloc-farming",
    title: "Biofloc Farming",
    description: "High-density indoor fish and shrimp farming using the revolutionary Biofloc Technology (BFT) that maintains water quality through microbial flocs, eliminates water exchange, and supplements natural protein feed.",
    image: "https://www.igoagritechfarms.com/images/biofloc.jpg",
    benefits: ["Zero water exchange — saves 90% water", "High stocking density up to 300 fish/cubic meter", "Biofloc acts as supplementary protein feed reducing costs", "Indoor controlled environment eliminates weather risks", "Suitable for urban and peri-urban locations"],
    tech: ["Biofloc Tank Systems (Tarpaulin/Concrete)", "Central Aeration & Blower Systems", "Carbon-Nitrogen Ratio Management", "Ammonia & pH Monitoring", "Probiotics & Biofloc Starter Cultures"],
    subProjects: [
      { name: "Biofloc Fish Farming", desc: "High-density tilapia, pangasius, and catfish production in circular biofloc tanks with minimal water exchange." },
      { name: "Biofloc Shrimp Farming", desc: "Indoor vannamei shrimp cultivation in biofloc tanks with controlled salinity and biosecurity protocols." },
    ],
  },
  {
    id: "shrimp-farming",
    title: "Shrimp Farming",
    description: "Intensive and semi-intensive commercial shrimp aquaculture for premium domestic and export markets. Our shrimp farming projects include pond construction, water treatment, and biosecurity from stocking to harvest.",
    image: "https://www.igoagritechfarms.com/images/fishfarming.jpg",
    benefits: ["High export value — ₹300–500/kg for L. vannamei", "Strong demand in USA, EU, Japan, and Middle East markets", "Fast production cycles — harvest in 90–120 days", "MPEDA and CAA certification support included", "Biosecurity protocols minimize disease risk"],
    tech: ["Salinity & pH Management", "Paddle Wheel Aerators", "Bottom Aeration Systems", "Disease Surveillance & PCR Testing", "Effluent Treatment Plants"],
    subProjects: [
      { name: "Vannamei Shrimp Farming", desc: "Premium L. vannamei (Pacific White Shrimp) culture for export — the highest value aquaculture species in India." },
      { name: "Freshwater Prawn Farming", desc: "Giant freshwater prawn (Macrobrachium rosenbergii) farming in earthen ponds and modified biofloc systems." },
    ],
  },
  {
    id: "crab-farming",
    title: "Crab Farming",
    description: "Profitable mud crab fattening and grow-out culture in pens, ponds, and cages. Crab farming offers premium returns with minimal infrastructure and growing export demand.",
    image: "https://www.igoagritechfarms.com/images/fishfarming.jpg",
    benefits: ["Premium market price — ₹800–2000/kg for live mud crabs", "Short fattening cycle of 21–45 days for quick returns", "Hardy species with low mortality rates", "High export demand in Southeast Asia and China", "Low infrastructure and feed cost"],
    tech: ["Cellular Pen & Cage Systems", "Tidal Water Exchange Management", "Specific Crab Diets & Trash Fish Feeding", "Mangrove-friendly Culture Practices", "Live Crab Packing & Cold Chain"],
    subProjects: [
      { name: "Mud Crab Farming", desc: "Grow-out and fattening of mud crabs (Scylla serrata) in tidal ponds and box/cage systems for premium live export." },
    ],
  },
  {
    id: "integrated-aquaculture",
    title: "Integrated Aquaculture",
    description: "Synergistic farming systems that combine fish production with crop cultivation, creating circular nutrient loops that maximize productivity and minimize waste. Our integrated models are designed for sustainability and multiple income streams.",
    image: "https://www.igoagritechfarms.com/images/fishfarming.jpg",
    benefits: ["Circular economy — fish waste becomes plant nutrient", "Multiple income streams from fish + vegetables simultaneously", "Resource-efficient with reduced water and fertilizer use", "Premium organic pricing for aquaponics produce", "Eco-tourism and educational farm potential"],
    tech: ["Aquaponics NFT & Media Bed Systems", "Effluent to Fertigation Pipelines", "Nutrient Cycling Calibration", "Multi-species Stocking Strategies", "Farm Integration Planning"],
    subProjects: [
      { name: "Aquaponics Systems", desc: "Dual fish + plant production system where fish waste feeds the plants and plants filter the water for the fish." },
      { name: "Integrated Fish + Crop Farming", desc: "Combined paddy-cum-fish culture, fish-poultry, and fish-livestock integrated farming models for rural entrepreneurs." },
    ],
  },
];

export const aquaServices = [
  { title: "Fish Farming Setup", description: "Design and construction of commercial fish ponds, tanks, and RAS units.", icon: "🐟" },
  { title: "Biofloc Installation", description: "Complete biofloc tank setup including aeration, plumbing, and biological conditioning.", icon: "🦠" },
  { title: "Aquaculture Pond Construction", description: "Expert excavation, compaction, lining, and shaping of aquaculture ponds.", icon: "🚜" },
  { title: "Aquaponics Setup", description: "Integrated fish-plant systems for simultaneous production and water recycling.", icon: "🌱" },
  { title: "Aquaculture Consulting", description: "Expert advice on species selection, water quality, disease management, and yield optimization.", icon: "📈" },
];

export const aquaProducts = [
  { title: "Fish Feed", description: "High-protein floating and sinking pellets for catfish, tilapia, and carp.", icon: "🧆" },
  { title: "Aerators", description: "Paddlewheel, spiral, and submersible aerators to maintain dissolved oxygen.", icon: "⚙️" },
  { title: "Biofloc Tanks", description: "Durable tarpaulin and FRP tanks in 10,000 to 50,000 litre capacities.", icon: "🛢️" },
  { title: "Pond Liners", description: "Heavy-duty 500-micron HDPE liners to prevent water seepage.", icon: "⛺" },
  { title: "Water Testing Kits", description: "Multiparameter kits for pH, ammonia, nitrite, DO, and salinity monitoring.", icon: "🧪" },
  { title: "Fish Medicines", description: "Antibiotics, probiotics, and water sanitizers for disease prevention and treatment.", icon: "💊" },
];

```

### File: `src/features/aquaculture/pages/AquaProjectsPage.tsx`
```typescript
import { Link, useParams } from "react-router-dom";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import agriPattern from "@/assets/agri-pattern.png";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { aquaProjects } from "../data";

const ProjectDetail = ({ project }: { project: any }) => {
  return (
    <>
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link to="/projects/aquaculture" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">← Back to Aquaculture Projects</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{project.title}</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <img src={project.image} alt={project.title} className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://www.igoagritechfarms.com/images/fishfarming.jpg"; }} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p>
              <h3 className="font-display text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {project.benefits.map((b: string) => (
                  <li key={b} className="flex items-start gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span>{b}</span></li>
                ))}
              </ul>
              <h3 className="font-display text-xl font-bold mb-4">Technology Used</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">{t}</span>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {project.subProjects && project.subProjects.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold mb-2 text-center">Project Types</h2>
              <p className="text-muted-foreground text-center mb-12">We design and execute the following {project.title} variants</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.subProjects.map((sub: any, i: number) => (
                <AnimatedSection key={sub.name} delay={i * 0.07}>
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{sub.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sub.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold hover:gap-2 transition-all">Enquire Now <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 gradient-hero text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Ready to Start Your {project.title} Project?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Our aquaculture experts will design a customised solution for your location, market, and budget.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">Contact Our Experts</Link>
            <Link to="/projects/aquaculture" className="px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all">View All Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export const AquaProjectsPage = () => {
  const { id } = useParams();
  if (id) {
    const project = aquaProjects.find((p) => p.id === id);
    if (project) return <ProjectDetail project={project} />;
  }

  return (
    <>
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Aquaculture Farming Projects</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">End-to-end aquaculture solutions — from fish ponds to biofloc systems, built for profitability.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-2">Our Aquaculture Projects</h2>
            <p className="text-muted-foreground text-center mb-12">Click on any project to explore its types, benefits, and technology</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aquaProjects.map((p: any, i: number) => (
              <AnimatedSection key={p.id} delay={i * 0.08}>
                <Link to={`/projects/aquaculture/${p.id}`} className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://www.igoagritechfarms.com/images/fishfarming.jpg"; }} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                    {p.subProjects && <p className="text-xs text-muted-foreground/70">{p.subProjects.length} project types</p>}
                    <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold">Learn More <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 gradient-hero text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Start Your Aquaculture Farm Today</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">From pond design to harvest — IGO Agritech delivers end-to-end aquaculture solutions across India.</p>
          <Link to="/contact" className="px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">Get Free Consultation</Link>
        </div>
      </section>
    </>
  );
};

```

### File: `src/features/aquaculture/pages/AquaServicesPage.tsx`
```typescript
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import agriPattern from "@/assets/agri-pattern.png";
import { aquaServices } from "../data";

export const AquaServicesPage = () => (
  <>
    <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Aquaculture Services</h1>
        <p className="text-primary-foreground/70 text-lg">Professional Aquaculture Management</p>
      </div>
    </section>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aquaServices.map((s: any, i: number) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div id={s.title.toLowerCase().replace(/ /g, "-")} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full group">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

```

### File: `src/features/aquaculture-farming/pages/AquaServicesPage.tsx`
```typescript

```

### File: `src/features/auth/useAuth.tsx`
```typescript
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

interface AuthCtx {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthCtx>({} as AuthCtx);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdmin = async (userId: string) => {
    const { data } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
    setIsAdmin(!!data);
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        setTimeout(() => checkAdmin(session.user.id), 0);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) checkAdmin(session.user.id);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, session, isAdmin, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

```

### File: `src/features/chatbot/Chatbot.tsx`
```typescript
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { companyInfo, services, courses, projects, faqs } from "@/data";

const knowledgeBase = `
Company: ${companyInfo.name}. ${companyInfo.description}
Phone: ${companyInfo.phone}. Email: ${companyInfo.email}. Location: ${companyInfo.address}.
Services: ${services.map(s => s.title).join(", ")}.
Courses: ${courses.map(c => `${c.title} (${c.duration})`).join(", ")}.
Projects: ${projects.map(p => p.title).join(", ")}.
FAQ: ${faqs.map(f => `Q: ${f.question} A: ${f.answer}`).join(" ")}
`;

type Msg = { role: "user" | "assistant"; content: string };

const quickReplies = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("hello") || lower.includes("hi")) return `Hello! Welcome to IGO Agritech Farms. How can I help you today? I can tell you about our projects, courses, services, or contact information.`;
  if (lower.includes("contact") || lower.includes("phone") || lower.includes("call")) return `You can reach us at ${companyInfo.phone} or email ${companyInfo.email}. We're located in ${companyInfo.address}. You can also WhatsApp us!`;
  if (lower.includes("course") || lower.includes("training")) return `We offer these training programs:\n${courses.map(c => `• ${c.title} (${c.duration})`).join("\n")}\n\nVisit our Courses page or submit an enquiry to learn more!`;
  if (lower.includes("project")) return `Our key projects include:\n${projects.map(p => `• ${p.title}`).join("\n")}\n\nWould you like details on any specific project?`;
  if (lower.includes("service")) return `We provide:\n${services.map(s => `• ${s.title}`).join("\n")}\n\nAny specific service you're interested in?`;
  if (lower.includes("polyhouse")) return `Our Polyhouse Projects feature state-of-the-art climate-controlled environments. Benefits include year-round production, higher yields, and pest protection. We also offer Polyhouse Training (5 Days).`;
  if (lower.includes("hydroponic")) return `Our Hydroponic Projects use soilless farming technology enabling 90% water savings and faster growth cycles. We offer Hydroponics Training (5 Days) as well.`;
  return `Thank you for your question! For detailed information, please call us at ${companyInfo.phone} or visit our Contact page. I can help with queries about our projects, courses, services, and contact information.`;
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! 👋 I'm the IGO Agritech assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Msg = { role: "user", content: input };
    const reply: Msg = { role: "assistant", content: quickReplies(input) };
    setMessages((prev) => [...prev, userMsg, reply]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-green shadow-xl flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="gradient-green px-5 py-4">
              <h3 className="text-primary-foreground font-display font-bold text-lg">IGO Agritech Support</h3>
              <p className="text-primary-foreground/70 text-xs">Ask us anything</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-full bg-muted text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={send}
                className="w-10 h-10 rounded-full gradient-green flex items-center justify-center text-primary-foreground"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

```

### File: `src/features/courses/Courses.tsx`
```typescript
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { courses } from "@/data";
import agriPattern from "@/assets/agri-pattern.png";
import { Leaf, ArrowRight } from "lucide-react";

const Courses = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Training Programs</h1>
          <p className="text-primary-foreground/70 text-lg">Master Modern Agriculture</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c: any, i: number) => (
              <AnimatedSection key={c.id} delay={i * 0.1}>
                <div id={c.id} className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border h-full flex flex-col">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
                    <Leaf className="w-3 h-3" />{c.duration}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{c.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.topics.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <a href="#enquiry" className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                    Enquire Now <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionHeading label="Course Enquiry" />
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-display text-2xl font-bold mb-2">Enquiry Submitted!</h3>
              <p className="text-muted-foreground">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone", type: "tel" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium mb-2">{f.label}</label>
                  <input type={f.type} required value={formData[f.name as keyof typeof formData]} onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 outline-none" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-2">Select Course</label>
                <select required value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 outline-none">
                  <option value="">Choose a course...</option>
                  {courses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 outline-none resize-none" />
              </div>
              <button type="submit" className="w-full py-4 rounded-xl gradient-green text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Submit Enquiry</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Courses;

```

### File: `src/features/engineering/data/index.ts`
```typescript
// Farm Engineering & Consulting data

export const engProjects = [
  {
    id: "farm-infrastructure",
    title: "Farm Infrastructure",
    description: "Design and construction of purpose-built agricultural facilities including cold storage, pack houses, farm buildings, and internal farm roads. We deliver regulatory-compliant, climate-insulated infrastructure that maximises operational efficiency from harvest to dispatch.",
    image: "https://www.igoagritechfarms.com/images/Polyhouse.jpeg",
    benefits: ["Optimized post-harvest workflow reduces crop loss by 30%", "Durable steel and pre-engineered construction", "FSSAI and APEDA regulatory compliant designs", "Scalable from 500 sqft to multi-acre facilities", "Cold chain integration for export-grade produce"],
    tech: ["Pre-engineered Steel Buildings (PEB)", "CAD & 3D Structural Design", "Climate Insulation Systems", "Cold Room Compressor Units", "Sorting & Grading Machines"],
    subProjects: [
      { name: "Cold Storage", desc: "Multi-chamber cold storage facilities from 5MT to 5000MT capacity with precise temperature control for fruits, vegetables, flowers, and dairy products." },
      { name: "Pack House", desc: "APEDA-standard pack houses with washing, sorting, grading, waxing, and packing lines for domestic and export-ready produce." },
      { name: "Farm Buildings", desc: "General farm structures — godowns, implements sheds, worker housing, offices, and training centres designed for agricultural estates." },
      { name: "Farm Roads", desc: "Internal agrarian road networks connecting farm plots, storage, and processing facilities with concrete/WBM construction." },
    ],
  },
  {
    id: "water-management",
    title: "Water Management",
    description: "Advanced water harvesting, conservation, storage, and distribution solutions for sustainable large-scale farming. From rainwater harvesting to precision drip irrigation, we ensure every drop of water is used efficiently on the farm.",
    image: "https://www.igoagritechfarms.com/images/Polyhouse.jpeg",
    benefits: ["Zero-waste water management systems", "Precision output with sensor-driven irrigation", "Drought resilience through rainwater harvesting", "Reduced electricity costs with gravity-fed systems", "Government subsidy eligible (PMKSY, MGNREGS)"],
    tech: ["Sensor-based Drip Irrigation", "Rainwater Harvesting Structures", "HDPE Reservoir Liners", "Solar-powered Water Pumps", "Automated Fertigation Controllers"],
    subProjects: [
      { name: "Rainwater Harvesting", desc: "Farm-scale rooftop and surface runoff rainwater collection systems with storage ponds, filter pits, and recharge structures." },
      { name: "Pond Liner Installation", desc: "Heavy-duty 500/800-micron HDPE and LDPE liner installation for farm ponds, reservoirs, and aquaculture tanks." },
      { name: "Farm Irrigation Systems", desc: "Comprehensive drip, sprinkler, and micro-sprinkler irrigation design, supply, and installation for all crop types." },
      { name: "Borewell & Water Storage Systems", desc: "Deep borewell drilling, overhead tank construction, sump building, and distribution pipeline networks." },
    ],
  },
  {
    id: "solar-agriculture",
    title: "Solar Agriculture",
    description: "Integration of solar power with farming operations to drastically reduce electricity costs and achieve energy independence. Our solar agriculture projects include solar crop dryers, water heaters, fencing systems, and farm lighting — all designed for Indian agricultural environments.",
    image: "https://www.igoagritechfarms.com/images/Polyhouse.jpeg",
    benefits: ["Free energy after payback period of 3–5 years", "Grid independence for remote farm locations", "Carbon credit eligibility for sustainability reporting", "Government subsidies up to 90% under PM-KUSUM scheme", "25-year panel lifespan with minimal maintenance"],
    tech: ["Monocrystalline Solar Panels", "Solar Water Pumps (DC/AC)", "Solar Fencing Controllers", "Solar Crop Drying Technology", "Battery Storage Systems"],
    subProjects: [
      { name: "Solar Crop Dryer", desc: "Solar-powered crop drying units for spices, herbs, fruits, and vegetables — preserving nutritional value with zero fuel cost." },
      { name: "Solar Heater", desc: "Solar thermal water heaters for dairy washing, polyhouse heating, and mushroom farm humidity control systems." },
      { name: "Solar Fencing", desc: "Energized solar fencing perimeter systems to protect crops from wild boar, deer, elephant, and cattle intrusion." },
      { name: "Solar Lighting", desc: "LED solar-powered farm lighting for polyhouses, animal sheds, packing areas, and pathways eliminating grid dependency." },
    ],
  },
  {
    id: "farm-development",
    title: "Farm Development",
    description: "End-to-end transformation of barren, underutilized, or new land into highly productive, precision-mapped agricultural zones. Our farm development services cover surveying, mapping, contour analysis, and laser-guided land leveling for maximum yield potential.",
    image: "https://www.igoagritechfarms.com/images/Polyhouse.jpeg",
    benefits: ["Accurate land assessment before investment", "Laser-leveled fields ensure uniform water distribution", "Contour farming reduces soil erosion by 50%", "Digital farm maps aid in precision agriculture", "Value appreciation of land post-development"],
    tech: ["GPS & RTK Surveying Equipment", "Drone-based Aerial Mapping", "Laser-guided Land Leveling", "GIS Software & Digital Twins", "Soil Testing & Analysis"],
    subProjects: [
      { name: "Land Surveying", desc: "High-accuracy GPS and total-station surveying of agricultural plots for boundary identification, area measurement, and legal documentation." },
      { name: "Topographic Mapping", desc: "Drone-based and satellite topographic mapping showing elevation, slope, and terrain features for optimal farm layout planning." },
      { name: "Contour Mapping", desc: "Contour line analysis for designing bunding, terracing, and water flow patterns to prevent erosion and optimize irrigation." },
      { name: "Land Leveling", desc: "Laser-guided precision land leveling using tractors and laser transmitters for perfectly flat, uniform crop beds." },
    ],
  },
];

export const engServices = [
  { title: "Cold Storage Construction", description: "Design and construction of multi-chamber cold storage from 5MT to 5000MT capacity.", icon: "❄️" },
  { title: "Packhouse Construction", description: "APEDA-standard sorting, grading, washing, and packing facilities.", icon: "📦" },
  { title: "Farm Building Design", description: "Custom godowns, sheds, offices, and worker housing for agricultural estates.", icon: "🏗️" },
  { title: "Drip Irrigation Installation", description: "Complete drip system design, supply, and installation for any crop.", icon: "💧" },
  { title: "Sprinkler Irrigation Systems", description: "Rain gun, pop-up, and rotary sprinkler systems for large-area coverage.", icon: "🌧️" },
  { title: "Water Pump Systems", description: "Solar and electric pump supply, installation, and pipeline distribution.", icon: "🚰" },
  { title: "Land Surveying", description: "GPS and drone-based survey of agricultural land for farm planning.", icon: "🛰️" },
  { title: "GIS Mapping", description: "Geographic Information System mapping for precision agriculture and contour analysis.", icon: "🗺️" },
  { title: "Land Leveling", description: "Laser-guided leveling for uniform water distribution and crop bed preparation.", icon: "🚜" },
  { title: "Polyhouse AMC", description: "Annual maintenance contracts for polyhouse structures, films, and equipment.", icon: "🔧" },
  { title: "Hydroponic System AMC", description: "Scheduled maintenance of hydroponic channels, pumps, and nutrient dosing units.", icon: "⚙️" },
  { title: "Farm Equipment Maintenance", description: "Repair and servicing of irrigation, aeration, and farm machinery.", icon: "🛠️" },
];

export const engProducts = [
  { title: "Polyhouse Sheets", description: "200-micron UV-stabilized polyethylene covering films for polyhouses.", icon: "🏗️" },
  { title: "Shade Nets", description: "HDPE UV-stabilized shade nets in 25%, 35%, 50%, 75%, and 90% density.", icon: "🌤️" },
  { title: "Insect Nets", description: "40-mesh and 50-mesh anti-insect screening for polyhouse side walls.", icon: "🪰" },
  { title: "GI Pipes", description: "Hot-dip galvanized iron pipes for polyhouse frames and farm structures.", icon: "🔩" },
  { title: "NFT Channels", description: "Food-grade PVC NFT channels for hydroponic lettuce and herb systems.", icon: "🥬" },
  { title: "Net Pots", description: "Reusable slotted net pots for hydroponic and aeroponic plant holders.", icon: "🌱" },
  { title: "Hydroponic Nutrients", description: "A+B nutrient solutions and micronutrient blends for soilless farming.", icon: "🧪" },
  { title: "Grow Lights", description: "Full-spectrum LED grow lights for indoor and vertical farming.", icon: "💡" },
  { title: "Water Pumps", description: "Submersible, centrifugal, and solar water pumps for irrigation.", icon: "⚙️" },
  { title: "Drip Irrigation Systems", description: "Inline and online drip lines, emitters, filters, and controllers.", icon: "💧" },
  { title: "Sprinklers", description: "Rain guns, pop-up, and micro-sprinklers for field irrigation.", icon: "🌧️" },
  { title: "Irrigation Pipes", description: "HDPE, PVC, and layflat pipes for water distribution networks.", icon: "🔧" },
  { title: "Solar Dryers", description: "Solar-powered crop drying equipment for spices, herbs, and fruits.", icon: "☀️" },
  { title: "Solar Pumps", description: "DC and AC solar water pumps under PM-KUSUM scheme.", icon: "🔆" },
  { title: "Solar Fencing Systems", description: "Complete solar fencing kits with energizer, wire, posts, and battery.", icon: "⚡" },
];

```

### File: `src/features/engineering/pages/EngineeringProjectsPage.tsx`
```typescript
import { Link, useParams } from "react-router-dom";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import agriPattern from "@/assets/agri-pattern.png";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { engProjects } from "../data";

const ProjectDetail = ({ project }: { project: any }) => {
  return (
    <>
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link to="/projects/engineering" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">← Back to Farm Engineering Projects</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{project.title}</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <img src={project.image} alt={project.title} className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://www.igoagritechfarms.com/images/Polyhouse.jpeg"; }} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p>
              <h3 className="font-display text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {project.benefits.map((b: string) => (
                  <li key={b} className="flex items-start gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span>{b}</span></li>
                ))}
              </ul>
              <h3 className="font-display text-xl font-bold mb-4">Technology Used</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">{t}</span>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {project.subProjects && project.subProjects.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold mb-2 text-center">Project Types</h2>
              <p className="text-muted-foreground text-center mb-12">We design and execute the following {project.title} variants</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.subProjects.map((sub: any, i: number) => (
                <AnimatedSection key={sub.name} delay={i * 0.07}>
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{sub.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sub.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold hover:gap-2 transition-all">Enquire Now <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 gradient-hero text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Ready to Start Your {project.title} Project?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Our engineering team delivers turnkey solutions from design to commissioning across India.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">Contact Our Engineers</Link>
            <Link to="/projects/engineering" className="px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all">View All Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export const EngineeringProjectsPage = () => {
  const { id } = useParams();
  if (id) {
    const project = engProjects.find((p) => p.id === id);
    if (project) return <ProjectDetail project={project} />;
  }

  return (
    <>
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Farm Engineering Projects</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Next-generation agricultural infrastructure — from cold storage to solar fencing, built for Indian farms.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-2">Our Engineering Projects</h2>
            <p className="text-muted-foreground text-center mb-12">Click on any project to explore its types, benefits, and technology</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engProjects.map((p: any, i: number) => (
              <AnimatedSection key={p.id} delay={i * 0.08}>
                <Link to={`/projects/engineering/${p.id}`} className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://www.igoagritechfarms.com/images/Polyhouse.jpeg"; }} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                    {p.subProjects && <p className="text-xs text-muted-foreground/70">{p.subProjects.length} project types</p>}
                    <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold">Learn More <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 gradient-hero text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Transform Your Farm with Modern Engineering</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">From solar fencing to cold storage — IGO Agritech delivers professional farm engineering across India.</p>
          <Link to="/contact" className="px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">Get Free Consultation</Link>
        </div>
      </section>
    </>
  );
};

```

### File: `src/features/engineering/pages/EngineeringServicesPage.tsx`
```typescript
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import agriPattern from "@/assets/agri-pattern.png";
import { engServices } from "../data";

export const EngineeringServicesPage = () => (
  <>
    <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Farm Engineering Services</h1>
        <p className="text-primary-foreground/70 text-lg">Comprehensive Farm Engineering & Consulting Solutions</p>
      </div>
    </section>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engServices.map((s: any, i: number) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div id={s.title.toLowerCase().replace(/ /g, "-")} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full group">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

```

### File: `src/features/enquiry/StudentEnquiry.tsx`
```typescript
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { courses } from "@/data";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { Send, CheckCircle, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const StudentEnquiry = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Name, Email, and Phone number are strictly required.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("course_enquiries").insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      course: formData.course || "General Enquiry",
      message: formData.message.trim() || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Failed to submit enquiry. Please try again.");
    } else {
      setSubmitted(true);
      toast.success("Enquiry submitted successfully!");
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-20 gradient-green relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-sm mb-6">
              <GraduationCap className="w-4 h-4" /> Enroll in Our Programs
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Student Enquiry</h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Submit your enquiry and our team will get back to you with course details, schedules, and pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          {submitted ? (
            <AnimatedSection className="text-center py-16">
              <div className="w-20 h-20 rounded-full gradient-green flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-3">Enquiry Submitted!</h2>
              <p className="text-muted-foreground text-lg">We'll contact you shortly with details about your selected course.</p>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
                  { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-semibold mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={formData[f.name as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold mb-2">Select Course</label>
                  <select
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  >
                    <option value="">Choose a course...</option>
                    {courses.map((c) => (
                      <option key={c.id} value={c.title}>{c.title} ({c.duration})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Any specific questions or requirements?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl gradient-green text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? "Submitting..." : <><Send className="w-5 h-5" /> Submit Enquiry</>}
                </button>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
};

export default StudentEnquiry;

```

### File: `src/features/livestock/data/index.ts`
```typescript
// Livestock Farming sector data

export const livestockProjects = [
  {
    id: "goat-farming",
    title: "Goat Farming",
    description: "Scientifically managed goat farming for dairy, meat, and breeding with modern elevated slatted housing, balanced nutrition, and veterinary health management. A highly profitable, low-investment livestock enterprise with rapid returns.",
    image: "https://www.igoagritechfarms.com/images/goat.jpeg",
    benefits: ["Low initial investment with quick returns within 12 months", "High demand for goat meat (chevon) across India", "Hardy animals with low disease susceptibility", "Multiple income streams — meat, milk, manure, and breeding stock", "Eligible for government subsidy schemes (NABARD, State AH Dept)"],
    tech: ["Elevated Slatted Shed Design", "Balanced TMR Feed Formulation", "Veterinary Health Protocols", "Breed Selection (Boer, Sirohi, Black Bengal)", "Waste-to-Biogas Integration"],
    subProjects: [
      { name: "Commercial Goat Farming", desc: "Large-scale commercial goat rearing with 100–500+ animals for meat and breeding stock sales with scientific shed and feed management." },
      { name: "Integrated Goat Farming", desc: "Goat farming integrated with crop cultivation and fish farming for circular economy benefits — waste as crop manure and fish feed supplement." },
    ],
  },
  {
    id: "sheep-farming",
    title: "Sheep Farming",
    description: "Commercial sheep rearing operations focusing on wool, meat, and dairy production with scientific breed management, nutritional planning, and modern housing designed for Indian climates.",
    image: "https://www.igoagritechfarms.com/images/goat.jpeg",
    benefits: ["Dual-purpose income from wool and mutton", "Low pasture management requirements", "High market demand during Eid and festival seasons", "Hardy breed adaptability to varied Indian climates", "Flock tracking and health monitoring integration"],
    tech: ["Flock Management Systems", "Shearing Equipment & Wool Processing", "Nutritional Feed Planning", "Veterinary Deworming Protocols", "Stall-Fed Intensive Housing"],
    subProjects: [
      { name: "Commercial Sheep Farming", desc: "Intensive stall-fed sheep rearing for premium mutton production with breeds like Nellore, Madras Red, and Deccani." },
    ],
  },
  {
    id: "dairy-farming",
    title: "Dairy Farming",
    description: "High-yield commercial dairy setup with automated milking, climate-controlled cattle housing, and scientific nutritional management for maximum milk production and value-added dairy products.",
    image: "https://www.igoagritechfarms.com/images/goat.jpeg",
    benefits: ["Daily recurring income from milk sales", "Multiple value-added products — ghee, paneer, curd, butter", "Government support through NABARD dairy schemes", "Automated systems reduce manual labor significantly", "Organic dairy commands 2–3x premium price in urban markets"],
    tech: ["Automated Milking Machines", "Barn Cooling & Tunnel Ventilation Systems", "Health Monitoring Smart Collars (IoT)", "Total Mixed Ration (TMR) Feeding", "Bulk Milk Coolers & Chilling Plants"],
    subProjects: [
      { name: "Dairy Farm Setup", desc: "Turnkey commercial dairy farm design and setup with 20–500+ crossbred Holstein-Friesian or Jersey cows, including housing, milking, and feed systems." },
      { name: "Automated Dairy Systems", desc: "Technology-driven dairy operations with automated milking parlours, IoT health collars, auto-feeding systems, and digital milk recording." },
    ],
  },
  {
    id: "poultry-farming",
    title: "Poultry Farming",
    description: "Intensive automated poultry farming for egg (layer) and broiler production with climate-controlled housing, automated feeding lines, biosecurity protocols, and modern waste management.",
    image: "https://www.igoagritechfarms.com/images/poultry.jpg",
    benefits: ["Fastest production cycle — broiler ready in 42 days", "High Feed Conversion Ratio (FCR) with modern genetics", "Massive market demand — India is world's 3rd largest poultry producer", "Automated systems drastically reduce labor overhead", "Multiple cycles per year ensure continuous cash flow"],
    tech: ["Climate Control & Tunnel Ventilation", "Automated Feed Lines & Nipple Drinkers", "Egg Collection Belts (Layer Unit)", "Biomass Litter Management", "Biosecurity & Vaccination Protocols"],
    subProjects: [
      { name: "Broiler Chicken Farms", desc: "Fast-cycle commercial broiler production units with 5,000–50,000+ bird capacity, designed for contract farming with leading integrators." },
      { name: "Layer Chicken Farms", desc: "Egg production units with 2,000–100,000+ layer birds producing 280–320 eggs per bird per year in controlled-environment cage or cage-free systems." },
    ],
  },
  {
    id: "integrated-livestock",
    title: "Integrated Livestock Farming",
    description: "Multi-species farming integrated with agriculture and aquaculture to maximize resource utilization, improve soil fertility with organic manure, generate biogas, and diversify income streams for reduced risk.",
    image: "https://www.igoagritechfarms.com/images/goat.jpeg",
    benefits: ["Risk diversification across multiple livestock types", "Generates organic manure improving soil carbon content", "Biogas from waste reduces energy costs by 60–80%", "Rotational grazing prevents land degradation", "Eco-friendly model eligible for organic certification"],
    tech: ["Rotational Grazing Management", "Biogas & Waste Processing Units", "Integrated Farm Planning Software", "Water Recycling & Effluent Systems", "Multi-Species Housing Design"],
    subProjects: [
      { name: "Goat + Fish Farming", desc: "Integrated model where goat shed runoff and manure is used to fertilize fishponds, enabling dual income from goat meat and fish." },
      { name: "Dairy + Crop Farming", desc: "Combined dairy and crop farming where cattle dung is composted for crop fertigation and crop residues become cattle feed." },
    ],
  },
];

export const livestockServices = [
  { title: "Goat Farm Setup", description: "Design and construction of elevated slatted goat sheds with water and feed systems.", icon: "🐐" },
  { title: "Dairy Farm Setup", description: "Turnkey cow and buffalo dairy farm infrastructure with milking parlour.", icon: "🐄" },
  { title: "Sheep Farm Setup", description: "Fencing, housing, and shearing infrastructure for commercial sheep flocks.", icon: "🐑" },
  { title: "Poultry Farm Setup", description: "Construction of environmentally controlled broiler and layer poultry houses.", icon: "🐔" },
  { title: "Livestock Shed Construction", description: "Custom agricultural sheds using GI pipes, roofing sheets, and slatted flooring.", icon: "🏗️" },
];

export const livestockProducts = [
  { title: "Goat Feed", description: "Balanced concentrate mixtures for rapid weight gain and health.", icon: "🌾" },
  { title: "Cattle Feed", description: "High-energy dairy feed formulated for maximum milk yield.", icon: "🌽" },
  { title: "Mineral Mixtures", description: "Essential calcium, phosphorus, and trace mineral supplements.", icon: "🧂" },
  { title: "Livestock Medicines", description: "Veterinary supplies — vaccines, dewormers, and antibiotics.", icon: "💊" },
  { title: "Livestock Equipment", description: "Milking machines, feeders, drinkers, chaff cutters, and weighing scales.", icon: "⚙️" },
];

```

### File: `src/features/livestock/pages/LivestockProjectsPage.tsx`
```typescript
import { Link, useParams } from "react-router-dom";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import agriPattern from "@/assets/agri-pattern.png";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { livestockProjects } from "../data";

const ProjectDetail = ({ project }: { project: any }) => {
  return (
    <>
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link to="/projects/livestock" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">← Back to Livestock Projects</Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{project.title}</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <img src={project.image} alt={project.title} className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://www.igoagritechfarms.com/images/goat.jpeg"; }} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p>
              <h3 className="font-display text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {project.benefits.map((b: string) => (
                  <li key={b} className="flex items-start gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span>{b}</span></li>
                ))}
              </ul>
              <h3 className="font-display text-xl font-bold mb-4">Technology Used</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">{t}</span>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {project.subProjects && project.subProjects.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold mb-2 text-center">Project Types</h2>
              <p className="text-muted-foreground text-center mb-12">We design and execute the following {project.title} variants</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.subProjects.map((sub: any, i: number) => (
                <AnimatedSection key={sub.name} delay={i * 0.07}>
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{sub.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sub.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold hover:gap-2 transition-all">Enquire Now <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 gradient-hero text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Ready to Start Your {project.title} Project?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Our livestock experts deliver end-to-end farm solutions tailored to your land, budget, and market goals.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">Contact Our Experts</Link>
            <Link to="/projects/livestock" className="px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all">View All Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export const LivestockProjectsPage = () => {
  const { id } = useParams();
  if (id) {
    const project = livestockProjects.find((p) => p.id === id);
    if (project) return <ProjectDetail project={project} />;
  }

  return (
    <>
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Livestock Farming Projects</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Scientifically managed animal husbandry — from goat farming to integrated livestock models.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-2">Our Livestock Projects</h2>
            <p className="text-muted-foreground text-center mb-12">Click on any project to explore its types, benefits, and technology</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {livestockProjects.map((p: any, i: number) => (
              <AnimatedSection key={p.id} delay={i * 0.08}>
                <Link to={`/projects/livestock/${p.id}`} className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://www.igoagritechfarms.com/images/goat.jpeg"; }} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                    {p.subProjects && <p className="text-xs text-muted-foreground/70">{p.subProjects.length} project types</p>}
                    <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold">Learn More <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 gradient-hero text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Start Your Livestock Farm Today</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">From goat sheds to automated dairies — IGO Agritech delivers turnkey animal husbandry solutions across India.</p>
          <Link to="/contact" className="px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">Get Free Consultation</Link>
        </div>
      </section>
    </>
  );
};

```

### File: `src/features/livestock/pages/LivestockServicesPage.tsx`
```typescript
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import agriPattern from "@/assets/agri-pattern.png";
import { livestockServices } from "../data";

export const LivestockServicesPage = () => (
  <>
    <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Livestock Services</h1>
        <p className="text-primary-foreground/70 text-lg">Professional Animal Husbandry Services</p>
      </div>
    </section>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {livestockServices.map((s: any, i: number) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div id={s.title.toLowerCase().replace(/ /g, "-")} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full group">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

```

### File: `src/hooks/use-mobile.tsx`
```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

```

### File: `src/hooks/use-toast.ts`
```typescript
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };

```

### File: `src/layouts/main-layout/AnimatedCounter.tsx`
```typescript
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  value: string;
  label: string;
  delay?: number;
}

const AnimatedCounter = ({ value, label, delay = 0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  const numericPart = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = numericPart;
    const duration = 2000;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * end);
      setDisplayValue(current.toString());
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;

```

### File: `src/layouts/main-layout/AnimatedSection.tsx`
```typescript
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;

```

### File: `src/layouts/main-layout/FloatingBackground.tsx`
```typescript
import { motion } from "framer-motion";

const icons = [
  { emoji: "🌾", x: "8%", y: "15%", size: "text-3xl", delay: 0, duration: 12 },
  { emoji: "🚜", x: "85%", y: "25%", size: "text-2xl", delay: 2, duration: 14 },
  { emoji: "🌳", x: "20%", y: "70%", size: "text-4xl", delay: 1, duration: 10 },
  { emoji: "🌽", x: "75%", y: "60%", size: "text-2xl", delay: 3, duration: 13 },
  { emoji: "🐄", x: "50%", y: "80%", size: "text-3xl", delay: 4, duration: 11 },
  { emoji: "🌻", x: "90%", y: "75%", size: "text-xl", delay: 1.5, duration: 15 },
  { emoji: "💧", x: "15%", y: "45%", size: "text-xl", delay: 2.5, duration: 9 },
  { emoji: "🌱", x: "65%", y: "10%", size: "text-2xl", delay: 0.5, duration: 12 },
  { emoji: "🏡", x: "40%", y: "35%", size: "text-xl", delay: 3.5, duration: 14 },
  { emoji: "☀️", x: "55%", y: "90%", size: "text-2xl", delay: 1, duration: 10 },
];

const FloatingBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {icons.map((icon, i) => (
      <motion.div
        key={i}
        className={`absolute ${icon.size} opacity-[0.06] select-none`}
        style={{ left: icon.x, top: icon.y }}
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: icon.duration,
          delay: icon.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {icon.emoji}
      </motion.div>
    ))}
  </div>
);

export default FloatingBackground;

```

### File: `src/layouts/main-layout/Footer.tsx`
```typescript
import { Link, useLocation } from "react-router-dom";
import { companyInfo } from "@/data";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  if (location.pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-foreground text-primary-foreground relative z-10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">IGO Agritech Farms</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {companyInfo.tagline}. Transforming Indian agriculture through innovation and technology.
            </p>
            <div className="flex gap-3">
              <a href={companyInfo.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity text-sm font-bold">W</a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["About", "Projects", "Services", "Courses", "FAQ", "Contact"].map((l) => (
                <li key={l}><Link to={`/${l.toLowerCase()}`} className="hover:text-gold transition-colors">{l}</Link></li>
              ))}
              <li><Link to="/student-enquiry" className="hover:text-gold transition-colors">Student Enquiry</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Projects</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Polyhouse", "Hydroponics", "Vertical Farming", "Goat Farming", "Aquaculture", "Open Cultivation"].map((p) => (
                <li key={p}><Link to={`/projects/${p.toLowerCase().replace(/ /g, "-")}`} className="hover:text-gold transition-colors">{p}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold" />{companyInfo.phone}</li>
              <li className="flex items-start gap-3"><Mail className="w-4 h-4 mt-0.5 text-gold" />{companyInfo.email}</li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold" />{companyInfo.address}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} IGO Agritech Farms. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

### File: `src/layouts/main-layout/Navbar.tsx`
```typescript
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, companyInfo } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAdmin = location.pathname.startsWith("/admin");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
    setMobileExpanded({});
  }, [location]);

  if (isAdmin) return null;

  const navBg = scrolled || !isHome
    ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
    : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";

  const allLinks = navLinks;

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-10 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="w-16 h-16 flex items-center justify-center bg-white rounded-full p-1.5 shadow-md">
            <img src="https://www.igoagritechfarms.com/images/logo.png" alt="IGO Agritech Farms Logo" className="w-full h-full object-contain" />
          </motion.div>
          <div>
            <span className={`font-display font-bold text-xl leading-tight block ${textColor}`}>IGO Agritech</span>
            <span className={`text-sm font-body ${scrolled || !isHome ? "text-muted-foreground" : "text-primary-foreground/70"}`}>Farms</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {allLinks.map((link: any) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenSubDropdown(null);
              }}
            >
              <Link
                to={link.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 group ${
                  link.label === "Agri Startup Platform"
                    ? "gradient-gold text-foreground hover:opacity-90 shadow-sm"
                    : `${textColor} hover:bg-primary/10`
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
                {link.label !== "Agri Startup Platform" && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-3/4 transition-all duration-300" />
                )}
              </Link>
              
              {link.children && (
                <AnimatePresence>
                  {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[90px] inset-x-0 mx-auto w-[1000px] max-w-[95vw] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-primary/20 border-t-2 border-t-gold p-8 overflow-hidden gradient-hero backdrop-blur-md"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {/* Subtle Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: `url(https://www.igoagritechfarms.com/images/agri-pattern.png)`, backgroundSize: "300px", backgroundRepeat: "repeat" }} />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-0 pointer-events-none" />

                        <div className="flex flex-row justify-between gap-8 relative z-10 w-full">
                          {link.children.map((child: any) => (
                            <div key={child.label} className="flex-1 min-w-[180px]">
                              <Link 
                                to={child.href} 
                                className="block font-display font-bold text-lg text-primary-foreground mb-4 pb-2 hover:text-gold transition-colors uppercase tracking-wider text-left border-b border-primary-foreground/20"
                              >
                                {child.label}
                              </Link>
                              
                              {/* Vertical Sub-Items */}
                              {child.children && (
                                <div className="space-y-2 pt-2">
                                  {child.children.map((subChild: any) => (
                                    <Link 
                                      key={subChild.label} 
                                      to={subChild.href} 
                                      className="flex items-center gap-4 text-sm text-primary-foreground/80 hover:text-gold hover:bg-white/5 px-3 py-2 -mx-3 rounded-lg transition-all group w-full"
                                    >
                                      {subChild.icon && (
                                        <div className="text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all flex-shrink-0 text-primary-foreground/90 group-hover:text-gold">
                                          {subChild.icon}
                                        </div>
                                      )}
                                      <span className="font-medium">{subChild.label}</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3 z-10">
          <a
            href={`tel:${companyInfo.phone}`}
            className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full gradient-gold text-foreground text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all"
          >
            <Phone className="w-4 h-4" />Call Now
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 rounded-lg ${textColor}`}>
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }}><X className="w-6 h-6" /></motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }}><Menu className="w-6 h-6" /></motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-background border-t border-border overflow-y-auto pb-24"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {allLinks.map((link: any, i: number) => (
                <motion.div key={link.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <div className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium ${
                    link.label === "Agri Startup Platform"
                      ? "gradient-gold text-foreground shadow-sm"
                      : "text-foreground hover:bg-muted"
                  }`}>
                    <Link to={link.href} className="flex-1">{link.label}</Link>
                    {link.children && (
                      <button onClick={(e) => { e.preventDefault(); toggleMobileExpand(link.label); }} className="p-1">
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded[link.label] ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Level 2 Mobile */}
                  {link.children && mobileExpanded[link.label] && (
                    <div className="ml-4 border-l-2 border-primary/20 space-y-1 my-1">
                      {link.children.map((child: any) => (
                        <div key={child.label}>
                          <div className="flex items-center justify-between px-4 py-2 text-sm text-foreground/90">
                            <Link to={child.href} className="flex-1">{child.label}</Link>
                            {child.children && (
                              <button onClick={(e) => { e.preventDefault(); toggleMobileExpand(child.label); }} className="p-1">
                                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded[child.label] ? 'rotate-180' : ''}`} />
                              </button>
                            )}
                          </div>
                          
                          {/* Level 3 Mobile */}
                          {child.children && mobileExpanded[child.label] && (
                            <div className="ml-4 border-l-2 border-primary/10 py-1">
                              {child.children.map((subChild: any) => (
                                <Link key={subChild.label} to={subChild.href} className="flex items-center gap-2 px-4 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                                  {subChild.icon && <span className="text-sm leading-none">{subChild.icon}</span>}
                                  <span>{subChild.label}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


```

### File: `src/layouts/main-layout/NavLink.tsx`
```typescript
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };

```

### File: `src/layouts/main-layout/PageTransition.tsx`
```typescript
import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default PageTransition;

```

### File: `src/layouts/main-layout/SectionHeading.tsx`
```typescript
interface Props {
  label: string;
  className?: string;
}

const SectionHeading = ({ label, className = "" }: Props) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{label}</h2>
    <div className="w-20 h-1 gradient-gold mx-auto rounded-full" />
  </div>
);

export default SectionHeading;

```

### File: `src/pages/About.tsx`
```typescript
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { companyInfo, stats } from "@/data";
import agriPattern from "@/assets/agri-pattern.png";

const About = () => (
  <>
    {/* Hero */}
    <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">About Us</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">India's Leading Agri Engineering & Consulting Brand</p>
      </div>
    </section>

    {/* Content */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <img src="https://www.igoagritechfarms.com/images/about.webp" alt="About" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="font-display text-3xl font-bold mt-3 mb-6">Pioneering Agricultural Innovation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              IGO Agritech Farms is India's leading agricultural solutions provider, specializing in innovative and sustainable farming practices. We help farmers and businesses optimize their operations, improve yields, and reduce environmental impact through polyhouse, hydroponics, and joint venture projects.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At IGO Agritech Farms, we are guided by core values of Sustainability, Innovation, Collaboration, and Excellence. With a proven track record, we are passionate about making a positive impact on the world through sustainable agriculture.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-muted rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="bg-card p-10 rounded-3xl border border-border shadow-sm h-full">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading pan-India brand in precision agriculture and Agri-engineering space, driving sustainable and profitable farming across the nation.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-card p-10 rounded-3xl border border-border shadow-sm h-full">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To win lifetime loyal customers across India by farming every sqm of fertile/non-fertile open land, indoor spaces, and rooftops. Our mission is to generate passive income and high profits for customers through modern precision farming.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Awards and Achievements */}
    <section className="py-24 pattern-bg" style={{ "--pattern-url": `url(${agriPattern})` } as React.CSSProperties}>
      <div className="container mx-auto px-4 text-center">
        <SectionHeading label="Awards and Achievements" />
        <p className="text-muted-foreground max-w-3xl mx-auto mb-16">
          Recognized as the <strong>Best Agri-Consulting Brand in the MSME Awards 2024</strong>. Our relentless pursuit of excellence and innovation has made a significant impact shaping the future of farming in India.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "MSME Award 2024", desc: "Best Agri-Consulting Brand" },
            { title: "National Excellence Award", desc: "Outstanding achievements in sustainable agriculture" },
            { title: "SISI Award", desc: "Industrial development & local farmer support" },
            { title: "Trade Award", desc: "Excellence in internatonal trade & export" },
            { title: "Valluvam Award", desc: "Innovative solutions in the agricultural industry" }
          ].map((award, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-gold/30 hover:shadow-gold/20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-gold text-4xl mb-4">🏆</div>
                <h4 className="font-display font-bold text-lg mb-2">{award.title}</h4>
                <p className="text-sm text-muted-foreground">{award.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;

```

### File: `src/pages/Academy.tsx`
```typescript
import { motion } from "framer-motion";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { BookOpen, Users, Award, PlayCircle, GraduationCap, MapPin } from "lucide-react";
import { courses } from "@/data";
import { Link } from "react-router-dom";

const Academy = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 gradient-green relative overflow-hidden mb-20 text-center">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/50 text-gold font-semibold text-sm mb-6">
              Learn from the Experts
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">IGO Academy</h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Empowering the next generation of agri-entrepreneurs with practical skills, modern techniques, and hands-on experience in precision farming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programmes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionHeading label="Training Programmes" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Comprehensive certification programs designed for farm owners, investors, and agribusiness professionals.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <AnimatedSection key={course.id} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] z-0 transition-colors group-hover:bg-gold/10" />
                  <div className="relative z-10 flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-6 uppercase">
                      <PlayCircle className="w-3 h-3" /> {course.duration}
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{course.description}</p>
                  </div>
                  <div className="relative z-10 mt-auto pt-6 border-t border-border/50 flex justify-between items-center">
                    <span className="text-sm font-semibold text-muted-foreground">Limited Seats</span>
                    <Link to="/student-enquiry" className="text-sm font-bold text-primary hover:text-gold transition-colors">Apply Now →</Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Interns & Courses */}
      <section className="py-24 bg-muted mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80" alt="Students in field" className="rounded-3xl shadow-2xl object-cover aspect-square" />
                <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border/50 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-display text-foreground">500+</div>
                      <div className="text-sm text-muted-foreground">Interns Trained</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Interns & Courses</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Gain hands-on experience under the guidance of industry experts. Our university-affiliated internship programs are perfect for agriculture graduates looking to bridge the gap between theory and practical fieldwork.
              </p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex gap-4">
                  <div className="mt-1 bg-gold/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">On-Site Field Training</h4>
                    <p className="text-sm text-muted-foreground mt-1">Work directly on our live commercial polyhouse and hydroponic farms.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-gold/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-gold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Industry Certification</h4>
                    <p className="text-sm text-muted-foreground mt-1">Receive recognized certificates upon completion to boost your resume.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-gold/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-gold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Placement Assistance</h4>
                    <p className="text-sm text-muted-foreground mt-1">Top-performing interns are frequently absorbed into IGO's core teams.</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/student-enquiry" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl gradient-gold text-foreground font-bold hover:scale-105 transition-transform shadow-lg">
                Join Our Next Cohort
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;

```

### File: `src/pages/Blog.tsx`
```typescript
import { motion } from "framer-motion";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Hydroponics in Urban India",
      desc: "How soilless farming is taking over city rooftops and providing fresh produce with 90% less water.",
      image: "https://www.igoagritechfarms.com/images/hydro1.jpg",
      date: "Oct 15, 2024",
      author: "Dr. Rajesh Kumar",
      category: "Hydroponics"
    },
    {
      title: "Why Polyhouse Farming is the Best Investment",
      desc: "An in-depth look at the ROI of climate-controlled agriculture and why investors are flocking to it.",
      image: "https://www.igoagritechfarms.com/images/Polyhouse.jpeg",
      date: "Oct 02, 2024",
      author: "Anita Sharma",
      category: "Agri-Business"
    },
    {
      title: "Goat Farming: A Beginner's Guide",
      desc: "Starting a commercial goat farm requires the right breed selection, shed design, and feed management.",
      image: "https://www.igoagritechfarms.com/images/goat.jpeg",
      date: "Sep 28, 2024",
      author: "Suresh Menon",
      category: "Livestock"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Agritech Insights</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Read our latest articles, research papers, and guides on precision farming, livestock management, and agricultural technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.1}>
                <article className="bg-card rounded-3xl border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.desc}
                    </p>
                    <div className="mt-auto">
                      <button className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

```

### File: `src/pages/Careers.tsx`
```typescript
import { motion } from "framer-motion";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { ArrowRight, Briefcase, Zap, Heart, Sprout } from "lucide-react";
import agriPattern from "@/assets/agri-pattern.png";

const Careers = () => {
  const jobs = [
    { title: "Senior Agronomist", type: "Full Time", location: "Chennai", desc: "Lead our hydroponics and vertical farming research." },
    { title: "Farm Manager", type: "Full Time", location: "Multiple Locations", desc: "Oversee daily operations of large-scale polyhouse projects." },
    { title: "Agriculture Sales Engineer", type: "Full Time", location: "Bangalore", desc: "Drive sales of smart farming setups." },
    { title: "Farm Intern", type: "Internship", location: "Coimbatore", desc: "Hands-on experience in open-field cultivation." }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 pattern-bg relative overflow-hidden" style={{ "--pattern-url": `url(${agriPattern})` } as React.CSSProperties}>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Join the Agritech Revolution</h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Build a meaningful career helping farmers across India grow smarter, faster, and more sustainably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading label="Why Work With Us" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Impactful Work", icon: <Sprout className="w-8 h-8 text-primary" />, desc: "Solve real-world food security and sustainability challenges." },
              { title: "Innovation First", icon: <Zap className="w-8 h-8 text-gold" />, desc: "Work with cutting-edge hydroponic and precision farming tech." },
              { title: "Team Culture", icon: <Heart className="w-8 h-8 text-primary" />, desc: "A collaborative, inclusive, and growth-oriented environment." }
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center h-full">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6 font-display font-bold">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading label="Open Positions" />
          <div className="space-y-4 mt-12">
            {jobs.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.1}>
                <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 justify-between md:items-center">
                  <div>
                    <div className="flex gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">{job.type}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-md">{job.location}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold">{job.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{job.desc}</p>
                  </div>
                  <button className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

```

### File: `src/pages/ConnectStartup.tsx`
```typescript
import { motion } from "framer-motion";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { Lightbulb, Handshake, Users, ShieldCheck, ArrowRight } from "lucide-react";

const ConnectStartup = () => {
  const sections = [
    {
      title: "Startup Incubation",
      icon: <Lightbulb className="w-8 h-8 text-gold" />,
      desc: "Transform your agritech idea into a profitable business. We provide infrastructure, mentorship, and seed funding for promising agricultural innovations.",
      features: ["Prototype Development", "Market Access", "Agronomy Support"]
    },
    {
      title: "Investor Network",
      icon: <Users className="w-8 h-8 text-gold" />,
      desc: "Connect with high-net-worth individuals and institutional investors looking to fund scalable, high-yield agricultural projects across India.",
      features: ["Pitch Deck Refinement", "Valuation Advisory", "Deal Structuring"]
    },
    {
      title: "Joint Venture Farming",
      icon: <Handshake className="w-8 h-8 text-gold" />,
      desc: "Partner with IGO Agritech on large-scale farming projects. You provide the land or capital, and we provide the end-to-end operational expertise.",
      features: ["Risk Mitigation", "Assured Offtake", "Expert Management"]
    },
    {
      title: "Franchise Farming",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      desc: "Start your own smart farm using our proven, standardized blueprints. Get unparalleled support from setup to harvest and sales.",
      features: ["Turnkey Setup", "SOP Training", "Brand Leverage"]
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 gradient-green relative overflow-hidden mb-20">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/50 text-gold font-semibold text-sm mb-6">
              Empowering Agritech Innovators
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">Agri Startup Platform</h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between technology, capital, and agriculture to build India's next generation of smart farms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sections.map((section, idx) => (
            <AnimatedSection key={section.title} delay={idx * 0.1}>
              <div className="bg-card p-10 rounded-3xl shadow-lg border border-border group hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500 z-0" />
                
                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{section.desc}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {section.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-auto">
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase text-sm tracking-wider">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectStartup;

```

### File: `src/pages/Contact.tsx`
```typescript
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import { companyInfo } from "@/data";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import agriPattern from "@/assets/agri-pattern.png";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contacts").insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      subject: formData.subject.trim() || null,
      message: formData.message.trim(),
    });
    setLoading(false);
    if (error) {
      toast.error("Failed to send message. Please try again.");
    } else {
      setSubmitted(true);
      toast.success("Message sent successfully!");
    }
  };

  return (
    <>
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 text-lg">Get in Touch With Our Team</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
              <p className="text-muted-foreground mb-10">Reach out to us for project consultations, training enquiries, or partnership opportunities.</p>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: companyInfo.phone },
                  { icon: Mail, label: "Email", value: companyInfo.email },
                  { icon: MapPin, label: "Location", value: companyInfo.address },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              {submitted ? (
                <div className="text-center py-20 bg-muted rounded-2xl">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground mt-2">We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-muted rounded-2xl p-8">
                  {[
                    { name: "name", label: "Name", type: "text" },
                    { name: "email", label: "Email", type: "email" },
                    { name: "phone", label: "Phone", type: "tel" },
                    { name: "subject", label: "Subject", type: "text" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm font-medium mb-2">{f.label}</label>
                      <input type={f.type} required={f.name !== "phone" && f.name !== "subject"} value={formData[f.name as keyof typeof formData]} onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 outline-none" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 outline-none resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-4 rounded-xl gradient-green text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

```

### File: `src/pages/FAQ.tsx`
```typescript
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { faqs } from "@/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import agriPattern from "@/assets/agri-pattern.png";

const FAQ = () => (
  <>
    <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">FAQ</h1>
        <p className="text-primary-foreground/70 text-lg">Answers to Common Questions</p>
      </div>
    </section>
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <AccordionItem value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5">{f.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{f.answer}</AccordionContent>
              </AccordionItem>
            </AnimatedSection>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default FAQ;

```

### File: `src/pages/home/Home.tsx`
```typescript
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sprout, Tractor, Fish, Wheat, Droplet } from "lucide-react";
import { Suspense, lazy } from "react";
import agriPattern from "@/assets/agri-pattern.png";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import AnimatedCounter from "@/layouts/main-layout/AnimatedCounter";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { stats, projects, services, courses, faqs, companyInfo, products } from "@/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Hero3D = lazy(() => import("@/components/3d/Hero3D"));

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 gradient-hero" />
    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "700px", backgroundRepeat: "repeat" }} />
    <Suspense fallback={null}>
      <Hero3D />
    </Suspense>
    <div className="container mx-auto px-4 relative z-10 py-32">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-3xl">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/80 text-sm mb-8">
          <Sprout className="w-4 h-4" />
          India's Leading Agri Engineering Brand
        </motion.div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          {"Building Profitable Smart Farms Across ".split("").map((char, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.02 }}>
              {char}
            </motion.span>
          ))}
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="text-gold">India</motion.span>
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
          From polyhouse farming to hydroponics, we deliver sustainable agricultural solutions that maximize your return on investment.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }} className="flex flex-wrap gap-4">
          <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 duration-300">
            Explore Projects <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all hover:scale-105 duration-300">
            Start Your Farm
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const CoreSectorsSection = () => {
  const sectors = [
    { title: "Agri Farming", icon: <Wheat className="w-12 h-12" />, link: "/projects/agri", desc: "Polyhouse, Hydroponics & Open Field Cultivation" },
    { title: "Aquaculture Farming", icon: <Fish className="w-12 h-12" />, link: "/projects/aquaculture", desc: "Fish, Biofloc & Shrimp Farming Solutions" },
    { title: "Livestock Farming", icon: <Tractor className="w-12 h-12" />, link: "/projects/livestock", desc: "Goat, Sheep & Dairy Farming Setups" },
    { title: "Farm Engineering", icon: <Droplet className="w-12 h-12" />, link: "/projects/engineering", desc: "Farm Infrastructure & Water Management" },
  ];

  return (
    <section className="py-24 bg-background relative -mt-10 rounded-t-3xl z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading label="Core Business Sectors" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <Link to={s.link} className="block h-full group">
                <motion.div 
                  whileHover={{ 
                    y: -12, 
                    boxShadow: "0 25px 50px -12px rgba(var(--gold-rgb), 0.25)",
                    borderColor: "rgba(var(--gold-rgb), 0.5)"
                  }} 
                  className="bg-card border border-border/50 rounded-2xl p-8 transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden group-hover:bg-primary"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className="mb-8 p-5 bg-primary/10 rounded-full group-hover:bg-gold text-primary group-hover:text-background transition-colors shadow-inner"
                  >
                    {s.icon}
                  </motion.div>
                  
                  <h3 className="font-display font-bold text-xl mb-3 group-hover:text-gold transition-colors z-10">{s.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors z-10">{s.desc}</p>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsPreview = () => (
  <section className="py-24 bg-muted">
    <div className="container mx-auto px-4">
      <SectionHeading label="Featured Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 6).map((p, i) => (
          <AnimatedSection key={p.id} delay={i * 0.1}>
            <Link to={`/projects/${p.id}`} className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
          View All Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="py-24 relative pattern-bg" style={{ "--pattern-url": `url(${agriPattern})` } as React.CSSProperties}>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
    <div className="container mx-auto px-4 relative z-10">
      <SectionHeading label="Our Services" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.slice(0, 8).map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <Link to="/services" className="block h-full group">
              <motion.div 
                whileHover={{ 
                  y: -12, 
                  boxShadow: "0 25px 50px -12px rgba(var(--gold-rgb), 0.25)",
                  borderColor: "rgba(var(--gold-rgb), 0.5)"
                }} 
                className="bg-card border border-border/50 rounded-2xl p-8 transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden group-hover:bg-primary"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className="mb-8 p-5 bg-primary/10 rounded-full group-hover:bg-gold text-primary group-hover:text-background transition-colors shadow-inner flex items-center justify-center text-3xl"
                >
                  {s.icon}
                </motion.div>
                
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-gold transition-colors z-10">{s.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors z-10">{s.description}</p>
              </motion.div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const ProductsSection = () => {
  const productCategories = [
    { title: "Agri Products", link: "/products/agri", icon: <Leaf className="w-10 h-10" />, items: ["Seeds & Fruit Plants", "Bio Fertilizers", "Crop Protection"] },
    { title: "Aquaculture Products", link: "/products/aquaculture", icon: <Fish className="w-10 h-10" />, items: ["Fish Feed", "Biofloc Tanks", "Aerators & Liners"] },
    { title: "Livestock Products", link: "/products/livestock", icon: <Tractor className="w-10 h-10" />, items: ["Goat & Cattle Feed", "Mineral Mixtures", "Equipment"] },
    { title: "Farm Engineering", link: "/products/engineering", icon: <Droplet className="w-10 h-10" />, items: ["Polyhouse Materials", "Hydroponic Equipment", "Solar Pumps"] },
  ];

  return (
    <section className="py-24 bg-muted relative pattern-bg" style={{ "--pattern-url": `url(${agriPattern})` } as React.CSSProperties}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <SectionHeading label="Our Products" />
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Explore our comprehensive range of high-quality agricultural inputs and equipment across all major farming sectors.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.1}>
              <Link to={cat.link} className="block h-full group">
                <motion.div 
                  whileHover={{ 
                    y: -12, 
                    boxShadow: "0 25px 50px -12px rgba(var(--gold-rgb), 0.25)",
                    borderColor: "rgba(var(--gold-rgb), 0.5)"
                  }} 
                  className="bg-card border border-border/50 rounded-2xl p-8 transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden group-hover:bg-primary"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className="mb-6 p-5 bg-primary/10 rounded-full group-hover:bg-gold text-primary group-hover:text-background transition-colors shadow-inner"
                  >
                    {cat.icon}
                  </motion.div>
                  
                  <h3 className="font-display font-bold text-xl mb-4 group-hover:text-gold transition-colors z-10">{cat.title}</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 text-center group-hover:text-primary-foreground/80 transition-colors z-10 w-full">
                    {cat.items.map(item => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-10 relative z-10">
          <Link to="/products" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">View All Products <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => (
  <section className="py-24 relative pattern-bg" style={{ "--pattern-url": `url(${agriPattern})` } as React.CSSProperties}>
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Why Choose IGO</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">Expertise. Innovation. Growth.</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{companyInfo.description}</p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            src="https://www.igoagritechfarms.com/images/about.webp"
            alt="About IGO Agritech"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            loading="lazy"
          />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

const CoursesPreview = () => (
  <section className="py-24 bg-muted">
    <div className="container mx-auto px-4">
      <SectionHeading label="IGO Academy Training" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.slice(0, 3).map((c, i) => (
          <AnimatedSection key={c.id} delay={i * 0.1}>
            <motion.div whileHover={{ y: -5 }} className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border h-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
                <Leaf className="w-3 h-3" />{c.duration}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{c.description}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/academy" className="inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-green text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          View All Training Programs <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Farm Owner, Tamil Nadu",
      quote: "IGO Agritech helped us scale our hydroponic farm output by 300% in just one year. Their engineering and support is unmatched.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Anita Desai",
      role: "Dairy Manager, Gujarat",
      quote: "The automated milking setup and climate-controlled housing revolutionized our dairy operations. Highly recommend their turnkey solutions.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Mohammed Ali",
      role: "Aquaculture Entrepreneur",
      quote: "Transitioning to biofloc farming with IGO's guidance significantly reduced our feed costs and improved water quality drastically.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-24 pattern-bg" style={{ "--pattern-url": `url(${agriPattern})` } as React.CSSProperties}>
      <div className="container mx-auto px-4 text-center">
        <SectionHeading label="Success Stories" />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {stories.map((story) => (
            <div key={story.id} className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-border/50 text-left relative overflow-visible mt-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-10 left-8">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-20 h-20 rounded-full border-4 border-background object-cover shadow-md"
                />
              </div>
              <div className="text-gold mt-6 mb-4 text-xl tracking-widest">★★★★★</div>
              <p className="italic text-muted-foreground mb-6 leading-relaxed">"{story.quote}"</p>
              <div className="font-bold text-foreground font-display text-lg">{story.name}</div>
              <div className="text-sm text-primary font-medium">{story.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => (
  <section className="py-24 bg-muted text-center">
    <div className="container mx-auto px-4 max-w-5xl">
       <SectionHeading label="Latest Blog Articles" />
       <p className="text-muted-foreground mb-12">Stay updated with farming guides, project reports, and agri technology updates.</p>
       <div className="grid md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(i => (
             <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border group">
                <div className="h-48 bg-muted-foreground/10 group-hover:bg-muted-foreground/20 transition-colors"></div>
                <div className="p-6">
                   <div className="text-xs text-primary font-bold mb-2">AGRI TECHNOLOGY</div>
                   <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">The Future of Smart Farming in India</h3>
                   <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary mt-4 inline-block">Read More →</Link>
                </div>
             </div>
          ))}
       </div>
       <div className="mt-12">
         <Link to="/blog" className="text-primary font-semibold hover:underline">View All Articles →</Link>
       </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 gradient-green relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "500px", backgroundRepeat: "repeat" }} />
    <div className="container mx-auto px-4 text-center relative z-10">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Ready to Transform Your Farm?</h2>
        <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
          Join 10000+ successful projects. Let us help you build the future of agriculture.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 duration-300">
            Start Your Farm Project Today
          </Link>
          <a href={`tel:${companyInfo.phone}`} className="px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors">
            Call {companyInfo.phone}
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const Home = () => (
  <>
    <HeroSection />
    <CoreSectorsSection />
    <ProjectsPreview />
    <ServicesPreview />
    <ProductsSection />
    <AboutPreview />
    <CoursesPreview />
    <SuccessStories />
    <BlogSection />
    <CTASection />
  </>
);

export default Home;

```

### File: `src/pages/NotFound.tsx`
```typescript
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

```

### File: `src/pages/Projects.tsx`
```typescript
import { Link, useParams } from "react-router-dom";
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { projects } from "@/data";
import agriPattern from "@/assets/agri-pattern.png";
import { ArrowRight, CheckCircle } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) return <div className="pt-32 text-center">Project not found</div>;

  return (
    <>
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{project.title}</h1>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <img src={project.image} alt={project.title} className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p>
              <h3 className="font-display text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {project.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-primary" />{b}</li>
                ))}
              </ul>
              <h3 className="font-display text-xl font-bold mb-4">Technology Used</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">{t}</span>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-foreground font-semibold hover:opacity-90 transition-opacity">
                Get Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

const Projects = () => {
  const { id } = useParams();
  if (id) return <ProjectDetail />;

  return (
    <>
      <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Our Projects</h1>
          <p className="text-primary-foreground/70 text-lg">Innovative Agricultural Solutions</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.08}>
                <Link to={`/projects/${p.id}`} className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold">Learn More <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

```

### File: `src/pages/Services.tsx`
```typescript
import AnimatedSection from "@/layouts/main-layout/AnimatedSection";
import SectionHeading from "@/layouts/main-layout/SectionHeading";
import { services } from "@/data";
import agriPattern from "@/assets/agri-pattern.png";

const Services = () => (
  <>
    <section className="pt-32 pb-20 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/70 text-lg">Comprehensive Agricultural Solutions</p>
      </div>
    </section>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div id={s.title.toLowerCase().replace(/ /g, "-")} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full group">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;

```

### File: `src/test/example.test.ts`
```typescript
import { describe, it, expect } from "vitest";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});

```

### File: `src/test/setup.ts`
```typescript
import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

```

### File: `src/utils/index.ts`
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

### File: `src/vite-env.d.ts`
```typescript
/// <reference types="vite/client" />

```

### File: `tailwind.config.ts`
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        gold: "hsl(var(--gold))",
        "gold-light": "hsl(var(--gold-light))",
        "green-dark": "hsl(var(--green-dark))",
        brown: "hsl(var(--brown))",
        "brown-light": "hsl(var(--brown-light))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slide-in-left": { "0%": { opacity: "0", transform: "translateX(-40px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.9)" }, "100%": { opacity: "1", transform: "scale(1)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

```

### File: `tsconfig.app.json`
```json
{
  "compilerOptions": {
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleDetection": "force",
    "moduleResolution": "bundler",
    "noEmit": true,
    "noFallthroughCasesInSwitch": false,
    "noImplicitAny": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "skipLibCheck": true,
    "strict": false,
    "target": "ES2020",
    "types": [
      "vitest/globals"
    ],
    "useDefineForClassFields": true
  },
  "include": [
    "src"
  ]
}
```

### File: `tsconfig.json`
```json
{
  "compilerOptions": {
    "allowJs": true,
    "noImplicitAny": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "skipLibCheck": true,
    "strictNullChecks": false
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

### File: `tsconfig.node.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

### File: `vite.config.ts`
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

```

### File: `vitest.config.ts`
```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});

```

