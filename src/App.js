import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Redirect } from 'react-router';
import firebase from './firebase/firebase-config'
import Login from './componentes/login';
import Chef from './componentes/chef';
import Mesero from './componentes/mesero';
import Pedidos from './componentes/pedidos';
import Registro from './componentes/registro';
import 'firebase/database';



function App() {

  const [roll, setRoll] = useState('')

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {

        let { uid } = user;
        firebase.firestore().collection("User").get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            if (doc.data()["user_uid"] === uid) {
              setRoll(doc.data().occupation);
            }
          });
        });
        
      } else {
        console.log("no users logged in")
        setRoll("noUsers");
      }
    });
  }, [])

/*   const logOut = () => {
    firebase.auth().signOut().then(() => {
      console.log("sucesso")
    }).catch((error) => {
      console.log("error")
    }); 
  }*/
  return (
    <div >
      <Router>
        <Switch>
          {roll === "Cocinero" ?
            (<>
              <Redirect to="/chef" />
              <Route path="/chef" component={Chef} />
            </>)
            : ((roll === "Mesero") ?
              (<>
                <Redirect to="/mesero" />
                <Route path="/mesero" component={Mesero} />
                <Route path="/pedidos" component={Pedidos} />
              </>)
              : (<>
                <Redirect to="/" />
                <Route exact path="/" component={Login} />
                <Route path="/registro" component={Registro} />
              </>)
            )
          }
        </Switch>
      </Router>
    </div>
  );

/* 
  return (
    <Router>
      <div>
      <Switch>
        <Route path ="/pedidos"> 
         <Pedidos />
        </Route>
        <Route path ="/mesero"> 
         <Mesero />
        </Route>
        <Route path ="/chef"> 
         <Chef />
        </Route>
        <Route path ="/registro"> 
         <Registro />
        </Route>
        <Route path ="/"> 
         <Login />
        </Route>
      </Switch>
      </div>
    </Router>
  );*/
}
 
export default App;
