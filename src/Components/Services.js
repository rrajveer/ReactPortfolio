import React from 'react'
import styled from 'styled-components'

export default function Services() {
    return (
        <ServiceWrapper>
              <h3 className="Services text-center text-uppercase mt-5"style={{margin:"0px",padding:"0px"}}>Services</h3>
              <hr clasName="mx-auto" style={{marginBottom:"1px solid #eee",width:"20%",width: "25%",marginLeft:"27rem"}}/> 
              <h6 className="text-center text-capitalize mt-3" style={{fontFamily:"Pacifico, cursive",fontSize:"1rem",letterSpacing:"0.1rem"}}>what i can do for you</h6>
              
            <div className="mySkills">
                <div className="skill" data-aos="flip-left" data-aos-delay="300">
                    <div className="icon-container">
                        <i className="fas fa-layer-group"/>
                    </div>
                    <h1>Web Design</h1>
                    {/* <p >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy
                    </p> */}
                </div>
                <div className="skill" data-aos="flip-left" data-aos-delay="900">
                    <div className="icon-container">
                        <i className="fas fa-code"/>
                    </div>
                    <h1>Web Developmet</h1>
                    {/* <p >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy
                    </p> */}
                </div>
                <div className="skill" data-aos="flip-left" data-aos-delay="1200">
                    <div className="icon-container">
                      <i className="far fa-lightbulb"/>
                    </div>
                    <h1>Innovative Ideas</h1>
                    {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy
                    </p> */}
                </div>
            </div>
        </ServiceWrapper>
    )
}

const ServiceWrapper = styled.div`

// .services h3::before,
// .services h3::after{
//       content: '';
//       position: absolute;
//       /* bottom: -.5rem; */
//       bottom: -121.5rem;
//        left: 50%;
//       transform: translateX(-50%);
//       background-color:white;
// }

// .services h3::before{
//   width:18rem;
//   height: 3px;
//   border-radius: 0.8rem;
// }
// .contact h3::after{
//   width: 1.2rem;
//   height: 1.3rem;
//   border-radius: 100%;
//   /* bottom: -1rem; */
//   bottom: -152rem;
// }

`