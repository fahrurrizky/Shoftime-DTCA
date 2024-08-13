import ogImageSrc from "/src/components/stst.png";

export const SITE = {
  title: "Shoftime`DTCA",
  tagline: "We're not exactly the best team, although we build great ones",
  description:
    "Our vision is to become a business partner by understanding our customers' needs and continuing to innovate on their behalf to continue building mutually beneficial relationships.",
  description_short:
    "WE'RE NOT COMPANY, WE'RE THE A TEAM MEET IN THE SHOFT TIME",
  url: "https://www.shoftime.tech/",
  author: "Shoftime`DTCA",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
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
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : We're not exactly the best team, although we build great ones`,
  description:
    "Our vision is to become a business partner by understanding our customers' needs and continuing to innovate on their behalf to continue building mutually beneficial relationships.",
  image: ogImageSrc,
};
