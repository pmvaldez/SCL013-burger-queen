import React, { Fragment } from 'react'
import Navbar from './Navbar'
import '../estilos/waiter.css'
//import Breakfast from './Breakfast'
import Menu from './Menu'

const Waiter = () => {

    return (
        <Fragment>
            <Navbar />      
            <Menu />      
        </Fragment>
    )
}

export default Waiter

