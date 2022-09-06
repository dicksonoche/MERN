import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import data from '../data'

//I use Link instead of Anchor in order to fix the page refresh, as I want to creat a single page application with multiple screens
const HomePage = () => {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios.get('/api/products');
    setProducts(result.data);
    };
    fetchData();
  },)
  //useEffect accepts two parameters. A function and an array. The array is empty because the function...
  //...would be run inside the useEffect only once after rendering this component

  //Async function sends an ajax request, then axios.get method is called to send... 
  //...an ajax request to the api's address, and put the result in the result variable.
  //setProducts parameter in the useEffect returns the result from the backend
  return (
    <>
        <h1>Featured Products</h1>
        <div className="products">
        {
          products.map(product => 
          (<div className="productItem" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="productInfo">
            <Link to={`/product/${product.slug}`}>
            <p>
              {product.name}
            </p>
            </Link>
            <p>
              <strong>${product.price}</strong>
            </p>
            <button>Add to cart</button>
            </div>
          </div>))
        }
        </div>
    </>
  )
}

export default HomePage