"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

export function LanguageSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const pathname = usePathname() ?? `/${current}`;
  // "/en/privacy" -> "/privacy": same page, other language.
  const rest = pathname.replace(/^\/[^/]+/, "");

  return (
    <nav aria-label={label} className="flex items-center">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && (
            <span aria-hidden className="h-3 w-px bg-stone" />
          )}
          <Link
            href={`/${locale}${rest}`}
            hrefLang={locale}
            lang={locale}
            title={localeNames[locale]}
            aria-current={locale === current ? "true" : undefined}
            className={`px-3 py-2 text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
              locale === current
                ? "text-gold"
                : "text-ivory/60 hover:text-ivory"
            }`}
          >
            {locale}
          </Link>
        </span>
      ))}
    </nav>
  );
}
