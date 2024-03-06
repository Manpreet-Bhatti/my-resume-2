import * as React from "react";
import SectionTemplate from "../SectionTemplate";
import ContentTemplate from "../ContentTemplate";
import { useStaticQuery, graphql } from "gatsby";
import useDateFormat from "../../../utils/useDateFormat";
import { FiGithub, FiLink } from "react-icons/fi";

type DescriptionItem = {
  content: string;
  label?: string;
  link?: string;
  github?: string;
};

type Job = {
  start: string;
  end: string;
  company: string;
  home?: string;
  position: string;
  description: DescriptionItem[];
};

const Work: React.FC = () => {
  const format = useDateFormat;
  const data = useStaticQuery(graphql`
    query WorkQuery {
      contentfulListOfWork {
        work {
          start(formatString: "MMM DD YYYY")
          end(formatString: "MMM DD YYYY")
          company
          home
          position
          description {
            content
            label
            link
          }
        }
      }
    }
  `);

  return (
    <SectionTemplate title="Work">
      {data.contentfulListOfWork.work.map((job: Job, key: number) => {
        return (
          <ContentTemplate
            key={key}
            title={job.company}
            subtitle={job.position}
            aside={format(job.start, job.end)}
            home={job.home}
            body={
              <ul className="grid grid-cols-[1fr] gap-[0.075in]">
                {job.description.map((content, i) => {
                  return (
                    <li
                      key={i}
                      className="inline-flex items-center gap-x-1 text-xs"
                    >
                      {content.content}
                      {content.github && content.label && (
                        <a
                          aria-label={content.label}
                          rel="noreferrer noopenner"
                          className="dark:hover:bg-dark-hover-page dark:active:bg-dark-active-page rounded-md p-2 transition-colors duration-200 hover:bg-hover-page active:bg-active-page"
                          target="_blank"
                          href={content.link}
                        >
                          <FiGithub className="h-3 w-3 text-primary" />
                        </a>
                      )}
                      {content.link && (
                        <a
                          aria-label={content.label}
                          rel="noreferrer noopenner"
                          className="dark:hover:bg-dark-hover-page dark:active:bg-dark-active-page rounded-md p-2 transition-colors duration-200 hover:bg-hover-page active:bg-active-page"
                          target="_blank"
                          href={content.link}
                        >
                          <FiLink className="h-3 w-3 text-primary" />
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            }
          />
        );
      })}
    </SectionTemplate>
  );
};

export default Work;
