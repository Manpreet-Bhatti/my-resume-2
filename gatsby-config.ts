const { description } = require("./package.json");
import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: "my-resume",
    siteUrl: "https://res.manpreetbhatti.com/",
    blurb: "Product Engineer @ Agentnoon",
    author: "Manpreet Bhatti",
    description,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.C_ACCESS_ID,
        spaceId: process.env.C_SPACE_ID,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages",
      },
      __key: "pages",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "manpreet-bhatti-resume",
        short_name: "mbhatti-resume",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#D40000",
        display: "minimal-ui",
        icon: "static/logo.svg",
      },
    },
  ],
};

export default config;
