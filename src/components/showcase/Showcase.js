import React,{useEffect} from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  
  
  Card,
 
} from 'react-bootstrap';
import './Showcase.css';
import AOS from 'aos'

function Showcase() {
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
    <div  id = 'showcase-img' >
       <Container>
        <Row className='justify-content-md-center ml-3' data-aos = "fade-up">
          <Col md={7} sm={12} className=""  style = {{textAlign:'left' , marginTop:'5%',marginRight:'19%'}}>
            <h1 className = 'l-heading' style ={{color:'#fff'}}>Some Interesting Facts</h1>
            <h2 className= 'secondary-text'>About Me</h2>
            <p className = 'leeds'> Contrary to popular belief, Lorem Ipsum is not simply random
                text. Contrary to popular belief, Lorem Ipsum is not simply
                random text. Contrary to popular belief.</p>
            
          </Col>
          {/* <Col md={6} sm={0}></Col> */}
          
            
             
        </Row>
        <Row className='justify-content-md-center'>
          <Col md={2} sm={4} xs={5} style = {{marginRight:'20px'}} data-aos = "zoom-out">
            
            <Card 
              style={{
                width: '12rem',
                backgroundColor: 'transparent',
                color: '#FAEDC0',
                textAlign:'center'
                
              }}
              >
              <Card.Body>
              <h2 className = 'projects-count secondary-text'>850</h2>
                <Card.Text className="card-text-bar">
                  <div>
                {/* <div className= 'showcase-projects'></div> */}
                <Button className='showcase-title'>Finished Projects</Button>
                    </div>
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} sm={4} xs={5} style = {{marginRight:'20px'}} data-aos = "zoom-in">
            <Card
              style={{
                width: '12rem',
                backgroundColor: 'transparent',
                color: '#FAEDC0',
              }}
              >
              <Card.Body  style= {{textAlign:'center'}}>
              <h2 className = 'projects-count secondary-text'>170</h2>
              
                <Card.Text className="card-text-bar">
                <div>
                {/* <div className= 'showcase-projects' ></div> */}
                <Button className='showcase-title'>Projects Awards</Button>
                    </div>
                
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} sm={4} xs={5} style = {{marginRight:'20px'}} data-aos = "zoom-out">
            <Card
              style={{
                width: '12rem',
                backgroundColor: 'transparent',
                color: '#FAEDC0',
              }}
              >
              <Card.Body  style= {{textAlign:'center'}}>
              <h2 className = 'projects-count secondary-text'>1000</h2>
             
                <Card.Text className="card-text-bar">
                <div>
                {/* <div className= 'showcase-projects' ></div> */}
                <Button className='showcase-title'>Happy Customer</Button>
                    </div>
               
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
          <Col md={2} sm={4} xs={5} style = {{marginRight:'20px'}} data-aos = "zoom-in">
            <Card
              style={{
                width: '12rem',
                backgroundColor: 'transparent',
                color: '#FAEDC0',
              }}
              >
              <Card.Body  style= {{textAlign:'center'}}>
              <h2 className = 'projects-count secondary-text'>555</h2>
              
                <Card.Text className="card-text-bar">
                <div>
                {/* <div className= 'showcase-projects' 
                style = {{background:'#FAEDC0',height:'2px',width:'40px', position: "relative",top:'20px',right:"3.1rem"}}></div> */}
                <Button className='showcase-title'>Cofffeeee Cup</Button>
                    </div>
                  
                </Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Showcase
