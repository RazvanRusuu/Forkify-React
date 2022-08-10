import React from "react";

const Error = (props) => {
  return (
    <div className="center-box">
      <h2 className="error">{props.msg}</h2>
    </div>
  );
};

export default Error;
