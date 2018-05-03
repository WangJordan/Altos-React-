import React, {Component} from "react";
import "./projects.css";
import projectsBg from "../../assets/images/projectsBg.png";
import projects_1 from "../../assets/images/projects_1.png";
import projects_2 from "../../assets/images/projects_2.png";
import projects_3 from "../../assets/images/projects_3.png";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists:['MYSOUNDSAFE','IOTApay', 'ALTOS POE'],
            images:[projects_1, projects_2, projects_3]
        }
    }

    render() {
        const { lists, images } = this.state;
        const listItems = lists.map((item, index) => <li key={index}>{item}</li>);
        const imgItems = images.map(
            (item,index) => 
              <li className={index%2 == 0 ? '':'right'} key={index}><img src={item}/></li> 
        );
        return (
            <div id="projects-container">
                <div className="Section1">
                    <img src={projectsBg}></img>
                    <div className="content">
                        <div className="title">
                            <span>OUR</span><br/>
                            <span className="green_color">PROJECTS</span>
                        </div>
                        <div className="list">
                         <ul>
                              {listItems}
                         </ul>
                        </div>
                    </div>
                </div>
                <div className="Section2">
                    <div className="content">
                        <ul>
                            {imgItems}
                        </ul>
                     </div>
                </div>
            </div>
        );
    };
}