import React from 'react'
import visa from '../assets/images/visa.png'
//import mastercard from '../assets/images/master-card.svg'

function CreditCard(props) {
  return (
    <div>
        <img src={(props.type === 'Visa') ? visa :visa} alt="credit-card-img" />
        <p>{props.number}</p>
        <p>Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
        <p>{props.owner}</p>
    </div>
  )
}

export default CreditCard