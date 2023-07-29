import React from "react";

import {
    AiFillCode,
    AiFillHome,
    AiOutlineGithub
} from "react-icons/ai";

import {BsMedium} from "react-icons/bs";
import {GrResume} from "react-icons/gr";


const menuConfig = {

    sidebarData: [
        {
            id: "menu-0",
            title: "Home",
            path: "/portfolio",
            externalLink:false,
            icon: <AiFillHome size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-1",
            title: "Projects",
            path: "/projects",
            externalLink:false,
            icon: <AiOutlineGithub size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-2",
            title: "Blogs",
            path: "/blogs",
            externalLink:false,
            icon: <BsMedium size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-3",
            title: "Skills",
            path: "/skills",
            externalLink:false,
            icon: <AiFillCode size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-3",
            title: "Resume",
            path: "./resume.pdf",
            externalLink:true,
            icon: <GrResume size={35}/>,
            className: "nav-text"
        }
    ]

}

export default menuConfig
