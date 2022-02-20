import { setPageBody } from "./setPageBody.js";
import { setPageTitle } from "./setPageTitle.js";

export const renderPage = (body, title) => {
  body && setPageBody(body);
  title && setPageTitle(title);
};
