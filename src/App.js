import React from 'react';
import {firebase} from './firebase'



function App() {

  React.useEffect(() => {

    const obtenerDatos = async () => {
        const db = firebase.firestore()
        try {
            const data = await db.collection('tareas').get()
            const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
            console.log(arrayData)      
        } catch (error) {
            console.log(error)
        }
    }
    obtenerDatos()

}, [])
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}

export default App;