// import React, { Component } from 'react';
import React, {useState} from 'react'

function Account(props) {
 
//     const handleSubmit = e => {
  
//       e.preventDefault()
    
//       const balanceCopy = [...balance]
//       const newBalance = {
//         balance: balance
//       }
//       balanceCopy.push(newBalance)
//       updateBalance(balanceCopy)
//     }
// }
  return (
    <div className="account">
      <h2>{props.name}</h2>
      <div className="balance">$0</div>
      <input type="text" placeholder="enter an amount" />
      <input type="button" value="Deposit" />
      <input type="button" value="Withdraw" />
    </div>
  )
}

export default Account;
