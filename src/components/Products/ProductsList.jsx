import useData from '../../Hooks/useData'

import ProductCardSkeleton from './ProductCardSkeleton'
import './ProductsList.css'
import ProductCard from './ProductCard'
import { useSearchParams } from 'react-router-dom'
import { object } from 'zod'
import Pagination from '../Common/Pagination'

const ProductsList = () => {
  
  const [search,setSearch]=useSearchParams()
  const category = search.get("category")
  const page=search.get("page")

  const {data,error, isLoading}=useData("/products",{
    params:{
      category,
      page
    }
  },[category,page]);
  const skeleton=[1,2,3,4,5,6,7,8]
  const handlePageChange=page=>{
    const currentParams= Object.fromEntries([...search])

    setSearch({...currentParams ,page:page})
  }
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
          {isLoading ? skeleton.map(n=> <ProductCardSkeleton key={n}/> )
            :data?.products.map(product=>( 
              <ProductCard
              id={product._id}
               key={product._id}
               image={product.images[0]}
               title={product.title}
               price={product.price}
               rating={product.reviews.rate}
               ratingCounts={product.reviews.counts} stock={product.stock}/>
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