import bgimage1 from '../images/bgimage.jpg';
import bgimage2 from '../images/bgimage2.jpg';
import bgimage3 from '../images/bgimage3.jpg';

export const BackgroundImages = [bgimage1, bgimage2, bgimage3, bgimage3, bgimage3, bgimage3];

export const Tabs = {
    ABOUT : {id: 1, open: true, vis: true, x: 425, y: 100, fullscreen: false, short_width: 40, full_width: 90,short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "About | Amit Gupta"},
    EDUCATION : {id: 2, open: false, vis: false, x: 0, y: 0, fullscreen: false, short_width: 40, short_height: 64, full_height: 90, full_width: 90, zIndex: 0, opacity: 1, title: "Education | Amit Gupta"},
    EXPERIENCE : {id: 3, open: false, vis: false, x: 0, y: 0, fullscreen: false, short_width: 40, full_width: 90, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Experience | Amit Gupta"},
    PROJECT : {id: 4, open: false, vis: false, x: 0, y: 0, fullscreen: false, short_width: 40, full_width: 90, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Projects | Amit Gupta"},
    ACHIEVEMENTS : {id: 5, open: false, vis: false, x: 0, y: 0, fullscreen: false, short_width: 40, full_width: 90, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Achievements | Amit Gupta"},
    VOLUNTEER : {id: 6, open: false, vis: false, x: 0, y: 0, fullscreen: false, short_width: 40, full_width: 90, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Volunteer | Amit Gupta"},
    BLOG : {id: 7, open: false, vis: false, x: 0, y: 0, fullscreen: false, short_width: 50, full_width: 90, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Blogs | Amit Gupta"},
    WRITEUP : {id: 8, open: false, vis: false, x: 0, y: 0, fullscreen: false, short_width: 50, full_width: 90, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Writeups | Amit Gupta"},
    GAME : {id: 9, open: false, vis: false, x: 0, y: 0, fullscreen: false, short_width: 40, full_width: 90, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Games"},
    SETTING : {id: 10, open: false, vis: false, x: 0, y: 0, fullscreen: false, short_width: 40, full_width: 90, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Settings"},
    TRASH : {id: 11, open: false, vis: false, x: 0, y: 0, fullscreen: false, short_width: 40, full_width: 90, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Trash"},
};

export const Icons = {
    ABOUT : {class: 'fas fa-portrait', bgColor: 'rgb(245, 129, 62)', color: 'white', transform: '0.9vw, 0.2vw', size: '1.7vw', hint: 'About', hintLeft: 3},
    EDUCATION : {class: 'fas fa-university', bgColor: 'white', color: 'rgb(180, 72, 0)', transform: '0.7vw, 0.2vw', size: '1.7vw', hint: 'Education', hintLeft: 9},
    EXPERIENCE : {class: 'fas fa-graduation-cap', bgColor: 'rgb(255, 96, 92)', color: 'white', transform: '0.5vw, 0.2vw', size: '1.7vw', hint: 'Experience', hintLeft: 17},
    PROJECT : {class: 'fas fa-project-diagram', bgColor: 'white', color: 'red', transform: '0.5vw, 0.3vw', size: '1.7vw', hint: 'Projects', hintLeft: 26},
    ACHIEVEMENTS : {class: 'fas fa-award', bgColor: 'rgb(255, 240, 37)', color: 'black', transform: '0.9vw, 0.2vw', size: '1.7vw', hint: 'Achievements', hintLeft: 32},
    VOLUNTEER : {class: 'fas fa-hands-helping', bgColor: 'rgb(195, 0, 255)', color: 'white', transform: '0.5vw, 0.2vw', size: '1.7vw', hint: 'Volunteer', hintLeft: 42},
    BLOG : {class: 'fas fa-blog', bgColor: 'rgb(122, 243, 41)', color: 'white', transform: '0.8vw, 0.2vw', size: '1.7vw', hint: 'Blogs', hintLeft: 52},
    WRITEUP : {class: 'fas fa-edit', bgColor: 'rgb(34, 173, 115)', color: 'white', transform: '0.6vw, 0.2vw', size: '1.7vw', hint: 'Writeups', hintLeft: 59},
    GAME : {class: 'fas fa-gamepad', bgColor: 'rgb(36, 52, 201)', color: 'white', transform: '0.5vw, 0.2vw', size: '1.7vw', hint: 'Games', hintLeft: 68},
    SETTING : {class: 'fas fa-cogs', bgColor: 'white', color: 'rgb(110, 105, 105)', transform: '0.5vw, 0.2vw', size: '1.7vw', hint: 'Settings', hintLeft: 75},
    TRASH : {class: 'fas fa-trash', bgColor: 'white', color: 'black', transform: '0.7vw, 0.2vw', size: '1.7vw', hint: 'Trash', hintLeft: 85}
}

export const CONSTANTS = {
    idxcount: 3,
    bgidx: 0
}