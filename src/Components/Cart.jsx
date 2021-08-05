import React from 'react'

export default function Cart(props) {
    return (
        <>
            <h3>Shopping Cart</h3>
            {props.cart.map ((element) => <div>{element.id} - {element.name} - {element.amount} pieces</div>)}
        </>
    )
}
