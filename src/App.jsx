import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import Orders from './components/Orders'
import { auth } from './firebase'
import Login from './componentes/Login'
import Waiter from './componentes/Waiter'
import Chef from './componentes/Chef'

const App = (props) => {
  const [firebaseUser, setFirebaseUser] = React.useState(false)

 React.useEffect(() => {
    auth.onAuthStateChanged(user => {
        if(user){
            setFirebaseUser(user)
        }else{
            setFirebaseUser(null)

        }
    })
}, ) 

  return firebaseUser !== false ? (
    <Router>
    <div>
      <Route exact path="/" component={ Login } />
      <Route path="/waiter" component={ Waiter } />
      <Route path="/chef" component={ Chef } />
    </div>
  </Router>
      
    ) : (
      <div>Cargando...</div>
  )
}

export default App 