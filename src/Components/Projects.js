import React from 'react'
import { ProjectImg, video} from '../data'
import styled from 'styled-components'

export default function Projects() {
    return (
        <ProjectWrapper className="container">
            <h4 className="text-center text-uppercase mt-5">projects</h4>
            <hr clasName="mx-auto" style={{marginBottom:"1px solid #eee",width:"25%",marginLeft:"25rem"}}/> 
            <a className="mx-auto gitBtn"  data-aos="fade-in" data-aos-delay="300" href="https://github.com/rrajveer" style={{width:"20%"}}>
            <i class="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                Project Inventory</a>
            
            <div className="project-item" >
            
                <div className="project-img mt-4" data-aos="zoom-in" data-aos-delay="300">
                <video  controls autoplay src={require("../assest/OnlineShopping2.webm")} style={{height:"160px", width:"auto"}}/>
                    {/* <img src={ProjectImg[0].onlineShopping} alt="prjctImg" style={{height:"160px", width:"auto",marginTop:"1rem"}}/> */}
                </div>
                <div className="project-desc" data-aos="fade-in" data-aos-delay="900">
                    <h6 className="mx-auto " style={{borderBottom:"1px solid #eee",width:"47%"}}>Online Shopping<span style={{marginLeft:"5px"}}>(React)</span></h6>
                    <p  style={{fontSize:"0.9rem"}}>
                    It is a web application which shows the different categories of product, where user can search and purchase the product.
                    </p>
                    <h7 style={{fontSize:"0.9rem"}}>Technology Used:- React, Bootstrap, CSS3, JQuery, Media Queries</h7>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website">
                    <i class="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                        View on github</a>
                </div>
            </div>

            <div className="project-item" style={{flexDirection:"row-reverse"}}>
                <div className="project-img mt-3" data-aos="zoom-in" >
                <video  controls autoplay src={require("../assest/ReactForm.webm")} style={{height:"160px", width:"auto"}}/>
                    {/* <img src={ProjectImg[0].cookBook} alt="prjctImg" style={{height:"160px", width:"auto",marginTop:"1rem"}}/> */}
                </div>
                <div className="project-desc-diff" style={{marginRight:"5rem"}} data-aos="fade-in" data-aos-delay="600">
                    <h6 className="mx-auto mt-4" style={{borderBottom:"1px solid #eee",width:"35%",
                        textAlign:"center",fontSize:"1.2rem",color: "white", opacity:"0.8"}}>Tab Form<span style={{marginLeft:"5px"}}>(React)</span></h6>
                    <p style={{fontSize:"0.9rem",fontWeight:"500",color:"white",opacity:"0.8"}} >
                    This is a single page application where we have a three tabs. In Tab1 we have two forms one on top of other with a submit button,where user 
                    can enter data which will get displayed in another two tabs respectively.
                     </p>
                    <h7 style={{fontSize:"0.9rem",fontWeight:"500",color:"white",opacity:"0.8"}}>Technology Used:- React, CSS3, Bootstrap</h7>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/React-Form">
                    <i class="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                        View on github</a>
                </div>
            </div>
            <div className="project-item">
                <div className="project-img" data-aos="zoom-in">
                    <img src={require('../assest/BeachResort.png')} alt="prjctImg" style={{height:"160px", width:"auto",marginTop:"1rem"}}/>
                </div>
                <div className="project-desc" data-aos="fade-in" data-aos-delay="600">
                    <h6 className="mx-auto" style={{borderBottom:"1px solid #eee",width:"38%",marginTop:"4px"}}>Beach Resort<span style={{marginLeft:"5px"}}>(PHP)</span></h6>
                
                    <p style={{fontSize:"0.9rem"}}>
                    It is a web application which shows the different categories of product, where user can search and purchase the product.
                    </p>
                    <h7 style={{fontSize:"0.9rem"}}>Technology Used:- PHP, Bootstrap, CSS3, JQuery, Media Queries</h7>
                    
                        <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Beach-resort">
                            <i class="fab fa-github"style={{marginRight:"5px",marginTop:"2px",padding:"2px"}}/>
                            View on github
                        </a>
                </div>
            </div>
            
        </ProjectWrapper>
    )
}
const ProjectWrapper = styled.div``


// h4::before,
// h4::after{
//       content: '';
//       position: absolute;
//       /* bottom: -.5rem; */
//       bottom: -66.5rem;
//       left: 50%;
//       transform: translateX(-50%);
//       background-color:white;
// }

// h4::before{
//   width:18rem;
//   height: 3px;
//   border-radius: 0.8rem;
// }
// h4::after{
//   width: 1.2rem;
//   height: 1.3rem;
//   border-radius: 100%;
//   /* bottom: -1rem; */
//   bottom: -67rem;
// }

// `;