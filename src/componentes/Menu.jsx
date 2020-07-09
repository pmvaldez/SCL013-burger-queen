import React, {useState} from 'react'
import '../estilos/menu.css'
import  info from '../data.json'
import ResumenPedido from "./ResumenPedido"

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

    const lista= (e) => {
        const valor = e.target.value;
        const precioPedido = parseInt(valor);
        const nombrePedido = e.target.name;
        
    //acumulacion de pedido
    agregar.push([`${nombrePedido} $${precioPedido}`]);
    setAgregar([...agregar]);

    sumando.push(precioPedido)
    setSumando([...sumando])
    } ;

   const suma = sumando.reduce((a, b) => a + b, 0);

    return (
        <div className="container">
            <div className="row">  
            <div className="col-auto">  
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
                    <button onClick={lista} value={filteredelemen.price} name={filteredelemen.name}className="btn btn-warning mt-2" key={i}>{filteredelemen.name} ${filteredelemen.price}</button>
 /*                    <li key={i}>
                        {filteredelemen.name}
                    </li> */
                ))}
                </div>
                </div>
         <div className="col-auto">      
        <section >
            <aside>
                    <label> Nombre <input type="text" onChange={nombreCliente} placeholder='Ignacio' value={nombre} /> </label>
                    <label> N° de Mesa <input className="form-control form-control-sm" type="text" onChange={numeroMesa} placeholder='1' value={mesa} /> </label>
            <div className= "container">
            <h3>Pedido</h3>
            {
              agregar.map((filteredelemen, i) => {
                return (
                  <ul key={i} >
                    <ResumenPedido nombre={filteredelemen} />
                  </ul>
                )
              })
            }
            <h1>Total= ${suma}</h1>
            <button className="btn btn-dark" type="submit">
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
