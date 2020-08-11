import React,{useEffect} from 'react'
import {
  Container,
  Row,
  Col,
 
} from 'react-bootstrap';
import './WorkSection.css';
import AOS from 'aos';

function WorkSection() {


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
    <div style = {{background:'#000' }}>
      <Container>
        <Row className='justify-content-md-center' data-aos ="fade-up">
          <Col md={12} sm={12} xs={12}>
        <div className= 'experties-projects' >
           {/* Headings */}
          <h1   className = 'section-title' >PROCESS </h1>
          {/* <div  className = 'heading-style' style = {{left:'43rem',top:'-5.5rem'}}></div> */}
          <h3 className = 'text-background secondary-text'>My Work Process</h3>
          
           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative',bottom:'5rem'
           ,color:'#fff'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div>
           </Col>
           </Row>
           <Row className='justify-content-md-center'  data-aos ="fade-down">
             <div className="dev-process">
               <Row>
          <Col md={3} sm={6} xs={12} style={{textAlign:"center"}}>
            <i
              className="far fa-circle dev-process-1"
            
            ></i>
         
                <div >
                  <i class="fab fa-audible fa-2x" style = {{
                  border:'1px dotted #fff',borderRadius:'50%',padding:'0.5rem',color:'#444',marginBottom:"5px"

                }}>
                  
                </i>

                <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center'}}>
                 <h5>Planning</h5>
                <p>Contrary to popular belief, Lorem Ipsum is 
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
          <Col md={3} sm={6} xs={12} style={{textAlign:"center"}}>
            <i
              className="far fa-circle dev-process-2"
            
               
              
            ></i>
         
                <div >
                  <i  class="fas fa-search-location fa-2x"  style = {{
                   border:'1px dotted #fff',borderRadius:'50%',padding:'0.5rem',color:'#444'

                }}
                 ></i>
                                 <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center'}}>
                 <h5>Research</h5>
                <p>Contrary to popular belief, Lorem Ipsum is 
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
          <Col md={3} sm={6} xs={12} style={{textAlign:"center"}}>
            <i
              className="far fa-circle dev-process-3"
               
              
            ></i>
       
                <div >
                  <i class="fas fa-pencil-alt fa-2x"
                  style = {{
                    border:'1px dotted #fbc363',borderRadius:'50%',padding:'0.5rem',color:'#444'
                  }}
                
                ></i>
                                <div 
                                style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center'}}
                                >
                                  <h5 style ={{color:'#fbc363'}}>Design</h5>
                 
                <p>Contrary to popular belief, Lorem Ipsum is 
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
         <Col md={3} sm={6} xs={12} style={{textAlign:"center"}}>
           <i
             className="far fa-circle dev-process-4"
          
              
             
           ></i>
        
        
        <div>
          <i class="fas fa-camera-retro fa-2x"
                  style = {{
                    border:'1px dotted #fff',borderRadius:'50%',padding:'0.5rem',color:'#444'
                  }}
                
                ></i>
                <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center'}}>
                <h5>Development</h5>
                <p>Contrary to popular belief, Lorem Ipsum is 
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
         </Col>
        </Row>
        </div>
        </Row>
      </Container>
      
    </div>
  )
}

export default WorkSection
