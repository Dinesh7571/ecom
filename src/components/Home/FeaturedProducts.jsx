import React from 'react'

import './FeaturedProducts.css'
import ProductCard from '../Products/ProductCard'
const FeaturedProducts = () => {
  return (
  <section className="featured_products">
    <h2>Featured Products</h2>
    <div className=" align_center featured_products_list">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  </section>
  )
}

export default FeaturedProducts