import React, {Component} from "react";
import "./contacts.css";
export default class Contacts extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            subject : '',
            message : '',
            toEmail : 'info@Altos.tech'
        }
        this.emailHandleChange = this.emailHandleChange.bind(this);
        this.subjectHandleChange = this.subjectHandleChange.bind(this);
        this.msgHandleChange = this.msgHandleChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }
    sendEmail () {
        const  mailLink = `mailto:${this.state.toEmail}?subject=${this.state.subject}&body=${this.state.message}`;
        window.location.href = mailLink;
    }

    emailHandleChange (e) {
        this.setState({'email' : e.target.value});
    }

    subjectHandleChange (e) {
        this.setState({'subject' : e.target.value});
    }

    msgHandleChange (e) {
        this.setState({'message' : e.target.value});
    }

    
    render() {
        return (
            <div id="contact-container">
                <div className="content">
                    <div className="section1">
                        <div className="title">
                            <span>GET IN</span><br/>
                            <span className="green_color">TOUCH</span>
                        </div>
                        <div className="contactInfo">
                            <div className="email">
                                <span>EMAIL</span><br/>
                                <span className="green_color">info@Altos.tech</span><br/>
                            </div>
                            <div className="phone">
                                <span>PHONE</span><br/>
                                <span className="green_color">Coming soon!</span>
                            </div>
                        </div>
                    </div>
                    <div className="section2">
                        <div className="contactForm">
                            <input type="text" placeholder="Name"></input>
                            <input type="text" placeholder="Email" value= {this.state.email} onChange={this.emailHandleChange}></input>
                            <input type="text" placeholder="Subject" value= {this.state.subject} onChange={this.subjectHandleChange}></input>
                            <textarea  cols="40" rows="5" placeholder="Message" value= {this.state.message} onChange={this.msgHandleChange}></textarea>
                            <div className='submitBtn' onClick={this.sendEmail}><input type="button"></input></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}