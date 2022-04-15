import React, { FunctionComponent } from "react";
import "../../assets/styles/main-layout.scss";

interface IMainLayoutProps {
  elementsTitle?: string;
  propertiesTitle?: string;
  gridTitle?: string;
  elementsContent: React.ReactElement;
  propertiesContent: React.ReactElement;
  gridContent: React.ReactElement;
}

const MainLayout: FunctionComponent<IMainLayoutProps> = ({
  elementsTitle = "Elements",
  propertiesTitle = "Properties",
  gridTitle,
  elementsContent,
  gridContent,
  propertiesContent,
}) => {
  return (
    <div className="main-layout">
      <div>
        {elementsTitle && (
          <>
            <h2>{elementsTitle}</h2>
            <hr />
          </>
        )}
        {elementsContent}
      </div>
      <div>
        {gridTitle && <h2>{gridTitle}</h2>}
        {gridContent}
      </div>
      <div>
        {propertiesTitle && (
          <>
            <h2>{propertiesTitle}</h2>
            <hr />
          </>
        )}
        {propertiesContent}
      </div>
    </div>
  );
};

export default MainLayout;
