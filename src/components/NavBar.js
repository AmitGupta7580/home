import '../css/intro.css';
import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';
import $ from 'jquery';

function LinkBar() {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
    <div className="w3-top w3-container">
        <div className="w3-display-topleft w3-padding-large w3-xlarge w3-text-white" onClick={(e) => (async () => {
            var counter = 0;
            if($('.link')[0].style.display === "none" || $('.link')[0].style.display === ""){
                while(counter !== 11){
                    $('.link').each(function(){
                        $(this)[0].style.display = "block";
                        $(this)[0].style.opacity = counter/10;
                        $(this)[0].style.transform = "translateY(" + (4*counter - 40) + "px)";
                        // console.log($(this)[0].style.display);
                    });
                    counter += 1;
                    await sleep(25);
                }
            } else {
                while(counter !== 10){
                    $('.link').each(function(){
                        $(this)[0].style.opacity = 1 - counter/10;
                        $(this)[0].style.transform = "translateY(-" + 4*counter + "px)";
                    });
                    counter += 1;
                    await sleep(25);
                }
                $('.link').each(function(){
                  $(this)[0].style.display = "none";
                });
            }
        })()}>
            <span className="link-circle"></span>
            <i className="fas fa-link link-btn"></i>
        </div>
        <div className="link w3-display-topleft w3-xlarge w3-text-white" style={{ paddingTop: "72px", paddingLeft: "24px" }}>
            <a href="https://www.linkedin.com/in/amit-gupta-7580/" target="_blank">
                <span className="link-circle" style={{ backgroundColor: "#2867B2" }}></span>
                <i className="fab fa-linkedin link-btn" style={{ transform: "translate(15px, 13px)" }}></i>
            </a>
        </div>
        <div className="link w3-display-topleft w3-xlarge w3-text-white" style={{ paddingTop: "128px", paddingLeft: "24px" }}>
            <a href="https://github.com/AmitGupta7580" target="_blank">
                <span className="link-circle"></span>
                <i className="fab fa-github link-btn"></i>
            </a>
        </div>
        <div className="link w3-display-topleft w3-xlarge w3-text-white" style={{ paddingTop: "184px", paddingLeft: "24px" }}>
            <a href="https://www.youtube.com/channel/UC7WE1ZcP5e9t7WTo3Fg8o7g" target="_blank">
                <span className="link-circle" style={{ backgroundColor: "#FF0000" }}></span>
                <i className="fab fa-youtube link-btn" style={{ transform: "translate(11px, 13px)" }}></i>
            </a>
        </div>
        <div className="link w3-display-topleft w3-xlarge w3-text-white" style={{ paddingTop: "240px", paddingLeft: "24px" }}>
            <a href="mailto: amit758000@gmail.com">
                <span className="link-circle" style={{ backgroundColor: "#ff811b" }}></span>
                <i className="fab fa-google link-btn"></i>
            </a>
        </div>
        <div className="link w3-display-topleft w3-xlarge w3-text-white" style={{ paddingTop: "296px", paddingLeft: "24px" }}>
            <a href="https://registry.jsonresume.org/AmitGupta7580" target="_blank">
                <span className="link-circle" style={{ backgroundColor: "#008b79" }}></span>
                <i className="far fa-file link-btn" style={{ transform: "translate(16px, 13px)" }}></i>
            </a>
        </div>
    </div>
    );
}

export default LinkBar;