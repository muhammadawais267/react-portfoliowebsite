import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  
  Card,
 
} from 'react-bootstrap';
import './Showcase.css';

function Showcase() {
  return (
    <div  id = 'showcase-img' >
      <div className= 'showcase-content'>
       <Container >
        <Row className='justify-content-md-center' >
          <Col md={6} sm={12}  style = {{textAlign:'left' , marginTop:'5%',marginRight:'19%'}}>
            <h1 className = 'l-heading' style ={{color:'#fff'}}>Some Interesting Facts</h1>
            <h2 className= 'text-background'>About Me</h2>
            <p className = 'leeds'> Contrary to popular belief, Lorem Ipsum is not simply random
                text. Contrary to popular belief, Lorem Ipsum is not simply
                random text. Contrary to popular belief.</p>
            
          </Col>
          
            
             
        </Row>
        <Row className='justify-content-md-center'>
          <Col md={2} style = {{marginRight:'20px'}}>
            
            <Card 
              style={{
                width: '12rem',
                backgroundColor: 'transparent',
                color: '#FAEDC0',
                textAlign:'center'
                
              }}
              >
              <Card.Body>
              <h2 className = 'text-background'>850</h2>
                <Card.Text>
                  <div>
                <div className= 'showcase-projects' 
                style = {{background:'#FAEDC0',height:'2px',width:'40px', position: "relative",top:'20px',right:"3.5rem"}}></div>
                <Button className='showcase-title'>Finished Projects</Button>
                    </div>
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} style = {{marginRight:'20px'}}>
            <Card
              style={{
                width: '12rem',
                backgroundColor: 'transparent',
                color: '#FAEDC0',
              }}
              >
              <Card.Body  style= {{textAlign:'center'}}>
              <h2 className = 'text-background'>170</h2>
              
                <Card.Text>
                <div>
                <div className= 'showcase-projects' 
                style = {{background:'#FAEDC0',height:'2px',width:'40px', position: "relative",top:'20px',right:"3.1rem"}}></div>
                <Button className='showcase-title'>Projects Awards</Button>
                    </div>
                
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} style = {{marginRight:'20px'}}>
            <Card
              style={{
                width: '12rem',
                backgroundColor: 'transparent',
                color: '#FAEDC0',
              }}
              >
              <Card.Body  style= {{textAlign:'center'}}>
              <h2 className = 'text-background'>1000</h2>
             
                <Card.Text>
                <div>
                <div className= 'showcase-projects' 
                style = {{background:'#FAEDC0',height:'2px',width:'40px', position: "relative",top:'20px',right:"3.1rem"}}></div>
                <Button className='showcase-title'>Happy Customer</Button>
                    </div>
               
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} style = {{marginRight:'20px'}}>
            <Card
              style={{
                width: '12rem',
                backgroundColor: 'transparent',
                color: '#FAEDC0',
              }}
              >
              <Card.Body  style= {{textAlign:'center'}}>
              <h2 className = 'text-background'>555</h2>
              
                <Card.Text>
                <div>
                <div className= 'showcase-projects' 
                style = {{background:'#FAEDC0',height:'2px',width:'40px', position: "relative",top:'20px',right:"3.1rem"}}></div>
                <Button className='showcase-title'>Cofffeeee Cup</Button>
                    </div>
                  
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  )
}

export default Showcase
