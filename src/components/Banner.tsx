import { Carousel } from 'react-bootstrap'
import './banner.css'

export default function Banner() {
  return (
    // Слайдер на всю высоту окна, без изменения размеров при перелистывании
    <div className="banner-full">
      <Carousel interval={4000} indicators controls fade>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
          alt="First slide"
          />
          <Carousel.Caption>
            <h3>Hot Deals</h3>
            <p>Save big on popular gadgets</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="d-block w-100 banner-img"
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop"
          alt="Second slide"
        />
          <Carousel.Caption>
            <h3>New Arrivals</h3>
            <p>Check the latest products</p>
          </Carousel.Caption>
        </Carousel.Item>
         <Carousel.Item>
          <img
          className="d-block w-100 banner-img"
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop"
          alt="Second slide"
        />
          <Carousel.Caption>
            <h3>New Arrivals</h3>
            <p>Check the latest products</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}


