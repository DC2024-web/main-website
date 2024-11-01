import React from 'react'
import { Container, Row } from 'reactstrap'
import ProductCard from '../ProductCard/ProductCard'
import styles from './Merch.module.css'
import ViewResourcesButton from './ViewResourcesButton'

const Merch = () => {
  const products = [
    {
      title: "T-Shirt (Light Mode)",
      img: "/images/SHIRT_EXAMPLE.png",
      price: "RM30 / PC",
      link: "https://www.figma.com/design/vTGqhu28HYCZnY45n8MlYg/DC24-WEBSITE?node-id=31-3&node-type=frame&t=xDdlnN9IX6ZAnzsN-0"
    },
    {
      title: "T-Shirt (Dark Mode)",
      img: "/images/SHIRT_EXAMPLE.png",
      price: "RM30 / PC",
      link: "https://www.figma.com/design/vTGqhu28HYCZnY45n8MlYg/DC24-WEBSITE?node-id=31-3&node-type=frame&t=xDdlnN9IX6ZAnzsN-0"
    },
    {
      title: "T-Shirt (Dark Mode)",
      img: "/images/SHIRT_EXAMPLE.png",
      price: "RM30 / PC",
      link: "https://www.figma.com/design/vTGqhu28HYCZnY45n8MlYg/DC24-WEBSITE?node-id=31-3&node-type=frame&t=xDdlnN9IX6ZAnzsN-0"
    },
    {
      title: "T-Shirt (Light Mode)",
      img: "/images/SHIRT_EXAMPLE.png",
      price: "RM30 / PC",
      link: "https://www.figma.com/design/vTGqhu28HYCZnY45n8MlYg/DC24-WEBSITE?node-id=31-3&node-type=frame&t=xDdlnN9IX6ZAnzsN-0"
    },
  ]
  return (
    <section id="Buy Merch" className='bg-orange-100'>
      <Container className=''>
        <Row className="d-flex my-3">
          <h1 className={styles.merchTitle}>BROWSE <span className='font-bold'>MERCH</span></h1>
          <h3 className={styles.merchSubTitle}>Discover exclusive, high-quality merchandise designed just for you!</h3>
        </Row>
        <Row md={2}>
          {products.map((item) => (
            <ProductCard {...item} />
          ))}
        </Row>

        <Row className='w-1/2 justify-self-center my-5'>
          <ViewResourcesButton title="Check here to buy" link={"https://contents.mediadecathlon.com/p2443025/k$e5e5baec678fa3efe451d0cf3968f360/t-shirt-500-blue-white-print-decathlon-8796424.jpg?f=1920x0&format=auto"}/>
        </Row>
      </Container>
    </section>
  )
}

export default Merch
