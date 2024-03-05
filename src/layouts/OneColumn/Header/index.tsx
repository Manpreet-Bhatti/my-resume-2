import * as React from "react";
import useMetadata from "../../../utils/useMetadata";
import { getMediaIcon, stripLink } from "../../../utils/useSocials";
import { graphql, useStaticQuery } from "gatsby";

const Header: React.FC = () => {
  const { author, blurb } = useMetadata();
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulHeader {
        email
        github
        linkedin
        website
      }
    }
  `);

  return (
    <header>
      <div className="mb-auto font-medium">
        <h1 className="-mb-2 text-lg text-primary">{author}</h1>
        <span className="text-sm dark:text-dark-text">{blurb}</span>
      </div>
      <ul className="mb-auto flex list-none gap-[0.025in] p-0 text-xs">
        {Object.keys(data.contentfulHeader).map((key) => {
          const Icon = getMediaIcon(key);
          return (
            <li key={key} className="mr-[0.25in]">
              <a
                href={data.contentfulHeader[key]}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center rounded-lg p-2 font-medium text-alt-text transition-colors duration-200 hover:bg-hover-page focus:bg-hover-page active:bg-active-page active:text-primary dark:text-dark-alt-text"
                aria-label={`Link to ${key}`}
              >
                {Icon && (
                  <Icon className="mr-[0.05in] text-primary transition-colors duration-200" />
                )}
                <span>{stripLink(data.contentfulHeader[key], key)}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
