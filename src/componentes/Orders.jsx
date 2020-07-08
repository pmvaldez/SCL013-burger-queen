import React from 'react'

const Orders = () => {
    const [nombre, setNombre] = React.useState('');
    const [mesa, setMesa] = React.useState('');
  
    const nombreCliente = (e) => {
      setNombre(e.target.value);
    };
    const numeroMesa = (e) => {
      setMesa(e.target.value);
    };
  
/*     React.useEffect(() => {
      buscarDatoCliente(nombre, mesa)
    }); */

    return (
        <section className="tabla-responsive">
            <aside className="float-right">
                    <label> Nombre <input type="text" onChange={nombreCliente} placeholder='Ignacio' value={nombre} /> </label>
                    <label> N° de Mesa <input className="form-control form-control-sm" type="text" onChange={numeroMesa} placeholder='1' value={mesa} /> </label>
                
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
                </table>
            </aside>
  
      </section>
    )
}

export default Orders
