import React from 'react'
import { SkillsImg } from '../data'
export default function Skills() {
    return (
        <div className="container skillss">
            <h4 className="text-center text-uppercase mt-5">Skills</h4>
            <hr clasName="mx-auto" style={{marginBottom:"1px solid #eee",width:"24%",marginLeft:"25rem"}}/> 
            <div className="my-skills" >
            <div className="skill-item" data-aos="fade-right" data-aos-delay="300">
                    <div className="icons-container">
                    <i class="far fa-file-code" style={{fontSize:"1.5rem",color:"#ffe838"}}/>
                        {/* <img src={SkillsImg[0].database} alt="dataImg"/> */}
                    </div>
                    <h6 style={{borderBottom:"1px solid white",fontSize:"0.9rem"}}>Development</h6>
                    <ul>
                        <li>react</li>
                        <li>html</li>
                        <li>php</li>
                        <li>CSS</li>
                        <li>bootStrap</li>
                    </ul>
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="1000">
                    <div className="icons-container">
                    <i class="fas fa-database icon-4x" style={{fontSize:"1.5rem",color:"#ffe838"}}/>
                    </div>
                    <h6 style={{borderBottom:"1px solid white",fontSize:"0.9rem"}}>DataBase</h6>
                    <ul>
                        <li>sqlLite</li>
                        <li>sql</li>
                        <li>mySql</li>
                    </ul>
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="1000">
                    <div className="icons-container">
                    <i class="fas fa-code-branch" style={{fontSize:"1.5rem",color:"#ffe838"}}/>
                    </div>
                    <h6 style={{borderBottom:"1px solid white",fontSize:"0.9rem"}}>Version Control</h6>
                    <ul>
                        <li>gitHub</li>
                        <li>bitBucket</li>
                    </ul>
                </div>
                <div className="skill-item" data-aos="fade-left" data-aos-delay="300">
                    <div className="icons-container">
                    <i class="fas fa-tasks" style={{fontSize:"1.5rem",color:"#ffe838"}}></i>
                    </div>
                    <h6 style={{borderBottom:"1px solid white",fontSize:"0.9rem"}}>Task Management</h6>
                    <ul>
                        <li>trello</li>
                        <li>scrum</li>
                    </ul>
                </div>
                {/* <div className="skill-item">
                    <div className="icon-container">
                        <i/>
                    </div>
                    <h6>ide's</h6>
                    <ul>
                        <li>visual studio</li>
                        <li>android studio</li>
                        <li>visual studio code</li>
                    </ul>
                </div> */}

            </div>
            
        </div>
    )
}
