import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Rhizent Capital B.V.",
};

export default function Contact() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 bg-rhizent-green-deep px-6 pt-28 pb-20 text-center">
      <p className="text-xs font-semibold tracking-[0.25em] text-rhizent-gold">
        CONTACT
      </p>
      <h1 className="font-serif text-2xl text-rhizent-cream sm:text-3xl">
        Let&apos;s talk.
      </h1>
      <a
        href="mailto:info@rhizent-capital.com"
        className="text-lg text-rhizent-gold underline decoration-rhizent-gold/40 underline-offset-4 transition hover:text-rhizent-cream sm:text-xl"
      >
        info@rhizent-capital.com
      </a>
      <p className="text-xs tracking-[0.2em] text-rhizent-cream/40">
        ROTTERDAM, THE NETHERLANDS
      </p>
    </section>
  );
}
