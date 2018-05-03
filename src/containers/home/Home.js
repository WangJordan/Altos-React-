import React, { Component } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Head from "../../components/head/Head";
import Services from "../../components/services/Services";
import Projects from "../../components/projects/Projects";
import Team from "../../components/team/Team";
import Contacts from "../../components/contacts/Contacts";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";
export default class Home extends Component {
  render() {
    return (
      <div id="HomeContainer">
           <Head></Head>
           <About></About>
           <Services></Services>
           <Projects></Projects>
           <Team></Team>
           <Contacts></Contacts>
      </div>
    );
  }
}
