import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id, qty } = useParams()
    let total = id * qty

  return (
    <div>
        ProductDetail {id} {qty} {total}
    </div>
  )
}

export default ProductDetail