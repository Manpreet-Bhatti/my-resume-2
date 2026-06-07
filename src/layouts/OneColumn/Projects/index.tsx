import * as React from "react";
import SectionTemplate from "../SectionTemplate";
import useDateFormat from "../../../utils/useDateFormat";
import ContentTemplate from "../ContentTemplate";
import { projects, type ProjectDescriptionItem } from "../../../data/projects";

const Projects: React.FC = () => {
  const format = useDateFormat;

  return (
    <SectionTemplate title="Projects">
      {projects.map((project, key) => (
        <ContentTemplate
          key={key}
          title={project.name}
          home={project.home}
          github={project.github}
          aside={format(project.start, project.end)}
          body={
            <ul className="grid grid-cols-[1fr] gap-[0.075in]">
              {project.description.map(
                (content: ProjectDescriptionItem, i: number) => (
                  <li
                    key={i}
                    className="inline-flex items-center gap-x-1 text-xs"
                  >
                    {content.content}
                  </li>
                ),
              )}
            </ul>
          }
        />
      ))}
    </SectionTemplate>
  );
};

export default Projects;
