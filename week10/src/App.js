import './App.css';
import { useRef } from 'react';

// function updatName(){
//   //DOM -- Document Object Model     
//   let myName = document.getElementById('myname');
//   myName.innerText = "Narongsak";
// }



function App() {
  let myName = useRef()
  let txtName = useRef()
  const getName = () =>{
    // let name = "Narongsak"
    let name = txtName.current.value
    myName.current.innerText = name
  }
  return (
    <>
      Enter Name: <input type="text" ref={txtName}/>
      <button onClick={getName}>Click me</button>
      <p ref={myName}>Name</p> 


      {/* <button onClick={updatName}>Click me</button> */}
       
    </>
  );
}

export default App;
