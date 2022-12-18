import React, { useState } from "react";
import { useMemo } from "react";

const UseMemo = () => {
  const [state, setState] = useState(1);
  const [value, setValue] = useState(1);
  const multipleValueHandler = () => {
    console.log("faster function");
    setState(state + state);
  };

  const slowFunction = () => {
    console.log("slow function");
    setValue(value + value);
  };

  const isEven = useMemo(() => {
    console.log("clicked");
    for (let i = 0; i < 10000000000; i++) {}
    return value % 2 === 0;
  }, [value]);

  return (
    <div>
      <div>{state}</div>
      <div>{value}</div>
      <div>{isEven ? "even" : "odd"}</div>

      <button onClick={multipleValueHandler}>Multiply</button>
      <button onClick={slowFunction}>Plus</button>
    </div>
  );
};

export default UseMemo;
