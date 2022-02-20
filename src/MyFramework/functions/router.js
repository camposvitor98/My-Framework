export class Router {
  constructor() {
    this.routes = [];
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    this.handleLocation();
  }

  addRoute(route, callback) {
    this.routes.push({ route, callback });
  }

  handleLocation() {
    const path = window.location.pathname;
    const route =
      this.routes.find((route) => route.route === path) ||
      this.routes.find((route) => route.route === 404);
    if (route && route.callback && typeof route.callback === "function") {
      route.callback();
    }
  }

  init() {
    window.onpopstate = this.handleLocation;
    window.route = this.route;
    this.handleLocation();
  }
}
