import React from 'react'

export default function Detail(props) {
    return (
        <div>
            giriş yapan : {props.kullanici}
            <ul>
            <li>{props.name}</li>
            <li>{props.surname}</li>
            <li>{props.job}</li> 
            </ul>
        </div>
    )
}
