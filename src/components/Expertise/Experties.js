import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  
 
} from 'react-bootstrap';
import './Experties.css';

function Experties() {
  return (
    <div style = {{height :'1100px'}}>
      <Container>
        <Row className='justify-content-md-center'>
         <div className= 'experties-projects' >
           {/* Headings */}
          <h1   className = 'first-heading'> MY RESUME</h1>
          <div  className = 'heading-style'></div>
          <h3 className = 'text-background' style = {{textAlign:'center',position:'relative',bottom: '6.5rem'}}>My Awesome Story</h3>
          <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative'
           ,color:'#fff',bottom:'4.8rem'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           Lorem Ipsum is not simply
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text. Contrary to popular.</p>
           
           </div>
          {/*Experties */}
          <Col md={6} sm={12} className='text-section'>

            <div style = {{textAlign:'left',position:'relative',top:'-16%',margin:'1rem' ,left:'30%'}} >

           <h1>Education</h1>

           <Button className= 'button-style'>2013 - 2014</Button>

           <h5 style= {{color:'#ddd',marginTop:'0.5rem',marginLeft:'1rem'}}>Master Degree of design</h5>

           <p style= {{color:'#ddd  ' ,fontSize:'0.7rem',marginLeft:'1rem'}}>ABC Unversity Pakistan

             <br/>
             <br/>
             Lorem Ipsum is not simply random
                text. Contrary to<br/> popular.
                Contrary to popular.

           </p>
           </div>

           {/* Experties */}
           
           <div className = 'experties-sections'  >



<Button  className = 'button-style'>2013 - 2014</Button>

<h5 style= {{color:'#fbc363',marginTop:'0.5rem',marginLeft:'1rem'}}>Bachelor Degree of C.A </h5>

<p style= {{color:'#ddd  ' ,fontSize:'0.7rem',marginLeft:'1rem'}}>Nust University of Pakistan

  <br/>
  <br/>
  Lorem Ipsum is not simply random
     text. Contrary to<br/> popular.
     Contrary to popular.

</p>
</div>

<div style = {{textAlign:'left',position:'relative',top:'-19%',margin:'1rem' ,left:'30%'}} >



<Button className= 'button-style'>2014 - 2015</Button>

<h5 style= {{color:'#ddd',marginTop:'0.5rem',marginLeft:'1rem'}}>Diploma in Computer</h5>

<p style= {{color:'#ddd  ' ,fontSize:'0.7rem',marginLeft:'1rem'}}>ABC Unversity Pakistan

  <br/>
  <br/>
  Lorem Ipsum is not simply random
     text. Contrary to<br/> popular.
     Contrary to popular.

</p>
</div>

           <div >
            <i
              className="far fa-circle"
              style={{
                width: '15px',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '9rem',
                top: '-43rem'
              
              }}
               
              
            ></i>
          </div>
          <div 
                style = {{background:'#302f2f',height:'200px',width:'1px', position: "relative",bottom:'116%',left:"28%"}}>

                </div>
                 <div >
            <i
              className="far fa-circle"
              style={{
                width: '15px',
                position: 'relative',
               color:'#fbc363',
               background:'#fbc363',
               borderRadius:'50%',
                
                left: '9rem',
                top: '-43.5rem'
              
              }}
               
              
            ></i>
          </div>
          <div 
                style = {{background:'#302f2f',height:'220px',width:'1px', position: "relative",top:'-117%',left:"28%"}}></div>
        <div >
            <i
              className="far fa-circle"
              style={{
                width: '15px',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '9rem',
                top: '-44rem'
              
              }}
               
              
            ></i>
          </div>
          <div 
                style = {{background:'#302f2f',height:'160px',width:'1px', position: "relative",top:'-118.8%',left:"28%"}}></div>
          
          
          </Col>
          <Col md={6}>
            {/* Experience */}
          <div style = {{textAlign:'left',position:'relative',top:'-5%',margin:'1rem' ,left:'30%'}} >

<h1>Experience</h1>

<Button className= 'button-style'>2013 - 2014</Button>

<h5 style= {{color:'#ddd',marginTop:'0.5rem',marginLeft:'1rem'}}>Behance </h5>

<p style= {{color:'#ddd  ' ,fontSize:'0.7rem',marginLeft:'1rem'}}>Art & creative Director

  <br/>
  <br/>
  Lorem Ipsum is not simply random
     text. Contrary to<br/> popular.
     Contrary to popular.

</p>
</div>
{/* Experience */}
<div style = {{textAlign:'left',position:'relative',top:'0.5rem',margin:'1rem' ,left:'30%'}} >



<Button className= 'button-style'>2013 - 2014</Button>

<h5 style= {{color:'#ddd',marginTop:'0.5rem',marginLeft:'1rem'}}>Envato</h5>

<p style= {{color:'#ddd  ' ,fontSize:'0.7rem',marginLeft:'1rem'}}>Senior Wordpress Developer

  <br/>
  <br/>
  Lorem Ipsum is not simply random
     text. Contrary to<br/> popular.
     Contrary to popular.

</p>
</div>
{/* Experience */}
<div style = {{textAlign:'left',position:'relative',top:'0%',margin:'1rem' ,left:'30%'}} >



<Button className= 'button-style'>2013 - 2014</Button>

<h5 style= {{color:'#ddd',marginTop:'0.5rem',marginLeft:'1rem'}}>UI/UX Designer</h5>

<p style= {{color:'#ddd  ' ,fontSize:'0.7rem',marginLeft:'1rem'}}>Creative Market

  <br/>
  <br/>
  Lorem Ipsum is not simply random
     text. Contrary to<br/> popular.
     Contrary to popular.

</p>
</div>
{/* Icon */}
          <div >
            <i
              className="far fa-circle"
              style={{
                width: '15px',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '9rem',
                top: '-33.5rem'
              
              }}
               
              
            ></i>
          </div>
          <div 
          // Icon
                style = {{background:'#302f2f',height:'220px',width:'1px', position: "relative",top:'-34rem',left:"28%"}}></div>
                 <div >
            <i
              className="far fa-circle"
              style={{
                width: '15px',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '9rem',
                top: '-34.5rem'
              
              }}
               
              
            ></i>
          </div>
          {/* Icon */}
          <div 
                style = {{background:'#302f2f',height:'220px',width:'1px', position: "relative",top:'-35rem',left:"28%"}}></div>
                 <div >
            <i
              className="far fa-circle"
              style={{
                width: '15px',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '9rem',
                top: '-35.5rem'
              
              }}
               
              
            ></i>
          </div>
          <div 
                style = {{background:'#302f2f',height:'160px',width:'1px', position: "relative",top:'-36rem',left:"28%"}}></div>
           
          </Col>
        </Row>
       
      </Container>
    </div>
  )
}

export default Experties
