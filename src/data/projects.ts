export type ProjectDescriptionItem = {
  content: string;
};

export type Project = {
  name: string;
  home?: string;
  github?: string;
  start: string;
  end: string;
  description: ProjectDescriptionItem[];
};

export const projects: Project[] = [
  {
    name: "Menstruation Nation",
    home: "https://play.google.com/store/apps/details?id=com.tpp.theperiodpurse",
    github: "https://github.com/uoftblueprint/the-period-purse-2023",
    start: "Oct 04 2022",
    end: "Apr 04 2023",
    description: [
      {
        content:
          "Implemented secure backend and database for user data, including entities, models, DAOs, and modules.",
      },
      {
        content:
          "Created a cycle page displaying user-specific cycle details and average period statistics.",
      },
    ],
  },
  {
    name: "Graf-Gas",
    github: "https://github.com/Graf-Gas/graf-gas",
    start: "Oct 10 2021",
    end: "Jul 26 2024",
    description: [
      {
        content:
          "Automated a gas station’s data entry, transitioning from Excel to a SaaS application, accelerating operations by 300%.",
      },
      {
        content:
          "Established an in-house DevOps and CI/CD pipeline, halving deployment time for AWS-hosted micro-services.",
      },
    ],
  },
];
