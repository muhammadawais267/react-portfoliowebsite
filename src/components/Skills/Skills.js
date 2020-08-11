import React,{useState,useEffect} from 'react'
import { Container, Row, Col, Button,Carousel,Image} from 'react-bootstrap';
import './Skills.css';
import girl from '../../assets/images/girl.png';
import gemail from '../../assets/images/gemail.png';
import femail from '../../assets/images/femail.png';
import AOS from 'aos';

function Skills() {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 200,
    });
    AOS.refresh()
      })
 
  const [design, setDesign] = useState(true);
  const [web , setWeb] = useState(false);
  const [language, setLanguage] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const showDesign = () =>{
    setDesign(true);
    setWeb(false);
    setLanguage(false);
  }
  const showWeb = () =>{
    setDesign(false);
    setWeb(true);
    setLanguage(false);
  }
  const showLanguge = () =>{
    setDesign(false);
    setWeb(false);
    setLanguage(true);
  }

  return (
    <div style = {{background: 'rgb(20, 20, 20)'}}>
      <Container >
        <Row className="justify-content-md-center">
        <Col md={12} sm={12} xs={12} data-aos="fade-up">
        <div className= 'experties-projects' >
           {/* Headings */}
          <h1   className = 'section-title' >MY SKILLS</h1>
          {/* <div  className = 'heading-style' style = {{left:'43.1rem',top:'8rem'}}></div> */}
          <h3 className = 'text-background secondary-text' >My Experties Areas</h3>
         

           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative',bottom:'5rem'
           ,color:'#fff'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div>
           </Col>
       
           </Row>
           <Row className="justify-content-md-center" style = {{position :'relative'}}>
           <Col md= {4} sm={4} xs={12} data-aos="fade-left">
             <div >

           <Button variant="dark" className = {`${design ? 'active-btn' : 'skills-btn'} `} onClick = {showDesign}>UI/UX Design </Button>
             </div>
             <div>

           <Button variant="dark" className = {`${web ? 'active-btn' : 'skills-btn'}  `} onClick = {showWeb}>WebDevelopment </Button>
             </div>
             <div >

           <Button variant="dark" className = {`${language ? 'active-btn' : 'skills-btn'} `} onClick = {showLanguge}>Language Skills </Button>
             </div>
           </Col>
             <Col md={8} sm={8} xs={12} data-aos="fade-right">
           <div>
             {design ? (
          <div class="front-end">
           
              <p style = {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>Photoshope</p>
              <div class="skill-container">
                <div class="skill-value"></div>
                <p class="skill-text">90%</p>
             
            </div>
          
              <p  style = {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>Adobe Illustator</p>
              <div class="skill-container">
                <div class="skill-value value-85"></div>
                <p class="skill-text">85%</p>
              </div>
           
          
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>Branding Design</p>
              <div class="skill-container">
                <div class="skill-value value-75"></div>
                <p class="skill-text">75%</p>
              </div>
          
            </div>
  ) : null }
             {web ? (
          <div class="front-end">
           
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>HTML</p>
              <div class="skill-container">
                <div class="skill-value value-90"></div>
                <p class="skill-text">90%</p>
             
            </div>
          
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>CSS</p>
              <div class="skill-container">
                <div class="skill-value value-80"></div>
                <p class="skill-text">80%</p>
              </div>
           
          
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>React</p>
              <div class="skill-container">
                <div class="skill-value value-70"></div>
                <p class="skill-text">70%</p>
              </div>
          
            </div>
  ) : null }
             {language ? (
          <div class="front-end">
           
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>English</p>
              <div class="skill-container">
                <div class="skill-value vlaue-95"></div>
                <p class="skill-text">95%</p>
             
            </div>
          
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>Urdu</p>
              <div class="skill-container">
                <div class="skill-value value-100"></div>
                <p class="skill-text">100%</p>
              </div>
           
          
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>Hindi</p>
              <div class="skill-container">
                <div class="skill-value value-60"></div>
                <p class="skill-text">60%</p>
              </div>
          
            </div>
  ) : null }
            </div>
           </Col>
           <Col md={6}></Col>
        </Row>

          
        
        
        
        <Row className="justify-content-md-center back-color"  data-aos="zoom-in-up">
        
            <Col md={12} sm={12} xs={12}>
        <div className= 'experties-projects' >
           {/* Headings */}
          <h1   className = 'section-title' >FEEDBACK </h1>
          {/* <div  className = 'heading-style' style = {{left:'43.1rem',top:'8rem'}}></div> */}
          <h3 className = 'text-background secondary-text' >Clients Testimonials</h3>
          {/* <span className = 'heading-style'></span> */}

           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative',bottom:'5rem'
           ,color:'#fff'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div>
           </Col>
        </Row>
        <Row className="justify-content-md-center" style={{margin: "0", paddingBottom:"50px"}}  data-aos="zoom-out">
          <Col md={10} sm={12} xs={12}>

          <Carousel activeIndex={index} onSelect={handleSelect} style={{background:'#010101' ,boxShadow:'1px 1px 30px #444'}}>
      <Carousel.Item className="slider-item" >
    <div className="width-100">
        
        <Image style={{backgroundColor:'#fbc363 '}} src={girl} roundedCircle width="80px" height="80px"  />
        </div>
        <Carousel.Caption>
        <i class="fas fa-quote-right"></i>
          <p style={{fontSize:'14px',fontStyle:'italic',fontWeight:'lighter',lineHeight:'1.7rem'}}>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h5  className='girls-name'>Isabella</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-item">
      <div className="width-100">
        
        <Image style={{backgroundColor:'#fbc363 '}} src={femail} roundedCircle width="80px" height="80px" />
        </div>

        <Carousel.Caption>
        <i class="fas fa-quote-right"></i>
          <p style={{fontSize:'14px',fontStyle:'italic',fontWeight:'lighter',lineHeight:'1.7rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. .Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur. .Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <h5 className='girls-name'>Charlotte</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-item">
      <div className="width-100">
        
        <Image style={{backgroundColor:'#fbc363 '}} src={gemail} roundedCircle width="80px" height="80px"  />
        </div>

        <Carousel.Caption>
        <i class="fas fa-quote-right"></i>
          <p style={{fontSize:'14px',fontStyle:'italic',fontWeight:'lighter',lineHeight:'1.7rem'}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <h5  className='girls-name'>Ava</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Col>
        </Row>

       
      </Container>
    </div>
  )
}

export default Skills
