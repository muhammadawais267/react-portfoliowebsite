import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Project.css';
import Phone from '../../assets/images/Phone.jpg'
import BlackText from '../../assets/images/BlackText.jpg'
import Laptop from '../../assets/images/Laptop.jpg'


function Project() {
  return (
    <div>
      <Container>
        <Row>
        <div className= 'experties-projects' >
           {/* Headings */}
          <h1   className = 'project' >PROJECTS </h1>
          <div  className = 'heading-style' style = {{left:'41.7rem',top:'-14rem'}}></div>
          <h3 className = 'text-background' style = {{textAlign:'center',position:'relative',bottom:'15.6rem',right:'-15rem'}}>Latest Projects</h3>
           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative',bottom:'14rem',left:'15rem'
           ,color:'#fff'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div>
           <div style ={{color:'#fff' ,fontSize:'10px',position:'relative',right:'32rem',top:'7.3rem'}}>
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
           <div style={{position:'relative',right:'9rem',bottom:'12rem',textAlign:'center'}}>
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
