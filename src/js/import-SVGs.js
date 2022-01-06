import injectSVG from "./dom-element-handler/import-svg.js";

export default async function importAllSVG() {
  // Navbar > Main logo
  await injectSVG({id: "navbar-main-logo", src: "navbar-logos/main-logo.svg"}, {parentSelector: "#navbar #logo"});

  // Navbar > Index logos
  await injectSVG({id: "me", src: "navbar-logos/index-logos/me.svg"}, {parentSelector: "#index [data-navigation-section=about-me] .link-logo"});
  await injectSVG({src: "navbar-logos/index-logos/my-portfolio.svg"}, {parentSelector: "#index [data-navigation-section=my-portfolio] .link-logo"});
  await injectSVG({src: "navbar-logos/index-logos/contact.svg"}, {parentSelector: "#index [data-navigation-section=contact] .link-logo"});

  // Navbar > Social logos
  await injectSVG({id: "twitter-logo", src: "navbar-logos/social-logos/twitter.svg"}, {parentSelector: "#social a:nth-child(1)"});
  await injectSVG({id: "linked-logo", src: "navbar-logos/social-logos/linkedin.svg"}, {parentSelector: "#social a:nth-child(2)"});
  await injectSVG({id: "github-logo", src: "navbar-logos/social-logos/github.svg"}, {parentSelector: "#social a:nth-child(3)"});

  // About me
  await injectSVG({id: "logos-skillset", src: "about-me/skillset-logos.svg"}, {parentSelector: "#skillset"});
  await injectSVG({id: "mobile-logos-skillset", src: "about-me/skillset-logos-mobile.svg"}, {parentSelector: "#skillset"});

  // My portfolio
  // > The Ultimate To-Do List
  await injectSVG({id: "tutdl-logo", src: "my-portfolio/the-ultimate-to-do-list.svg"}, {parentSelector: "#tutdl .project-description", beforeSelector: "#tutdl .project-description .slogan"});

  // Footer
  await injectSVG({id: "signature", src: "footer/signature.svg"}, {parentSelector: "#footer .signature"});

  // Scrolling arrows
  // > Main section
  await injectSVG({classList: "scroll-down", src: "other/scrolling-arrows.svg"}, {parentSelector: "#main-section .scrolling-arrows"});
  // > About me
  await injectSVG({classList: "scroll-down", src: "other/scrolling-arrows.svg"}, {parentSelector: "#about-me .scrolling-arrows-about-me"});
  // > Contact
  await injectSVG({classList: "scroll-down", src: "other/scrolling-arrows.svg"}, {parentSelector: "#contact .scrolling-arrows"});

}