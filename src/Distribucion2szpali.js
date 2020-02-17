import React, { Component } from 'react'


const Cabecera = () =>{
    return (
        <header className='cabeceraszpali2'>
            <h1>CABECERA</h1>
        </header>
    )
}
const Centro = () =>{
    return (
       <main className="generalszpali2">
           <div className='generalszpali2__seccionprincipal'>
               <div>Lorem ipsum</div>
               <div>Lorem ipsum</div>
               <div>Lorem ipsum</div>
               <div>Lorem ipsum</div>
               <div>Lorem ipsum</div>
               <div>Lorem ipsum</div>
           </div>
           <div className='generalszpali2__barraderecha'>
               BARRA LATERAL
           </div>
       </main>
    )
}
const Pie = () =>{
    return (
       <footer className="pieszpali2">
           <h2>PIE</h2>
       </footer>
    )
}


class Distribucion2szpali extends Component {
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

export default Distribucion2szpali