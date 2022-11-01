import React from 'react'

function BoxColor(props) {
    const boxStyling = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        width:"500px",
        height:"200px",
        color: "white",
        marginLeft:"35%",
        fontWeight: "bold"
    }
  return (
    <div style={boxStyling}>
    <p>rgb({props.r},{props.g},{props.b})</p>
    </div>
  )
}

export default BoxColor