const fs = require('fs');
const path = require('path');

// 1. Update translations.json with categoryHero
const translationsPath = path.join(__dirname, '../src/data/translations.json');
const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf-8'));

const categoryHeroData = {
  en: {
    tag: "// TACTICAL CATEGORY DIRECTORY // NO FFL REQUIRED",
    statInStock: "In-Stock Platforms",
    statShipping: "Discreet Delivery",
    statCurrency: "Direct Euro (€) Pricing",
    allCategories: "All Shop"
  },
  de: {
    tag: "// TAKTISCHES KATEGORIE-VERZEICHNIS // OHNE FFL-PFLICHT",
    statInStock: "Verfügbare Produkte",
    statShipping: "Diskreter Versand",
    statCurrency: "Preise in Euro (€)",
    allCategories: "Gesamtes Sortiment"
  },
  nl: {
    tag: "// TACTISCHE CATEGORIE DIRECTORY // GEEN FFL VEREIST",
    statInStock: "Beschikbare Producten",
    statShipping: "Discrete Verzending",
    statCurrency: "Prijzen in Euro (€)",
    allCategories: "Alle Producten"
  },
  fr: {
    tag: "// RÉPERTOIRE TACTIQUE // SANS LICENCE FFL REQUISE",
    statInStock: "Produits Disponibles",
    statShipping: "Livraison Discrète",
    statCurrency: "Tarifs en Euro (€)",
    allCategories: "Tout le Catalogue"
  },
  es: {
    tag: "// DIRECTORIO TÁCTICO // SIN LICENCIA FFL",
    statInStock: "Plataformas en Stock",
    statShipping: "Envío Discreto",
    statCurrency: "Precios en Euros (€)",
    allCategories: "Todo el Catálogo"
  },
  it: {
    tag: "// REPERTORIO TATTICO // NESSUNA LICENZA FFL",
    statInStock: "Prodotti Disponibili",
    statShipping: "Spedizione Discreta",
    statCurrency: "Prezzi in Euro (€)",
    allCategories: "Tutto il Catalogo"
  },
  pl: {
    tag: "// KATALOG TAKTYCZNY // BEZ ZEZWOLENIA FFL",
    statInStock: "Produkty w Magazynie",
    statShipping: "Dyskretna Wysyłka",
    statCurrency: "Ceny w Euro (€)",
    allCategories: "Pełny Katalog"
  },
  bg: {
    tag: "// ТАКТИЧЕСКИ КАТАЛОГ // БЕЗ FFL ЛИЦЕНЗ",
    statInStock: "Налични Артикули",
    statShipping: "Дискретна Доставка",
    statCurrency: "Цени в Евро (€)",
    allCategories: "Всички Продукти"
  }
};

for (const lang of Object.keys(categoryHeroData)) {
  if (translations[lang]) {
    translations[lang].categoryHero = categoryHeroData[lang];
  }
}

fs.writeFileSync(translationsPath, JSON.stringify(translations, null, 2), 'utf-8');
console.log('Updated translations.json with categoryHero in all 8 languages.');

// 2. Update categories-translations.json
const catPath = path.join(__dirname, '../src/data/categories-translations.json');
const catData = JSON.parse(fs.readFileSync(catPath, 'utf-8'));

const extraCategories = {
  glock: {
    en: {
      name: "Glock Compatible",
      description: "Precision slide kits, lower parts, rails, and hardware compatible with Glock 17, 19, and 26 builds."
    },
    de: {
      name: "Glock-Kompatibel",
      description: "Präzisions-Schlittenbausätze, Unterteile, Schienen und Zubehör für Glock 17, 19 und 26 Bauten."
    },
    nl: {
      name: "Glock-Compatibel",
      description: "Precisie sledesets, onderdelen, rails en hardware compatibel met Glock 17, 19 en 26 bouwprojecten."
    },
    fr: {
      name: "Compatible Glock",
      description: "Kits de culasse de précision, pièces inférieures, rails et accessoires pour Glock 17, 19 et 26."
    },
    es: {
      name: "Compatible Glock",
      description: "Kits de corredera de precisión, piezas inferiores, rieles y tornillería para Glock 17, 19 y 26."
    },
    it: {
      name: "Compatibile Glock",
      description: "Kit carrello di precisione, parti fusto, guide e viteria per Glock 17, 19 e 26."
    },
    pl: {
      name: "Kompatybilne z Glock",
      description: "Precyzyjne zestawy zamka, części szkieletu, szyny i elementy montażowe do Glock 17, 19 i 26."
    },
    bg: {
      name: "Съвместими с Glock",
      description: "Прецизни комплекти за затвор, долни части, релси и крепежи за Glock 17, 19 и 26."
    }
  },
  jigs: {
    en: {
      name: "Router Jigs & Tools",
      description: "Heavy-duty multi-platform router jigs, carbide end mills, and drill bits for milling 80% lower receivers."
    },
    de: {
      name: "Frässchablonen & Werkzeuge",
      description: "Robuste Multi-Plattform Frässchablonen, Hartmetallfräser und Bohrer zum Fräsen von 80% Gehäusen."
    },
    nl: {
      name: "Freesmallen & Gereedschap",
      description: "Duurzame router jigs, hardmetalen frezen en boren voor het bewerken van 80% ontvangers."
    },
    fr: {
      name: "Gabarits et Outils de Fraisage",
      description: "Gabarits de défonceuse multi-plateformes, fraises carbure et forets pour l'usinage des boîtiers 80%."
    },
    es: {
      name: "Plantillas de Fresado y Herramientas",
      description: "Plantillas multi-plataforma de alta resistencia, fresas de carburo y brocas para fresar receptores 80%."
    },
    it: {
      name: "Dime di Fresatura & Strumenti",
      description: "Dime per fresatrice multi-piattaforma, frese in metallo duro e punte per lavorare lower receiver 80%."
    },
    pl: {
      name: "Szablony Frezarskie i Narzędzia",
      description: "Wytrzymałe szablony frezarskie, frezy węglikowe i wiertła do obróbki komór 80%."
    },
    bg: {
      name: "Фрезови Кондуктори и Инструменти",
      description: "Устойчиви мултиплатформени кондуктори, карбидни фрези и свредла за фрезоване на 80% приемници."
    }
  },
  "3d-printer-accessories": {
    en: {
      name: "3D Printer Accessories & Filaments",
      description: "Hardened steel nozzles, high-impact carbon fiber filaments, PEI build plates, and upgrades for firearm printing."
    },
    de: {
      name: "3D-Drucker Zubehör & Filamente",
      description: "Gehärtete Stahldüsen, schlagfeste Kohlefaser-Filamente, PEI-Druckplatten und Upgrades für den Waffendruck."
    },
    nl: {
      name: "3D-Printer Accessoires & Filamenten",
      description: "Gehard stalen spuitmonden, slagvaste carbonvezel filamenten, PEI-bouwplaten en upgrades."
    },
    fr: {
      name: "Accessoires & Filaments 3D",
      description: "Buses en acier trempé, filaments renforcés en fibre de carbone, plaques PEI et améliorations pour impression armurière."
    },
    es: {
      name: "Accesorios y Filamentos 3D",
      description: "Boquillas de acero templado, filamentos reforzados con fibra de carbono, bases PEI y mejoras para impresión."
    },
    it: {
      name: "Accessori e Filamenti 3D",
      description: "Ugelli in acciaio temprato, filamenti rinforzati in fibra di carbonio, piatti PEI e accessori per la stampa."
    },
    pl: {
      name: "Akcesoria do Drukarek 3D i Filamenty",
      description: "Dysze ze stali utwardzanej, filamenty z włóknem węglowym, płyty PEI i ulepszenia do druku broni."
    },
    bg: {
      name: "3D Принтер Аксесоари и Нишки",
      description: "Дюзи от закалена стомана, карбонови нишки с висока якост, PEI подложки и ъпгрейди за 3D принтиране."
    }
  }
};

for (const [slug, data] of Object.entries(extraCategories)) {
  catData[slug] = data;
}

fs.writeFileSync(catPath, JSON.stringify(catData, null, 2), 'utf-8');
console.log('Updated categories-translations.json with extra categories.');
