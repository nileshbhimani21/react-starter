import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { shallowEqual, useSelector } from 'react-redux';
import Products from '../../component/Products';

export default function Shop() {
  const { shopDetails } = useSelector((state) => state.shop, shallowEqual);
  const [productsList, setProductsList] = useState(null)
  const [activeCat, setActiveCat] = useState("All")
  console.log(shopDetails,'shopDetails')
  useEffect(() => {
    setProductsList(shopDetails?.products)    
  }, [shopDetails])

  const handleFilter = (c) => {
    if (c === "All") {
      setProductsList(shopDetails?.products)
    } else {
      const newProducts = shopDetails?.products.filter(e => e.category.indexOf(c) !== -1)
      setProductsList(newProducts)
    }
    setActiveCat(c)
  }
  return (
    <Container>
      <div className='d-flex align-items-center justify-content-center gap-3 mb-5'>
        {shopDetails?.category.map((c, i) => {
          return (
            <Button key={i} className={c === activeCat && "active"} variant='category' onClick={() => handleFilter(c)}>{c}</Button>
          )
        })}
      </div>
      <Row>
        {productsList && productsList?.length > 0 ? productsList?.map((product, i) => {
          return (
            <Products key={i} data={product} />
          )
        }) : (
          <div className='col text-center'>Data not available</div>
        )}
      </Row>
    </Container>
  )
}