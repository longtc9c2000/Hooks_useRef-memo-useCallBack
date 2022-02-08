import { useState, useCallback } from "react";
import Content from "./Content";
import "./styles.css";
import Ref from "./useRef";
export default function App() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="App" sytle={{ padding: "10px, 30px" }}>
      <Content onIncrease={increase} />
      <h1>{count}</h1>
      <Ref />
    </div>
  );
}
