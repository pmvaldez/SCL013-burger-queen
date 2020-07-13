import React from 'react'
import '../estilos/resumenpedido.css'
/* import {db} from '../firebase' */


const ResumenPedido = (props) => {

    /*   const [agregar, setAgregar] = React.useState([]);
    const [sumando, setSumando] = React.useState([]); */
    const [nombre, setNombre] = React.useState('');
    const [mesa, setMesa] = React.useState('');
    const [,setResult] = React.useState(props.resumen) 
    const [cont, setCont] = React.useState(1)
   /*  const [total, setTotal] = React.useState(0) */
  

    const nombreCliente = (e) => {
        setNombre(e.target.value);
    };

    const numeroMesa = (e) => {
        setMesa(e.target.value);
    };

    const aumentar = () => {
       setCont(cont + 1)
      
    }

    const disminuir = () => {
        if(cont > 1 ){
          setCont(cont - 1)
          }
    }  

 
    const deleteItem = (e) => {
        const posicion= e.target.id;
        const array = props.resumen.splice(posicion,1 ) 
        setResult(...array)
     }

       
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
  //Enviar pedido a firebase
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
                                <th scope="col"></th>
                                <th scope="col">Cant.</th>
                                <th scope="col"></th>
                                <th scope="col ">Nombre del Producto</th>
                                <th scope="col">P/U</th>
                                <th scope="col mr-8 ">Sub/Total</th>
                                <th scope="col"> Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                props.resumen.map((item,i) => {
                                    return(
                                    <tr key={i}>
                                        <th scope="col "><button onClick={() => aumentar(i)}>+</button></th>
                                        <th scope="col"><p className="cantidad">{cont}</p></th> 
                                        <th scope="col "><button onClick={() => disminuir()}>-</button></th>
                                        <th scope="col ">{item.nombreProducto}</th>
                                        <th scope="col">${item.precioProducto}</th>
                                        <th scope="col mr-8 ">$preciototal</th>
                                        <th scope="col"><button className="btn btn-warning" id={i} onClick={deleteItem}> Eliminar</button></th> 
                                    </tr>
                                        )
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