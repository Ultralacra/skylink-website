import type { APIRoute } from 'astro';

export const prerender = false;

const MAILERSEND_URL = 'https://api.mailersend.com/v1/email';

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const buildNotificationHtml = ({
  name,
  email,
  service,
  message
}: {
  name: string;
  email: string;
  service: string;
  message: string;
}) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service || 'No especificado');
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

  return `
    <div style="margin:0;padding:32px;background:#050505;font-family:Inter,Arial,sans-serif;color:#e8ecf8;">
      <div style="max-width:640px;margin:0 auto;background:#0b0f18;border:1px solid rgba(96,176,224,0.18);border-radius:24px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.28);">
        <div style="padding:28px 32px;border-bottom:1px solid rgba(255,255,255,0.06);background:linear-gradient(180deg,rgba(96,176,224,0.12),rgba(96,176,224,0));">
          <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#60c0f0;margin-bottom:10px;">Nuevo contacto web</div>
          <h1 style="margin:0;font-size:28px;line-height:1.15;font-family:'Space Grotesk',Arial,sans-serif;">Solicitud desde Skylink</h1>
          <p style="margin:12px 0 0;color:#9aa3c7;font-size:15px;line-height:1.6;">Te llegó una nueva solicitud desde el formulario del sitio.</p>
        </div>
        <div style="padding:28px 32px;">
          <div style="display:grid;gap:14px;">
            <div style="padding:16px 18px;border-radius:18px;background:#111827;border:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#7a82a6;margin-bottom:6px;">Nombre</div>
              <div style="font-size:16px;color:#f4f7ff;">${safeName}</div>
            </div>
            <div style="padding:16px 18px;border-radius:18px;background:#111827;border:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#7a82a6;margin-bottom:6px;">Email de respuesta</div>
              <div style="font-size:16px;color:#f4f7ff;">${safeEmail}</div>
            </div>
            <div style="padding:16px 18px;border-radius:18px;background:#111827;border:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#7a82a6;margin-bottom:6px;">Servicio</div>
              <div style="font-size:16px;color:#f4f7ff;">${safeService}</div>
            </div>
            <div style="padding:16px 18px;border-radius:18px;background:#111827;border:1px solid rgba(255,255,255,0.06);">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#7a82a6;margin-bottom:8px;">Mensaje</div>
              <div style="font-size:15px;line-height:1.75;color:#d9def0;">${safeMessage}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

const buildNotificationText = ({
  name,
  email,
  service,
  message
}: {
  name: string;
  email: string;
  service: string;
  message: string;
}) => [
  'Nuevo contacto desde Skylink',
  '',
  `Nombre: ${name}`,
  `Email: ${email}`,
  `Servicio: ${service || 'No especificado'}`,
  '',
  'Mensaje:',
  message
].join('\n');

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.MAILERSEND_API_KEY;
  const senderEmail = import.meta.env.MAILERSEND_FROM_EMAIL ?? 'no-responder@valinkgroup.com';
  const senderName = import.meta.env.MAILERSEND_FROM_NAME ?? 'Skylink';
  const notificationRecipients = (import.meta.env.MAILERSEND_TO_EMAILS ?? 'cesaramuroc@gmail.com,contacto@valinkgroup.com')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  if (!apiKey || notificationRecipients.length === 0) {
    return new Response(
      JSON.stringify({ message: 'La configuración de MailerSend no está disponible.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ message: 'Solicitud inválida.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : 'No especificado';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !message || !isValidEmail(email)) {
    return new Response(JSON.stringify({ message: 'Completa los campos requeridos correctamente.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const response = await fetch(MAILERSEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        from: {
          email: senderEmail,
          name: senderName
        },
        to: notificationRecipients.map((recipientEmail) => ({
          email: recipientEmail,
          name: recipientEmail.split('@')[0]
        })),
        reply_to: {
          email,
          name
        },
        subject: `Nuevo contacto de ${name} desde Skylink`,
        text: buildNotificationText({ name, email, service, message }),
        html: buildNotificationHtml({ name, email, service, message }),
        tags: ['website-contact']
      })
    });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(details || `MailerSend error ${response.status}`);
    }
  } catch (error) {
    const details = error instanceof Error ? error.message : 'Unknown MailerSend error';
    const normalized = details.toLowerCase();

    let message = 'MailerSend rechazó el envío.';

    if (normalized.includes('from.email domain must be verified')) {
      message = 'MailerSend bloqueó el envío porque el dominio o remitente no está verificado.';
    } else if (normalized.includes('reply_to.email')) {
      message = 'MailerSend bloqueó el envío porque el correo de respuesta no es válido.';
    }

    return new Response(JSON.stringify({ message, details }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};