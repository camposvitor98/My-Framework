import { addContent } from "../index.js";

// @TODO #1 - add dynamic props on create element

/*
@ Example (do not work)
  key: {
      tag: "onclick",
      type: "attribution",
      value: props.onClick,
    },

  get {keys} with {...rest} on component



  const addProp = {
    attribution: (element, prop) => {
      element[prop.tag] = prop.value;
    },
    increment: (element, prop) => {
      element[prop.tag] += prop.value;
    },
    increment: (element, prop) => {
      element[prop.tag](prop.value);
    },
  };


  add this property before return

  Object.values(rest).forEach((prop) => {
    addProp[prop.type](element, prop);
  });
*/

const addEvents = (element, events) => {
  if (events && events.length) {
    events.forEach(({ event, callback }) => {
      element.addEventListener(event, () => callback());
    });

    return element;
  }

  return element;
};

const handleAddAttributes = (element, attributes) => {
  const {
    class: classList,
    id,
    type,
    onclick: onClick,
    onchange: onChange,
  } = attributes;

  if (classList) element.classList = classList;
  if (id) element.id = id;

  if (type) element.type = type;

  if (onClick) element.onclick = onClick;
  if (onChange) element.onclick = onChange;
};

export const createElement = (component) => {
  const {
    elementTag = "div",
    class: classList,
    eventListener,
    eventListeners,
    id,
    content,
    onClick,
    onChange,
    type,
    attributes,
  } = component;
  const element = document.createElement(elementTag);

  if (classList) element.classList = classList;
  if (id) element.id = id;

  content && addContent(element, content);

  if (type) element.type = type;

  if (onClick) element.onclick = onClick;
  if (onChange) element.onclick = onChange;

  attributes && handleAddAttributes(element, attributes);

  eventListener &&
    element.addEventListener(eventListener.event, eventListener.callback);

  return addEvents(element, eventListeners);
};
