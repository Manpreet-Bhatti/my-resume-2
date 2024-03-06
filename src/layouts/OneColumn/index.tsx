import * as React from "react";
import type { PageProps } from "gatsby";
import Base from "../../components/Base";
import Paper from "../../components/Paper";
import Header from "./Header";
import Work from "./Work";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
export { Head } from "../../components/Base";

const OneColumn: React.FC<PageProps> = (props) => {
  return (
    <Base withMenu>
      <Paper classNames="flex-col flex">
        <Header />
        <Skills />
        <Work />
        <Education />
        <Projects />
      </Paper>
    </Base>
  );
};

export default OneColumn;
