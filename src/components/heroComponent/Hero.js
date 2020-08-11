import React,{useEffect} from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './HeroStyle.css';
import AppBar from '../AppBar/Navbar';
import hero from '../../assets/images/hero.png';
import AOS from 'aos'

function Hero() {

  useEffect(() =>{
    AOS.init({
      offset:200,
      duration:1000,
      easing: 'ease-in-sine',
      delay: 200,


    });
    AOS.refresh()
  })
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        borderBottomRightRadius: '10%',
      }}
    >
      <AppBar />
      <Container>
        <Row className='justify-content-md-center'>
          <Col md={6} sm={12} xs={12}>
            <div className='intro-text-section' data-aos = "zoom-in">
              <h3 className='m-heading' style = {{fontFamily:'Arial, Helvetica, sans-serif'}}>HI there!</h3>
              <h1 className='l-heading' data-aos = "zoom-out">
                I'm <span className='secondary-text'> Awais </span> Jutt
              </h1>
              <p className='leads' data-aos = "fade-up">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
                <br /> It has roots in a piece of classical.
              </p>
              <h3 data-aos = "zoom-out"style = {{fontFamily:'Arial, Helvetica, sans-serif'}}>UI Designer</h3>
              <Button data-aos = "zoom-out" className='hire-btn'>HIRE ME</Button>
              {/* <a className='hire-button' href='about'>
                HIRE ME
              </a> */}
            </div>
          </Col>
          <Col md={6} sm={12} xs={12} data-aos = "fade-down-left">
            <div className='hero-img'>
              <Image fluid src={hero} alt='Clients' className='hero-photo' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
