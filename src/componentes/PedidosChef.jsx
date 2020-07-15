import React from 'react'
import { db } from '../firebase'

//const hmh = require('hmh')

const PedidosChef = () => {

    const [orders, getOrders] = React.useState([])
    const [orderdone, setOrderDone] = React.useState([])
    const [delivery, setDelivery] = React.useState([])

    React.useEffect(() => {
        db.collection('pedidos').where('status', '==', 'pending').onSnapshot({ includeMetadataChanges: true }, (snap => {
            const pedidos = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            getOrders(pedidos);
        })
        )
        db.collection('pedidos').where('status', '==', 'delivered').onSnapshot((snap => {
            const pedidos = snap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))
            setDelivery(pedidos);
        })
        )
    }, [])

    const orderDone = (item) => {
        db.collection('pedidos').doc(item.id).update({
            status: 'done',
            hourDone: new Date().getTime(),
        })
        .then(() => {
            setOrderDone([...orderdone, { ...item, status: 'done', hourDone: new Date().getTime() }])
        })
        if (item.status === 'done') {
            const index = orders.findIndex((i) => i.id === item.id)
            orders.splice(index, 1);
        }
    }
    
    return (
      <section className="root-kitchen">
        <section className="root-kitchen">
            <h1 className="h2">Cocina</h1>
            <h2 className="h2">Pedidos a realizar</h2>
            <div className="app-kitchen app">
                <div className="order-done">
                    {orders.map((order) => { 
                    return (
                        <section className="section" key={order.id}  >
                            <div className="order-div">
                                <div className="menu-name">
                                    <p className="text client-text"> Cliente: {order.cliente}</p>
                                    <p className="text client-text"> Mesas: {order.numMesa}</p>
                                </div>
                                <div className="order-itens">
                                    <span className="menu-name text">Pedidos:</span>
                                    {order.pedido.map(item => <span className="order-kitchen" key={item.id}>
                                        <ul>
                                            <li> {item.countProducto} {item.nombreProducto} </li>    
                                        </ul> 
                                    </span>)}
                                </div>
                                <button class="btn-enviar burger-queen" onClick={() => orderDone(order)}>Pronto</button>
                            </div>
                        </section>
                    )
                    })}
                </div>
            </div>
        </section>

        <section className="root-kitchen">
            <h2 className="h2">Pedidos entregados</h2>
            <div className="app-kitchen app">
                {delivery.map((item, index) => {
                return (
                    <div className="order-done" key={index} >
                        {item.status === 'delivered' ?
                        <section className="section">
                            <div className="order-div">
                                <div className="menu-name">
                                    <p className="text client-text"> Cliente: {item.cliente}</p>
                                    <p className="text client-text"> Mesa: {item.numMesa}</p>
                                </div>
                                <div className="order-itens">
                                    <span className="menu-name text">Pedidos:</span>
                                    {item.pedido.map((item, index) =>
                                    <span className="order-kitchen" key={index}> {item.name} </span>)}
                                    <span className="time">Tiempo de preparación:</span>
                                </div>
                            </div>
                        </section>
                          : null}

                    </div>                  

                )
                })}

            </div>
        </section>
    </section>

)
 
}


export default PedidosChef
