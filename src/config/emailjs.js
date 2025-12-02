/**
 * EmailJS Configuration
 *
 * To set up EmailJS:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create a service (Gmail, Outlook, etc.)
 * 3. Create an email template
 * 4. Get your Public Key, Service ID, and Template ID
 * 5. Add them to your .env file or update this config file
 */

export const emailjsConfig = {
  // Public Key from EmailJS dashboard
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",

  // Service ID from EmailJS dashboard
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",

  // Template IDs from EmailJS dashboard
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "", // Contact form template
  feedbackTemplateId: import.meta.env.VITE_EMAILJS_FEEDBACK_TEMPLATE_ID || "", // Feedback modal template
};

/**
 * Validates that all required EmailJS configuration is present
 */
/**
 * Validates that all required EmailJS configuration is present
 * @param {boolean} includeFeedback - Whether to validate feedback template as well
 */
export function validateEmailjsConfig(includeFeedback = false) {
  const missing = [];

  if (!emailjsConfig.publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY");
  if (!emailjsConfig.serviceId) missing.push("VITE_EMAILJS_SERVICE_ID");
  if (!emailjsConfig.templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID");

  if (includeFeedback && !emailjsConfig.feedbackTemplateId) {
    missing.push("VITE_EMAILJS_FEEDBACK_TEMPLATE_ID");
  }

  if (missing.length > 0) {
    console.warn(
      "EmailJS configuration is incomplete. Missing:",
      missing.join(", ")
    );
    return false;
  }

  return true;
}
