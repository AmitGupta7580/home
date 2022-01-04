import { Component } from 'react';
import { about } from '../data/about';

import '../css/about.css';
import profile from '../images/profile.jpg'

class About extends Component {
    render() {
        return this.props.fullscreen ? (
            <div>About Page full screen</div>
        ) : (
            <div id="about-small">
                <div style={{ width: '25vw', padding: '2vh' }}>
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
            </div>
        );
    }
}

export default About;