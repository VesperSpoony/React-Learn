// 从react的包当中引入了React
import React from 'react';
// ReactDOM把React组件渲染到页面上
import ReactDOM from 'react-dom/client';

import App from './01-base/01-class'

// ReactDOM.render("111", document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
// JSXJavaScript XML