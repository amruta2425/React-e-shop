import React ,{useState, useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'


const Banner = () => {

function getCurrentUser(){
    const [user,setUser] = useState(null)
}

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://bestrated.co.nz/wp-content/uploads/2021/04/Dotti-1024x450.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Buy Gadgets</h3>
                    <p>Upto 60% off on all gadgets</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://bestrated.co.nz/wp-content/uploads/2021/04/Dotti-1024x450.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Buy Apple Products</h3>
                    <p>The Biggest Sale</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://bestrated.co.nz/wp-content/uploads/2021/04/Dotti-1024x450.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://bestrated.co.nz/wp-content/uploads/2021/04/Dotti-1024x450.jpg"
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3>Black Friday Sale</h3>
                    <p>All Gadgets 60% off</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner