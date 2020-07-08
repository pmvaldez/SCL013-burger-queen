import React from 'react'
import Navbar from './Navbar'
import style from '../estilos/waiter.module.css'
//import  menu from '../data.json'
import Breakfast from './Breakfast'
import Lunch from './Lunch'

// console.log(style)


const Waiter = () => {

    //const data = menu
    //console.log(data)
    
    return (
        <div className={style.body} >
            <Navbar />

            <input className="form-control mb-2" aria-label="Small" placeholder="nombre cliente"/>
            <input className="form-control mb-2 sm" placeholder="número de mesa"/>
            
            <div className="btn-group btn-group-lg">
                <button type="button" className="btn btn-dark" >Desayunos</button>
                <button type="button" className="btn btn-dark">Almuerzos</button>
                <button type="button" className="btn btn-dark">Extras</button>
            </div>
          <Breakfast />  
          <Lunch /> 
        </div>
    )
}

export default Waiter

