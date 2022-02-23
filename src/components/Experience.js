import { React, Component } from 'react';
import TechTag from './TechTag';
import { experience } from '../data/experience';
import { CONSTANTS } from './Data';

import '../css/experience.css';

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 0
        };
    }

    changeTab = (shift) => {
        var tab= (this.state.tab + shift) % experience.length;
        if(tab < 0){
            tab += experience.length
        }
        this.setState({
            tab: tab
        })
    }

    render() {
        // const exp = experience[this.state.tab];
        return (
            <div id="exp">
                <div id="exp-exp">
                    { experience.map((exp) => {
                        return <div className="exp-tiel" style={{ ...(CONSTANTS.light ? { backgroundColor: CONSTANTS.LIGHT_BGCOLOR[1] } : { backgroundColor: CONSTANTS.DARK_BGCOLOR[1] }) }}> 
                            {/* Experience Tiel */}
                            <div style={{ fontSize: "20px", margin: "0px auto 0px auto", marginTop: "10px" }}><b>{ exp.POSITION }</b></div>
                            <div style={{ fontSize: "11px", margin: "0px auto 20px auto" }}>{ exp.DURATION }</div>
                            <div id="exp-tiel-logo">
                                <img src={exp.LOGO} alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", margin: "auto" }}/>
                            </div>
                            <a target="_blank" href={exp.ORG_URL} style={{ textDecoration: "none", margin: "10px auto 0px auto" }}>
                                <div style={{ fontSize: "16px" }}>
                                    <b>{ exp.NAME }</b>
                                </div>
                            </a>
                            <div style={{ display: "flex", justifyContent: "center", paddingTop: "5%" }}>
                                <div>
                                    { exp.HIGHLIGHTS.map((hgt) => {
                                        return <div>
                                            <i className="fas fa-play"></i>&nbsp;&nbsp;{hgt}
                                            </div>
                                    }) }
                                </div>
                            </div>
                            { exp.LINK && 
                                <a target="_blank" href={ exp.LINK } style={{ textDecoration: "none", margin: "5% auto 0px auto" }}>
                                    <div id="exp-github-btn">
                                        <i class="fab fa-github"></i>
                                        &nbsp;GITHUB
                                    </div>
                                </a> 
                            }
                            <div style={{ display: "flex", margin: "5% auto 10px auto"}}>
                                { exp.TECHNOLOGIES.map((tech) => {
                                    return <TechTag tech={tech} fontSize="12px" color="white" ></TechTag>
                                }) }
                            </div>
                        </div>
                    }) }
                </div>
            </div>
        );
    }
}

export default Experience;