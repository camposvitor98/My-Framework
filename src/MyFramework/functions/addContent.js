import { createElement } from "../index.js";

const convert = (value) => {
  const tag = value[0] === "<" && value.replace(/.*<\/(.*)>.*/, "$1");
  if (tag) {
    const openingTag = value.split(">")[0] + ">";

    const attributes = openingTag
      .replace(`<${tag} `, "")
      .replace(">", "")
      .split("")
      .filter((value) => value != '"')
      .join("")
      .split(" ");

    const formattedAttributes = attributes.reduce((prev, current) => {
      const [key, value] = current.split("=");
      return { ...prev, [key]: value };
    }, {});
    const content = value.replace(openingTag, "").replace(`</${tag}>`, "");

    const element = createElement({
      elementTag: tag,
      content,
      attributes: formattedAttributes,
    });

    return element;
  }
  return value;
};

const selectTypeContent = (element, content) => {
  if (typeof content === "string") {
    const converted = convert(content);
    if (typeof converted === "string") {
      element.innerHTML += converted;
      return;
    }

    element.appendChild(converted);
  }
  if (typeof content === "object") {
    element.appendChild(content);
  }
};

export const addContent = (element, content) => {
  if (Array.isArray(content)) {
    content.forEach((contentItem) => {
      selectTypeContent(element, contentItem);
    });
    return;
  }
  selectTypeContent(element, content);
};
