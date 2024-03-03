import { graphql, useStaticQuery } from "gatsby";
import { useMemo } from "react";

type SocialLink = {
  url: string;
  type: string;
};

type QueryResult = {
  site: {
    siteMetadata: {
      title?: string;
      siteUrl?: string;
      blurb?: string;
      author?: string;
      description?: string;
      socials?: SocialLink[];
    };
  };
};

const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        blurb
        author
        description
        socials {
          url
          type
        }
      }
    }
  }
`;

export default function useMetadata() {
  const data: QueryResult = useStaticQuery(query);

  return useMemo(() => {
    return data.site.siteMetadata;
  }, [data]);
}
