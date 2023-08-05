import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div classNam="App">
      <h1>Hello CodeSandbox</h1>
      <p>{count}</p>
      <button onClick={onClickCountUp}>Count up </button>
    </div>
  );
}
