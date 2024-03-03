import { FiMail, FiGithub } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
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
    case "react":
      return FaReact;
    default:
      return null;
  }
}
