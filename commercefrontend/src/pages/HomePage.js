import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

//I use Link instead of Anchor in order to fix the page refresh, as I want to creat a single page application with multiple screens
const HomePage = () => {
  return (
    <>
        <h1>Featured Products</h1>
        <div className="products">
        {
          data.products.map(product => 
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