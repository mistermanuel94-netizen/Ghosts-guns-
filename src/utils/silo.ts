import { type Locale, getLocalizedPath, useTranslations, getCategoryTranslation } from './i18n';
import products from '../data/products.json';

export interface SiloSpoke {
  slug: string;
  titleKey?: string;
  defaultTitle: string;
  path: string;
  badge?: string;
  specCode: string;
  defaultDesc: string;
}

export interface SiloPillar {
  id: string;
  code: string;
  slug: string;
  defaultTitle: string;
  subtitle: string;
  path: string;
  accentColor: string;
  iconType: 'printer' | 'kit' | 'receiver' | 'parts' | 'accessories' | 'guides';
  badge?: string;
  spokes: SiloSpoke[];
  relatedGuides: Array<{
    title: string;
    slug: string;
    tag: string;
  }>;
  technicalSpecs: Array<{
    label: string;
    value: string;
  }>;
}

export const SILO_PILLARS: SiloPillar[] = [
  {
    id: 'silo-3d',
    code: 'SILO 01 // ADDITIVE MFG',
    slug: '3d-printing',
    defaultTitle: '3D Printers & Additive Ecosystem',
    subtitle: 'High-temp CoreXY 600mm/s systems, PA-CF carbon nylon filaments, hardened nozzles & verified CAD packs.',
    path: '/3d-printers/',
    accentColor: '#9f0712',
    iconType: 'printer',
    badge: 'FLAGSHIP SILO',
    spokes: [
      {
        slug: '3d-printers',
        defaultTitle: 'CoreXY & Resin 3D Printers',
        path: '/3d-printers/',
        badge: '10 MODELS',
        specCode: 'SYS-COREXY',
        defaultDesc: 'Enclosed high-speed 3D printers pre-rated for carbon-fiber nylon and engineering polymers.'
      },
      {
        slug: '3d-printing',
        defaultTitle: '3D Printing Hub & Filaments',
        path: '/3d-printing/',
        specCode: 'MAT-PACF',
        defaultDesc: 'Complete additive manufacturing catalog including PA-CF, PLA+ Pro, and 3D printed build platforms.'
      },
      {
        slug: '3d-printer-accessories',
        defaultTitle: 'Hardened Nozzles & Upgrades',
        path: '/3d-printing/3d-printer-accessories/',
        specCode: 'ACC-NOZZLE',
        defaultDesc: 'Abrasion-resistant hardened steel hotends and thermal upgrades for carbon-reinforced filaments.'
      },
      {
        slug: '3d-files',
        defaultTitle: '3D CAD Files & USB Packs',
        path: '/3d-printing/3d-files/',
        specCode: 'CAD-STEP',
        defaultDesc: 'Air-gapped USB drives and verified STL/STEP technical reference libraries.'
      },
      {
        slug: 'software',
        defaultTitle: 'Slicer Profiles & Software',
        path: '/software/',
        specCode: 'SW-FIRMWARE',
        defaultDesc: 'Calibrated print profiles, CNC controller software, and digital tooling.'
      }
    ],
    relatedGuides: [
      {
        title: 'Best 3D Printed Gun Builds to Start With (From Easy to Advanced)',
        slug: 'best-3d-printed-gun-builds-to-start-with-from-easy-to-advanced',
        tag: 'BUILD GUIDE'
      },
      {
        title: 'Why the Harlot .22 Is the Easiest 3D Printed Gun You Can Build',
        slug: 'why-the-harlot-22-is-the-easiest-3d-printed-gun-you-can-build',
        tag: 'STARTER PLATFORM'
      }
    ],
    technicalSpecs: [
      { label: 'MAX EXTRUDER TEMP', value: '320°C HARDENED STEEL' },
      { label: 'KINEMATICS', value: '600 MM/S COREXY' },
      { label: 'CHAMBER RATING', value: 'ACTIVE HEATED ENCLOSURE' },
      { label: 'PRIMARY POLYMERS', value: 'PA6-CF / PA12-CF / PLA+ PRO' }
    ]
  },
  {
    id: 'silo-kits',
    code: 'SILO 02 // COMPLETE PLATFORMS',
    slug: 'build-kit',
    defaultTitle: 'DIY Firearm Build Kits',
    subtitle: 'Full upper, barrel, rail, and internal hardware completion bundles for 3D printed and 80% frames.',
    path: '/build-kit/',
    accentColor: '#000000',
    iconType: 'kit',
    badge: '26 PLATFORMS',
    spokes: [
      {
        slug: 'build-kit',
        defaultTitle: 'All Complete Build Kits',
        path: '/build-kit/',
        badge: 'CORE HUB',
        specCode: 'KIT-ALL',
        defaultDesc: 'Every non-serialized completion kit from .22 LR pistols to 9mm carbines and 5.56 platforms.'
      },
      {
        slug: 'most-popular',
        defaultTitle: 'Most Popular & Proven Kits',
        path: '/most-popular/',
        badge: 'TOP RATED',
        specCode: 'KIT-PROVEN',
        defaultDesc: 'Highest-velocity community-tested kits including G19, PBS-17, Harlot .22, and FGC-9.'
      }
    ],
    relatedGuides: [
      {
        title: 'Best 3D Printed Gun Builds to Start With (From Easy to Advanced)',
        slug: 'best-3d-printed-gun-builds-to-start-with-from-easy-to-advanced',
        tag: 'PLATFORM COMPARISON'
      },
      {
        title: 'Why the Harlot .22 Is the Easiest 3D Printed Gun You Can Build',
        slug: 'why-the-harlot-22-is-the-easiest-3d-printed-gun-you-can-build',
        tag: 'ENTRY BUILD'
      }
    ],
    technicalSpecs: [
      { label: 'BARREL METALLURGY', value: '4150 CMV / 416R STAINLESS' },
      { label: 'SLIDE METALLURGY', value: '4140 HARDENED TOOL STEEL' },
      { label: 'CALIBERS SUPPORTED', value: '.22LR / .380 / 9MM / 5.56 / 7.62' },
      { label: 'SERIALIZATION', value: 'NONE // NO FFL REQUIRED' }
    ]
  },
  {
    id: 'silo-80',
    code: 'SILO 03 // 80% & MACHINING',
    slug: '80-firearm',
    defaultTitle: '80% Receivers & Milling Jigs',
    subtitle: 'Unfinished 7075-T6 aluminum AR-15/AR-10 lowers, G80 pistol frames, and precision router jig systems.',
    path: '/80-firearm/',
    accentColor: '#000000',
    iconType: 'receiver',
    spokes: [
      {
        slug: '80-firearm',
        defaultTitle: '80% Firearm Frames & Lowers',
        path: '/80-firearm/',
        badge: 'UNSERIALIZED',
        specCode: '80-LOWER',
        defaultDesc: 'Forged 7075-T6 aluminum and reinforced polymer 80% blanks requiring zero FFL transfer.'
      },
      {
        slug: 'jigs',
        defaultTitle: 'Router Jigs & Milling Tooling',
        path: '/accessories/jigs/',
        specCode: 'JIG-ROUTER',
        defaultDesc: 'Multi-platform drilling & router jigs with solid carbide end mills for factory-grade fire control pockets.'
      },
      {
        slug: 'receiver',
        defaultTitle: 'Unfinished Receivers & Blanks',
        path: '/component/receiver/',
        specCode: 'REC-7075',
        defaultDesc: 'Mil-spec anodized and raw 80% lower receivers and grip modules.'
      }
    ],
    relatedGuides: [
      {
        title: 'What Is a Ghost Gun? Everything You Need to Know in 2026',
        slug: 'what-is-a-ghost-gun-everything-you-need-to-know-in-2026',
        tag: 'COMPLIANCE & TECH'
      }
    ],
    technicalSpecs: [
      { label: 'FORGING ALLOY', value: '7075-T6 AEROSPACE ALUMINUM' },
      { label: 'SURFACE FINISH', value: 'TYPE III HARDCOAT ANODIZED' },
      { label: 'JIG COMPATIBILITY', value: 'AR-15 / AR-9 / AR-10 / G80' },
      { label: 'END MILL SPEC', value: 'SOLID SUB-MICRON CARBIDE' }
    ]
  },
  {
    id: 'silo-parts',
    code: 'SILO 04 // PRECISION HARDWARE',
    slug: 'component',
    defaultTitle: 'Slides, Rails & Internal Parts',
    subtitle: 'CNC-machined slides, FMDA/DD19.2 stainless rail kits, lower parts kits, and Glock Gen 3 components.',
    path: '/component/',
    accentColor: '#000000',
    iconType: 'parts',
    spokes: [
      {
        slug: 'component',
        defaultTitle: 'All Firearm Components',
        path: '/component/',
        specCode: 'COMP-HUB',
        defaultDesc: 'Master repository of upper slides, locking blocks, trigger groups, and pin sets.'
      },
      {
        slug: 'slide',
        defaultTitle: 'Complete & Stripped Slides',
        path: '/component/slide/',
        badge: 'GEN 3 SPEC',
        specCode: 'SLD-4140',
        defaultDesc: 'RMR-cut and standard nitride-treated slides for G17, G19, G26, and G43 platforms.'
      },
      {
        slug: 'rails',
        defaultTitle: 'FMDA & DD19.2 Rail Kits',
        path: '/component/rails/',
        badge: '3D ESSENTIAL',
        specCode: 'RAIL-SS',
        defaultDesc: 'Drop-in stainless steel front and rear rail assemblies and locking blocks for printed frames.'
      },
      {
        slug: 'glock',
        defaultTitle: 'Glock Gen 3 Parts & LPKs',
        path: '/component/glock/',
        specCode: 'GLK-GEN3',
        defaultDesc: 'Slide completion kits, lower parts kits, triggers, and extractors for Glock-pattern builds.'
      }
    ],
    relatedGuides: [
      {
        title: 'Best 3D Printed Gun Builds to Start With (From Easy to Advanced)',
        slug: 'best-3d-printed-gun-builds-to-start-with-from-easy-to-advanced',
        tag: 'HARDWARE GUIDE'
      }
    ],
    technicalSpecs: [
      { label: 'RAIL TOLERANCE', value: '±0.02MM CNC STAMPED & MILLED' },
      { label: 'COATING', value: 'BLACK NITRIDE / QPQ HARDENED' },
      { label: 'PATTERN STANDARD', value: 'FMDA DD19.2 / DD17.2 / GEN 3' },
      { label: 'LOCKING BLOCK', value: '17-4 PH HEAT-TREATED STEEL' }
    ]
  },
  {
    id: 'silo-accessories',
    code: 'SILO 05 // MAGAZINES & GEAR',
    slug: 'gun-accessories',
    defaultTitle: 'Magazines, Stocks & Accessories',
    subtitle: 'Magpul PMAGs, Menendez mag packs, mil-spec carbine stocks, and tactical completion hardware.',
    path: '/gun-accessories/',
    accentColor: '#000000',
    iconType: 'accessories',
    spokes: [
      {
        slug: 'gun-accessories',
        defaultTitle: 'Gun Accessories & Stocks',
        path: '/gun-accessories/',
        specCode: 'ACC-TAC',
        defaultDesc: 'Mil-spec stocks, buffer assemblies, and ergonomic firearm upgrades.'
      },
      {
        slug: 'magazines',
        defaultTitle: 'Rifle & Pistol Magazines',
        path: '/magazines/',
        badge: 'OEM & DIY',
        specCode: 'MAG-FEED',
        defaultDesc: 'High-reliability OEM Magpul PMAGs, Glock magazines, and Menendez spring hardware packs.'
      },
      {
        slug: 'accessories',
        defaultTitle: 'Workshop Tooling & Jigs',
        path: '/accessories/',
        specCode: 'WORK-TOOL',
        defaultDesc: 'Essential benchtop tools, fixtures, and finishing accessories.'
      }
    ],
    relatedGuides: [
      {
        title: 'What Is a Ghost Gun? Everything You Need to Know in 2026',
        slug: 'what-is-a-ghost-gun-everything-you-need-to-know-in-2026',
        tag: 'OVERVIEW'
      }
    ],
    technicalSpecs: [
      { label: 'MAGAZINE SPRINGS', value: 'HEAT-TREATED MUSIC WIRE' },
      { label: 'POLYMER BODY', value: 'IMPACT-RESISTANT GLASS NYLON' },
      { label: 'STOCK SPEC', value: 'MIL-SPEC CARBINE RECEIVER EXTENSION' },
      { label: 'DISPATCH', value: 'STEALTH UNMARKED PACKAGING' }
    ]
  }
];

/**
 * Given any category slug, finds the parent SiloPillar it belongs to
 */
export function getSiloForCategory(categorySlug: string): SiloPillar {
  for (const pillar of SILO_PILLARS) {
    if (pillar.slug === categorySlug) return pillar;
    if (pillar.spokes.some(s => s.slug === categorySlug)) return pillar;
  }
  return SILO_PILLARS[0];
}

/**
 * Given a product object, determines its primary SiloPillar and primary category spoke
 */
export function getSiloForProduct(product: any): { pillar: SiloPillar; spoke: SiloSpoke } {
  const prodCats: string[] = (product.categories || []).map((c: any) => c.slug);

  // Priority check: 3d-printers first, then specific sub-spokes, then main pillars
  const prioritySlugs = [
    '3d-printers',
    '3d-printer-accessories',
    '3d-files',
    'software',
    'jigs',
    'slide',
    'rails',
    'receiver',
    'glock',
    'magazines',
    '80-firearm',
    'build-kit',
    '3d-printing',
    'component',
    'gun-accessories',
    'accessories'
  ];

  for (const targetSlug of prioritySlugs) {
    if (prodCats.includes(targetSlug)) {
      for (const pillar of SILO_PILLARS) {
        const matchedSpoke = pillar.spokes.find(s => s.slug === targetSlug);
        if (matchedSpoke) {
          return { pillar, spoke: matchedSpoke };
        }
      }
    }
  }

  return {
    pillar: SILO_PILLARS[1],
    spoke: SILO_PILLARS[1].spokes[0]
  };
}

/**
 * Counts how many products belong to a specific category slug (and optional child slugs)
 */
export function getCategoryProductCount(slug: string, extraSlugs: string[] = []): number {
  const targets = new Set([slug, ...extraSlugs]);
  return products.filter(p =>
    (p.categories || []).some((c: any) => targets.has(c.slug))
  ).length;
}

