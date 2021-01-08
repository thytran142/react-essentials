import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
const [mostImportantItem, second, light] = ["boots", "tent", "headlamp"];
console.log(mostImportantItem, second, light);

ReactDOM.render(
    <App login={"thytran142"} />,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
