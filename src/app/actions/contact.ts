"use server";

export type ContactState = {
  ok: boolean;
  message: string;
  /** Field-level errors keyed by input name. */
  errors?: Record<string, string>;
};

const SERVICES = ["photography", "videography", "it-web"] as const;

/**
 * STUB contact handler.
 *
 * TODO: wire to a real destination before launch. Options:
 *   - Resend:   `await resend.emails.send({ from, to, subject, html })`
 *   - Webhook:  `await fetch(process.env.CONTACT_WEBHOOK_URL, { method: "POST", body })`
 * Add the API key / URL to `.env.local` and validate on the server (never trust
 * the client). For now this just validates and simulates a successful send.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    errors.email = "Enter a valid email address.";
  if (!SERVICES.includes(service as (typeof SERVICES)[number]))
    errors.service = "Choose a service.";
  if (message.length < 10)
    errors.message = "A little more detail helps us reply well.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", errors };
  }

  // Simulate network latency of a real send.
  await new Promise((r) => setTimeout(r, 700));

  // TODO: replace the line below with Resend / webhook delivery.
  console.log("[contact] (stub) new enquiry:", { name, email, service });

  return {
    ok: true,
    message: "Thanks — your enquiry is in. We'll be in touch shortly.",
  };
}
