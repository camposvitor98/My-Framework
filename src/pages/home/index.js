import { createPage } from "../../MyFramework/index.js";
import { Button } from "../../components/Button/index.js";

const body = (props) => {
  const container = document.createElement("div");
  container.classList = "home-container";
  container.appendChild(
    Button({
      onClick: () => window.alert("fui apertado"),
      label: "Me aperte!",
    })
  );
  return container;
};

export const HomePage = (props) => {
  const component = body(props);
  return createPage(component, "Home | Page", "@/home/styles.css", "/");
};
