import React from "react";

const Encart = ({ encart }) => {
  // const [closed, setClosed] = useState(false);
  return (
    //<div className={`Encart ${closed ? "Encart__closed" : ""}`}>
    <div className="Encart">
      <p>{encart.info}</p>
      {/*       <span className="Encart__close" onClick={() => setClosed(true)}>
        <FaTimes />
      </span> */}
    </div>
  );
};

export default Encart;
