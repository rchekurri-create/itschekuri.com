import { ButtonLink } from "@/components/button-link";

const needs = [
  "Business Process Discovery",
  "Solution Design",
  "Technology Implementation",
  "System Integration",
  "Product Advisory",
  "Automation / BI",
  "General Consultation",
];

export function ContactForm() {
  return (
    <form className="soft-card grid gap-4 p-5 sm:p-6">
      {/* TODO: Connect this form to Resend, Formspree, or a route handler before enabling real submissions. */}
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="field" name="fullName" placeholder="Full Name" autoComplete="name" required />
        <input className="field" name="email" placeholder="Work Email" type="email" autoComplete="email" required />
        <input className="field" name="company" placeholder="Company Name" autoComplete="organization" required />
        <input className="field" name="role" placeholder="Role / Title" autoComplete="organization-title" required />
        <input className="field" name="phone" placeholder="Phone Number (Optional)" type="tel" autoComplete="tel" />
        <select className="field" name="need" defaultValue="" required>
          <option value="" disabled>
            What are you looking for?
          </option>
          {needs.map((need) => (
            <option key={need}>{need}</option>
          ))}
        </select>
      </div>
      <input className="field" name="systems" placeholder="Current systems or tools used" />
      <textarea className="field min-h-32 resize-y" name="challenge" placeholder="Describe your challenge" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <select className="field" name="timeline" defaultValue="" required>
          <option value="" disabled>
            Desired timeline
          </option>
          <option>Immediately</option>
          <option>1-3 months</option>
          <option>3-6 months</option>
          <option>Exploring options</option>
        </select>
        <select className="field" name="contactMethod" defaultValue="" required>
          <option value="" disabled>
            Preferred contact method
          </option>
          <option>Email</option>
          <option>Phone</option>
          <option>LinkedIn</option>
        </select>
      </div>
      <div className="pt-2">
        <ButtonLink href="mailto:admin@itschekuri.com?subject=itschekuri%20Inquiry">Send Inquiry</ButtonLink>
      </div>
    </form>
  );
}
