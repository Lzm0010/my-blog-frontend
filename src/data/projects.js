import robet from '../images/robet.png';
import ontask from '../images/ontask.png';

const projects = [
    {
        id: 'proj1',
        title: "RoBet",
        img: robet,
        sourceCode: "https://github.com/users/Lzm0010/projects/1",
        demo: "https://robet.netlify.app",
        summary: "A machine learning bot that predicts sports scores based on regression algorithms, app able to track bets and compare performance vs machine",
        info: [
            "Utilized JSON Web Tokens and localStorage to store encrypted user information client-side",
            "Developed Flask API & Rails API with endpoints for bets, events, leagues & training and predicting with Machine Learning methods",
            "Rake task to daily seed sports information from Rundown API by creating a cron job",
            "Implemented user interface employing React and Hooks API with Material-React for styling", 
            "Created Illustrations with Adobe Illustrator using shape and pen tools" 
        ],
        date: "05/2020"
    },
    {
        id: 'proj2',
        title: "On Task",
        img: ontask,
        sourceCode: "https://github.com/users/Lzm0010/projects/2",
        demo: "https://www.beontask.com",
        summary: "A planner app for mapping out and measuring goals and projects on a calendar",
        info: [
            "Implemented user interface employing React with Semantic UI for styling",
            "Developed a robust React front end, implemented a state management solution using Hooks API",
            "Built a Rails API backend with endpoints for tasks, goals, projects"
        ],
        date: "06/2020"
    }
];

export default projects;