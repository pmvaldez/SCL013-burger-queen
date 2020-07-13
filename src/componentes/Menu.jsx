import React, {useState} from 'react'
import '../estilos/menu.css'
import  info from '../data.json'
import ResumenPedido from './ResumenPedido';

const Menu = () => {

  const  data = info.Menu;
  const [type, setType] = useState('breakfast');
  const [resumen, setResumen] = useState([]) 


  const addProducto = (e =>{
    const valor = e.target.value;
    const precioProducto = parseInt(valor);
    const nombreProducto = e.target.name;
    const idProducto = e.target.id;
/*     if(resumen.idProducto === idProducto){ */
      resumen.push({idProducto, nombreProducto, precioProducto})
      setResumen([
          ...resumen,
      ])
 /*    } */

  })

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
                        <button onClick={addProducto}  value={filteredelemen.price} name={filteredelemen.name} id={filteredelemen.id} className="btn btn-color w-50 mt-2" key={i}>{filteredelemen.name} ${filteredelemen.price}</button>

                    ))}
                    <ResumenPedido  resumen={resumen}/> 
                </div>
              </div>
            </div> 
        </div>  
    )
}
export default Menu
















