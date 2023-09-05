import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';


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
                toast.error("Product already exists in cart")
            }
            else{
                state.cart.push(action.payload)
                state.itemCount += 1;
                toast.success("Product added to cart")
                
            }

        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((product) => product.id!== action.payload);
            state.itemCount -= 1;
            toast.success("Product removed from cart")
        }
        
    }
    


})

// console.log(initialState.cart)
export const { addToCart, removeFromCart } = cartslice.actions;

export default cartslice.reducer;