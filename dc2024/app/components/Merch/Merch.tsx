import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ProductCard from '../ProductCard/ProductCard'
import styles from './Merch.module.css'
import ViewResourcesButton from './ViewResourcesButton'

const Merch = () => {
  const products = [
    {
      title: "AI T-Shirt",
      img: "/images/SHIRT_AI.png",
      // price: "RM30 / PC",
      link: "https://www.instagram.com/deanscupfcsit/"
    },
    {
      title: "CSN T-Shirt",
      img: "/images/SHIRT_CSN.png",
      // price: "RM30 / PC",
      link: "https://www.instagram.com/deanscupfcsit/"
    },
    {
      title: "IS T-Shirt",
      img: "/images/SHIRT_IS.png",
      // price: "RM30 / PC",
      link: "https://www.instagram.com/deanscupfcsit/"
    },
    {
      title: "SE T-Shirt",
      img: "/images/SHIRT_SE.png",
      // price: "RM30 / PC",
      link: "https://www.instagram.com/deanscupfcsit/"
    },
  ]
  return (
    <section id="View Merch" className='bg-orange-100 mb-5'>
      <Container>
        <Row className="d-flex my-3">
          <h1 className={styles.merchTitle}>BROWSE <span className='font-bold'>MERCH</span></h1>
          <h3 className={styles.merchSubTitle}>Discover exclusive, high-quality merchandise designed just for you!</h3>
        </Row>
        <Row className='d-flex justify-content-center'>
            {products.map((item) => (
              <Col md={2} sm={6}>
                <ProductCard {...item} />
              </Col>
            ))}
        </Row>

        {/* <Row className='w-1/2 justify-self-center my-5'>
          <ViewResourcesButton title="Check here to buy" link={"https://contents.mediadecathlon.com/p2443025/k$e5e5baec678fa3efe451d0cf3968f360/t-shirt-500-blue-white-print-decathlon-8796424.jpg?f=1920x0&format=auto"}/>
        </Row> */}
      </Container>
    </section>
  )
}

export default Merch
