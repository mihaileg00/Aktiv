import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // 1. Honeypot check (bots fill 'website', humans don't)
  if (body.website) {
    // Return a success status to deceive the spambot, but do not send anything
    return { success: true };
  }

  // 2. Validate required fields
  const { name, email, phone, company, message } = body;
  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Всички задължителни полета (*) трябва да бъдат попълнени.',
    });
  }

  // 3. Helper function to escape HTML special characters for the email body
  const escapeHtml = (val: string): string => {
    return String(val ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedPhone = escapeHtml(phone) || '—';
  const escapedCompany = escapeHtml(company) || '—';
  const escapedMessage = escapeHtml(message).replace(/\n/g, '<br>');

  const htmlContent = `
    <h3>Ново запитване от сайта</h3>
    <p><strong>Име:</strong> ${escapedName}</p>
    <p><strong>Имейл:</strong> ${escapedEmail}</p>
    <p><strong>Телефон:</strong> ${escapedPhone}</p>
    <p><strong>Компания:</strong> ${escapedCompany}</p>
    <hr />
    <p><strong>Съобщение:</strong></p>
    <p>${escapedMessage}</p>
  `;

  // 4. Configure SMTP transport securely on the server
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Send email to the firm's inbox only (completely locked on server)
    await transporter.sendMail({
      from: `"Запитване от сайта" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Запитване от сайта — ${name}`,
      html: htmlContent,
    });

    return { success: true };
  } catch (error) {
    console.error('Nodemailer error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Възникна грешка при изпращането на съобщението. Моля, опитайте по-късно.',
    });
  }
});
