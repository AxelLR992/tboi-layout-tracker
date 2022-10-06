import React, { FunctionComponent, useContext } from "react";
import { Element as ElementClass } from "../../classes/Element";
import ApplicationProperties from "../../utils/applicationProperties";

interface IElementProps {
  onClick?: (element: ElementClass) => void;
  element: ElementClass;
}

const Element: FunctionComponent<IElementProps> = ({ onClick, element }) => {
  const context = useContext(ApplicationProperties);
  const selectedElement = context.element;
  const setSelectedElement = context.setElement;

  const handleClick = () => {
    setSelectedElement(element);
    if (onClick) onClick(element);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ cursor: `url(${selectedElement.image}) 4 12, pointer` }}
      >
        <img src={element.image} alt={element.name} />
      </button>
    </div>
  );
};

export default Element;
