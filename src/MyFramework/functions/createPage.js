import { importStyle } from "../index.js";

export const createPage = (page, title, stylePath, path) => {
  const pathFormatted = stylePath.replace("@", "@/pages");

  importStyle(pathFormatted);

  return {
    body: page,
    title,
    path,
  };
};
