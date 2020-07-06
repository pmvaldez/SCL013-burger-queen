import React from 'react'
import { auth } from '../firebase'
import { useHistory } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
   
    const history = useHistory();

    /* const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim() || !pass.trim()){
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
        if(!pass.trim()){
            console.log('Datos vacíos pass!')
            setError('Datos vacíos pass!')
            return
        }
        if(pass.length < 6){
            console.log('6 o más carácteres')
            setError('6 o más carácteres en pass')
            return
        }
        console.log('correcto...')
        setError(null)
        login()
    } */

     const login = () => {
        auth.signInWithEmailAndPassword(email, pass)

        .catch((error) => {
            console.log(error)
            if(error.code === 'auth/invalid-email'){
                setError('Email no válido')
            }
            if(error.code === 'auth/user-not-found'){
                setError('Email no registrado')
            }
            if(error.code === 'auth/wrong-password'){
                setError('Contraseña incorrecta')
            }
        });
    }

    return (
        <div className="mt-5">
            <h3 className="text-center">Login</h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form className="form-container">
                        <input 
                            type="email" 
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                            onChange={(e) => setEmail(e.Target.value) }
                            value={email}
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2"
                            placeholder="Ingrese Contraseña"
                            onChange={(e) => setPass(e.Target.value) }
                            value={pass}
                        />
                         <div className="btn-container">
                         <button 
                            className="btn btn-lg btn-dark btn-block"
                            type="button"
                            onClick={(e) => {login(); e.preventDefault();
                              }}
                            >Acceder</button>

                        <button 
                            className="btn btn-lg btn-dark btn-block"
                            type="button"
                            onClick={(e) => {
                                history.push("/register"); e.preventDefault();
                              }}
                        >¿No tienes cuenta?
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
