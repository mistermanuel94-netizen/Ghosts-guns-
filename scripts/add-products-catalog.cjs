const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../src/data/products.json');
const translationsPath = path.join(__dirname, '../src/data/products-translations.json');

const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf-8'));

const newProducts = [
  {
    id: 300001,
    name: "FGC-9 Complete Hardware & Rifled Barrel Kit",
    slug: "fgc-9-hardware-barrel-kit",
    permalink: "https://ghost-guns.shop/product/fgc-9-hardware-barrel-kit/",
    sku: "GG-KIT-FGC9-HW",
    prices: {
      price: "34900",
      regular_price: "34900",
      sale_price: "34900",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>349.00</span>",
    images: [
      {
        id: 3001,
        src: "/assets/products/fgc-9-hardware-barrel-kit.jpg",
        localSrc: "/assets/products/fgc-9-hardware-barrel-kit.jpg",
        alt: "FGC-9 Complete Hardware & Rifled Barrel Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Complete hardware completion kit for the iconic FGC-9 9mm pistol-caliber carbine. Includes precision hydraulic rifled 9mm steel barrel, welded bolt assembly, firing pin, recoil springs, trigger pack components, and all necessary metric assembly fasteners."
  },
  {
    id: 300002,
    name: "Liberator 3D Printed Pistol Hardware Kit",
    slug: "liberator-3d-printed-pistol-kit",
    permalink: "https://ghost-guns.shop/product/liberator-3d-printed-pistol-kit/",
    sku: "GG-KIT-LIBERATOR",
    prices: {
      price: "3900",
      regular_price: "3900",
      sale_price: "3900",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>39.00</span>",
    images: [
      {
        id: 3002,
        src: "/assets/products/liberator-3d-printed-pistol-kit.jpg",
        localSrc: "/assets/products/liberator-3d-printed-pistol-kit.jpg",
        alt: "Liberator 3D Printed Pistol Hardware Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 22, name: "Components", slug: "component" }
    ],
    is_in_stock: true,
    short_description: "Essential metal hardware kit for the historic Liberator single-shot 3D printed pistol. Includes hardened stainless steel firing pin, seamless steel barrel chamber insert, hammer spring, and latch hinge pins."
  },
  {
    id: 300003,
    name: "Urutau 9mm Bullpup DIY Build Kit",
    slug: "urutau-9mm-bullpup-build-kit",
    permalink: "https://ghost-guns.shop/product/urutau-9mm-bullpup-build-kit/",
    sku: "GG-KIT-URUTAU-9MM",
    prices: {
      price: "42900",
      regular_price: "42900",
      sale_price: "42900",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>429.00</span>",
    images: [
      {
        id: 3003,
        src: "/assets/products/urutau-9mm-bullpup-build-kit.jpg",
        localSrc: "/assets/products/urutau-9mm-bullpup-build-kit.jpg",
        alt: "Urutau 9mm Bullpup DIY Build Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Next-generation 9mm bullpup DIY firearm hardware kit. Features an ECM-rifled 9mm steel barrel, CNC-machined steel bolt carrier, trigger transfer bar linkage, heavy buffer assembly, and high-tensile fasteners."
  },
  {
    id: 300004,
    name: "Grizzly 2.0 .22 LR 3D Printed Rifle Kit",
    slug: "grizzly-2-0-build-kit",
    permalink: "https://ghost-guns.shop/product/grizzly-2-0-build-kit/",
    sku: "GG-KIT-GRIZZLY2",
    prices: {
      price: "8500",
      regular_price: "8500",
      sale_price: "8500",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>85.00</span>",
    images: [
      {
        id: 3004,
        src: "/assets/products/grizzly-2-0-build-kit.jpg",
        localSrc: "/assets/products/grizzly-2-0-build-kit.jpg",
        alt: "Grizzly 2.0 .22 LR 3D Printed Rifle Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Hardware completion kit for the Grizzly 2.0 .22 LR break-action 3D printed rifle. Features a seamless steel barrel liner, hardened steel breech face insert, heavy-duty hammer spring, and receiver reinforcement bolts."
  },
  {
    id: 300005,
    name: "Shuty AP-9 9mm Semi-Auto DIY Kit",
    slug: "shuty-ap9-build-kit",
    permalink: "https://ghost-guns.shop/product/shuty-ap9-build-kit/",
    sku: "GG-KIT-SHUTY-AP9",
    prices: {
      price: "29900",
      regular_price: "29900",
      sale_price: "29900",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>299.00</span>",
    images: [
      {
        id: 3005,
        src: "/assets/products/shuty-ap9-build-kit.jpg",
        localSrc: "/assets/products/shuty-ap9-build-kit.jpg",
        alt: "Shuty AP-9 9mm Semi-Auto DIY Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Complete mechanical hardware package for Derwood's legendary Shuty AP-9 9mm semi-automatic pistol. Includes 9mm threaded barrel, weighted bolt carrier, dual recoil guide rods and springs, extractor, and fasteners."
  },
  {
    id: 300006,
    name: "Solid Concepts 1911 DMLS Metal Build Kit",
    slug: "solid-concepts-1911-build-kit",
    permalink: "https://ghost-guns.shop/product/solid-concepts-1911-build-kit/",
    sku: "GG-KIT-1911-DMLS",
    prices: {
      price: "79900",
      regular_price: "79900",
      sale_price: "79900",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>799.00</span>",
    images: [
      {
        id: 3006,
        src: "/assets/products/solid-concepts-1911-build-kit.jpg",
        localSrc: "/assets/products/solid-concepts-1911-build-kit.jpg",
        alt: "Solid Concepts 1911 DMLS Metal Build Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 22, name: "Components", slug: "component" }
    ],
    is_in_stock: true,
    short_description: "Premium full-metal completion kit inspired by the world's first 3D printed metal 1911. Includes unfinished 4140/stainless slide, match-grade .45 ACP barrel, barrel bushing, recoil spring assembly, and precision trigger group."
  },
  {
    id: 300007,
    name: "Songbird .22 LR DIY Pistol Hardware Kit",
    slug: "songbird-22-build-kit",
    permalink: "https://ghost-guns.shop/product/songbird-22-build-kit/",
    sku: "GG-KIT-SONGBIRD",
    prices: {
      price: "3200",
      regular_price: "3200",
      sale_price: "3200",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>32.00</span>",
    images: [
      {
        id: 3007,
        src: "/assets/products/songbird-22-build-kit.jpg",
        localSrc: "/assets/products/songbird-22-build-kit.jpg",
        alt: "Songbird .22 LR DIY Pistol Hardware Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Ultra-compact single-shot DIY pistol hardware kit. Includes precision .22 LR steel barrel liner with chamber, high-carbon steel firing pin, trigger spring, hinge pivot pin, and mounting screws."
  },
  {
    id: 300008,
    name: "Plastikov 3D Printed AKM Receiver Hardware Kit",
    slug: "plastikov-akm-build-kit",
    permalink: "https://ghost-guns.shop/product/plastikov-akm-build-kit/",
    sku: "GG-KIT-PLASTIKOV",
    prices: {
      price: "10900",
      regular_price: "10900",
      sale_price: "10900",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>109.00</span>",
    images: [
      {
        id: 3008,
        src: "/assets/products/plastikov-akm-build-kit.jpg",
        localSrc: "/assets/products/plastikov-akm-build-kit.jpg",
        alt: "Plastikov 3D Printed AKM Receiver Hardware Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 22, name: "Components", slug: "component" }
    ],
    is_in_stock: true,
    short_description: "Ivan The Troll's Plastikov AKM hardware kit for 7.62x39mm 3D printed receivers. Includes CNC-cut steel front and rear trunnion reinforcement plates, high-grade cross bolts, hardened steel guide rails, and trigger guard."
  },
  {
    id: 300009,
    name: "EZ22 .22 LR Semi-Auto 3D Printed Carbine Kit",
    slug: "ez22-semi-auto-build-kit",
    permalink: "https://ghost-guns.shop/product/ez22-semi-auto-build-kit/",
    sku: "GG-KIT-EZ22",
    prices: {
      price: "7500",
      regular_price: "7500",
      sale_price: "7500",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>75.00</span>",
    images: [
      {
        id: 3009,
        src: "/assets/products/ez22-semi-auto-build-kit.jpg",
        localSrc: "/assets/products/ez22-semi-auto-build-kit.jpg",
        alt: "EZ22 .22 LR Semi-Auto 3D Printed Carbine Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Dedicated hardware kit for the EZ22 semi-automatic 3D printed .22 LR rifle. Includes pre-chambered barrel liner, recoil spring, guide rod, heavy firing pin, extractor wire, and assembly hardware."
  },
  {
    id: 300010,
    name: "HD22 Heavy Duty .22 LR Semi-Auto Build Kit",
    slug: "hd22-carbine-build-kit",
    permalink: "https://ghost-guns.shop/product/hd22-carbine-build-kit/",
    sku: "GG-KIT-HD22",
    prices: {
      price: "8500",
      regular_price: "8500",
      sale_price: "8500",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>85.00</span>",
    images: [
      {
        id: 3010,
        src: "/assets/products/hd22-carbine-build-kit.jpg",
        localSrc: "/assets/products/hd22-carbine-build-kit.jpg",
        alt: "HD22 Heavy Duty .22 LR Semi-Auto Build Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Heavy-duty upgrade package for the HD22 semi-auto platform. Includes 16-inch seamless rifled barrel liner, weighted bolt hardware, enhanced buffer springs, charging handle hardware, and reinforced pins."
  },
  {
    id: 300011,
    name: "Menendez Mag-Fed 3D Printed Magazine Spring & Follower 5-Pack",
    slug: "menendez-mag-fed-magazine-pack",
    permalink: "https://ghost-guns.shop/product/menendez-mag-fed-magazine-pack/",
    sku: "GG-MAG-MENENDEZ-5PK",
    prices: {
      price: "3400",
      regular_price: "3400",
      sale_price: "3400",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>34.00</span>",
    images: [
      {
        id: 3011,
        src: "/assets/products/menendez-mag-fed-magazine-pack.png",
        localSrc: "/assets/products/menendez-mag-fed-magazine-pack.png",
        alt: "Menendez Mag-Fed 3D Printed Magazine Spring & Follower 5-Pack"
      }
    ],
    categories: [
      { id: 27, name: "Magazines", slug: "magazines" },
      { id: 25, name: "Gun Accessories", slug: "gun-accessories" }
    ],
    is_in_stock: true,
    short_description: "5-pack of tempered high-tensile 17-7 stainless steel magazine springs and anti-tilt followers designed specifically for 3D printed Menendez Glock 17, Glock 19, and FGC-9 magazines."
  },
  {
    id: 300012,
    name: "ScARpup Bullpup Conversion Chassis & Hardware Kit",
    slug: "scarpup-bullpup-build-kit",
    permalink: "https://ghost-guns.shop/product/scarpup-bullpup-build-kit/",
    sku: "GG-KIT-SCARPUP",
    prices: {
      price: "16900",
      regular_price: "16900",
      sale_price: "16900",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>169.00</span>",
    images: [
      {
        id: 3012,
        src: "/assets/products/scarpup-bullpup-build-kit.jpg",
        localSrc: "/assets/products/scarpup-bullpup-build-kit.jpg",
        alt: "ScARpup Bullpup Conversion Chassis & Hardware Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 22, name: "Components", slug: "component" }
    ],
    is_in_stock: true,
    short_description: "Bullpup conversion hardware kit for standard AR-15 and 3D printed receivers. Includes precision trigger linkage rod, front handguard hardware, cheek rest brackets, and ambidextrous charging handle components."
  },
  {
    id: 300013,
    name: "YC-9 'Yeet Cannon' 9mm DIY Build Kit",
    slug: "yc9-yeet-cannon-build-kit",
    permalink: "https://ghost-guns.shop/product/yc9-yeet-cannon-build-kit/",
    sku: "GG-KIT-YC9",
    prices: {
      price: "18900",
      regular_price: "18900",
      sale_price: "18900",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>189.00</span>",
    images: [
      {
        id: 3013,
        src: "/assets/products/yc9-yeet-cannon-build-kit.jpg",
        localSrc: "/assets/products/yc9-yeet-cannon-build-kit.jpg",
        alt: "YC-9 'Yeet Cannon' 9mm DIY Build Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Complete mechanical hardware package for the YC-9 9mm DIY pistol platform. Includes slide internals, 9mm barrel, recoil spring assembly, slide rails, and lower trigger mechanism parts."
  },
  {
    id: 300014,
    name: "Stingray .22 LR Semi-Auto Tactical Pistol Kit",
    slug: "stingray-22-build-kit",
    permalink: "https://ghost-guns.shop/product/stingray-22-build-kit/",
    sku: "GG-KIT-STINGRAY22",
    prices: {
      price: "9500",
      regular_price: "9500",
      sale_price: "9500",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>95.00</span>",
    images: [
      {
        id: 3014,
        src: "/assets/products/stingray-22-build-kit.jpg",
        localSrc: "/assets/products/stingray-22-build-kit.jpg",
        alt: "Stingray .22 LR Semi-Auto Tactical Pistol Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Tactical hardware completion kit for the Stingray .22 LR semi-auto pistol. Features a threaded .22 LR barrel liner, lightweight bolt assembly, dual recoil springs, ejector, and assembly pins."
  },
  {
    id: 300015,
    name: "VZ. 61 Skorpion 3D Printed Receiver Hardware Kit",
    slug: "vz61-skorpion-3d-build-kit",
    permalink: "https://ghost-guns.shop/product/vz61-skorpion-3d-build-kit/",
    sku: "GG-KIT-VZ61-SKORP",
    prices: {
      price: "13500",
      regular_price: "13500",
      sale_price: "13500",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>135.00</span>",
    images: [
      {
        id: 3015,
        src: "/assets/products/vz61-skorpion-3d-build-kit.jpg",
        localSrc: "/assets/products/vz61-skorpion-3d-build-kit.jpg",
        alt: "VZ. 61 Skorpion 3D Printed Receiver Hardware Kit"
      }
    ],
    categories: [
      { id: 21, name: "Build Kits", slug: "build-kit" },
      { id: 22, name: "Components", slug: "component" }
    ],
    is_in_stock: true,
    short_description: "Reinforcement hardware kit for 3D printed VZ. 61 Skorpion submachine gun receivers. Compatible with .32 ACP and .22 LR conversion uppers, including steel mounting brackets, pins, and stock hinge block."
  },
  {
    id: 300016,
    name: "Glock-Pattern Master Rail & Locking Block Kit (DD17.2/DD19.2/DD26.2)",
    slug: "glock-pattern-master-rail-kit",
    permalink: "https://ghost-guns.shop/product/glock-pattern-master-rail-kit/",
    sku: "GG-RAIL-MASTER-GLOCK",
    prices: {
      price: "5900",
      regular_price: "5900",
      sale_price: "5900",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>59.00</span>",
    images: [
      {
        id: 3016,
        src: "/assets/products/glock-pattern-master-rail-kit.png",
        localSrc: "/assets/products/glock-pattern-master-rail-kit.png",
        alt: "Glock-Pattern Master Rail & Locking Block Kit"
      }
    ],
    categories: [
      { id: 22, name: "Components", slug: "component" },
      { id: 28, name: "Rails", slug: "rails" },
      { id: 55, name: "Glock Compatible", slug: "glock" }
    ],
    is_in_stock: true,
    short_description: "Universal CNC-machined stainless steel front rail block and rear rail module kit for FMDA DD17.2, DD19.2, and DD26.2 3D printed frames. Engineered to 0.01mm tolerances for flawless slide cycling."
  },
  {
    id: 300017,
    name: "Hoffman Tactical AR-15 Super Lower Reinforcement Hardware Kit",
    slug: "hoffman-tactical-ar15-reinforcement-kit",
    permalink: "https://ghost-guns.shop/product/hoffman-tactical-ar15-reinforcement-kit/",
    sku: "GG-HW-HOFFMAN-AR15",
    prices: {
      price: "3900",
      regular_price: "3900",
      sale_price: "3900",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>39.00</span>",
    images: [
      {
        id: 3017,
        src: "/assets/products/hoffman-tactical-ar15-reinforcement-kit.png",
        localSrc: "/assets/products/hoffman-tactical-ar15-reinforcement-kit.png",
        alt: "Hoffman Tactical AR-15 Super Lower Reinforcement Hardware Kit"
      }
    ],
    categories: [
      { id: 22, name: "Components", slug: "component" },
      { id: 26, name: "Receivers", slug: "receiver" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Official brass heat-set insert and steel reinforcement rib hardware kit for the Hoffman Tactical AR-15 Super Lower V3. Prevents buffer tower snapping and delivers over 5,000 rounds of durability."
  },
  {
    id: 300018,
    name: "Ruger 10/22 3D Printed Receiver Hardware & V-Block Kit",
    slug: "ruger-1022-printed-receiver-kit",
    permalink: "https://ghost-guns.shop/product/ruger-1022-printed-receiver-kit/",
    sku: "GG-HW-RUGER1022",
    prices: {
      price: "4500",
      regular_price: "4500",
      sale_price: "4500",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">€</span>45.00</span>",
    images: [
      {
        id: 3018,
        src: "/assets/products/ruger-1022-printed-receiver-kit.png",
        localSrc: "/assets/products/ruger-1022-printed-receiver-kit.png",
        alt: "Ruger 10/22 3D Printed Receiver Hardware & V-Block Kit"
      }
    ],
    categories: [
      { id: 22, name: "Components", slug: "component" },
      { id: 26, name: "Receivers", slug: "receiver" },
      { id: 53, name: "3D Printing", slug: "3d-printing" }
    ],
    is_in_stock: true,
    short_description: "Hardened steel V-block, takedown screw, cross pins, and buffer hardware for 3D printed Ruger 10/22 rifle receivers. Compatible with standard factory and aftermarket 10/22 barrels and bolts."
  }
];

// Add products if not already present
for (const prod of newProducts) {
  const existingIdx = products.findIndex(p => p.slug === prod.slug);
  if (existingIdx === -1) {
    products.push(prod);
    console.log('Added product:', prod.slug);
  } else {
    products[existingIdx] = prod;
    console.log('Updated product:', prod.slug);
  }
}

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf-8');
console.log('Total catalog count now:', products.length);

// Generate localized translation entries for each new product in all 8 languages
const localizedEntries = {
  "fgc-9-hardware-barrel-kit": {
    en: { name: "FGC-9 Complete Hardware & Rifled Barrel Kit", short_description: "Complete hardware completion kit for the iconic FGC-9 9mm pistol-caliber carbine. Includes precision hydraulic rifled 9mm steel barrel, welded bolt assembly, firing pin, recoil springs, trigger pack components, and all necessary metric assembly fasteners." },
    de: { name: "FGC-9 Komplettes Beschlag- & Gezogener Lauf Bausatz", short_description: "Kompletter Bausatz für den legendären 9mm FGC-9 Karabiner. Beinhaltet gezogenen 9mm Stahllauf, geschweißten Verschlussblock, Schlagbolzen, Verschlussfedern und alle metrischen Montageschrauben." },
    nl: { name: "FGC-9 Complete Bevestiging & Getrokken Loop Kit", short_description: "Complete hardwarekit voor de iconische FGC-9 9mm karabijn. Bevat precisie getrokken 9mm stalen loop, gelaste grendelconstructie, slagpin, veren en alle benodigde montageschroeven." },
    fr: { name: "Kit Complet Quincaillerie et Canon Rayé FGC-9", short_description: "Kit complet pour la célèbre carabine 9mm FGC-9. Comprend un canon rayé en acier 9mm, ensemble culasse soudée, percuteur, ressorts récupérateurs et visserie métrique complète." },
    es: { name: "Kit Completo de Tornillería y Cañón Estriado FGC-9", short_description: "Kit de montaje completo para la carabina FGC-9 calibre 9mm. Incluye cañón de acero estriado de 9mm, cerrojo soldado, aguja percutora, resortes recuperadores y tornillería métrica." },
    it: { name: "Kit Completo Minuteria e Canna Rigata FGC-9", short_description: "Kit meccanico completo per carabina FGC-9 calibro 9mm. Include canna in acciaio rigata da 9mm, otturatore saldato, percussore, molle di recupero e viteria metrica di montaggio." },
    pl: { name: "Kompletny Zestaw Części i Gwintowanej Lufy FGC-9", short_description: "Kompletny zestaw montażowy do karabinka FGC-9 9mm. Zawiera precyzyjną gwintowaną lufę stalową 9mm, zespawany zamek, iglicę, sprężyny powrotne oraz wszystkie śruby montażowe." },
    bg: { name: "Пълен Комплект Крепежи и Нарезна Цев FGC-9", short_description: "Пълен комплект за сглобяване на 9mm карабина FGC-9. Включва прецизна нарезна стоманена цев 9mm, затворен блок, ударник, възвратни пружини и монтажни крепежи." }
  },
  "liberator-3d-printed-pistol-kit": {
    en: { name: "Liberator 3D Printed Pistol Hardware Kit", short_description: "Essential metal hardware kit for the historic Liberator single-shot 3D printed pistol. Includes hardened stainless steel firing pin, seamless steel barrel chamber insert, hammer spring, and latch hinge pins." },
    de: { name: "Liberator 3D-Druck Pistolen-Beschlagsatz", short_description: "Unerlässlicher Metall-Bausatz für die historische einschüssige 3D-Druck-Pistole Liberator. Enthält gehärteten Edelstahl-Schlagbolzen, Patronenlager-Einsatz, Schlagfeder und Scharnierstifte." },
    nl: { name: "Liberator 3D-Geprint Pistool Bevestigingskit", short_description: "Essentiële metalen hardwarekit voor het historische Liberator enkelschots pistool. Bevat roestvrijstalen slagpin, stalen patroonkamerinzet, hamerveer en scharnierpennen." },
    fr: { name: "Kit Métallique Pistolet Imprimé 3D Liberator", short_description: "Kit de pièces métalliques pour le pistolet monocoup Liberator imprimé en 3D. Comprend percuteur en acier inoxydable, insert de chambre en acier, ressort de chien et goupilles." },
    es: { name: "Kit de Tornillería Pistola 3D Liberator", short_description: "Kit de piezas metálicas esenciales para la pistola monotiro impresa en 3D Liberator. Incluye percutor de acero inoxidable, inserto de recámara de acero, muelle de martillo y pasadores." },
    it: { name: "Kit Minuteria Pistola Stampata 3D Liberator", short_description: "Kit di parti metalliche essenziali per la storica pistola monocolpo Liberator stampata in 3D. Include percussore inox temprato, inserto camera di cartuccia, molla cane e perni." },
    pl: { name: "Zestaw Elementów Metalowych Pistoletu Liberator 3D", short_description: "Niezbędny zestaw elementów metalowych do jednostrzałowego pistoletu drukowanego w 3D Liberator. Zawiera iglicę ze stali nierdzewnej, wkładkę komory nabojowej, sprężynę i sworznie." },
    bg: { name: "Комплект Метални Части за 3D Пистолет Liberator", short_description: "Основен комплект метални части за историческия еднозаряден 3D пистолет Liberator. Включва ударен щифт от неръждаема стомана, стоманена патронна втулка и пружини." }
  },
  "urutau-9mm-bullpup-build-kit": {
    en: { name: "Urutau 9mm Bullpup DIY Build Kit", short_description: "Next-generation 9mm bullpup DIY firearm hardware kit. Features an ECM-rifled 9mm steel barrel, CNC-machined steel bolt carrier, trigger transfer bar linkage, heavy buffer assembly, and high-tensile fasteners." },
    de: { name: "Urutau 9mm Bullpup DIY-Bausatz", short_description: "Next-Gen 9mm Bullpup Selbstbau-Waffensatz. Beinhaltet ECM-gezogenen 9mm Stahllauf, CNC-gefrästen Verschluss, Abzugsstangenübertragung, Puffer und hochfeste Schrauben." },
    nl: { name: "Urutau 9mm Bullpup Zelfbouw Kit", short_description: "Nieuwe generatie 9mm bullpup vuurwapenkit. Voorzien van ECM getrokken 9mm stalen loop, CNC gefreesde grendel, trekkeroverslagstang, buffer en sterke bouten." },
    fr: { name: "Kit d'Assemblage Bullpup 9mm Urutau", short_description: "Kit d'armurerie DIY bullpup 9mm nouvelle génération. Équipé d'un canon 9mm rayé ECM, culasse acier usinée CNC, tringlerie de détente et visserie haute résistance." },
    es: { name: "Kit de Montaje Bullpup 9mm Urutau", short_description: "Kit de hardware para arma bullpup DIY de 9mm de última generación. Incluye cañón de acero estriado ECM de 9mm, cerrojo de acero mecanizado CNC, varilla de disparo y amortiguador." },
    it: { name: "Kit di Montaggio Bullpup 9mm Urutau", short_description: "Kit fai-da-te bullpup calibro 9mm di ultima generazione. Include canna rigata ECM 9mm in acciaio, portaotturatore lavorato CNC, rinvio di scatto e viteria ad alta resistenza." },
    pl: { name: "Zestaw Montażowy Bullpup 9mm Urutau", short_description: "Zestaw nowej generacji do bezkolbowej broni 9mm bullpup. Wyposażony w gwintowaną lufę 9mm ECM, zamek stalowy CNC, cięgno spustowe, zespół zderzaka i śruby o wysokiej wytrzymałości." },
    bg: { name: "Комплект за Сглобяване Bullpup 9mm Urutau", short_description: "Ново поколение комплект за 9mm булпъп DIY оръжие. Разполага с ECM-нарезна стоманена цев 9mm, CNC фрезован затвор, спусъчна щанга и буферен възел." }
  },
  "grizzly-2-0-build-kit": {
    en: { name: "Grizzly 2.0 .22 LR 3D Printed Rifle Kit", short_description: "Hardware completion kit for the Grizzly 2.0 .22 LR break-action 3D printed rifle. Features a seamless steel barrel liner, hardened steel breech face insert, heavy-duty hammer spring, and receiver reinforcement bolts." },
    de: { name: "Grizzly 2.0 .22 LR 3D-Druck Gewehr-Bausatz", short_description: "Bausatz für das Grizzly 2.0 Kipplaufgewehr im Kaliber .22 LR. Enthält nahtlosen Stahllauf-Liner, gehärteten Stoßboden-Einsatz, Schlagfeder und Gehäuse-Verstärkungsbolzen." },
    nl: { name: "Grizzly 2.0 .22 LR 3D-Geprint Geweer Kit", short_description: "Hardwarekit voor het Grizzly 2.0 .22 LR knikloopgeweer. Voorzien van stalen loopinzetstuk, gehard stalen stootbodeminzet, sterke hamerveer en versterkingsbouten." },
    fr: { name: "Kit Carabine Imprimée 3D Grizzly 2.0 .22 LR", short_description: "Kit complet pour la carabine basculante .22 LR Grizzly 2.0 imprimée en 3D. Comprend liner de canon en acier, insert de cuvette de tir, ressort de percussion et boulons." },
    es: { name: "Kit de Rifle Impreso en 3D Grizzly 2.0 .22 LR", short_description: "Kit de montaje para el rifle basculante calibre .22 LR Grizzly 2.0. Incluye ánima de cañón de acero sin costuras, inserto de cierre templado, muelle y tornillos de refuerzo." },
    it: { name: "Kit Fucile Stampato 3D Grizzly 2.0 .22 LR", short_description: "Kit di minuteria per carabina basculante .22 LR Grizzly 2.0. Include liner canna in acciaio senza saldatura, inserto culatta temprato, molla cane e perni fusto." },
    pl: { name: "Zestaw Karabinka z Druku 3D Grizzly 2.0 .22 LR", short_description: "Zestaw do łamanego karabinka drukowanego w 3D Grizzly 2.0 .22 LR. Zawiera stalową surówkę lufy, wkładkę oporową zamka, wzmocnioną sprężynę i śruby konstrukcyjne." },
    bg: { name: "Комплект за 3D Принтирана Пушка Grizzly 2.0 .22 LR", short_description: "Комплект части за чупеща се пушка Grizzly 2.0 .22 LR. Включва безшевна стоманена цевна втулка, закалена затворна вложка, ударна пружина и болтове за рамата." }
  },
  "shuty-ap9-build-kit": {
    en: { name: "Shuty AP-9 9mm Semi-Auto DIY Kit", short_description: "Complete mechanical hardware package for Derwood's legendary Shuty AP-9 9mm semi-automatic pistol. Includes 9mm threaded barrel, weighted bolt carrier, dual recoil guide rods and springs, extractor, and fasteners." },
    de: { name: "Shuty AP-9 9mm Halbautomatik DIY-Bausatz", short_description: "Komplettes Beschlagset für die legendäre Shuty AP-9 9mm Pistole. Beinhaltet 9mm Gewindelauf, beschwerten Verschluss, doppelte Führungsstangen mit Rückstoßfedern und Auszieher." },
    nl: { name: "Shuty AP-9 9mm Semi-Automatische DIY Kit", short_description: "Complete mechanische hardware voor het Shuty AP-9 9mm semi-automatische pistool. Bevat 9mm schroefdraadloop, verzwaarde grendel, dubbele geleidestangen met veren en uitwerper." },
    fr: { name: "Kit Pistolet Semi-Auto Shuty AP-9 9mm", short_description: "Ensemble mécanique pour le pistolet semi-automatique Shuty AP-9 9mm. Comprend canon fileté 9mm, culasse lestée, double tige-guide avec ressorts, extracteur et visserie." },
    es: { name: "Kit Pistola Semiautomática Shuty AP-9 9mm", short_description: "Paquete completo para la pistola semiautomática Shuty AP-9 de 9mm. Incluye cañón roscado de 9mm, cerrojo con contrapeso, varillas guía dobles con muelles recuperadores y extractor." },
    it: { name: "Kit Pistola Semiautomatica Shuty AP-9 9mm", short_description: "Pacchetto meccanico completo per pistola semiautomatica 9mm Shuty AP-9. Include canna filettata 9mm, otturatore appesantito, doppie aste guidamolla con molle ed estrattore." },
    pl: { name: "Zestaw Samopowtarzalnego Pistoletu Shuty AP-9 9mm", short_description: "Kompletny pakiet mechaniczny do pistoletu samopowtarzalnego Shuty AP-9 9mm. Zawiera gwintowaną lufę 9mm, dociążony suwadło-zamek, podwójne żerdzie ze sprężynami i pazur wyciągu." },
    bg: { name: "Комплект за Полуавтоматичен Пистолет Shuty AP-9 9mm", short_description: "Пълен механичен пакет за полуавтоматичен пистолет Shuty AP-9 9mm. Включва нарезна резбована цев 9mm, утежнен затвор, двойни възвратни направляващи и екстрактор." }
  },
  "solid-concepts-1911-build-kit": {
    en: { name: "Solid Concepts 1911 DMLS Metal Build Kit", short_description: "Premium full-metal completion kit inspired by the world's first 3D printed metal 1911. Includes unfinished 4140/stainless slide, match-grade .45 ACP barrel, barrel bushing, recoil spring assembly, and precision trigger group." },
    de: { name: "Solid Concepts 1911 DMLS Metall-Bausatz", short_description: "Premium Ganzmetall-Bausatz inspiriert von der ersten metall-3D-gedruckten 1911. Beinhaltet Schlitten aus 4140/Edelstahl, Matchlauf .45 ACP, Laufbuchse, Verschlussfeder und Abzugsgruppe." },
    nl: { name: "Solid Concepts 1911 DMLS Metaal Bouwkit", short_description: "Premium volmetalen kit geïnspireerd op 's werelds eerste 3D-metaalgeprinte 1911. Bevat onafgewerkte 4140/RVS slede, matchloop .45 ACP, loopbus, veerconstructie en precisietrekkergroep." },
    fr: { name: "Kit Métallique 1911 DMLS Solid Concepts", short_description: "Kit haut de gamme tout métal inspiré du premier 1911 imprimé en 3D métal. Comprend culasse 4140/inox, canon match .45 ACP, bague de canon, ensemble ressort et bloc détente." },
    es: { name: "Kit de Metal 1911 DMLS Solid Concepts", short_description: "Kit premium totalmente metálico inspirado en la primera 1911 metálica impresa en 3D. Incluye corredera en acero 4140/inoxidable, cañón match .45 ACP, buje, guía de muelle y grupo de disparo." },
    it: { name: "Kit Interamente in Metallo 1911 DMLS Solid Concepts", short_description: "Kit premium in metallo ispirato alla prima 1911 stampata in metallo 3D. Include carrello 4140/inox, canna match .45 ACP, boccola, asta guidamolla e gruppo scatto di precisione." },
    pl: { name: "W Pełni Metalowy Zestaw 1911 DMLS Solid Concepts", short_description: "Zestaw inspirowany pierwszym metalowym pistoletem 1911 z druku 3D. Zawiera zamek ze stali 4140/nierdzewnej, lufę match .45 ACP, łożysko lufy, zespół sprężyny powrotnej i mechanizm spustowy." },
    bg: { name: "Изцяло Метален Комплект 1911 DMLS Solid Concepts", short_description: "Премиум комплект, вдъхновен от първия метален 3D принтиран 1911. Включва затвор от стомана 4140/неръждаема, мачова цев .45 ACP, втулка, възвратна пружина и прецизен спусък." }
  },
  "songbird-22-build-kit": {
    en: { name: "Songbird .22 LR DIY Pistol Hardware Kit", short_description: "Ultra-compact single-shot DIY pistol hardware kit. Includes precision .22 LR steel barrel liner with chamber, high-carbon steel firing pin, trigger spring, hinge pivot pin, and mounting screws." },
    de: { name: "Songbird .22 LR DIY Pistolen-Bausatz", short_description: "Ultrakompakter einschüssiger DIY-Pistolenbausatz. Enthält präzisen .22 LR Stahllauf-Liner mit Patronenlager, Kohlenstoffstahl-Schlagbolzen, Abzugsfeder, Scharnierstift und Montageschrauben." },
    nl: { name: "Songbird .22 LR DIY Pistool Hardware Kit", short_description: "Ultracompacte enkelschots doe-het-zelf pistoolkit. Bevat .22 LR stalen loopliner met kamer, koolstofstalen slagpin, trekkerveer, scharnierpen en bevestigingsschroeven." },
    fr: { name: "Kit Pistolet DIY Songbird .22 LR", short_description: "Kit ultra-compact de pistolet monocoup à fabriquer soi-même. Comprend liner de canon .22 LR en acier chambré, percuteur en acier à haute teneur en carbone, ressort et goupilles." },
    es: { name: "Kit Pistola DIY Songbird .22 LR", short_description: "Kit de pistola monotiro DIY ultracompacta. Incluye ánima de cañón de acero .22 LR recamarada, percutor de acero al carbono, muelle de disparador, pasador de bisagra y tornillos." },
    it: { name: "Kit Pistola Fai-Da-Te Songbird .22 LR", short_description: "Kit pistola monocolpo ultracompatta fai-da-te. Include liner canna in acciaio .22 LR con camera di cartuccia, percussore in acciaio al carbonio, molla grilletto e perno cerniera." },
    pl: { name: "Zestaw Pistoletu DIY Songbird .22 LR", short_description: "Ultrakompaktowy zestaw jednostrzałowego pistoletu DIY. Zawiera stalową surówkę lufy .22 LR z komorą, iglicę ze stali wysokowęglowej, sprężynę spustową, oś zawiasu i śruby." },
    bg: { name: "Комплект за DIY Пистолет Songbird .22 LR", short_description: "Ултракомпактен комплект за еднозаряден DIY пистолет. Включва стоманена цевна втулка .22 LR с патронник, ударник от високовъглеродна стомана, спусъчна пружина и болтове." }
  },
  "plastikov-akm-build-kit": {
    en: { name: "Plastikov 3D Printed AKM Receiver Hardware Kit", short_description: "Ivan The Troll's Plastikov AKM hardware kit for 7.62x39mm 3D printed receivers. Includes CNC-cut steel front and rear trunnion reinforcement plates, high-grade cross bolts, hardened steel guide rails, and trigger guard." },
    de: { name: "Plastikov 3D-Druck AKM Gehäuse-Beschlagsatz", short_description: "Ivan The Trolls Plastikov AKM Bausatz für 7.62x39mm 3D-gedruckte Gehäuse. Beinhaltet CNC-gefertigte Stahl-Verstärkungsplatten für vordere und hintere Trunnions, Schrauben, Schienen und Abzugsbügel." },
    nl: { name: "Plastikov 3D-Geprint AKM Ontvanger Kit", short_description: "Plastikov AKM hardwarekit voor 7.62x39mm 3D-geprinte ontvangers. Bevat CNC-gesneden stalen versterkingsplaten voor trunnions, sterke dwarsbouten, gehard stalen rails en trekkerbeugel." },
    fr: { name: "Kit Boîtier AKM Imprimé 3D Plastikov", short_description: "Kit Plastikov pour boîtier AKM 7.62x39mm imprimé en 3D. Comprend plaques de renfort de tourillon avant et arrière en acier CNC, boulons haute résistance, rails de guidage et pontet." },
    es: { name: "Kit Receptor AKM Impreso en 3D Plastikov", short_description: "Kit Plastikov AKM para receptores impresos en 3D en 7.62x39mm. Incluye placas de refuerzo de trunnion delantero y trasero en acero CNC, pernos pasantes, rieles templados y guardamonte." },
    it: { name: "Kit Ricevitore AKM Stampato 3D Plastikov", short_description: "Kit Plastikov AKM per receiver stampati in 3D in calibro 7.62x39mm. Include piastre di rinforzo trunnion anteriore e posteriore in acciaio CNC, bulloni passanti, guide temprate e ponticello." },
    pl: { name: "Zestaw Komory AKM z Druku 3D Plastikov", short_description: "Zestaw do komory AKM 7.62x39mm drukowanej w 3D projektu Ivana. Zawiera stalowe płyty wzmacniające obsady lufy i kolby CNC, śruby poprzeczne, hartowane szyny prowadzące i kabłąk." },
    bg: { name: "Комплект за 3D Принтирана Рама AKM Plastikov", short_description: "Комплект Plastikov за 7.62x39mm 3D принтирани AKM рами. Включва стоманени укрепващи планки за преден и заден блок, високоякостни болтове, закалени направляващи и спусъкова скоба." }
  },
  "ez22-semi-auto-build-kit": {
    en: { name: "EZ22 .22 LR Semi-Auto 3D Printed Carbine Kit", short_description: "Dedicated hardware kit for the EZ22 semi-automatic 3D printed .22 LR rifle. Includes pre-chambered barrel liner, recoil spring, guide rod, heavy firing pin, extractor wire, and assembly hardware." },
    de: { name: "EZ22 .22 LR Halbautomatischer 3D-Druck Karabiner Bausatz", short_description: "Spezifischer Beschlagsatz für den halbautomatischen EZ22 .22 LR 3D-Druck-Karabiner. Enthält fertig gekammerten Lauf-Liner, Verschlussfeder, Führungsstange, Schlagbolzen und Auszieher." },
    nl: { name: "EZ22 .22 LR Semi-Automatische 3D-Geprinte Karabijn Kit", short_description: "Specifieke hardwarekit voor de EZ22 semi-automatische .22 LR karabijn. Bevat gekamerde loopliner, sluitveer, geleidestang, zware slagpin, patroontrekker en bevestigingsmateriaal." },
    fr: { name: "Kit Carabine Semi-Auto .22 LR Imprimée 3D EZ22", short_description: "Kit mécanique pour la carabine semi-automatique EZ22 .22 LR imprimée en 3D. Comprend liner de canon chambré, ressort de rappel, tige-guide, percuteur lourd, extracteur et visserie." },
    es: { name: "Kit Carabina Semiautomática 3D EZ22 .22 LR", short_description: "Kit de hardware para la carabina semiautomática .22 LR impresa en 3D EZ22. Incluye ánima de cañón recamarada, muelle de retroceso, varilla guía, percutor reforzado, extractor y tornillería." },
    it: { name: "Kit Carabina Semiautomatica 3D EZ22 .22 LR", short_description: "Kit meccanico per la carabina semiautomatica .22 LR stampata in 3D EZ22. Include liner canna con camera di scoppio, molla di recupero, asta guida, percussore pesante, estrattore e viti." },
    pl: { name: "Zestaw Samopowtarzalnego Karabinka 3D EZ22 .22 LR", short_description: "Zestaw montażowy do samopowtarzalnego karabinka .22 LR drukowanego w 3D EZ22. Zawiera lufę z komorą nabojową, sprężynę powrotną, żerdź, masywną iglicę, pazur wyciągu i śruby." },
    bg: { name: "Комплект за Полуавтоматична 3D Карабина EZ22 .22 LR", short_description: "Специализиран комплект за полуавтоматична 3D пушка EZ22 .22 LR. Включва нарезна цевна втулка с патронник, възвратна пружина, направляваща, масивен ударник и екстрактор." }
  },
  "hd22-carbine-build-kit": {
    en: { name: "HD22 Heavy Duty .22 LR Semi-Auto Build Kit", short_description: "Heavy-duty upgrade package for the HD22 semi-auto platform. Includes 16-inch seamless rifled barrel liner, weighted bolt hardware, enhanced buffer springs, charging handle hardware, and reinforced pins." },
    de: { name: "HD22 Heavy Duty .22 LR Halbautomatik Bausatz", short_description: "Verstärkter Bausatz für die HD22 Halbautomatik-Plattform. Beinhaltet 16-Zoll gezogenen Lauf-Liner, beschwerte Verschlussbauteile, Pufferfeder, Ladehebel und hochfeste Stifte." },
    nl: { name: "HD22 Heavy Duty .22 LR Semi-Auto Bouwkit", short_description: "Zwaar uitgevoerde bouwset voor het HD22 semi-automatische platform. Bevat 16-inch getrokken stalen loopliner, verzwaarde grendelhardware, bufferveren en spanhendelonderdelen." },
    fr: { name: "Kit Renforcé Carabine Semi-Auto HD22 .22 LR", short_description: "Version renforcée pour la plateforme semi-automatique HD22. Comprend canon liner rayé 16 pouces, visserie de culasse lestée, ressorts tampons et levier d'armement." },
    es: { name: "Kit Reforzado Carabina Semiautomática HD22 .22 LR", short_description: "Kit de alta resistencia para la carabina semiautomática HD22. Incluye ánima de cañón estriada de 16 pulgadas, cerrojo reforzado contrapesado, muelles de buffer y palanca de carga." },
    it: { name: "Kit Rinforzato Carabina Semiautomatica HD22 .22 LR", short_description: "Pacchetto potenziato per la piattaforma semiautomatica HD22. Include liner canna rigata da 16 pollici, componenti otturatore appesantito, molla tampone e manetta di armamento." },
    pl: { name: "Wzmocniony Zestaw Karabinka Samopowtarzalnego HD22 .22 LR", short_description: "Pakiet Heavy Duty do platformy HD22 .22 LR. Zawiera 16-calową gwintowaną lufę, dociążenie zamka, wzmocnione sprężyny bufora, rękojeść przeładowania i utwardzane piny." },
    bg: { name: "Усилен Комплект за Полуавтоматична Карабина HD22 .22 LR", short_description: "Тежкотоварен пакет за полуавтоматична платформа HD22. Включва 16-инчова нарезна цев, утежнен затворен блок, усилени буферни пружини и лост за зареждане." }
  },
  "menendez-mag-fed-magazine-pack": {
    en: { name: "Menendez Mag-Fed 3D Printed Magazine Spring & Follower 5-Pack", short_description: "5-pack of tempered high-tensile 17-7 stainless steel magazine springs and anti-tilt followers designed specifically for 3D printed Menendez Glock 17, Glock 19, and FGC-9 magazines." },
    de: { name: "Menendez Mag-Fed 3D-Druck Magazinfedern & Zubringer 5er-Pack", short_description: "5er-Pack vergütete 17-7 Edelstahl-Magazinfedern und kippsichere Zubringer, speziell entwickelt für 3D-gedruckte Menendez Glock 17, Glock 19 und FGC-9 Magazine." },
    nl: { name: "Menendez Mag-Fed 3D-Geprinte Magazijnveren & Volgers 5-Pack", short_description: "5-pack van geharde 17-7 roestvrijstalen magazijnveren en kantelbestendige volgers, ontworpen voor 3D-geprinte Menendez Glock 17, 19 en FGC-9 magazijnen." },
    fr: { name: "Pack de 5 Ressorts et Élévateurs pour Chargeurs 3D Menendez", short_description: "Lot de 5 ressorts de chargeur en acier inoxydable 17-7 trempé et élévateurs anti-basculement spécialement conçus pour chargeurs imprimés 3D Menendez Glock 17/19 et FGC-9." },
    es: { name: "Pack de 5 Muelles y Elevadores para Cargadores 3D Menendez", short_description: "Pack de 5 muelles de cargador en acero inoxidable 17-7 y tejas elevadoras antibasculantes diseñados específicamente para cargadores 3D Menendez Glock 17/19 y FGC-9." },
    it: { name: "Confezione da 5 Molle ed Elevatori per Caricatori 3D Menendez", short_description: "Confezione da 5 molle per caricatori in acciaio inox 17-7 ed elevatori antiribaltamento progettati specificamente per caricatori stampati 3D Menendez Glock 17/19 e FGC-9." },
    pl: { name: "Zestaw 5 Sprężyn i Podajników do Magazynków 3D Menendez", short_description: "Zestaw 5 sprężyn ze stali nierdzewnej 17-7 i zapobiegających przekoszeniu podajników zaprojektowanych do drukowanych w 3D magazynków Menendez Glock 17, 19 i FGC-9." },
    bg: { name: "Пакет 5 Броя Пружини и Подавачи за 3D Пълнители Menendez", short_description: "Пакет от 5 пружини от неръждаема стомана 17-7 и антикосови подавачи, проектирани специално за 3D принтирани пълнители Menendez за Glock 17/19 и FGC-9." }
  },
  "scarpup-bullpup-build-kit": {
    en: { name: "ScARpup Bullpup Conversion Chassis & Hardware Kit", short_description: "Bullpup conversion hardware kit for standard AR-15 and 3D printed receivers. Includes precision trigger linkage rod, front handguard hardware, cheek rest brackets, and ambidextrous charging handle components." },
    de: { name: "ScARpup Bullpup Umbau-Chassis & Beschlagsatz", short_description: "Bullpup Umbausatz für Standard-AR-15 und 3D-Druck-Gehäuse. Beinhaltet Abzugsstange, Handschutz-Beschläge, Wangenauflage-Halterungen und beidseitigen Ladehebel." },
    nl: { name: "ScARpup Bullpup Conversiechassis & Hardware Kit", short_description: "Bullpup ombouwkit voor standaard AR-15 en 3D-geprinte ontvangers. Bevat precisie trekkerstang, handguard-bevestiging, wangsteunbeugels en tweezijdige spanhendel." },
    fr: { name: "Kit Châssis de Conversion Bullpup ScARpup", short_description: "Kit de conversion bullpup pour boîtiers AR-15 standard et imprimés en 3D. Comprend tringlerie de détente de précision, fixation de garde-main, appui-joue et levier d'armement ambidextre." },
    es: { name: "Kit de Chasis de Conversión Bullpup ScARpup", short_description: "Kit de conversión bullpup para receptores AR-15 estándar e impresos en 3D. Incluye varilla de conexión de disparador, fijaciones de guardamanos, carrillera y palanca ambidiestra." },
    it: { name: "Kit Chassis di Conversione Bullpup ScARpup", short_description: "Kit di conversione bullpup per lower AR-15 standard e stampati in 3D. Include asta di rinvio scatto, minuteria astina, supporto poggiaguancia e manetta d'armamento ambidestra." },
    pl: { name: "Zestaw Konwersji Bezkolbowej Bullpup ScARpup", short_description: "Zestaw konwersji bullpup do standardowych komór AR-15 i odbiorników z druku 3D. Zawiera precyzyjne cięgno spustowe, okucia łoża, wsporniki baki policzkowej i obustronną dźwignię." },
    bg: { name: "Комплект за Булпъп Конверсия ScARpup за AR-15", short_description: "Шаси и монтажен комплект за булпъп преобразуване на стандартни и 3D принтирани AR-15 рами. Включва прецизна спусъчна тяга, крепежи за ложа, набузник и двустранен лост." }
  },
  "yc9-yeet-cannon-build-kit": {
    en: { name: "YC-9 'Yeet Cannon' 9mm DIY Build Kit", short_description: "Complete mechanical hardware package for the YC-9 9mm DIY pistol platform. Includes slide internals, 9mm barrel, recoil spring assembly, slide rails, and lower trigger mechanism parts." },
    de: { name: "YC-9 'Yeet Cannon' 9mm DIY-Bausatz", short_description: "Komplettes mechanisches Beschlagsset für die YC-9 9mm DIY-Pistole. Beinhaltet Schlitteninnenteile, 9mm Lauf, Verschlussfeder, Führungsschienen und Abzugsgruppe." },
    nl: { name: "YC-9 'Yeet Cannon' 9mm DIY Bouwkit", short_description: "Complete mechanische hardware voor het YC-9 9mm zelfbouwpistool. Bevat slede-onderdelen, 9mm loop, sluitveereenheid, geleiderails en trekkergroeponderdelen." },
    fr: { name: "Kit d'Assemblage Pistolet 9mm YC-9 'Yeet Cannon'", short_description: "Kit complet pour le pistolet 9mm YC-9 'Yeet Cannon'. Comprend pièces internes de culasse, canon 9mm, ensemble ressort récupérateur, rails de glissière et groupe détente." },
    es: { name: "Kit de Montaje Pistola 9mm YC-9 'Yeet Cannon'", short_description: "Paquete mecánico completo para la pistola DIY de 9mm YC-9. Incluye componentes internos de corredera, cañón de 9mm, muelle recuperador, rieles de deslizamiento y piezas de disparador." },
    it: { name: "Kit Pistola 9mm YC-9 'Yeet Cannon'", short_description: "Kit meccanico completo per la pistola fai-da-te 9mm YC-9. Include minuteria carrello, canna 9mm, gruppo molla di recupero, guide carrello e componenti scatto." },
    pl: { name: "Zestaw Pistoletu 9mm YC-9 'Yeet Cannon'", short_description: "Kompletny pakiet podzespołów do pistoletu 9mm YC-9. Zawiera wnętrzności zamka, lufę 9mm, zespół sprężyny powrotnej, szyny prowadzące i mechanizm spustowy." },
    bg: { name: "Комплект за 9mm Пистолет YC-9 'Yeet Cannon'", short_description: "Пълен механичен комплект за 9mm DIY пистолет YC-9. Включва вътрешни части за затвора, 9mm цев, възвратна пружина, релси за затвора и спусъков механизъм." }
  },
  "stingray-22-build-kit": {
    en: { name: "Stingray .22 LR Semi-Auto Tactical Pistol Kit", short_description: "Tactical hardware completion kit for the Stingray .22 LR semi-auto pistol. Features a threaded .22 LR barrel liner, lightweight bolt assembly, dual recoil springs, ejector, and assembly pins." },
    de: { name: "Stingray .22 LR Taktischer Halbautomatik-Bausatz", short_description: "Taktischer Bausatz für die halbautomatische Stingray .22 LR Pistole. Beinhaltet .22 LR Gewindelauf-Liner, Leichtbau-Verschluss, doppelte Rückstoßfedern und Montagestifte." },
    nl: { name: "Stingray .22 LR Tactisch Semi-Auto Pistool Kit", short_description: "Tactische kit voor het Stingray .22 LR semi-automatische pistool. Voorzien van .22 LR schroefdraadloop, lichte grendel, dubbele veren, uitwerper en pennen." },
    fr: { name: "Kit Pistolet Tactique Semi-Auto Stingray .22 LR", short_description: "Kit tactique pour le pistolet semi-automatique Stingray .22 LR. Comprend canon liner fileté .22 LR, culasse allégée, double ressort récupérateur et goupilles." },
    es: { name: "Kit Pistola Táctica Semiautomática Stingray .22 LR", short_description: "Kit táctico para la pistola semiautomática Stingray .22 LR. Incluye ánima de cañón roscada .22 LR, cerrojo aligerado, muelles de retroceso dobles, expulsor y pasadores." },
    it: { name: "Kit Pistola Tattica Semiautomatica Stingray .22 LR", short_description: "Kit tattico per pistola semiautomatica Stingray .22 LR. Include liner canna filettata .22 LR, otturatore alleggerito, doppie molle di recupero, espulsore e perni." },
    pl: { name: "Taktyczny Zestaw Pistoletu Samopowtarzalnego Stingray .22 LR", short_description: "Zestaw do taktycznego pistoletu samopowtarzalnego Stingray .22 LR. Zawiera gwintowaną lufę .22 LR, lekki zamek, podwójne sprężyny powrotne, wyrzutnik i piny." },
    bg: { name: "Тактически Комплект за Пистолет Stingray .22 LR", short_description: "Тактически комплект за полуавтоматичен пистолет Stingray .22 LR. Включва резбована цевна втулка .22 LR, олекотен затвор, двойни пружини и монтажни щифтове." }
  },
  "vz61-skorpion-3d-build-kit": {
    en: { name: "VZ. 61 Skorpion 3D Printed Receiver Hardware Kit", short_description: "Reinforcement hardware kit for 3D printed VZ. 61 Skorpion submachine gun receivers. Compatible with .32 ACP and .22 LR conversion uppers, including steel mounting brackets, pins, and stock hinge block." },
    de: { name: "VZ. 61 Skorpion 3D-Druck Gehäuse-Verstärkungssatz", short_description: "Verstärkungs-Bausatz für 3D-gedruckte VZ. 61 Skorpion Gehäuse. Kompatibel mit .32 ACP und .22 LR Wechselsystemen, inklusive Stahlhalterungen und Schaftscharnierblock." },
    nl: { name: "VZ. 61 Skorpion 3D-Geprinte Ontvanger Hardware Kit", short_description: "Versterkingshardware voor 3D-geprinte VZ. 61 Skorpion ontvangers. Geschikt voor .32 ACP en .22 LR uppers, inclusief stalen montagebeugels, pennen en kolfscharnier." },
    fr: { name: "Kit Quincaillerie Boîtier Imprimé 3D VZ. 61 Skorpion", short_description: "Kit de renfort pour boîtier de pistolet-mitrailleur VZ. 61 Skorpion imprimé en 3D. Compatible avec hauts de culasse .32 ACP et .22 LR, inclut platines acier et charnière de crosse." },
    es: { name: "Kit de Refuerzo para Receptor 3D VZ. 61 Skorpion", short_description: "Kit de refuerzo para receptores impresos en 3D de subfusil VZ. 61 Skorpion. Compatible con calibres .32 ACP y .22 LR, incluye soportes de acero, pasadores y bloque de culata." },
    it: { name: "Kit Rinforzo Ricevitore Stampato 3D VZ. 61 Skorpion", short_description: "Kit di rinforzo per lower receiver stampato in 3D di pistola mitragliatrice VZ. 61 Skorpion. Compatibile con conversioni .32 ACP e .22 LR, include staffe in acciaio e perni." },
    pl: { name: "Zestaw Wzmocnienia Komory 3D VZ. 61 Skorpion", short_description: "Zestaw okuć wzmacniających do drukowanej w 3D komory pistoletu maszynowego VZ. 61 Skorpion. Kompatybilny z konwersjami .32 ACP i .22 LR, zawiera stalowe płytki i zawias kolby." },
    bg: { name: "Укрепващ Комплект за 3D Рама VZ. 61 Skorpion", short_description: "Комплект крепежи за 3D принтирана рама на картечен пистолет VZ. 61 Skorpion. Съвместим с калибри .32 ACP и .22 LR, включва стоманени планки и шарнир за приклад." }
  },
  "glock-pattern-master-rail-kit": {
    en: { name: "Glock-Pattern Master Rail & Locking Block Kit (DD17.2/DD19.2/DD26.2)", short_description: "Universal CNC-machined stainless steel front rail block and rear rail module kit for FMDA DD17.2, DD19.2, and DD26.2 3D printed frames. Engineered to 0.01mm tolerances for flawless slide cycling." },
    de: { name: "Glock-Muster Führungsschienen & Verriegelungsblock Mastersatz", short_description: "Universeller CNC-gefräster Edelstahl-Vorderschienenblock und Hinterschienenmodul für FMDA DD17.2, DD19.2 und DD26.2 3D-Druck-Gehäuse für perfekte Schlittenführung." },
    nl: { name: "Glock-Model Geleiderails & Vergrendelingsblok Masterkit", short_description: "Universele CNC-gefreesde roestvrijstalen voor- en achterrails voor FMDA DD17.2, DD19.2 en DD26.2 3D-geprinte frames voor soepele sledebeweging." },
    fr: { name: "Kit Maître Rails et Bloc de Verrouillage Type Glock", short_description: "Kit universel de rails avant et arrière usinés CNC en acier inoxydable pour carcasses 3D FMDA DD17.2, DD19.2 et DD26.2. Tolérances de 0.01mm pour un cycle parfait." },
    es: { name: "Kit Maestro de Rieles y Bloque de Bloqueo Patrón Glock", short_description: "Kit universal de bloque de riel delantero y trasero en acero inoxidable mecanizado CNC para armazones 3D FMDA DD17.2, DD19.2 y DD26.2. Ajuste perfecto para corredera." },
    it: { name: "Kit Master Guide e Blocco di Chiusura Stile Glock", short_description: "Kit universale di guide anteriori e modulo posteriore in acciaio inox lavorato a CNC per fusti stampati 3D FMDA DD17.2, DD19.2 e DD26.2. Massima precisione di scorrimento." },
    pl: { name: "Zestaw Szyn Prowadzących i Bloku Ryglowego Wzór Glock", short_description: "Uniwersalny zestaw przedniego bloku ryglowego i tylnych szyn ze stali nierdzewnej CNC do szkieletów 3D FMDA DD17.2, DD19.2 i DD26.2. Idealna płynność ruchu zamka." },
    bg: { name: "Мастър Комплект Релси и Заключващ Блок за Glock", short_description: "Универсален комплект предни и задни релси от неръждаема стомана, обработени с CNC за 3D рами FMDA DD17.2, DD19.2 и DD26.2 за безупречно движение на затвора." }
  },
  "hoffman-tactical-ar15-reinforcement-kit": {
    en: { name: "Hoffman Tactical AR-15 Super Lower Reinforcement Hardware Kit", short_description: "Official brass heat-set insert and steel reinforcement rib hardware kit for the Hoffman Tactical AR-15 Super Lower V3. Prevents buffer tower snapping and delivers over 5,000 rounds of durability." },
    de: { name: "Hoffman Tactical AR-15 Super Lower Verstärkungssatz", short_description: "Beschlagsatz mit Messing-Gewindeeinsätzen und Stahlrippen für den Hoffman Tactical AR-15 Super Lower V3. Verhindert Bruch des Pufferturms und sichert über 5.000 Schuss Haltbarkeit." },
    nl: { name: "Hoffman Tactical AR-15 Super Lower Versterkingskit", short_description: "Hardwarekit met messing schroefdraadinzetstukken en stalen ribben voor de Hoffman Tactical AR-15 Super Lower V3. Voorkomt breuk van de buffertoren voor 5.000+ schoten." },
    fr: { name: "Kit de Renfort Hoffman Tactical AR-15 Super Lower", short_description: "Kit d'inserts laiton thermofixables et nervures de renfort en acier pour le boîtier Hoffman Tactical AR-15 Super Lower V3. Empêche la rupture du tube de crosse pour 5 000+ tirs." },
    es: { name: "Kit de Refuerzo Hoffman Tactical AR-15 Super Lower", short_description: "Kit de insertos roscados de latón y nervaduras de refuerzo de acero para el Hoffman Tactical AR-15 Super Lower V3. Evita la rotura de la torre del amortiguador por más de 5.000 disparos." },
    it: { name: "Kit Rinforzo Hoffman Tactical AR-15 Super Lower", short_description: "Kit con inserti in ottone a caldo e nervature in acciaio per lower receiver Hoffman Tactical AR-15 Super Lower V3. Previene la rottura dell'attacco tubo per oltre 5.000 colpi." },
    pl: { name: "Zestaw Wzmocnienia Hoffman Tactical AR-15 Super Lower", short_description: "Zestaw mosiężnych wkładek gwintowanych i stalowych żeber wzmacniających do Hoffman Tactical AR-15 Super Lower V3. Chroni gniazdo bufora przed pęknięciem na ponad 5000 strzałów." },
    bg: { name: "Укрепващ Комплект за Hoffman Tactical AR-15 Super Lower", short_description: "Комплект месингови резбови втулки и стоманени ребра за Hoffman Tactical AR-15 Super Lower V3. Предотвратява счупване на буферната тръба за над 5000 изстрела." }
  },
  "ruger-1022-printed-receiver-kit": {
    en: { name: "Ruger 10/22 3D Printed Receiver Hardware & V-Block Kit", short_description: "Hardened steel V-block, takedown screw, cross pins, and buffer hardware for 3D printed Ruger 10/22 rifle receivers. Compatible with standard factory and aftermarket 10/22 barrels and bolts." },
    de: { name: "Ruger 10/22 3D-Druck Gehäuse V-Block & Beschlagsatz", short_description: "Gehärteter V-Block aus Stahl, Systemschraube, Querstifte und Puffer für 3D-gedruckte Ruger 10/22 Gewehrgehäuse. Kompatibel mit allen Standard- und Tuning-Läufen." },
    nl: { name: "Ruger 10/22 3D-Geprinte Ontvanger V-Blok & Hardware Kit", short_description: "Gehard stalen V-blok, bevestigingsbout, dwarspennen en bufferhardware voor 3D-geprinte Ruger 10/22 ontvangers. Geschikt voor standaard en aftermarket lopen en grendels." },
    fr: { name: "Kit Quincaillerie et V-Block pour Boîtier Ruger 10/22 3D", short_description: "V-block en acier trempé, vis d'assemblage, goupilles traversantes et amortisseur pour boîtiers Ruger 10/22 imprimés en 3D. Compatible avec canons et culasses standard." },
    es: { name: "Kit de Tornillería y V-Block para Receptor Ruger 10/22 3D", short_description: "V-block de acero templado, tornillo de desarme, pasadores transversales y amortiguador para receptores 3D de Ruger 10/22. Compatible con cañones y cerrojos estándar." },
    it: { name: "Kit Minuteria e V-Block per Lower Ruger 10/22 Stampato 3D", short_description: "V-block in acciaio temprato, vite di fissaggio, perni trasversali e tampone per carcasse Ruger 10/22 stampate in 3D. Compatibile con canne e otturatori standard e tuning." },
    pl: { name: "Zestaw V-Block i Śrub do Komory Ruger 10/22 z Druku 3D", short_description: "Hartowany stalowy V-block, śruba mocująca, kołki poprzeczne i bufor do komory karabinka Ruger 10/22 drukowanej w 3D. Kompatybilny ze standardowymi lufami i zamkami." },
    bg: { name: "Комплект V-Block и Крепежи за 3D Рама Ruger 10/22", short_description: "Закален стоманен V-блок, крепежен винт, напречни щифтове и буфер за 3D принтирани рами на Ruger 10/22. Съвместим със стандартни фабрични и тунинг цеви." }
  }
};

for (const [slug, transMap] of Object.entries(localizedEntries)) {
  translations[slug] = transMap;
}

fs.writeFileSync(translationsPath, JSON.stringify(translations, null, 2), 'utf-8');
console.log('Updated products-translations.json with all 18 new products across all 8 languages.');
