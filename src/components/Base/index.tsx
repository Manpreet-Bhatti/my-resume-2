import * as React from "react";
import ControlButton from "../ControlButton";
import { RiGithubLine, RiPrinterLine } from "react-icons/ri";
import { ThemeProvider } from "./ThemeContext";
import ChangeTheme from "./ChangeTheme";
import { meta } from "../../data/meta";
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

export const Head: React.FC<HeadProps> = () => {
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
      <title>{`${meta.author} | ${meta.title}`}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:url" content={meta.siteUrl} />
      <meta name="og:title" content={meta.title} />
      <meta name="og:description" content={meta.description} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </>
  );
};
