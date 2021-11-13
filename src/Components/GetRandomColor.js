import React, { useState } from "react";

const GetRandomColor = () => {
  const [color, setColor] = useState("");
  const randomColorgenerator = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      //document.body.style.backgroundColor = color;
    }

    return color;
  };

  const getColor = () => {
    var getcolor = randomColorgenerator;
    setColor(getcolor);
    document.body.style.backgroundColor = color;
    console.log(color);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={getColor}>
        GetRandomBackGround
      </button>
    </div>
  );
};

export default GetRandomColor;
