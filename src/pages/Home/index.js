import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Shop from '../../component/Shop';

export default function Home() {
  const { shops, category } = useSelector((state) => state.home);
  const [shopList, setShopList] = useState(null)
  const [activeCat, setActiveCat] = useState("All")
  
  useEffect(()=>{
    setShopList(shops)
  },[shops])

  const handleFilter = (c) => {
    const newShops = shops.filter(e => e.category.indexOf(c) !== -1)
    setShopList(newShops)
    setActiveCat(c)
  }
  return (
    <Container>
      <div className='d-flex align-items-center justify-content-center gap-3 mb-5'>
        {category.map((c, i) => {
          return (
            <Button key={i} className={c === activeCat && "active" } variant='category' onClick={() => handleFilter(c)}>{c}</Button>
          )
        })}
      </div>
      <Row>
        {shopList && shopList.length > 0 ? shopList.map(shop => {
          return (
            <Shop key={shop.id} data={shop} />
          )
        }):(
          <div className='text-center'>Data not available</div>
        )}
      </Row>
    </Container>
  )
}