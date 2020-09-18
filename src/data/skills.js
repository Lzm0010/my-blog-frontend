import js from '../images/js.png';
import rails from '../images/rails.png';
import ai from '../images/ai.png';
import psql from '../images/psql.png';

const skills = [
    {
        title: "FrontEnd",
        skills: [
            "javaScript",
            "React",
            "Vue.js",
            "Redux"
        ],
        image: js
    },
    {
        title: "BackEnd",
        skills: [
                "javaScript",
                "Express",
                "Node.js",
                "Ruby",
                "Rails",
                "Python",
                "Flask"
            ],
        image: rails
    },
    {
        title:"Database",
        skills: [
            "SQL",
            "PostgreSQL",
            "MongoDB"
        ], 
        image: psql
    },
    {
        title:"Other", 
        skills: [
            "Git",
            "Linux",
            "Adobe Illustrator"
        ],
        image: ai
    }
]


export default skills;