import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductCardSkeleton = () => {
  return (
      <Skeleton className='product_card' width='230px'/>
  )
}

export default ProductCardSkeleton