import { selector } from "./selector.js";

export const setPageBody = (body) =>
  selector("#body-container").appendChild(body);
