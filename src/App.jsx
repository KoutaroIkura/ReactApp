import React from "react";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1>Hello!</h1>
      <p>How are you</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
