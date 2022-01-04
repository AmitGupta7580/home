import { Component } from 'react';

class Blog extends Component {
    render() {
        return this.props.fullscreen ? (
            <div>About Page full screen</div>
        ) : (
            <div id="blog-small">
                
            </div>
        );
    }
}

export default Blog;