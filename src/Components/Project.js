// import React, { Component } from 'react';
// import { Tabs,Tab} from 'react-mdl';

// export default class Project extends Component {
//     constructor(props){
//         super(props);
//         this.state = { activeTab:0};
//     }
//     toggleProject() {
//         if(this.state.activeTab===0){
//             return(
//                 <div>
//                      <div className="project-desc" data-aos="fade-in" data-aos-delay="900">
//                     <h6 className="mx-auto" style={{borderBottom:"1px solid #eee",width:"51%"}}>Online Shopping<span style={{marginLeft:"5px"}}>(React)</span></h6>
//                     <p >
//                     It is a web application which shows the different categories of product, where user can search and purchase the product.
//                     </p>
//                     <h7>Technology Used:- React, Bootstrap, CSS3, JQuery, Media Queries</h7>
//                     <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website">
//                     <i class="fab fa-github" style={{marginRight:"5px",marginTop:"2px",padding:"2px"}}/>
//                         View on github</a>
//                 </div>
//                 </div>
//             )
//          }
//             else if(this.state.activeTab===1){
//                 return(
//                     <div>
//                         <h6 className="mx-auto" style={{borderBottom:"1px solid #eee",width:"38%",
//                         textAlign:"center",fontSize:"1.2rem",color: "white", opacity:"0.8"}}>Tab Form<span style={{marginLeft:"5px"}}>(React)</span></h6>
//                     <p style={{fontSize:"0.8rem",fontWeight:"500",color:"white",opacity:"0.8"}} >
//                     This is a single page application where we have a three tabs. In Tab1 we have two forms one on top of other with a submit button,where user 
//                     can enter data which will get displayed in another two tabs respectively.
//                      </p>
//                     <h7 style={{fontSize:"0.8rem",fontWeight:"500",color:"white",opacity:"0.8"}}>Technology Used:- React, CSS3, Bootstrap</h7>
//                     <a className="mx-auto gitBtn" href="https://github.com/rrajveer/React-Form">
//                     <i class="fab fa-github" style={{marginRight:"5px",marginTop:"1px",padding:"2px"}}/>
//                         View on github</a>
//                     </div>
//                 )
//             }
//             else if(this.state.activeTab===2){
//                 return(
//                     <h5>JavaScript</h5>
//                 )
//             }
            
        
//     }
//     render() {

//         return (
//             <div className="category-tabs">
//                 <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple>
//                     <Tab>React</Tab>
//                     <Tab>PHP</Tab>
//                     <Tab>JavaScript</Tab>
//                 </Tabs>
//                 <section>
//                     {this.toggleProject()}
//                 </section>
                
//             </div>
//         )
//     }
// }
