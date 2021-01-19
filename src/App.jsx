// Reactのコンポーネントとわかりやすいようにファイル名を『〜.jsx』とする
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  // useStateで使ったていく変数を設定する

  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "50px"
  // };

  useEffect(() => {
    console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line
  }, [num]);

  return (
    // 不要な<div>をレンダリングさせないため、<>に置き換える
    <>
      {/* styleの当て方（タグに直接書き込む）
        外側の{}はJavaScriptを書きますよ印
        内側の{}はJavaScriptのオブジェクトの印
       */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* オブジェクトとしてstyleを割り当てる */}
      {/* <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage> */}
      {/* <p style={contentStyle}>hello</p> */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

// 他のファイルからも読み込めるようにexportする
export default App;
