import React from 'react'
import Navbar from './Navbar'
import '../estilos/waiter.css'
//import Breakfast from './Breakfast'
import Menu from './Menu'
import ResumenPedido from './ResumenPedido'




const Waiter = () => {



    return (
        <div>
            <Navbar />      
                    <Menu />      
                   <ResumenPedido/>
        </div>
    )
}

export default Waiter

