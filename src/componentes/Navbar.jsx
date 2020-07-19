import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {auth} from '../firebase'
import Login from './Login'
import logo from '../imagen/logo.jpg'
import outline_power from '../imagen/outline_power.png'
import '../estilos/navbar.css'

const Navbar = (props) => {

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/')
            })
    }

    return (
        <div className="navbar navbar-dark bg-dark">
            
            <h2 className="mr-auto textNav">Mesero</h2>
            <img className="navLogo"alt="logo" src={logo}/>
            <div>
                <div className="d-flex ml-auto">
                    <NavLink 
                        className="btnNavpedido" 
                        to="/Orders"
                        exact
                    >
                        Estado Pedidos
                    </NavLink>
                    {
                        props.firebaseUser !== null ? (
                        <img onClick={() => cerrarSesion()} className="btn btnclose" src={outline_power} alt="" />
                        ): (
                        <NavLink 
                            className="btn btn-dark" 
                            to="/"
                        >
                            <Login />
                        </NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)