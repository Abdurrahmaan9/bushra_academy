
import EnrollForm from "@/components/EnrollForm";

export default function EnrollPage() {
  return (
    <>
      {/* Netlify scans this static HTML at build time */}
      <form
        name="enrollment"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="experience" />
        <textarea name="message" />
      </form>

      <EnrollForm />
    </>
  );
}
