import {db} from '../firebase'

export const enviarOrden = (nombre, mesa, producto, estado, totalp, fecha, ) =>
    db
    .firestore()
    .collection('Orden')
    .add({
        nombre,
        mesa,
        producto,
        fecha,
        estado,
        totalp,
    });