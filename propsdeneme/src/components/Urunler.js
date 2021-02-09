import React from 'react'

function Urunler(props) {    // foknsiyone props ile verileri aldırdık
    return (              // {} tagıyla props.data verileri çektik
        <div>
            <ul>
                <li>Urun ID : {props.urunID}</li>
                <li>Urun Adı : {props.urunAdi}</li>
                <li>Urun Fiyatı : {props.urunFiyati}</li>
                <li>Stok Adedi : {props.stokAdedi}</li>
            </ul>
        </div>
    )
}
export default Urunler;