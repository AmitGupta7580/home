import bgimage1 from '../images/bgimage.jpg';
import bgimage2 from '../images/bgimage2.jpg';
import bgimage3 from '../images/bgimage3.jpg';

export const BackgroundImages = [bgimage1, bgimage2, bgimage3, bgimage3, bgimage3, bgimage3];

export const Tabs = {
    ABOUT : {id: 1, open: true, vis: true, left: 50, top: 50, fullscreen: false, short_width: 40, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "About | Amit Gupta"},
    EXPERIENCE : {id: 2, open: false, vis: false, left: 0, top: 0, fullscreen: false, short_width: 40, short_height: 74, full_height: 90, zIndex: 0, opacity: 1, title: "Experience | Amit Gupta"},
    PROJECT : {id: 3, open: false, vis: false, left: 0, top: 0, fullscreen: false, short_width: 55, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Projects | Amit Gupta"},
    ACHIEVEMENTS : {id: 4, open: false, vis: false, left: 0, top: 0, fullscreen: false, short_width: 40, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Achievements | Amit Gupta"},
    // VOLUNTEER : {id: 5, open: false, vis: false, left: 0, top: 0, fullscreen: false, short_width: 40, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Volunteer | Amit Gupta"},
    BLOG : {id: 6, open: false, vis: false, left: 0, top: 0, fullscreen: false, short_width: 50, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Blogs | Amit Gupta"},
    WRITEUP : {id: 7, open: false, vis: false, left: 0, top: 0, fullscreen: false, short_width: 50, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Writeups | Amit Gupta"},
    GAME : {id: 8, open: false, vis: false, left: 0, top: 0, fullscreen: false, short_width: 40, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Games"},
    SETTING : {id: 9, open: false, vis: false, left: 0, top: 0, fullscreen: false, short_width: 40, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Settings"},
    // TRASH : {id: 11, open: false, vis: false, left: 0, top: 0, fullscreen: false, short_width: 40, short_height: 64, full_height: 90, zIndex: 0, opacity: 1, title: "Trash"},
};

export const Icons = {
    ABOUT : {class: 'fas fa-portrait', bgColor: 'rgb(245, 129, 62)', color: 'white', transform: '63%, 10%', hint: 'About'},
    EXPERIENCE : {class: 'fas fa-graduation-cap', bgColor: 'rgb(255, 96, 92)', color: 'white', transform: '20%, 3%', hint: 'Experience'},
    PROJECT : {class: 'fas fa-project-diagram', bgColor: 'white', color: 'red', transform: '20%, 12%', hint: 'Projects'},
    ACHIEVEMENTS : {class: 'fas fa-award', bgColor: 'rgb(255, 240, 37)', color: 'black', transform: '63%, 8%', hint: 'Achievements'},
    // VOLUNTEER : {class: 'fas fa-hands-helping', bgColor: 'rgb(195, 0, 255)', color: 'white', transform: '20%, 8%', hint: 'Volunteer'},
    BLOG : {class: 'fas fa-blog', bgColor: 'rgb(122, 243, 41)', color: 'white', transform: '40%, 5%', hint: 'Blogs'},
    WRITEUP : {class: 'fas fa-edit', bgColor: 'rgb(34, 173, 115)', color: 'white', transform: '30%, 5%', hint: 'Writeups'},
    GAME : {class: 'fas fa-gamepad', bgColor: 'rgb(36, 52, 201)', color: 'white', transform: '17%, 5%', hint: 'Games'},
    SETTING : {class: 'fas fa-cogs', bgColor: 'white', color: 'rgb(110, 105, 105)', transform: '20%, 8%', hint: 'Settings'},
    // TRASH : {class: 'fas fa-trash', bgColor: 'white', color: 'black', transform: '45%, 5%', hint: 'Trash'}
}

export const CONSTANTS = {
    idxcount: 3,
    bgidx: 0,
    light: false,
    LIGHT_BGCOLOR: ["white", "#d3d3d3", "rgb(255, 198, 40)"],
    DARK_BGCOLOR: ["#2e3133", "#484f58", "rgb(246,190,0)"]
}