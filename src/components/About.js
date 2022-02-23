import { Component } from 'react';
import { about } from '../data/about';

import '../css/about.css';
import profile from '../images/profile.jpg'
import { CONSTANTS, Tabs } from './Data';

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
                        <div style={{ fontSize: "150%" }}><b>{ about.NAME }</b></div>
                        <div>{ about.DOB }</div>
                        <div style={{ height: "3%" }}></div>
                        <div style={{ whiteSpace: 'pre' }}>{ about.RESIDENCE }</div>
                    </div>
                </div>
                <div style={{ width: "62.5%", height: "100%"}}>
                    <div id="about-longdes" style={{ ...(CONSTANTS.light ? { backgroundColor: CONSTANTS.LIGHT_BGCOLOR[1] } : { backgroundColor: CONSTANTS.DARK_BGCOLOR[1] } ) }}>
                        <div style={{ fontSize: "130%" }}><b>{ about.DES_TITLE }</b></div>
                        <div>{ about.DESCRIPTION }</div>
                        <div className="about-longdes-heading" >
                            <h5>EDUCATION</h5>
                        </div>
                        { about.EDUCATION.map((edu) => {
                            return (
                                <div style={{ marginBottom: "2%" }}>
                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "25px", height: "25px", borderRadius: "25px",textAlign: "center", ...(CONSTANTS.light ? { backgroundColor: CONSTANTS.LIGHT_BGCOLOR[0] } : { backgroundColor: CONSTANTS.DARK_BGCOLOR[0] }) }}>
                                            { edu.URL !== "" && <a href={ edu.URL }><i className="fas fa-university"></i></a>}
                                            { edu.URL === "" && <i className="fas fa-university"></i>}
                                        </div>
                                        &nbsp;&nbsp;<b>{ edu.DEGREE }</b>
                                    </div>
                                    <div style={{ position: "relative", left: "12px", borderLeft: "2px solid grey", paddingLeft: "25px" }}>
                                        { edu.INSTITUTE } <br/>
                                        ( { edu.GRADE } )
                                    </div>
                                </div>
                            )
                        }) }
                        <div className="about-longdes-heading" >
                            <h5>AREA OF INTREST</h5>
                        </div>
                        <div className="about-longdes-list">
                            { about.AREA_OF_INTEREST.map((field) => {
                                return <div className="about-longdes-list-item">{ field }</div>
                            }) }
                        </div>
                        <div className="about-longdes-heading" >
                            <h5>KNOWN LANGUAGES</h5>
                        </div>
                        <div className="about-longdes-list">
                            { about.LANGUAGES.map((field) => {
                                return <div className="about-longdes-list-item">{ field }</div>
                            }) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;