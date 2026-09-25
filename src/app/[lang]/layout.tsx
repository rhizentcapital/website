import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cinzel, Noto_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, locales } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import "../globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin", "latin-ext"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: meta.title, template: "%s" },
    description: meta.description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: siteConfig.name,
      locale: lang,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${cinzel.variable} ${notoSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <Header
          lang={lang}
          nav={dict.nav}
          venturesUrl={siteConfig.venturesUrl}
        />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} footer={dict.footer} />
      </body>
    </html>
  );
}
