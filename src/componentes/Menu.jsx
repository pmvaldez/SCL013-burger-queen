import React, {useState} from 'react'
import  info from '../data.json'

const Menu = () => {
    const  data = info.Menu;
    const [type, setType] = useState('breakfast');

    return (
        <div>
            <section>
                <h1 className="text-center text-black">LISTA DE PRODUCTOS</h1>
                <aside className="p">
                <button type="button" className="btn btn-success m-3" onClick={() => setType('breakfast')}>
                Desayuno
                </button>
                <button type="button" className="btn btn-success m-3" onClick={() => setType('lunch')}>
                Almuerzo
                </button>
                <button type="button" className="btn btn-success m-3" onClick={() => setType('drinks')}>
                Bebidas
                </button>
                <button type="button" className="btn btn-success m-3" onClick={() => setType('additional')}>
                Additional
                </button>
                </aside>
            </section>
            <div>
                {data.filter(elemen => elemen.type === type ).map((filteredelemen, i) => (
                    <li key={i}>
                        {filteredelemen.name}
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Menu
