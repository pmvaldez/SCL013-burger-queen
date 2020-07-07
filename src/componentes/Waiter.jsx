import React from 'react'
import Navbar from './Navbar'
import style from '../estilos/waiter.module.css'
//import  menu from '../data.json'
import Breakfast from './Breakfast'

// console.log(style)

const Waiter = () => {

    //const data = menu
    //console.log(data)
    
    return (
        <div className={style.body} >
            <Navbar />
            <Breakfast />

            
        </div>
    )
}

export default Waiter

