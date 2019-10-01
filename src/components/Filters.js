import React from "react";

const Filters = ({ filters, selected, onClick }) => (
  <div className="Filters">
    <span
      onClick={() => onClick("tout voir")}
      className={`Filter ${selected === "tout voir" ? "Filter__selected" : ""}`}
    >
      tout voir
    </span>
    {filters.map(({ node: filter }) => (
      <div key={filter.name}>
        <span className="Filter__separator">/</span>
        <span
          onClick={() => onClick(filter.name)}
          className={`Filter ${selected === filter.name ? "Filter__selected" : ""}`}
        >
          {filter.name}
        </span>
      </div>
    ))}
  </div>
);

export default Filters;
