import { CONSTANTS } from '../components/Data'
import '../css/achievements.css'

export const achievements = [
    {
        "TITLE": "ICPC Regionalist",
        "DATE": "2021-09-01",
        "AWARDER": "Baylor University",
    },
    {
        "TITLE": "3rd Hack36",
        "DATE": "2021-04-10",
        "AWARDER": "College",
        "SUMMARY": "36-hours\nAnnual hackathon\nMNNIT Allahabad"
    },
    {
        "TITLE": "5* Codechef",
        "DATE": "2020-10-05",
        "AWARDER": "Codechef",
        "LOGO": <div className="ach-trophy" style={{ ...(CONSTANTS.light ? { color: CONSTANTS.LIGHT_BGCOLOR[2] } : { color: CONSTANTS.DARK_BGCOLOR[2] } ) }}><i className="fas fa-star"></i></div>,
        "LINK": "https://www.codechef.com/users/ammmy_758000"
    },
    {
        "TITLE": "Expert\nCodeforces",
        "DATE": "2020-10-05",
        "AWARDER": "Codeforces",
        "LINK": "https://codeforces.com/profile/ammmy758000"
    },
    {
        "TITLE": "Top 20 in India\nCTFTime",
        "DATE": "2020-10-05",
        "AWARDER": "CTFTime",
        "LINK": "https://ctftime.org/team/155001"
    },
    {
        "TITLE": "1st CodeWarriors\nAvishkar 2k20",
        "DATE": "2020-10-05",
        "AWARDER": "College"
    },
    {
        "TITLE": "2nd Guardian\nAvishkar 2k20",
        "DATE": "2020-10-05",
        "AWARDER": "College"
    }
]