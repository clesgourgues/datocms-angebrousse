import React from "react";

const SizesSelect = ({ size, availableSizes, setSize }) => {
  return (
    <div className="Select">
      <span>Taille </span>
      <select value={size} onChange={e => setSize(e.target.value)} className="Select__size">
        {availableSizes.map(size => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizesSelect;
