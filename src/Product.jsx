import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; // Remove useSelector, as you are not using it here
import { addToCart } from './Redux/cartSlice';
import Header from './Header';

function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  


  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    getData();
  }, [setProducts]); // Make sure to fetch data only once by providing an empty dependency array

  const addProduct = (product) => {
    dispatch(addToCart(product)); // Pass the product to addToCart
  };

  return (
    <div>
      <Header/>
      <h1 className='text-blue font-bold mt-[80px] ml-7 text-bold fixed '>OUR PRODUCTS</h1>
      <div className='grid grid-cols-3 gap-5 mt-3 '>
        {products.map((product) => (
          <div key={product.id} className='m-[25px] p-4 border border-gray-300 mt-[100px]'>
            <img src={product.image} alt={product.title} className='h-[200px] w-[150px] object-contain mt-10' />
            <button onClick={() => addProduct(product)} className='mt-4 py-4 px-2 bg-green-600 hover:bg-yellow-400 rounded-md '>Add to Cart</button>
            <p className='text-gray-300 font-medium'>{product.title}</p>
            <p className='text-yellow-300 font-medium'>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
