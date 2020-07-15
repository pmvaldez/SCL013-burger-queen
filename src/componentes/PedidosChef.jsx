import React from 'react'
import { db } from '../firebase'

const PedidosChef = () => {

    const [orders, getOrders] = React.useState([])
    const [orderdone, setOrderDone] = React.useState([])

    React.useEffect(() => {
        db.collection('pedidos').where('status', '==', 'pending').onSnapshot({ includeMetadataChanges: true }, (snap => {
            const pedidos = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            getOrders(pedidos);
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
/*     const formattingDate = (doc) => {
        const formattedDate = doc.data().timestamp.toDate().toString();
        const splitDate = formattedDate.split(' ');
        let month;
        if (splitDate[1] === 'Jun') { // porque solo es para mostrar :D xd
          month = 'Junio';
        }
        return `${splitDate[2]} de ${month} del ${splitDate[3]} a las ${splitDate[4]}`;
    };
       */
    return (
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
                                    <p className="text client-text"> Mesa: {order.numMesa}</p>
                                </div>
                                <div className="order-itens">
                                    <span className="menu-name text">Pedidos:</span>
                                    {order.pedido.map(item => <span className="order-kitchen" key={item.id}>
                                        <ul>
                                            <li> {item.countProducto} {item.nombreProducto} </li>    
                                        </ul> 
                                    </span>)}
                                </div>
                                <button class="btn-enviar burger-queen" onClick={() => orderDone(order)}>Listo</button>
                            </div>
                        </section>
                    )
                    })}
                </div>
            </div>
        </section>
    ) 
}


export default PedidosChef
