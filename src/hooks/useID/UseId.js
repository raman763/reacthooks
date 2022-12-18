import React from "react";
import { useId } from "react";

const UseId = () => {
  const id = useId();
  const names = [
    {
      name: "ankit",
    },
    {
      name: "arjun",
    },
    {
      name: "abhi",
    },
  ];

  return (
    <>
      {names.map((name) => (
        <>
          <label htmlFor={id}>{name.name}</label>
          <input id={id} placeholder="hkjhj" type="text" />
        </>
      ))}
    </>
  );
};

export default UseId;
