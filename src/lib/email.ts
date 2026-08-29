import nodemailer from "nodemailer";

interface EmailReceiptProps {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  city: string;
  paymentMethod: string;
  totalAmount: number;
  items: Array<{
    name?: string;
    brand?: string;
    quantity?: number;
    qty?: number;
    price?: number;
    image?: string;
    imageUrl?: string;
    image_url?: string;
  }>;
}

export function generateEpicReceiptHtml(props: EmailReceiptProps): string {
  const {
    orderNumber,
    customerName,
    customerEmail,
    shippingAddress,
    city,
    paymentMethod,
    totalAmount,
    items,
  } = props;

  const orderDateFormatted = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const defaultImg = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=150&q=80";

  const itemsTableRows = (items || [])
    .map((it) => {
      const imgSrc = it.image || it.imageUrl || it.image_url || defaultImg;
      return `
      <tr>
        <td style="padding: 14px 12px; border-bottom: 1px solid #f4f4f5; vertical-align: middle;">
          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="width: 52px; vertical-align: middle; padding-right: 12px;">
                <img 
                  src="${imgSrc}" 
                  alt="${it.name || 'Gear'}" 
                  width="50" 
                  height="50" 
                  style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px; border: 1px solid #e4e4e7; display: block; background-color: #f4f4f5;" 
                />
              </td>
              <td style="vertical-align: middle;">
                <div style="font-size: 13px; font-weight: 700; color: #18181b; line-height: 1.35;">
                  ${it.name || "Cinema Production Gear"}
                </div>
                <div style="font-size: 11px; color: #71717a; font-weight: normal; margin-top: 3px;">
                  ${it.brand ? `${it.brand} • ` : ""}Qty: ${it.quantity || it.qty || 1} • Factory Sealed
                </div>
              </td>
            </tr>
          </table>
        </td>
        <td style="padding: 14px 12px; border-bottom: 1px solid #f4f4f5; font-size: 13px; font-weight: 800; color: #000000; text-align: right; font-family: monospace; vertical-align: middle; white-space: nowrap;">
          E£ ${Math.round(Number(it.price || 0) * 50.5).toLocaleString()} EGP
        </td>
      </tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ESA CAM Official Receipt - ${orderNumber}</title>
</head>
<body style="margin: 0; padding: 30px 10px; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #18181b;">

  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 25px rgba(0,0,0,0.06); border: 1px solid #e4e4e7;">
    
    <!-- Top Nikon Accent Bar -->
    <div style="background-color: #000000; padding: 16px 30px; text-align: center; border-bottom: 3px solid #FFE600;">
      <span style="background-color: #FFE600; color: #000000; font-weight: 900; font-size: 16px; padding: 3px 8px; display: inline-block; letter-spacing: -0.5px;">ESA</span>
      <span style="color: #ffffff; font-weight: 900; font-size: 16px; letter-spacing: 2px; margin-left: 5px;">CAM</span>
      <span style="color: #a1a1aa; font-size: 10px; font-family: monospace; letter-spacing: 3px; margin-left: 8px; text-transform: uppercase;">OPTICS LAB</span>
    </div>

    <!-- Main Receipt Container -->
    <div style="padding: 40px 35px 30px;">
      
      <!-- Thank You Header -->
      <div style="text-align: center; margin-bottom: 35px;">
        <h1 style="font-size: 40px; font-weight: 900; letter-spacing: -1px; margin: 0 0 8px; color: #000000; text-transform: uppercase;">Thank You.</h1>
        <p style="font-size: 14px; color: #52525b; margin: 0; font-weight: 500;">
          Hi <strong>${customerName}</strong>!<br>
          Thank you for your purchase from ESA CAM Official Store.
        </p>
      </div>

      <!-- INVOICE ID BIG BOX (Epic Games Signature Style) -->
      <div style="text-align: center; padding: 22px; background-color: #fafafa; border-radius: 12px; border: 1px solid #e4e4e7; margin-bottom: 35px;">
        <div style="font-size: 11px; font-weight: 800; color: #71717a; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 6px; font-family: monospace;">
          INVOICE ID:
        </div>
        <div style="font-size: 30px; font-weight: 900; font-family: 'Courier New', monospace; letter-spacing: 2px; color: #000000; margin: 0;">
          ${orderNumber}
        </div>
      </div>

      <!-- Section 1: Order Information Header -->
      <div style="font-size: 11px; font-weight: 800; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid #e4e4e7; padding-bottom: 8px; margin-bottom: 16px;">
        YOUR ORDER INFORMATION:
      </div>

      <!-- Information Grid -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 13px;">
        <tr>
          <td style="width: 50%; vertical-align: top; padding-bottom: 14px;">
            <div style="font-weight: 800; color: #000000; font-size: 13px;">Order ID:</div>
            <div style="color: #52525b; font-family: monospace; font-size: 12px; margin-top: 2px;">${orderNumber}</div>
          </td>
          <td style="width: 50%; vertical-align: top; padding-bottom: 14px;">
            <div style="font-weight: 800; color: #000000; font-size: 13px;">Bill To:</div>
            <div style="color: #2563eb; font-size: 12px; margin-top: 2px;">${customerEmail || ""}</div>
          </td>
        </tr>
        <tr>
          <td style="width: 50%; vertical-align: top; padding-bottom: 14px;">
            <div style="font-weight: 800; color: #000000; font-size: 13px;">Order Date:</div>
            <div style="color: #52525b; font-size: 12px; margin-top: 2px;">${orderDateFormatted}</div>
          </td>
          <td style="width: 50%; vertical-align: top; padding-bottom: 14px;">
            <div style="font-weight: 800; color: #000000; font-size: 13px;">Source:</div>
            <div style="color: #52525b; font-size: 12px; margin-top: 2px;">ESA CAM Official Flagship</div>
          </td>
        </tr>
        <tr>
          <td style="width: 50%; vertical-align: top;">
            <div style="font-weight: 800; color: #000000; font-size: 13px;">Delivery Destination:</div>
            <div style="color: #52525b; font-size: 12px; margin-top: 2px;">${shippingAddress}, ${city}</div>
          </td>
          <td style="width: 50%; vertical-align: top;">
            <div style="font-weight: 800; color: #000000; font-size: 13px;">Payment Method:</div>
            <div style="color: #52525b; font-size: 12px; margin-top: 2px; text-transform: uppercase; font-weight: 700;">${paymentMethod || "COD"}</div>
          </td>
        </tr>
      </table>

      <!-- Section 2: Items Table -->
      <div style="font-size: 11px; font-weight: 800; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid #e4e4e7; padding-bottom: 8px; margin-bottom: 12px;">
        HERE'S WHAT YOU ORDERED:
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <thead>
          <tr style="background-color: #f4f4f5; text-align: left;">
            <th style="padding: 10px 12px; font-size: 11px; font-weight: 800; color: #000000; text-transform: uppercase;">Equipment / Description:</th>
            <th style="padding: 10px 12px; font-size: 11px; font-weight: 800; color: #000000; text-transform: uppercase; text-align: right;">Price:</th>
          </tr>
        </thead>
        <tbody>
          ${itemsTableRows}
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #f4f4f5; font-size: 12px; color: #059669; font-weight: 600;">
              ✓ 2-Year Official ESA CAM Warranty
            </td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #f4f4f5; font-size: 12px; color: #059669; font-weight: 600; text-align: right;">
              Included Free
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; font-size: 12px; color: #52525b;">
              VIP Fragile Express Delivery
            </td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e4e4e7; font-size: 12px; color: #52525b; text-align: right;">
              Free
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Grand Total Bar -->
      <div style="border-top: 2px solid #000000; padding-top: 14px; margin-bottom: 35px;">
        <table style="width: 100%;">
          <tr>
            <td style="font-size: 14px; font-weight: 900; color: #71717a; text-transform: uppercase; letter-spacing: 1px;">TOTAL:</td>
            <td style="text-align: right; font-size: 24px; font-weight: 900; color: #000000; font-family: 'Courier New', monospace;">E£ ${Math.round(Number(totalAmount) * 50.5).toLocaleString()} EGP</td>
          </tr>
        </table>
      </div>

    </div>

    <!-- Epic-Style Footer -->
    <div style="background-color: #fafafa; border-top: 1px solid #e4e4e7; padding: 25px 25px; text-align: center;">
      <div style="margin-bottom: 12px;">
        <span style="background-color: #FFE600; color: #000000; font-weight: 900; font-size: 14px; padding: 2px 6px; display: inline-block;">ESA</span>
        <span style="font-weight: 900; font-size: 14px; letter-spacing: 1px; margin-left: 4px; color: #000000;">CAM</span>
      </div>

      <p style="font-size: 11px; color: #71717a; line-height: 1.6; margin: 0 0 12px; max-width: 480px; margin-left: auto; margin-right: auto;">
        © 2026 ESA CAM Optics Lab, Inc. All rights reserved. Authorized Cinema & Master Optics Distributor in Egypt & MENA.
      </p>

      <div style="font-size: 11px; color: #2563eb;">
        <a href="http://localhost:3000/terms-and-conditions" style="color: #2563eb; text-decoration: underline; margin: 0 6px;">Terms of Service</a> |
        <a href="http://localhost:3000/privacy-policy" style="color: #2563eb; text-decoration: underline; margin: 0 6px;">Privacy Policy</a> |
        <a href="http://localhost:3000/store" style="color: #2563eb; text-decoration: underline; margin: 0 6px;">Storefront</a>
      </div>
    </div>

  </div>

</body>
</html>`;
}

export async function sendOrderReceiptEmail(props: EmailReceiptProps): Promise<boolean> {
  const host = process.env.SMTP_HOST || process.env.EMAIL_HOST || "smtp.hostinger.com";
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD || process.env.SMTP_PASSWORD;
  const port = Number(process.env.SMTP_PORT || process.env.EMAIL_PORT) || 465;
  const fromAddress = process.env.EMAIL_FROM || process.env.SMTP_FROM || `"ESA CAM Optics" <${user}>`;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!user || !pass) {
    console.warn("⚠️ SMTP credentials not configured (SMTP_USER/EMAIL_USER and SMTP_PASS/EMAIL_PASS). Skipping email dispatch.");
    return false;
  }

  if (!props.customerEmail && !adminEmail) {
    console.warn("⚠️ No recipient email address provided for order confirmation.");
    return false;
  }

  try {
    const isGmail = host.toLowerCase().includes("gmail");
    
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      tls: {
        rejectUnauthorized: false,
      },
      ...(isGmail ? { service: "gmail" } : {}),
    });

    const html = generateEpicReceiptHtml(props);
    const recipients = [props.customerEmail, adminEmail].filter(Boolean) as string[];

    console.log(`📨 Attempting to send order receipt #${props.orderNumber} via ${host}:${port} to:`, recipients.join(", "));

    await transporter.sendMail({
      from: fromAddress,
      to: props.customerEmail || adminEmail,
      ...(adminEmail && props.customerEmail && adminEmail !== props.customerEmail ? { bcc: adminEmail } : {}),
      subject: `ESA CAM Order Confirmation #${props.orderNumber} (تأكيد طلبك)`,
      html,
    });

    console.log(`✅ Order confirmation email #${props.orderNumber} sent successfully!`);
    return true;
  } catch (error) {
    console.error("❌ Direct SMTP email error:", error);
    return false;
  }
}
