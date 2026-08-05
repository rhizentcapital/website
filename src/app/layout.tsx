import type { Metadata } from "next";
import { Cinzel, Noto_Serif } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-title",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rhizent Capital B.V.",
  description: "Permanent capital for new economic hubs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${cinzel.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <footer className="bg-rhizent-green-deep px-6 py-6 text-center">
          <p className="text-xs text-rhizent-cream/40">
            © 2026 Rhizent Capital B.V.
          </p>
        </footer>
      </body>
    </html>
  );
}
