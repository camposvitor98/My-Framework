import { selector } from "./selector.js";

export const setPageTitle = (title) =>
  (selector("#page-title").innerText = title);
