import {
    SiPython,
    SiScikitlearn,
    SiDjango,
    SiTensorflow,
    SiPandas,
    SiNumpy,
    SiGithub,
    SiCss3,
    SiHtml5,
    SiBootstrap,
    SiFlask,
    SiOpencv,
    SiPostman,
    SiMongodb
} 
from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikit-Learn"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiTensorflow size={50}/>,
            text: "Tensorflow"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiPandas size={50}/>,
            text: "Pandas"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiNumpy size={50}/>,
            text: "Numpy"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiDjango size={50}/>,
            text: "Django"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiFlask size={50}/>,
            text: "Flask"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiGithub size={50}/>,
            text: "Github"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiOpencv size={50}/>,
            text: "Open CV"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiPostman size={50}/>,
            text: "Postman"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiMongodb size={50}/>,
            text: "Mongodb"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiBootstrap size={50}/>,
            text: "Bootstrap"
        }
    ]
}

export default skillsConfig
