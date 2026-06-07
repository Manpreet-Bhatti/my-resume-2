import * as React from "react";
import SectionTemplate from "../SectionTemplate";
import { skills } from "../../../data/skills";

const Skills: React.FC = () => {
  return (
    <SectionTemplate title="Skills">
      <div className="mt-4 grid grid-cols-[min-content_auto] gap-x-[0.1in] gap-y-[0.15in]">
        {skills.map((group, key) => (
          <React.Fragment key={key}>
            <h3 className="text-sm font-medium text-primary">{group.title}</h3>
            <ul className="flex flex-wrap gap-[0.1in]">
              {group.list.map((item) => (
                <li
                  className="text-xs text-alt-text dark:text-dark-alt-text"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </SectionTemplate>
  );
};

export default Skills;
