export default function Reducer(state, action) {
    switch (action.type) {
    case 'shop':
       const tmpItem = state.cart.find((item, index) => {
            return (item.id === action.payload.id)})
        
       if (tmpItem) {
          return {cart: state.cart.map((item) => {
              return(
                  item.id === action.payload.id ? {...item, amount: item.amount+1, storage: item.storage-1 } : item 
              )
          })
        }}
                    
          else {
            return ({cart: [...state.cart, {id: action.payload.id, name: action.payload.title, amount: 1, storage: action.payload.inventory}]})
          }

        
    default:
        return state
}
}