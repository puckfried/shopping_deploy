import React from 'react'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import { useReducer, useState, useContext } from 'react'
import StoreContext from '../Context'
import Reducer from './Reducer'

export default function ProductList(props) {

    function changeAmount(id) {
        const tmp = data.map( (element) => {
            if (element.id === id){
                element.inventory = element.inventory-1}
            return element})
        setData(tmp)
    }
    
    const initialState = {cart: []}
    const [state, dispatch] = useReducer( Reducer, initialState)
    
    const {data, setData} = useContext(StoreContext)
    

      return (
        <div>
             <h2>Products</h2>
             {data.map((element) => {
                  return (
                    <ProductDetail product={element} id={element.id} addCart={() => dispatch({type: 'shop', payload: element})} change={changeAmount}/>
                    )  
             })}
           <Cart cart={state.cart}/>
            
        </div>
    )
}