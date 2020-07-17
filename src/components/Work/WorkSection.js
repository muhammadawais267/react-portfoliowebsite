import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  
  Card,
 
} from 'react-bootstrap';
import './WorkSection.css';

function WorkSection() {
  return (
    <div style = {{background:'#000',height:'470px'}}>
      <Container>
        <Row>
        <div className= 'experties-projects' >
           {/* Headings */}
          <h1   className = 'first-headings' >PROCESS </h1>
          <div  className = 'heading-style' style = {{left:'43rem',top:'-5.5rem'}}></div>
          <h3 className = 'text-background' style = {{textAlign:'center',position:'relative',bottom:'41%',right:'-15rem'}}>My Work Process</h3>
           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative',bottom:'28%',left:'15rem'
           ,color:'#fff'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div>
          <Col  md={6} sm={12}>
          <div >
            <i
              className="far fa-circle"
              style={{
                width: '15px',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '28.9rem',
                top: '-5.8rem'
              
              }}
               
              
            ></i>
          </div>
          <div 
                style = {{background:'#302f2f',height:'1px',width:'220px', position: "relative",bottom:'69.3%',left:"88%"}}>

                </div>
                <div><i class="fab fa-audible fa-2x" style = {{
                  position:'relative',left:'40%',top:'-4.2rem',border:'1px dotted #fff',borderRadius:'50%',padding:'0.5rem',color:'#444'

                }}>
                  
                </i>

                <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center',position:'relative',top:'-3rem',left :'-23px'}}>
                 <h5>Planning</h5>
                <p>Contrary to popular belief, Lorem Ipsum is 
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
          <Col  md={6} sm={12}>
          <div >
            <i
              className="far fa-circle"
              style={{
                width: '15px',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '21.5rem',
                top: '-5.8rem'
              
              }}
               
              
            ></i>
          </div>
          <div 
                style = {{background:'#302f2f',height:'1px',width:'220px', position: "relative",bottom:'69%',left:"24%"}}>

                </div>
                <div><i  class="fas fa-search-location fa-2x"  style = {{
                    position:'relative',left:'-22%',top:'-4.4rem',border:'1px dotted #fff',borderRadius:'50%',padding:'0.5rem',color:'#444'

                }}
                 ></i>
                                 <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center',position:'relative',top:'-3.4rem',left:'5rem'}}>
                 <h5>Development</h5>
                <p>Contrary to popular belief, Lorem Ipsum is 
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
          <Col  md={6} sm={12}>
          <div >
            <i
              className="far fa-circle"
              style={{
                width: '15px',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '15rem',
                top: '-15rem'
              
              }}
               
              
            ></i>
          </div>
          <div 
                style = {{background:'#302f2f',height:'1px',width:'220px', position: "relative",bottom:'169%',left:"45%"}}>

                </div>
                <div>
                  <i class="fas fa-pencil-alt fa-2x"
                  style = {{
                    position:'relative',left:'41.7rem',top:'-14rem',border:'1px dotted #fbc363',borderRadius:'50%',padding:'0.5rem',color:'#444'
                  }}
                
                ></i>
                                <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center',position:'relative',top:'-13rem',left:'13rem'}}>
                 <h5>Research</h5>
                <p>Contrary to popular belief, Lorem Ipsum is 
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
         <Col  md={6} sm={12}>
         <div >
            <i
              className="far fa-circle"
              style={{
                width: '15px',
                position: 'relative',
               color:'#fbc363',
               background:'#fbc363',
               borderRadius:'50%',
                
                left: '7.5rem',
                top: '-15.1rem'
              
              }}
               
              
            ></i>
          </div>
        
        <div>
          <i class="fas fa-camera-retro fa-2x"
                  style = {{
                    position:'relative',left:'60%',top:'-14rem',border:'1px dotted #fff',borderRadius:'50%',padding:'0.5rem',color:'#444'
                  }}
                
                ></i>
                <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center',position:'relative',top:'-13rem',left:'-9rem'}}>
                 <h5 style ={{color:'#fbc363'}}>Design</h5>
                <p>Contrary to popular belief, Lorem Ipsum is 
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
         </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default WorkSection
