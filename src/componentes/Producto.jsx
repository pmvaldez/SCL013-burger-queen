import React from 'react'
import  data from '../data.json'

const Producto = ({ documento, buscarProducto }) => {
    const { producto, precio }  = data;
    //const { producto, precio, url } = documento.data();
    return (
       <section className="card style prod" >
          <div key={documento.id} onClick={() => { buscarProducto(documento.data(), documento.id) }}>
             <h5 >{producto}</h5>
             <p>S/.{precio}</p>
          </div>
       </section>
    )
 };

export default Producto
