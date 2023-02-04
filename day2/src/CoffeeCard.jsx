import React from 'react'


const CoffeeCard = (props) => {
  return (
    <div style={divStyle}>
        <div style={{textAlign:"center"}}>
            <img src={require(`./${props.picture}`)} 
            alt="" 
            style={{width:300}}/>
        </div>
        <p style={textStyle}>Name: {props.name}</p>
        <p style={textStyle}>
            <strong>Price</strong>
        </p>
        <p style={textStyle}>Hot: {props.price.hot}</p>
        <p style={textStyle}>Cold: {props.price.cold}</p>
        <p style={textStyle}>Frappe: {props.price.frappe}</p>
    </div>
  )
}
const divStyle={
    border: '1px solid black',
    borderRadius:5,
    padding:20,
    marginLeft:'20%',
    marginRight:'20%',
    marginBottom:15,
    fontWeight:'bold',
    fontFamily:'courier',
}
const textStyle={
    marginBottom:10,
}
const img={
    with:35,
}

export default CoffeeCard