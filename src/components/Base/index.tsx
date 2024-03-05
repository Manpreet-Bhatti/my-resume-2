import * as React from "react";
import ControlButton from "../ControlButton";
import { RiGithubLine, RiPrinterLine } from "react-icons/ri";
import { ThemeProvider } from "./ThemeContext";
import ChangeTheme from "./ChangeTheme";

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
