import React from 'react'
import { Redirect } from 'react-router';
import {db, auth} from '../firebase'


const Login = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)
    const [occupation, setOccupation] = React.useState('')
    const [page, setPage] = React.useState('');

    const procesarDatos = e => {
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
        if(esRegistro){
            registrar()
        }else{
            login()
        }
    }
    const login = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)
            //props.history.push('/admin')
        } catch (error) {
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
        }
    }, [email, pass])
    const registrar = React.useCallback(async() => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)
            await db.collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid,
                occupation: occupation
            })
            setEmail('')
            setPass('')
            setPage(occupation)
            setError(null)
            //props.history.push('/admin')
        } catch (error) {
            console.log(error)
            if(error.code === 'auth/invalid-email'){
                setError('Email no válido')
            }
            if(error.code === 'auth/email-already-in-use'){
                setError('Email ya utilizado')
            }
        }
    }, [email, pass, occupation])
    return (
        <div className="mt-5">
            <h3 className="text-center">
                {
                    esRegistro ? 'Registro' : 'Login'
                }
            </h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            ) : null
                        }
                        <input 
                            type="email" 
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                            onChange={ e => setEmail(e.target.value) }
                            value={email}
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2"
                            placeholder="Ingrese Contraseña"
                            onChange={ e => setPass(e.target.value) }
                            value={pass}
                        />
                         <select className="form-control mb-2" name="function" onChange={e => setOccupation(e.currentTarget.value)}>
                            <option value=''>Elige Ocupación</option>
                            <option value="chef">Cocinero</option>
                            <option value="waiter">Mesero</option>
                         </select>
                        <button 
                            className="btn btn-lg btn-dark btn-block"
                            onClick={() => setPage('login')}
                            type="submit"
                        >
                            {esRegistro ? 'Registrar' : 'Acceder'}
                        </button>
                        <button 
                            className="btn btn-sm btn-info btn-block"
                            type="button"
                            onClick={() => setEsRegistro(!esRegistro)}
                        >
                            {esRegistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
                        </button>
                    </form>
                </div>
            </div>
            {page === 'chef' ? <Redirect to="/chef" /> : null}
            {page === 'waiter' ? <Redirect to="/waiter" /> : null}
            {page === 'login' ? <Redirect to="/" /> : null}
            
        </div>
    )
}
export default Login