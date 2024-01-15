import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {faComputer} from '@fortawesome/free-solid-svg-icons';
import {faListCheck} from '@fortawesome/free-solid-svg-icons';
import {faSnowflake} from '@fortawesome/free-solid-svg-icons';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {faFolder} from '@fortawesome/free-solid-svg-icons';
export default [
    {
        bgColor:"rgb(179, 205, 252)",
        heading: "Profile",
        icon: <FontAwesomeIcon icon={faUser} />,
        first:"I am Computer Science undergrad at BMS College of Engineering, hailing from Rajasthan.",
        second:"I am highly motivated and innovative person, characterized by a unique blend of confidence, humility, and a strong work ethic.",
        third:"I have 2 years of experience in Web and App Development, holds good command in MERN and proficient in Data Structure and Algorithms." 
    },
    {
        bgColor:"rgb(232, 174, 184)",
        heading: "Education",
        icon: <FontAwesomeIcon icon={faBook} />,
        first:"Bachelor of Engineering in Computer Science & Engineering, B.M.S College of Engineering, Autonomous Institute Affiliated by VTU-Bengaluru (CGPA - 8.3).",
        second:"Higher Secondary Education in STech Senior Secondary School - Rajasthan in Science Maths Stream (Percentage - 91%).",
        third:"Primary and Secondary Education in St. Paul's Senior Secondary School - Rajasthan (Percentage - 92%)." 
    },
    {
        bgColor:" rgb(169, 252, 169)",
        heading: "Technical Skills",
        icon: <FontAwesomeIcon icon= {faComputer} />,
        first:"Languages : C, C++, HTML, CSS, JS, PYTHON, JAVA ",
        second:"Frontend : REACT-JS || Backend : NODE JS, EXPRESS JS, PHP || Databases : MONGO DB, MY SQL || GIT AND GITHUB, DATA STRUCTURE AND ALGORITHMS, DOCKER, CI-CD PIPELINE, BOOTSTRAP",
        third:" Design : CANVA, FIGMA, PHOTOSHOP"
    },
    {
        bgColor:"rgb(255, 93, 209)",
        heading: "Projects",
        icon: <FontAwesomeIcon icon={ faListCheck } />,
        first:"HEALTHGURU - A MENTAL AND SPIRITUAL HEALTH WEBSITE",
        second:"V4U - A MENTAL HEALTH WEBSITE ",
        third:"SHOPPING CART SYSTEM" 
    },
    { 
        bgColor: "rgb(245, 233, 119)",
        heading: "Extracurriculars",
        icon: <FontAwesomeIcon icon={ faSnowflake } />,
        first:"Tutor of Mathematics(CBSE, ICSE, IGCSE)",
        second:"Junior Core of Campaigning team in Tech and Cultural Fest ",
        third:"Part of acting club, art club, astronomy club, Dept club and social awareness clubs" 
    },
    {
        bgColor: "rgb(185, 148, 249)",
        heading: "Achievements",
        icon:  <FontAwesomeIcon icon={ faTrophy } />,
        first:"Secured AIR 585 in Comedk Exam, 2021",
        second:"Won multiple Theatre, Elocution and Debate competitions",
        third:"" 
    },
    {
        bgColor: "rgb(222, 184, 135)",
        heading: "Certificates",
        icon:<FontAwesomeIcon icon={ faFolder } />,
        first:"",
        second:"",
        third:"" 
    }
]