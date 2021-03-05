import React from "react";
import "./index.css";

const Loader = ({ className = "", pageLoader = false }) => {
  return (
    <div className={`${className} ${pageLoader ? "pixel-page-loader" : "loader"}`}>
      <div className="idsEllipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
