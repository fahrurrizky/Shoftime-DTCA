import ogImageSrc from "/src/components/stst.png";

export const SITE = {
  title: "Shoftime`DTCA - Jasa Website Jogja",
  tagline: "Kami membangun solusi digital terbaik di Yogyakarta",
  description:
    "Shoftime adalah digital creative agency di Jogja yang menawarkan jasa pembuatan website, aplikasi, dan pemasaran digital. Solusi terbaik untuk kebutuhan digital Anda.",
  description_short:
    "Kami adalah tim digital terbaik di Shoftime, penyedia jasa website Jogja.",
  url: "https://www.shoftime.tech/",
  author: "Shoftime`DTCA",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  keywords: [
    "jasa website Jogja",
    "digital agency Jogja",
    "pembuatan website",
    "pemasaran digital",
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "id-ID",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    author: {
      "@type": "Organization",
      name: SITE.author,
      url: SITE.url,
    },
    image: ogImageSrc,
    keywords: [
      "jasa website Jogja",
      "digital agency Jogja",
      "pembuatan website",
      "pemasaran digital",
    ],
  },
};

export const OG = {
  locale: "id_ID",
  type: "website",
  url: SITE.url,
  title: SITE.title,
  description: SITE.description,
  image: ogImageSrc,
};
