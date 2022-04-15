import React, { FunctionComponent } from "react";
import "../../assets/styles/map-grid-item.scss";

interface IMapGridProps {
  children?: React.ReactElement;
}

const MapGrid: FunctionComponent<IMapGridProps> = ({ children }) => {
  return <div className="map-grid-item">{children}</div>;
};

export default MapGrid;
