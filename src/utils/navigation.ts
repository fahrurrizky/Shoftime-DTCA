// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Our Team", url: "/our-team" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Part of Shoftime",
    links: [
      { name: "Our Team Memory", url: "/lifeAt" },
      { name: "Work Environment", url: "/workEnvironment" },
      { name: "Sentence from Member", url: "https://sentence.shoftime.tech/" },
    ],
  },
  {
    section: "What's Interesting",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Services", url: "/services" },
      { name: "Be Member", url: "#" },
      { name: "Our Team", url: "/our-team" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/shoftime_dtca/",
  github: "https://github.com/shoftime?tab=repositories",
  gmail: "mailto:shoftimetech@gmail.com",
  slack: "https://join.slack.com/t/shoftimetech/shared_invite/zt-2nezdkpuo-2NkzcpujA_SUT00_Z6vphQ",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};