import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";
import { siteConfig } from "@/config/site";

// Small gold section label, the only regular use of gold on text.
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.28em] text-gold uppercase">
      {children}
    </p>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl content-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <Image
          src="/brand/rhizent-mark.png"
          alt=""
          width={365}
          height={360}
          priority
          className="fade-in-slow h-16 w-auto lg:order-last lg:h-80 lg:justify-self-end"
        />
        <div className="fade-in flex max-w-2xl flex-col gap-8">
          <h1 className="font-serif text-3xl leading-[1.25] tracking-wide text-ivory sm:text-4xl lg:text-[2.75rem]">
            {t.hero.line1}
            <br />
            {t.hero.line2}
          </h1>
          <p className="max-w-xl text-base leading-relaxed font-light text-ivory/70 sm:text-lg">
            {t.hero.description}
          </p>
          <div className="flex flex-col gap-4 pt-4">
            <span className="h-px w-16 bg-gold" />
            <p className="text-xs tracking-[0.22em] text-ivory/60 uppercase">
              {t.hero.geography}
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-gold/20 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 md:grid-cols-12">
          <div className="flex flex-col gap-5 md:col-span-4">
            <Label>{t.about.label}</Label>
            <h2 className="font-serif text-2xl tracking-wide sm:text-3xl">
              {t.about.heading}
            </h2>
          </div>
          <div className="flex max-w-2xl flex-col gap-6 md:col-span-7 md:col-start-6">
            {t.about.paragraphs.map((p) => (
              <p
                key={p}
                className="text-base leading-relaxed font-light text-ivory/80 sm:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section
        id="activities"
        className="border-t border-gold/20 py-24 sm:py-32"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 sm:px-10">
          <div className="flex flex-col gap-5">
            <Label>{t.activities.label}</Label>
            <h2 className="font-serif text-2xl tracking-wide sm:text-3xl">
              {t.activities.heading}
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {t.activities.items.map((item, i) => {
              const isVentures = i === 2;
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 border-t border-gold/40 pt-6"
                >
                  <h3 className="font-serif text-lg tracking-wide">
                    {isVentures && siteConfig.venturesUrl ? (
                      <a
                        href={siteConfig.venturesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-gold"
                      >
                        {item.title} ↗
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-base leading-relaxed font-light text-ivory/70">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Geographic focus */}
      <section id="geography" className="bg-moss py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-10">
          <Label>{t.geography.label}</Label>
          <ul className="grid gap-6 sm:grid-cols-3 sm:gap-10">
            {t.geography.regions.map((region) => (
              <li
                key={region}
                className="font-serif text-2xl tracking-wide sm:text-3xl"
              >
                {region}
              </li>
            ))}
          </ul>
          <p className="max-w-2xl text-base leading-relaxed font-light text-ivory/70">
            {t.geography.statement}
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 sm:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 sm:px-10">
          <div className="flex flex-col gap-5">
            <Label>{t.leadership.label}</Label>
            <h2 className="font-serif text-2xl tracking-wide sm:text-3xl">
              {t.leadership.heading}
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {siteConfig.leadership.map((person, i) => (
              <div
                key={person.name}
                className="flex flex-col gap-3 border-t border-gold/40 pt-6"
              >
                <h3 className="font-serif text-xl tracking-wide">
                  {person.linkedin ? (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.leadership.linkedin} ${person.name}`}
                      className="transition-colors duration-300 hover:text-gold"
                    >
                      {person.name}
                    </a>
                  ) : (
                    person.name
                  )}
                </h3>
                <p className="text-sm leading-relaxed tracking-wide text-ivory/70">
                  {t.leadership.positions[i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-gold/20 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 md:grid-cols-12">
          <div className="flex flex-col gap-5 md:col-span-4">
            <Label>{t.contact.label}</Label>
            <h2 className="font-serif text-2xl tracking-wide sm:text-3xl">
              {t.contact.heading}
            </h2>
          </div>
          <div className="flex max-w-2xl flex-col gap-6 md:col-span-7 md:col-start-6">
            <p className="text-base leading-relaxed font-light text-ivory/80 sm:text-lg">
              {t.contact.text}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-fit border-b border-gold/40 pb-1 text-xl font-light tracking-wide transition-colors duration-300 hover:border-gold hover:text-gold sm:text-2xl"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
