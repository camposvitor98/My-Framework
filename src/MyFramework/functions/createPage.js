import { importStyle, createElement } from "../index.js";

export const createPage = (page, title, stylePath, path) => {
  importStyle(stylePath.replace("@", "@/pages"));

  return {
    body: createElement(page),
    title,
    path,
  };
};
