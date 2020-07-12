import React, {useState} from 'react'
import Menu from './Menu.jsx';

const CompoMesero = () => {
  
    const [arrayProductosOrden, setArrayProductosOrden] = useState([]);
    const buscarProducto = (obj, Id) => {
  
      let arrayId = arrayProductosOrden.filter(el => el.id === Id)

      if (arrayId.length === 0) {
        const producto = {
          cantidad: 1,
          producto: obj.producto,
          precio: obj.precio,
          id: Id,
        }
        const newArr = arrayProductosOrden.concat([producto]);
        setArrayProductosOrden(newArr);
      }
    }

  
    const totalOrden = () => {
      let totalprecio = 0;
      if (arrayProductosOrden.length !== 0) {
        totalprecio = arrayProductosOrden.reduce((acum, obj) => acum + obj.precio * obj.cantidad, 0)
        // console.log('precio total', totalprecio);
      }
      return totalprecio
    }
    return (
        <main>
          <div className="container-fluid ">
            <div className="row">
              <section className="col-sm-12 col-md-6 fondo">
                <Menu buscarProductos={buscarProducto} />
              </section>

            </div>
          </div>
    
          <section className="container">
            <div className=" row justify-content-end fixed-bottom ">
              <div className="col-sm-3 verde text-center" >
                <h3 data-testid="montoTotal" >Total S. {totalOrden()}</h3>
              </div>
            </div>
          </section>
        </main>
      )
}

export default CompoMesero
