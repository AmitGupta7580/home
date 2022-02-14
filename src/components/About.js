import { Component } from 'react';
import { about } from '../data/about';

import '../css/about.css';
import profile from '../images/profile.jpg'
import { Tabs } from './Data';

class About extends Component {

    tab = Tabs.ABOUT;

    render() {

        return (
            <div id="about">
                <div id="about-shortdes">
                    <div id="about-avtar">
                        <img src={profile} alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "100%", margin: "auto" }} />
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
                        { about.EDUCATION[0]["INSTITUTE"] } <br/>
                        { about.EDUCATION[0]["URL"] } <br/>
                        { about.EDUCATION[0]["DEGREE"] } <br/>
                        { about.EDUCATION[0]["FEILD"] } <br/>
                        { about.AREA_OF_INTEREST } <br/>
                        { about.DES_TITLE } <br/>
                        { about.DESCRIPTION } <br/>
                        { about.EDUCATION[0]["INSTITUTE"] } <br/>
                        { about.EDUCATION[0]["URL"] } <br/>
                        { about.EDUCATION[0]["DEGREE"] } <br/>
                        { about.EDUCATION[0]["FEILD"] } <br/>
                        { about.AREA_OF_INTEREST } <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;