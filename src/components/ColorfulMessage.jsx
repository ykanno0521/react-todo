import React from "react";

const ColorfulMeassage = (props) => {
  console.log(props);
  // 毎回propsを書くのは面倒なので、分割代入を使用する
  const { color, children } = props;
  const contentStyle = {
    // color: "blue",

    // プロパティ名と同じ時は省略できる
    // color: color,
    color,
    fontSize: "18px"
  };

  // return <p style={contentStyle}>お元気ですか</p>;
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMeassage;
