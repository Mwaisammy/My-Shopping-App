import {createSlice} from '@reduxjs/toolkit'


const  initialState = {
    cart: [],
    itemCount: 0,
};
const cartslice = createSlice({
    name: 'cart',
   initialState,

    reducers: {
        addToCart: (state, action) => {
           
            // console.log(action.payload)

            const productExists = state.cart.some((product) => product.id === action.payload.id);

            if(productExists){
                alert("Product already exists in cart")
            }
            else{
                state.cart.push(action.payload)
                state.itemCount += 1;
            }

        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((product) => product.id!== action.payload);
            state.itemCount -= 1;
        }
        
    }
    


})

// console.log(initialState.cart)
export const { addToCart, removeFromCart } = cartslice.actions;

export default cartslice.reducer;