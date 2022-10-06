import React, { FunctionComponent } from "react";
import layoutElements from "../../data/layout-elements";
import "../../assets/styles/layout-elements.scss";
import Element from "../atoms/Element";

const LayoutElements: FunctionComponent = () => {
  return (
    <div className="layout-elements">
      {layoutElements.map((element) => (
        <Element element={element} key={element.name} />
      ))}
    </div>
  );
};

export default LayoutElements;
