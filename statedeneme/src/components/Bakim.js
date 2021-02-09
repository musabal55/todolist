import React, { Component } from 'react';

class Bakim extends Component {
    render() {
        const bakimYili = this.props.bakimYili
        const bakimTipi = this.props.bakimTipi
        const bakimPersonel = this.props.bakimPersonel

        return (
            <div>
                <p>Bakım Yılı : {bakimYili}</p>
                <p>Bakım Tipi : {bakimTipi}</p>
                <p>Bakım Personeli : {bakimPersonel}</p>
            </div>
        );
    }
}
export default Bakim;