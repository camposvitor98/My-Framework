import { selector } from "./selector.js";

export const importStyle = (stylePath) => {
  const path = stylePath.replace("@", "./src");
  const fullPath = `@import url("${path}");`;

  selector("style").innerHTML += fullPath;
};
