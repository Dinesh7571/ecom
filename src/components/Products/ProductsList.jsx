import useData from '../../Hooks/useData'

import ProductCardSkeleton from './ProductCardSkeleton'
import './ProductsList.css'
import ProductCard from './ProductCard'
import { useSearchParams } from 'react-router-dom'
import { object } from 'zod'
import Pagination from '../Common/Pagination'
import { useEffect,useState } from 'react'

const ProductsList = () => {
  
  const [search,setSearch]=useSearchParams()
  const [sortBy, setSortBy] = useState([])
  const [sortedProducts, setSortedProducts] = useState([])
  const category = search.get("category")
  const page=search.get("page")
  const searchQuery = search.get("search")
  const {data,error, isLoading}=useData("/products",{
    params:{
      search:searchQuery,
      category,
      page

    }
  },[searchQuery,category,page]);

  const skeleton=[1,2,3,4,5,6,7,8]
  const handlePageChange=page=>{
    const currentParams= Object.fromEntries([...search])

    setSearch({...currentParams ,page:page})
  }
useEffect(()=>{
  if(data && data.products){
    const proudcts=[...data.products]
    if(sortBy==="price desc"){
    setSortedProducts(proudcts.sort((a,b)=>b.price-a.price))  
    }else if(sortBy==="price asc"){
      setSortedProducts(proudcts.sort((a,b)=>a.price-b.price)) 

    }else if(sortBy==="rate desc"){
      setSortedProducts(proudcts.sort((a,b)=>b.reviews.rate-a.reviews.rate)) 

    }else if(sortBy==="rate asc"){
      setSortedProducts(proudcts.sort((a,b)=>a.reviews.rate-b.reviews.rate)) 

    }else{
      setSortedProducts(proudcts)
    }
  }
},[sortBy,data])

  return (
    <section className="products_list_section">
        <header className="align_center products_list_header">
            <h2>Products</h2>
            <select name="sort" id="" className="products_sorting" onChange={e=>setSortBy(e.target.value)}>
                <option value="">Relevance</option>
                <option value="price desc">Price High to Low</option>
                <option value="price asc">Price Low to High</option>
                <option value="rate desc">Rate High to Low</option>
                <option value="rate asc">Rate Low to High</option>
            </select>
        </header>
        <div className="products_list">
          {error && <em className="form_error">{error}</em> }
          {isLoading ? skeleton.map(n=> <ProductCardSkeleton key={n}/> )
            :sortedProducts.map(product=>( 
              <ProductCard
              key={product._id}
              id={product._id}
               product={product}
               />
           ))}    
        </div>
       { data && <Pagination 
        totalPosts={data.totalProducts}
        postsPerPage={8}
        currentPage={page}
        onClick={handlePageChange} 
        />}
    </section>
  )
}

export default ProductsList