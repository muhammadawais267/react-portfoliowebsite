import React,{useEffect} from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  
 
} from 'react-bootstrap';
import './Experties.css';
import AOS from 'aos'

function Experties() {
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
        <Row className='justify-content-md-center' data-aos="fade-up">
          <Col md={12} sm={12} xs={12}>
         <div className= 'experties-projects' >
           {/* Headings */}
          <h1   className = 'section-title'> MY RESUME</h1>
         
          <h3 className = 'text-background secondary-text'>My Awesome Story
          <span className = 'heading-style'></span>
          </h3>
          <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative'
           ,color:'#fff',bottom:'4.8rem'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           Lorem Ipsum is not simply
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text. Contrary to popular.</p>
           
           </div>
           </Col>
</Row>

<Row className='justify-content-md-center' >
           
          <Col md={6} sm={12} xs={12} className='education-col'  data-aos="fade-right">

           <h1>Education</h1>
           <div className = 'education'>
           <i
              className="far fa-circle edu-pointer-1"
             
               
              
            ></i>
            <div className="edu-1">


           <Button className= 'button-style'>2013 - 2014</Button>

           <h5 style= {{color:'#ddd',marginTop:'0.5rem'}}>Master Degree of design</h5>

           <p style= {{color:'#ddd  ' ,fontSize:'0.7rem'}}>ABC Unversity Pakistan

             <br/>
             <br/>
             Lorem Ipsum is not simply random
                text. Contrary to<br/> popular.
                Contrary to popular.

           </p>
           </div>

           {/* Experties */}
           <i
              className="far fa-circle edu-pointer-2"
             
               
              
            ></i>
           <div className = "edu-2"  >



<Button  className = 'button-style'>2013 - 2014</Button>

<h5 style= {{color:'#fbc363',marginTop:'0.5rem'}}>Bachelor Degree of C.A </h5>

<p style= {{color:'#ddd  ' ,fontSize:'0.7rem'}}>Nust University of Pakistan

  <br/>
  <br/>
  Lorem Ipsum is not simply random
     text. Contrary to<br/> popular.
     Contrary to popular.

</p>
</div>
  
     <i className="far fa-circle edu-pointer-3"></i>

  <div className="edu-3">



      <Button className= 'button-style'>2014 - 2015</Button>

      <h5 style= {{color:'#ddd',marginTop:'1rem'}}>Diploma in Computer</h5>

      <p style= {{color:'#ddd  ' ,fontSize:'0.7rem'}}>ABC Unversity Pakistan

  <br/>
  <br/>
  Lorem Ipsum is not simply random
     text. Contrary to<br/> popular.
     Contrary to popular.

</p>
</div>

</div>

          
          
          
          </Col>

          <Col md={6} sm={12} xs={12} className="education-col"  data-aos="fade-left">

           <h1>Experience</h1>
           <div className = 'experience'>
           <i
              className="far fa-circle exp-pointer-1"
             
               
              
            ></i>
            <div className="exp-1">


           <Button className= 'button-style'>2013 - 2014</Button>

           <h5 style= {{color:'#ddd',marginTop:'0.5rem'}}>Behance</h5>

           <p style= {{color:'#ddd  ' ,fontSize:'0.7rem'}}>Art & Creative Director

             <br/>
             <br/>
             Lorem Ipsum is not simply random
                text. Contrary to<br/> popular.
                Contrary to popular.

           </p>
           </div>

           <i
              className="far fa-circle exp-pointer-2"
             
               
              
            ></i>
           <div className = "exp-2"  >



<Button  className = 'button-style'>2013 - 2014</Button>

<h5 style= {{color:'#fbc363',marginTop:'0.5rem'}}>Envato </h5>

<p style= {{color:'#ddd  ' ,fontSize:'0.7rem'}}>Senior Wordpress Developer

  <br/>
  <br/>
  Lorem Ipsum is not simply random
     text. Contrary to<br/> popular.
     Contrary to popular.

</p>
</div>
  
     <i className="far fa-circle exp-pointer-3"></i>

  <div className="exp-3">



      <Button className= 'button-style'>2014 - 2015</Button>

      <h5 style= {{color:'#ddd',marginTop:'1rem'}}>UI/UX Designer</h5>

      <p style= {{color:'#ddd  ' ,fontSize:'0.7rem'}}>ABC Unversity Pakistan

  <br/>
  <br/>
  Lorem Ipsum is not simply random
     text. Contrary to<br/> popular.
     Contrary to popular.

</p>
</div>

</div>
</Col>

         
        </Row>
       
      </Container>
    </div>
  )
}

export default Experties
