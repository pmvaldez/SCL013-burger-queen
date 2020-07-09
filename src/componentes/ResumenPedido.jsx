import React, { Fragment } from 'react'

const ResumenPedido = (props) => {


    return (

        <Fragment>
            <ul>
                <li>{props.nombre}</li>
                <p>{props.total} </p>
            </ul>


        </Fragment>


    )
}

export default ResumenPedido;