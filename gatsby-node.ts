import * as path from "path";
import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/",
    component: require.resolve("./src/layouts/OneColumn/index.tsx"),
    context: {},
  });
};
