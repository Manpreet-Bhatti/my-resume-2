export type DescriptionItem = {
  content: string;
  label?: string;
  link?: string;
  github?: string;
};

export type Job = {
  company: string;
  home?: string;
  position: string;
  start: string;
  end: string;
  description: DescriptionItem[];
};

export const work: Job[] = [
  {
    company: "Dayforce",
    home: "https://dayforce.com/",
    position: "Software Developer, Strategic Workforce Planning",
    start: "Jan 03 2023",
    end: "Jan 03 2023",
    description: [
      {
        content:
          "Implemented a feature to allow for users to merge workforce data from multiple sources, improving data accuracy and reducing manual reconciliation efforts.",
      },
      {
        content:
          "Developed an operating model to streamline project management with task allocation, timeline projection, and cost analysis, boosting clients' project efficiency by an average of 30%.",
      },
      {
        content:
          "Launched a core feature for real-time visualization of planned headcount changes, aiding better resource allocation.",
      },
      {
        content:
          "Led development of an S&P 500 benchmarking tool, delivering critical industry-specific OpEx insights to executives.",
        link: "https://benchmark.agentnoon.com/",
        label: "Spending benchmark tool",
      },
    ],
  },
  {
    company: "Critical Mass",
    home: "https://criticalmass.com/",
    position: "Front End Development Intern",
    start: "May 16 2022",
    end: "Aug 19 2022",
    description: [
      {
        content:
          "Led the content and design update for the 2023 Nissan Maxima, contributing to a projected sales increase of approximately 62%.",
        link: "https://www.nissanusa.com/vehicles/cars/maxima.html",
        label: "2023 Nissan Maxima",
      },
      {
        content:
          "Developed an iOS automation tool for fleet drivers, automating vehicle status and driving statistic reporting, leading to a 70% increase in efficiency.",
      },
      {
        content:
          "Developed and integrated key features for the ARIYA EV's support chatbot, enhancing user experience and interaction.",
      },
    ],
  },
  {
    company: "Zonado",
    home: "https://zonado.com/",
    position: "Software Development Intern",
    start: "Mar 14 2022",
    end: "May 02 2022",
    description: [
      {
        content:
          "Redesigned and optimized user flow of high-traffic web pages, significantly enhancing the user experience.",
      },
      {
        content:
          "Led the identification of SaaS requirements and independently executed a framework migration, increasing operational flexibility.",
      },
      {
        content:
          "Established a robust payment platform with incentives, resulting in a 2x increase in sales.",
        link: "https://zonado.com/pro",
        label: "Robust payment platform",
      },
    ],
  },
];
