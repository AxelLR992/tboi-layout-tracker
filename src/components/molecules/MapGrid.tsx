import React, { FunctionComponent, useEffect, useState } from "react";
import "../../assets/styles/map-grid.scss";
import MapGridItemDto from "../../classes/MapGridItemDto";

import MapGridItem from "../atoms/MapGridItem";

interface IMapGridProps {
  height: number;
  width: number;
}

const generateContent = (width: number, height: number) => {
  const newContent = [];
  // Loop through y
  for (let i = 1; i <= height; i++) {
    // Loop through x
    for (let j = 1; j <= width; j++) {
      const newItem = new MapGridItemDto(i, j);
      newContent.push(newItem);
    }
  }

  return newContent;
};

const MapGrid: FunctionComponent<IMapGridProps> = ({ height, width }) => {
  const [content, setContent] = useState<MapGridItemDto[]>(
    generateContent(width, height)
  );

  useEffect(() => {
    setContent(generateContent(width, height));
  }, [height, width]);

  return (
    <div className="map-grid">
      {content.map((item, index) => {
        if ((index + 1) % width === 0)
          return (
            <>
              <MapGridItem key={index} /> <br />
            </>
          );
        return <MapGridItem key={index} />;
      })}
    </div>
  );
};

export default MapGrid;
