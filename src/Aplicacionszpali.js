import React, { Component } from 'react'
import {Router, Link} from '@reach/router';
import Distribucion1szpali from './Distribucion1szpali.js'
import Distribucion2szpali from './Distribucion2szpali.js'
import Distribucion3szpali from './Distribucion3szpali.js'
import Pruebasszpali from "./Pruebasszpali.js"


const Menu =()=>(
    <div>
         <nav className="navegacionszpali">
            <Link to="/" className="navegacionszpali__ruta">Distribución 1</Link>
            <Link to="Distribucion2szpali" className="navegacionszpali__ruta">Distribución 2</Link>
            <Link to="Distribucion3szpali" className="navegacionszpali__ruta">Distribución 3</Link>
            <Link to="Pruebasszpali" className="navegacionszpali__ruta">Pruebas</Link>
        </nav>

        <Router>
            <Distribucion1szpali path="/" />
            <Distribucion2szpali path="/Distribucion2szpali"  />
            <Distribucion3szpali path="/Distribucion3szpali"  />
            <Pruebasszpali path="/Pruebasszpali" />
        </Router>
       
    </div>

)

class Aplicacionszpali extends Component {
    render(){
        return(
            <div>
                <h1>HOLA</h1>
                <Menu />
            </div>
        )
    }
}

export default Aplicacionszpali