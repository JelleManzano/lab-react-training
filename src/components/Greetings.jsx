import React from 'react';

function Greetings(props) {
  let helloMsg = '';

  if (props.lang === 'de') {
    helloMsg = 'Hallo';
  } else if (props.lang === 'fr') {
    helloMsg = 'Bonjour';
  }
  return <p>{helloMsg + ' ' + props.children}</p>;
}

export default Greetings;
