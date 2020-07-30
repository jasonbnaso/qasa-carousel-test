import React from "react";

const Control = ({ controlDirection, onChange, pointer }) => (
  <div className={`carousel-arrow ${controlDirection}`} onClick={onChange}>
    {pointer}
  </div>
);
export default Control;