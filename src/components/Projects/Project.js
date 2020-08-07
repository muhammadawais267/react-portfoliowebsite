import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Project.css';
import Phone from '../../assets/images/Phone.jpg'
import BlackText from '../../assets/images/BlackText.jpg'
import Laptop from '../../assets/images/Laptop.jpg'


function Project() {
  return (
    <div style = {{height:'600px'}}>
      <Container>
        <Row className =  'justify-content-md-center'>
        <div className= 'experties-projects' >
           {/* Headings */}
          <h1    className = 'project' >PROJECTS </h1>
          <div  style={{    position: 'relative', top: '-15.8rem',right:'-2rem'}}>
          <div  style = {{top:'1.7rem',left:"65%"}}  className = 'heading-style'></div>
          <h3 className = 'text-background' style = {{textAlign:'center'}}>Latest Projects</h3>
           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center',color:'#fff',marginTop:'2rem'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
                </div>
           
           </div>
           <div style ={{color:'#fff' ,fontSize:'10px',position:'relative',right:'45rem',top:'7.3rem'}}>
             <p> <span style = {{color:'#fbc363'}}>01</span> 02 03 04</p>
           </div>
           <Col md = {6} >
             <div className = 'hero-img'>
           <Image fluid src={Phone} alt='Clients' className='phone-img' />
           </div>
           </Col>
           <Col md = {6} >
             <div className = 'hero-img'>
           <Image fluid src={BlackText} alt='Clients' className='black-img' />
           </div>
           </Col>
           <Col md = {6} >
             <div className= 'hero-img'>
           <Image fluid src={Laptop} alt='Clients' className='laptop-img' />
           </div>
           </Col>
           <div style={{position:'relative',right:'19rem',bottom:'12rem',textAlign:'center'}}>
             <h5 style={{color:'#fbc363',fontSize:'8px'}}>Creative | Design</h5>
             <h4 style={{color:'#fff'}}>Croporate Banding Design</h4>
             <Button style={{position:'relative',right:'0rem'}} className='services-btn'>View Full Perview </Button>
           </div>
        </Row>
      </Container>
      
    </div>
  )
}

export default Project
