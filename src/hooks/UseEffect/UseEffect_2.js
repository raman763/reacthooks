import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("render");
    return () => {
      console.clear();
    };
  }, [count]);

  const increaseHandle = () => {
    setCount((prev) => prev + 1);
  };
  const mulitpleHandle = () => {
    setCount((prev) => prev * 2);
  };
  return (
    <>
      <h5>{count}</h5>

      <button onClick={increaseHandle}>Increase</button>
      <button onClick={mulitpleHandle}>Multiply</button>
    </>
  );
};

export default UseEffect;
