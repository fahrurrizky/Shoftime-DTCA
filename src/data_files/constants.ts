import ogImageSrc from "/src/components/stst.png";

export const SITE = {
  title: "Shoftime - Jasa Website Jogja Terbaik",
  tagline: "Membangun Website Hebat untuk Bisnis Anda di Jogja",
  description:
    "Shoftime adalah digital creative agency di Jogja yang menawarkan jasa pembuatan website, aplikasi, dan pemasaran digital. Solusi terbaik untuk kebutuhan digital Anda.",
  description_short:
    "Shoftime - Solusi Digital Terbaik untuk Website dan Aplikasi Anda di Jogja",
  url: "https://www.shoftime.tech/",
  author: "Shoftime`DTCA",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "id-ID",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
};

export const OG = {
  locale: "id_ID",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} | Jasa Pembuatan Website Jogja`,
  description: SITE.description,
  image: ogImageSrc,
};
