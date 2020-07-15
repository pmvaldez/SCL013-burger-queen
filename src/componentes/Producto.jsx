import React from 'react'
import  data from '../data.json'

const Producto = ({ documento, buscarProducto }) => {
    const {  name, price }  = data.Menu
    //const  data = info.Menu;
    //const { producto, precio, url } = documento.data();
    return (
       <section className="card style prod" >
          <div key={documento.id}>
             <h5 >{name}</h5>
             <p>S/.{price}</p>
          </div>
       </section>
    )
 };

export default Producto
