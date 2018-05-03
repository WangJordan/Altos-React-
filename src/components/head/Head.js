import React, {Component} from "react";
import "./head.css";
import Header from '../header/Header';
import backImg from '../../assets/images/BGNormal.png';
export default class Head extends Component {
    render() {
        return (
            <div id="head-Container">
                <Header></Header>
            </div>
        );
    };
}