import React, {Component} from "react";
import "./team.css";
import member1 from "../../assets/images/member1.png";
import member2 from "../../assets/images/member2.png";
import member3 from "../../assets/images/member3.png";
import member4 from "../../assets/images/member4.png";
import linkImg from "../../assets/images/LinkedInProfile.png";
export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMember1 : false,
            showMember2 : false,
            showMember3 : false,
            showMember4 : false
        }
    }
    render() {
        return (
            <div id="team-Container">
                <div className="content">
                    <div className="Section1">
                        <div className="title"><span>OUR</span><br/><span className="green_color">TEAM</span></div>
                        <div className="desc">
                            <p>A nice balance between both sides of the brain. Tech, finance, vision and development.</p>
                        </div>
                    </div>
                    <div className="Section2">
                        <div className="row1">
                            <div className="memeber-profile"   onMouseEnter={() => this.setState({ showMember1: true })}
                                    onMouseLeave={() => this.setState({ showMember1: false })} >
                                <img  
                                  
                                    src={member1}>
                                </img>
                                { this.state.showMember1 ? 
                                    <div className="coverArea">
                                        <div className="name">Member1</div>
                                        <div className="link"><a href="#"><img src={linkImg}></img></a></div>
                                    </div>
                                    : null }
                            </div>

                            <div className="memeber-profile"   onMouseEnter={() => this.setState({ showMember2: true })}
                                    onMouseLeave={() => this.setState({ showMember2: false })} >
                                <img  
                                  
                                    src={member2}>
                                </img>
                                { this.state.showMember2 ? 
                                    <div className="coverArea">
                                        <div className="name">Arjen</div>
                                        <div className="link"><a href="#"><img src={linkImg}></img></a></div>
                                    </div>
                                    : null }
                            </div>
                        </div>
                        <div className="row2">
                        <div className="memeber-profile"   onMouseEnter={() => this.setState({ showMember3: true })}
                                    onMouseLeave={() => this.setState({ showMember3: false })} >
                                <img  
                                    src={member3}>
                                </img>
                                { this.state.showMember3 ? 
                                    <div className="coverArea">
                                        <div className="name">Member3</div>
                                        <div className="link"><a href="#"><img src={linkImg}></img></a></div>
                                    </div>
                                    : null }
                            </div>

                            <div className="memeber-profile"   onMouseEnter={() => this.setState({ showMember4: true })}
                                    onMouseLeave={() => this.setState({ showMember4: false })} >
                                <img  
                                    src={member4}>
                                </img>
                                { this.state.showMember4 ? 
                                    <div className="coverArea">
                                        <div className="name">Member4</div>
                                        <div className="link"><a href="#"><img src={linkImg}></img></a></div>
                                    </div>
                                    : null }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}