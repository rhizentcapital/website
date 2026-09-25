import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { siteConfig } from "@/config/site";

export function Footer({
  lang,
  footer,
}: {
  lang: Locale;
  footer: Dictionary["footer"];
}) {
  return (
    <footer className="border-t border-gold/20 bg-forest">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <p className="font-serif text-lg tracking-[0.32em] text-gold">
            RHIZENT
          </p>
          <p className="text-sm text-ivory/70">{footer.geography}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-ivory/70 transition-colors duration-300 hover:text-gold"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="flex flex-col gap-3 text-sm text-ivory/60 md:items-end">
          <Link
            href={`/${lang}/privacy`}
            className="transition-colors duration-300 hover:text-gold"
          >
            {footer.privacy}
          </Link>
          <p>
            © {siteConfig.year} {siteConfig.legalName} {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
