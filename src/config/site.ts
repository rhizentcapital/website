// Single place for facts that are likely to change. Update here, not in the dictionaries.
export const siteConfig = {
  name: "Rhizent",
  legalName: "Rhizent B.V. i.o.",
  email: "contact@rhizent.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rhizent.com",
  city: "Rotterdam, the Netherlands",
  year: 2026,
  // Rhizent Ventures has no page of its own yet. Set this to its domain later
  // and the Activities entry and header link render as external links.
  venturesUrl: null as string | null,
  leadership: [
    { name: "Ikkei Yasui", linkedin: null as string | null },
    { name: "Yuto Aiyama", linkedin: null as string | null },
    { name: "Shinnosuke Nakano", linkedin: null as string | null },
  ],
};
