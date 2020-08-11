import React,{useEffect} from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Project.css';
import Phone from '../../assets/images/Phone.jpg'
import BlackText from '../../assets/images/BlackText.jpg'
import Laptop from '../../assets/images/Laptop.jpg'
import AOS from 'aos';


function Project() {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 200,
    });
    AOS.refresh()
      })
  return (
    <div>
      <Container>
        <Row className =  'justify-content-md-center'>
        <Col md={12} sm={12} xs={12} >
        <div className= 'experties-projects'  data-aos = "fade-up">
           {/* Headings */}
          <h1   className = 'section-title' >PROJECTS </h1>
          {/* <div  className = 'heading-style' style = {{left:'43.1rem',top:'8rem'}}></div> */}
          <h3 className = 'text-background secondary-text' >Latest Projects</h3>
          {/* <span className = 'heading-style'></span> */}

           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative',bottom:'5rem'
           ,color:'#fff'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div>
           </Col>
           </Row>
       
            <Row className = 'justify-content-md-center'>
         
           <Col md = {2} sm={6} xs={12}  data-aos = "fade-left">
           <Image fluid src={Phone} alt='Clients' className='phone-img' />
           </Col>
           <Col md = {8} sm={6} xs={12}   data-aos = "zoom-in">
           <Image fluid src={BlackText} alt='Clients' className='black-img' />
           </Col>
           <Col md = {2} sm={6} xs={12}   data-aos = "fade-right">
           <Image fluid src={Laptop} alt='Clients' className='laptop-img' />
           </Col>
           <Col md = {6} sm ={8} xs = {12}  data-aos = "fade-down">
           <div style={{textAlign:'center',position:"relative",bottom:"6rem"}}>
             <h5 style={{color:'#fbc363',fontSize:'8px'}}>Creative | Design</h5>
             <h4 style={{color:'#fff'}}>Croporate Banding Design</h4>
             <Button className='services-btn'>View Full Perview </Button>
           </div>
           </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Project
