import { memo, useState } from "react";

function Content({ onIncrease }) {
  console.log("re-render");
  return (
    <div>
      <h2>hello eveyone</h2>;<button onClick={onIncrease}>Click me</button>
    </div>
  );
}

export default memo(Content);
