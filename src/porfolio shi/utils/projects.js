
import todoImage from '../../assets/todo(2).png'
import QH from '../../assets/QuickHomes.png'
export const projects = [
  {
     image:QH ,
    title: "QuickHomes",
    category: "Web App",
    language: ["HTML", "CSS"],
    description:"Front-end for an accomodation startup"
  },
  {
 image: todoImage,
    title: "Todo-list App",
    category: "Web App",
    language: ["Reactjs","CSS","JavaScript","Netlify"],
    description: "A user friendly and easy to use responsive webapp for managing tasks",
    githubRepos:"https://github.com/Psamm-y/Todo-list-app",
    link:"https://psammy-todos.netlify.app/" 
  },
  {
    title: "Simple Calculator",
    category: "Web App",
    language: ["Reactjs","CSS"],
    description: "A simple calculator but unlike every other, on the web.",
    githubRepos: "",
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
  }
  
}