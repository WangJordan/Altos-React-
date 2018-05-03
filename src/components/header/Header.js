import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/images/LogoNormal.png';
import linked_icon from '../../assets/images/linkedIn_Icon.png';
import facebook_icon from '../../assets/images/facebook_icon.png';
import twitter_icon from '../../assets/images/twitter_icon.png';
import center_logo from '../../assets/images/BitmapNormal.png';
import './header.css';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_opened : false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu () {
    var menu_opened = !this.state.menu_opened;
    this.setState({menu_opened : menu_opened});
    console.log(menu_opened);
  }

  render() {
    var { menu_opened } = this.state;
    return (
      <div id="header">
        <div className="navigation">
          <Link to="/" className="logo">
            <div title="HOME" className="brand" >
              <img src={logo}></img>
            </div>
          </Link>
          <div className="responsive-menu">
            <div className="menuToggle-container">
              <a className={`menu-toggler ${menu_opened ? "invisible" : ""}`}  onClick={this.toggleMenu} href="#"></a>
              <a className={`menu-toggler-close ${menu_opened ? "" : "invisible"}`}  onClick={this.toggleMenu} href="#"></a>
            </div>
            <div className={`mobile-menu-container ${menu_opened ? "" : "invisible"}`}>
              <ul className="menuBar">
                <li
                  title="home"
                  className="nav-item"
                >
                  <AnchorLink className="nav-link" href="#header">HOME</AnchorLink>
                </li>

                <li
                  title="about"
                  className="nav-item"
                >
                  <AnchorLink className="nav-link" href="#about-Container">ABOUT</AnchorLink>
                </li>
                <li
                  title="works"
                  className="nav-item"
                >
                  <AnchorLink className="nav-link" href="#services-Container">WORKS</AnchorLink>
                </li>
                <li
                  title="team"
                  className="nav-item"
                >
                  <AnchorLink className="nav-link" href="#team-Container">TEAM</AnchorLink>
                </li>
                <li
                  title="contacts"
                  className="nav-item"
                >
                  <AnchorLink className="nav-link" href="#contact-container">CONTACTS</AnchorLink>
                </li>
              </ul>

          </div>
          </div>  
          <div className="menu-container">

            <ul className="menuBar">
              <li
                title="home"
                className="nav-item"
              >
                <Link className="nav-link" to="/">HOME</Link>
              </li>

              <li
                title="about"
                className="nav-item"
              >
               <AnchorLink className="nav-link" href="#about-Container">ABOUT</AnchorLink>
              </li>
              <li
                title="works"
                className="nav-item"
              >
              <AnchorLink className="nav-link" href="#services-Container">WORKS</AnchorLink>
              </li>
              <li
                title="team"
                className="nav-item"
              >
              <AnchorLink className="nav-link" href="#team-Container">TEAM</AnchorLink>
              </li>
              <li
                title="contacts"
                className="nav-item"
              >
              <AnchorLink className="nav-link" href="#contact-container">CONTACTS</AnchorLink>
              </li>
            </ul>

          
          </div>

          <div className="social-links">
            <ul className="links">
              <li>
                  <a href='#'><img src={linked_icon}></img></a>
              </li>
              <li>
                  <a href='#'><img src={facebook_icon}></img></a>
              </li>
              <li>
                  <a href='#'><img src={twitter_icon}></img></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="center_logo">
            <img src={center_logo}></img>
          </div>
          <p className="header-text"><span>Altos Challenges the way we think about<br/>software. </span>Join us to get inspired on how we</p>
        </div>
      </div>

    );
  }
}


export default withRouter(Header);
