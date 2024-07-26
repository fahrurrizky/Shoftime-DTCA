// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Our Team", url: "/blog" },
  { name: "Portfolio", url: "/contact" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "LifeAt Shoftime",
    links: [
      { name: "Our Team Memory", url: "/lifeAt" },
      { name: "Work Environment", url: "/workEnvironment" },
      { name: "Sentence from Member", url: "https://sentence-member-shoftime.vercel.app/" },
    ],
  },
  {
    section: "What's Interesting",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Services", url: "/services" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  linkedin: "https://www.linkedin.com/",
  instagram: "https://instagram.com/",
  github: "https://github.com/shoftime?tab=repositories",
  gmail: "mailto:shoftimetech@gmail.com",
  slack: "https://join.slack.com/t/shoftimetech/shared_invite/zt-2nezdkpuo-2NkzcpujA_SUT00_Z6vphQ",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};