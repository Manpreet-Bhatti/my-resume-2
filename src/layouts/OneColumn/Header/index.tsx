import * as React from "react";
import useMetadata from "../../../utils/useMetadata";
import { getMediaIcon, stripLink } from "../../../utils/useMedia";
import { Link } from "gatsby";

const Header: React.FC = () => {
  const { author, blurb, socials } = useMetadata();

  return (
    <header>
      <div className="mb-auto">
        <h1 className="text-lg font-semibold text-primary">{author}</h1>
        <span className="font-medium">{blurb}</span>
      </div>
      <ul className="mb-auto flex list-none gap-[0.025in] p-0 text-xs">
        {socials?.map((social, index) => {
          const Icon = getMediaIcon(social.type);
          return (
            <li key={index} className="mr-[0.25in]">
              <Link
                to={social.url}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:bg-hover-page active:bg-active-page flex items-center rounded-lg p-2 font-medium text-alt-text transition-colors duration-200 focus:text-text active:text-primary"
              >
                {Icon && (
                  <Icon className="mr-[0.05in] text-primary transition-colors duration-200" />
                )}
                <span>{stripLink(social.url, social.type)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
