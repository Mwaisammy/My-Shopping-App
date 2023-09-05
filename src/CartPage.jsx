import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './Redux/cartSlice'
import { useNavigate } from 'react-router-dom';

function CartPage() {

    const products = useSelector((state) => state.cart.cart)
    // console.log(); // Check the contents of products array

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId))
    }

  return (

    <>
    
    <div>
      <header>
        <nav className='flex bg-black w-full py-2 px-3 '>
          <h1 className='text-white font-semibold text-2xl ml-3'>Your Cart</h1>

      <button onClick={()=>navigate('/')}className='bg-green-500 text-white hover:bg-blue-400 px-3 py-3 rounded-md ml-auto mr-[10px] hover:scale-105 duration-120 transition-all ease-out'>Home</button>
        </nav>
    
      
      </header>



      <div className='grid grid-cols-3 gap-3 mt-5 '>
      {products.map((product) => (
        <div key={product.id} className=' m-[25px] p-4 border border-gray-300 mt-[100px]'>
            <img src={product.image} alt={product.title} className='h-[200px] w-[150px] object-contain mt-10 ml-4  py-4 px-2'/>
            <button onClick={()=> handleRemoveFromCart(product.id)}className='bg-green-500  rounded-md text-white px-3 py-4 mb-[10px] hover:bg-red-400 transition duration-300 ease-in-out hover:scale-105 '>Remove from cart</button>
            {/* {console.log(product.id)} */}
            <p className='text-gray-300 font-medium'>{product.title}</p>
            <p className='text-yellow-300 font-medium'>${product.price}</p>
        </div>
      ))}

      </div>
    </div>
    
    </>
  )
}

export default CartPage
