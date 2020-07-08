import React from 'react'
import Navbar from './Navbar'
import '../estilos/waiter.css'
//import Breakfast from './Breakfast'
import Menu from './Menu'
import Orders from './Orders'
//import Menu from './Menu'



const Waiter = () => {

    return (
        <div>
            <Navbar />      
            <div className="containerBotones">
                <div className="row">  
                    <section className="col-sm-12 col-md-6 fondo">  
                    <Menu />      
                    </section>
                    <section className="col-sm-12 col-md-6 plomo ">
                    <Orders /> 
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Waiter

