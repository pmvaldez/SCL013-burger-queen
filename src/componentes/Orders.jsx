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
            <div className= "container">
            <h3>Pedido</h3>
            {
              agregar.map((filteredelemen, i) => {
                return (
                  <p key={i} >
                    <ResumenPedido nombre={filteredelemen} />
                  </p>
                )
              })
            }
            <h1>Total= ${suma}</h1>
            <button className="btn btn-dark" type="submit">
              Enviar
            </button>
          </div>
            </aside>
      </section>
    )
}

export default Orders
