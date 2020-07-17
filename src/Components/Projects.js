import React from 'react'
import { ProjectImg, video} from '../data'
import styled from 'styled-components'

export default function Projects() {
    return (
        <ProjectWrapper className="container">
            <h4 className="text-center text-uppercase mt-5">projects</h4>
            <div className="project-item" >
            
                <div className="project-img" data-aos="zoom-in" data-aos-delay="300">
                <video  controls autoplay src={video[0].onlineShopping} style={{height:"160px", width:"auto"}}/>
                    {/* <img src={ProjectImg[0].onlineShopping} alt="prjctImg" style={{height:"160px", width:"auto",marginTop:"1rem"}}/> */}
                </div>
                <div className="project-desc" data-aos="fade-in" data-aos-delay="900">
                    <h6 className="mx-auto" style={{borderBottom:"1px solid #eee",width:"51%"}}>Online Shopping<span style={{marginLeft:"5px"}}>(React)</span></h6>
                    <p >
                    It is a web application which shows the different categories of product, where user can search and purchase the product.
                    </p>
                    <h7>Technology Used:- React, Bootstrap, CSS3, JQuery, Media Queries</h7>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website">
                    <i class="fab fa-github" style={{marginRight:"5px",marginTop:"2px",padding:"2px"}}/>
                        View on github</a>
                </div>
            </div>

            <div className="project-item" style={{flexDirection:"row-reverse"}}>
                <div className="project-img" data-aos="zoom-in" >
                <video  controls autoplay src={video[0].reactForm} style={{height:"160px", width:"auto"}}/>
                    {/* <img src={ProjectImg[0].cookBook} alt="prjctImg" style={{height:"160px", width:"auto",marginTop:"1rem"}}/> */}
                </div>
                <div className="project-desc-diff" style={{marginRight:"5rem"}} data-aos="fade-in" data-aos-delay="600">
                    <h6 className="mx-auto" style={{borderBottom:"1px solid #eee",width:"38%",
                        textAlign:"center",fontSize:"1.2rem",color: "white", opacity:"0.8"}}>Tab Form<span style={{marginLeft:"5px"}}>(React)</span></h6>
                    <p style={{fontSize:"0.8rem",fontWeight:"500",color:"white",opacity:"0.8"}} >
                    This is a single page application where we have a three tabs. In Tab1 we have two forms one on top of other with a submit button,where user 
                    can enter data which will get displayed in another two tabs respectively.
                     </p>
                    <h7 style={{fontSize:"0.8rem",fontWeight:"500",color:"white",opacity:"0.8"}}>Technology Used:- React, CSS3, Bootstrap</h7>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/React-Form">
                    <i class="fab fa-github" style={{marginRight:"5px",marginTop:"1px",padding:"2px"}}/>
                        View on github</a>
                </div>
            </div>
            <div className="project-item">
                <div className="project-img" data-aos="zoom-in">
                    <img src={ProjectImg[0].beachResort} alt="prjctImg" style={{height:"160px", width:"auto",marginTop:"1rem"}}/>
                </div>
                <div className="project-desc" data-aos="fade-in" data-aos-delay="600">
                    <h6 className="mx-auto" style={{borderBottom:"1px solid #eee",width:"44%"}}>Beach Resort<span style={{marginLeft:"5px"}}>(PHP)</span></h6>
                
                    <p >
                    It is a web application which shows the different categories of product, where user can search and purchase the product.
                    </p>
                    <h7>Technology Used:- PHP, Bootstrap, CSS3, JQuery, Media Queries</h7>
                    <button className="mx-auto gitBtn">
                    <i class="fab fa-github"style={{marginRight:"5px",marginTop:"2px",padding:"2px"}}/>
                        View on github</button>
                </div>
            </div>
            
        </ProjectWrapper>
    )
}
const ProjectWrapper = styled.div`


h4::before,
h4::after{
      content: '';
      position: absolute;
      /* bottom: -.5rem; */
      bottom: -66.5rem;
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
  /* bottom: -1rem; */
  bottom: -67rem;
}

`;