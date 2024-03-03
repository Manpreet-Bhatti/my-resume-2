import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SectionTemplate from "../SectionTemplate";
import ContentTemplate from "../ContentTemplate";

const Education: React.FC = () => {
  const data = useStaticQuery(graphql`
    query EducationQuery {
      contentfulEducation {
        school
        start
        end
        degree
        coursework
        organizations
      }
    }
  `);

  return (
    <SectionTemplate title="Education">
      <ContentTemplate
        title={data.contentfulEducation.school}
        subtitle={data.contentfulEducation.degree}
        aside={`${data.contentfulEducation.start} \u2013 ${data.contentfulEducation.end}`}
        body={
          <div className="grid grid-cols-[max-content_auto] gap-x-[0.1in] gap-y-[0.15in] text-xs">
            <h4 className="font-medium">Relavent Coursework</h4>
            <ul className="flex flex-wrap gap-[0.1in]">
              {data.contentfulEducation.coursework.map(
                (course: string, i: number) => {
                  return <li key={i}>{course}</li>;
                },
              )}
            </ul>
            <h4 className="font-medium">Leadership and Clubs</h4>
            <ul className="flex flex-wrap gap-[0.1in]">
              {data.contentfulEducation.organizations.map(
                (organization: string, i: number) => {
                  return <li key={i}>{organization}</li>;
                },
              )}
            </ul>
          </div>
        }
      />
    </SectionTemplate>
  );
};

export default Education;
