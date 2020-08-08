import React from 'react'
import { Container, Row, Col, Button,Form} from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <div  style={{backgroundColor:'#000000 ', height :'1100px', position:'relative' , top :'45rem'}}>
      <Container>
      <Row  className="justify-content-md-center">
      <div className= 'experties-projects' >
           {/* Headings */}
          <h1 style = {{left:"0",position:'relative',bottom:'1.5rem'}}   className = 'project'  >CONTACT</h1>
          <div style={{    position: 'relative', top: '-8rem'}}>
          <div  className = 'heading-style' style = {{top:'1.7rem',left:"68%"}}></div>
          <h3 className = 'text-background' style = {{textAlign:'center'}}>Contact With Me</h3>
           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center',color:'#fff',marginTop:'2rem'}}> 
           Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           </div>
           </div>
      </Row>
      <Row>
        <Col md={6}>

          <div className = 'contact-icons'>
          <h4>Get In Touch</h4>
            <div>
            <i class="fas fa-phone fa-1x"></i>
              <h5>Phone</h5>
              <p>+92 123-123-22
                <br/>
                +92 222-222-22
              </p>
            </div>
            <div>
            <i style={{color:'#fbc363' ,border:'2px solid #fbc363'}} class="fas fa-map-marker-alt fa-1x"></i>
            <h5 style={{color:'#fbc363'}}>Location</h5>
              <p>street # 42 Main Road
                <br/>
              Lahore , Pakistan
              </p>
            </div>
            <div>
            <i class="fas fa-envelope fa-1x"></i>
            <h5>Write Us On</h5>
              <p>absd12@gmail.com
                <br/>
              developer123@gmail.com
              </p>
            </div>
          </div>

      <div id='cloud-img'>
        <div className='cloud-img'>

        </div>
      </div>
        </Col>
        <Col md={6}>


    <Form className='form-style'>
    <Form.Text style = {{color:'rgb(148, 144, 144)',fontSize:'2rem'}} className="text-muted">
      Drop Me a Line
    </Form.Text>
       <Form.Group controlId="formBasicName">
       <Form.Label style={{color:"#444"}}>Name*</Form.Label>
       <Form.Control type="email" placeholder="Enter Name" />
    
    </Form.Group>

   <Form.Group controlId="formBasicEmail">
       <Form.Label  style={{color:"#444"}}>Email*</Form.Label>
       <Form.Control type="password" placeholder="Enter Email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label  style={{color:"#444"}}>Your Message</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  
    <Button className= 'submit-btn' type="submit">
    Submit
    </Button>
</Form>
        </Col>

       
      </Row>
      </Container>
      <Row className =  'justify-content-md-center social-icons'>
        <div >
      <i class="fab fa-facebook-f fa-2x"></i>
      <i class="fab fa-twitter fa-2x"></i>
      <i class="fab fa-linkedin-in fa-2x"></i>
      <i class="fab fa-github fa-2x"></i>
      <i class="fab fa-skype fa-2x"></i>
      </div>
      </Row>

    </div>
  )
}

export default Contact
