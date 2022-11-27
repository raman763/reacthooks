import { useRef, useState } from "react";

const UseRef = () => {
  const [state, setstate] = useState();
  const InnerValue = useRef();

  // const changeHandle = () => {
  //   console.log("", value.current.value);
  // };
  const getHandle = () => {
    setstate(InnerValue.current.value);
  };

  return (
    <>
      <input autoFocus type="text" ref={InnerValue} />
      <h6>{state}</h6>
      <button onClick={getHandle}>Get Value</button>
    </>
  );
};

export default UseRef;
