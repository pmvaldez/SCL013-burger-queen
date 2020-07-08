import React, {useState} from 'react'
import '../estilos/menu.css'
import  info from '../data.json'

const Menu = () => {
    const  data = info.Menu;
    const [type, setType] = useState('breakfast');

    return (
        <div>
            <section className="tabla-responsive">
                <aside className="float-right">
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
                    <button className="btn btn-warning mt-2" key={i}>{filteredelemen.name} ${filteredelemen.price}</button>
 /*                    <li key={i}>
                        {filteredelemen.name}
                    </li> */
                ))}
            </div>
        </div>
    )
}

export default Menu
