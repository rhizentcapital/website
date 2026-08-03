function Logomark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 60a40 40 0 1 1-40-40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M85 60a25 25 0 1 1-25-25"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M70 60a10 10 0 1 1-10-10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <section className="relative flex flex-col items-center justify-center gap-10 bg-rhizent-green px-6 py-28 text-center sm:py-36">
        <Logomark className="h-16 w-16 text-rhizent-gold" />

        <div className="flex flex-col items-center gap-3">
          <p className="text-2xl tracking-[0.35em] text-rhizent-gold sm:text-3xl">
            RHIZENT
          </p>
          <div className="flex items-center gap-3 text-rhizent-gold">
            <span className="h-px w-8 bg-rhizent-gold/60" />
            <p className="text-sm tracking-[0.4em] sm:text-base">CAPITAL</p>
            <span className="h-px w-8 bg-rhizent-gold/60" />
          </div>
          <p className="text-xs tracking-[0.3em] text-rhizent-gold/70">
            RADICIBUS CRESCIMUS
          </p>
        </div>

        <div className="flex max-w-2xl flex-col items-center gap-6">
          <h1 className="font-serif text-3xl leading-tight text-rhizent-cream sm:text-5xl">
            Permanent Capital for New Economic Hubs
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-rhizent-cream/70 sm:text-lg">
            Integrating venture investment, business succession and
            long-term ownership.
          </p>
        </div>

        <p className="text-xs tracking-[0.2em] text-rhizent-cream/50">
          ROTTERDAM, THE NETHERLANDS
        </p>
      </section>

      <section className="flex flex-col items-center gap-8 bg-rhizent-cream px-6 py-24 sm:py-32">
        <div className="flex w-full max-w-2xl flex-col gap-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-rhizent-gold">
            ABOUT
          </p>
          <h2 className="font-serif text-2xl leading-snug text-rhizent-green sm:text-3xl">
            A holding company built to compound, not to exit.
          </h2>
          <p className="text-base leading-relaxed text-rhizent-ink/80 sm:text-lg">
            Rhizent Capital B.V. is a permanent capital holding company
            based in Rotterdam, the Netherlands. Unlike a traditional fund,
            Rhizent has no fixed term and no pressure to exit — allowing us
            to back founders and business owners on a timeline measured in
            decades, not years.
          </p>
          <p className="text-base leading-relaxed text-rhizent-ink/80 sm:text-lg">
            We operate two complementary engines under one roof: early-stage
            venture investment in emerging markets, and buyouts of European
            small and mid-sized businesses facing succession. Together, they
            let us combine asymmetric upside with durable cash flow,
            compounding both over the long term.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 bg-rhizent-green-deep px-6 py-24 text-center sm:py-32">
        <p className="text-xs font-semibold tracking-[0.25em] text-rhizent-gold">
          CONTACT
        </p>
        <h2 className="font-serif text-2xl text-rhizent-cream sm:text-3xl">
          Let&apos;s talk.
        </h2>
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

      <footer className="bg-rhizent-green-deep px-6 py-6 text-center">
        <p className="text-xs text-rhizent-cream/40">
          © 2026 Rhizent Capital B.V.
        </p>
      </footer>
    </div>
  );
}
