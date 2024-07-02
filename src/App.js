import React, { Component, useState } from "react";
import ClassComponent from  "./classComponent";
import Student from  "./Student";
import Practice from "./Practice";

function App() {
  const [data,setData]=useState(null);
  const [print, setPrint] = useState(false);
  // render () {
  // //const practice= new Practice();
  // console.log(practice)

  function getData(value){
  console.log('value is ',value.target.value)
  setData(value.target.value)
  // setPrint(false)
  // value.target.value=false;
  }
return (
  <div>
  <h1>Props in React js  get value</h1>
  {/* <Student name="Anil"/> */}
  { print ? <h1>{data}</h1> : null }
  <h1>{print}</h1>
  <input type="text" placeholder="Enter your demo" onChange={getData} ></input>
  <button onClick={ ()=>setPrint(true)}>Show</button>

  {/* <Student name="sandeep" email="sandeep.pawar" address={{city:"pune",state:"maharashtra"}}/>
  <Student name="sandy" email={"sandy3pawar"} address={{city:"pune",state:"maharashtra"}}/> */}
  {/* <Student name = {Practice.getReactVersion()}/> */}
  </div>
)
}

export default App

// import {useState} from "react";

// function App() {
//   // let data= "new data";
//   //const name="John";
//   const [name,newName]=useState("sandeep")

// function updateData() {
//   newName('name updated')
// }
//     return(
//       <div>
//       <h1>Hello React</h1>
//       <h1>{name}</h1>
//       <button onClick={updateData}>update data</button>
//       </div>
//     )
// }



// export default App;




// // import logo from './logo.svg';
// // import './App.css';
// // import Users from './Users';
// // import Demo from './demo';
// // import ClassComponent from './classComponent';
// // function App() {
// //   let name = "John";
// //   // Apple();
// //   function Apple() {
// //     name="Apple name";
// //      // window.alert("Apple")
// //      <h1>{name}</h1>
// //       window.alert(name)
    
// //   }
// //   return (

// //   // <><h1>Hello World</h1><Users /></>
// //   <div className='myApp'>
// //     <h1>Hello World</h1>
// //     <h2>{name}</h2>
// //     <button onClick={Apple}>Apple</button>
// //     <button onClick={() => window.alert("Arrow")}>Arrow</button>
// //     {/* <Demo/>
// //     <Users></Users> */}
// //    {/* <ClassComponent/> */}
// //     </div>
// //   );
// // }
// // // function App() {
// // //   // Demo();
// // //   // Users();
// // //   return(
    
// // //   <div className='myApp'>
// // //     <Users></Users>
// // //     <b>Hello from new React app</b>
// // //     <br></br>
   
// // //     <input type="text" placeholder='Enter your name'></input>
// // //   </div>
// // //   )
// // // }

// // export default App;













// // // import logo from './logo.svg';
// // // import './App.css';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;
