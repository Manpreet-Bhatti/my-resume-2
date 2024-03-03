import * as React from "react";
import { FiLink } from "react-icons/fi";

type ContentTemplateProps = {
  title: string;
  subtitle?: string;
  aside?: React.ReactNode;
  body: React.ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  home?: string;
};

const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  subtitle,
  aside,
  body,
  level: Heading = "h3",
  home,
}) => {
  return (
    <div>
      <Heading className="mb-[0.025in] mt-[0.15in] flex items-center gap-x-1 font-medium text-primary">
        {title}
        {home && (
          <a
            href={home}
            target="_blank"
            rel="noreferrer noopenner"
            aria-label={title}
            className="hover:bg-hover-page focus:bg-hover-page active:bg-active-page rounded-md p-2 transition-colors duration-200"
          >
            <FiLink className="h-3 w-3 text-primary" />
          </a>
        )}
      </Heading>
      {subtitle && (
        <div className="flex justify-between text-sm font-medium">
          <p>{subtitle}</p>
          {aside && <p className="text-alt-text">{aside}</p>}
        </div>
      )}
      <div className="mt-[0.1in] text-sm leading-[1.5] text-alt-text">
        {body}
      </div>
    </div>
  );
};

export default ContentTemplate;
