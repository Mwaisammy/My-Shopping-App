import { Badge } from '@mui/material'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()

  const itemCount = useSelector((state) => state.cart.itemCount);


  return (
    <>

<div className="fixed top-0  bg-black  -left-0 right-0 p-[16px] flex items-center justify-between  shadow-md">
        <h1 className='text-white font-bold'>Shopping app</h1>
        <button onClick={() => navigate('/cart')} className='bg-green-500 ml-auto mr-5 rounded-md text-white py-3 px-5 cursor-pointer hover:bg-yellow-400 hover:scale-110 duration-300 ease-out '> CART</button>
        <div className='right-0 '>
          <Badge className='text-yellow' badgeContent={itemCount} color='primary'>
          <ShoppingCart className='text-white ' />
          </Badge>

 
        
        </div>
    </div>

    </>
  )
}

export default Header