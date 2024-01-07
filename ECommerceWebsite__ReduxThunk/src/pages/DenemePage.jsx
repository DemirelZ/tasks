import React from 'react'
import { useSelector } from 'react-redux'

const DenemePage = () => {

    const durum=useSelector((store)=> store.productReducer)

    //console.log('durum',durum.products);

  return (
    <div>DDenemePage</div>
  )
}

export default DenemePage