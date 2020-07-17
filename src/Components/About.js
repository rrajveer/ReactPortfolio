import React from 'react'
import { Grid, Cell } from 'react-mdl'
import { AboutImg } from '../data'
import styled from 'styled-components'

export default function About() {
    return (
        <AboutWrapper>
            <div>
            <h4 className="text-center text-uppercase">about me</h4>
            {/* <hr className="mx-auto"style={{borderTop:"3px dotted #8e0e00",width:"35%"}}/> */}
            
            <Grid className="d-flex mt-5">
                <Cell col={4} className="left-col" data-aos="fade-right" data-aos-delay="300">
                   <img src= {require('../assest/MyImg.JPG')} alt="myImg" style={{height:"200px", width:"auto",marginTop:"15px"}}/>
                </Cell>
                <Cell col={8} className="right-col" data-aos="fade-left" data-aos-delay="600">
                   
                   <p  style={{marginTop:"1.7rem",fontSize:"0.9rem",color:"white",opacity:"0.8"}}> <strong>"</strong> 
                   I am currently pursuing a Post Graduate Diploma in Web Programming and Technologies and 
                   I have done a master’s in computer science to acquire the necessary knowledge for a career 
                   in these fields.<strong>"</strong></p> 

                      <p  style={{marginTop:"1.5rem",fontSize:"0.9rem",color:"white",opacity:"0.8"}}> <strong>"</strong>
                      I am a dedicated Web Developer with more than one year hands-on experience in the design and development of websites using various technologies like <span className="paraWord">REACT,HTML,CSS <h9 style={{color:"white !important"}}>and</h9> MySQL</span>. 
                      I am an organized person and always energetic and eager to learn new skills. <strong>"</strong></p> 
                
                </Cell>
                </Grid>
                {/* <hr className="border"style={{borderTop:"2px solid white "}}/> */}
            </div>
            
        </AboutWrapper>
    )
}
const AboutWrapper = styled.div`
.border{
    opacity:"0.3";
}
.left-col{
    margin-left:20%;
}
.right-col{
    margin-left:5%;
    margin-right:10%;
}

h4::before,
h4::after{
      content: '';
      position: absolute;
      bottom: -.5rem;
      /* bottom: -67.5rem; */
      left: 50%;
      transform: translateX(-50%);
      background-color:white;
}

h4::before{
  width:18rem;
  height: 3px;
  border-radius: 0.8rem;
}
h4::after{
  width: 1.2rem;
  height: 1.3rem;
  border-radius: 100%;
  bottom: -1rem;
  /* bottom: -68rem; */
}
.paraWord{
    color:linear-gradient(to right, #ffe838,#9CECFB);
}
`;