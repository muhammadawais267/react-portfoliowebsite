import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './HeroStyle.css';
import AppBar from '../AppBar/Navbar';
import hero from '../../assets/images/hero.png';

function Hero() {
  return (
    <div
      style={{
        backgroundColor: '#000',
        height: '100vh',
        color: '#fff',
        borderBottomRightRadius: '10%',
      }}
    >
      <AppBar />
      <Container>
        <Row className='justify-content-md-center'>
          <Col md={6} sm={12} className='text-section'>
            <div className='text-sections'>
              <h3 className='m-heading' style = {{fontFamily:'Arial, Helvetica, sans-serif'}}>HI there!</h3>
              <h1 className='l-heading'>
                I'm <span className='text-background'> Awais </span> Jutt
              </h1>
              <p className='leads'>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
                <br /> It has roots in a piece of classical.
              </p>
              <h3 style = {{fontFamily:'Arial, Helvetica, sans-serif'}}>UI Designer</h3>
              <Button className='hire-btn'>HIRE ME</Button>
              {/* <a className='hire-button' href='about'>
                HIRE ME
              </a> */}
            </div>
          </Col>
          <Col md={6}>
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
