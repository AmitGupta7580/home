import { Component } from 'react';
import { achievements } from '../data/achievements';

import '../css/achievements.css'

class Achievements extends Component {
    render() {
        return (
            <div id="ach">
                <div id="ach-tiels">
                    { achievements.map((ach) => {
                        return <div className="ach-tiel">
                            { ach.LOGO ? ach.LOGO : <div className="ach-trophy"><i class="fas fa-trophy"></i></div> }
                            <div style={{ textAlign: "center", whiteSpace: "pre" }}>{ ach.TITLE }</div>
                            { ach.SUMMARY  && <div style={{ textAlign: "center", fontSize: "11px", marginTop: "15px", whiteSpace: "pre" }}>{ ach.SUMMARY }</div> }
                            { ach.LINK  && 
                            <div style={{ height: "25px", width: "25px", borderRadius: "25px", backgroundColor: "white", textAlign: "center", margin: "25px auto 0px auto" }}>
                                    <a href={ ach.LINK }>
                                        <i className="fas fa-link"></i>
                                    </a>
                            </div>}
                        </div>
                    }) }
                </div>
            </div>
        )
    }
}

export default Achievements;