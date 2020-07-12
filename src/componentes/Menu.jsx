import React, {useState} from 'react'
import '../estilos/menu.css'
import  info from '../data.json'
//import ResumenPedido from "./ResumenPedido"
import Producto from './Producto'

const Menu = ({ buscarProductos }) => {
  const  data = info.Menu;
  const [type, setType] = useState('breakfast');
/*   const [agregar, setAgregar] = React.useState([]);
  const [sumando, setSumando] = React.useState([]); */
/*   const [nombre, setNombre] = React.useState('');
  const [mesa, setMesa] = React.useState(''); */
  
/*   const nombreCliente = (e) => {
    setNombre(e.target.value);
  };
  const numeroMesa = (e) => {
    setMesa(e.target.value);
  };
 */
/*   const lista= (e) => {
    const valor = e.target.value;
    const precioPedido = parseInt(valor);
    const nombrePedido = e.target.name;    
    //acumulacion de pedido
    agregar.push([`${nombrePedido} $${precioPedido}`]);
    setAgregar([...agregar]);
    sumando.push(precioPedido)
    setSumando([...sumando])
  }; */

 // const suma = sumando.reduce((a, b) => a + b, 0);
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
              </aside>
            </section>
          
          </div>
          <div className="col-auto ctnproductos">      
            <section className="listaprecios">
              <section className="p">
               {data.filter(elemen => elemen.type === type )
                .map(doc =>
                <Producto documento={doc} key={doc.id} buscarProducto={buscarProductos} />
              )}
            </section>
            </section>
          </div>
        </div> 
      </div>  
  )
}


export default Menu
