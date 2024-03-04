import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SectionTemplate from "../SectionTemplate";

type Skills = {
  list: string[];
  title: string;
};

const Skills: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      contentfulListOfSkills {
        skills {
          list
          title
        }
      }
    }
  `);

  return (
    <SectionTemplate title="Skills">
      <div className="mt-4 grid grid-cols-[min-content_auto] gap-x-[0.1in] gap-y-[0.15in]">
        {data.contentfulListOfSkills.skills.map(
          (skills: Skills, key: number) => {
            return (
              <React.Fragment key={key}>
                <h3 className="text-sm font-medium text-primary">
                  {skills.title}
                </h3>
                <ul className="flex flex-wrap gap-[0.1in]">
                  {skills.list.map((item) => (
                    <li className="text-xs text-alt-text" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            );
          },
        )}
      </div>
    </SectionTemplate>
  );
};

export default Skills;
