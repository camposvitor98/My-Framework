import { renderPage, Router as RouterFactory } from "../MyFramework/index.js";
import { pages } from "../pages/index.js";

const Router = new RouterFactory();

export const router = () => {
  pages.forEach((page) => {
    Router.addRoute(page.path, renderPage(page.body, page.title));
  });

  Router.init();
};
