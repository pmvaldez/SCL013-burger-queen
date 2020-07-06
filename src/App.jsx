import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Waiter from './components/Waiter'
import Chef from './components/Chef'
import Orders from './components/Orders'
import {auth } from './firebase'
import Home from './components/Home'

const App = () => {
  const [firebaseUser, setFirebaseUser] = React.useState(false)

React.useEffect(() => {
    auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
            setFirebaseUser(user)
        }else{
            setFirebaseUser(null)
        }
    })
}, [])

  return firebaseUser !== false ? (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/" exact>
                      <Login />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/waiter">
                        <Waiter />
                    </Route>
                    <Route path="/orders">
                        <Orders />
                    </Route>
                    <Route path="/chef">
                        <Chef />
                    </Route>
                </Switch>
            </div>
        </Router>
    ) : (
      <div>Cargando...</div>
  )
}

export default App 