import * as React from "react";
import { getMediaIcon, stripLink } from "../../../utils/useSocials";
import { header } from "../../../data/header";
import { meta } from "../../../data/meta";

const Header: React.FC = () => {
  return (
    <header>
      <div className="mb-auto font-medium">
        <h1 className="-mb-2 text-lg text-primary">{meta.author}</h1>
        <span className="text-sm dark:text-dark-text">{meta.blurb}</span>
      </div>
      <ul className="mb-auto flex list-none gap-[0.025in] p-0 text-xs">
        {Object.keys(header).map((key) => {
          const Icon = getMediaIcon(key);
          const href = header[key as keyof typeof header];
          return (
            <li key={key} className="mr-[0.25in]">
              <a
                href={href}
                rel="noopener noreferrer"
                target="_blank"
                className="dark:hover:bg-dark-hover-page dark:active:bg-dark-active-page flex items-center rounded-lg p-2 font-medium text-alt-text transition-colors duration-200 hover:bg-hover-page active:bg-active-page dark:text-dark-alt-text"
                aria-label={`Link to ${key}`}
              >
                {Icon && (
                  <Icon className="mr-[0.05in] text-primary transition-colors duration-200" />
                )}
                <span>{stripLink(href, key)}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
