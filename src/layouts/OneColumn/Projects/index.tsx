import * as React from "react";
import SectionTemplate from "../SectionTemplate";
import useDateFormat from "../../../utils/useDateFormat";
import { graphql, useStaticQuery } from "gatsby";
import ContentTemplate from "../ContentTemplate";

type DescriptionItem = {
  content: string;
};

type Project = {
  name: string;
  home?: string;
  github?: string;
  description: DescriptionItem[];
  start: string;
  end: string;
};

const Projects: React.FC = () => {
  const format = useDateFormat;
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      contentfulListOfProjects {
        projects {
          name
          home
          github
          start(formatString: "MMM DD YYYY")
          end(formatString: "MMM DD YYYY")
          description {
            content
          }
        }
      }
    }
  `);

  console.log(data.contentfulListOfProjects);

  return (
    <SectionTemplate title="Projects">
      {data.contentfulListOfProjects.projects.map(
        (project: Project, key: number) => {
          return (
            <ContentTemplate
              key={key}
              title={project.name}
              home={project.home}
              github={project.github}
              aside={format(project.start, project.end)}
              body={
                <ul className="grid grid-cols-[1fr] gap-[0.075in]">
                  {project.description.map((content, i) => {
                    return (
                      <li
                        key={i}
                        className="inline-flex items-center gap-x-1 text-xs"
                      >
                        {content.content}
                      </li>
                    );
                  })}
                </ul>
              }
            />
          );
        },
      )}
    </SectionTemplate>
  );
};

export default Projects;
