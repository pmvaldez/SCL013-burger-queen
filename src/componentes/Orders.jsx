import React, { Fragment } from 'react'
import { db } from '../firebase'
import NavbarOrders from './NavbarOrders'
import '../estilos/orders.css'
import moment from "moment";
import 'moment/locale/es';


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
            setDelivery([...delivery, { ...item, status: 'delivered', hourDelivered:   new Date().getTime() }])
          })
        if (item.status === 'done') {
          const index = orderdone.findIndex((i) => i.id === item.id)
          orderdone.splice(index, 1);
        } 
    }

  return (
    <Fragment>
      <NavbarOrders/>
             <section className="container">
                <h2 className="h2">Pronto para a Entrega</h2>
                  <div className="row row-cols-3">
                    {orderdone.map((item) => {
                      return (
                        <section className="section h5 font-italic" key={item.id}  >
                          {item.status === 'done' ?
                              <div className="row waitercheck">
                                <p className="text client-text"> Dia: {moment(item.orhourDelivered).subtract(10, 'days').calendar()}</p>
                                <p className="text client-text"> Hora: {moment(item.orhourDelivered).format('LTS')}</p>
                                <p className="text font-italic orders"> Cliente: {item.cliente}</p>
                                <p className="text font-italic orders"> Mesa: {item.numMesa}</p>
                              <div className="order-itens" key={item.id}>
                                <span className="menu-name text-light h5">Pedido</span>
                                {item.pedido.map(item => <span className="order-kitchen" key={item.id}>
                                    <ul>
                                        <li> {item.countProducto} {item.nombreProducto} </li>    
                                    </ul> 
                                </span>
                                )}
                              </div>
                              <button class="btn btn-dark" onClick={(e) => delivered(item, e)}>Entregado</button>
                            </div>

                            : null}
                        </section>
                      )
                    })}
                </div>
              </section>
              </Fragment>
    
    )
}
export default Orders
