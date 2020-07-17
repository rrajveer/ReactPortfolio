import React from 'react'
import { Grid, Cell } from 'react-mdl'
import styled from 'styled-components'
export default function Experience() {
    return (
        <ExperienceWrapper>
                    <h3 className="text-center text-uppercase mt-5">experience</h3>
                    <hr clasName="mx-auto" style={{marginBottom:"1px solid #eee",width:"20%",width: "25%",marginLeft:"27rem"}}/> 
                   <div className="exp" style={{display:"flex"}} data-aos="fade-up" data-aos-delay="300">
                     <div style={{marginLeft:"20rem"}}>

                        <h5 style={{fontSize:"1.1rem",marginBottom:"0px",letterSpacing: "0.1rem",color:"white",opacity:"0.8"}}>Web Developer </h5>
                        <p style={{fontSize:"0.8rem",fontWeight:"500",color:"white",opacity:"0.8"}}>Social Ninja Technology</p>
                        <ul style={{fontSize:"0.9rem",marginTop:"0px",fontWeight:"500",color:"white",opacity:"0.8"}}>
                           <li>Implement UI design</li>
                           <li>Design and built signup and login pages </li>
                           <li>Fix software bugs via JavaScript and CSS</li>
                           <li>Work on the functional requirement suggested By Team Lead</li>    
                        </ul>

                      </div>

                      <div className="mt-4">
                         <span style={{fontSize:"1rem",marginLeft:"5rem",fontWeight:"500"}}>2017–2018 </span>
                      </div>
                   </div>
                    
                    {/* <Grid style={{display:"flex"}} data-aos="fade-up" data-aos-delay="300">
                    <Cell col={8} className="mt-5" style={{marginLeft:"15rem"}}>
                        
                       <h5 style={{fontSize:"1.1rem",marginBottom:"0px",letterSpacing: "0.1rem",color:"white",opacity:"0.8"}}>Web Developer </h5>
                       <p style={{fontSize:"0.7rem",fontWeight:"500",color:"white",opacity:"0.8"}}>Social Ninja Technology</p>
                       <ul style={{fontSize:"0.8rem",marginTop:"0px",fontWeight:"500",color:"white",opacity:"0.8"}}>
                           <li>Implement UI design</li>
                           <li>Design and built signup and login pages </li>
                           <li>Fix software bugs via JavaScript and CSS</li>
                           <li>Work on the functional requirement suggested By Team Lead</li>
                           
                            
                        </ul>
                    </Cell>
                    <Cell col={4} className=" mt-5">
                          <span style={{fontSize:"1rem",marginLeft:"5rem",fontWeight:"500"}}>2017–2018 </span>
                    </Cell>
                    </Grid>
                      
                     */}
                  
        </ExperienceWrapper>
    )
}
 const ExperienceWrapper = styled.div``
// h3::before,
// h3::after{
//       content: '';
//       position: absolute;
//       bottom: -44rem;
//       left: 50%;
//       transform: translateX(-50%);
//       background-color:white;
// }

// h3::before{
//   width:18rem;
//   height: 3px;
//   border-radius: 0.8rem;
// }
// h3::after{
//   width: 1.2rem;
//   height: 1.3rem;
//   border-radius: 100%;
//    bottom: -44.5rem; 
  
// }

