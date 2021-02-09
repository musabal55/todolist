import React, { Component } from 'react';

class Satislar extends Component {
    render() {
        //const sat = this.props.id
        //const id = this.props.id
        //const name = this.props.name
        //const price = this.props.price

        const satis = this.props.satis // propsu objemize çektik


        return (
            <div>
                <p>SATIŞLAR TABLOSU STATE PROPS MAP</p>
                {console.log("satışlar " + satis)}

                {satis.map((satis) => {         // satış objesini MAP ledik
                    return (                    // ul  li ve {} tagıyla yazdırdık 
                        <ul>
                            <li key={satis.id}>ID : {satis.id}, Name : {satis.name}, Price : {satis.price}</li>
                        </ul>
                    )
                })}

            </div>
        );
    }
}
export default Satislar;