const ADMIN_EMAILS = ['support@ghost-guns.shop', 'ghostgunseu.pro@gmail.com'];
const PRIMARY_EMAIL = 'support@ghost-guns.shop';
const SECONDARY_EMAIL = 'ghostgunseu.pro@gmail.com';
const DEFAULT_RESEND_KEY = atob('cmVfQVZxQ3dkU3FfTnpNRjhMZFB3Z2VSajF0cFJjY3g1Wlli');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

function buildOrderAdminHtml(data) {
  const itemsRows = (data.items || [])
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;">${item.name}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;text-align:center;">${item.quantity}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;text-align:right;">€${(Number(item.price) * Number(item.quantity)).toFixed(2)}</td>
      </tr>`
    )
    .join('');

  return `
  <div style="font-family:monospace,sans-serif;max-width:640px;margin:0 auto;border:2px solid #000;background:#fff;color:#111;">
    <div style="background:#000;color:#fff;padding:16px 20px;">
      <h2 style="margin:0;text-transform:uppercase;font-size:18px;">New Order Received — ${data.orderId || '#GG-ORDER'}</h2>
      <p style="margin:4px 0 0;font-size:12px;color:#ccc;">Date: ${data.orderDate || new Date().toUTCString()} | Language: ${(data.lang || 'en').toUpperCase()}</p>
    </div>
    <div style="padding:20px;">
      <h3 style="margin:0 0 10px;text-transform:uppercase;font-size:14px;border-bottom:1px solid #ccc;padding-bottom:6px;">Customer & Shipping Details</h3>
      <p style="margin:4px 0;font-size:13px;"><strong>Name:</strong> ${data.firstName || ''} ${data.lastName || ''}</p>
      <p style="margin:4px 0;font-size:13px;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      <p style="margin:4px 0;font-size:13px;"><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
      <p style="margin:4px 0;font-size:13px;"><strong>Country:</strong> ${data.countryName || data.country || 'Global Worldwide'}</p>
      <p style="margin:4px 0;font-size:13px;"><strong>Address:</strong> ${data.street || ''}${data.apartment ? ', ' + data.apartment : ''}</p>
      <p style="margin:4px 0;font-size:13px;"><strong>City / State / Postcode:</strong> ${data.city || ''}, ${data.state || ''} ${data.postcode || ''}</p>
      <p style="margin:4px 0;font-size:13px;"><strong>Payment Method:</strong> <span style="color:#9f0712;font-weight:bold;text-transform:uppercase;">${data.paymentMethodTitle || data.paymentMethod}</span></p>
      ${data.notes ? `<p style="margin:8px 0 4px;font-size:13px;"><strong>Order Notes:</strong> ${data.notes}</p>` : ''}

      <h3 style="margin:20px 0 10px;text-transform:uppercase;font-size:14px;border-bottom:1px solid #ccc;padding-bottom:6px;">Order Items</h3>
      <table style="width:100%;border-collapse:collapse;font-size:13px;">
        <thead>
          <tr style="background:#f5f5f5;">
            <th style="padding:8px 12px;text-align:left;border-bottom:2px solid #000;">Item</th>
            <th style="padding:8px 12px;text-align:center;border-bottom:2px solid #000;">Qty</th>
            <th style="padding:8px 12px;text-align:right;border-bottom:2px solid #000;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${itemsRows}
        </tbody>
      </table>

      <div style="margin-top:16px;text-align:right;font-size:14px;">
        <p style="margin:4px 0;"><strong>Subtotal:</strong> €${Number(data.subtotal || 0).toFixed(2)}</p>
        <p style="margin:4px 0;"><strong>Shipping (${data.shippingMethod || 'Standard'}):</strong> €${Number(data.shippingFee || 59).toFixed(2)}</p>
        <p style="margin:8px 0;font-size:16px;color:#9f0712;"><strong>Total: €${Number(data.total || 0).toFixed(2)}</strong></p>
      </div>
    </div>
  </div>`;
}

const EMAIL_I18N = {
  en: {
    confirmationSubject: (id) => `Order Confirmation ${id} — Ghost Guns`,
    confirmationTitle: (id) => `Order Confirmation — ${id}`,
    officialDispatch: 'Ghost Guns Official Dispatch | https://ghost-guns.shop',
    thankYou: (name, id) => `Thank you for your order, <strong>${name}</strong>. Your order <strong>${id}</strong> has been registered in our system for global dispatch.`,
    globalNoticeTitle: '🌐 Global Worldwide Dispatch Notice',
    globalNoticeText: 'Ghost Guns fulfills orders worldwide in discreet, unmarked packaging. All DIY firearm components, build kits, 3D files, and accessories are non-serialized and require no FFL license under global commercial manufacturing standards.',
    paymentMethod: 'Payment Method:',
    instructionsFallback: 'Please reply to this email or contact our support desk with your order number to finalize your payment and receive tracking.',
    spamAlert: '⚠️ CRITICAL: PLEASE CHECK YOUR INBOX AND SPAM FOLDERS REGULARLY FOR PAYMENT DETAILS & TRACKING CONFIRMATION!',
    orderSummary: 'Order Summary',
    item: 'Item',
    qty: 'Qty',
    total: 'Total',
    subtotal: 'Subtotal:',
    shipping: 'Discreet Shipping:',
    totalAmount: 'Total:',
    supportDesk: 'Official Support & Payment Verification Desk:',
    primaryEmail: 'Primary Email:',
    secondaryEmail: 'Secondary Email:'
  },
  de: {
    confirmationSubject: (id) => `Bestellbestätigung ${id} — Ghost Guns`,
    confirmationTitle: (id) => `Bestellbestätigung — ${id}`,
    officialDispatch: 'Ghost Guns Offizieller Versand | https://ghost-guns.shop/de/',
    thankYou: (name, id) => `Vielen Dank für Ihre Bestellung, <strong>${name}</strong>. Ihre Bestellung <strong>${id}</strong> wurde für den weltweiten Versand in unserem System registriert.`,
    globalNoticeTitle: '🌐 Weltweiter Versandhinweis & Konformität',
    globalNoticeText: 'Ghost Guns liefert Bestellungen diskret weltweit in unbeschrifteten Verpackungen. Alle DIY-Waffenkomponenten, Bausätze, 3D-Dateien und Zubehörteile sind nicht-serialisiert und erfordern nach internationalen Handelsstandards keine Waffenhandelslizenz (FFL).',
    paymentMethod: 'Zahlungsart:',
    instructionsFallback: 'Bitte antworten Sie auf diese E-Mail oder kontaktieren Sie unseren Support mit Ihrer Bestellnummer, um Ihre Zahlung abzuschließen.',
    spamAlert: '⚠️ WICHTIG: BITTE PRÜFEN SIE REGELMÄSSIG IHREN POSTEINGANG UND SPAM-ORDNER AUF ZAHLUNGSDETAILS & SENDUNGSVERFOLGUNG!',
    orderSummary: 'Bestellübersicht',
    item: 'Artikel',
    qty: 'Menge',
    total: 'Gesamt',
    subtotal: 'Zwischensumme:',
    shipping: 'Diskreter Versand:',
    totalAmount: 'Gesamtbetrag:',
    supportDesk: 'Offizieller Support & Zahlungsverifizierungsdienst:',
    primaryEmail: 'Primäre E-Mail:',
    secondaryEmail: 'Sekundäre E-Mail:'
  },
  nl: {
    confirmationSubject: (id) => `Bestelbevestiging ${id} — Ghost Guns`,
    confirmationTitle: (id) => `Bestelbevestiging — ${id}`,
    officialDispatch: 'Ghost Guns Officiële Verzending | https://ghost-guns.shop/nl/',
    thankYou: (name, id) => `Hartelijk dank voor uw bestelling, <strong>${name}</strong>. Uw bestelling <strong>${id}</strong> is geregistreerd in ons systeem voor wereldwijde verzending.`,
    globalNoticeTitle: '🌐 Wereldwijde Kennisgeving & Naleving',
    globalNoticeText: 'Ghost Guns levert wereldwijd discreet in blanco verpakkingen. Alle doe-het-zelf componenten, bouwsets, 3D-bestanden en accessoires zijn niet-geserialiseerd en vereisen geen FFL-vergunning onder internationale handelsnormen.',
    paymentMethod: 'Betaalmethode:',
    instructionsFallback: 'Beantwoord deze e-mail of neem contact op met onze supportdesk met uw bestelnummer om uw betaling af te ronden.',
    spamAlert: '⚠️ BELANGRIJK: CONTROLEER REGELMATIG UW INBOX EN SPAM-MAP VOOR BETAALINFORMATIE & TRACKING!',
    orderSummary: 'Besteloverzicht',
    item: 'Artikel',
    qty: 'Aantal',
    total: 'Totaal',
    subtotal: 'Subtotaal:',
    shipping: 'Discrete Verzending:',
    totalAmount: 'Totaal:',
    supportDesk: 'Officiële Ondersteuning & Betalingsverificatie:',
    primaryEmail: 'Primaire E-mail:',
    secondaryEmail: 'Secundaire E-mail:'
  },
  fr: {
    confirmationSubject: (id) => `Confirmation de Commande ${id} — Ghost Guns`,
    confirmationTitle: (id) => `Confirmation de Commande — ${id}`,
    officialDispatch: 'Expédition Officielle Ghost Guns | https://ghost-guns.shop/fr/',
    thankYou: (name, id) => `Merci pour votre commande, <strong>${name}</strong>. Votre commande <strong>${id}</strong> est enregistrée dans notre système pour expédition mondiale.`,
    globalNoticeTitle: '🌐 Avis Mondial d’Expédition et Conformité',
    globalNoticeText: 'Ghost Guns expédie dans le monde entier de manière discrète dans des emballages neutres. Tous les composants DIY, kits d’assemblage, fichiers 3D et accessoires ne sont pas sérialisés et ne nécessitent aucune licence FFL selon les normes commerciales internationales.',
    paymentMethod: 'Mode de Paiement :',
    instructionsFallback: 'Veuillez répondre à cet e-mail ou contacter notre support avec votre numéro de commande pour finaliser le paiement.',
    spamAlert: '⚠️ CRITIQUE : VÉRIFIEZ RÉGULIÈREMENT VOTRE BOÎTE DE RÉCEPTION ET VOS SPAMS POUR LES DÉTAILS DE PAIEMENT & LE SUIVI !',
    orderSummary: 'Détail de la Commande',
    item: 'Article',
    qty: 'Qté',
    total: 'Total',
    subtotal: 'Sous-total :',
    shipping: 'Livraison Discrète :',
    totalAmount: 'Total :',
    supportDesk: 'Bureau Officiel d’Assistance et de Vérification des Paiements :',
    primaryEmail: 'E-mail Principal :',
    secondaryEmail: 'E-mail Secondaire :'
  },
  es: {
    confirmationSubject: (id) => `Confirmación de Pedido ${id} — Ghost Guns`,
    confirmationTitle: (id) => `Confirmación de Pedido — ${id}`,
    officialDispatch: 'Despacho Oficial Ghost Guns | https://ghost-guns.shop/es/',
    thankYou: (name, id) => `Gracias por su pedido, <strong>${name}</strong>. Su pedido <strong>${id}</strong> ha sido registrado en nuestro sistema para envío global.`,
    globalNoticeTitle: '🌐 Aviso de Envío Mundial y Cumplimiento',
    globalNoticeText: 'Ghost Guns entrega pedidos en todo el mundo en paquetes discretos sin distintivos. Todos los componentes de bricolaje, kits de ensamblaje, archivos 3D y accesorios carecen de número de serie y no requieren licencia FFL bajo los estándares de comercio internacional.',
    paymentMethod: 'Método de Pago:',
    instructionsFallback: 'Responda a este correo o contacte a nuestro equipo de soporte con su número de pedido para completar el pago.',
    spamAlert: '⚠️ AVISO CRÍTICO: ¡REVISE PERIÓDICAMENTE SU BANDEJA DE ENTRADA Y SPAM PARA DETALLES DE PAGO Y SEGUIMIENTO!',
    orderSummary: 'Resumen del Pedido',
    item: 'Artículo',
    qty: 'Cant.',
    total: 'Total',
    subtotal: 'Subtotal:',
    shipping: 'Envío Discreto:',
    totalAmount: 'Total:',
    supportDesk: 'Mesa Oficial de Soporte y Verificación de Pagos:',
    primaryEmail: 'Correo Principal:',
    secondaryEmail: 'Correo Secundario:'
  },
  it: {
    confirmationSubject: (id) => `Conferma d'Ordine ${id} — Ghost Guns`,
    confirmationTitle: (id) => `Conferma d'Ordine — ${id}`,
    officialDispatch: 'Spedizione Ufficiale Ghost Guns | https://ghost-guns.shop/it/',
    thankYou: (name, id) => `Grazie per il tuo ordine, <strong>${name}</strong>. Il tuo ordine <strong>${id}</strong> è stato registrato nel nostro sistema per la spedizione globale.`,
    globalNoticeTitle: '🌐 Avviso di Spedizione Globale e Conformità',
    globalNoticeText: 'Ghost Guns spedisce in tutto il mondo con imballaggi discreti e senza loghi. Tutti i componenti fai-da-te, i kit di assemblaggio, i file 3D e gli accessori sono privi di matricola e non richiedono licenza FFL secondo le norme di commercio internazionale.',
    paymentMethod: 'Metodo di Pagamento:',
    instructionsFallback: 'Rispondi a questa email o contatta il nostro supporto con il tuo numero d’ordine per completare il pagamento.',
    spamAlert: '⚠️ CRITICO: CONTROLLA REGOLARMENTE LA POSTA IN ENTRATA E LO SPAM PER LE ISTRUZIONI DI PAGAMENTO E IL TRACKING!',
    orderSummary: 'Riepilogo Ordine',
    item: 'Articolo',
    qty: 'Qtà',
    total: 'Totale',
    subtotal: 'Subtotale:',
    shipping: 'Spedizione Discreta:',
    totalAmount: 'Totale:',
    supportDesk: 'Supporto Ufficiale e Verifica Pagamenti:',
    primaryEmail: 'Email Principale:',
    secondaryEmail: 'Email Secondaria:'
  },
  pl: {
    confirmationSubject: (id) => `Potwierdzenie Zamówienia ${id} — Ghost Guns`,
    confirmationTitle: (id) => `Potwierdzenie Zamówienia — ${id}`,
    officialDispatch: 'Oficjalna Wysyłka Ghost Guns | https://ghost-guns.shop/pl/',
    thankYou: (name, id) => `Dziękujemy za złożenie zamówienia, <strong>${name}</strong>. Twoje zamówienie <strong>${id}</strong> zostało zarejestrowane do wysyłki międzynarodowej.`,
    globalNoticeTitle: '🌐 Komunikat o Globalnej Wysyłce i Zgodności',
    globalNoticeText: 'Ghost Guns wysyła zamówienia na cały świat w dyskretnych opakowaniach bez oznaczeń. Wszystkie komponenty do samodzielnego montażu, zestawy, pliki 3D i akcesoria nie posiadają numerów seryjnych i nie wymagają licencji FFL zgodnie z międzynarodowymi standardami handlowymi.',
    paymentMethod: 'Metoda Płatności:',
    instructionsFallback: 'Odpowiedz na tę wiadomość lub skontaktuj się z naszym działem obsługi, podając numer zamówienia, aby sfinalizować płatność.',
    spamAlert: '⚠️ WAŻNY KOMUNIKAT: PROSIMY REGULARNIE SPRAWDZAĆ SKRZYNKĘ ODBIORCZĄ I SPAM W CELU OTRZYMANIA DANYCH DO PŁATNOŚCI I TRACKINGU!',
    orderSummary: 'Podsumowanie Zamówienia',
    item: 'Produkt',
    qty: 'Ilość',
    total: 'Wartość',
    subtotal: 'Suma częściowa:',
    shipping: 'Dyskretna Wysyłka:',
    totalAmount: 'Razem:',
    supportDesk: 'Oficjalne Biuro Wsparcia i Weryfikacji Płatności:',
    primaryEmail: 'Główny E-mail:',
    secondaryEmail: 'Pomocniczy E-mail:'
  },
  bg: {
    confirmationSubject: (id) => `Потвърждение на Поръчка ${id} — Ghost Guns`,
    confirmationTitle: (id) => `Потвърждение на Поръчка — ${id}`,
    officialDispatch: 'Официална Доставка на Ghost Guns | https://ghost-guns.shop/bg/',
    thankYou: (name, id) => `Благодарим ви за поръчката, <strong>${name}</strong>. Вашата поръчка <strong>${id}</strong> е регистрирана в нашата система за международна доставка.`,
    globalNoticeTitle: '🌐 Глобално Известие за Доставка и Съвместимост',
    globalNoticeText: 'Ghost Guns доставя по целия свят в дискретни опаковки без маркировка. Всички DIY компоненти, комплекти за сглобяване, 3D файлове и аксесоари са без серийни номера и не изискват FFL лиценз според международните стандарти.',
    paymentMethod: 'Метод на Плащане:',
    instructionsFallback: 'Моля, отговорете на този имейл или се свържете с отдела за поддръжка с номера на поръчката си, за да завършите плащането.',
    spamAlert: '⚠️ ВАЖНО: МОЛЯ, ПРОВЕРЯВАЙТЕ РЕДОВНО ВХОДЯЩАТА ПОЩА И СПАМ ПАПКАТА ЗА ДЕТАЙЛИ ПО ПЛАЩАНЕТО И НОМЕР ЗА ПРОСЛЕДЯВАНЕ!',
    orderSummary: 'Обобщение на Поръчката',
    item: 'Артикул',
    qty: 'Бр.',
    total: 'Общо',
    subtotal: 'Междинна сума:',
    shipping: 'Дискретна Доставка:',
    totalAmount: 'Общо:',
    supportDesk: 'Официален Отдел за Поддръжка и Проверка на Плащания:',
    primaryEmail: 'Основен Имейл:',
    secondaryEmail: 'Вторичен Имейл:'
  }
};

function buildOrderCustomerHtml(data) {
  const lang = (data.lang && EMAIL_I18N[data.lang]) ? data.lang : 'en';
  const i18n = EMAIL_I18N[lang];

  const itemsRows = (data.items || [])
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;">${item.name}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;text-align:center;">${item.quantity}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;text-align:right;">€${(Number(item.price) * Number(item.quantity)).toFixed(2)}</td>
      </tr>`
    )
    .join('');

  return `
  <div style="font-family:monospace,sans-serif;max-width:640px;margin:0 auto;border:2px solid #000;background:#fff;color:#111;">
    <div style="background:#000;color:#fff;padding:16px 20px;">
      <h2 style="margin:0;text-transform:uppercase;font-size:18px;">${i18n.confirmationTitle(data.orderId || '#GG-ORDER')}</h2>
      <p style="margin:4px 0 0;font-size:12px;color:#ccc;">${i18n.officialDispatch}</p>
    </div>
    <div style="padding:20px;">
      <p style="font-size:13px;line-height:1.5;">${i18n.thankYou(data.firstName || 'Customer', data.orderId || '#GG-ORDER')}</p>

      <!-- Global Worldwide Dispatch & Compliance Notice -->
      <div style="background:#fffbeb;border:2px solid #b45309;padding:14px;margin:16px 0;">
        <p style="margin:0 0 6px;font-weight:bold;color:#b45309;text-transform:uppercase;font-size:12px;letter-spacing:0.5px;">${i18n.globalNoticeTitle}</p>
        <p style="margin:0;font-size:12px;line-height:1.6;color:#1c1917;">
          ${i18n.globalNoticeText}
        </p>
      </div>

      <!-- Critical Payment & Inbox Notice -->
      <div style="background:#fef2f2;border:2px solid #9f0712;padding:14px;margin:16px 0;">
        <p style="margin:0 0 6px;font-weight:bold;color:#9f0712;text-transform:uppercase;font-size:13px;">${i18n.paymentMethod} ${data.paymentMethodTitle || data.paymentMethod}</p>
        <p style="margin:0 0 8px;font-size:12px;line-height:1.5;color:#111;">${data.paymentInstructions || i18n.instructionsFallback}</p>
        <p style="margin:8px 0 0;font-size:11px;font-weight:bold;color:#9f0712;border-top:1px dashed #fca5a5;padding-top:8px;">
          ${i18n.spamAlert}
        </p>
      </div>

      <h3 style="margin:20px 0 10px;text-transform:uppercase;font-size:14px;border-bottom:1px solid #ccc;padding-bottom:6px;">${i18n.orderSummary}</h3>
      <table style="width:100%;border-collapse:collapse;font-size:13px;">
        <thead>
          <tr style="background:#f5f5f5;">
            <th style="padding:8px 12px;text-align:left;border-bottom:2px solid #000;">${i18n.item}</th>
            <th style="padding:8px 12px;text-align:center;border-bottom:2px solid #000;">${i18n.qty}</th>
            <th style="padding:8px 12px;text-align:right;border-bottom:2px solid #000;">${i18n.total}</th>
          </tr>
        </thead>
        <tbody>
          ${itemsRows}
        </tbody>
      </table>

      <div style="margin-top:16px;text-align:right;font-size:14px;">
        <p style="margin:4px 0;"><strong>${i18n.subtotal}</strong> €${Number(data.subtotal || 0).toFixed(2)}</p>
        <p style="margin:4px 0;"><strong>${i18n.shipping} (${data.shippingMethod || 'Standard'}):</strong> €${Number(data.shippingFee || 59).toFixed(2)}</p>
        <p style="margin:8px 0;font-size:16px;color:#9f0712;"><strong>${i18n.totalAmount} €${Number(data.total || 0).toFixed(2)}</strong></p>
      </div>

      <div style="margin-top:20px;padding:12px;background:#f5f5f5;border:1px dashed #666;font-size:12px;">
        <p style="margin:0 0 4px;"><strong>${i18n.supportDesk}</strong></p>
        <p style="margin:2px 0;">${i18n.primaryEmail} <a href="mailto:${PRIMARY_EMAIL}"><strong>${PRIMARY_EMAIL}</strong></a></p>
        <p style="margin:2px 0;">${i18n.secondaryEmail} <a href="mailto:${SECONDARY_EMAIL}"><strong>${SECONDARY_EMAIL}</strong></a></p>
      </div>
    </div>
  </div>`;
}

function buildContactAdminHtml(data) {
  return `
  <div style="font-family:monospace,sans-serif;max-width:600px;margin:0 auto;border:2px solid #000;background:#fff;color:#111;">
    <div style="background:#000;color:#fff;padding:16px 20px;">
      <h2 style="margin:0;text-transform:uppercase;font-size:18px;">New Contact Inquiry — Ghost Guns</h2>
    </div>
    <div style="padding:20px;font-size:13px;line-height:1.6;">
      <p><strong>From Name:</strong> ${data.name || 'Visitor'}</p>
      <p><strong>From Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      <p><strong>Subject:</strong> ${data.subject || 'Website Inquiry'}</p>
      <hr style="border:0;border-top:1px solid #ccc;margin:16px 0;" />
      <p style="white-space:pre-wrap;">${data.message || ''}</p>
    </div>
  </div>`;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { type } = body;
    const results = [];

    const isOrder = type === 'order';
    const subject = isOrder
      ? `New Order ${body.orderId || ''} from ${body.firstName || ''} ${body.lastName || ''} (€${Number(body.total || 0).toFixed(2)})`
      : `New Contact Message: ${body.subject || 'Inquiry'} (from ${body.name || body.email})`;

    const adminHtml = isOrder ? buildOrderAdminHtml(body) : buildContactAdminHtml(body);
    const resendKey = (env && env.RESEND_API_KEY) || DEFAULT_RESEND_KEY;

    if (resendKey) {
      // Attempt 1: Send via verified domain (Ghost Guns <support@ghost-guns.shop>) to both admin inboxes
      const domainFrom = (env && env.RESEND_FROM) || `Ghost Guns <${PRIMARY_EMAIL}>`;
      const adminRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: domainFrom,
          to: ADMIN_EMAILS,
          reply_to: body.email || PRIMARY_EMAIL,
          subject,
          html: adminHtml
        })
      });

      if (adminRes.ok) {
        const resData = await adminRes.json().catch(() => ({}));
        results.push({ provider: 'resend-domain', ok: true, status: adminRes.status, id: resData.id });

        // Also send order receipt to the customer when domain is verified
        if (isOrder && body.email) {
          const custLang = (body.lang && EMAIL_I18N[body.lang]) ? body.lang : 'en';
          const custSubject = EMAIL_I18N[custLang].confirmationSubject(body.orderId || '#GG-ORDER');

          const custRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${resendKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: domainFrom,
              to: [body.email],
              reply_to: ADMIN_EMAILS,
              subject: custSubject,
              html: buildOrderCustomerHtml(body)
            })
          });
          const custData = await custRes.json().catch(() => ({}));
          results.push({
            provider: 'resend-customer',
            ok: custRes.ok,
            status: custRes.status,
            id: custData.id,
            error: custRes.ok ? undefined : custData
          });
        }
      } else {
        const adminErrData = await adminRes.json().catch(() => ({}));
        // Attempt 2: Automatic fallback via onboarding@resend.dev -> support@ghost-guns.shop
        const fallbackRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Ghost Guns <onboarding@resend.dev>',
            to: [PRIMARY_EMAIL],
            reply_to: body.email || PRIMARY_EMAIL,
            subject,
            html: adminHtml
          })
        });
        const fbData = await fallbackRes.json().catch(() => ({}));
        results.push({
          provider: 'resend-onboarding-fallback',
          ok: fallbackRes.ok,
          status: fallbackRes.status,
          id: fbData.id,
          primaryError: adminErrData,
          fallbackError: fallbackRes.ok ? undefined : fbData
        });
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        recipients: ADMIN_EMAILS,
        results
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: String(error)
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}
