import React, { FunctionComponent, useContext } from "react";
import ApplicationProperties from "../../utils/applicationProperties";
import Input from "../atoms/Input";

const AppProperties: FunctionComponent = () => {
  const { height, setHeight, width, setWidth } = useContext(
    ApplicationProperties
  );

  return (
    <div>
      <Input
        label="Width"
        type="number"
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
      />
      <Input
        style={{ marginTop: 10 }}
        label="Height"
        type="number"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
      />
    </div>
  );
};

export default AppProperties;
