import React,{useEffect} from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import './Services.css';
import AOS from 'aos';

function Services() {

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
    <div >
      <Container>
        <Row className='justify-content-md-center'>
          <Col md={12} sm={12} xs={12}>
        <div className= 'experties-projects'  data-aos = "fade-up">
          <h1   className = 'section-title' >SERVICES </h1>
          <h3 className = 'text-background secondary-text' >Technical Services</h3>
          
           <p
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative',bottom:'5rem'
           ,color:'#fff'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div>
           </Col>
           </Row>
           <Row className='justify-content-md-center' data-aos = "fade-down">
          <Col md={4} sm={6} xs = {12}>
          <Card className="dev-service-card">
  <div className="service-icon-bg" >
  <i  className="fab fa-html5 fa-2x"  />
  </div>
  <Card.Body>
    <Card.Title>Html Developer</Card.Title>
    <Card.Text style ={{fontSize:'12px'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
          </Col>
          <Col  md={4} sm={6} xs = {12}>
          <Card className="dev-service-card">
  <div className="service-icon-bg">
  <i style={{color:'#fbc363'}} className="fab fa-wordpress-simple fa-2x"  />
  </div>
  <Card.Body>
    <Card.Title style={{color:'#fbc363'}}>WP Custom Theams</Card.Title>
    <Card.Text style ={{fontSize:'12px'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
              
              
          </Col>
          <Col  md={4} sm={6} xs = {12} >
          <Card className="dev-service-card">
  <div className="service-icon-bg">
  <i className="far fa-star fa-2x"  />
  </div>
  <Card.Body>
    <Card.Title>WooCommerce</Card.Title>
    <Card.Text style ={{fontSize:'12px'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
         
            
          </Col>
       
        </Row>

        {/* Design Styling */}
        <Row className='justify-content-md-center' data-aos = "fade-up">
        <Col md={12} sm={12} xs={12}>
        <div className= 'experties-projects' >
        {/* <div  className = 'heading-style' style = {{left:'42.2rem',top:'6.5rem'}}></div> */}
          <h3 className = 'secondary-text' style={{textAlign:"center" ,marginTop:"7%"}} >Design Services</h3>
          

           <p
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative'
           ,color:'#fff',marginTop:'3%',marginBottom:"2%"}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div>
           </Col>
           </Row>
       
           <Row className='justify-content-md-center' data-aos = "fade-down">
          <Col md={4} sm={6} xs={12}>
          <Card className="dev-service-card">
  <div className="service-icon-bg">
  <i className="fas fa-layer-group fa-2x"  />
  </div>
  <Card.Body>
    <Card.Title>Redeign Website</Card.Title>
    <Card.Text style ={{fontSize:'12px'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
              
          </Col>
          <Col md={4} sm={6} xs={12}>
          <Card className="dev-service-card">
  <div className="service-icon-bg">
  <i style={{color:'#fbc363'}} className="fab fa-asymmetrik fa-2x"  />
  </div>
  <Card.Body>
    <Card.Title style={{color:'#fbc363'}}>UI/UX Design</Card.Title>
    <Card.Text style ={{fontSize:'12px'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
         
          </Col>
          <Col  md={4} sm={6} xs={12}>
          <Card className="dev-service-card">
  <div className="service-icon-bg">
  <i className="fab fa-app-store-ios fa-2x"  />
  </div>
  <Card.Body>
    <Card.Title>Responsive Design</Card.Title>
    <Card.Text style ={{fontSize:'12px'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
         
                </Col>
        </Row>

        
      </Container>
      <div id= 'services-img'>
       
        <Row className='justify-content-md-center'>
          <Col md={2}  sm = {4} xs= {6}  data-aos ="fade-right">
            <Card 
              style={{
                backgroundColor: '#1F212D',
                textAlign:'center'
              }}
            >
              <Card.Body>
              <i  style = {{color:'#FAEDC0',marginBottom:'0.5rem'}} className="fas fa-trophy fa-1x"></i>
              <br/>
              
                <Card.Title  style = {{color:'#fbc363'}} >1040</Card.Title>
                <Card.Text style={{color:'white',fontSize:'12px'}}>
                  Awards
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} sm = {4} xs= {6}  data-aos ="fade-right" >
            <Card
              style={{
                backgroundColor: '#1F212D',
              }}
            >
              <Card.Body  style= {{textAlign:'center'}}>
              <i style = {{color:'#FAEDC0',marginBottom:'0.5rem'}} className="fas fa-rocket"></i>
                <Card.Title  style = {{color:'#fbc363'}}>500</Card.Title>
                <Card.Text  style={{color:'white' ,fontSize:'12px'}}>
                  Finished Project
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2}  sm = {4} xs= {6}  data-aos ="fade-right" >
            <Card
              style={{
                
                backgroundColor: '#1F212D',
               
              }}
            >
              <Card.Body  style= {{textAlign:'center'}}>
              <i style = {{color:'#FAEDC0',marginBottom:'0.5rem'}} className="fas fa-snowman"></i>
                <Card.Title style = {{color:'#fbc363'}} >168</Card.Title>
                <Card.Text style={{color:'white',fontSize:'12px'}}>
                 Happy Customer
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} sm = {4} xs= {6}  data-aos ="fade-right">
            <Card
              style={{
               
                backgroundColor: '#1F212D',
               
              }}
            >
              <Card.Body  style= {{textAlign:'center'}}>
              <i style= {{color:'#FAEDC0',marginBottom:'0.5rem'}} className="fas fa-mug-hot"></i>
                <Card.Title style = {{color:'#fbc363'}} >222</Card.Title>
                <Card.Text style={{color:'white',fontSize:'12px'}}>
                  Working Hours
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
        </Row>
        <Row className='justify-content-md-center'  data-aos ="fade-down">
          <Col md={12} sm={12} xs={12} style={{textAlign:"center"}}>
          <h4 style={{color:'#ddd',marginTop:'2rem'}}>Let's Work Togather On Your Next Project </h4>
        <Button className='services-btn'>HIRE ME </Button>
          </Col>
        </Row>
        </div>
       
      
      
    </div>
  )
}

export default Services
