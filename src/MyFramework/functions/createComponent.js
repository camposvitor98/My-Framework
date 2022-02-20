import { importStyle } from "../index.js";

export const createComponent = (component, stylePath) => {
  const path = stylePath.replace("@", "@/components");

  importStyle(path);

  return component;
};
