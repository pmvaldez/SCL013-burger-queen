import React, {useState} from 'react'
import '../estilos/menu.css'
import  info from '../data.json'
import ResumenPedido from './ResumenPedido';



const Menu = () => {

  const  data = info.Menu;
  const [type, setType] = useState('breakfast');
  const [resumen, setResumen] = useState([]) 
  //const [,setResult] = React.useState(props.resumen) 


  const addProducto = item => {
  //const valor = item.price;
    const precioProducto = parseInt(item.price);
    const nombreProducto = item.name;
    const idProducto = item.id;
    const countProducto = item.count; 
      /*  if(resumen.idProducto === idProducto){ */
      resumen.push({idProducto, nombreProducto, precioProducto, countProducto})
      setResumen([
          ...resumen,
      ]) 
/*     }  */
    
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
                    {console.log(resumen)}
                    {data.filter(item => item.type === type ).map((item, i) => (
                        <button onClick={() => addProducto(item)} value={item.price} name={item.name}
                         id={item.id}
                         className="btn btn-color w-50 mt-2" key={i}>{item.name} ${item.price} {item.count}</button>
                        
                    ))}
                    <ResumenPedido  resumen={resumen}/>
                </div>
              </div>
            </div> 
        </div>  
    )
}
export default Menu