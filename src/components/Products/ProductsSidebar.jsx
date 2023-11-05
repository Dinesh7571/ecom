import React from 'react'

import './ProductsSidebar.css'
import useData from '../../Hooks/useData'
import LinkWithIcon from '../Navbar/LinkWithIcon'

const ProductsSidebar = () => {
  
  
  const {data:categories,error}=useData("/category")

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_error">{error}</em> }
       {categories && categories.map(category=>
        <LinkWithIcon
          key={category._id}
          title={category.name}
          link={`/products?category=${category.name}`}
          emoji={`http://localhost:5000/category/${category.image}`}
          sidebar={true}
        />
        )} 
        
        
      </div>
    </aside>
  )
}

export default ProductsSidebar