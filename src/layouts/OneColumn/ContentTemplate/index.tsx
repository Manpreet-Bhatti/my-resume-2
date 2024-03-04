import * as React from "react";
import { FiLink, FiGithub } from "react-icons/fi";

type ContentTemplateProps = {
  title: string;
  subtitle?: string;
  aside?: React.ReactNode;
  body: React.ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  home?: string;
  github?: string;
};

const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  subtitle,
  aside,
  body,
  level: Heading = "h3",
  home,
  github,
}) => {
  console.log(aside);
  return (
    <div>
      <Heading className="mb-[0.025in] mt-[0.15in] flex items-center justify-between text-sm font-medium text-primary">
        <div className="flex items-center gap-x-1">
          {title}
          {home && (
            <a
              href={home}
              target="_blank"
              rel="noreferrer noopenner"
              aria-label={title}
              className="rounded-md p-2 transition-colors duration-200 hover:bg-hover-page focus:bg-hover-page active:bg-active-page"
            >
              <FiLink className="h-3 w-3 text-primary" />
            </a>
          )}
          {github && (
            <a
              href={home}
              target="_blank"
              rel="noreferrer noopenner"
              aria-label={title}
              className="rounded-md p-2 transition-colors duration-200 hover:bg-hover-page focus:bg-hover-page active:bg-active-page"
            >
              <FiGithub className="h-3 w-3 text-primary" />
            </a>
          )}
        </div>
        {!subtitle && aside && <p className="text-xs text-alt-text">{aside}</p>}
      </Heading>
      {subtitle && (
        <div className="-mt-1.5 flex justify-between text-xs font-medium">
          <p>{subtitle}</p>
          {aside && <p className="text-alt-text">{aside}</p>}
        </div>
      )}
      <div className="mt-1.5 text-sm leading-[1.5] text-alt-text">
        {body}
      </div>
    </div>
  );
};

export default ContentTemplate;
