import * as path from "path";
import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/",
    component: path.resolve(__dirname, "./src/layouts/OneColumn/index.tsx"),
    context: {},
  });
};
