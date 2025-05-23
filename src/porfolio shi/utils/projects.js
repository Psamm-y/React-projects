
import todoImage from '../../assets/todo(2).png'
import QH from '../../assets/QuickHomes.png'
import QH2 from '../../assets/QH2.png'
export const projects = [
  {
     image:QH2 ,
    title: "QuickHomes",
    category: "Web App",
    language: ["Reactjs", "TailwindCSS","JavaScript"],
    description: "Front-end for an accomodation startup",
    githubRepos: "https://github.com/Psamm-y/QuickHomes-refactored",
    delay:"200ms"
  },
  {
 image: todoImage,
    title: "Todo-list App",
    category: "Web App",
    language: ["Reactjs","CSS","JavaScript","Netlify"],
    description: "A user friendly and easy to use responsive webapp for managing tasks",
    githubRepos:"https://github.com/Psamm-y/Todo-list-app",
    link: "https://psammy-todos.netlify.app/" ,
     delay:"400ms"
  },
  {
    title: "Simple Calculator",
    category: "Web App",
    language: ["Reactjs","CSS"],
    description: "A simple calculator but unlike every other, on the web.",
    githubRepos: "",
     delay:"600ms"
  },
  {
    title: "Student Grade Tracker",
    category: "Desktop App",
    language: ["Java"],
    description: "An application that allows users to add, remove, calculate student grades etc. ",
    githubRepos: "https://github.com/Psamm-y/Java-dev/tree/main/StudentGradeTracker",
     delay:"800ms"
  }
];
export const languageStyles = {
  "HTML": {

    color: "#FFA07A"
  },
  
  "CSS": {
    color: "#563D7C"
  },
  "Reactjs": {
    color: "#61DAFB"
  },
  "JavaScript": {
  color:"#F7DF1E"
  },
  "Netlify": {
    color: "#3E9D9D"
  },
  "Java": {
    color: "#007396"
  }, "TailwindCSS":
  {
    color:"#38B2AC"
  }
}
export const buttonStyles = {
  "Web App": {
    color: "#0580ec",
      backgroundColor: "#b6cde0"
  },
  "Desktop App": {
    color: "#582800",
    backgroundColor:"#e0a16d"
  }
}