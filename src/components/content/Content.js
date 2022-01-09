import { React, Fragment, useEffect, useState } from 'react';
import Page from './Page';
import AboutPage from '../../pages/AboutPage';
import SkillPage from '../../pages/SkillPage';
import ExperiencePage from '../../pages/ExperiencePage';
import ProjectPage from '../../pages/ProjectPage';
import EducationPage from '../../pages/EducationPage';

const Content = () => {
    const [education, setEducation] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [projects, setProjects] = useState({});

    const getData = () => {
        fetch(
            'content.json', 
            { headers: 
                { 
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json'
                }
            }
        ).then((response) => {
            return response.json();
        }).then((res) => {
            setExperiences(res.experiences);
            setProjects(res.projects);
            setEducation(res.education);
        })
    }

    useEffect(() => getData(), []);

    return (
       <Fragment>
           <a href = "top"/>
           
           <Page id = "about" title = "ABOUT" component = {AboutPage}/>
           <Page id = "skill" title = "SKILLS" component = {SkillPage}/>
           <Page id = "experience" title = "EXPERIENCES" component = {ExperiencePage} data = {experiences}/>
           <Page id = "project" title = "PROJECTS" component = {ProjectPage} data = {projects}/>
           <Page id = "education" title = "EDUCATION" component = {EducationPage} data = {education}/>
           <div class="back-to-top-wrapper">
               <a href="#top" class="back-to-top-link" aria-label="Scroll to Top">🔝</a>
           </div>
       </Fragment>
   );
}

export default Content;
