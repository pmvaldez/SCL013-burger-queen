import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {auth} from '../firebase'
import Login from './Login'

const Navbar = (props) => {

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/')
            })
    }

    return (
        <div className="navbar navbar-dark bg-dark">
            <h2>Cocinero</h2> 
            <div>
                <div className="d-flex">
                    <NavLink 
                        className="btn btn-dark mr-2" 
                        to="/Orders"
                        exact
                    >
                        Pedidos
                    </NavLink>
{/*                     {
                        props.firebaseUser !== null ? (
                            <NavLink 
                                className="btn btn-dark mr-2" 
                                to="/admin"
                            >
                                Admin
                            </NavLink>
                        ) : null
                    } */}
                    {
                        props.firebaseUser !== null ? (
                        <button 
                            className="btn btn-dark" 
                            onClick={() => cerrarSesion()}
                        >
                            Cerrar Sesión
                        </button>
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