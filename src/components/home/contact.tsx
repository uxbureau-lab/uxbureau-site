import { SectionHeader } from "@/components/layout/section-header";
import { contact } from "@/content/home";

export function Contact() {
  return (
    <section id="contact" className="section scroll-mt-16" aria-labelledby="contact-title">
      <div className="shell">
        <SectionHeader
          id="contact-title"
          index={contact.index}
          label={contact.label}
          title={contact.title}
          intro={contact.body}
        />
        <div className="mt-16 grid md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-5">
            <a
              href={`mailto:${contact.email}`}
              className="font-display text-fg hover:text-accent text-[clamp(28px,3.4vw,48px)] transition-colors duration-200"
            >
              {contact.email}
            </a>
            <p className="text-fg-muted mt-4 text-sm">{contact.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
