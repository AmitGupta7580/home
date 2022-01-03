export const Tabs = {
    ABOUT : {idx: 1, open: true, vis: true, x: 250, y: 100, fullscreen: false, short_width: 40, full_width: 90, zIndex: 0, title: "About | Amit Gupta"},
    PROJECT : {idx: 2, open: false, vis: false, x: 250, y: 150, fullscreen: false, short_width: 40, full_width: 90, zIndex: 0, title: "Projects | Amit Gupta"},
    BLOG : {idx: 3, open: false, vis: false, x: 250, y: 200, fullscreen: false, short_width: 40, full_width: 90, zIndex: 0, title: "Blogs | Amit Gupta"},
    WRITEUP : {idx: 0, open: false, vis: false, x: 250, y: 100, fullscreen: false, short_width: 40, full_width: 90, zIndex: 0, title: "Writeups | Amit Gupta"},
    GAME : {idx: 0, open: false, vis: false, x: 250, y: 100, fullscreen: false, short_width: 40, full_width: 90, zIndex: 0, title: "Games"},
    SETTING : {idx: 0, open: false, vis: false, x: 250, y: 100, fullscreen: false, short_width: 40, full_width: 90, zIndex: 0, title: "Settings"},
    TRASH : {idx: 0, open: false, vis: false, x: 250, y: 100, fullscreen: false, short_width: 40, full_width: 90, zIndex: 0, title: "Trash"},
    idxcount: 3,
};

export const Icons = {
    ABOUT : {class: 'fas fa-portrait', bgColor: 'rgb(245, 129, 62)', color: 'white', transform: '0.9vw, 0.2vw', size: '1.7vw'},
    PROJECT : {class: 'fas fa-project-diagram', bgColor: 'white', color: 'red', transform: '0.5vw, 0.3vw', size: '1.7vw'},
    BLOG : {class: 'fas fa-blog', bgColor: 'rgb(122, 243, 41)', color: 'white', transform: '0.8vw, 0.2vw', size: '1.7vw'},
    WRITEUP : {class: 'fas fa-edit', bgColor: 'rgb(34, 173, 115)', color: 'white', transform: '0.6vw, 0.2vw', size: '1.7vw'},
    GAME : {class: 'fas fa-gamepad', bgColor: 'rgb(36, 52, 201)', color: 'white', transform: '0.5vw, 0.2vw', size: '1.7vw'},
    SETTING : {class: 'fas fa-cogs', bgColor: 'white', color: 'rgb(110, 105, 105)', transform: '0.5vw, 0.2vw', size: '1.7vw'},
    TRASH : {class: 'fas fa-trash', bgColor: 'white', color: '105, 105, 105)', transform: '0.7vw, 0.2vw', size: '1.7vw'}
}

export function tabs_compare(a,b) {
    return a.idx - b.idx;
}