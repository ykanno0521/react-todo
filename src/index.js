// reactを使うときのお作法（jsxだけを使用する場合必要なし）
import React from "react";

import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>hello</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
