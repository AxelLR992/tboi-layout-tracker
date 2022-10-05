import React, { FunctionComponent } from "react";
import { Element as ElementClass } from "../../classes/Element";

interface IElementProps {
  onClick: (element: ElementClass) => void;
  element: ElementClass;
}

const Element: FunctionComponent<IElementProps> = ({ onClick, element }) => {
  const handleClick = () => {
    onClick(element);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={element.image} alt={element.name} />
      </button>
    </div>
  );
};

export default Element;
