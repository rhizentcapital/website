export type PrivacySection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export const en = {
  meta: {
    title: "Rhizent — Long-term ownership and capital allocation",
    description:
      "Rhizent is a European investment company focused on long-term ownership and capital allocation.",
    privacyTitle: "Privacy Policy — Rhizent",
  },
  nav: {
    about: "About",
    activities: "Activities",
    leadership: "Leadership",
    contact: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
    home: "Rhizent home",
  },
  hero: {
    line1: "Long-term ownership.",
    line2: "Disciplined capital allocation.",
    description:
      "Rhizent is a European investment company focused on long-term ownership and capital allocation.",
    geography: "Europe · Japan · Emerging Markets",
  },
  about: {
    label: "About",
    heading: "About Rhizent",
    paragraphs: [
      "Rhizent is a privately held investment company focused on long-term ownership and capital allocation.",
      "From Europe, we invest across Europe, Japan and emerging markets.",
    ],
  },
  activities: {
    label: "Activities",
    heading: "Our Activities",
    items: [
      {
        title: "Principal Investments",
        text: "Acquiring and operating businesses for the long term.",
      },
      {
        title: "Strategic Holdings",
        text: "Long-term ownership across selected businesses and assets.",
      },
      {
        title: "Rhizent Ventures",
        text: "Investing in exceptional founders and emerging companies.",
      },
    ],
  },
  geography: {
    label: "Geographic Focus",
    regions: ["Europe", "Japan", "Emerging Markets"],
    statement:
      "Operating across established and emerging markets with a long-term perspective.",
  },
  leadership: {
    label: "Leadership",
    heading: "Leadership",
    positions: [
      "CEO / President",
      "Board Member / Head of Acquisition",
      "Board Member / Head of Investment",
    ],
    linkedin: "LinkedIn profile of",
  },
  contact: {
    label: "Contact",
    heading: "Contact",
    text: "For acquisition opportunities, investment matters and general enquiries:",
  },
  footer: {
    geography: "Europe · Japan · Emerging Markets",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
  },
  privacy: {
    heading: "Privacy Policy",
    updated: "Last updated: 25 September 2026",
    back: "← Back to Rhizent",
    sections: [
      {
        heading: "1. Who we are",
        paragraphs: [
          "This website is operated by Rhizent B.V. i.o. (“Rhizent”, “we”, “us”), based in Rotterdam, the Netherlands. We are the controller of the personal data processed as described in this policy.",
          "You can reach us at any time at {email}.",
        ],
      },
      {
        heading: "2. What this website does not do",
        paragraphs: [
          "This website has no contact form, no user accounts and no advertising. It does not use analytics or tracking tools, and it does not set cookies, so no cookie banner is needed. Your choice of language is not stored. Fonts are served from our own domain, so your browser makes no requests to third-party font providers.",
        ],
      },
      {
        heading: "3. Personal data we process",
        paragraphs: [],
        list: [
          "Server log data. When you visit the website, our hosting provider automatically records technical data such as your IP address, the date and time of the request, the page requested, and browser and device information.",
          "Correspondence. If you email us, we process your email address, your name if you provide it, and the content of your message.",
        ],
      },
      {
        heading: "4. Purposes and legal bases",
        paragraphs: [],
        list: [
          "Delivering and securing the website: our legitimate interest in operating a secure website (Article 6(1)(f) GDPR).",
          "Handling your enquiry and replying to it: our legitimate interest in responding to enquiries, or steps taken at your request before entering into a contract (Article 6(1)(f) and (b) GDPR).",
          "Meeting legal obligations, such as record-keeping requirements (Article 6(1)(c) GDPR).",
        ],
      },
      {
        heading: "5. Recipients and international transfers",
        paragraphs: [
          "We use a hosting provider (Netlify, Inc.) and an email service provider. They process personal data on our behalf under data processing agreements. We do not sell personal data.",
          "Where data is transferred outside the European Economic Area, we rely on an adequacy decision (such as the EU–US Data Privacy Framework) or on the European Commission’s standard contractual clauses.",
          "Links to third-party websites, such as LinkedIn, are governed by the privacy policies of those sites.",
        ],
      },
      {
        heading: "6. Retention",
        paragraphs: [
          "Server logs are kept for a limited period determined by the hosting provider. Emails are kept for as long as needed to handle your enquiry and any resulting relationship, and afterwards only where the law requires us to keep them.",
        ],
      },
      {
        heading: "7. Your rights",
        paragraphs: [
          "Under the GDPR you have the right to access, rectify or erase your personal data, to restrict or object to its processing, and to data portability. To exercise these rights, email {email}.",
          "You also have the right to lodge a complaint with a supervisory authority, in the Netherlands the Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl), or with the authority in your country of residence.",
        ],
      },
      {
        heading: "8. Changes",
        paragraphs: [
          "We may update this policy from time to time. The current version is always published on this page, with the date of the last update above.",
        ],
      },
    ] as PrivacySection[],
  },
};

export type Dictionary = typeof en;
