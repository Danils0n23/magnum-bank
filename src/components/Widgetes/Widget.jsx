import React from "react";

const Widget = ({ title, value, color }) => (
  <div
    className="p-3 rounded text-white mb-3"
    style={{ backgroundColor: color }}
  >
    <div className="fw-bold">{title}</div>
    <div className="fs-4">{value}</div>
  </div>
);

export default Widget;
