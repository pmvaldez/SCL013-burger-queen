import React, { Fragment } from 'react'
import { db } from '../firebase'
import '../estilos/pedidoschef.css'
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import 'moment/locale/es';


const hmh = require('hmh');



const PedidosChef = () => {

    const [orders, getOrders] = React.useState([])
    const [orderdone, setOrderDone] = React.useState([])
    const [delivery, setDelivery] = React.useState([])
    const [isOpen, setIsOpen] = React.useState(false);

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
    
    const showModal = () => {
      setIsOpen(true);
    };
    
    const hideModal = () => {
      setIsOpen(false);
    };

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

/*          deleteOrder = (item) => {
        db.collection("pedidos").doc(item.id).delete()
        .then(() => {
          console.log("Document successfully deleted!");
          hideModal()
      }).catch((error) => {
          console.error("Error removing document: ", error);
      });
    }
 */
    return (
        <Fragment>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Body>¿ Estas seguro que quieres cancelar este pedido ?</Modal.Body>
                <Modal.Footer>
                    <button class="btn btn-dark" onClick={hideModal}>Cancelar</button>
                    <button class="btn btn-warning">Aceptar</button>
                </Modal.Footer>
            </Modal>
        <div className="container">
            <h2>Pedidos a realizar</h2>
            <div className="row row-cols-3 ">
                {orders.map((order) => { 
                return (
                    <div className="h5">
                        <section className="section" key={order.id}  >
                            <div className="row columnLength">
                                <p className="text client-text orders"> Cliente: {order.cliente}</p>
                                <p className="text client-text orders"> Mesas: {order.numMesa}</p>
                                <p className="text client-text orders"> Hora{moment(order.orhourDone).format('LLL')}</p>
                                <span className="menu-name text orders">Pedidos:</span>
                                {order.pedido.map(item => <span className="order-kitchen" key={item.id}>
                                    <ul>
                                        <li> {item.countProducto} {item.nombreProducto} </li>    
                                    </ul> 
                                </span>)} 
                                <div className="orders footer">
                                    <button class="btn btn-dark" onClick={showModal}>Cancelar</button>
                                    <button class="btn btn-light ok" onClick={() => orderDone(order)}>Listo</button>
                                </div>
                            </div>
                        </section>
                    </div>
                )
                })}
            </div>
        </div>
       
        <div className="container">
          <h2 className="h2">Pedidos entregados</h2>
          <div className="row row-cols-3 ">
              {delivery.map((item, index) => {
              const send = `${new Date(item.hourSend).getHours()}h ${new Date(item.hourSend).getMinutes()}m`;
              const hDelivered = `${new Date(item.hourDelivered).getHours()}h ${new Date(item.hourDelivered).getMinutes()}m`;
              const difftime = (hmh.diff(`${send}`, `${hDelivered}`).toString());
              return (
                <div className="h5" key={index} >
                    {item.status === 'delivered' ?
                    <section className="section">
                        <div className="row time">
                            <div className="menu-name">
                                <p className="card-title"> Cliente: {item.cliente}</p>
                                <p className="card-title"> Mesa: {item.numMesa}</p>
                                <span className="menu-name text">Pedidos:</span>
                                {item.pedido.map((item, index) =>
                                <span className="order-kitchen" key={index}> {item.countProducto} {item.nombreProducto}</span>)}
                                <span className="time">Tiempo de preparacion:{difftime}</span>
                            </div>
                        </div>
                    </section>

                    : null}

                </div>                  

              )
              })}

            </div>
        </div>    
    </Fragment>
)
}

export default PedidosChef
