import React, {useRef, useState} from 'react'

const MyState = () => {
        // value -- 
    let n = useRef();
    let [ name, setName ] = useState('name');

    let updetName = () =>{
        setName(n.current.value);
    }
  return (
    <>
        Enter Name: <input type="text" onChange={updetName} ref={n}/>
        {/* <button onClick={updetName}>Click me</button> */}
        <p>{name}</p> 

    </>
  )
}

export default MyState