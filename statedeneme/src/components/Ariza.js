import React from 'react'

function Ariza(props) {
    return (
        <div style={{ backgroundColor: "blue" }}>
            <p>Arıza Tipi : {props.arizaTipi}</p>
            <p>Birim : {props.birim} </p>
            <p>Müdahale Eden: {props.mudahaleEden}</p>
        </div>
    )
}
export default Ariza;