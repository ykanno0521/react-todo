// Reactのコンポーネントとわかりやすいようにファイル名を『〜.jsx』とする

import React from "react";

const App = () => {
  return (
    // 不要な<div>をレンダリングさせないため、<>に置き換える
    <>
      <h1>こんにちは</h1>
      <p>hello</p>
    </>
  );
};

// 他のファイルからも読み込めるようにexportする
export default App;
