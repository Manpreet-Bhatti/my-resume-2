import { graphql, useStaticQuery } from "gatsby";
import { useMemo } from "react";

type QueryResult = {
  site: {
    siteMetadata: {
      title?: string;
      siteUrl?: string;
      blurb?: string;
      author?: string;
      description?: string;
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
