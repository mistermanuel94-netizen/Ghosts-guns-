import fs from 'fs';
import path from 'path';

// 1. New 3D Printers Category definition
const newCategory = {
  id: 70,
  name: "3D Printers",
  slug: "3d-printers",
  description: "Expert tested and ranked 3D printers engineered for DIY firearms, 80% lowers, Glock frames, and precision accessories.",
  parent: 53, // Child of 3D Printing
  count: 10,
  image: null,
  review_count: 0,
  permalink: "https://ghostguns.com/3d-printers/"
};

// 2. Localized Category metadata (8 languages)
const categoryTranslations = {
  en: {
    name: "3D Printers",
    description: "Expert tested and ranked 3D printers engineered for DIY firearms, 80% lowers, Glock frames, and precision accessories."
  },
  de: {
    name: "3D-Drucker",
    description: "Von Experten getestete 3D-Drucker, optimiert für den Bau von Gehäusen, Griffstücken und Zubehörteilen."
  },
  nl: {
    name: "3D-Printers",
    description: "Deskundig geteste 3D-printers, geoptimaliseerd voor het zelf printen van vuurwapenonderdelen en frames."
  },
  fr: {
    name: "Imprimantes 3D",
    description: "Imprimantes 3D testées par des experts, idéales pour l'impression de carcasses, pièces et accessoires."
  },
  es: {
    name: "Impresoras 3D",
    description: "Impresoras 3D probadas por expertos, diseñadas para la fabricación de armazones, piezas y accesorios."
  },
  it: {
    name: "Stampanti 3D",
    description: "Stampanti 3D testate da esperti e ottimizzate per la produzione di componenti, fusti e accessori."
  },
  pl: {
    name: "Drukarki 3D",
    description: "Przetestowane przez ekspertów drukarki 3D, zoptymalizowane do druku szkieletów broni i akcesoriów."
  },
  bg: {
    name: "3D Принтери",
    description: "Експертно тествани 3D принтери, проектирани за производство на оръжейни рами и прецизни компоненти."
  }
};

// 3. Define the 10 Printers
const printerItems = [
  {
    id: 200001,
    name: "Bambu Lab P2S (AMS 2 Pro Combo)",
    slug: "bambu-lab-p2s-3d-printer",
    priceEuro: 799.00,
    priceCents: "79900",
    imageFile: "bambu-lab-p2s.png",
    s3Url: "https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-18.png",
    categorySub: "Best Overall for Ghost Guns",
    shortEn: "The undisputed gold standard for ghost gun builders. Features high-speed CoreXY motion (600 mm/s), active vibration compensation, full enclosure, and AMS 2 Pro 4-spool automatic filament management with active drying.",
    descEn: "<p>The Bambu Lab P2S Combo is the #1 expert-recommended 3D printer for DIY firearm manufacturing in 2026. Equipped with high-speed CoreXY mechanics capable of 600 mm/s and 20,000 mm/s² acceleration, this enclosed system delivers flawless Glock 19 and AR-15 lower receivers with injection-molded surface quality.</p><p>Key Highlights:</p><ul><li>Build Volume: 256 × 256 × 256 mm</li><li>Max Speed: 600 mm/s with active vibration compensation</li><li>Enclosed Chamber: Optimized for Nylon PA-CF, PLA+, and ASA</li><li>AMS 2 Pro: 4-color multi-material unit with built-in heated filament drying</li><li>Direct Drive All-Metal Hotend reaching 300°C with hardened steel nozzle</li></ul>",
    i18n: {
      de: {
        name: "Bambu Lab P2S 3D-Drucker (AMS 2 Pro Combo)",
        short: "Der Maßstab für Waffenbauer. Geschlossener CoreXY-Drucker mit 600 mm/s, Schwingungskompensation und AMS 2 Pro Filament-Trocknung.",
        desc: "Der Bambu Lab P2S Combo ist die Top-Empfehlung für den 3D-Druck von Gehäusen und Griffstücken. 256³ mm Bauraum, gehärtete Stahldüse bis 300°C und integrierte AMS 2 Pro Einheit."
      },
      nl: {
        name: "Bambu Lab P2S 3D-Printer (AMS 2 Pro Combo)",
        short: "De gouden standaard voor zelfbouwers. Snelle CoreXY (600 mm/s), gesloten behuizing en AMS 2 Pro automatisch filamentbeheer.",
        desc: "De Bambu Lab P2S Combo levert ongeëvenaarde betrouwbaarheid voor Glock-frames en AR-kasten. 256³ mm bouwvolume en actieve filamentdroging."
      },
      fr: {
        name: "Imprimante 3D Bambu Lab P2S (Combo AMS 2 Pro)",
        short: "La référence incontournable. Cinématique CoreXY à 600 mm/s, caisson fermé et gestion multi-filaments AMS 2 Pro avec séchage actif.",
        desc: "Recommandée pour l'impression de carcasses Glock et pièces AR-15. Volume 256³ mm, buse en acier trempé 300°C et caisson fermé idéal pour le nylon carbone."
      },
      es: {
        name: "Impresora 3D Bambu Lab P2S (Combo AMS 2 Pro)",
        short: "El estándar de oro para constructores. Cinemática CoreXY a 600 mm/s, cámara cerrada y sistema AMS 2 Pro de 4 filamentos con secado.",
        desc: "La mejor opción para armazones Glock y receptores AR-15. Volumen de 256³ mm, boquilla de acero endurecido y compensación activa de vibraciones."
      },
      it: {
        name: "Stampante 3D Bambu Lab P2S (Combo AMS 2 Pro)",
        short: "Il punto di riferimento per costruttori. Sistema CoreXY da 600 mm/s, camera chiusa e gestione multi-filamento AMS 2 Pro con essiccazione attiva.",
        desc: "Ideale per fusti Glock e castelli AR-15. Volume di stampa 256³ mm, estrusore direct drive e hotend all-metal in acciaio temperato fino a 300°C."
      },
      pl: {
        name: "Drukarka 3D Bambu Lab P2S (Zestaw AMS 2 Pro)",
        short: "Złoty standard dla konstruktorów broni. Kinematyka CoreXY (600 mm/s), zamknięta komora i moduł AMS 2 Pro z aktywnym suszeniem.",
        desc: "Najlepszy wybór do druku szkieletów Glock i komór AR-15. Pole robocze 256³ mm, dysza ze stali hartowanej do 300°C i automatyczna kompensacja drgań."
      },
      bg: {
        name: "3D Принтер Bambu Lab P2S (AMS 2 Pro Комбо)",
        short: "Златният стандарт за оръжейни проекти. CoreXY скорост до 600 mm/s, затворена камера и модул AMS 2 Pro с активно сушене.",
        desc: "Първи избор за Glock рами и AR-15 компоненти. Работен обем 256³ mm, закалена дюза до 300°C и интелигентна калибрация."
      }
    }
  },
  {
    id: 200002,
    name: "Elegoo Centauri Carbon",
    slug: "elegoo-centauri-carbon-3d-printer",
    priceEuro: 299.00,
    priceCents: "29900",
    imageFile: "elegoo-centauri-carbon.png",
    s3Url: "https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-19.png",
    categorySub: "Best Budget Enclosed CoreXY",
    shortEn: "Incredible value for ghost gun builders on a budget. Full die-cast aluminum enclosed CoreXY chassis, hardened steel nozzle up to 320°C, and 500 mm/s print speed for carbon fiber nylon parts.",
    descEn: "<p>The Elegoo Centauri Carbon democratizes high-performance firearm printing at just €299. Featuring an enclosed CoreXY aluminum unibody frame, it prevents warping when printing high-temp engineering polymers like PA-CF, PA-GF, and ABS.</p><p>Key Highlights:</p><ul><li>Build Volume: 256 × 256 × 256 mm</li><li>Max Speed: 500 mm/s</li><li>High-Temp Hotend: Up to 320°C with factory-installed hardened steel nozzle</li><li>Fully Enclosed: Stable thermal chamber prevents warping on AR and pistol lowers</li><li>Auto-Bed Leveling with high-precision pressure sensors</li></ul>",
    i18n: {
      de: {
        name: "Elegoo Centauri Carbon 3D-Drucker",
        short: "Bester geschlossener CoreXY-Budget-Drucker. Vollaluminium-Gehäuse, 500 mm/s und 320°C Düse für kohlefaserverstärktes Nylon.",
        desc: "Der Elegoo Centauri Carbon ermöglicht hochwertigen Waffendruck zum Spitzenpreis. Geschlossener Bauraum 256³ mm, bis 320°C und vorinstallierte gehärtete Düse."
      },
      nl: {
        name: "Elegoo Centauri Carbon 3D-Printer",
        short: "Beste budget gesloten CoreXY. Gegoten aluminium frame, 500 mm/s en 320°C nozzle voor carbon nylon vuurwapenonderdelen.",
        desc: "Topklasse prestaties voor een scherpe prijs. Gesloten kamer van 256³ mm voorkomt kromtrekken bij veeleisende polymeren."
      },
      fr: {
        name: "Imprimante 3D Elegoo Centauri Carbon",
        short: "Meilleur CoreXY fermé économique. Châssis en aluminium moulé, 500 mm/s et buse 320°C pour filaments nylon carbone.",
        desc: "Performances professionnelles au prix le plus compétitif. Caisson fermé 256³ mm évitant les déformations sur les pièces sous forte contrainte."
      },
      es: {
        name: "Impresora 3D Elegoo Centauri Carbon",
        short: "La mejor CoreXY cerrada económica. Chasis de aluminio fundido, 500 mm/s y boquilla de 320°C para piezas de nailon y fibra de carbono.",
        desc: "Construcción robusta y precisa para armazones y accesorios tácticos. Volumen de 256³ mm y cámara térmica sellada."
      },
      it: {
        name: "Stampante 3D Elegoo Centauri Carbon",
        short: "Migliore CoreXY chiusa economica. Telaio unibody in alluminio, 500 mm/s e hotend da 320°C per polimeri rinforzati con carbonio.",
        desc: "Perfetta per iniziare con componenti resistenti in nylon caricato fibra. Camera chiusa 256³ mm e calibrazione automatica."
      },
      pl: {
        name: "Drukarka 3D Elegoo Centauri Carbon",
        short: "Najlepszy budżetowy CoreXY z zamkniętą komorą. Odlew aluminiowy, 500 mm/s i głowica 320°C do nylonu z włóknem węglowym.",
        desc: "Znakomity stosunek jakości do ceny. Zamknięta przestrzeń robocza 256³ mm zabezpiecza przed wypaczaniem komór i chwytów."
      },
      bg: {
        name: "3D Принтер Elegoo Centauri Carbon",
        short: "Най-добрата бюджетна затворена CoreXY машина. Алуминиево шаси, 500 mm/s и дюза до 320°C за карбонов найлон.",
        desc: "Висококачествен печат на оръжейни рами на достъпна цена. Затворена камера 256³ mm и автоматично нивелиране."
      }
    }
  },
  {
    id: 200003,
    name: "Prusa Core One+",
    slug: "prusa-core-one-plus-3d-printer",
    priceEuro: 1199.00,
    priceCents: "119900",
    imageFile: "prusa-core-one-plus.png",
    s3Url: "https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-20.png",
    categorySub: "Best Premium Open-Source",
    shortEn: "The premier 100% open-source CoreXY firearm printer. Actively heated chamber up to 55°C, Nextruder toolhead, complete offline security, and legendary European engineering reliability.",
    descEn: "<p>For privacy-conscious 2A enthusiasts who refuse cloud telemetry, the Prusa Core One+ is the gold standard. Featuring 100% open-source firmware, local network operation, an actively heated chamber up to 55°C, and the precision Nextruder system, it produces exceptionally durable tactical receivers.</p><p>Key Highlights:</p><ul><li>Build Volume: 250 × 220 × 270 mm</li><li>Actively Heated Chamber: Up to 55°C for warp-free engineering plastics</li><li>Nextruder Extruder: Load cell sensor with 0.05 mm first-layer accuracy</li><li>Air Filtration: Integrated HEPA and carbon filtering for safe indoor printing</li><li>Zero Cloud Lock-in: True air-gapped local USB and LAN operation</li></ul>",
    i18n: {
      de: {
        name: "Prusa Core One+ 3D-Drucker",
        short: "Bester Premium-Open-Source-Drucker. Aktiv beheizte Kammer bis 55°C, Nextruder und 100% lokaler Offline-Betrieb ohne Cloud-Zwang.",
        desc: "Europäische Spitzenqualität für maximale Privatsphäre und Zuverlässigkeit. Aktiv beheizter Bauraum bis 55°C, HEPA-Filter und Präzisions-Nextruder."
      },
      nl: {
        name: "Prusa Core One+ 3D-Printer",
        short: "Beste premium open-source printer. Actief verwarmde kamer (55°C), Nextruder en volledige offline privacy zonder cloudvereiste.",
        desc: "Europese precisie voor de veeleisende bouwer. 250×220×270 mm bouwvolume, HEPA-filter en perfecte laaghechting."
      },
      fr: {
        name: "Imprimante 3D Prusa Core One+",
        short: "Le meilleur de l'open-source haut de gamme. Caisson chauffé activement à 55°C, Nextruder et fonctionnement 100% hors-ligne sécurisé.",
        desc: "Qualité de fabrication européenne supérieure. Caisson chauffé 55°C pour les plastiques d'ingénierie, filtration HEPA et zéro cloud obligatoire."
      },
      es: {
        name: "Impresora 3D Prusa Core One+",
        short: "La mejor opción open-source de alta gama. Cámara calefactada activa a 55°C, Nextruder y funcionamiento 100% local sin nube.",
        desc: "Máxima privacidad y robustez técnica. Ideal para polímeros de grado militar sin deformación y con calibración milimétrica por célula de carga."
      },
      it: {
        name: "Stampante 3D Prusa Core One+",
        short: "Migliore stampante open-source premium. Camera riscaldata attivamente a 55°C, Nextruder e sicurezza 100% offline senza cloud.",
        desc: "Ingegneria europea di altissimo livello. Camera riscaldata fino a 55°C, filtri HEPA e massima precisione volumetrica."
      },
      pl: {
        name: "Drukarka 3D Prusa Core One+",
        short: "Najlepszy ekosystem open-source klasy premium. Aktywnie ogrzewana komora do 55°C, Nextruder i pełna prywatność offline bez chmury.",
        desc: "Europejska precyzja i niezrównana niezawodność. Komora grzana do 55°C, filtry węglowe HEPA i perfekcyjna pierwsza warstwa."
      },
      bg: {
        name: "3D Принтер Prusa Core One+",
        short: "Премиум open-source принтер с активна термокамера до 55°C, Nextruder екструдер и пълна офлайн сигурност без облачни услуги.",
        desc: "Европейско инженерно съвършенство за безкомпромисна здравина на детайлите и локално управление през USB."
      }
    }
  },
  {
    id: 200004,
    name: "Creality SparkX i7",
    slug: "creality-sparkx-i7-3d-printer",
    priceEuro: 399.00,
    priceCents: "39900",
    imageFile: "creality-sparkx-i7.png",
    s3Url: "https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-21.png",
    categorySub: "Best for New Builders",
    shortEn: "The easiest, most forgiving 3D printer for first-time ghost gun prints. Pre-calibrated out of the box with zero-setup leveling, 500 mm/s speed, enclosed body, and pre-tuned 2A profile presets.",
    descEn: "<p>Building your first firearm receiver should not require a mechanical engineering degree. The Creality SparkX i7 comes ready to print out of the box with intelligent AI bed leveling, input shaping, and pre-tuned slicing profiles for popular 2A files.</p><p>Key Highlights:</p><ul><li>Build Volume: 260 × 260 × 255 mm</li><li>Speed: 500 mm/s with 12,000 mm/s² acceleration</li><li>Enclosed Chamber with transparent panoramic viewing</li><li>Quick-swap Unicorn nozzle rated for 300°C</li><li>Smart AI Spaghetti Detection and automated power-loss recovery</li></ul>",
    i18n: {
      de: {
        name: "Creality SparkX i7 3D-Drucker",
        short: "Bester Drucker für Einsteiger. Sofort druckbereit mit automatischer Nivellierung, 500 mm/s, geschlossener Haube und vorinstallierten Profilen.",
        desc: "Perfekt für Einsteiger in den Waffenbau. 260×260×255 mm Bauraum, Schnellwechseldüse bis 300°C und integrierte KI-Fehlererkennung."
      },
      nl: {
        name: "Creality SparkX i7 3D-Printer",
        short: "Beste keuze voor beginnende bouwers. Direct printklaar met automatische nivellering, 500 mm/s en afgesloten behuizing.",
        desc: "Eenvoudig en betrouwbaar voor uw eerste Glock- of AR-project. 260×260×255 mm bouwvolume en slimme sensorbeveiliging."
      },
      fr: {
        name: "Imprimante 3D Creality SparkX i7",
        short: "Idéale pour débuter. Prête à l'emploi dès le déballage, nivellement automatique, 500 mm/s et caisson fermé protecteur.",
        desc: "La solution la plus accessible pour réussir ses premières pièces. Volume 260×260×255 mm, buse 300°C et détection IA d'échec d'impression."
      },
      es: {
        name: "Impresora 3D Creality SparkX i7",
        short: "La mejor para nuevos constructores. Lista para usar sin calibraciones complejas, 500 mm/s, cabina cerrada y perfiles preconfigurados.",
        desc: "Sencilla, potente y precisa. Boquilla de cambio rápido hasta 300°C y volumen generoso de 260×260×255 mm."
      },
      it: {
        name: "Stampante 3D Creality SparkX i7",
        short: "Ideale per i principianti. Pronta all'uso senza calibrazioni manuali, 500 mm/s, camera chiusa e profili di stampa preimpostati.",
        desc: "Facile e robusta per completare il primo fusto o castello. Volume di 260×260×255 mm e ugello ad alto flusso da 300°C."
      },
      pl: {
        name: "Drukarka 3D Creality SparkX i7",
        short: "Najlepszy wybór dla początkujących. Gotowa do pracy od razu po wyjęciu z pudełka, 500 mm/s, zamknięta obudowa i profile 2A.",
        desc: "Bezproblemowy start w druku broni i części zamiennych. Pole robocze 260×260×255 mm oraz detekcja błędów z wykorzystaniem AI."
      },
      bg: {
        name: "3D Принтер Creality SparkX i7",
        short: "Най-добрият избор за начинаещи. Готов за печат веднага, автоматично калибриране, 500 mm/s и затворен корпус.",
        desc: "Лесна и интуитивна работа за първите ви 2A проекти. Работен обем 260×260×255 mm и дюза до 300°C."
      }
    }
  },
  {
    id: 200005,
    name: "Anycubic Kobra X",
    slug: "anycubic-kobra-x-3d-printer",
    priceEuro: 299.00,
    priceCents: "29900",
    imageFile: "anycubic-kobra-x.png",
    s3Url: "https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-22.png",
    categorySub: "Best Budget Multicolor",
    shortEn: "Customize your firearms with two-tone frames, embedded serial placards, and custom color accents. CoreXY 600 mm/s speed with 4-color ACE multi-filament system.",
    descEn: "<p>The Anycubic Kobra X brings multi-color and multi-material versatility to custom firearm builds at an aggressive €299 price tag. Print contrasting sight posts, multi-color camouflage Glock grips, or dual-material grips with soft TPU overmolding.</p><p>Key Highlights:</p><ul><li>Build Volume: 260 × 260 × 260 mm</li><li>Max Speed: 600 mm/s</li><li>ACE Multi-Filament Engine: 4-color automatic switching with filament drying</li><li>LeviQ 3.0 Auto Bed Leveling with vibration damping</li><li>High-flow 300°C hotend compatible with engineering blends</li></ul>",
    i18n: {
      de: {
        name: "Anycubic Kobra X 3D-Drucker",
        short: "Bester Mehrfarben-Budget-Drucker. 600 mm/s CoreXY mit 4-Farben-Filamentsystem für individuelle Camo-Muster und Griffe.",
        desc: "Ideal für zweifarbige Rahmen, strukturierte Griffe und Zubehörteile. 260³ mm Bauraum, 600 mm/s und automatische 4-Kanal-Materialzufuhr."
      },
      nl: {
        name: "Anycubic Kobra X 3D-Printer",
        short: "Beste meerkleurige budgetprinter. 600 mm/s CoreXY met 4-kleurensysteem voor unieke tweekleurige vuurwapenonderdelen.",
        desc: "Print eenvoudig contrasterende vizieren en camouflagepatronen. 260³ mm bouwvolume en geïntegreerde filamentdroging."
      },
      fr: {
        name: "Imprimante 3D Anycubic Kobra X",
        short: "Meilleure imprimante multicolore abordable. CoreXY 600 mm/s avec système 4 couleurs pour motifs camouflage et poignées bicolores.",
        desc: "Personnalisez vos armes avec des finitions uniques. Volume 260³ mm, buse 300°C et gestion automatique 4 bobines."
      },
      es: {
        name: "Impresora 3D Anycubic Kobra X",
        short: "La mejor multicolor económica. Velocidad de 600 mm/s con sistema de 4 bobinas para acabados de camuflaje y empuñaduras personalizadas.",
        desc: "Combina colores y materiales en un solo trabajo. Volumen de 260³ mm y nivelación automática avanzada LeviQ 3.0."
      },
      it: {
        name: "Stampante 3D Anycubic Kobra X",
        short: "Migliore multicolor economica. CoreXY da 600 mm/s con sistema a 4 colori per fusti bicolore ed elementi ad alta visibilità.",
        desc: "Perfetta per customizzazioni estetiche e funzionali. Volume 260³ mm e hotend da 300°C compatibile con filamenti tecnici."
      },
      pl: {
        name: "Drukarka 3D Anycubic Kobra X",
        short: "Najlepszy budżetowy druk wielokolorowy. CoreXY 600 mm/s z systemem 4 kolorów do tworzenia unikalnych szkieletów w kamuflażu.",
        desc: "Łącz kolory i materiały na jednym wydruku. Pole robocze 260³ mm, prędkość 600 mm/s i automatyczne suszenie filamentu."
      },
      bg: {
        name: "3D Принтер Anycubic Kobra X",
        short: "Най-добрият бюджетен многоцветен принтер. 600 mm/s скорост и 4-цветна система за персонализирани оръжейни детайли.",
        desc: "Създавайте двуцветни рами и камуфлажни елементи. Обем 260³ mm и автоматично нивелиране LeviQ 3.0."
      }
    }
  },
  {
    id: 200006,
    name: "Bambu Lab H2D",
    slug: "bambu-lab-h2d-3d-printer",
    priceEuro: 2499.00,
    priceCents: "249900",
    imageFile: "bambu-lab-h2d.png",
    s3Url: "https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-23.png",
    categorySub: "Best Professional Multi-Tool",
    shortEn: "Industrial-grade powerhouse designed for serious gunsmiths and defense prototyping. Massive 350×320×325 mm volume, dual independent toolheads, 65°C heated chamber, and capability for PEEK and PPS-CF.",
    descEn: "<p>The Bambu Lab H2D is built for uncompromising defense engineering and high-volume custom production. Featuring true Dual Independent Extruders (IDEX), an actively heated 65°C chamber, and 350°C nozzles, it effortlessly handles continuous carbon fiber, PEEK, and Ultem for mission-critical firearm components.</p><p>Key Highlights:</p><ul><li>Large Build Volume: 350 × 320 × 325 mm</li><li>Dual Independent Toolheads (IDEX) for multi-material support without purge waste</li><li>Active Chamber Heating: Up to 65°C eliminates all internal stresses</li><li>Ultra-Tough Material Support: PEEK, PEI, PPS-CF, and PA6-CF</li><li>Industrial servo motors with linear optical encoders</li></ul>",
    i18n: {
      de: {
        name: "Bambu Lab H2D Industrieller 3D-Drucker",
        short: "Professionelle Spitzenklasse für Büchsenmacher. Großer Bauraum (350×320×325 mm), Dual-IDEX-Werkzeugköpfe, 65°C Heizkammer für PEEK & PPS-CF.",
        desc: "Industrielle Fertigungsqualität für anspruchsvollste Waffenbauprojekte. Dual-Extrusion ohne Spülverlust, beheizte Kammer bis 65°C und 350°C Düsen."
      },
      nl: {
        name: "Bambu Lab H2D Professionele 3D-Printer",
        short: "Industriële krachtpatser voor serieuze bouwers. 350×320×325 mm, dubbele onafhankelijke toolheads (IDEX) en 65°C verwarmde kamer.",
        desc: "Geschikt voor PEEK, PPS-CF en zwaar belaste wapenonderdelen. Dual-IDEX technologie voor zero-waste combinaties."
      },
      fr: {
        name: "Imprimante 3D Industrielle Bambu Lab H2D",
        short: "La référence professionnelle pour armuriers. Volume généreux (350×320×325 mm), double extrudeur IDEX indépendant et caisson chauffé à 65°C.",
        desc: "Conçue pour les polymères ultra-résistants (PEEK, Ultem, carbone). Têtes indépendantes sans gaspillage de purge."
      },
      es: {
        name: "Impresora 3D Profesional Bambu Lab H2D",
        short: "Grado industrial para armeros e ingenieros. Volumen masivo de 350×320×325 mm, doble cabezal IDEX y cámara calefactada activa a 65°C.",
        desc: "Capaz de extruir PEEK, PPS-CF y nailon militar sin tensiones internas ni deformación. Precisión milimétrica profesional."
      },
      it: {
        name: "Stampante 3D Industriale Bambu Lab H2D",
        short: "Macchina professionale per armieri e laboratori. Ampio volume 350×320×325 mm, doppi estrusori indipendenti IDEX e camera termica a 65°C.",
        desc: "Stampa componenti balistici e prototipi in PEEK e carbonio continuo. Struttura rinforzata con guide ottiche lineari."
      },
      pl: {
        name: "Przemysłowa Drukarka 3D Bambu Lab H2D",
        short: "Sprzęt profesjonalny dla rusznikarzy i manufaktur. Duże pole 350×320×325 mm, podwójne głowice IDEX i komora grzana do 65°C.",
        desc: "Drukuj z PEEK, PPS-CF i włókna węglowego bez wypaczeń. Dwie niezależne głowice eliminują straty filamentu przy podporach."
      },
      bg: {
        name: "Индустриален 3D Принтер Bambu Lab H2D",
        short: "Професионален индустриален клас за оръжейни работилници. Обем 350×320×325 mm, два независими екструдера (IDEX) и камера до 65°C.",
        desc: "Подходящ за PEEK и високотемпературен карбонов полимер. Максимална якост на удар и прецизност."
      }
    }
  },
  {
    id: 200007,
    name: "Snapmaker U1",
    slug: "snapmaker-u1-3d-printer",
    priceEuro: 999.00,
    priceCents: "99900",
    imageFile: "snapmaker-u1.png",
    s3Url: "https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-24.png",
    categorySub: "Best Multicolor Tool Changer",
    shortEn: "Next-generation 4-tool changer with zero purge waste. Perfect for hybrid builds combining high-impact nylon frames with integrated rubberized grip surfaces and soluble support structures.",
    descEn: "<p>The Snapmaker U1 utilizes a true high-speed tool changer rather than a single-nozzle filament switcher, completely eliminating purge tower waste and material cross-contamination. Print rigid PA-CF firearm receivers with seamless flexible TPU ergonomics.</p><p>Key Highlights:</p><ul><li>Build Volume: 270 × 270 × 270 mm</li><li>4-Tool Changer: Instant tool swaps in under 3 seconds</li><li>Zero Waste: No purge towers, saving hundreds of Euros on expensive carbon filament</li><li>Multi-Durometer Printing: Combine rigid nylon receiver with cushioned grip backstraps</li><li>Full Enclosure with 500 mm/s CoreXY kinematics</li></ul>",
    i18n: {
      de: {
        name: "Snapmaker U1 3D-Drucker",
        short: "Bester Werkzeugwechsler ohne Filamentabfall. 4 unabhängige Werkzeugköpfe für Hybrid-Drucke mit festem Rahmen und gummierter Grifffläche.",
        desc: "Echter Werkzeugwechsler mit 4 Düsen: Kein Spülturm, keine Materialverschwendung. 270³ mm Bauraum und CoreXY-Geschwindigkeit."
      },
      nl: {
        name: "Snapmaker U1 3D-Printer",
        short: "Beste toolchanger zonder filamentverspilling. 4 aparte spuitmonden voor hybride frames met geïntegreerde rubberen grips.",
        desc: "Wisselt in seconden tussen materialen zonder reinigingstoren. 270³ mm bouwvolume en gesloten behuizing."
      },
      fr: {
        name: "Imprimante 3D Snapmaker U1",
        short: "Le meilleur changeur d'outils sans gaspillage. 4 têtes d'outils indépendantes pour pièces hybrides (carcasse rigide et grips souples).",
        desc: "Changement de tête en 3 secondes sans tour de purge. Idéal pour économiser le filament carbone onéreux sur 270³ mm."
      },
      es: {
        name: "Impresora 3D Snapmaker U1",
        short: "El mejor cambiador de herramientas sin desperdicio. 4 cabezales independientes para piezas compuestas con empuñaduras de goma integradas.",
        desc: "Ahorra filamento costoso eliminando torres de purga. Volumen de 270³ mm y cinemática CoreXY rápida."
      },
      it: {
        name: "Stampante 3D Snapmaker U1",
        short: "Miglior cambio utensile senza scarti. 4 testine indipendenti per unire nylon rigido a impugnature ergonomiche in gomma TPU.",
        desc: "Cambio utensile in meno di 3 secondi senza torre di spurgo. Volume di 270³ mm per stampe multi-materiale pulite."
      },
      pl: {
        name: "Drukarka 3D Snapmaker U1",
        short: "Najlepszy tool changer bez marnowania filamentu. 4 niezależne głowice do części hybrydowych z wbudowanym gumowanym chwytem.",
        desc: "Błyskawiczna zmiana narzędzia bez wieży czyszczącej. Oszczędzaj drogi filament nylonowy na polu 270³ mm."
      },
      bg: {
        name: "3D Принтер Snapmaker U1",
        short: "Първокласен tool changer без филаментен отпадък. 4 сменяеми глави за комбинирани детайли със здрава рама и гумирана ръкохватка.",
        desc: "Смяна на инструмента за под 3 секунди без кула за почистване. 270³ mm работен обем."
      }
    }
  },
  {
    id: 200008,
    name: "Anycubic Kobra 3 Max",
    slug: "anycubic-kobra-3-max-3d-printer",
    priceEuro: 599.00,
    priceCents: "59900",
    imageFile: "anycubic-kobra-3-max.png",
    s3Url: "https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-25.png",
    categorySub: "Best Large Format",
    shortEn: "Colossal 420×420×500 mm build volume for printing full-length rifle stocks, monolithic chassis, and large carbine conversion kits in a single piece without splitting.",
    descEn: "<p>The Anycubic Kobra 3 Max is engineered for large-format firearm projects that exceed standard 250 mm beds. Print one-piece AR-15 buttstocks, full-length chassis systems, or batch-print multiple pistol frames simultaneously.</p><p>Key Highlights:</p><ul><li>Massive Build Volume: 420 × 420 × 500 mm (over 88 Liters capacity)</li><li>Max Speed: 600 mm/s high-throughput printing</li><li>Dual Y-Axis Motor Synchronization for rigid bed stability</li><li>Quick-heating bed reaching 100°C across the entire surface</li><li>Multi-color ACE system compatible</li></ul>",
    i18n: {
      de: {
        name: "Anycubic Kobra 3 Max 3D-Drucker",
        short: "Bester Großformat-Drucker. Gigantischer Bauraum von 420×420×500 mm für einteilige Gewehrschäfte und Großserien.",
        desc: "Drucken Sie komplette Gewehrchassis und Schäfte ohne Zerschneiden. Riesige 420×420×500 mm Kapazität bei 600 mm/s."
      },
      nl: {
        name: "Anycubic Kobra 3 Max 3D-Printer",
        short: "Beste grootformaat printer. Enorm bouwvolume van 420×420×500 mm voor geweerhouders uit één stuk en serieproductie.",
        desc: "Nooit meer modellen opdelen. Print volledige kolfsystemen en grote assemblages in één doorgang."
      },
      fr: {
        name: "Imprimante 3D Anycubic Kobra 3 Max",
        short: "Meilleur grand format. Volume colossal de 420×420×500 mm pour crosses de carabines monoblocs et impressions en série.",
        desc: "Idéal pour les pièces longues d'un seul tenant sans collage. Vitesse 600 mm/s et lit chauffant ultra-rapide."
      },
      es: {
        name: "Impresora 3D Anycubic Kobra 3 Max",
        short: "La mejor de gran formato. Impresionante volumen de 420×420×500 mm para culatas de rifle completas sin necesidad de unir piezas.",
        desc: "Capacidad masiva de más de 88 litros a 600 mm/s. Estabilidad reforzada con doble motor en el eje Y."
      },
      it: {
        name: "Stampante 3D Anycubic Kobra 3 Max",
        short: "Migliore grande formato. Volume imponente di 420×420×500 mm per calciature intere di fucili e stampe multiple.",
        desc: "Stampa componenti monolitici senza giunzioni. Velocità fino a 600 mm/s e piano riscaldato uniforme."
      },
      pl: {
        name: "Drukarka 3D Anycubic Kobra 3 Max",
        short: "Najlepszy duży format. Ogromne pole robocze 420×420×500 mm do jednolitych kolb karabinowych i serii produkcyjnych.",
        desc: "Drukuj całe łoża i kolby w jednym kawałku bez łączenia. Pojemność ponad 88 litrów i prędkość do 600 mm/s."
      },
      bg: {
        name: "3D Принтер Anycubic Kobra 3 Max",
        short: "Най-голям работен формат. Огромен обем 420×420×500 mm за цели приклади и монолитни карабинни шасита.",
        desc: "Печатайте пълноразмерни оръжейни компоненти наведнъж без рязане и лепене. До 600 mm/s скорост."
      }
    }
  },
  {
    id: 200009,
    name: "Elegoo Mars 5 Ultra",
    slug: "elegoo-mars-5-ultra-resin-3d-printer",
    priceEuro: 299.00,
    priceCents: "29900",
    imageFile: "elegoo-mars-5-ultra.png",
    s3Url: "https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-26.png",
    categorySub: "Best Resin for Ultra Detail",
    shortEn: "Ultra-high resolution 9K/14K mono resin printer with tilt-release technology. Ideal for microscopic detail on custom triggers, iron sights, safety selectors, and textured grip panels.",
    descEn: "<p>When FDM layer lines are unacceptable for fine fire-control group mockups and precision ergonomic accessories, the Elegoo Mars 5 Ultra delivers glass-smooth results. Its innovative tilt-release mechanism cuts cycle time while preserving delicate features.</p><p>Key Highlights:</p><ul><li>High-Resolution Mono LCD with microscopic 18-micron pixel accuracy</li><li>Tilt-Release Technology: 300% faster layer separation with zero peeling failures</li><li>Heated Resin Vat option for tough engineering photopolymers</li><li>AI Camera Monitoring with mechanical residue detection</li><li>Ideal for: Trigger shoes, selector levers, custom sights, and miniature mockups</li></ul>",
    i18n: {
      de: {
        name: "Elegoo Mars 5 Ultra Resin 3D-Drucker",
        short: "Bester Kunstharz-Drucker für Feinheiten. 9K/14K Mono-LCD und Kipp-Ablösetechnik für Abzugsteile, Visiere und Griffschalen.",
        desc: "Absolut unsichtbare Schichten für filigrane Zubehörteile. Innovative Tilt-Release-Technik für maximale Druckgeschwindigkeit."
      },
      nl: {
        name: "Elegoo Mars 5 Ultra Resin 3D-Printer",
        short: "Beste harsprinter voor ultiem detail. 9K/14K resolutie voor vlijmscherpe trekkers, vizieren en getextureerde greepoppervlakken.",
        desc: "Geen zichtbare printlagen. Snelle kantel-loslaatharsbak en AI-detectie voor storingsvrije precisieonderdelen."
      },
      fr: {
        name: "Imprimante 3D Résine Elegoo Mars 5 Ultra",
        short: "La meilleure résine pour micro-détails. Résolution 9K/14K pour détentes, organes de visée et plaquettes de crosse lisses.",
        desc: "Fini de surface comparable au moulage par injection. Technologie de basculement ultra-rapide et détection IA."
      },
      es: {
        name: "Impresora 3D de Resina Elegoo Mars 5 Ultra",
        short: "La mejor en resina para detalles ultraprecisos. Resolución 9K/14K para miras, gatillos y paneles tácticos sin líneas visibles.",
        desc: "Acabado suave como el cristal para accesorios y controles. Mecanismo de despegue por inclinación de alta velocidad."
      },
      it: {
        name: "Stampante 3D a Resina Elegoo Mars 5 Ultra",
        short: "Migliore a resina per dettagli micrometrici. Schermo 9K/14K per mire metalliche, grilletti e guancette senza linee di strato.",
        desc: "Dettaglio microscopico a 18 micron. Meccanismo basculante veloce e sensore antigraffi integrato."
      },
      pl: {
        name: "Drukarka Żywiczna 3D Elegoo Mars 5 Ultra",
        short: "Najwyższa precyzja żywiczna. Rozdzielczość 9K/14K i technologia tilt-release do precyzyjnych spustów, przyrządów celowniczych i okładzin.",
        desc: "Całkowity brak widocznych warstw. Idealna do małych elementów mechanizmu spustowego i detali montażowych."
      },
      bg: {
        name: "Фотополимерен 3D Принтер Elegoo Mars 5 Ultra",
        short: "Най-добрият фотополимерен детайл. 9K/14K резолюция за прецизни спусъци, мерници и тактически чирени.",
        desc: "Абсолютно гладка повърхност без видими слоеве за дребни оръжейни аксесоари."
      }
    }
  },
  {
    id: 200010,
    name: "Anycubic Photon Mono M7 Pro",
    slug: "anycubic-photon-mono-m7-pro-3d-printer",
    priceEuro: 499.00,
    priceCents: "49900",
    imageFile: "anycubic-photon-mono-m7-pro.png",
    s3Url: "https://ghostgunsdotcom.s3.us-east-2.amazonaws.com/wp-content/uploads/2026/02/Frame-27.png",
    categorySub: "Best Large Resin",
    shortEn: "Large-capacity 14K resin printer with temperature-controlled vat and auto-refill system. Capable of printing full-scale handgun frames and engineering resin mockups.",
    descEn: "<p>The Anycubic Photon Mono M7 Pro merges the extreme detail of MSLA resin with the larger build volume required for complete handgun mockups, suppressors, and custom stock hardware. Heated vat ensures flawless curing with high-strength engineering resins.</p><p>Key Highlights:</p><ul><li>Large Build Volume: 223 × 126 × 230 mm</li><li>Ultra-High 14K (13312 × 5120) Resolution</li><li>Dynamically Heated Vat: Keeps resin at optimal 25-40°C viscosity for maximum mechanical strength</li><li>Auto Resin Auto-Fill & Recycle Pump: Never run dry during long prints</li><li>Supported Resins: Tough, ABS-like, Castable, and High-Impact Engineering Formulations</li></ul>",
    i18n: {
      de: {
        name: "Anycubic Photon Mono M7 Pro Resin 3D-Drucker",
        short: "Bester Großformat-Resin-Drucker. 14K-Auflösung, beheizte Wanne und automatisches Nachfüllsystem für Pistolenrahmen aus technischem Harz.",
        desc: "Kombiniert 14K-Feinheit mit großem Bauraum (223×126×230 mm). Beheizte Wanne für hochfeste ABS- und Tough-Harze."
      },
      nl: {
        name: "Anycubic Photon Mono M7 Pro Resin 3D-Printer",
        short: "Beste grote harsprinter. 14K-resolutie, verwarmde kuip en automatische bijvulling voor complete vuurwapenmockups.",
        desc: "Groot 223×126×230 mm volume met verwarmde harsbak voor optimale viscositeit van sterke technische harsen."
      },
      fr: {
        name: "Imprimante 3D Résine Anycubic Photon Mono M7 Pro",
        short: "Le meilleur grand format résine. Résolution 14K, bac chauffé et remplissage automatique pour maquettes de pistolets en résine technique.",
        desc: "Allie la finesse extrême 14K à un grand volume de 223×126×230 mm. Bac chauffé pour résines ultra-résistantes."
      },
      es: {
        name: "Impresora 3D de Resina Anycubic Photon Mono M7 Pro",
        short: "La mejor de resina de gran volumen. Resolución 14K, tanque calefactado y rellenado automático para armazones completos en resina técnica.",
        desc: "Volumen ampliado de 223×126×230 mm con cubeta térmica que asegura curado óptimo de resinas de alto impacto."
      },
      it: {
        name: "Stampante 3D a Resina Anycubic Photon Mono M7 Pro",
        short: "Migliore grande formato a resina. Risoluzione 14K, vaschetta riscaldata e ricarica automatica per fusti completi in resina tenace.",
        desc: "Volume generoso di 223×126×230 mm con controllo termico della resina per la massima robustezza meccanica."
      },
      pl: {
        name: "Drukarka Żywiczna 3D Anycubic Photon Mono M7 Pro",
        short: "Najlepszy duży format żywiczny. Rozdzielczość 14K, podgrzewana kuweta i automatyczne napełnianie do całych szkieletów pistoletów.",
        desc: "Połączenie rozdzielczości 14K z dużym polem 223×126×230 mm. Zapewnia optymalną temperaturę dla żywic technicznych."
      },
      bg: {
        name: "Фотополимерен 3D Принтер Anycubic Photon Mono M7 Pro",
        short: "Най-голям фотополимерен формат. 14K резолюция, подгрявана вана и автоматично доливане за цели пистолетни рами.",
        desc: "Голям обем 223×126×230 mm с термичен контрол за високоякостни инженерни полимери."
      }
    }
  }
];

// Execute updates
console.log('--- 1. Updating categories.json ---');
const catPath = './src/data/categories.json';
const categories = JSON.parse(fs.readFileSync(catPath, 'utf8'));

// Check if 3d-printers already exists
const existingCatIndex = categories.findIndex(c => c.slug === '3d-printers');
if (existingCatIndex >= 0) {
  categories[existingCatIndex] = newCategory;
  console.log('Updated existing 3d-printers category.');
} else {
  categories.push(newCategory);
  console.log('Added new 3d-printers category.');
}
fs.writeFileSync(catPath, JSON.stringify(categories, null, 2), 'utf8');

console.log('--- 2. Updating categories-translations.json ---');
const catTransPath = './src/data/categories-translations.json';
const catTranslations = JSON.parse(fs.readFileSync(catTransPath, 'utf8'));
catTranslations['3d-printers'] = categoryTranslations;
fs.writeFileSync(catTransPath, JSON.stringify(catTranslations, null, 2), 'utf8');
console.log('Updated categories-translations.json for 3d-printers.');

console.log('--- 3. Updating products.json ---');
const prodPath = './src/data/products.json';
let products = JSON.parse(fs.readFileSync(prodPath, 'utf8'));

// Filter out old test items if any
products = products.filter(p => !p.slug.endsWith('-3d-printer'));

// Add the 10 printers
for (const p of printerItems) {
  const prodObj = {
    id: p.id,
    name: p.name,
    slug: p.slug,
    parent: 0,
    type: "simple",
    variation: "",
    permalink: `https://ghostguns.com/product/${p.slug}/`,
    sku: `3D_${p.slug.toUpperCase().replace(/-/g, '_')}`,
    short_description: `<p>${p.shortEn}</p>`,
    description: p.descEn,
    on_sale: false,
    prices: {
      price: p.priceCents,
      regular_price: p.priceCents,
      sale_price: p.priceCents,
      price_range: null,
      currency_code: "EUR",
      currency_symbol: "€",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "€",
      currency_suffix: ""
    },
    price_html: `<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">€</span>${p.priceEuro.toFixed(2)}</span>`,
    average_rating: "5.0",
    review_count: 14,
    images: [
      {
        id: p.id + 100,
        src: p.s3Url,
        thumbnail: p.s3Url,
        srcset: "",
        sizes: "(max-width: 800px) 100vw, 800px",
        name: p.imageFile,
        alt: `${p.name} for Ghost Guns`,
        localSrc: `/assets/products/${p.imageFile}`
      }
    ],
    categories: [
      {
        id: 70,
        name: "3D Printers",
        slug: "3d-printers",
        link: "https://ghostguns.com/3d-printers/"
      },
      {
        id: 53,
        name: "3D Printing",
        slug: "3d-printing",
        link: "https://ghostguns.com/3d-printing/"
      }
    ],
    tags: [
      { id: 901, name: "3d printer", slug: "3d-printer" },
      { id: 902, name: "ghost guns", slug: "ghost-guns" },
      { id: 903, name: "corexy", slug: "corexy" }
    ],
    brands: [],
    attributes: [
      {
        id: 1,
        name: "Category Recommendation",
        taxonomy: "pa_recommendation",
        has_variations: false,
        terms: [{ id: 1, name: p.categorySub, slug: p.categorySub.toLowerCase().replace(/[^a-z0-9]+/g, '-') }]
      }
    ],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: 3,
    stock_availability: {
      text: "In Stock - Ships Fast & Discreet",
      class: "in-stock"
    },
    sold_individually: false,
    weight: "14.5 kg",
    dimensions: {
      length: "400",
      width: "400",
      height: "450"
    },
    formatted_weight: "14.5 kg",
    formatted_dimensions: "400 × 400 × 450 mm",
    add_to_cart: {
      text: "Add to cart",
      description: `Add to cart: &ldquo;${p.name}&rdquo;`,
      url: `/product/${p.slug}/`,
      single_text: "Add to cart",
      minimum: 1,
      maximum: 99,
      multiple_of: 1
    },
    is_password_protected: false,
    extensions: { bundles: [] }
  };

  products.push(prodObj);
}

fs.writeFileSync(prodPath, JSON.stringify(products, null, 2), 'utf8');
console.log(`Added all 10 printers to products.json. Total products: ${products.length}`);

console.log('--- 4. Updating products-translations.json ---');
const prodTransPath = './src/data/products-translations.json';
const prodTranslations = JSON.parse(fs.readFileSync(prodTransPath, 'utf8'));

for (const p of printerItems) {
  prodTranslations[p.slug] = {
    en: {
      name: p.name,
      short_description: p.shortEn,
      description: p.descEn
    },
    de: {
      name: p.i18n.de.name,
      short_description: p.i18n.de.short,
      description: p.i18n.de.desc
    },
    nl: {
      name: p.i18n.nl.name,
      short_description: p.i18n.nl.short,
      description: p.i18n.nl.desc
    },
    fr: {
      name: p.i18n.fr.name,
      short_description: p.i18n.fr.short,
      description: p.i18n.fr.desc
    },
    es: {
      name: p.i18n.es.name,
      short_description: p.i18n.es.short,
      description: p.i18n.es.desc
    },
    it: {
      name: p.i18n.it.name,
      short_description: p.i18n.it.short,
      description: p.i18n.it.desc
    },
    pl: {
      name: p.i18n.pl.name,
      short_description: p.i18n.pl.short,
      description: p.i18n.pl.desc
    },
    bg: {
      name: p.i18n.bg.name,
      short_description: p.i18n.bg.short,
      description: p.i18n.bg.desc
    }
  };
}

fs.writeFileSync(prodTransPath, JSON.stringify(prodTranslations, null, 2), 'utf8');
console.log('Updated products-translations.json with all 10 printers across 8 languages.');

console.log('--- 5. Updating navigation.json with 3D Printers ---');
const navPath = './src/data/navigation.json';
const nav = JSON.parse(fs.readFileSync(navPath, 'utf8'));
const existsInNav = nav.header.links.some(l => l.url === '/3d-printers/');
if (!existsInNav) {
  // Insert right after 3D Printing or Build Kits
  const insertIndex = nav.header.links.findIndex(l => l.url.includes('3d-printing'));
  const newLink = {
    title: "3D Printers",
    url: "/3d-printers/",
    is_highlighted: true,
    children: []
  };
  if (insertIndex >= 0) {
    nav.header.links.splice(insertIndex + 1, 0, newLink);
  } else {
    nav.header.links.push(newLink);
  }
  fs.writeFileSync(navPath, JSON.stringify(nav, null, 2), 'utf8');
  console.log('Added 3D Printers to header navigation.');
}

console.log('SUCCESS: All 10 3D printers, translations, and category added!');
