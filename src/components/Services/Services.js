import React from 'react'
import {
  Container,
  Row,
  Col,
  
  
 
} from 'react-bootstrap';
import './Services.css';

function Services() {
  return (
    <div >
      <Container>
        <Row>
        <div className= 'experties-projects' >
           {/* Headings */}
          <h1   className = 'first-headings' >Services </h1>
          <div  className = 'heading-style' style = {{left:'41rem',top:'-4.3rem'}}></div>
          <h3 className = 'text-background' style = {{textAlign:'center',position:'relative',bottom:'6rem',right:'-15rem'}}>Technical Services</h3>
           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative',bottom:'5rem',left:'15rem'
           ,color:'#fff'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div>
          <Col  md={6} sm={12}>
          
                <div>
               
                  <i class="fab fa-html5 fa-2x" style = {{
                  position:'relative',left:'40%',top:'-4.2rem',padding:'0.5rem',color:'#444',zIndex:'2'

                }}>
                  
                </i>
                <div style={{
                width: '3rem',
                height:'3rem',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '14.8rem',
                top: '-7.2rem',
                zIndex:'-1'
                
              
              }}
              >
               
              
           
          </div>

                <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center',position:'relative',top:'-5rem',left :'-23px'}}>
                 <h5>Html Developer</h5>
                <p>Contrary to popular belief, Lorem Ipsum is Ipsum is <br/> not simply random Ipsum is not simply random
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
          <Col  md={6} sm={12}>
         
          {/* <i class="fab fa-wordpress-simple"></i> */}
                <div className="text-shadow"><i  class="fab fa-wordpress-simple fa-2x"  style = {{
                  position:'relative',left:'5rem',top:'2rem',padding:'0.5rem',color:'#444',zIndex:'2'

                }}
                 >

                 </i>
                 <div style={{
                width: '3rem',
                height:'3rem',
                position: 'relative',
               color:'#fbc363',
               background:'#fbc363',
               borderRadius:'50%',
                
                left: '6.5rem',
                top: '-1rem',
                zIndex:'0'
                
              
              }}
              >
               
              
           
          </div>
                  <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center',position:'relative',top:'1rem',left:'0rem'}}>

                 <h5 style={{color:'#fbc363'}}>WP Custom Theams</h5>

                <p>Contrary to popular belief, Lorem Ipsum is Ipsum <br/>is not simply random Ipsum is not simply random
                  <br/>

                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
          <Col  md={6} sm={12}>
          <div style={{
                width: '3rem',
                height:'3rem',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '48rem',
                top: '-20rem',
                zIndex:'-1'
                
              
              }}
              >
               
              
           
          </div>
         
                <div>
                {/* <i class="far fa-star"></i> */}
                  <i class="far fa-star fa-2x"
                  style = {{
                    position:'relative',left:'46.5rem',top:'-22.8rem',padding:'0.5rem',color:'#444',zIndex:'2'
                  }}
                
                ></i>
                 <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center',position:'relative',top:'-21rem',left:'32rem'}}>
                 <h5>WooCommerce</h5>
                <p>Contrary to popular belief, Lorem Ipsum is  Ipsum is <br/>not simply random  Ipsum is not simply random
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
       
        </Row>

        {/* Design Styling */}
        <Row style={{position:'relative' ,top :'-6rem'}}>
        <div className= 'experties-projects' >
           {/* Headings */}
         
          <div  className = 'heading-style' style = {{left:'39.4rem',top:'-4.3rem'}}></div>
          <h3 className = 'text-background' style = {{textAlign:'center',position:'relative',bottom:'6rem',right:'-19rem'}}>Design Services</h3>
           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative',bottom:'5rem',left:'20rem'
           ,color:'#fff'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div>
          <Col  md={6} sm={12} style = {{position:'relative',right:'30rem',bottom:'-10rem'}}>
          
                <div>
                {/* <i class="fas fa-layer-group"></i> */}
                  <i class="fas fa-layer-group fa-2x" style = {{
                  position:'relative',left:'40%',top:'-4.2rem',padding:'0.5rem',color:'#444',zIndex:'2'

                }}>
                  
                </i>
                <div style={{
                width: '3rem',
                height:'3rem',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '14.8rem',
                top: '-7.2rem',
                zIndex:'-1'
                
              
              }}
              >
               
              
           
          </div>

                <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center',position:'relative',top:'-5rem',left :'-23px'}}>
                 <h5>Redeign Website</h5>
                <p>Contrary to popular belief, Lorem Ipsum is Ipsum is <br/> not simply random Ipsum is not simply random
                  <br/>
                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
          <Col  md={6} sm={12} style={{position:'relative' ,right:'-35rem',top:'-2rem'}}>
         
          {/* <i class="fab fa-wordpress-simple"></i> */}
          {/* <i class="fas fa-store-alt-slash"></i> */}
          {/* <i class="fab fa-asymmetrik"></i> */}
                <div className="text-shadow"><i  class="fab fa-asymmetrik fa-2x" style = {{
                  position:'relative',left:'5rem',top:'2rem',padding:'0.5rem',color:'#444',zIndex:'2'

                }}
                 >

                 </i>
                 <div style={{
                width: '3rem',
                height:'3rem',
                position: 'relative',
               color:'#fbc363',
               background:'#fbc363',
               borderRadius:'50%',
                
                left: '6.5rem',
                top: '-1rem',
                zIndex:'0'
                
              
              }}
              >
               
              
           
          </div>
                  <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center',position:'relative',top:'1rem',left:'0rem'}}>

                 <h5 style={{color:'#fbc363'}}>UI/UX Design</h5>

                <p>Contrary to popular belief, Lorem Ipsum is Ipsum <br/>is not simply random Ipsum is not simply random
                  <br/>

                  Ipsum is not simply random
                </p>
                </div>
                </div>
          </Col>
          <Col  md={6} sm={12} style={{position :'relative' ,left:'-34rem',top:'14rem'}}>
          <div style={{
                width: '3rem',
                height:'3rem',
                position: 'relative',
               color:'#302f2f',
               background:'#302f2f',
               borderRadius:'50%',
                
                left: '48rem',
                top: '-20rem',
                zIndex:'-1'
                
              
              }}
              >
               
              
           
          </div>
         
                <div>
                {/* <i class="far fa-star"></i> */}
                {/* <i class="fab fa-app-store-ios"></i> */}
                  <i class="fab fa-app-store-ios fa-2x"
                  style = {{
                    position:'relative',left:'46.5rem',top:'-22.8rem',padding:'0.5rem',color:'#444',zIndex:'2'
                  }}
                
                ></i>
                 <div style= {{color:'#fff',fontSize:'0.6rem',textAlign:'center',position:'relative',top:'-21rem',left:'32rem'}}>
                 <h5>Responsive Design</h5>
                <p>Contrary to popular belief, Lorem Ipsum is  Ipsum is <br/>not simply random  Ipsum is not simply random
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

export default Services
