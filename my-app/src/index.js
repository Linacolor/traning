import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// const elem1 = React.createElement('span', { children: 'мир!' })
// const element = React.createElement('div', {
//   a: 4,
//   b: 5,
//   children: ['Привет', ' ', elem1],
// })
// const elem1 = <span>мир!</span>
// const element = <div>Привет {elem1}</div>
// console.log(element)
// function Paragraf(props) {
//   console.log(props)
//   return (
//     <div>
//       <p>Zzz</p>
//       <p>gfh</p>
//       <p>fhg</p>
//     </div>
//   )
// }

// ReactDOM.render(<Paragraf a="2" />, document.querySelector('#root'))
