import React, { useState } from 'react';
import 'firebase/auth';
import erro from '../translateError';
import { useFirebaseApp } from 'reactfire'

export default (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const firebase = useFirebaseApp();

    const submit = ()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then().catch((error) => { erro(error) });
    }
    
     return(
        <div>
            <div>
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" id="email" onChange={e => setEmail(e.currentTarget.value)}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" onChange={e => setPassword(e.currentTarget.value)}/>
            <button onClick={submit}>ingresa</button>
            </div>
        </div>
    )
}
