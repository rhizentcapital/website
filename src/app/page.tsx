import { Logomark } from "@/components/Logomark";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-10 bg-rhizent-green px-6 pt-28 pb-20 text-center">
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
          Integrating venture investment, business succession and long-term
          ownership.
        </p>
      </div>

      <p className="text-xs tracking-[0.2em] text-rhizent-cream/50">
        ROTTERDAM, THE NETHERLANDS
      </p>
    </section>
  );
}
