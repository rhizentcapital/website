"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-rhizent-green px-6 py-4 sm:px-10">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
          <Image
            src="/brand/rhizent-logo-horizontal.png"
            alt="Rhizent Capital"
            width={2014}
            height={780}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`h-px w-6 bg-rhizent-gold transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-rhizent-gold transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-rhizent-gold transition-transform ${
              open ? "-translate-y-[5.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-rhizent-green-deep transition-opacity duration-200 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-title text-3xl text-rhizent-cream transition hover:text-rhizent-gold sm:text-4xl"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
