import { Resend } from "resend";
import type { LeadInput } from "./validations";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendLeadEmails(lead: LeadInput) {
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@techwavex.com";
  const from = process.env.EMAIL_FROM ?? "TechWave-X <onboarding@resend.dev>";
  const subject = `TechWave-X ${lead.category} request: ${lead.interestedIn}`;

  if (!resend) {
    console.info("Email skipped. Configure RESEND_API_KEY or SMTP provider.", { to: [lead.email, adminEmail], subject });
    return;
  }

  await Promise.all([
    resend.emails.send({
      from,
      to: lead.email,
      subject: "We received your TechWave-X request",
      html: `<p>Hi ${lead.fullName},</p><p>Thanks for contacting TechWave-X. Our team will review your ${lead.category.toLowerCase()} request for <strong>${lead.interestedIn}</strong> and respond shortly.</p>`,
    }),
    resend.emails.send({
      from,
      to: adminEmail,
      subject,
      html: `<p>New lead from ${lead.fullName}</p><p>Email: ${lead.email}<br/>Phone: ${lead.phone}<br/>Format: ${lead.preferredFormat}</p><p>${lead.message}</p>`,
    }),
  ]);
}
