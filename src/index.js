// reactを使うときのお作法（jsxだけを使用する場合必要なし）
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
