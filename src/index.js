// 从react的包当中引入了React
import React from "react";
// ReactDOM把React组件渲染到页面上
import ReactDOM from "react-dom/client";

import App1 from "./01-base/01-class组件";
import App2 from "./01-base/02-函数式组件";
import App3 from "./01-base/03-组件的嵌套";
import App4 from "./01-base/04-组件的样式";
import App51 from "./01-base/05-事件绑定-1";
import App52 from "./01-base/05-事件绑定-2";

// ReactDOM.render("111", document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <section>
    <App1></App1>
    <hr></hr>
    <App2></App2>
    <hr></hr>
    <App3></App3>
    <hr></hr>
    <App4></App4>
    <hr></hr>
    <App51></App51>
    <hr></hr>
    <App52></App52>
  </section>
);
// JSXJavaScript XML
