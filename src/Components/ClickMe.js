import React, { useState } from "react";

const ClickMe = () => {
  const [data, setData] = useState(0);

  const clickHandle = () => {
    setData(data + 1);
  };
  return (
    <div>
      <h1>{data}</h1>
      <button className="btn btn-success" onClick={clickHandle}>
        ClickMe
      </button>
    </div>
  );
};

export default ClickMe;
