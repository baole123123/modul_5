import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Computer from './Computer';
import Crud from './Crud';
import Hook from './Hook';
import Vd from './Vd';
import Effect from './Effect';
import Time from './Time';
import StudentManage from './StudentManage';
import Form from './Form';
import BookManage from './BookManage';
import DemoFormik from './Form';

// const name = "fuck you";

// const mystyle = {
//   color: "black",
//   backgroundColor: "DodgerBlue",
  
// };
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <h1 style={mystyle}>{name}</h1>
  <BookManage/>
  );

  // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
