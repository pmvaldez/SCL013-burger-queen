import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Redirect } from 'react-router'
import Login from './components/Login'
import Waiter from './components/Waiter'
import Chef from './components/Chef'
//import Orders from './components/Orders'
import {db, auth} from './firebase'



const App = () => {
  const [firebaseUser, setFirebaseUser] = React.useState(false)
  const [roll, setRoll] = React.useState('')

React.useEffect(() => {
    auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
            setFirebaseUser(user)
            let { uid } = user;
            db.collection("usuarios").get().then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                if (doc.data()["user_uid"] === uid) {
                  setRoll(doc.data().occupation);
                }
              });
            });
        }else{
            setFirebaseUser(null)
            console.log("no users logged in")
            setRoll("noUsers");
        }
    })
}, [])

  return firebaseUser !== false ? (
    <div className="container">
        <Router>    
                <Switch>
                    {roll === "chef" ? (<>
                        <Redirect to="/chef" />
                        <Route path="/chef" component={Chef} />
                    </>) 
                    :((roll === "waiter") ? 
                    (<>
                        <Redirect to="/waiter" />
                        <Route path="/waiter" component={Waiter} />
                    </>) 
                    : (<> 
                        <Redirect to="/" />
                        <Route exact path="/" component={Login} />
                     </>) 
                    ) 
                    }
                </Switch>
        </Router>
        </div>
  ) : (
      <div>Cargando...</div>
  )
}

export default App
