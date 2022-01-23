import { Component } from 'react';
import { about } from '../data/about';

import '../css/about.css';
import profile from '../images/profile.jpg'
import { Tabs } from './Data';

class About extends Component {

    tab = Tabs.ABOUT;

    constructor(props) {
        super(props);
        this.state = { ...(this.props.fullscreen ? { width: this.tab.full_width, height: this.tab.full_height } : { width: this.tab.short_width, height: this.tab.short_height }) };
    }

    render() {
        return (
            <div id="about">
                <div id="about-shortdes">
                    <div id="about-avtar">
                        <div style={{ width: "25%" }}></div>
                        <img src={profile} alt="" style={{ width: "90%", height: "95%"/*, borderRadius: "90%"*/ }} />
                        <div style={{ width: "25%" }}></div>
                    </div>
                    <div id="about-shortdes-des">
                        { about.NAME } <br/>
                        { about.DOB } <br/>
                        { about.EMAIL } <br/>
                        { about.NATIONALITY } <br/>
                        { about.LANGUAGES } <br/>
                    </div>
                </div>
                <div style={{ width: "62.5%", height: "100%"}}>
                    <div id="about-longdes">
                        { about.DES_TITLE } <br/>
                        { about.DESCRIPTION } <br/>
                        { about.EDUCATION["INSTITUTE"] } <br/>
                        { about.EDUCATION["URL"] } <br/>
                        { about.EDUCATION["DEGREE"] } <br/>
                        { about.EDUCATION["FEILD"] } <br/>
                        { about.AREA_OF_INTEREST } <br/>
                        { about.DES_TITLE } <br/>
                        { about.DESCRIPTION } <br/>
                        { about.EDUCATION["INSTITUTE"] } <br/>
                        { about.EDUCATION["URL"] } <br/>
                        { about.EDUCATION["DEGREE"] } <br/>
                        { about.EDUCATION["FEILD"] } <br/>
                        { about.AREA_OF_INTEREST } <br/>
                    </div>
                </div>
            </div>
        )
    }
    /*
    render() {
        return this.props.fullscreen ? (
            <div id="about">
                <div id="about-large-shortdes">
                    <div style={{height: "40vh"}}>
                        <div id="about-large-avtar">
                            <img src={profile} alt="" style={{ width: "38vh", height: "38vh", borderRadius: "26vh" }} />
                        </div>
                    </div>
                    <div id="about-large-shortdes-des">
                        { about.NAME } <br/>
                        { about.DOB } <br/>
                        { about.EMAIL } <br/>
                        { about.NATIONALITY } <br/>
                        { about.LANGUAGES } <br/>
                    </div>
                </div>
                <div id="about-large-longdes">
                    { about.DES_TITLE } <br/>
                    { about.DESCRIPTION } <br/>
                    { about.EDUCATION["INSTITUTE"] } <br/>
                    { about.EDUCATION["URL"] } <br/>
                    { about.EDUCATION["DEGREE"] } <br/>
                    { about.EDUCATION["FEILD"] } <br/>
                    { about.AREA_OF_INTEREST } <br/>
                    { about.DES_TITLE } <br/>
                    { about.DESCRIPTION } <br/>
                    { about.EDUCATION["INSTITUTE"] } <br/>
                    { about.EDUCATION["URL"] } <br/>
                    { about.EDUCATION["DEGREE"] } <br/>
                    { about.EDUCATION["FEILD"] } <br/>
                    { about.AREA_OF_INTEREST } <br/>
                </div>
            </div>
        ) : (
            <div id="about-small">
                <div id="about-small-shortdes">
                    <div style={{height: "30vh"}}>
                        <div id="about-small-avtar">
                            <img src={profile} alt="" style={{ width: "26vh", height: "26vh", borderRadius: "26vh" }} />
                        </div>
                    </div>
                    <div id="about-small-shortdes-des">
                        { about.NAME } <br/>
                        { about.DOB } <br/>
                        { about.EMAIL } <br/>
                        { about.NATIONALITY } <br/>
                        { about.LANGUAGES } <br/>
                    </div>
                </div>
                <div id="about-small-longdes">
                    { about.DES_TITLE } <br/>
                    { about.DESCRIPTION } <br/>
                    { about.EDUCATION["INSTITUTE"] } <br/>
                    { about.EDUCATION["URL"] } <br/>
                    { about.EDUCATION["DEGREE"] } <br/>
                    { about.EDUCATION["FEILD"] } <br/>
                    { about.AREA_OF_INTEREST } <br/>
                    { about.DES_TITLE } <br/>
                    { about.DESCRIPTION } <br/>
                    { about.EDUCATION["INSTITUTE"] } <br/>
                    { about.EDUCATION["URL"] } <br/>
                    { about.EDUCATION["DEGREE"] } <br/>
                    { about.EDUCATION["FEILD"] } <br/>
                    { about.AREA_OF_INTEREST } <br/>
                </div>
            </div>
        );
    }
    */
}

export default About;