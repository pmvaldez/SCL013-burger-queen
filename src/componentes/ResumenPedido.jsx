import React from 'react'
import '../estilos/resumenpedido.css'
import mas from '../imagen/aumentar.png'
import menos from '../imagen/disminuir.png'
import remove from '../imagen/remove.png'
import {db, auth } from '../firebase'

const ResumenPedido = (props) => {

    const [nombre, setNombre] = React.useState('');
    const [mesa, setMesa] = React.useState('');
    const [,setResult] = React.useState(props.resumen);
    const [error, setError] = React.useState(null)
    
    const procesarDatos = e => {
        e.preventDefault()
        if(!nombre.trim()){
            console.log('Datos vacíos Ingrese Nombre Cliente!')
            setError('Datos vacíos Ingrese Nombre Cliente!')
            return
        }
        if(!mesa.trim()){
            console.log('Ingrese Nombre de Mesa!')
            setError('Ingrese Nombre de Mesa!')
            return
        }
        if(!props.resumen.length){
            console.log('Pedido vacio')
            setError('Pedido vacio')
            return
        }
        console.log('correcto...')
        setError(null)
    }

    const nombreCliente = (e) => {
        setNombre(e.target.value);
    };

    const numeroMesa = (e) => {
        setMesa(e.target.value);
    };

    const aumentar = (item) => {
       const array = props.resumen
       const itemSelected = array.find(element => element.idProducto === item.idProducto);
       itemSelected.countProducto = itemSelected.countProducto + 1;
       setResult({ ...array, countProducto : itemSelected.countProducto})
    } 
    
    const disminuir = (item) => {
       const array = props.resumen
       const itemSelected = array.find(element => element.idProducto === item.idProducto);
       if(itemSelected.countProducto > 1){
         itemSelected.countProducto = itemSelected.countProducto - 1;
       }
       setResult({ ...array, countProducto : itemSelected.countProducto})
    }     
 
    const deleteItem = (e) => {
        const posicion= e.target.id;
        const array = props.resumen.splice(posicion,1 ) 
        setResult(...array)
    }       

  //Enviar pedido a firebase
    const agregarPedido= async (e) => {
      e.preventDefault()
      try {
        const nuevoPedido = {
          pedido: props.resumen,
          cliente: nombre,
          numMesa: mesa,
          status: 'pending',
          hourSend: new Date().getTime(),
          uid: auth.currentUser.uid
        }
        setNombre('')
        setMesa('')
        setResult('')
        setError(null)
        
        const data = await db.collection("pedidos").add(nuevoPedido);
         
      } 
      catch (error) {
        console.log(error)
      }
    } 

    return (
            <section className="listaprecios col-lg-6  ">
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
                                <th scope="col ">Producto</th>
                                <th scope="col">P/U</th>
                                <th scope="col mr-8 ">Sub/Total</th>
                                <th scope="col"> Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                props.resumen.map((item,i) => {
                                    return(
                                    <tr key={i} id={item.idProducto}>
                                        <th scope="col "><img src={mas} onClick={(e) => aumentar(item)} alt="" /></th>
                                        <th scope="col"><p className="cantidad">{item.countProducto}</p></th> 
                                        <th scope="col "><img src={menos} onClick={(e) => disminuir(item)} alt=""/></th>
                                        <th scope="col ">{item.nombreProducto}</th>
                                        <th scope="col">${item.precioProducto}</th>
                                        <th scope="col mr-8 " >${item.precioProducto * item.countProducto}</th>
                                        <th scope="col"><img src={remove} className="btnDelete" id={i} onClick={deleteItem} alt=""/></th> 
                                    </tr>

                                    )
                                })
                                }
                                <tr><th colSpan={7} className="textTotal"><p className="text">Total: ${props.resumen.reduce((acc, item) => acc + item.precioProducto * item.countProducto, 0)} </p>
                                </th></tr>
                            </tbody>   
                        </table>
                        <button className="btn btn-warning" type="submit" onSubmit={procesarDatos} onClick={agregarPedido} >Enviar</button>
                    </div> 
            </section>
    )
}

export default ResumenPedido;