import React from "react";
import image2 from "../../../assets/Rectangle4.png";
import MainHeaderWrapper from "./MainHeaderWrapper";

export const MainHeader = () => {
  return (
    <MainHeaderWrapper>
      <div className="rows">
        <div className="item">
          <img src={image2} alt="image" />
        </div>
      </div>
    </MainHeaderWrapper>
  );
};
