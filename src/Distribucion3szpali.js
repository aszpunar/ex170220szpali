import React, { Component } from 'react'
import Img from 'react-image'


class Distribucion3szpali extends Component {
    render(){
        return(
            <div>

                <div className="galeriaszpali">
                    <Img className="galeriaszpali__img" alt="Paisaje1" src={require('./Recursos/Paisaje1.jpg')} />
                    <Img className="galeriaszpali__img"  alt="Paisaje2" src={require('./Recursos/Paisaje2.jpg')} />
                    <Img className="galeriaszpali__img"  alt="Paisaje3" src={require('./Recursos/Paisaje3.jpg')} />
                    <Img className="galeriaszpali__img"  alt="Paisaje4" src={require('./Recursos/Paisaje4.jpg')} />
                    <Img className="galeriaszpali__img"  alt="Paisaje5" src={require('./Recursos/Paisaje5.jpg')} />
                    <Img className="galeriaszpali__img"  alt="Paisaje6" src={require('./Recursos/Paisaje6.jpg')} />
                    <Img className="galeriaszpali__img"  alt="Paisaje7" src={require('./Recursos/Paisaje7.jpg')} />
                    <Img className="galeriaszpali__img"  alt="Paisaje8" src={require('./Recursos/Paisaje8.jpg')} />
                </div>

            </div>
        )

    }
}

export default Distribucion3szpali