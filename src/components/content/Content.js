import { React, Fragment, useEffect, useState } from 'react';
import Page from './Page';
import AboutPage from '../../pages/AboutPage';
import SkillPage from '../../pages/SkillPage';
import ExperiencePage from '../../pages/ExperiencePage';
import ProjectPage from '../../pages/ProjectPage';

const Content = () => {
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
        })
    }

    useEffect(() => getData(), []);

    return (
       <Fragment>
           <Page id = "about" title = "ABOUT" component = {AboutPage}/>
           <Page id = "skill" title = "SKILLS" component = {SkillPage}/>
           <Page id = "experience" title = "EXPERIENCES" component = {ExperiencePage} data = {experiences}/>
           <Page id = "project" title = "PROJECTS" component = {ProjectPage} data = {projects}/>
       </Fragment>
   );
}

export default Content;
