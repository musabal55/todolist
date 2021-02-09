import React, { Component } from 'react'

class Satislar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isVisible: true
        }
    }

    onClickEvent = (number, e) => {
       this.setState({
        isVisible :!this.state.isVisible
       })
        
    }




    render() {
        let isVisible = this.state.isVisible

        console.log(typeof (isVisible))
        return (
            <div>
                <h3 onClick={this.onClickEvent.bind(this, 34)} >Satışlar Tablosu <br /> Satış yapılan Ürün:</h3>

                {
                    isVisible ?
                        <div>
                            <h2 style={{ color: "chocolate" }}>{this.props.urunAdi}</h2>
                        </div> : null
                }
            </div>

        )
    }
}

export default Satislar;

