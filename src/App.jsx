// Reactのコンポーネントとわかりやすいようにファイル名を『〜.jsx』とする
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentStyle = {
    color: "blue",
    fontSize: "50px"
  };
  return (
    // 不要な<div>をレンダリングさせないため、<>に置き換える
    <>
      {/* styleの当て方（タグに直接書き込む）
        外側の{}はJavaScriptを書きますよ印
        内側の{}はJavaScriptのオブジェクトの印
       */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* オブジェクトとしてstyleを割り当てる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      <p style={contentStyle}>hello</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルからも読み込めるようにexportする
export default App;
