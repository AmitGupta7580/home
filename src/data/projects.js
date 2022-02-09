import portfolio from '../images/portfolio.jpg';
import session_manager from '../images/session_manager.jpg';
import roulette from '../images/roulette.jpg';
import soa from '../images/soa.jpg';
import voice_call from '../images/voice_call.jpg';
import airsim_rc from '../images/airsim_rc.jpg';
import quantum_simulator from '../images/quantum_simulator.jpg';
import hex_it from '../images/hex_it.jpg';
import fb_bot from '../images/fb_bot.jpg';
import mnnit_query from '../images/mnnit_query.jpg';
import digi_share from '../images/digi_share.jpg';
import byakugan from '../images/byakugan.jpg';

export const projects = [
    {
        "NAME": "Portfolio Website",
        "DESCRIPTION": "An interactive Personal Website for showcasing my projects and achievements",
        "IMAGE": portfolio,
        "LINK": "https://ammmy.me",
        "CODE": "https://github.com/AmitGupta7580/AmitGupta7580.github.io",
        "VIDEO": "",
        "TECH": [
            "JavaScript",
            "ReactJS", 
            "GH-PAGES",
        ],
        "KEYWORDS": ["REACTJS"],
        "BRANCH": ["WEB"],
        "TYPE": "MAJOR"
    }, {
        "NAME": "Session Manager",
        "DESCRIPTION": "A Chrome extension for managing various sessions for same website in the same window",
        "IMAGE": session_manager,
        "LINK": "",
        "CODE": "https://github.com/AmitGupta7580/Session-Manager",
        "VIDEO": "",
        "TECH": ["JavaScript"],
        "KEYWORDS": ["JS"],
        "BRANCH": ["WEB"],
        "TYPE": "MINOR"
    }, {
        "NAME": "Roulette Game",
        "DESCRIPTION": "A CLI based Stake Game made with the help of @solana/web3.js npm package.",
        "IMAGE": roulette,
        "LINK": "",
        "CODE": "https://github.com/AmitGupta7580/Roulette-game-Solana-Web3",
        "VIDEO": "",
        "TECH": [
            "Javascript", 
            "Solana", 
        ],
        "KEYWORDS": ["SOLANA"],
        "BRANCH": ["BLOCKCHAIN"],
        "TYPE": "MINOR"
    }, {
        "NAME": "Static Vehicle Avoidance",
        "DESCRIPTION": "Automating a Vehicle to avoid static obstacles while following the lanes in Carla Simulator",
        "IMAGE": soa,
        "LINK": "",
        "CODE": "https://github.com/AmitGupta7580/Static_vehicle_avoidance_carla",
        "VIDEO": "",
        "TECH": [
            "Carla", 
            "Semantic Segmentation", 
        ],
        "KEYWORDS": ["ML", "SELF-DRIVING CAR"],
        "BRANCH": ["ROBOTICS"],
        "TYPE": "MAJOR"
    }, {
        "NAME": "Voice Call CLI",
        "DESCRIPTION": "Implement a CLI Voice Calling Application and deployed on Azure Cloud",
        "IMAGE": voice_call,
        "LINK": "",
        "CODE": "https://github.com/AmitGupta7580/Voice-Call-CLI",
        "VIDEO": "",
        "TECH": [
            "Java", 
            "Azure",
        ],
        "KEYWORDS": [
            "JAVA", 
            "AZURE",
        ],
        "BRANCH": ["JAVA", "CLOUD"],
        "TYPE": "MINOR"
    }, {
        "NAME": "Airsim RC",
        "DESCRIPTION": "Remote Control App to control Drone in Airsim",
        "IMAGE": airsim_rc,
        "LINK": "",
        "CODE": "https://github.com/AmitGupta7580/AirSim_RC",
        "VIDEO": "",
        "TECH": [
            "Airsim", 
            "Android",
        ],
        "KEYWORDS": ["ANDROID"],
        "BRANCH": ["ANDROID"],
        "TYPE": "MINOR"
    }, {
        "NAME": "Quantum Simulator",
        "DESCRIPTION": "A Simulator which can perform quantum circuits on Classical Computer",
        "IMAGE": quantum_simulator,
        "LINK": "http://quantum-simulator-project.herokuapp.com/",
        "CODE": "https://github.com/AmitGupta7580/Quantum_Simulator",
        "VIDEO": "",
        "TECH": [
            "Quantum Circuits", 
            "JavaScript",
        ],
        "KEYWORDS": ["QUANTUM CIRCUITS", "JS"],
        "BRANCH": ["QUANTUM COMPUTING", "WEB"],
        "TYPE": "MAJOR"
    }, {
        "NAME": "Hex-It",
        "DESCRIPTION": "Hex-Editor made for Desktop application",
        "IMAGE": hex_it,
        "LINK": "",
        "CODE": "https://github.com/AmitGupta7580/Hex-It",
        "VIDEO": "",
        "TECH": ["JAVA"],
        "KEYWORDS": ["JAVA"],
        "BRANCH": ["JAVA"],
        "TYPE": "MINOR"
    }, {
        "NAME": "Facebook Bot",
        "DESCRIPTION": "A Automated Bot to make facebook posts",
        "IMAGE": fb_bot,
        "LINK": "",
        "CODE": "https://github.com/AmitGupta7580/Facebook_Bot",
        "VIDEO": "",
        "TECH": ["Python"],
        "KEYWORDS": ["PYTHON"],
        "BRANCH": ["WEB"],
        "TYPE": "MINOR"
    }, {
        "NAME": "MNNITians_any_query",
        "DESCRIPTION": "A Forum website to increase the intraction between juniors and seniors",
        "IMAGE": mnnit_query,
        "LINK": "",
        "CODE": "https://github.com/AmitGupta7580/MNNITians_any_query",
        "VIDEO": "",
        "TECH": [
            "Php", 
            "Javascript", 
            "SOL"
        ],
        "KEYWORDS": ["PHP", "JS", "SQL"],
        "BRANCH": ["WEB"],
        "TYPE": "MAJOR"
    }, {
        "NAME": "Digi-Share",
        "DESCRIPTION": "DiGi Share app is made to share applications through hotspot with nearby devices",
        "IMAGE": digi_share,
        "LINK": "",
        "CODE": "https://github.com/rdx-rockstar/Droidrush2020",
        "VIDEO": "",
        "TECH": [
            "Flutter", 
            "Firebase", 
            "Dart"
        ],
        "KEYWORDS": [
            "FLUTTER", "FIREBASE"
        ],
        "BRANCH": ["ANDROID", "FLUTTER"],
        "TYPE": "MAJOR"
    }, {
        "NAME": "Byakugan",
        "DESCRIPTION": "An app for women's safety, provides features for instant help",
        "IMAGE": byakugan,
        "LINK": "",
        "CODE": "https://github.com/rdx-rockstar/Byakugan",
        "VIDEO": "",
        "TECH": [
            "Flutter", 
            "Firebase", 
            "Dart",
            "NodeJS"
        ],
        "KEYWORDS": [
            "FLUTTER", "FIREBASE", "NODEJS"
        ],
        "BRANCH": ["ANDROID", "FLUTTER", "WEB"],
        "TYPE": "MINOR"
    }
]