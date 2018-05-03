import React, {Component} from "react";
import "./services.css";
import serviceBackImg from "../../assets/images/serviceBackImg.png";
import development_icon from "../../assets/images/development_icon.png";
import consultancy_icon from "../../assets/images/consultancy_icon.png";
import protocols_icon from "../../assets/images/protocols_icon.png";
import reserach_icon from "../../assets/images/reserach_icon.png";
export default class Services extends Component {
    render() {
        return (
            <div id="services-Container">
                <div className="content c_row">
                    <div className="section1">
                        <div className="title">
                            <span>WHAT WE</span><br/>
                            <span className="green_color">DO</span>
                        </div>
                        <div className="desc">
                            <p>Altos helps developers and entrepeneurs to embrace the way software can be developed.</p>
                        </div>
                    </div>
                     <div className="section2">
                        <div className="c_row">
                            <div className="col-md-6">
                                <img src={development_icon} alt="development"></img>
                                <p className="title">DEVELOPMENT</p>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            </div>

                            <div className="col-md-6">
                                <img src={consultancy_icon} alt="development"></img>
                                <p className="title">CONSULTANCY</p>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            </div>
                        </div>
                        <div className="c_row">
                            <div className="col-md-6">
                                <img src={protocols_icon} alt="development"></img>
                                <p className="title">PROTOCOLS</p>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img src={reserach_icon} alt="development"></img>
                                <p className="title">RESEARCH</p>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    };
}