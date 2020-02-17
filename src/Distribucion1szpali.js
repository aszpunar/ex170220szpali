import React, { Component } from 'react'


const Cabecera = () =>{
    return (
        <header className='cabeceraszpali'>
            <h1>CABECERA</h1>
        </header>
    )
}
const Centro = () =>{
    return (
       <main className="generalszpali">
           <div className='generalszpali__barraizquierda'>
               BARRA IZQUIERDA
           </div>
           <div className='generalszpali__seccionprincipal'>
               SECCION PRINCIPAL
           </div>
           <div className='generalszpali__barraderecha'>
               BARRA LATERAL
           </div>
       </main>
    )
}
const Pie = () =>{
    return (
       <footer className="pieszpali">
           <h2>PIE</h2>
       </footer>
    )
}



class Distribucion1szpali extends Component{
    render(){
        return(
            <div>
            <Cabecera />
            <Centro />
            <Pie />
            </div>
        )

    }
}

export default Distribucion1szpali