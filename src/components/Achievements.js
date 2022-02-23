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
                            <div style={{ textAlign: "center" }}>{ ach.TITLE }</div>
                            <div style={{ textAlign: "center", fontSize: "11px", marginTop: "15px" }}>{ ach.SUMMARY }</div>
                        </div>
                    }) }
                </div>
            </div>
        )
    }
}

export default Achievements;