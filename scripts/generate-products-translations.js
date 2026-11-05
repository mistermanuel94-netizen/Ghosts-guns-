import fs from 'fs';

const products = JSON.parse(fs.readFileSync('./src/data/products.json', 'utf8'));

// Common dictionary for terms
const termMap = {
  de: {
    'Build Kit': 'Bausatz',
    'Lower Parts Kit': 'Unterteil-Teilesatz',
    'Slide Parts Kit': 'Schlitten-Teilesatz',
    'Rail & Locking Block Kit': 'Schienen- & Verriegelungsblock-Satz',
    'Slide': 'Schlitten',
    'Lower Receiver': 'Untergehäuse',
    'Unfinished Receiver': 'Unfertiges Gehäuse',
    'Grip Module': 'Griffmodul',
    'Hardware Replacement Set': 'Ersatz-Beschlagsatz',
    'Magpul Magazine': 'Magpul Magazin',
    'Extended Glock Mag': 'Verlängertes Glock Magazin',
    'Drum Mag': 'Trommelmagazin'
  },
  nl: {
    'Build Kit': 'Bouwpakket',
    'Lower Parts Kit': 'Onderdelenset onderkant',
    'Slide Parts Kit': 'Slede onderdelenset',
    'Rail & Locking Block Kit': 'Rail & vergrendelingsblok set',
    'Slide': 'Slede',
    'Lower Receiver': 'Onderkast',
    'Unfinished Receiver': 'Onvoltooide kast',
    'Grip Module': 'Greepmodule',
    'Hardware Replacement Set': 'Vervangende bevestigingsset',
    'Magpul Magazine': 'Magpul Magazijn',
    'Extended Glock Mag': 'Verlengd Glock Magazijn',
    'Drum Mag': 'Trommelmagazijn'
  },
  fr: {
    'Build Kit': "Kit d'assemblage",
    'Lower Parts Kit': 'Kit de pièces inférieures',
    'Slide Parts Kit': 'Kit de pièces de culasse',
    'Rail & Locking Block Kit': 'Kit rails et bloc de verrouillage',
    'Slide': 'Culasse',
    'Lower Receiver': 'Carcasse inférieure',
    'Unfinished Receiver': 'Carcasse non finie',
    'Grip Module': 'Module de poignée',
    'Hardware Replacement Set': 'Kit de quincaillerie de rechange',
    'Magpul Magazine': 'Chargeur Magpul',
    'Extended Glock Mag': 'Chargeur Glock étendu',
    'Drum Mag': 'Chargeur tambour'
  },
  es: {
    'Build Kit': 'Kit de montaje',
    'Lower Parts Kit': 'Kit de piezas inferiores',
    'Slide Parts Kit': 'Kit de piezas de corredera',
    'Rail & Locking Block Kit': 'Kit de riel y bloque de bloqueo',
    'Slide': 'Corredera',
    'Lower Receiver': 'Receptor inferior',
    'Unfinished Receiver': 'Receptor sin terminar',
    'Grip Module': 'Módulo de empuñadura',
    'Hardware Replacement Set': 'Juego de tornillería de repuesto',
    'Magpul Magazine': 'Cargador Magpul',
    'Extended Glock Mag': 'Cargador Glock extendido',
    'Drum Mag': 'Cargador de tambor'
  },
  it: {
    'Build Kit': 'Kit di montaggio',
    'Lower Parts Kit': 'Kit parti inferiori',
    'Slide Parts Kit': 'Kit parti carrello',
    'Rail & Locking Block Kit': 'Kit guida e blocco di chiusura',
    'Slide': 'Carrello',
    'Lower Receiver': 'Castello inferiore',
    'Unfinished Receiver': 'Castello non rifinito',
    'Grip Module': 'Modulo impugnatura',
    'Hardware Replacement Set': 'Set viteria di ricambio',
    'Magpul Magazine': 'Caricatore Magpul',
    'Extended Glock Mag': 'Caricatore Glock esteso',
    'Drum Mag': 'Caricatore a tamburo'
  },
  pl: {
    'Build Kit': 'Zestaw do montażu',
    'Lower Parts Kit': 'Zestaw części szkieletu',
    'Slide Parts Kit': 'Zestaw części zamka',
    'Rail & Locking Block Kit': 'Zestaw szyn i bloku ryglującego',
    'Slide': 'Zamek',
    'Lower Receiver': 'Komora spustowa',
    'Unfinished Receiver': 'Niewykończony szkielet',
    'Grip Module': 'Moduł chwytu',
    'Hardware Replacement Set': 'Zestaw wymiennych śrub i pinów',
    'Magpul Magazine': 'Magazynki Magpul',
    'Extended Glock Mag': 'Przedłużony magazynek Glock',
    'Drum Mag': 'Magazynek bębnowy'
  },
  bg: {
    'Build Kit': 'Комплект за сглобяване',
    'Lower Parts Kit': 'Комплект долни части',
    'Slide Parts Kit': 'Комплект части за затвор',
    'Rail & Locking Block Kit': 'Комплект релси и заключващ блок',
    'Slide': 'Затвор',
    'Lower Receiver': 'Долна рама',
    'Unfinished Receiver': 'Недовършена рама',
    'Grip Module': 'Модул за ръкохватка',
    'Hardware Replacement Set': 'Резервен комплект обков и щифтове',
    'Magpul Magazine': 'Пълнител Magpul',
    'Extended Glock Mag': 'Удължен пълнител Glock',
    'Drum Mag': 'Барабанен пълнител'
  }
};

const customTranslations = {
  "trash-panda-build-kit": {
    en: { name: "Trash Panda Build Kit", short_description: "<p>The Trash Panda is a 5.56/300BLK 3D printed lever action rifle kit.</p>" },
    de: { name: "Trash Panda Bausatz", short_description: "<p>Das Trash Panda ist ein 3D-gedruckter Unterhebelrepetierer-Bausatz im Kaliber 5.56/300BLK.</p>" },
    nl: { name: "Trash Panda Bouwpakket", short_description: "<p>De Trash Panda is een 3D-geprinte hefboomgeweerbouwset in kaliber 5.56/300BLK.</p>" },
    fr: { name: "Kit d'assemblage Trash Panda", short_description: "<p>Le Trash Panda est un kit de carabine à levier de sous-garde imprimée en 3D calibre 5.56/300BLK.</p>" },
    es: { name: "Kit de montaje Trash Panda", short_description: "<p>El Trash Panda es un kit de rifle de palanca impreso en 3D en calibre 5.56/300BLK.</p>" },
    it: { name: "Kit di montaggio Trash Panda", short_description: "<p>Il Trash Panda è un kit per fucile a leva stampato in 3D in calibro 5.56/300BLK.</p>" },
    pl: { name: "Zestaw montażowy Trash Panda", short_description: "<p>Trash Panda to zestaw do drukowanego w 3D karabinka dźwigniowego w kalibrze 5.56/300BLK.</p>" },
    bg: { name: "Комплект за сглобяване Trash Panda", short_description: "<p>Trash Panda е 3D принтирана пушка с лостов механизъм в калибър 5.56/300BLK.</p>" }
  },
  "3d-printed-g19-build-kit": {
    en: { name: "3D Printed G19 Build Kit", short_description: "<p>A complete Glock 19 parts kit built for 3D-printed frames. Includes precision-cut metal rails and internals.</p>" },
    de: { name: "3D-gedruckter G19 Bausatz", short_description: "<p>Kompletter Glock 19 Teilesatz für 3D-gedruckte Rahmen. Enthält präzisionsgefräste Metallschienen und Innenteile.</p>" },
    nl: { name: "3D Geprint G19 Bouwpakket", short_description: "<p>Een complete Glock 19 onderdelenset voor 3D-geprinte frames. Inclusief precisie-gefreesde metalen rails en onderdelen.</p>" },
    fr: { name: "Kit d'assemblage G19 imprimé en 3D", short_description: "<p>Un kit complet de pièces pour Glock 19 conçu pour les carcasses imprimées en 3D. Comprend rails métalliques et pièces internes.</p>" },
    es: { name: "Kit de montaje G19 impreso en 3D", short_description: "<p>Un kit completo de piezas para Glock 19 diseñado para armazones impresos en 3D. Incluye rieles metálicos y piezas internas.</p>" },
    it: { name: "Kit di montaggio G19 stampato in 3D", short_description: "<p>Un kit completo di parti Glock 19 progettato per fusti stampati in 3D. Include guide metalliche di precisione e componenti interni.</p>" },
    pl: { name: "Zestaw montażowy G19 z druku 3D", short_description: "<p>Kompletny zestaw części do Glocka 19 przeznaczony do szkieletów z druku 3D. Zawiera precyzyjne metalowe szyny i części wewnętrzne.</p>" },
    bg: { name: "3D Принтиран комплект за сглобяване G19", short_description: "<p>Пълен комплект части за Glock 19 за 3D принтирани рами. Включва прецизни метални релси и вътрешни компоненти.</p>" }
  },
  "pbs-17-build-kit": {
    en: { name: "3D Printed G17 Build Kit", short_description: "<p>Complete 9mm build kit for FMDA DD17.2 and standard 3D printed Glock 17 frames.</p>" },
    de: { name: "3D-gedruckter G17 Bausatz", short_description: "<p>Kompletter 9mm Bausatz für FMDA DD17.2 und 3D-gedruckte Glock 17 Rahmen.</p>" },
    nl: { name: "3D Geprint G17 Bouwpakket", short_description: "<p>Complete 9mm bouwset voor FMDA DD17.2 en 3D-geprinte Glock 17 frames.</p>" },
    fr: { name: "Kit d'assemblage G17 imprimé en 3D", short_description: "<p>Kit complet 9mm pour carcasses FMDA DD17.2 et Glock 17 imprimées en 3D.</p>" },
    es: { name: "Kit de montaje G17 impreso en 3D", short_description: "<p>Kit de montaje completo en 9mm para armazones FMDA DD17.2 y Glock 17 en 3D.</p>" },
    it: { name: "Kit di montaggio G17 stampato in 3D", short_description: "<p>Kit completo in calibro 9mm per fusti FMDA DD17.2 e Glock 17 stampati in 3D.</p>" },
    pl: { name: "Zestaw montażowy G17 z druku 3D", short_description: "<p>Kompletny zestaw 9mm do szkieletów FMDA DD17.2 i drukowanych Glock 17.</p>" },
    bg: { name: "3D Принтиран комплект за сглобяване G17", short_description: "<p>Пълен 9mm комплект за рами FMDA DD17.2 и 3D принтиран Glock 17.</p>" }
  },
  "harlot": {
    en: { name: "Harlot [1.0] Build Kit", short_description: "<p>Hardware and components kit for the iconic Harlot single-shot .22 LR 3D printable firearm.</p>" },
    de: { name: "Harlot [1.0] Bausatz", short_description: "<p>Beschlag- und Teilesatz für die bekannte einschüssige .22 LR Harlot-Pistole aus dem 3D-Drucker.</p>" },
    nl: { name: "Harlot [1.0] Bouwpakket", short_description: "<p>Hardware- en onderdelenset voor het iconische enkelschots .22 LR Harlot 3D-printbare vuurwapen.</p>" },
    fr: { name: "Kit d'assemblage Harlot [1.0]", short_description: "<p>Kit de visserie et pièces pour le pistolet monocoup .22 LR Harlot imprimable en 3D.</p>" },
    es: { name: "Kit de montaje Harlot [1.0]", short_description: "<p>Kit de tornillería y componentes para la pistola monotiro calibre .22 LR Harlot imprimible en 3D.</p>" },
    it: { name: "Kit di montaggio Harlot [1.0]", short_description: "<p>Kit di viteria e componenti per la pistola monocolpo .22 LR Harlot stampabile in 3D.</p>" },
    pl: { name: "Zestaw montażowy Harlot [1.0]", short_description: "<p>Zestaw osprzętu i części do jednostrzałowego pistoletu .22 LR Harlot drukowanego w 3D.</p>" },
    bg: { name: "Комплект за сглобяване Harlot [1.0]", short_description: "<p>Комплект обков и компоненти за 3D принтирания еднозаряден пистолет .22 LR Harlot.</p>" }
  },
  "ar15-lower-receiver-80": {
    en: { name: "AR15 Raw Lower Receiver [80%]", short_description: "<p>Unfinished 7075-T6 forged aluminum 80% lower receiver for AR-15 rifle platforms.</p>" },
    de: { name: "AR15 Rohes Untergehäuse [80%]", short_description: "<p>Unbearbeitetes 7075-T6 geschmiedetes Aluminium 80%-Unterteil für AR-15 Plattformen.</p>" },
    nl: { name: "AR15 Ruwe Onderkast [80%]", short_description: "<p>Ongeraffineerde 7075-T6 gesmede aluminium 80% onderkast voor AR-15 platformen.</p>" },
    fr: { name: "Carcasse inférieure brute AR15 [80%]", short_description: "<p>Carcasse inférieure 80% non finie en aluminium forgé 7075-T6 pour plateformes AR-15.</p>" },
    es: { name: "Receptor inferior en bruto AR15 [80%]", short_description: "<p>Receptor inferior al 80% en aluminio forjado 7075-T6 sin terminar para AR-15.</p>" },
    it: { name: "Castello inferiore grezzo AR15 [80%]", short_description: "<p>Castello inferiore all'80% in alluminio forgiato 7075-T6 grezzo per AR-15.</p>" },
    pl: { name: "Surowa komora spustowa AR15 [80%]", short_description: "<p>Niewykończona komora spustowa 80% z kutego aluminium 7075-T6 do platformy AR-15.</p>" },
    bg: { name: "Сурова долна рама за AR15 [80%]", short_description: "<p>Недовършена 80% долна рама от кован алуминий 7075-T6 за платформи AR-15.</p>" }
  }
};

const output = {};

for (const p of products) {
  const slug = p.slug;
  output[slug] = {};
  
  // English default
  output[slug].en = {
    name: p.name,
    short_description: p.short_description || `<p>${p.name} from Ghost-Guns.shop</p>`
  };

  // If manual translation exists
  if (customTranslations[slug]) {
    for (const lang of ['de', 'nl', 'fr', 'es', 'it', 'pl', 'bg']) {
      output[slug][lang] = customTranslations[slug][lang];
    }
  } else {
    // Generate intelligent translation based on product name patterns
    for (const lang of ['de', 'nl', 'fr', 'es', 'it', 'pl', 'bg']) {
      let trName = p.name;
      const terms = termMap[lang];
      for (const [enTerm, targetTerm] of Object.entries(terms)) {
        trName = trName.replace(new RegExp(enTerm, 'gi'), targetTerm);
      }
      
      let trShort = p.short_description || `<p>${p.name}</p>`;
      for (const [enTerm, targetTerm] of Object.entries(terms)) {
        trShort = trShort.replace(new RegExp(enTerm, 'gi'), targetTerm);
      }

      output[slug][lang] = {
        name: trName,
        short_description: trShort
      };
    }
  }
}

fs.writeFileSync('./src/data/products-translations.json', JSON.stringify(output, null, 2), 'utf8');
console.log(`Saved src/data/products-translations.json for all ${products.length} products across 8 languages!`);
