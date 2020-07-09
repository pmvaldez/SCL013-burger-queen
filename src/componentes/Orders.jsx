<div className="col-auto ctnproductos">      
        <section className="listaprecios">
            <aside>
                    <label> Nombre <input type="text" onChange={nombreCliente} placeholder='Ignacio' value={nombre} /> </label>
                    <label> N° de Mesa <input className="inputMesa" type="text" onChange={numeroMesa} placeholder='1' value={mesa} /> </label>
<table className="table table-hover">
  <thead className='tableHead'>
    <tr>
      <th scope="col"></th>
      <th scope="col">PRODUCTOS ESCOGIDOS</th>
      <th scope="col">CANT.</th>
      <th scope="col">PRECIO</th>
    </tr>
   </thead>
   <tbody className='tableBody'>
    {agregar.map((filteredelemen, i) => {
      return(
     <tr key= {i+1}>
       <th onClick={() => this.deleteItem(i)} className="deleteItem" scope="row">
       <i className="trashIcon"><FontAwesomeIcon icon={faTrash} /></i>
       </th>
       <td className='aaa table-light'>{filteredelemen.name}</td>
       <td className='aaa table-light'>1</td>
       <td className='aaa table-light'>{filteredelemen.price}</td>
     </tr>
      )})}
   </tbody>
   </table>
            <h3>Total= ${suma}</h3>
            <button className="btn btn-dark" type="submit">
              Enviar
            </button>
            </aside>
            <section/>
</div>


{/* 
<div className= "container">
            <h1 className="text-center ">Pedido</h1>
            {
              agregar.map((filteredelemen, i) => {
                return (
                  <ul key={i} >
                    <ResumenPedido nombre={filteredelemen} />
                  </ul>
                )
              })
            }
            <h3>Total= ${suma}</h3>
            <button className="btn btn-dark" type="submit">
              Enviar
            </button>
          </div>
            </aside>
      </section>
        </div> */}