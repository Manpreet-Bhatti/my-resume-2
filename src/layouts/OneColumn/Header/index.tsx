import * as React from "react";
import useMetadata from "../../../utils/useMetadata";
import { getMediaIcon, stripLink } from "../../../utils/useMedia";
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
        <h1 className="text-lg text-primary">{author}</h1>
        <span className="text-sm">{blurb}</span>
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
                className="hover:bg-hover-page active:bg-active-page focus:bg-hover-page flex items-center rounded-lg p-2 font-medium text-alt-text transition-colors duration-200 active:text-primary"
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
