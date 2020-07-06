import React from 'react'
//import Navbar from './Navbar'
import {NavLink} from 'react-router-dom'

const home = () => {


    return (
<div className="navbar navbar-dark bg-dark">
            <div>
                <div className="d-flex">
                    <NavLink 
                        className="btn btn-dark mr-2" 
                        to="/chef"
                        exact
                    >COCINA
                    </NavLink>
                    <NavLink 
                        className="btn btn-dark mr-2" 
                        to="/waiter"
                        exact
                    >MESERO
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default home
