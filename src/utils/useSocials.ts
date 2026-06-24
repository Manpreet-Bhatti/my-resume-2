import { FiMail, FiGithub, FiGlobe } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

export function stripLink(link: string, type: string) {
  switch (type) {
    case "email":
      return link.replace(
        "mailto:manpreet@bhatti.net",
        "manpreet [at] bhatti.net",
      );
    case "github":
      return link.replace("https://github.com/", "");
    case "linkedin":
      return link.replace("https://linkedin.com/in/", "");
    case "website":
      return link.replace(
        "https://my-site-2-theta.vercel.app",
        "https://www.manpreetbhatti.com/",
      );
    default:
      return link;
  }
}

export function getMediaIcon(type: string) {
  switch (type) {
    case "email":
      return FiMail;
    case "github":
      return FiGithub;
    case "linkedin":
      return RiLinkedinLine;
    case "website":
      return FiGlobe;
    default:
      return null;
  }
}
