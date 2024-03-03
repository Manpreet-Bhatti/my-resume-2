import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query EmailQuery {
      contentfulHeader {
        email
      }
    }
  `);

  return (
    <main className="flex h-full flex-col items-center justify-center bg-dark-background">
      <div className="grid grid-cols-[1fr] gap-[0.5rem]">
        <h1 className="text-center text-[1.5rem] text-dark-text">Uh oh 😬</h1>
        <p className="text-[1.1rem] text-dark-text">
          The resume you're looking for was not found.
          <br />
          Interested in my work?{" "}
          <a
            href={data.contentfulHeader.email}
            className="text-primary underline transition-colors duration-200 ease-in-out hover:text-primary-hover active:text-primary-active"
            target="_blank"
          >
            Let's get in touch
          </a>
          !
        </p>
        <hr className="w-full text-dark-alt-text" />
      </div>
      <Link
        to="/"
        className="mt-[0.5rem] w-fit rounded-[0.5rem] bg-primary px-[1.5rem] py-[0.5rem] text-dark-text transition-colors duration-200 hover:bg-primary-hover active:bg-primary-active"
      >
        Go back Home
      </Link>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => {
  return (
    <>
      <style>{`
            html, body, #___gatsby, #gatsby-focus-wrapper {
              height: 100%;
            }
          `}</style>
    </>
  );
};
