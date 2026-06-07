import * as React from "react";
import { RiGithubLine, RiPrinterLine } from "react-icons/ri";
import { ThemeProvider } from "./ThemeContext";
import ChangeTheme from "./ChangeTheme";
import ControlButton from "./ControlButton";

const NavMenu: React.FC = () => {
  return (
    <ThemeProvider>
      <nav className="fixed inset-[auto_1rem_0_auto] -translate-y-4 print:hidden flex flex-col gap-2">
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
    </ThemeProvider>
  );
};

export default NavMenu;
