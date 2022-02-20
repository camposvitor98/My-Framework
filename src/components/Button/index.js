import { createComponent } from "../../MyFramework/index.js";

const body = (props) => {
  const button = {
    elementTag: "button",
    class: "primary-button",

    content: props.label,
    onClick: props.onClick,
  };
  return button;
};

export const Button = (props) => {
  const component = body(props);
  return createComponent(component, "@/Button/styles.css");
};
