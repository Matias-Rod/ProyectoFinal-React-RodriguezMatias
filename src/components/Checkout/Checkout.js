import Formulario from "../Form/Formulario";

import React from 'react'

const Checkout = () => {


    return (
        <div>
            <div>
                <h1 className="pt-3 ">Checkout de la compra</h1>
            </div>
            <div className="d-flex align.items-center justify-content-center w-100 my-4 py-5">
                <Formulario />
            </div>
        </div>
    )
}

export default Checkout