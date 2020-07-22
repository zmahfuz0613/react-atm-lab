import React, { useState } from 'react';

function Account(props) {
  const [balance, updateBalance] = useState(0)
  const [newBalance, updateNewBalance] = useState(0)

  const preBalance = e => {
    updateNewBalance(parseInt(e.target.value))
    
  }
    const deposit = (e) => {
      updateBalance(balance + newBalance)
    }
    const withdraw = () => {
      updateBalance(balance - newBalance)
    }

    return (
      <div className="account">
        <h2>{props.name}</h2>
        <div className="balance">${balance}</div>
        <input type="text" placeholder="enter an amount" onChange={preBalance} />
        <input type="button" value="Deposit" onClick={deposit} />
        <input type="button" value="Withdraw" onClick={withdraw} />
      </div>
    )
  }

export default Account




