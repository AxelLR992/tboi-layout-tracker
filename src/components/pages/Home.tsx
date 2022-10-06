import React, { FunctionComponent, useEffect, useState } from "react";
import ApplicationProperties from "../../utils/applicationProperties";
import AppElements from "../organisms/AppElements";
import AppProperties from "../molecules/AppProperties";
import MapGrid from "../molecules/MapGrid";
import MainLayout from "../templates/MainLayout";
import layoutElements from "../../data/layout-elements";

const Home: FunctionComponent = () => {
  const [properties, setProperties] = useState({
    width: 10,
    height: 10,
  });
  const [element, setElement] = useState(layoutElements[0]);

  const contextValue = {
    ...properties,
    setWidth: (width: number) => setProperties({ ...properties, width }),
    setHeight: (height: number) => setProperties({ ...properties, height }),
    element,
    setElement,
  };

  useEffect(() => {
    document.body.style.cursor = `url(${element.image}) 4 12, auto`;
  }, [element]);

  return (
    <ApplicationProperties.Provider value={contextValue}>
      <MainLayout
        elementsContent={<AppElements />}
        gridContent={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <MapGrid width={properties.width} height={properties.height} />
          </div>
        }
        propertiesContent={<AppProperties />}
      />
    </ApplicationProperties.Provider>
  );
};

export default Home;
