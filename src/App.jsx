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
            /*  db.collection("usuarios").doc(user.uid).get().then((snap) =>{
              console.log(snap.data());
              const employeeData = snap.data();
              console.log(employeeData);
          if (employeeData.occupation === "chef"){
              props.history.push("/chef")
          } else {
              props.history.push('/waiter')
          } 
        })*/
        }else{
            setFirebaseUser(null)
     /*         props.history.push('/') */
        }
    })
}, /* [props.history] */) 
  return firebaseUser !== false ? (
    <Router>
    <div>
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
      <hr />
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








