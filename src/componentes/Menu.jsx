import React, {useState} from 'react'
import '../estilos/menu.css'
import  info from '../data.json'
import ResumenPedido from "./ResumenPedido"
import {db} from '../firebase'

const Menu = () => {
    const  data = info.Menu;
    const [type, setType] = useState('breakfast');
    const [agregar, setAgregar] = React.useState([]);
    const [sumando, setSumando] = React.useState([]);
    const [nombre, setNombre] = React.useState('');
    const [mesa, setMesa] = React.useState('');
  
    const nombreCliente = (e) => {
      setNombre(e.target.value);
    };
    const numeroMesa = (e) => {
      setMesa(e.target.value);
    };

    const pedido= (e) => {
        const valor = e.target.value;
        const precioPedido = parseInt(valor);
        const nombrePedido = e.target.name;
        
    //acumulacion de pedido
    agregar.push(`${nombrePedido} $${precioPedido}`);
    setAgregar([...agregar]);
    console.log(agregar)
   


    sumando.push(precioPedido)
    setSumando([...sumando])
    } ;

   const suma = sumando.reduce((a, b) => a + b, 0);

   const agregarPedido= async (e) => {
    e.preventDefault()
    try {
        const nuevoPedido = {
           pedido: agregar

        }
        const data = await db.collection("pedidos").add(nuevoPedido);
    } catch (error) {
        console.log(error)
    }
    
}

    return (
        <div className="container">
            <div className="row">  
            <div className="col-auto ctnproductos">  
                 <section>
                <aside className="btn-group">
                <button type="button" className="text-white btn btn-dark m-1" onClick={() => setType('breakfast')}>
                Desayuno
                </button>
                <button type="button" className="text-white btn btn-dark m-1" onClick={() => setType('lunch')}>
                Almuerzo
                </button>
                <button type="button" className="text-white btn btn-dark m-1" onClick={() => setType('drinks')}>
                Bebidas
                </button>
                <button type="button" className="text-white btn btn-dark m-1" onClick={() => setType('additional')}>
                Adicional
                </button>
                </aside>
            </section>
          
            <div className="btn-group-vertical">
                {data.filter(elemen => elemen.type === type ).map((filteredelemen, i) => (
                    <button onClick={pedido} value={filteredelemen.price} name={filteredelemen.name}className="btn btn-color mt-2" key={i}>{filteredelemen.name} ${filteredelemen.price}</button>
 /*                    <li key={i}>
                        {filteredelemen.name}
                    </li> */
                ))}
                </div>
                </div>
         <div className="col-auto ctnproductos">      
        <section className="listaprecios">
            <aside>
                    <label> Nombre <input type="text" onChange={nombreCliente} placeholder='Ignacio' value={nombre} /> </label>
                    <label> N° de Mesa <input className="inputMesa" type="text" onChange={numeroMesa} placeholder='1' value={mesa} /> </label>
            <div className= "container">
            <h1 className="text-center ">Pedido</h1>
            {agregar.map((filteredelemen, i) => {
                return (
                  <ul key={i} >
                    <ResumenPedido nombre={filteredelemen} />
                  </ul>
                )
              })
            }
            <h3>Total= ${suma}</h3>
            <button className="btn btn-dark" type="submit" onClick={agregarPedido}>
              Enviar
            </button>
          </div>
            </aside>
      </section>
        </div>
        </div> 
        </div>  
    )
}
export default Menu
