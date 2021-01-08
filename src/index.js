import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  React.createElement(
      "ul",
      null,
      React.createElement("li", null, "Monday"),
      React.createElement("li", null, "Tuesday"),
      React.createElement("li", null, "Wednesday"),
      React.createElement("li", null, "Thursday")
  ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
