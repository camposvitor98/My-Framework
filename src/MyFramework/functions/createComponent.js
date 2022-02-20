import { importStyle, createElement } from "../index.js";

export const createComponent = (component, stylePath) => {
  importStyle(stylePath.replace("@", "@/components"));

  return createElement(component);
};
