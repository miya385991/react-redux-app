import React, {Component } from 'react';
import { render } from '@testing-library/react';

// class App extends Component {
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text"
//           onChange={() => {console.log("I am clicke")
//           }} />
//       </React.Fragment>
//       )
//  }
// }

const App = () => {
  return <div>
    <Cat />
    <Cat />
    <Cat />
         </div>
}
const Cat = () => {
  return <div>Mewo!</div>
}

export default App;
