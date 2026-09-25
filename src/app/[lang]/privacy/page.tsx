import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, locales } from "@/i18n/config";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: getDictionary(lang).meta.privacyTitle,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/privacy`]),
      ),
    },
  };
}

export default async function Privacy({
  params,
}: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { privacy } = getDictionary(lang);
  const fill = (text: string) => text.replaceAll("{email}", siteConfig.email);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28">
      <Link
        href={`/${lang}`}
        className="text-sm text-ivory/60 transition-colors duration-300 hover:text-gold"
      >
        {privacy.back}
      </Link>

      <header className="mt-12 flex flex-col gap-5 border-b border-gold/30 pb-10">
        <h1 className="font-serif text-3xl tracking-wide sm:text-4xl">
          {privacy.heading}
        </h1>
        <p className="text-sm text-ivory/60">{privacy.updated}</p>
      </header>

      <div className="mt-12 flex flex-col gap-12">
        {privacy.sections.map((section) => (
          <section key={section.heading} className="flex flex-col gap-4">
            <h2 className="font-serif text-lg tracking-wide text-gold">
              {section.heading}
            </h2>
            {section.paragraphs.map((p) => (
              <p
                key={p}
                className="text-base leading-relaxed font-light text-ivory/80"
              >
                {fill(p)}
              </p>
            ))}
            {section.list && (
              <ul className="flex flex-col gap-3">
                {section.list.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-base leading-relaxed font-light text-ivory/80 before:absolute before:top-[0.75em] before:left-0 before:h-px before:w-3 before:bg-gold/60"
                  >
                    {fill(item)}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
