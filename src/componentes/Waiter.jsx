import React from 'react'
import Navbar from './Navbar'
import style from '../estilos/waiter.module.css'
//import Breakfast from './Breakfast'
import Menu from './Menu'
//import Menu from './Menu'



const Waiter = () => {

    return (
        <div className={style.body} >
            <Navbar />
            <div className="form-group mb-2 row">
                <div className="input-group input-group-sm mb-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Nombre del Cliente:</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                <div className="input-group input-group-sm mb-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Numero de Mesa:</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                </div>
            </div>
            
            <Menu />       
        </div>
    )
}

export default Waiter

