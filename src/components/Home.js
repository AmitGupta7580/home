import { Component } from 'react';
import BottomBar from './BottomNavBar';

import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';
import image from '../images/comming-soon.jpg'

class Home extends Component {
    render() {
        return (
        <>
            <div className="w3-display-middle">
                <img src={image} alt="" width={"500px"} height={"300px"} />
                <div className="w3-container">
                <h1 style={{ alignItems: "center" }}>
                    Other Pages
                </h1>
                <ul>
                    <li><a target="_blank" href="https://blogs.ammmy.me/">Blogs</a></li>
                    <li><a target="_blank" href="https://writeups.ammmy.me/">Writeups</a></li>
                </ul>
                </div>
            </div>
            <BottomBar/>
        </>
        )
    }  
}

export default Home;