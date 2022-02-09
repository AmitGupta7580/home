import { Component } from 'react';
import { about } from '../data/about';

import '../css/about.css';
import profile from '../images/profile.jpg'
import { Tabs } from './Data';

class About extends Component {

    tab = Tabs.ABOUT;

    constructor(props) {
        super(props);
        /* Aspect ratio of Profile Image : 267 x 328 */

        this.state = { 
            ...(this.props.fullscreen ? { 
                width: 92, 
                height: 90,
                imgHeight: (0.375*0.5*92*window.innerWidth)/100,
                imgWidth: (328*0.375*0.5*92*window.innerWidth)/(100*267),
            } : { 
                width: this.tab.short_width, 
                height: this.tab.short_height,
                imgHeight: (0.375*0.5*this.tab.short_width*window.innerWidth)/100,
                imgWidth: (328*0.375*0.5*this.tab.short_width*window.innerWidth)/(100*267),
            }),
        };
    }

    render() {
        return (
            <div id="about">
                <div id="about-shortdes">
                    <div id="about-avtar">
                        {/* <div style={{ width: "25%" }}></div> */}
                        <img src={profile} alt="" style={{ width: this.state.imgWidth, height: this.state.imgHeight/*, borderRadius: "90%"*/ }} />
                        {/* <div style={{ width: "25%" }}></div> */}
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