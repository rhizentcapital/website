import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-10 bg-rhizent-green px-6 pt-28 pb-20 text-center">
      <Image
        src="/brand/rhizent-logo-stacked.png"
        alt="Rhizent Capital"
        width={1535}
        height={1024}
        priority
        className="h-40 w-auto sm:h-48"
      />

      <div className="flex max-w-2xl flex-col items-center gap-6">
        <h1 className="font-title text-3xl leading-tight text-rhizent-cream sm:text-5xl">
          Permanent Capital for New Economic Hubs
        </h1>
        <p className="max-w-xl font-bold text-base leading-relaxed text-rhizent-cream/70 sm:text-lg">
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
