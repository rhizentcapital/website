import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Rhizent Capital B.V.",
};

export default function About() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-rhizent-cream px-6 pt-28 pb-20">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <p className="text-xs font-semibold tracking-[0.25em] text-rhizent-gold">
          ABOUT
        </p>
        <h1 className="font-title text-2xl leading-snug text-rhizent-green sm:text-3xl">
          A holding company built to compound, not to exit.
        </h1>
        <p className="text-base leading-relaxed text-rhizent-ink/80 sm:text-lg">
          Rhizent Capital B.V. is a permanent capital holding company based
          in Rotterdam, the Netherlands. Unlike a traditional fund, Rhizent
          has no fixed term and no pressure to exit — allowing us to back
          founders and business owners on a timeline measured in decades,
          not years.
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
  );
}
