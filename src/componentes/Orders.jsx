import React from 'react'

const Orders = () => {
    
    //const [orderdone, setOrderDone] = React.useState([])
    //const [delivery, setDelivery] = React.useState([]);
/*     React.useEffect(() => {
        db.collection('pedidos').where('status', '==', 'pending').onSnapshot({ includeMetadataChanges: true }, (snap => {
            const pedidos = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            getOrders(pedidos);
        })
        )
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
    
    const orderDone = (item) => {
    firebase
      .firestore().collection('orders').doc(item.id).update({
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
  } */
    return (
        <div>

        </div>
    
    )
}
export default Orders
