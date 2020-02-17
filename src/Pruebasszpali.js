import React, { Component } from 'react'
import Img from 'react-image'

class Pruebasszpali extends Component{
    render(){
        return(
            <div className="pruebasszpali">
                <Img className="pruebasszpali__captura" alt="captura1" src={require("./Recursos/captura1.PNG")} />
                <Img className="pruebasszpali__captura" alt="captura2" src={require("./Recursos/captura2.PNG")} />
            </div>
        )
    }
}

export default Pruebasszpali