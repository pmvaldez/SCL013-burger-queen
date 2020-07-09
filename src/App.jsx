import React, { Fragment } from 'react'
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
    <Fragment>
       {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/waiter">Waiter</Link>
        </li>
        <li>
          <Link to="/chef">Chef</Link>
        </li>
      </ul>  */}
      <Route exact path="/" component={ Login } />
      <Route path="/waiter" component={ Waiter } />
      <Route path="/chef" component={ Chef } />
    </Fragment>
  </Router>
    ) : (
      <div>Cargando...</div>
  )
}

export default App 
