import { createPage } from "../../MyFramework/index.js";
import { Button } from "../../components/Button/index.js";

const body = (props) => {
  const container = {
    class: "home-container",

    content: [
      Button({
        onClick: () => window.alert("fui apertado"),
        label: "Me aperte!",
      }),
      '<p id="teste" class="class-teste">Olha eu sou um <strong>TEXTO</strong></p>',
    ],
  };
  return container;
};

export const HomePage = (props) => {
  const component = body(props);
  return createPage(component, "Home | Page", "@/home/styles.css", "/");
};
