import React from 'react'
import { useHistory } from "react-router-dom";
import { db, auth } from '../firebase';

const Register = () => {
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [occupation, setOccupation] = React.useState('waiter');
    const [error, setError] = React.useState(null)

    const history = useHistory();

    const register = () =>{
      
        auth.createUserWithEmailAndPassword(email, pass)
        .then(() => {
            db.collection("usuarios")
            .doc(auth.currentUser.email)
            .set({
            email:email,
            uid: auth.currentUser.uid,
            occupation: occupation,
            });
            setEmail('')
            setPass('')
            setError(null)
        }).then(() => {
            if (occupation === "waiter" ) {
                history.push("/waiter");
            } else {
                history.push("/chef"); 
            } 
        })
        .catch((error) => {
        console.log(error)
        if(error.code === 'auth/invalid-email'){
            setError('Email no válido')
        }
        if(error.code === 'auth/email-already-in-use'){
            setError('Email ya utilizado')
        }
    })

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
        register()
    } */
   
    return (
        <div className="mt-5">
            <h3 className="text-center">Registro</h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form className="form-container" >
                        <input 
                            value={email}
                            type="email" 
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                            onChange={(e) => setEmail(e.currentTarget.value) }
                            
                        />
                        <input 
                            value={pass}
                            type="password" 
                            className="form-control mb-2"
                            placeholder="Ingrese Contraseña"
                            onChange={(e) => setPass(e.currentTarget.value) }
                            value={pass}
                        />
                         <select className="form-control mb-2" name="function" onChange={e => setOccupation(e.currentTarget.value)}>
                            <option value=''>Elige Ocupación</option>
                            <option value="kitchen">Cocinero</option>
                            <option value="waiter">Mesero</option>
                         </select>
                         <div className="btn-container">
                           <button 
                            className="btn btn-lg btn-dark btn-block"
                            onClick={(e) => { register(); e.preventDefault(); }}
                            >Registrar  
                        </button>

                        <button 
                            className="btn btn-sm btn-info btn-block"
                            onClick={() => {history.push("/")}}
                        > ¿Ya tienes cuenta?
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
    }
}
export default Register
