import { createContext } from "react";

export const defaultProperties = {
  width: 10,
  height: 10,
  setWidth: (width: number) => {},
  setHeight: (height: number) => {},
};

const ApplicationProperties = createContext(defaultProperties);

export default ApplicationProperties;
