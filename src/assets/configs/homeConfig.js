import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Prince Choudhary</strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Machine Learning Specialist",
        "An AI Enthusiast with an Artistic touch :)",
        "Backend Developer"
    ],
    about: {
        start: "Like many others, My initial interest lay in web development. " +
            "I started my career as a web developer after connecting with data analytical professionals. " +
            "I realize my passion for Data Analytics." ,
        exit: "Data Science has been my point of interest for about a year now " +
            "and my major interest lies in Machine Learning.."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Web Application Developer",
            company: "SUREBOT",
            description: "Created Rest-APIs with Django-Rest, Database with mysql and also " +
                "worked on Frontend with Bootstrap for HRMS Web App.",
            date: "March 2022 - May 2022",
            icon: <DiCodeigniter/>,
            tags: ["Django", "Python", "HTML", "CSS", "Bootstrap", "Postman"]
        },
        /*
        {
            id: "work-2",
            title: "BI Manager",
            company: "Rappi",
            description: "Leading a team of analysts and data scientists to execute different projects, " +
                "including the construction of ETLs, data lakes, data warehouses, and machine learning models.",
            date: "2019-2021",
            icon: <FaMobileAlt/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-1",
            title: "CRM Analytics Coordinator",
            company: "Avianca",
            description: "Tech leader of a BI, Data Science and DBA team. " +
                "Build forecast models, data warehouse and Power BI dashboards.",
            date: "2018-2019",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        {
            id: "work-0",
            title: "BI Analyst",
            company: "Onelink BPO",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "2016-2018",
            icon: <BsClipboardData/>,
            tags: ["python", "mssql", "pbi", "excel"]
        }
        */
    ]
}


export default homeConfig