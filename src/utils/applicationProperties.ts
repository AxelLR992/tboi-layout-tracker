import { createContext } from "react";
import { Element } from "../classes/Element";
import layoutElements from "../data/layout-elements";

export const defaultProperties = {
  width: 10,
  height: 10,
  setWidth: (width: number) => {},
  setHeight: (height: number) => {},
  element: layoutElements[0],
  setElement: (element: Element) => {},
};

const ApplicationProperties = createContext(defaultProperties);

export default ApplicationProperties;
