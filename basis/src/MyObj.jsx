import React from 'react'

const MyObj = () => {
    let myInfo = {
        name: "Narongsak",
        tel: "0999999999",
        email: ["dfdfdf@gmail.com","fgjfigjf@fdgfdgkf.gfg"],
        line: "6545dff",
        address:{
            home: "add rd. Losandjalis, 999",
            office: "999 Forida, 888"
        }
    }
    return (
    <>
        <h1>Name: {myInfo.name}</h1>
        <p>tel: {myInfo.tel}</p>
        <p>E-mail: {myInfo.email[0]}</p>
        <p>E-mail: {myInfo.email[1]}</p>
        <p>line: {myInfo.line}</p>
        <p>Address (H): {myInfo.address.home}</p>
        <p>Address (O): {myInfo.address.office}</p>
    </>
  )
}

export default MyObj