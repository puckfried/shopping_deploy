import React from 'react'

export default function ProductDetail(props) {
   const {addCart, id, product, change} = props
    function handleClick() {
        addCart()
        change(id)
    }
    return (
        <div>
            <li key={id}>{product.title} || {product.price}€ || {product.inventory}</li>
            {product.inventory === 0 ? <button style={{background: 'red', border: 'none'}}>Sold out</button> : <button style={{background: 'darkgreen', color: 'white'}}onClick={() => handleClick()}>Shop me</button> }
            
        </div>
    )
}
