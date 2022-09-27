import React, { FunctionComponent } from "react";
import "../../assets/styles/map-grid-item.scss";

interface IMapGridItemProps {
  children?: React.ReactNode;
}

const MapGridItem: FunctionComponent<IMapGridItemProps> = ({ children }) => {
  return <div className="map-grid-item">{children}</div>;
};

export default MapGridItem;
