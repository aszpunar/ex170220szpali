import React, { Component } from 'react'
import {Router, Link} from '@reach/router';
import Distribucion1szpali from './Distribucion1szpali.js'
import Distribucion2szpali from './Distribucion2szpali.js'
import Distribucion3szpali from './Distribucion3szpali.js'


const Menu =()=>(
    <div>
         <nav className="navegacionszpali">
            <Link to="/" className="navegacionszpali__ruta">Distribución 1</Link>
            <Link to="Distribucion2" className="navegacionszpali__ruta">Distribución 2</Link>
            <Link to="Distribucion3" className="navegacionszpali__ruta">Distribución 3</Link>
            <Link to="Pruebas" className="navegacionszpali__ruta">Pruebas</Link>
        </nav>

        <Router>
            <Distribucion1 path="/" />
            <Distribucion2 path="/Distribucion2szpali.js"  />
            <Distribucion3 path="/Distribucion3szpali.js"  />
            <Pruebas path="/Pruebasszpali.js" />
        </Router>
       
    </div>

)

const Distribucion1 = () => (
    <div>
        <Distribucion1szpali />
    </div>
)

const Distribucion2 = () => (
<div>
    <Distribucion2szpali />
</div>
)
const Distribucion3 = ()=> (
<div>
</div>
)
const Pruebas = ()=> (
<div>
    
</div>
)

class Aplicacionszpali extends Component {
    render(){
        return(
            <div>
                <h1>HOLA</h1>
                <Menu />

                <h2>DISTRIBUCION 2</h2>
                <Distribucion2szpali />
                
                <h2>DISTRIBUCION 3</h2>
                <Distribucion3szpali />
            </div>
        )
    }
}

export default Aplicacionszpali