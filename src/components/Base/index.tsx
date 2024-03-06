import * as React from "react";
import ControlButton from "../ControlButton";
import { RiGithubLine, RiPrinterLine } from "react-icons/ri";
import { ThemeProvider } from "./ThemeContext";
import ChangeTheme from "./ChangeTheme";
import { Helmet } from "react-helmet";
import useMetadata from "../../utils/useMetadata";

type BaseProps = {
  withMenu?: boolean;
  children: React.ReactNode;
};

export default function Base({ withMenu, children }: BaseProps) {
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
}

export const Head: React.FC = () => {
  const metadata = useMetadata();

  return (
    <Helmet>
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
      <meta property="og:url" content={process.env.URL} />
      <meta name="og:title" content={metadata.title} />
      <meta name="og:description" content={metadata.description} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
    </Helmet>
  );
};
