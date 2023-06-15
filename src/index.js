import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js"
import About from './components/about.js';
import Experience from './components/experience.js';
import Education from './components/education.js';
import Routertest from './components/routertest.js';
import Skills_And_Achivements from './components/skills_and_achivements.js';
import Projects from "./components/Projects.js"

function Func1(){
  return (
    <>
    <App/>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Func1/>);

