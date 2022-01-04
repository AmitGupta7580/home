import { Component } from 'react';

import '../css/blog.css';

class Blog extends Component {
    render() {
        return this.props.fullscreen ? (
            <div id="blog-large">
                <div id="blog-large-header">
                    <div style={{ width:'85vw' }}>
                        "https://blogs.ammmy.me"
                    </div>
                    <a target="_blank" href="https://blogs.ammmy.me">
                        <div>
                            <i className="fas fa-location-arrow"></i>
                        </div>
                    </a>
                </div>
                <iframe src={"https://blogs.ammmy.me"} title="Blogs Iframe Large" style={{ width: "90vw", height: "85vh"}} />    
            </div>
        ) : (
            <div id="blog-small">
                <div id="blog-small-header">
                    <div style={{ width:'35vw' }}>
                        "https://blogs.ammmy.me"
                    </div>
                    <a target="_blank" href="https://blogs.ammmy.me">
                        <div>
                            <i className="fas fa-location-arrow"></i>
                        </div>
                    </a>
                </div>
                <iframe src={"https://blogs.ammmy.me"} title="Blogs Iframe Small" style={{ width: "40vw", height: "60vh"}} />    
            </div>
        );
    }
}

export default Blog;