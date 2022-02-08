import { memo, useState, useEffect, useRef } from "react";

function Ref() {
  const [count, setCount] = useState(60);

  const timeId = useRef();
  const prevcount = useRef();

  useEffect(() => {
    prevcount.current = count;
  }, [count]);
  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    console.log("start ->", timeId.current);
  };
  console.log(count, prevcount.current);
  const handleStop = () => {
    clearInterval(timeId.current);
    console.log("stop ->", timeId.current);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default memo(Ref);
