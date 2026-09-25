"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Header({
  lang,
  nav,
  venturesUrl,
}: {
  lang: Locale;
  nav: Dictionary["nav"];
  venturesUrl: string | null;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: `/${lang}#about`, label: nav.about },
    { href: `/${lang}#activities`, label: nav.activities },
    { href: `/${lang}#leadership`, label: nav.leadership },
    { href: `/${lang}#contact`, label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-forest">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link
          href={`/${lang}`}
          onClick={() => setOpen(false)}
          aria-label={nav.home}
          className="font-serif text-lg tracking-[0.32em] text-gold"
        >
          RHIZENT
        </Link>

        <div className="flex items-center gap-2 md:gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-ivory/70 transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            {venturesUrl && (
              <a
                href={venturesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide text-ivory/70 transition-colors duration-300 hover:text-gold"
              >
                Rhizent Ventures ↗
              </a>
            )}
          </nav>

          <LanguageSwitcher current={lang} label={nav.language} />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.menuClose : nav.menuOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          >
            <span
              className={`h-px w-6 bg-gold transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-gold transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 flex flex-col gap-8 bg-forest px-6 pt-12 transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="border-b border-gold/20 pb-6 font-serif text-2xl tracking-wide text-ivory transition-colors hover:text-gold"
          >
            {link.label}
          </Link>
        ))}
        {venturesUrl && (
          <a
            href={venturesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-lg tracking-wide text-ivory/70"
          >
            Rhizent Ventures ↗
          </a>
        )}
      </div>
    </header>
  );
}
