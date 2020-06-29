import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './componentes/login';
import Chef from './componentes/chef';
import Mesero from './componentes/mesero';
import Pedidos from './componentes/pedidos';
import Registro from './componentes/registro';



function App() { 
  const firebase = useFirebaseApp();
console.log(firebase);
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
  );
}

export default App;
