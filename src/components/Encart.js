import React, { useState } from "react";

const Encart = ({ encart }) => {
  const [closed, setClosed] = useState(false);
  if (closed) {
    return null;
  }
  return (
    <div className="Encart">
      <p>{encart.info}</p>
      <span className="Encart__close" onClick={() => setClosed(true)}>
        X
      </span>
    </div>
  );
};

export default Encart;
