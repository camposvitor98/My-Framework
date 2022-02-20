import { createComponent } from "../../MyFramework/index.js";

const body = (props) => {
  const button = document.createElement("button");
  button.classList = "primary-button";
  button.innerHTML = props.label;
  button.addEventListener("click", props.onClick);
  return button;
};

export const Button = (props) => {
  const component = body(props);
  return createComponent(component, "@/Button/styles.css");
};
