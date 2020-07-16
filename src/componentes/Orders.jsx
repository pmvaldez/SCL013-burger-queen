import React from 'react'
import { db } from '../firebase'

const Orders = () => {
    
    const [orderdone, setOrderDone] = React.useState([])
    const [delivery, setDelivery] = React.useState([]);
    
    React.useEffect(() => {
        db.collection('pedidos').where('status', '==', 'done').onSnapshot((snap => {
            const pedidos = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setOrderDone(pedidos);
        })
        )
        db.collection('orders').where('status', '==', 'delivered').onSnapshot((snap => {
            const pedidos = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setDelivery(pedidos);
        })
        )
    }, [])
    
    const delivered = (item, e) => {
        e.preventDefault()
        db.collection('pedidos').doc(item.id).update({
            status: 'delivered',
            hourDelivered: new Date().getTime()
          })
          .then(() => {
            setDelivery([...delivery, { ...item, status: 'delivered', hourDelivered: new Date().getTime() }])
          })
        if (item.status === 'done') {
          const index = orderdone.findIndex((i) => i.id === item.id)
          orderdone.splice(index, 1);
        } 
    }

  return (
             <section className="root-kitchen">
                <h2 className="h2">Pronto para a Entrega</h2>
                <div className="app-kitchen app">
                  <div className="order-done">
                    {orderdone.map((item) => {
                      return (
                        <section className="section" key={item.id}  >
                          {item.status === 'done' ?
                            <div className="order-div">
                              <div className="menu-name">
                                <p className="text client-text"> Cliente: {item.cliente}</p>
                                <p className="text client-text"> Mesa: {item.numMesa}</p>
                              </div>
                              <div className="order-itens" key={item.id}>
                                <span className="menu-name text">Pedidos:</span>
                                {item.pedido.map(item => <span className="order-kitchen" key={item.id}>
                                    <ul>
                                        <li> {item.countProducto} {item.nombreProducto} </li>    
                                    </ul> 
                                </span>
                                )}
                              </div>
                              <button class="btn-enviar burger-queen" onClick={(e) => delivered(item, e)}>Entregue</button>
                            </div>

                            : null}
                        </section>
                      )
                    })}
                  </div>
                </div>
              </section>
    
    )
}
export default Orders
