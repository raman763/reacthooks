import React from "react";

const UseState = () => {
  const [state, setState] = React.useState(true);

  const changeStateHandle = () => {
    setState((prev) => !prev);
  };
  return (
    <>
      <h3>{state ? "raman" : "jfk"}</h3>
      <button onClick={changeStateHandle}>Change Value</button>
    </>
  );
};

export default UseState;
