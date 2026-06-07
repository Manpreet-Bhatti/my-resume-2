import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  plugins: [
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
