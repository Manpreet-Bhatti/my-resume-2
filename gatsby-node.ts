import * as path from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;

  try {
    createPage({
      path: "/",
      component: path.resolve("./src/layouts/OneColumn/index.tsx"),
      context: { withButtons: true },
    });
  } catch (error) {
    console.error("Error creating pages:", error);
  }
};
