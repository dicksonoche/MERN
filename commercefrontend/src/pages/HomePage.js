// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import logger from 'use-reducer-logger'
//import data from '../data'

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
//reducer accepts two parameters: the current state, ...
//...and the action that changes and creates a new state. We define a switchcase inside the useReducer

//I use Link instead of Anchor in order to fix the page refresh, as I want to creat a single page application with multiple screens
const HomePage = () => {
 
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  //Define an array that contains two parameters: an object and "dispatch" to call an action and update state
  //useReducer accepts two parameters: the reducer and the default state

  // const [products, setProducts] = useState([]);

  //dispatch the FETCH_REQUEST case before the ajax code so the loader can show while waiting for data from the api
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({type: 'FETCH_FAIL', payload: err.message})
      }
      
      //setProducts(result.data);
    };
    fetchData();
  }, []);
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
          loading ? ( 
          <div>Loading...</div>
        ) : error ? ( 
          <div>{error}</div>
        )  : (
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
        )}
        </div>
    </>
  );
}


//Install package to log state changes of dispatching actions "npm install use-reducer-logger --force"

export default HomePage