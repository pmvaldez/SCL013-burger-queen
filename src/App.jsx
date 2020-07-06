import React from 'react';
import Login from './components/Login';
import Waiter from './components/Waiter';
import Chef from './components/Chef';
//import Orders from './components/Orders'
import {db, auth} from './firebase';
import Register from './components/Register';
import {BrowserRouter as Router, Route, useHistory, Link } from 'react-router-dom';

export default function App() {
 
  const history = useHistory();

React.useEffect(() => {
  auth.onAuthStateChanged((user) =>{
    console.log(user)
    if(user){
      db.collection("usuarios").doc(user.email).get().then((snap) =>{
        console.log(snap.data());
        const employeeData = snap.data();
        console.log(employeeData);
        if (employeeData.occupation === "waiter"){
          history.push("/waiter")
        } else {
          history.push('/chef')
        }
      })
    } else{
      history.push('/')
    }
  }
  )
  });
  

  return (
    <Router>
     <div>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="" component={Waiter} />
    <Route path="/chef" component={Chef} />
    </div>
    </Router>
    );
} 




