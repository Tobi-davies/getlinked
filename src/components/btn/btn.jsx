import React from "react";
import "./btn.scss";
import LoadingSpinner from "../loading-spinner/loading-spinner";

const Btn = ({ onClick, loading, children, width = "140px" }) => {
  return (
    <button onClick={onClick} style={{ height: "40px", width: `${width}` }}>
      {loading && <LoadingSpinner />}
      <span>{children}</span>
    </button>
  );
};

export default Btn;
