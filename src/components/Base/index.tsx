import * as React from "react";
import ControlButton from "../ControlButton";
import { RiGithubLine, RiPrinterLine } from "react-icons/ri";
import { ThemeProvider } from "./ThemeContext";
import ChangeTheme from "./ChangeTheme";
import useMetadata from "../../utils/useMetadata";
import type { HeadProps } from "gatsby";

type BaseProps = {
  withMenu?: boolean;
  children: React.ReactNode;
};

const Base: React.FC<BaseProps> = ({ withMenu, children }) => {
  return (
    <ThemeProvider>
      {children}
      {withMenu && (
        <nav className="fixed inset-[auto_1rem_0_auto] -translate-y-4 print:hidden">
          <ControlButton
            icon={RiGithubLine}
            link="https://github.com/Manpreet-Bhatti/my-resume-2"
            aria-label="Go to GitHub repo"
          />
          <ControlButton
            title="Print resume"
            onClick={() => window.print()}
            icon={RiPrinterLine}
          />
          <ChangeTheme />
        </nav>
      )}
    </ThemeProvider>
  );
};

export default Base;

export const Head: React.FC<HeadProps> = (props) => {
  const metadata = useMetadata();

  return (
    <>
      <html lang="en" />
      <link
        rel="icon"
        as="image"
        type="image/png"
        href="/logo.svg"
        sizes="16x16"
      />
      <title>{`${metadata.author} | ${metadata.title}`}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:url" content={process.env.SITE_URL} />
      <meta name="og:title" content={metadata.title} />
      <meta name="og:description" content={metadata.description} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
    </>
  );
};
