import React, { Component } from 'react'

class Arizalar extends Component {
constructor(props) {
    super(props)

    this.state = {
         isVisible:true
    }
}



    render() {
        const isVisible=this.state.isVisible
        return (
            <div>
                {
                    isVisible ?
                    <div>
            <h3>Arıza Tablosu</h3>
            Arıza No: <h2 style={{color:"blue"}}>{this.props.arizaKaydi}</h2>
            </div> : null
    }
                
            </div>
        )
    }
}

export default Arizalar;