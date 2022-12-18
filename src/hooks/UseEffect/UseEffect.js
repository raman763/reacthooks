import React, { useEffect, useId } from "react";
import { useState } from "react";

const UseEffect = () => {
  // const [state, setState] = useState("posts");
  const [inputs, setInputs] = useState([]);
  const id = useId();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) =>
      response.json().then((response) => setInputs(response))
    );
  }, []);

  // console.log(inputs);

  return (
    <div>
      {/* <button onChange={() => setState("posts")}>post</button> */}
      {inputs.map((input, index) => {
        return <pre key={index}>{JSON.stringify(input.title)}</pre>;
      })}
    </div>
  );
};

export default UseEffect;
