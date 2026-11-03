import fs from 'fs';

const pagesTranslations = {
  about: {
    en: {
      title: "About Us | Ghost Guns",
      heading: "ABOUT GHOST GUNS",
      subheading: "A REAL COMPANY. REAL INVENTORY. REAL PEOPLE.",
      content: `
        <p>GhostGuns.com was founded on the fundamental principle that the right to bear arms includes the right to manufacture arms for personal use, a tradition as old as the United States itself.</p>
        <p>We are based in Austin, Texas. We maintain a full warehouse of genuine inventory ready to ship promptly and discreetly to law-abiding citizens.</p>
        <p>Our catalog features premium 3D printed firearm components, precision rails, 80% lowers, jigs, drill bits, slide kits, and barrel assemblies designed to work flawlessly right out of the box.</p>
      `
    },
    de: {
      title: "Über Uns | Ghost Guns",
      heading: "ÜBER GHOST GUNS",
      subheading: "EIN ECHTES UNTERNEHMEN. ECHTER LAGERBESTAND. ECHTE MENSCHEN.",
      content: `
        <p>GhostGuns.com wurde auf dem Grundprinzip gegründet, dass das Recht auf Waffenbesitz auch das Recht einschließt, Waffen für den persönlichen Gebrauch selbst herzustellen.</p>
        <p>Wir haben unseren Sitz in Austin, Texas. Wir verfügen über ein voll ausgestattetes Warenlager mit echtem Bestand, der zügig und diskret versendet wird.</p>
        <p>Unser Sortiment umfasst hochwertige 3D-Druck-Komponenten, Präzisionsschienen, 80%-Gehäuse, Schablonen, Bohrersätze, Schlitten und Bausätze, die für maximale Zuverlässigkeit entwickelt wurden.</p>
      `
    },
    nl: {
      title: "Over Ons | Ghost Guns",
      heading: "OVER GHOST GUNS",
      subheading: "EEN ECHT BEDRIJF. ECHTE VOORRAAD. ECHTE MENSEN.",
      content: `
        <p>GhostGuns.com is opgericht vanuit het principe dat het recht op wapenbezit ook het recht omvat om voor eigen gebruik wapens te vervaardigen.</p>
        <p>Wij zijn gevestigd in Austin, Texas. We beschikken over een fysiek magazijn met voorraad die direct en discreet verzonden kan worden.</p>
        <p>Ons assortiment bevat hoogwaardige 3D-printonderdelen, precisierails, 80% kasten, boormallen, sledebouwpakketten en lopen ontworpen voor optimale betrouwbaarheid.</p>
      `
    },
    fr: {
      title: "À Propos de Nous | Ghost Guns",
      heading: "À PROPOS DE GHOST GUNS",
      subheading: "UNE VRAIE ENTREPRISE. DU VRAI STOCK. DE VRAIES PERSONNES.",
      content: `
        <p>GhostGuns.com a été fondé sur le principe fondamental que le droit de posséder des armes inclut le droit d'en fabriquer pour un usage personnel.</p>
        <p>Nous sommes basés à Austin, Texas. Nous disposons d'un entrepôt approvisionné prêt pour des expéditions rapides et discrètes.</p>
        <p>Notre catalogue propose des composants d'armes imprimées en 3D haut de gamme, des rails de précision, des carcasses 80%, des gabarits et des kits de culasse prêts à l'emploi.</p>
      `
    },
    es: {
      title: "Sobre Nosotros | Ghost Guns",
      heading: "SOBRE GHOST GUNS",
      subheading: "UNA EMPRESA REAL. INVENTARIO REAL. PERSONAS REALES.",
      content: `
        <p>GhostGuns.com se fundó bajo el principio fundamental de que el derecho a poseer armas incluye el derecho a fabricarlas para uso personal.</p>
        <p>Tenemos nuestra sede en Austin, Texas. Mantenemos un almacén completo de inventario listo para enviar de forma rápida y discreta.</p>
        <p>Nuestro catálogo incluye componentes de armas impresas en 3D de primera calidad, rieles de precisión, armazones al 80%, guías de taladro y kits de corredera.</p>
      `
    },
    it: {
      title: "Chi Siamo | Ghost Guns",
      heading: "CHI SIAMO - GHOST GUNS",
      subheading: "UN'AZIENDA REALE. INVENTARIO REALE. PERSONE REALI.",
      content: `
        <p>GhostGuns.com è stata fondata sul principio fondamentale che il diritto di possedere armi comprende il diritto di fabbricarle per uso personale.</p>
        <p>Abbiamo sede ad Austin, Texas. Gestiamo un inventario completo pronto per spedizioni rapide e discrete.</p>
        <p>Il nostro catalogo offre componenti per armi stampate in 3D di prima qualità, guide di precisione, castelli all'80%, dime di foratura e kit carrello.</p>
      `
    },
    pl: {
      title: "O Nas | Ghost Guns",
      heading: "O GHOST GUNS",
      subheading: "PRAWDZIWA FIRMA. PRAWDZIWY MAGAZYN. PRAWDZIWI LUDZIE.",
      content: `
        <p>Firma GhostGuns.com została założona na fundamentalnej zasadzie, że prawo do posiadania broni obejmuje prawo do jej wytwarzania na własny użytek.</p>
        <p>Nasza siedziba mieści się w Austin w Teksasie. Posiadamy pełny magazyn towarów gotowych do szybkiej i dyskretnej wysyłki.</p>
        <p>Nasz katalog zawiera najwyższej klasy części do broni z druku 3D, precyzyjne szyny, szkielety 80%, przyrządy wiertarskie i kompletne zestawy zamków.</p>
      `
    },
    bg: {
      title: "За Нас | Ghost Guns",
      heading: "ЗА GHOST GUNS",
      subheading: "ИСТИНСКА КОМПАНИЯ. РЕАЛНА НАЛИЧНОСТ. РЕАЛНИ ХОРА.",
      content: `
        <p>GhostGuns.com е основана на фундаменталния принцип, че правото на притежание на оръжие включва и правото на неговото изработване за лична употреба.</p>
        <p>Базирани сме в Остин, Тексас. Разполагаме с пълен склад и реални наличности, готови за бърза и дискретна доставка.</p>
        <p>Нашият каталог предлага премиум 3D принтирани оръжейни компоненти, прецизни релси, 80% рами, шаблони за пробиване и комплекти за затвори.</p>
      `
    }
  },
  contact: {
    en: {
      title: "Contact Us | Ghost Guns",
      heading: "CONTACT US",
      subheading: "CUSTOMER SUPPORT & INQUIRIES",
      hoursLabel: "HOURS OF OPERATION",
      hours: "Monday – Friday: 9:00 AM – 5:00 PM CST",
      addressLabel: "HEADQUARTERS",
      address: "2320 Donley Dr Suite C, Austin TX 78758",
      emailLabel: "EMAIL SUPPORT",
      email: "support@ghostguns.com",
      phoneLabel: "PHONE",
      phone: "(855) 754-4678",
      formTitle: "Send Us a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email Address",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "How can we help you today?",
      submitBtn: "SEND MESSAGE",
      locationTitle: "OUR LOCATION",
      faqsTitle: "FREQUENTLY ASKED QUESTIONS",
      faqs: [
        {
          q: "How long does shipping take?",
          a: "Orders are processed within 2 business days. Once shipped, you will receive a tracking number via email. Delivery times depend on your destination."
        },
        {
          q: "How do I return an item?",
          a: "Email support@ghostguns.com for approval and a Return Merchandise Authorization (RMA) number. Items must be in original condition with proof of purchase."
        },
        {
          q: "How long do refunds take?",
          a: "After inspecting your returned items, refunds are processed within 10 business days back to your original payment method or crypto address."
        },
        {
          q: "How can I track my order?",
          a: "Once shipped, you will receive a confirmation email with your carrier tracking number, also visible in your account dashboard."
        },
        {
          q: "What if my item arrives damaged?",
          a: "Contact us immediately with photos of the damaged item and original packaging. We will provide an expedited replacement or refund."
        }
      ]
    },
    de: {
      title: "Kontakt | Ghost Guns",
      heading: "KONTAKTIEREN SIE UNS",
      subheading: "KUNDENDIENST & ANFRAGEN",
      hoursLabel: "ÖFFNUNGSZEITEN",
      hours: "Montag – Freitag: 9:00 – 17:00 Uhr CST",
      addressLabel: "HAUPTSITZ",
      address: "2320 Donley Dr Suite C, Austin TX 78758, USA",
      emailLabel: "E-MAIL-SUPPORT",
      email: "support@ghostguns.com",
      phoneLabel: "TELEFON",
      phone: "(855) 754-4678",
      formTitle: "Schreiben Sie uns eine Nachricht",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      subjectPlaceholder: "Betreff",
      messagePlaceholder: "Wie können wir Ihnen weiterhelfen?",
      submitBtn: "NACHRICHT ABSENDEN",
      locationTitle: "UNSER STANDORT",
      faqsTitle: "HÄUFIG GESTELLTE FRAGEN",
      faqs: [
        {
          q: "Wie lange dauert der Versand?",
          a: "Bestellungen werden innerhalb von 2 Werktagen bearbeitet. Nach dem Versand erhalten Sie eine Tracking-Nummer per E-Mail."
        },
        {
          q: "Wie sende ich einen Artikel zurück?",
          a: "Schreiben Sie an support@ghostguns.com für eine RMA-Rücksendeautorisierung. Artikel müssen sich im Originalzustand befinden."
        },
        {
          q: "Wie lange dauert eine Rückerstattung?",
          a: "Nach Erhalt und Prüfung Ihrer Rücksendung erfolgt die Erstattung innerhalb von bis zu 10 Werktagen auf Ihre Zahlungsmethode."
        },
        {
          q: "Wie verfolge ich meine Bestellung?",
          a: "Nach dem Versand erhalten Sie eine E-Mail mit Sendungsnummer, die Sie auch in Ihrem Kundenkonto einsehen können."
        },
        {
          q: "Was tun, wenn ein Artikel beschädigt ankommt?",
          a: "Kontaktieren Sie uns bitte sofort mit Fotos des beschädigten Artikels und der Verpackung für einen schnellen Umtausch."
        }
      ]
    },
    nl: {
      title: "Contact | Ghost Guns",
      heading: "NEEM CONTACT OP",
      subheading: "KLANTENSERVICE & VRAGEN",
      hoursLabel: "OPENINGSTIJDEN",
      hours: "Maandag – Vrijdag: 09:00 – 17:00 CST",
      addressLabel: "HOOFDKANTOOR",
      address: "2320 Donley Dr Suite C, Austin TX 78758, VS",
      emailLabel: "E-MAIL SUPPORT",
      email: "support@ghostguns.com",
      phoneLabel: "TELEFOON",
      phone: "(855) 754-4678",
      formTitle: "Stuur ons een bericht",
      namePlaceholder: "Uw naam",
      emailPlaceholder: "Uw e-mailadres",
      subjectPlaceholder: "Onderwerp",
      messagePlaceholder: "Waarmee kunnen wij u van dienst zijn?",
      submitBtn: "BERICHT VERZENDEN",
      locationTitle: "ONZE LOCATIE",
      faqsTitle: "VEELGESTELDE VRAGEN",
      faqs: [
        {
          q: "Hoe lang duurt de verzending?",
          a: "Bestellingen worden binnen 2 werkdagen verwerkt. Na verzending ontvangt u een trackingnummer per e-mail."
        },
        {
          q: "Hoe stuur ik een artikel retour?",
          a: "Stuur een e-mail naar support@ghostguns.com voor een RMA-nummer. Artikelen dienen in originele staat te zijn."
        },
        {
          q: "Wanneer ontvang ik mijn terugbetaling?",
          a: "Na ontvangst en inspectie van uw retour wordt het aankoopbedrag binnen 10 werkdagen teruggestort."
        },
        {
          q: "Hoe volg ik mijn bestelling?",
          a: "U ontvangt een verzendbevestiging met trackingcode die ook zichtbaar is in uw accountoverzicht."
        },
        {
          q: "Wat als een pakket beschadigd aankomt?",
          a: "Neem direct contact op met foto's van de schade en verpakking voor een directe vervanging."
        }
      ]
    },
    fr: {
      title: "Contactez-nous | Ghost Guns",
      heading: "CONTACTEZ-NOUS",
      subheading: "SUPPORT CLIENT & QUESTIONS",
      hoursLabel: "HEURES D'OUVERTURE",
      hours: "Lundi – Vendredi : 9h00 – 17h00 CST",
      addressLabel: "SIÈGE SOCIAL",
      address: "2320 Donley Dr Suite C, Austin TX 78758, États-Unis",
      emailLabel: "SUPPORT E-MAIL",
      email: "support@ghostguns.com",
      phoneLabel: "TÉLÉPHONE",
      phone: "(855) 754-4678",
      formTitle: "Envoyez-nous un message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre adresse e-mail",
      subjectPlaceholder: "Objet",
      messagePlaceholder: "Comment pouvons-nous vous aider aujourd'hui ?",
      submitBtn: "ENVOYER LE MESSAGE",
      locationTitle: "NOTRE EMPLACEMENT",
      faqsTitle: "FOIRE AUX QUESTIONS",
      faqs: [
        {
          q: "Quel est le délai de livraison ?",
          a: "Les commandes sont traitées sous 2 jours ouvrables. Vous recevrez un numéro de suivi dès l'expédition."
        },
        {
          q: "Comment retourner un produit ?",
          a: "Contactez support@ghostguns.com pour obtenir un numéro RMA d'autorisation de retour."
        },
        {
          q: "Quel est le délai de remboursement ?",
          a: "Après inspection de votre colis retourné, le remboursement est effectué sous 10 jours ouvrés."
        },
        {
          q: "Comment suivre ma commande ?",
          a: "Dès l'expédition, un e-mail de confirmation avec numéro de suivi transporteur vous est envoyé."
        },
        {
          q: "Que faire si un article arrive endommagé ?",
          a: "Contactez-nous immédiatement avec des photos du produit et de l'emballage pour un remplacement rapide."
        }
      ]
    },
    es: {
      title: "Contacto | Ghost Guns",
      heading: "CONTÁCTANOS",
      subheading: "ATENCIÓN AL CLIENTE Y CONSULTAS",
      hoursLabel: "HORARIO DE ATENCIÓN",
      hours: "Lunes – Viernes: 9:00 – 17:00 CST",
      addressLabel: "SEDE CENTRAL",
      address: "2320 Donley Dr Suite C, Austin TX 78758, EE. UU.",
      emailLabel: "CORREO DE SOPORTE",
      email: "support@ghostguns.com",
      phoneLabel: "TELÉFONO",
      phone: "(855) 754-4678",
      formTitle: "Envíanos un mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu correo electrónico",
      subjectPlaceholder: "Asunto",
      messagePlaceholder: "¿En qué podemos ayudarte hoy?",
      submitBtn: "ENVIAR MENSAJE",
      locationTitle: "NUESTRA UBICACIÓN",
      faqsTitle: "PREGUNTAS FRECUENTES",
      faqs: [
        {
          q: "¿Cuánto tarda el envío?",
          a: "Los pedidos se procesan en un plazo de 2 días hábiles. Recibirás un número de seguimiento por correo."
        },
        {
          q: "¿Cómo realizo una devolución?",
          a: "Escribe a support@ghostguns.com para solicitar un número de autorización RMA."
        },
        {
          q: "¿Cuánto tardan los reembolsos?",
          a: "Una vez recibido e inspeccionado el artículo, el reembolso se procesa en un plazo de hasta 10 días hábiles."
        },
        {
          q: "¿Cómo puedo rastrear mi pedido?",
          a: "Recibirás un correo con el número de seguimiento una vez enviado, accesible también desde tu cuenta."
        },
        {
          q: "¿Qué hago si mi pedido llega dañado?",
          a: "Escríbenos de inmediato incluyendo fotografías del paquete y producto dañado para solucionarlo rápidamente."
        }
      ]
    },
    it: {
      title: "Contattaci | Ghost Guns",
      heading: "CONTATTACI",
      subheading: "ASSISTENZA CLIENTI E DOMANDE",
      hoursLabel: "ORARI DI APERTURA",
      hours: "Lunedì – Venerdì: 9:00 – 17:00 CST",
      addressLabel: "SEDE CENTRALE",
      address: "2320 Donley Dr Suite C, Austin TX 78758, USA",
      emailLabel: "SUPPORTO E-MAIL",
      email: "support@ghostguns.com",
      phoneLabel: "TELEFONO",
      phone: "(855) 754-4678",
      formTitle: "Inviaci un messaggio",
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "La tua e-mail",
      subjectPlaceholder: "Oggetto",
      messagePlaceholder: "Come possiamo aiutarti oggi?",
      submitBtn: "INVIA MESSAGGIO",
      locationTitle: "LA NOSTRA SEDE",
      faqsTitle: "DOMANDE FREQUENTI",
      faqs: [
        {
          q: "Quanto tempo richiede la spedizione?",
          a: "Gli ordini vengono elaborati entro 2 giorni lavorativi. Riceverai un numero di tracciamento via e-mail."
        },
        {
          q: "Come posso restituire un prodotto?",
          a: "Scrivi a support@ghostguns.com per ricevere l'autorizzazione di reso RMA."
        },
        {
          q: "Quanto tempo richiedono i rimborsi?",
          a: "Dopo l'ispezione dell'articolo restituito, il rimborso viene completato entro 10 giorni lavorativi."
        },
        {
          q: "Come posso tracciare il mio ordine?",
          a: "Alla spedizione riceverai un'e-mail con il link di tracciamento, consultabile anche nella tua dashboard."
        },
        {
          q: "Cosa fare se un articolo arriva danneggiato?",
          a: "Contattaci immediatamente inviando foto del danno per predisporre una sostituzione rapida."
        }
      ]
    },
    pl: {
      title: "Kontakt | Ghost Guns",
      heading: "SKONTAKTUJ SIĘ Z NAMI",
      subheading: "OBSŁUGA KLIENTA I ZAPYTANIA",
      hoursLabel: "GODZINY PRACY",
      hours: "Poniedziałek – Piątek: 9:00 – 17:00 CST",
      addressLabel: "SIEDZIBA",
      address: "2320 Donley Dr Suite C, Austin TX 78758, USA",
      emailLabel: "E-MAIL WSPARCIA",
      email: "support@ghostguns.com",
      phoneLabel: "TELEFON",
      phone: "(855) 754-4678",
      formTitle: "Wyślij do nas wiadomość",
      namePlaceholder: "Twoje imię",
      emailPlaceholder: "Twój adres e-mail",
      subjectPlaceholder: "Temat",
      messagePlaceholder: "W czym możemy Ci pomóc?",
      submitBtn: "WYŚLIJ WIADOMOŚĆ",
      locationTitle: "NASZA LOKALIZACJA",
      faqsTitle: "CZĘSTO ZADAWANE PYTANIA",
      faqs: [
        {
          q: "Ile trwa realizacja i wysyłka?",
          a: "Zamówienia przetwarzane są w ciągu 2 dni roboczych. Po nadaniu otrzymasz numer śledzenia przesyłki."
        },
        {
          q: "Jak dokonać zwrotu przedmiotu?",
          a: "Skontaktuj się pod adresem support@ghostguns.com, aby uzyskać numer RMA do zwrotu."
        },
        {
          q: "Ile trwa procedura zwrotu środków?",
          a: "Po otrzymaniu i weryfikacji przesyłki zwrot środków następuje w ciągu maksymalnie 10 dni roboczych."
        },
        {
          q: "Jak mogę sprawdzić status zamówienia?",
          a: "Otrzymasz e-mail z kodem do śledzenia przesyłki kurierskiej, widocznym także w panelu klienta."
        },
        {
          q: "Co zrobić w przypadku uszkodzenia paczki?",
          a: "Napisz do nas natychmiast załączając zdjęcia uszkodzenia i opakowania w celu szybkiej wymiany."
        }
      ]
    },
    bg: {
      title: "Контакти | Ghost Guns",
      heading: "СВЪРЖЕТЕ СЕ С НАС",
      subheading: "КЛИЕНТСКА ПОДДРЪЖКА И ВЪПРОСИ",
      hoursLabel: "РАБОТНО ВРЕМЕ",
      hours: "Понеделник – Петък: 9:00 – 17:00 CST",
      addressLabel: "ГЛАВЕН ОФИС",
      address: "2320 Donley Dr Suite C, Austin TX 78758, САЩ",
      emailLabel: "ИМЕЙЛ ЗА ВРЪЗКА",
      email: "support@ghostguns.com",
      phoneLabel: "ТЕЛЕФОН",
      phone: "(855) 754-4678",
      formTitle: "Изпратете ни съобщение",
      namePlaceholder: "Вашето име",
      emailPlaceholder: "Вашият имейл",
      subjectPlaceholder: "Относно",
      messagePlaceholder: "С какво можем да ви помогнем днес?",
      submitBtn: "ИЗПРАТИ СЪОБЩЕНИЕ",
      locationTitle: "НАШЕТО МЕСТОПОЛОЖЕНИЕ",
      faqsTitle: "ЧЕСТО ЗАДАВАНИ ВЪПРОСИ",
      faqs: [
        {
          q: "Колко време отнема доставката?",
          a: "Поръчките се обработват в рамките на 2 работни дни. След изпращане ще получите номер за проследяване по имейл."
        },
        {
          q: "Как мога да върна продукт?",
          a: "Пишете на support@ghostguns.com за получаване на RMA номер за оторизирано връщане."
        },
        {
          q: "Колко време отнема възстановяването на суми?",
          a: "След проверка на върнатата пратка средствата се възстановяват до 10 работни дни."
        },
        {
          q: "Как мога да проследя поръчката си?",
          a: "Ще получите имейл за потвърждение с номер за проследяване, наличен и в потребителския профил."
        },
        {
          q: "Какво да направя при повредена пратка?",
          a: "Свържете се незабавно с нас със снимки на повредения артикул и опаковката за бърза замяна."
        }
      ]
    }
  },
  "shipping-restrictions": {
    en: {
      title: "Shipping Restrictions | Ghost Guns",
      heading: "SHIPPING RESTRICTIONS & COMPLIANCE",
      desc: "Detailed legal regulations and state-by-state shipping guidelines for firearms build kits, 80% receivers, and magazine capacities.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Buyer Legal Responsibility</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">It is the sole responsibility of the customer to ensure that their purchase and receipt of any products from GhostGuns.com complies with all applicable federal, state, and local laws, statutes, and municipal regulations.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">You must be at least 21 years of age to purchase firearm frames, receivers, build kits, and completion components. Ghost Guns does not provide legal advice, and our acceptance of an order does not constitute confirmation of local legality.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Restricted Jurisdictions for 80% Receivers & Frames</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Due to state-specific statutory bans and legal restrictions, GhostGuns.com cannot ship unfinished frames, 80% lower receivers, or blank manufacturing jigs to the following locations:</p>
          <ul class="list-disc pl-5 text-sm text-neutral-700 space-y-2 mb-4">
            <li><strong>California:</strong> Prohibited under AB 1621 and related legislation.</li>
            <li><strong>New York:</strong> Prohibited under the Jose Webster Untraceable Firearms Act.</li>
            <li><strong>New Jersey:</strong> Prohibited under N.J.S.A. 2C:39-9n.</li>
            <li><strong>Connecticut:</strong> Prohibited under Public Act 19-6.</li>
            <li><strong>Washington D.C.:</strong> Strict prohibitions on unfinished frames and untraceable parts.</li>
            <li><strong>Hawaii, Rhode Island, Illinois (Cook County / Chicago), and Washington State:</strong> Statutory limits apply.</li>
          </ul>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">High-Capacity Magazine Restrictions</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Magazines with capacities exceeding jurisdictional thresholds will not be shipped to restricted jurisdictions:</p>
          <ul class="list-disc pl-5 text-sm text-neutral-700 space-y-2 mb-4">
            <li><strong>10-Round Limit:</strong> CA, CT, DC, HI, MD, MA, NJ, NY, RI, WA.</li>
            <li><strong>15-Round Limit:</strong> CO, IL, VT (handguns).</li>
          </ul>
        </div>
      `
    },
    de: {
      title: "Versandbeschränkungen | Ghost Guns",
      heading: "VERSANDBESCHRÄNKUNGEN & RECHTLICHE HINWEISE",
      desc: "Detaillierte rechtliche Bestimmungen und Richtlinien für den Versand von Bausätzen, 80%-Gehäusen und Magazinkapazitäten.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Rechtliche Verantwortung des Käufers</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Es liegt in der alleinigen Verantwortung des Kunden sicherzustellen, dass Kauf und Empfang von Produkten auf GhostGuns.com allen geltenden nationalen und regionalen Gesetzen entsprechen.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Sie müssen mindestens 21 Jahre alt sein, um Bausätze, Waffengehäuse und Schablonen zu erwerben. Ghost Guns erteilt keine Rechtsberatung.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Eingeschränkte Rechtsordnungen</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Aufgrund von gesetzlichen Bestimmungen können unvollständige 80%-Gehäuse und Schablonen nicht in bestimmte Rechtsräume versandt werden, einschließlich Kalifornien, New York, New Jersey, Connecticut und Washington D.C.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Beschränkungen der Magazinkapazität</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Magazine, die gesetzliche Kapazitätsgrenzen überschreiten (z. B. 10 Schuss), werden nicht in Regionen mit entsprechenden Beschränkungen geliefert.</p>
        </div>
      `
    },
    nl: {
      title: "Verzendbeperkingen | Ghost Guns",
      heading: "VERZENDBEPERKINGEN & NALEVING",
      desc: "Gedetailleerde wetgeving en richtlijnen per regio voor bouwpakketten, 80% kasten en magazijncapaciteiten.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Verantwoordelijkheid van de Koper</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">De koper is zelf verantwoordelijk voor de naleving van alle lokale en nationale wetgeving bij aankoop en invoer van onze artikelen.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">U dient minimaal 21 jaar oud te zijn voor de aankoop van bouwpakketten en componenten.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Regionale Beperkingen</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Wegens wetgeving verzendt GhostGuns.com geen 80%-kasten naar specifieke rechtsgebieden waar een verbod geldt.</p>
        </div>
      `
    },
    fr: {
      title: "Restrictions d'Envoi | Ghost Guns",
      heading: "RESTRICTIONS D'EXPÉDITION ET CONFORMITÉ",
      desc: "Réglementations juridiques détaillées et directives d'envoi pour les kits d'assemblage, carcasses 80% et capacités de chargeurs.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Responsabilité Légale de l'Acheteur</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Il relève de la seule responsabilité de l'acheteur de vérifier la conformité de sa commande avec les réglementations et lois en vigueur dans sa juridiction.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">L'âge légal requis pour commander des kits de construction et carcasses est de 21 ans révolus.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Juridictions Réglementées</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Les pièces et carcasses 80% ne sont pas expédiées vers les juridictions soumises à interdiction légale stricte.</p>
        </div>
      `
    },
    es: {
      title: "Restricciones de Envío | Ghost Guns",
      heading: "RESTRICCIONES DE ENVÍO Y NORMATIVA",
      desc: "Normativa legal detallada y directrices de envío para kits de montaje, receptores al 80% y capacidades de cargadores.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Responsabilidad Legal del Comprador</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">El comprador es el único responsable de asegurar el cumplimiento de las normativas y leyes locales aplicables a la posesión y compra de componentes.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Se requiere tener al menos 21 años para la adquisición de kits de montaje y piezas de armazón.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Zonas con Restricciones</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">No se realizan envíos de receptores al 80% ni componentes regulados a estados o regiones con prohibiciones explícitas.</p>
        </div>
      `
    },
    it: {
      title: "Restrizioni di Spedizione | Ghost Guns",
      heading: "RESTRIZIONI DI SPEDIZIONE E CONFORMITÀ",
      desc: "Normative legali dettagliate e linee guida di spedizione per kit di montaggio, castelli all'80% e capacità caricatori.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Responsabilità Legale dell'Acquirente</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">È esclusiva responsabilità del cliente accertarsi che l'acquisto sia conforme a tutte le normative e leggi locali applicabili.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">L'età minima obbligatoria per effettuare ordini di parti costruttive è di 21 anni.</p>
        </div>
      `
    },
    pl: {
      title: "Ograniczenia Wysyłki | Ghost Guns",
      heading: "OGRANICZENIA WYSYŁKI I ZGODNOŚĆ Z PRAWEM",
      desc: "Szczegółowe regulacje prawne i wytyczne wysyłki zestawów montażowych, szkieletów 80% oraz pojemności magazynków.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Odpowiedzialność Prawna Kupującego</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Klient ponosi wyłączną odpowiedzialność za zgodność zamówienia z obowiązującymi przepisami prawa krajowego i lokalnego.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Wymagany wiek minimalny do zakupu zestawów montażowych i szkieletów wynosi 21 lat.</p>
        </div>
      `
    },
    bg: {
      title: "Ограничения за Доставка | Ghost Guns",
      heading: "ОГРАНИЧЕНИЯ ЗА ДОСТАВКА И СЪОТВЕТСТВИЕ",
      desc: "Подробни правни разпоредби и указания за доставка на комплекти за сглобяване, 80% рами и вместимост на пълнители.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Правна Отговорност на Купувача</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Клиентът носи пълна отговорност за спазване на местните и национални законови разпоредби при поръчка на нашите артикули.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Изисква се навършена възраст от минимум 21 години за поръчка на комплекти и компоненти.</p>
        </div>
      `
    }
  },
  "terms-and-conditions": {
    en: {
      title: "Terms and Conditions | Ghost Guns",
      heading: "TERMS AND CONDITIONS",
      desc: "Terms of sale, disclaimer, buyer responsibility, and conditions of purchase for Ghost Guns products.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Acceptance of Terms</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">By visiting and purchasing from GhostGuns.com ("Company", "we", "us"), you expressly agree to abide by these Terms and Conditions and our Privacy Policy. If you do not agree to all terms, you must discontinue use immediately.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Age Requirement & Eligibility</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">You must be at least 21 years of age to order products from this website. By placing an order, you represent and warrant that you are 21 years of age or older, legally eligible to possess firearm parts, and not prohibited under 18 U.S.C. § 922(g) or any state equivalent.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">3. Prohibited Users and Law Enforcement Restrictions</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Access to this site is explicitly denied to agents, officials, and legal representatives of specific government and private gun control entities as outlined in our legal notices. Any unauthorized access may lead to prosecution under the Computer Fraud and Abuse Act (18 U.S.C. § 1030).</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">4. Disclaimer of Warranties and Limitation of Liability</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">All goods and digital files are supplied on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. Under no circumstances shall Ghost Guns be liable for any indirect, incidental, punitive, or consequential damages resulting from firearm assembly, handling, or use.</p>
        </div>
      `
    },
    de: {
      title: "Allgemeine Geschäftsbedingungen | Ghost Guns",
      heading: "ALLGEMEINE GESCHÄFTSBEDINGUNGEN",
      desc: "Verkaufsbedingungen, Haftungsausschluss und Käuferpflichten für Produkte von Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Geltungsbereich und Zustimmung</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Durch die Nutzung und den Einkauf auf GhostGuns.com erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Altersanforderung & Berechtigung</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Sie müssen mindestens 21 Jahre alt sein, um Bestellungen aufzugeben. Mit der Bestellung versichern Sie Ihre Volljährigkeit und gesetzliche Erwerbsberechtigung.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">3. Haftungsausschluss</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Alle Produkte werden wie besehen ("AS IS") geliefert. Ghost Guns haftet nicht für Folgeschäden durch unsachgemäße Montage oder Bedienung.</p>
        </div>
      `
    },
    nl: {
      title: "Algemene Voorwaarden | Ghost Guns",
      heading: "ALGEMENE VOORWAARDEN",
      desc: "Verkoopvoorwaarden, disclaimer en verantwoordelijkheden van de koper voor Ghost Guns producten.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Toepasselijkheid</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Door gebruik van deze website en het plaatsen van bestellingen gaat u akkoord met onze Algemene Voorwaarden.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Leeftijdsgrens (21+)</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">U verklaart minstens 21 jaar oud te zijn en wettelijk bevoegd tot aankoop en bezit van de bestelde componenten.</p>
        </div>
      `
    },
    fr: {
      title: "Conditions Générales de Vente | Ghost Guns",
      heading: "CONDITIONS GÉNÉRALES DE VENTE",
      desc: "Conditions de vente, avertissements et responsabilités de l'acheteur pour les produits Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Acceptation des Conditions</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">En visitant ce site et en effectuant des achats, vous acceptez sans réserve les présentes Conditions Générales de Vente.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Limite d'Âge et Éligibilité</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Vous devez avoir au minimum 21 ans pour passer commande sur notre boutique en ligne.</p>
        </div>
      `
    },
    es: {
      title: "Términos y Condiciones | Ghost Guns",
      heading: "TÉRMINOS Y CONDICIONES",
      desc: "Condiciones de venta, aviso legal y responsabilidad del comprador para productos Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Aceptación de los Términos</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">El acceso y la compra en GhostGuns.com implican la aceptación plena de estos Términos y Condiciones.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Requisito de Edad (21+)</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Debe tener al menos 21 años de edad y capacidad legal para adquirir componentes de armas.</p>
        </div>
      `
    },
    it: {
      title: "Termini e Condizioni | Ghost Guns",
      heading: "TERMINI E CONDIZIONI",
      desc: "Condizioni di vendita, disclaimer e responsabilità dell'acquirente per i prodotti Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Accettazione dei Termini</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Accedendo a questo sito ed effettuando un ordine, accetti integralmente i presenti Termini e Condizioni.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Requisiti di Età</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">È necessario avere compiuto almeno 21 anni per acquistare componenti e accessori su questo portale.</p>
        </div>
      `
    },
    pl: {
      title: "Regulamin | Ghost Guns",
      heading: "REGULAMIN I WARUNKI SPRZEDAŻY",
      desc: "Warunki sprzedaży, wyłączenie odpowiedzialności i obowiązki kupującego produktów Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Postanowienia Ogólne</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Korzystanie z serwisu GhostGuns.com oraz składanie zamówień oznacza pełną akceptację niniejszego Regulaminu.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Wymóg Wieku (21+)</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Kupujący oświadcza, że ukończył 21 lat i posiada pełną zdolność do czynności prawnych.</p>
        </div>
      `
    },
    bg: {
      title: "Общи Условия | Ghost Guns",
      heading: "ОБЩИ УСЛОВИЯ",
      desc: "Условия за продажба, отказ от отговорност и задължения на купувача за продуктите на Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Приемане на Условията</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">С посещението и поръчката от GhostGuns.com се съгласявате безусловно с настоящите Общи Условия.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Изискване за Възраст (21+)</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">За покупка от сайта се изисква навършена възраст от минимум 21 години.</p>
        </div>
      `
    }
  },
  "privacy-policy": {
    en: {
      title: "Privacy Policy | Ghost Guns",
      heading: "PRIVACY POLICY",
      desc: "How Ghost Guns protects your data, customer privacy standards, and information retention policies.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Information We Collect</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">We collect information strictly necessary to process transactions, ensure secure order delivery, and maintain account integrity. This includes your name, shipping address, email address, and order records.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Data Encryption & Security</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">All transmission of sensitive data is protected via industry-standard TLS encryption. We do not store complete payment card credentials on our servers. Cryptocurrency payments are processed pseudo-anonymously on public distributed ledgers.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">3. Third-Party Disclosures</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">We do not sell, rent, or monetize customer records to third-party data brokers. Information is shared solely with shipping carriers and payment processors to complete authorized orders.</p>
        </div>
      `
    },
    de: {
      title: "Datenschutzerklärung | Ghost Guns",
      heading: "DATENSCHUTZERKLÄRUNG",
      desc: "Wie Ghost Guns Ihre Daten schützt, Datenschutzstandards und Richtlinien zur Datenspeicherung.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Erhobene Daten</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Wir erheben ausschließlich Daten, die zur Abwicklung Ihrer Bestellung erforderlich sind (Name, Lieferanschrift, E-Mail-Adresse).</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Sicherheit & Verschlüsselung</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Ihre Daten werden nach modernen Standards TLS-verschlüsselt übertragen. Zahlungsdaten werden nicht auf unseren Servern gespeichert.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">3. Weitergabe an Dritte</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Kundendaten werden niemals an Werbepartner verkauft, sondern nur an Zustelldienste zur Auftragserfüllung weitergeleitet.</p>
        </div>
      `
    },
    nl: {
      title: "Privacybeleid | Ghost Guns",
      heading: "PRIVACYBELEID",
      desc: "Hoe Ghost Guns uw gegevens beschermt, privacy-normen en gegevensbewaarbeleid.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Gegevensverzameling</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Wij verzamelen uitsluitend gegevens die noodzakelijk zijn voor het correct verwerken en verzenden van uw bestelling.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Beveiliging</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Alle transacties zijn beveiligd met hoogwaardige encryptie. Wij verkopen geen gegevens aan derden.</p>
        </div>
      `
    },
    fr: {
      title: "Politique de Confidentialité | Ghost Guns",
      heading: "POLITIQUE DE CONFIDENTIALITÉ",
      desc: "Comment Ghost Guns protège vos données, normes de confidentialité et rétention des données.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Données Collectées</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Nous collectons uniquement les informations requises pour traiter vos commandes en toute sécurité.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Protection des Données</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Vos informations personnelles sont sécurisées par un chiffrement de niveau industriel.</p>
        </div>
      `
    },
    es: {
      title: "Política de Privacidad | Ghost Guns",
      heading: "POLÍTICA DE PRIVACIDAD",
      desc: "Cómo protege Ghost Guns sus datos, normas de privacidad y retención de información.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Datos Recopilados</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Solo recopilamos la información indispensable para procesar y entregar su pedido.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Seguridad</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Protegemos su información con cifrado seguro y nunca comercializamos datos con terceros.</p>
        </div>
      `
    },
    it: {
      title: "Informativa sulla Privacy | Ghost Guns",
      heading: "INFORMATIVA SULLA PRIVACY",
      desc: "Come Ghost Guns protegge i tuoi dati, standard di riservatezza e conservazione delle informazioni.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Informazioni Raccolte</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Trattiamo unicamente i dati necessari alla spedizione e gestione degli ordini.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Sicurezza dei Dati</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Tutti i canali di comunicazione sono protetti da crittografia standard di settore.</p>
        </div>
      `
    },
    pl: {
      title: "Polityka Prywatności | Ghost Guns",
      heading: "POLITYKA PRYWATNOŚCI",
      desc: "W jaki sposób Ghost Guns chroni Twoje dane, standardy prywatności i przechowywanie informacji.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Gromadzone Dane</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Zbieramy tylko dane niezbędne do realizacji i wysyłki Twojego zamówienia.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Bezpieczeństwo</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Dane szyfrowane są protokołem TLS. Nie odsprzedajemy danych podmiotom trzecim.</p>
        </div>
      `
    },
    bg: {
      title: "Политика за Поверителност | Ghost Guns",
      heading: "ПОЛИТИКА ЗА ПОВЕРИТЕЛНОСТ",
      desc: "Как Ghost Guns защитава вашите данни, стандарти за поверителност и съхранение на информация.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">1. Събирани Данни</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Събираме само необходимите данни за обработка и доставка на вашата поръчка.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">2. Сигурност</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Цялата информация е защитена с криптиране по индустриални стандарти.</p>
        </div>
      `
    }
  },
  "refund-policy": {
    en: {
      title: "Refund Policy | Ghost Guns",
      heading: "REFUND & RETURNS POLICY",
      desc: "Ghost Guns cancellation terms, returns guidelines, and refund eligibility criteria.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Return Process</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">If you are not completely satisfied with your purchase, you may request a return within 30 days of receipt. To begin the return process, contact customer support at <a href="mailto:support@ghostguns.com" class="text-[#9f0712] underline">support@ghostguns.com</a> for an RMA number.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Items must be returned in their original packaging, unused, and with proof of purchase included.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Return Address</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4 font-mono bg-neutral-100 p-4 border border-[#e5e5e5]">
            Ghost Guns Returns Dept.<br>
            13740 N Highway 183, Ste J-2<br>
            Austin, TX 78750-1832, USA
          </p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Please note that return shipping costs are the customer's responsibility unless the return is due to an error on our part or a defective product.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Refund Processing</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">After receiving and inspecting your return, refunds are issued within 10 business days back to your original payment method in Euros (€) or original cryptocurrency.</p>
        </div>
      `
    },
    de: {
      title: "Rückerstattungsrichtlinie | Ghost Guns",
      heading: "RÜCKERSTATTUNG & RÜCKGABEN",
      desc: "Stornierungsbedingungen von Ghost Guns, Rückgaberichtlinien und Kriterien für Rückerstattungen.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Rückgabebelehrung</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Sie können Artikel innerhalb von 30 Tagen nach Erhalt zurücksenden. Bitte kontaktieren Sie hierfür unseren Kundendienst unter <a href="mailto:support@ghostguns.com" class="text-[#9f0712] underline">support@ghostguns.com</a>, um eine RMA-Nummer zu erhalten.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Die Ware muss unbenutzt, in der Originalverpackung und zusammen mit dem Kaufbeleg retourniert werden.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Rücksendeadresse</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4 font-mono bg-neutral-100 p-4 border border-[#e5e5e5]">
            Ghost Guns Returns Dept.<br>
            13740 N Highway 183, Ste J-2<br>
            Austin, TX 78750-1832, USA
          </p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Erstattung</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Nach Prüfung der Retoure erfolgt die Gutschrift innerhalb von bis zu 10 Werktagen auf Ihre ursprüngliche Zahlungsmethode in Euro (€) oder Kryptowährung.</p>
        </div>
      `
    },
    nl: {
      title: "Restitutiebeleid | Ghost Guns",
      heading: "RESTITUTIE- EN RETOURBELEID",
      desc: "Annuleringsvoorwaarden, retourrichtlijnen en criteria voor terugbetaling van Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Retourprocedure</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">U kunt producten binnen 30 dagen retourneren. Vraag eerst een RMA-code aan via <a href="mailto:support@ghostguns.com" class="text-[#9f0712] underline">support@ghostguns.com</a>.</p>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Artikelen dienen ongebruikt en in de originele verpakking verzonden te worden.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Terugbetaling</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Na ontvangst en controle betalen wij het aankoopbedrag binnen 10 werkdagen terug in Euro (€).</p>
        </div>
      `
    },
    fr: {
      title: "Politique de Remboursement | Ghost Guns",
      heading: "POLITIQUE DE RETOUR ET REMBOURSEMENT",
      desc: "Conditions d'annulation, directives de retour et critères d'éligibilité au remboursement chez Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Procédure de Retour</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Vous disposez d'un délai de 30 jours pour retourner vos articles. Contactez <a href="mailto:support@ghostguns.com" class="text-[#9f0712] underline">support@ghostguns.com</a> pour recevoir une autorisation RMA.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Remboursement</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Les remboursements sont traités sous 10 jours ouvrés suivant la réception de votre colis retourné en Euros (€).</p>
        </div>
      `
    },
    es: {
      title: "Política de Reembolso | Ghost Guns",
      heading: "POLÍTICA DE REEMBOLSOS Y DEVOLUCIONES",
      desc: "Términos de cancelación de Ghost Guns, pautas de devolución y criterios de reembolso.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Proceso de Devolución</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Dispone de 30 días para solicitar una devolución. Escriba a <a href="mailto:support@ghostguns.com" class="text-[#9f0712] underline">support@ghostguns.com</a> para obtener un número RMA.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Reembolso</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">El abono se realizará en un plazo de hasta 10 días laborables tras la inspección del material.</p>
        </div>
      `
    },
    it: {
      title: "Politica di Rimborso | Ghost Guns",
      heading: "POLITICA DI RIMBORSO E RESI",
      desc: "Termini di cancellazione di Ghost Guns, linee guida sui resi e criteri di rimborso.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Procedura di Reso</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">È possibile restituire gli articoli entro 30 giorni richiedendo il codice RMA all'indirizzo <a href="mailto:support@ghostguns.com" class="text-[#9f0712] underline">support@ghostguns.com</a>.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Rimborso</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">I rimborsi avvengono entro 10 giorni lavorativi sul metodo di pagamento prescelto in Euro (€).</p>
        </div>
      `
    },
    pl: {
      title: "Polityka Zwrotów | Ghost Guns",
      heading: "POLITYKA ZWROTÓW I REKLAMACJI",
      desc: "Warunki anulowania zamówień w Ghost Guns, wytyczne dotyczące zwrotów i kryteria kwalifikacji.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Procedura Zwrotu</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Zwrotu towaru można dokonać w terminie do 30 dni od odbioru, uzyskując uprzednio numer RMA pod adresem <a href="mailto:support@ghostguns.com" class="text-[#9f0712] underline">support@ghostguns.com</a>.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Zwrot Pieniędzy</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Środki zwracane są w terminie do 10 dni roboczych na pierwotną formę płatności w Euro (€).</p>
        </div>
      `
    },
    bg: {
      title: "Политика за Възстановяване | Ghost Guns",
      heading: "ПОЛИТИКА ЗА ВРЪЩАНЕ И ВЪЗСТАНОВЯВАНЕ",
      desc: "Условия за анулиране, указания за връщане и критерии за възстановяване на средства.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Процедура по Връщане</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Можете да заявите връщане в 30-дневен срок след получаване с RMA номер от <a href="mailto:support@ghostguns.com" class="text-[#9f0712] underline">support@ghostguns.com</a>.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Възстановяване на Суми</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Сумите се възстановяват до 10 работни дни след инспекция на върнатите стоки в Евро (€).</p>
        </div>
      `
    }
  },
  "shipping-policy": {
    en: {
      title: "Shipping Policy | Ghost Guns",
      heading: "SHIPPING POLICY",
      desc: "Fast, discreet packaging and tracked delivery processes from Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Discreet & Fast Packaging</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">We are committed to delivering your products discreetly, securely, and promptly. All shipments are packed in unbranded plain brown boxes or bubble mailers with no external firearm markings.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Order Processing Time</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">All orders are processed and queued for shipping within 2 business days. Orders placed on weekends or national holidays are dispatched on the next business day.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Tracking & Insurance</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Once shipped, you will receive an automated tracking link by email. All shipments carry tracking and full insurance against loss or damage in transit.</p>
        </div>
      `
    },
    de: {
      title: "Versandrichtlinie | Ghost Guns",
      heading: "VERSANDRICHTLINIE",
      desc: "Schneller, diskreter Versand und nachverfolgbare Lieferprozesse von Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Diskrete und Schnelle Verpackung</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Alle Pakete werden neutral und ohne sichtbare Produktbeschreibungen versendet, um maximale Diskretion zu gewährleisten.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Bearbeitungszeit</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Bestellungen werden innerhalb von 2 Werktagen bearbeitet und dem Versanddienstleister übergeben.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Sendungsverfolgung</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Sie erhalten automatisch eine Tracking-Nummer per E-Mail, sobald das Paket unterwegs ist.</p>
        </div>
      `
    },
    nl: {
      title: "Verzendbeleid | Ghost Guns",
      heading: "VERZENDBELEID",
      desc: "Snelle, discrete verpakking en traceerbare verzending van Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Discrete Verpakking</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Alle artikelen worden in blanco, neutrale dozen verzonden zonder uiterlijke productvermeldingen.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Verwerkingstijd</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Verzending binnen 2 werkdagen inclusief online traceercode.</p>
        </div>
      `
    },
    fr: {
      title: "Politique de Livraison | Ghost Guns",
      heading: "POLITIQUE DE LIVRAISON",
      desc: "Emballage rapide, discret et processus de livraison avec suivi par Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Emballage Discret</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Toutes nos commandes sont expédiées dans des cartons neutres sans inscription apparente.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Délais de Traitement</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Expédition garantie sous 2 jours ouvrables avec suivi en ligne.</p>
        </div>
      `
    },
    es: {
      title: "Política de Envío | Ghost Guns",
      heading: "POLÍTICA DE ENVÍO",
      desc: "Embalaje rápido y discreto con envíos rastreados de Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Embalaje Discreto</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Envíos totalmente discretos sin referencias exteriores a los artículos.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Plazos de Envío</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Procesamiento en 2 días laborables con número de seguimiento garantizado.</p>
        </div>
      `
    },
    it: {
      title: "Politica di Spedizione | Ghost Guns",
      heading: "POLITICA DI SPEDIZIONE",
      desc: "Imballaggio rapido e discreto con processi di consegna tracciata da Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Spedizione Discreta</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Imballaggi neutri e anonimi per la massima tutela della riservatezza.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Tempi di Consegna</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Spedizioni effettuate entro 2 giorni lavorativi con tracciamento completo.</p>
        </div>
      `
    },
    pl: {
      title: "Zasady Dostawy | Ghost Guns",
      heading: "ZASADY DOSTAWY",
      desc: "Szybkie, dyskretne pakowanie i przesyłki ze śledzeniem od Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Dyskretna Wysyłka</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Wszystkie przesyłki pakowane są w neutralne opakowania bez oznaczeń zawartości.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Czas Realizacji</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Nadanie w ciągu 2 dni roboczych z pełnym numerem śledzenia.</p>
        </div>
      `
    },
    bg: {
      title: "Политика за Доставка | Ghost Guns",
      heading: "ПОЛИТИКА ЗА ДОСТАВКА",
      desc: "Бързо, дискретно опаковане и проследима доставка от Ghost Guns.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Дискретна Опаковка</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Всички пратки се изпращат в неутрални опаковки без външни означения.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Срок за Обработка</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Изпращане в рамките на 2 работни дни с проследяване.</p>
        </div>
      `
    }
  },
  "website-terms-of-use": {
    en: {
      title: "Website Terms of Use | Ghost Guns",
      heading: "WEBSITE TERMS OF USE",
      desc: "Acceptable use guidelines, intellectual property notices, and website visitor conditions.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Intellectual Property Rights</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">The website and its entire contents, features, and functionality (including but not limited to design, CAD files, code, images, and text) are owned by Ghost Guns and are protected by applicable intellectual property laws.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Prohibited Conduct</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">You agree not to use the website for any unlawful purpose, to distribute malicious software, or to scrape content without explicit written permission.</p>
        </div>
      `
    },
    de: {
      title: "Nutzungsbedingungen der Website | Ghost Guns",
      heading: "NUTZUNGSBEDINGUNGEN DER WEBSITE",
      desc: "Nutzungsrichtlinien, Hinweise zum geistigen Eigentum und Bestimmungen für Website-Besucher.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Urheberrecht und Geistiges Eigentum</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Alle Inhalte, CAD-Dateien und Marken auf GhostGuns.com sind urheberrechtlich geschützt.</p>
        </div>
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Verbotene Nutzung</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Die missbräuchliche Nutzung der Website sowie automatisierte Zugriffe ohne Zustimmung sind untersagt.</p>
        </div>
      `
    },
    nl: {
      title: "Gebruiksvoorwaarden Website | Ghost Guns",
      heading: "GEBRUIKSVOORWAARDEN WEBSITE",
      desc: "Richtlijnen voor acceptabel gebruik, intellectueel eigendom en voorwaarden voor bezoekers.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Intellectueel Eigendom</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Alle materialen en ontwerpen op deze site zijn beschermd door auteursrechten.</p>
        </div>
      `
    },
    fr: {
      title: "Conditions d'Utilisation du Site | Ghost Guns",
      heading: "CONDITIONS D'UTILISATION DU SITE",
      desc: "Règles d'utilisation, avis de propriété intellectuelle et conditions pour les visiteurs.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Propriété Intellectuelle</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Tous les contenus de ce site sont protégés par le droit de la propriété intellectuelle.</p>
        </div>
      `
    },
    es: {
      title: "Condiciones de Uso del Sitio Web | Ghost Guns",
      heading: "CONDICIONES DE USO DEL SITIO WEB",
      desc: "Directrices de uso aceptable, avisos de propiedad intelectual y condiciones para visitantes.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Propiedad Intelectual</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Todos los contenidos están protegidos por leyes de derechos de autor y propiedad intelectual.</p>
        </div>
      `
    },
    it: {
      title: "Condizioni d'Uso del Sito Web | Ghost Guns",
      heading: "CONDIZIONI D'USO DEL SITO WEB",
      desc: "Linee guida sull'uso accettabile, note sulla proprietà intellettuale e condizioni per i visitatori.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Proprietà Intellettuale</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Tutti i contenuti del sito sono protetti dai diritti di proprietà intellettuale.</p>
        </div>
      `
    },
    pl: {
      title: "Warunki Korzystania z Witryny | Ghost Guns",
      heading: "WARUNKI KORZYSTANIA Z WITRYNY",
      desc: "Zasady dopuszczalnego użytkowania, informacje o własności intelektualnej i warunki dla odwiedzających.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Prawa Własności Intelektualnej</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Zawartość serwisu chroniona jest prawami autorskimi oraz prawem własności przemysłowej.</p>
        </div>
      `
    },
    bg: {
      title: "Условия за Ползване на Сайта | Ghost Guns",
      heading: "УСЛОВИЯ ЗА ПОЛЗВАНЕ НА САЙТА",
      desc: "Правила за допустимо ползване, интелектуална собственост и условия за посетителите.",
      content: `
        <div class="policy-block mb-6">
          <h2 class="text-xl font-bold uppercase mb-3 text-black">Интелектуална Собственост</h2>
          <p class="text-neutral-700 text-sm leading-relaxed mb-4">Всички материали на този уебсайт са обект на авторско право.</p>
        </div>
      `
    }
  },
  "my-account": {
    en: {
      title: "My Account | Ghost Guns",
      heading: "MY ACCOUNT",
      desc: "Manage your Ghost Guns account, past orders, and digital download keys.",
      loginTitle: "LOGIN",
      usernameLabel: "Username or Email Address",
      passwordLabel: "Password",
      rememberMe: "Remember Me",
      loginBtn: "LOG IN",
      lostPassword: "Lost your password?",
      needAccount: "Need an account?",
      registerPrompt: "Register for an account to track orders, save shipping information, and access digital CAD files."
    },
    de: {
      title: "Mein Konto | Ghost Guns",
      heading: "MEIN KONTO",
      desc: "Verwalten Sie Ihr Ghost Guns Konto, frühere Bestellungen und Download-Schlüssel.",
      loginTitle: "ANMELDEN",
      usernameLabel: "Benutzername oder E-Mail-Adresse",
      passwordLabel: "Passwort",
      rememberMe: "Angemeldet bleiben",
      loginBtn: "ANMELDEN",
      lostPassword: "Passwort vergessen?",
      needAccount: "Noch kein Konto?",
      registerPrompt: "Erstellen Sie ein Kundenkonto, um Bestellungen nachzuverfolgen und CAD-Dateien abzurufen."
    },
    nl: {
      title: "Mijn Account | Ghost Guns",
      heading: "MIJN ACCOUNT",
      desc: "Beheer uw Ghost Guns account, eerdere bestellingen en digitale downloadcodes.",
      loginTitle: "INLOGGEN",
      usernameLabel: "Gebruikersnaam of e-mailadres",
      passwordLabel: "Wachtwoord",
      rememberMe: "Onthoud mij",
      loginBtn: "INLOGGEN",
      lostPassword: "Wachtwoord vergeten?",
      needAccount: "Geen account?",
      registerPrompt: "Registreer voor een account om bestellingen te volgen en CAD-bestanden te downloaden."
    },
    fr: {
      title: "Mon Compte | Ghost Guns",
      heading: "MON COMPTE",
      desc: "Gérez votre compte Ghost Guns, vos commandes passées et vos clés de téléchargement.",
      loginTitle: "CONNEXION",
      usernameLabel: "Nom d'utilisateur ou e-mail",
      passwordLabel: "Mot de passe",
      rememberMe: "Se souvenir de moi",
      loginBtn: "SE CONNECTER",
      lostPassword: "Mot de passe oublié ?",
      needAccount: "Pas encore de compte ?",
      registerPrompt: "Créez un compte pour suivre vos commandes et accéder aux fichiers CAO téléchargeables."
    },
    es: {
      title: "Mi Cuenta | Ghost Guns",
      heading: "MI CUENTA",
      desc: "Gestiona tu cuenta de Ghost Guns, pedidos anteriores y claves de descarga digital.",
      loginTitle: "INICIAR SESIÓN",
      usernameLabel: "Nombre de usuario o correo",
      passwordLabel: "Contraseña",
      rememberMe: "Recordarme",
      loginBtn: "ACCEDER",
      lostPassword: "¿Olvidaste tu contraseña?",
      needAccount: "¿No tienes cuenta?",
      registerPrompt: "Crea una cuenta para rastrear pedidos y acceder a archivos CAD descargables."
    },
    it: {
      title: "Il Mio Account | Ghost Guns",
      heading: "IL MIO ACCOUNT",
      desc: "Gestisci il tuo account Ghost Guns, gli ordini passati e le chiavi di download digitali.",
      loginTitle: "ACCEDI",
      usernameLabel: "Nome utente o indirizzo e-mail",
      passwordLabel: "Password",
      rememberMe: "Ricordami",
      loginBtn: "ACCEDI",
      lostPassword: "Password dimenticata?",
      needAccount: "Non hai un account?",
      registerPrompt: "Crea un account per tracciare le tue spedizioni e scaricare file CAD."
    },
    pl: {
      title: "Moje Konto | Ghost Guns",
      heading: "MOJE KONTO",
      desc: "Zarządzaj swoim kontem Ghost Guns, historią zamówień i kluczami pobierania.",
      loginTitle: "LOGOWANIE",
      usernameLabel: "Nazwa użytkownika lub adres e-mail",
      passwordLabel: "Hasło",
      rememberMe: "Zapamiętaj mnie",
      loginBtn: "ZALOGUJ SIĘ",
      lostPassword: "Nie pamiętasz hasła?",
      needAccount: "Nie masz konta?",
      registerPrompt: "Zarejestruj konto, aby śledzić zamówienia i pobierać cyfrowe pliki CAD."
    },
    bg: {
      title: "Моят Акаунт | Ghost Guns",
      heading: "МОЯТ АКАУНТ",
      desc: "Управлявайте вашия акаунт в Ghost Guns, предишни поръчки и ключове за изтегляне.",
      loginTitle: "ВХОД",
      usernameLabel: "Потребителско име или имейл",
      passwordLabel: "Парола",
      rememberMe: "Запомни ме",
      loginBtn: "ВХОД",
      lostPassword: "Забравена парола?",
      needAccount: "Нямате акаунт?",
      registerPrompt: "Регистрирайте акаунт за проследяване на поръчки и изтегляне на CAD файлове."
    }
  }
};

fs.writeFileSync('./src/data/pages-translations.json', JSON.stringify(pagesTranslations, null, 2), 'utf8');
console.log('Saved rich pages-translations.json successfully!');
