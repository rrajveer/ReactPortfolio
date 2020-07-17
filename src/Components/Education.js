import React from 'react';
import { Grid, Cell } from 'react-mdl';
import styled from 'styled-components';
export default function Education() {
    return (
        <EducationWrapper>

            <h3 className="text-center text-uppercase mt-5">education</h3>
            <hr clasName="mx-auto" style={{marginBottom:"1px solid #eee",width:"20%",width: "25%",marginLeft:"27rem"}}/> 
               <div className="mt-5 Edu-1" style={{display:"flex"}} data-aos="fade-up" data-aos-delay="300">
                 <div  style={{marginLeft:"16rem"}}>
                     <h5 style={{fontSize:"1rem",color:"white",opacity:"0.8"}}>Programming and Web Technologies, Post-Graduation Diploma </h5>
                     <p style={{fontSize:"0.8rem",color:"white",opacity:"0.8"}}>ISI, L’institut Supérieur d’informatique, Montreal, QC </p>
                 </div>
                 <div className="mt-4" >
                     <span style={{marginLeft:"50px",fontSize:"1rem",fontWeight:"500"}}>2019-2021</span>
                 </div>

               </div>

               <div className="mt-4 Edu-1" style={{display:"flex"}} data-aos="fade-up" data-aos-delay="600">
                 <div  style={{marginLeft:"16rem"}}>
                     <h5 style={{fontSize:"1rem",color:"white",opacity:"0.8"}}>Computer Science and Engineering, Master of Technology</h5>
                     <p style={{fontSize:"0.8rem",color:"white",opacity:"0.8"}}>Rungta College of Engineering and Technology, India </p>
                 </div>
                 <div className="mt-4">
                     <span style={{marginLeft:"6rem",fontSize:"1rem",fontWeight:"500"}}>2013-2015</span>
                 </div>

               </div>
            
                    {/* <Grid className="gridwrap" style={{display:"flex"}} data-aos="fade-up" data-aos-delay="300">
                    <Cell col={8} className="mt-5" style={{marginLeft:"13rem"}}>
                        
                       <h5 style={{fontSize:"1rem",color:"white",opacity:"0.8"}}>Programming and Web Technologies, Post-Graduation Diploma </h5>
                       
                       
                       <p style={{fontSize:"0.8rem",color:"white",opacity:"0.8"}}>ISI, L’institut Supérieur d’informatique, Montreal, QC </p>
                    </Cell>
                    <Cell col={4} className=" mt-5">
                          <span style={{marginLeft:"50px",fontSize:"1rem",fontWeight:"500"}}>2019-2021</span>
                    </Cell>
                    </Grid>
                    <Grid style={{display:"flex"}} data-aos="fade-up" data-aos-delay="300">
                    <Cell col={8} className="mt-3" style={{marginLeft:"13rem"}}>
                        
                       <h5 style={{fontSize:"1rem",color:"white",opacity:"0.8"}}>Computer Science and Engineering, Master of Technology </h5>
                       
                       
                       <p style={{fontSize:"0.8rem",color:"white",opacity:"0.8"}}>Rungta College of Engineering and Technology, India </p>
                    </Cell>
                    <Cell col={4} className=" mt-3">
                          <span style={{marginLeft:"96px",fontSize:"1rem",fontWeight:"500"}}>2013-2015</span>
                    </Cell>
                    </Grid> */}
            
        </EducationWrapper>
    )
}
const EducationWrapper = styled.div`
.gridwrap h5{
    color:"white";
    opacity:"0.8";
}
// h3::before,
// h3::after{
//       content: '';
//       position: absolute;
//       bottom: -24.5rem;
//     //   bottom: -61rem;
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
//    bottom: -25rem; 
  
// }
`