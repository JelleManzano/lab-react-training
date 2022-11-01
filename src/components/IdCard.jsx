import React from 'react';

function IdCard(props) {
  return <div>
    <img src={props.picture} alt="id-pic" />
    <p>First Name: {props.firstName}</p>
    <p>Last Name: {props.lastName}</p>
    <p>Gender: {props.gende}</p>
    <p>Height: {props.height}</p>
    <p>Birth: {props.birth.toString()}</p>
  </div>;
}

export default IdCard;
