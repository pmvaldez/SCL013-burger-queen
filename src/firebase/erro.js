const erro = (error) => {
    const errorCode = error.code;
    if (errorCode === 'auth/weak-password') { alert('La contraseña debe tener al menos 6 caracteres') }
    if (errorCode === 'auth/email-already-in-use') { alert('El correo electrónico informado ya está en uso') }
    if (errorCode === 'auth/operation-not-allowed') { alert('Cuenta no ativada') }
    if (errorCode === 'auth/invalid-email') { alert('Email inválido') }
    if (errorCode === 'auth/user-disabled') { alert('Usuario desabilitado') }
    if (errorCode === 'auth/user-not-found') { alert('Usuario não encontrado') }
    if (errorCode === 'auth/wrong-password') { alert('Contraseña incorreta') }
}

export default erro