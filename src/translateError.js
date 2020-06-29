const erro = (error) => {
    const errorCode = error.code;
    if (errorCode === 'auth/weak-password') { alert('mínimo 6 caracteres') }
    if (errorCode === 'auth/email-already-in-use') { alert('O e-mail informado en uso') }
    if (errorCode === 'auth/operation-not-allowed') { alert('Contara ativada') }
    if (errorCode === 'auth/invalid-email') { alert('Email inválido') }
    if (errorCode === 'auth/user-disabled') { alert('Usuário desabilitado') }
    if (errorCode === 'auth/user-not-found') { alert('Usuário no encontrado') }
    if (errorCode === 'auth/wrong-password') { alert('Pass incorreta') }
}

export default erro
