import React, {useState} from 'react'
import '../estilos/menu.css'
import  info from '../data.json'


const Menu = () => {
    const  data = info.Menu;
    const [type, setType] = useState('breakfast');
  
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
                    <button /* onClick={} value={filteredelemen.price} name={filteredelemen.name} */className="btn btn-color mt-2" key={i}>{filteredelemen.name} ${filteredelemen.price}</button>
 /*                    <li key={i}>
                        {filteredelemen.name}
                    </li> */
                ))}
                </div>
                </div>
        </div> 
        </div>  
    )
}
export default Menu
