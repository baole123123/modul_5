import logo from './logo.svg';
import './App.css';

////////////// tăng giảm
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0
//     };
//   }
//   increase = () => {
//     this.setState({ number: this.state.number + 1 });
//   };
//   decrease = () => {
//     if(this.state.number > 0)
//     this.setState({ number: this.state.number - 1  });
//   };
//   render(){
//     return (
//       <div style={{ textAlign: 'center' , padding: 30 }}>
//         <button onClick={this.increase}>Tăng</button>
//         <span style={{ padding: 10 }}>{this.state.number}</span>
//         <button onClick={this.decrease}>Giảm</button>
//       </div>
//     );
//   }
// }


// export default App;



/////////// xóa và khôi phục
// import React, { Component } from 'react';
// import Hello from "./Hello";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true
//     };
//   }

//   delete = () => {
//     this.setState({ display: false });
//   };
//   restore = () => {
//     this.setState({ display: true });
//   };

//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <Hello />;
//     }
//     return (
//       <div style={{ textAlign: 'center' }}>
//         {comp}
//         {this.state.display ? (
//           <button onClick={this.delete}>
//            Xóa 
//           </button>
//         ) : (
//           <button onClick={this.restore}>
//            Khôi phục
//           </button>
//         )}
//       </div>
//     );
//   }
// }

// export default App;




    



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
