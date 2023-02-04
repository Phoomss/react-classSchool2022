import React, { useRef, useState} from 'react'

const AppItem = () => {
    let [ numItem, setNumItem] = useState(0);
        let addItem = () =>{
            let n = numItem;
            n++;
            setNumItem(n);
        }

        let removeItem = () =>{
            let n = numItem;
            n--;
            setNumItem(n);
        }


  return (
    <>
        <button onClick={removeItem}>-</button>
        <input type="text" style={{ textAlign: 'center'}} value={numItem}/>
        <button onClick={addItem}>+</button>
    </>
  )
}

export default AppItem