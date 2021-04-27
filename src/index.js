import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import LeftPanel from './leftpanel.js';
import RightPanel from './rightpanel.js';

class Dell extends React.Component {
  render() {
    return <div>
      <LeftPanel />
      <RightPanel />
      </div>
    /* <button onClick={this.buttonclick}>Click here</button></div> */
  }
//   buttonclick() {
//     ReactDOM.render(
//     <Dell2 />,
//   document.getElementById('root')
// );
//   }
}



ReactDOM.render(
    <Dell />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
