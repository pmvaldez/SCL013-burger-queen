import React from 'react'
/* import {db} from '../firebase' */

const ResumenPedido = (props) => {

    console.log(props.resumen)  
    /*   const [agregar, setAgregar] = React.useState([]);
    const [sumando, setSumando] = React.useState([]); */
    const [nombre, setNombre] = React.useState('');
    const [mesa, setMesa] = React.useState('');

 
    const nombreCliente = (e) => {
        setNombre(e.target.value);
      };
      const numeroMesa = (e) => {
        setMesa(e.target.value);
      };

   
      
  /*     const pedido = (nombreProducto, precioProducto) =>{
        //console.log('soy el pedido', pedido)
        console.log(nombreProducto, precioProducto)
        
      }
      pedido() */
   /*    const pedido= (e) => {
          const valor = e.target.value;
          const precioPedido = parseInt(valor);
          const nombrePedido = e.target.name;
          
      //acumulacion de pedido
      
      setAgregar([...agregar]);
      console.log(agregar)
     
  
  
      sumando.push(precioPedido)
      setSumando([...sumando])
      } ;
  
     const suma = sumando.reduce((a, b) => a + b, 0); */
  
    /*  const agregarPedido= async (e) => {
      e.preventDefault()
      try {
          const nuevoPedido = {
             pedido: agregar
  
          }
          const data = await db.collection("pedidos").add(nuevoPedido);
      } catch (error) {
          console.log(error)
      }
      
  }  */

    return (

        <div className="col-auto ctnproductos">      
            <section className="listaprecios">
                <aside>
                <label> Nombre <input type="text" onChange={nombreCliente} placeholder='Ignacio' value={nombre} /> </label>
                <label> N° de Mesa <input className="inputMesa" type="text" onChange={numeroMesa} placeholder='1' value={mesa} /> </label>
                    <div className= "container"> 
                        <h1 className="text-center ">Pedido</h1>
                        <table className="table table-sm ">
                            <thead>
                                <tr>
                                <th scope="col">Cantidad</th>
                                <th scope="col ">Nombre del Producto</th>
                                <th scope="col">Precio Unitario</th>
                                <th scope="col mr-8 ">Precio Total</th>
                                <th scope="col"> Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                props.resumen.map(item => {
                                    return([
                                    <tr key={item.idProducto}>
                                        <th scope="col"><button>+</button><input className="w-25" placeholder="1"/><button>-</button></th> 
                                        <th scope="col ">{item.nombreProducto}</th>
                                        <th scope="col">${item.precioProducto}</th>
                                        <th scope="col mr-8 ">$preciototal</th>
                                        <th scope="col"><button className="btn btn-warning"> Eliminar</button></th> 
                                    </tr>
                                        ])
                                    })
                                }

                            </tbody>
                        </table>
                    </div> 
                </aside>
            </section>
        </div> 

    


    )
}

export default ResumenPedido;
