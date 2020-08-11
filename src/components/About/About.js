import React,{useEffect} from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  
  Card,
 
} from 'react-bootstrap';
import Back from '../../assets/images/Back.png';
import './about.css';
import AOS from 'aos'

function About() {

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
    <div>

      <Container>
        <Row className='justify-content-md-center' >
          <Col md={6} sm={12} xs={12}  data-aos = "fade-down-right">
            <div className='hero-imag' >
              <Image fluid src={Back} alt='Clients' className='hero-photoo' />
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}  data-aos = "fade-right">
            <div className='about-text-section'>
              <h2 className='l-heading' style={{ marginBottom: '2rem' }}>
              <div className= 'showcase-projects' 
                style = {{background:'#fbc363',height:'2px',width:'50px', position: "relative",top:'32px',left:"35%"}}></div>
                <span className='tex-background'> About Me </span>
              </h2>
              <p className='leeds'>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. Contrary to popular belief, Lorem Ipsum is not simply
                random text. Contrary to popular belief, Lorem Ipsum is not
                Lorem Ipsum is notLorem Ipsum is not
                <br />
                <br />
                simply random text. Contrary to popular belief, Lorem Ipsum is
                not simply random text. It has roots in a piece of classical.
              </p>
              <h3>Awais Jutt</h3>
              <Button className='cv-btn'>DOWNLOAD CV</Button>
              <Button className='work-btn'>MY WORK </Button>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-md-center' style={{margin:"5% 0"}}>
          <Col md={2} sm={4} xs={5} style = {{marginRight:'10px'}}  data-aos = "flip-left">
            <Card 
              style={{
                width: '12rem',
                backgroundColor: '#1F212D',
                color: '#FAEDC0',
              textAlign:'center'
                
              }}
            >
              <Card.Body>
                <Card.Title className = 'crads-about'>dribbble</Card.Title>
                <Card.Text>
                  800+ projects
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} sm={4} xs={5} style = {{marginRight:'10px'}}  data-aos = "flip-right">
            <Card
              style={{
                width: '12rem',
                backgroundColor: '#1F212D',
                color: '#FAEDC0',
              }}
            >
              <Card.Body  style= {{textAlign:'center'}}>
                <Card.Title className = 'title-about'>upwork</Card.Title>
                <Card.Text>
                  1200+ projects
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} sm={4} xs={5} style = {{marginRight:'10px'}}  data-aos = "flip-left">
            <Card
              style={{
                width: '12rem',
                backgroundColor: '#1F212D',
                color: '#FAEDC0',
              }}
            >
              <Card.Body  style= {{textAlign:'center'}}>
                <Card.Title className = 'about-card'>envato</Card.Title>
                <Card.Text>
                 600+ projects
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} sm={4} xs={5} style = {{marginRight:'10px'}}  data-aos = "flip-right">
            <Card
              style={{
                width: '12rem',
                backgroundColor: '#1F212D',
                color: '#FAEDC0',
              }}
            >
              <Card.Body  style= {{textAlign:'center'}}>
                <Card.Title className = 'title-about' >99designs</Card.Title>
                <Card.Text>
                  500+ projects 
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
