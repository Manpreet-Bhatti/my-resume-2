import * as React from "react";
import SectionTemplate from "../SectionTemplate";
import ContentTemplate from "../ContentTemplate";
import { education } from "../../../data/education";

const Education: React.FC = () => {
  return (
    <SectionTemplate title="Education">
      <ContentTemplate
        title={education.school}
        subtitle={education.degree}
        aside={`${education.start} – ${education.end}`}
        body={
          <div className="grid grid-cols-[max-content_auto] gap-x-[0.1in] gap-y-[0.15in] text-xs">
            <h4 className="font-medium">Relevant Coursework</h4>
            <ul className="flex flex-wrap gap-[0.1in]">
              {education.coursework.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
            <h4 className="font-medium">Leadership and Clubs</h4>
            <ul className="flex flex-wrap gap-[0.1in]">
              {education.organizations.map((organization, i) => (
                <li key={i}>{organization}</li>
              ))}
            </ul>
          </div>
        }
      />
    </SectionTemplate>
  );
};

export default Education;
