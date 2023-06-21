import React from "react";

const ErrorMessage = ({ error }) => {
  console.log("Inside ErrorMessage error = ", error);
  return (
    <div style={{ background: "red", color: "white", padding: "20px" }}>
      {error}
    </div>
  );
};

export default ErrorMessage;
