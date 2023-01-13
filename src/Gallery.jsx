import React from "react";
import { Idata } from "./Idata";

const Gallery = () => {
  return (
    <>
      {Idata.map((item) => {
        return (
          <div className="pictures">
            <img alt="" src={item} />
          </div>
        );
      })}
    </>
  );
};
export default Gallery;
