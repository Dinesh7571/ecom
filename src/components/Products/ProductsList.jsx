import React, { useEffect, useState } from 'react'

import apiClient from '../../utils/api-client'
import './ProductsList.css'
import ProductCard from './ProductCard'

const ProductsList = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")
  useEffect(()=>{
          apiClient.get("/products").then(res=>setProducts(res.data.products))
          .catch(err=>setError(err.message))
  },[])
  return (
    <section className="products_list_section">
        <header className="align_center products_list_header">
            <h2>Products</h2>
            <select name="sort" id="" className="products_sorting">
                <option value="">Relevance</option>
                <option value="price desc">Price High to Low</option>
                <option value="price asc">Price Low to High</option>
                <option value="rate desc">Rate High to Low</option>
                <option value="rate asc">Rate Low to High</option>
            </select>
        </header>
        <div className="products_list">
          {error && <em className="form_error">{error}</em> }
           {products.map(product=>( 
              <ProductCard
               key={product._id}
               image={product.images[0]}
               title={product.title}
               price={product.price}
               rating={product.reviews.rate}
               ratingCounts={product.reviews.counts} stock={product.stock}/>
           ))}
           
        </div>
    </section>
  )
}

export default ProductsList