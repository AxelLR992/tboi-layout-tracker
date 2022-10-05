import React, { FunctionComponent } from "react";
import layoutElements from "../../data/layout-elements";
import "../../assets/styles/layout-elements.scss";
import Element from "../atoms/Element";
import { Element as ElementClass } from "../../classes/Element";

const LayoutElements: FunctionComponent = () => {
  const handleElementClick = (element: ElementClass) => {
    alert(element.name);
  };

  return (
    <div className="layout-elements">
      {layoutElements.map((element) => (
        <Element
          element={element}
          key={element.name}
          onClick={handleElementClick}
        />
      ))}
    </div>
  );
};

export default LayoutElements;
