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
        <p style="margin:4px 0;"><strong>Discreet Shipping:</strong> €12.50</p>
        <p style="margin:8px 0;font-size:16px;color:#9f0712;"><strong>Total: €${Number(data.total || 0).toFixed(2)}</strong></p>
      </div>
    </div>
  </div>`;
}

function buildOrderCustomerHtml(data) {
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
      <h2 style="margin:0;text-transform:uppercase;font-size:18px;">Order Confirmation — ${data.orderId || '#GG-ORDER'}</h2>
      <p style="margin:4px 0 0;font-size:12px;color:#ccc;">Ghost Guns Official Dispatch | https://ghost-guns.shop</p>
    </div>
    <div style="padding:20px;">
      <p style="font-size:13px;line-height:1.5;">Thank you for your order, <strong>${data.firstName || 'Customer'}</strong>. Your order <strong>${data.orderId}</strong> has been registered in our system.</p>

      <div style="background:#fffbeb;border:2px solid #d97706;padding:14px;margin:16px 0;">
        <p style="margin:0 0 6px;font-weight:bold;color:#9f0712;text-transform:uppercase;font-size:13px;">Payment Method: ${data.paymentMethodTitle || data.paymentMethod}</p>
        <p style="margin:0;font-size:12px;line-height:1.5;color:#111;">${data.paymentInstructions || 'Please reply to this email or contact our support desk with your order number to finalize your payment and receive tracking.'}</p>
      </div>

      <h3 style="margin:20px 0 10px;text-transform:uppercase;font-size:14px;border-bottom:1px solid #ccc;padding-bottom:6px;">Order Summary</h3>
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
        <p style="margin:4px 0;"><strong>Discreet Shipping:</strong> €12.50</p>
        <p style="margin:8px 0;font-size:16px;color:#9f0712;"><strong>Total: €${Number(data.total || 0).toFixed(2)}</strong></p>
      </div>

      <div style="margin-top:20px;padding:12px;background:#f5f5f5;border:1px dashed #666;font-size:12px;">
        <p style="margin:0 0 4px;"><strong>Official Support & Payment Verification Desk:</strong></p>
        <p style="margin:2px 0;">Primary Email: <a href="mailto:${PRIMARY_EMAIL}"><strong>${PRIMARY_EMAIL}</strong></a></p>
        <p style="margin:2px 0;">Secondary Email: <a href="mailto:${SECONDARY_EMAIL}"><strong>${SECONDARY_EMAIL}</strong></a></p>
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
        const resData = await adminRes.json();
        results.push({ provider: 'resend-domain', ok: true, status: adminRes.status, id: resData.id });

        // Also send order receipt to the customer when domain is verified
        if (isOrder && body.email) {
          const custRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${resendKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: domainFrom,
              to: [body.email],
              cc: ADMIN_EMAILS,
              reply_to: ADMIN_EMAILS,
              subject: `Order Confirmation ${body.orderId || ''} — Ghost Guns`,
              html: buildOrderCustomerHtml(body)
            })
          });
          const custData = await custRes.json().catch(() => ({}));
          results.push({ provider: 'resend-customer', ok: custRes.ok, status: custRes.status, id: custData.id });
        }
      } else {
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
          id: fbData.id
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
